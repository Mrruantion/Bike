import React, {Component} from 'react';
import { Form, Select, Input, Button} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;



class BikeAdd extends Component{
  render(){
    return (
      <form>
        <FormItem
         label="车辆编号"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 8 }}>
            <Input type="text"/>
        </FormItem>
        <FormItem
         label="车辆款式"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 8 }}>
            <Input type="text"/>
        </FormItem>
         <FormItem
         label="厂家"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 8 }}>
            <Input type="text"/>
        </FormItem>
         <FormItem
         label="价格"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 8 }}>
            <Input
          type="text"
          style={{ width: '65%', marginRight: '3%' }}
        />
        <Select
          style={{ width: '32%' }}
        >
          <Option value="rmb">RMB</Option>
          <Option value="dollar">Dollar</Option>
        </Select>
        </FormItem>
      </form>
    ) 
  }
};

class DeviceAdd extends Component {
  render() {
    return (
      <div>
        <span className="device">配套设备信息</span>
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            label="锁类型"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 8 }}
          >
              <Select placeholder="请选择类型">
                <Option value="BlueTooth">蓝牙</Option>
                <Option value="GPRS">GPRS</Option>
                <Option value="GPRSBlue">GPRS+蓝牙</Option>
                <Option value="LORA">LORA</Option>
              </Select>
          </FormItem>
          <FormItem
          label="锁编号"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 8 }}>
              <Input type="text"/>
          </FormItem>
          <FormItem wrapperCol={{ span: 8, offset: 4 }}>
            <Button type="primary" htmlType="submit">
              保存
            </Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}





const BikeManage = Form.create()(React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  },
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
      <BikeAdd />
      <DeviceAdd />
      </div>
    );
  },
}));


export default BikeManage