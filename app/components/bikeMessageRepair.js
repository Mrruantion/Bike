import React, {Component} from 'react';
import { Table } from 'antd';

const columns = [
  { title: '车辆编号', width: 100, dataIndex: 'name', key: 'name' },
  { title: '车辆款式', width: 100, dataIndex: 'age', key: 'age' },
  { title: '厂家', dataIndex: 'address', key: '1' },
  { title: '价格', dataIndex: 'address', key: '2' },
  { title: '锁类型', dataIndex: 'address', key: '3' },
  { title: '锁编号', dataIndex: 'address', key: '4' },
  { title: '密钥', dataIndex: 'address', key: '5' },
  { title: '二维码', dataIndex: 'address', key: '6' },
  { title: '车辆状态', dataIndex: 'address', key: '7' },
  { title: '配套设备使用状态', dataIndex: 'address', key: '8' },
  {
    title: '操作',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a href="#">编辑</a>,
  },
];

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 40,
  address: 'London Park',
}];

class BikeMessageRepair extends React.Component{
  render(){
    return (
        <div className="ant-row">
          <div className='console-title'>
              <div className="pull-left">
                  <h5>车辆信息</h5>
              </div>
          </div>
          <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />
      </div>
    )   
  }
}

export default BikeMessageRepair