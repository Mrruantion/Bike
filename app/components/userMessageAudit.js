import React, { Component } from 'react'
import { Table } from 'antd';

const columns = [
	{ title: '姓名', width: 100, dataIndex: 'name' ,key: 'name'},
	{ title: '身份证号' , width: 200, dataIndex: 'idcard', key: 'idcard'},
	{ title: '身份证照', dataIndex: 'idcard_photo', key: 'idcard_photo'},
	{ title: '操作', width: 100, key: 'operation', render:() => <a href="#">审核</a>}
]
const data = [
	{
		key: '1',
		name: 'dashabi',
		idcard: '123454545454545',
		idcard_photo: <img src="./image/2.jpg" width="300" height="150" />,
	},
	{
		key: '2',
		name: 'nicaishi',
		idcard: '78945645131313131',
		idcard_photo: <img src="./image/3.jpg" width="300" height="150" />,
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
      </div>
    );
  }
}

export default UserMessageAudit