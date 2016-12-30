import React, { Component } from 'react'
import { Table } from 'antd';

const columns = [
	{ title: '姓名', width: 100, dataIndex: 'name' ,key: 'name'},
	{ title: '身份证号' , width: 100, dataIndex: 'idcard', key: 'idcard'},
	{ title: '身份证照', width: 100, dataIndex: 'idcard_photo', key: 'idcard_photo'},
	{ title: '操作', width: 100, key: 'operation', render:() => <a href="#">审核</a>}
]
const data = [
	{
		key: '1',
		name: 'dashabi',
		idcard: '123454545454545',
	},
	{
		key: '2',
		name: 'nicaishi',
		idcard: '78945645131313131'
	}
	
]

class UserMessageAudit extends React.Component {
  constructor(props){
      super(props)
  }

  render() {
  
    return (
      <div className="ant-row">
          <Table columns={columns} dataSource={data} />
		  <img src="F:/Work/bike/app/1.png" />
      </div>
    );
  }
}

export default UserMessageAudit