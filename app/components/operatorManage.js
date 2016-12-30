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
	{ title: '车辆编号', width: 100, dataIndex: 'bikeSerialNumber', key: '1' },
	{ title: '车辆款式', width: 100, dataIndex: 'bikestyle', key: '2' },
	{ title: '厂家', width: 100, dataIndex: 'manufacturer', key: '3' },
	{ title: '价格', width: 100, dataIndex: 'price', key: '4' },
	{ title: '锁类型', width: 100, dataIndex: 'locktype', key: '5' },
	{ title: '锁编号', width: 100, dataIndex: 'lockSerialNumber', key: '6' },
	{ title: '密钥', width: 100, dataIndex: 'devicepassword', key: '7' },
	{ title: '二维码', width: 100, dataIndex: 'qcode', key: '8' },
	{ title: '车辆状态', width: 100, dataIndex: 'bikestate', key: '9' },
	{ title: '配套设备使用状态', width: 120, dataIndex: 'devicestate', key: '10' },
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
	bikeSerialNumber: 'John Brom',
	bikestyle: 32,
	manufacturer: 'byd',
	price: 'New York Park',
	locktype: 'lock',
}, {
	key: '2',
	bikeSerialNumber: 'Jim Green',
	bikestyle: 40,
	manufacturer: 'byd',
	price: 'London Park',
	locktype: 'lock'
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
class OperatorManage extends Component {
	
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
		<Option value="2">车辆位置</Option>
		<Option value="3">使用记录</Option>
		<Option value="4">维修记录</Option>
		<Option value="5">承租车辆分配</Option>
		
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
						<Table rowSelection={rowSelection} columns={columns}  dataSource={data} scroll={{ x: 1240, y: 300 }} />
					</Col>
				</Row>
			</div>
			);
	}
}

OperatorManage = Form.create()(OperatorManage);

export default OperatorManage;

