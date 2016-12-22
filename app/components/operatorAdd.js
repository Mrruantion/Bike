import React, {Component} from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, Radio } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;


const OperatorAdd = Form.create()(React.createClass({
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
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 60 }}>
        <Option value="86">+86</Option>
      </Select>
    );
    return (
       <div className="ant-row">
          <div className='console-title'>
              <div className="pull-left">
                  <h5>运营商信息</h5>
              </div>
          </div>
          <Form horizontal onSubmit={this.handleSubmit}>
             <FormItem
              {...formItemLayout}
              label="登录账号"
              hasFeedback
            >
                {getFieldDecorator('userName', {
                    rules: [{ required: true, message: '请输入登录账号!' }],
                })(
                    <Input addonBefore={<Icon type="user" />} />
                )}
            </FormItem>
            <FormItem
                {...formItemLayout}
                label="密码"
                hasFeedback
                >
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                    <Input addonBefore={<Icon type="lock" />} type="password" />
                )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="公司名称"
              hasFeedback
            >
              {getFieldDecorator('company', {
              rules: [{ required: true, message: '请输入公司!' }],
            })(<Input />)}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="联系人"
              hasFeedback
            >
              {getFieldDecorator('contacter')(<Input />)}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="联系电话"
              hasFeedback
            >
              {getFieldDecorator('telephone')(<Input />)}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="手机号码"
              hasFeedback
            >
              {getFieldDecorator('phone', {
                rules: [{ required: true, message: '请输入手机号!' }],
              })(
                <Input addonBefore={prefixSelector} />
              )}
            </FormItem>
            <FormItem {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit" size="large">保存</Button>
            </FormItem>
         </Form>
       </div>
    );
  },
}));
export default OperatorAdd