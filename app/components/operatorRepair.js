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
    handleChange(e) {
        const value = e.target.value;
        this.setState({ value });
    }
    render() {
        const { value, editable } = this.state;
        return (<div>
        {
			editable ?
			<div>
			   <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a person"
                    optionFilterProp="children"
                    onChange={e => this.handleChange(e)}
                >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
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
	  width: 100,
      title: '操作',
      dataIndex: 'operation',
      render: (text, record, index) => {
        const { editable } = this.state.data[index].username;
        return (<div className="editable-row-operations">
          {
            editable ?
            <span>
              <a onClick={() => this.editDone(index, 'save')}>Save</a>
              <Popconfirm title="Sure to cancel?" onConfirm={() => this.editDone(index, 'cancel')}>
                <a>Cancel</a>
              </Popconfirm>
            </span>
            :
            <span>
              <a onClick={() => this.edit(index)}>Edit</a>
            </span>
          }
        </div>);
      },
    }];
    this.state = {
      data: [{
        key: '0',
        username: {
          editable: false,
          value: 'Edward King 0',
        },
		othername: {
		  editable: false,
          value: '艾德华纽盖特',
        },
        age: {
          editable: false,
          value: '32',
        },
		idcard: {
		  editable: false,
          value: 'London, k Lane no. 0',
        },
        phone: {
		  editable: false,
          value: '185445444521',
        },
		gender: {
		  editable: false,
          value: '男',
        }
      },{
        key: '1',
        username: {
          editable: false,
          value: 'Edward King 0',
        },
		othername: {
		  editable: false,
          value: '艾德华纽盖特',
        },
        age: {
          editable: false,
          value: '32',
        },
		idcard: {
		  editable: false,
          value: 'London, k Lane no. 0',
        },
        phone: {
		  editable: false,
          value: '185445444521',
        },
		gender: {
		  editable: false,
          value: '男',
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
