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
					placeholder={value}
                    onChange={this.handleChange.bind(this)}
                >
					<Option value="正在使用" >正在使用</Option>
                    <Option value="已注销" >已注销</Option>
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

class OperatorDelete extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [{
      title: '登录账号',
      dataIndex: 'userName',
      width: 100
    }, {
      title: '密码',
      dataIndex: 'password',
      width: 100
    }, {
      title: '公司名称',
      dataIndex: 'company',
      width: 100
    }, {
      title: '联系人',
      dataIndex: 'contacter',
      width: 100
    }, {
      title: '联系电话',
      dataIndex: 'telephone',
      width: 100
    }, {
      title: '手机号码',
      dataIndex: 'phone',
      width: 100
    }, {
      title: '用户状态',
      dataIndex: 'user_status',
      width: 100,
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'user_status', text),
    },{
      title: '账户状态',
      dataIndex: 'account_status',
      width: 100,
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'account_status', text),
    }, {
	  width: 100,
      title: '操作',
	  fixed: 'right',
      dataIndex: 'operation',
      render: (text, record, index) => {
        const { editable } = this.state.data[index].user_status;
        return (<div className="editable-row-operations">
          {
            editable ?
            <span>
              <a onClick={() => this.editDone(index, 'save')}>保存</a>
              <Popconfirm title="Sure to cancel?" onConfirm={() => this.editDone(index, 'cancel')}>
                <a>取消</a>
              </Popconfirm>
            </span>
            :
            <span>
              <a onClick={() => this.edit(index)}>删除</a>
            </span>
          }
        </div>);
      },
    }];
    this.state = {
      data: [{
        key: '0',
        userName: {
          value: 'Edward King 0',
        },
		password: {
          value: '艾德华纽盖特',
        },
        company: {
          value: '32',
        },
		contacter: {
          value: 'London, k Lane no. 0',
        },
        telephone: {
          value: '185445444521',
        },
		phone: {
          value: '男',
        },
		user_status: {
		  editable: false,
          value: '正在使用',
        },
		account_status: {
		  editable: false,
          value: '正在使用',
        }
      },{
        key: '1',
        userName: {
          value: 'Edward King 0',
        },
		password: {
          value: '艾德华纽盖特',
        },
        company: {
          value: '32',
        },
		contacter: {
          value: 'London, k Lane no. 0',
        },
        telephone: {
          value: '185445444521',
        },
		phone: {
          value: '男',
        },
		user_status: {
		  editable: false,
          value: '正在使用',
        },
		account_status: {
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

export default OperatorDelete 
