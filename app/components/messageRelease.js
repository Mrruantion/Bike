import React, {Component} from 'react';
import { Form, Select, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

const MessageRelease = Form.create()(React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  },
  handleSelectChange(value) {
    console.log(value);
    this.props.form.setFieldsValue({
      note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
    });
  },
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          label="消息"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}
        >
          {getFieldDecorator('message', {
            rules: [{ required: true, message: '请输入消息!' }],
          })(
            <Input type="textarea" placeholder="请输入消息" autosize={{ minRows: 6, maxRows: 10 }} />
          )}
        </FormItem>
        <FormItem
          label="发布"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}
        >
          {getFieldDecorator('sendType', {
            rules: [{ required: true, message: '请选择!' }],
            onChange: this.handleSelectChange,
          })(<div>
				<Checkbox>短信发布</Checkbox>
				<Checkbox>用户端APP推送</Checkbox>
			</div>
          )}
        </FormItem>
        <FormItem wrapperCol={{ span: 8, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </FormItem>
      </Form>
    );
  },
}));

export default MessageRelease