import React, {Component} from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, Radio } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;


const UserManage = Form.create()(React.createClass({
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
  handlePasswordBlur(e) {
    const value = e.target.value;
    this.setState({ passwordDirty: this.state.passwordDirty || !!value });
  },
  checkPassowrd(rule, value, callback) {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
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
      <Select className="icp-selector">
        <Option value="86">+86</Option>
      </Select>
    );
    return (
       <div className="ant-row">
          <div className='console-title'>
              <div className="pull-left">
                  <h5>用户信息</h5>
              </div>
          </div>
          <Form horizontal onSubmit={this.handleSubmit}>
            <FormItem
              {...formItemLayout}
              label="姓名"
              hasFeedback
            >
              {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入姓名!' }],
            })(<Input addonBefore={<Icon type="user" />}/>)}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="昵称"
              hasFeedback
            >
              {getFieldDecorator('othername')(<Input />)}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="年龄"
              hasFeedback
            >
              {getFieldDecorator('age', {
              rules: [{ required: true, message: '请输入年龄!' }],
            })(<Input />)}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="身份证号"
              hasFeedback
            >
              {getFieldDecorator('idcard', {
              rules: [{ required: true, message: '请输入身份证号!' }],
            })(<Input />)}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="电话号码"
              hasFeedback
            >
              {getFieldDecorator('phone', {
                rules: [{ required: true, message: '请输入电话号码!' }],
              })(
                <Input addonBefore={prefixSelector} />
              )}
            </FormItem>
            
            <FormItem
              {...formItemLayout}
              label="性别"
            >
              {getFieldDecorator('gender', {
              rules: [{ required: true, message: '请选择性别!' }],
            })( <RadioGroup>
                  <Radio value="male">男</Radio>
                  <Radio value="female">女</Radio>
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
export default UserManage