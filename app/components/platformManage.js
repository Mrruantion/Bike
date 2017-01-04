import React, {Component} from 'react';
import { Button, Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Radio } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;

const PlatformManage = Form.create()(React.createClass({
	getInitialState() {
		return {
			passwordDirty: false,
		};
	},
	
	handleSubmit(e) {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if(!err) {
				console.log('Received values of form: ', values);
			}
		});
	},
	
	checkConfirm(rule, value, callback) {
		const form = this.props.form;
		if(value && this.state.passwordDirty) {
			form.validateFields(['confirm'], { force: true });
		}
		callback();
	},
	
	checkPrice(rule, value, callback) {
		if(value.number > 0){
			callback();
			return;
		}
		callback('Price must greater than zero!');
	},
	
	render() {
		const { getFieldDecorator } = this.props.form;
		const formItemLayout = {
			labelCol: { span: 6 },
			wrapperCol: {span: 14 },
		};
		const tailFormItemLayout = {
			wrapperCol: {
				span : 14,
				offset: 6,
			},
		};
		return (
			<div className="ant-row">
				<Form horizontal onSubmit={this.handleSubmit}>
					<FormItem
					{...formItemLayout}
					label="姓名"
					hasFeedback
					>
						{getFieldDecorator('systemName', {
						rules: [{ required: true, message: '请输入姓名' }],
						})(<Input />)}
					</FormItem>
					<FormItem
					{...formItemLayout}
					label="工号"
					hasFeedback
					>
						{getFieldDecorator('workNumber', {
						rules: [{ required: true, message: '请输入工号' }],
						})(<Input />)}
					</FormItem>
					<FormItem
					{...formItemLayout}
					label="手机号"
					hasFeedback
					>
						{getFieldDecorator('phone', {
						rules: [{ required: true, message: '请输入手机号' }],
						})(<Input />)}
					</FormItem>
					<FormItem
					{...formItemLayout}
					label="密码"
					hasFeedback
					>
						{getFieldDecorator('password', {
						rules: [{ required: true, message: '请输入密码' }],
						})(<Input type="password" />)}
					</FormItem>
					<FormItem
					labelCol={{ span: 6 }}
					wrapperCol={{span: 5 }}
					label="权限"
					>
						{getFieldDecorator('permission', {
						rules: [{ required: true, message: '请选择权限' }],
						})(<Select>
							<Option value="levelone">一级</Option>
							<Option value="leveltwo">二级</Option>
							<Option value="levelthree">三级</Option>
						</Select>)}
					</FormItem>
					<FormItem {...tailFormItemLayout}>
						<Button type="primary" htmlType="submit" size="large">保存</Button>
					</FormItem>
				</Form>
			</div>
		)
	}
}))

export default PlatformManage