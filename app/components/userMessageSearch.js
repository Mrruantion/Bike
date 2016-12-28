import React, { Component } from 'react'
import { Form, Row, Col, Input, Button, Select, Table, Icon, Popconfirm} from 'antd'


const FormItem = Form.Item;
const {Option} = Select;



const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

function confirm(){
	message.success('Click on Ok')
}

function cancel(){
	message.error('Click on No');
}

const columns = [
	{ title: '姓名', width: 100, dataIndex: 'userName', key: '1' },
	{ title: '昵称', width: 100, dataIndex: 'othername', key: '2' },
	{ title: '年龄', width: 100, dataIndex: 'age', key: '3' },
	{ title: '身份证号', width: 100, dataIndex: 'idcard', key: '4' },
	{ title: '电话号码', width: 100, dataIndex: 'phone', key: '5' },
	{ title: '性别', width: 100, dataIndex: 'gender', key: '6' },
	{
	  title: '操作',
	  key: 'operation',
	  fixed: 'right',
	  width: 100,
	  render: () => <Popconfirm title="Are you sure delete this task?" 
							onConfirm={confirm} 
							onCancel={cancel} 
							okText="Yes" 
							cancelText="No">
							<a href="#">Delete</a>
						  </Popconfirm>
	},
];
const data = [{
	key: '1',
	userName: 'John Brom',
	age: 32,
	othername: 'byd',
	phone: 'New York Park',
	gender: 'lock',
	idcard: 44545456545616
}, {
	key: '2',
	userName: 'John Brom',
	age: 32,
	othername: 'byd',
	phone: 'New York Park',
	gender: 'lock',
	idcard: 44545456545616
}];
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
class UserMessageSearch extends Component {
	
	render() {
		const { getFieldDecorator } = this.props.form;
		const formItemLayout = {
		  labelCol: { span: 4 },
		  wrapperCol: { span: 20 },
		};
		const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '1',
    })(
      <Select style={{ width: 110 }}>
        <Option value="1">基本信息</Option>
				<Option value="2">使用记录</Option>
      </Select>
    );
		return (
			<div>
				<Row>
					<Col>
						<Form inline>
						  <Row>
							<Col span={12}> 
							  <FormItem 
								style={{marginTop: 0}}
								{...formItemLayout}
								label="检索">
							  <Input addonBefore={prefixSelector} {...getFieldDecorator('bikeSerialNumber')} />
							  </FormItem>
							</Col>
							 <Button type="primary" htmlType="submit" >搜索</Button>
						  </Row>
						</Form>
					</Col>
				</Row>
				<Row style={{marginTop: 20}}>
					<Col>
						<Table rowSelection={rowSelection} columns={columns}  dataSource={data} scroll={{ x: 1800 }} />
					</Col>
				</Row>
			</div>
			);
	}
}

UserMessageSearch = Form.create()(UserMessageSearch);


export default UserMessageSearch 
