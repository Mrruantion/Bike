import React, {Component} from 'react'
import { Table } from 'antd';

const columns = [{
  width: 100,
  title: '发布人',
  dataIndex: 'name',
}, {
  width: 400,
  title: '发布内容',
  dataIndex: 'age',
  render: text => <a href="#">{text}</a>,
}, {
  width: 100,
  title: '发布时间',
  dataIndex: 'address',
}];


const data = [];
for (let i = 0; i < 406; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `2017/1/ ${i}`,
  });
}

const pagination = {
  total: data.length, 
  showSizeChanger: true,
  onShowSizeChange: (current, pageSize) => {
    console.log('Current: ', current, '; PageSize: ', pageSize);
  },
  onChange: (current) => {
    console.log('Current: ', current);
  },
};


class MessageSearch extends Component {
	render(){
		return (
			<Table dataSource={data} columns={columns} pagination={pagination} scroll={{ y: 240 }}/>
		)
	}
}

export default MessageSearch