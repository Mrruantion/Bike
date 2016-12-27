import React, {Component} from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, Radio } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;


const PriceInput = React.createClass({
  getInitialState() {
    const value = this.props.value || {};
    return {
      number: value.number || 0,
      currency: value.currency || 'rmb',
    };
  },
  componentWillReceiveProps(nextProps) {
    // Should be a controlled component.
    if ('value' in nextProps) {
      const value = nextProps.value;
      this.setState(value);
    }
  },
  handleNumberChange(e) {
    const number = parseInt(e.target.value || 0, 10);
    if (isNaN(number)) {
      return;
    }
    if (!('value' in this.props)) {
      this.setState({ number });
    }
    this.triggerChange({ number });
  },
  handleCurrencyChange(currency) {
    if (!('value' in this.props)) {
      this.setState({ currency });
    }
    this.triggerChange({ currency });
  },
  triggerChange(changedValue) {
    // Should provide an event to pass value to Form.
    const onChange = this.props.onChange;
    if (onChange) {
      onChange(Object.assign({}, this.state, changedValue));
    }
  },
  render() {
    const { size } = this.props;
    const state = this.state;
    return (
      <span>
        <Input
          type="text"
          size={size}
          value={state.number}
          onChange={this.handleNumberChange}
          style={{ width: '65%', marginRight: '3%' }}
        />
        <Select
          value={state.currency}
          size={size}
          style={{ width: '32%' }}
          onChange={this.handleCurrencyChange}
        >
          <Option value="rmb">RMB</Option>
          <Option value="dollar">Dollar</Option>
        </Select>
      </span>
    );
  },
});





const BikeMessageAdd = Form.create()(React.createClass({
  getInitialState() {
    return {
      passwordDirty: false,
    };
  },
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  },
  checkConfirm(rule, value, callback) {
    const form = this.props.form;
    if (value && this.state.passwordDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  },
  checkPrice(rule, value, callback) {
    if (value.number > 0) {
      callback();
      return;
    }
    callback('Price must greater than zero!');
  },
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        span: 14,
        offset: 6,
      },
    };
    return (
       <div className="ant-row">
          <Form horizontal onSubmit={this.handleSubmit}>
            <FormItem
              {...formItemLayout}
              label="车辆编号"
              hasFeedback
            >
              {getFieldDecorator('bikeSerialNumber', {
              rules: [{ required: true, message: '请输入编号!' }],
            })(<Input />)}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="车辆款式"
              hasFeedback
            >
              {getFieldDecorator('bikestyle', {
              rules: [{ required: true, message: '请输入款式!' }],
            })(<Input />)}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="厂家"
              hasFeedback
            >
              {getFieldDecorator('manufacturer', {
              rules: [{ required: true, message: '请输入厂家!' }],
            })(<Input />)}
            </FormItem>
            <FormItem 
              {...formItemLayout}
              label="价格"
            >
              {getFieldDecorator('price', {
                initialValue: { number: 0, currency: 'rmb' },
                rules: [{ validator: this.checkPrice }],
              })(<PriceInput />)}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="锁类型"
            >
              {getFieldDecorator('locktype', {
                rules: [
                  { required: true, message: '请选择锁的类型!' },
                ],
              })(
                <Select placeholder="Please select a country">
                  <Option value="蓝牙">蓝牙</Option>
                  <Option value="GPRS">GPRS</Option>
                  <Option value="GPRS+蓝牙">GPRS+蓝牙</Option>
                  <Option value="LORA">LORA</Option>
                </Select>
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="锁编号"
              hasFeedback
            >
              {getFieldDecorator('lockSerialNumber', {
              rules: [{ required: true, message: '请输入编号!' }],
            })(<Input />)}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="密钥"
              hasFeedback
            >
              {getFieldDecorator('devicepassword', {
              rules: [{ required: true, message: '请输入密钥!' }],
            })(<Input />)}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="车辆状态"
            >
              {getFieldDecorator('bikestate', {
              rules: [{ required: true, message: '请选择状态!' }],
            })( <RadioGroup>
                  <Radio value="正在使用">正在使用</Radio>
                  <Radio value="已报修">已报修</Radio>
                  <Radio value="正在维修">正在维修</Radio>
                  <Radio value="停用">停用</Radio>
                </RadioGroup>)}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="配套设备状态"
            >
              {getFieldDecorator('devicestate', {
              rules: [{ required: true, message: '请选择状态!' }],
            })( <RadioGroup>
                  <Radio value="正在使用">正在使用</Radio>
                  <Radio value="已报修">已报修</Radio>
                  <Radio value="正在维修">正在维修</Radio>
                  <Radio value="停用">停用</Radio>
                </RadioGroup>)}
            </FormItem>
            <FormItem {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit" size="large">保存</Button>
            </FormItem>
         </Form>
       </div>
    );
  },
}));
export default BikeMessageAdd