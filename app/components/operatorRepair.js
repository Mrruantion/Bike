import React from 'react'
import { Table, Input, Popconfirm, Select } from 'antd';
const Option = Select.Option;

class EditableCell extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: this.props.value,
            editable: this.props.editable || false,
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.editable !== this.state.editable) {
            this.setState({ editable: nextProps.editable });
            if (nextProps.editable) {
                this.cacheValue = this.state.value;
            }
        }
        if (nextProps.status && nextProps.status !== this.props.status) {
            if (nextProps.status === 'save') {
            this.props.onChange(this.state.value);
            } else if (nextProps.status === 'cancel') {
                this.setState({ value: this.cacheValue });
                this.props.onChange(this.cacheValue);
            }
        }  
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.editable !== this.state.editable ||
            nextState.value !== this.state.value;
    }
    handleChange(value) {
		console.log(value);
        this.setState({ value });
    }
    render() {
        const { value, editable } = this.state;
        return (<div>
        {
			editable ?
			<div>
			   <Select
                    style={{ width: 100 }}
                    onChange={this.handleChange.bind(this)}
                >
                    <Option value="正在使用">正在使用</Option>
                    <Option value="冻结">冻结</Option>
                    <Option value="已注销">已注销</Option>
                </Select>
			</div>
			:
			<div className="editable-row-text">
			  {value || ' '}
			</div>
		}
		</div>);
	}
}

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User',    // Column configuration not to be checked
  }),
};

class OperatorRepair extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [{
      title: '姓名',
      dataIndex: 'username',
      width: 100,
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'username', text),
    }, {
      title: '昵称',
      dataIndex: 'othername',
      width: 100,
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'othername', text),
    }, {
      title: '年龄',
      dataIndex: 'age',
      width: 100,
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'age', text),
    }, {
      title: '身份证号',
      dataIndex: 'idcard',
      width: 100,
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'idcard', text),
    }, {
      title: '电话号码',
      dataIndex: 'phone',
      width: 100,
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'phone', text),
    }, {
      title: '性别',
      dataIndex: 'gender',
      width: 100,
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'gender', text),
    }, {
      title: '用户状态',
      dataIndex: 'userStatus',
      width: 100,
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'userStatus', text),
    }, {
      title: '账户状态',
      dataIndex: 'countStatus',
      width: 100,
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'countStatus', text),
    }, {
	  width: 100,
      title: '操作',
      dataIndex: 'operation',
      render: (text, record, index) => {
        const { editable } = this.state.data[index].userStatus;
        return (<div className="editable-row-operations">
          {
            editable ?
            <span>
              <a onClick={() => this.editDone(index, 'save')}>保存</a>
              <Popconfirm title="确定取消?" onConfirm={() => this.editDone(index, 'cancel')}>
                <a>取消</a>
              </Popconfirm>
            </span>
            :
            <span>
              <a onClick={() => this.edit(index)}>修改</a>
            </span>
          }
        </div>);
      },
    }];
    this.state = {
      data: [{
        key: '0',
        username: {
          value: 'Edward King 0',
        },
		othername: {
          value: '艾德华纽盖特',
        },
        age: {
          value: '32',
        },
		idcard: {
          value: 'London, k Lane no. 0',
        },
        phone: {
          value: '185445444521',
        },
		gender: {
          value: '男',
        },
		userStatus: {
		  editable: false,
          value: '正在使用',
        },
		countStatus: {
	      editable: false,
          value: '正在使用',
        }
      },{
        key: '1',
        username: {
          value: 'Edward King 0',
        },
		othername: {
          value: '艾德华纽盖特',
        },
        age: {
          value: '32',
        },
		idcard: {
          value: 'London, k Lane no. 0',
        },
        phone: {
          value: '185445444521',
        },
		gender: {
          value: '男',
        },
		userStatus: {
		  editable: false,
          value: '正在使用',
        },
		countStatus: {
		  editable: false,
          value: '正在使用',
        }
      }
	  ],
    };
}
  renderColumns(data, index, key, text) {
    const { editable, status } = data[index][key];
    if (typeof editable === 'undefined') {
      return text;
    }
    return (<EditableCell
      editable={editable}
      value={text}
      onChange={value => this.handleChange(key, index, value)}
      status={status}
    />);
  }
  handleChange(key, index, value) {
    const { data } = this.state;
    data[index][key].value = value;
    this.setState({ data });
  }
  edit(index) {
    const { data } = this.state;
    Object.keys(data[index]).forEach((item) => {
      if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
        data[index][item].editable = true;
      }
    });
    this.setState({ data });
  }
  editDone(index, type) {
    const { data } = this.state;
    Object.keys(data[index]).forEach((item) => {
      if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
        data[index][item].editable = false;
        data[index][item].status = type;
      }
    });
    this.setState({ data }, () => {
      Object.keys(data[index]).forEach((item) => {
        if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
          delete data[index][item].status;
        }
      });
    });
  }
  render() {
    const { data } = this.state;
    const dataSource = data.map((item) => {
      const obj = {};
      Object.keys(item).forEach((key) => {
        obj[key] = key === 'key' ? item[key] : item[key].value;
      });
      return obj;
    });
    const columns = this.columns;
    return <Table  rowSelection={rowSelection} dataSource={dataSource} columns={columns} scroll={{ x: 1000}}/>;
  }
}

export default OperatorRepair 
