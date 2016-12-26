import React, { Component } from 'react'
import { Form, Row, Col, Input, Button, Select, Table, Icon} from 'antd'


const FormItem = Form.Item;
const {Option} = Select;

class BikeMessageSearch extends Component {

	render() {
    const { getFieldDecorator } = this.props.form;
    const columns = [{
        title: '姓名',
        dataIndex: 'name',
        key: 'name'
      }, {
        title: '性别',
        key: 'sex',
        render: (text, record) => (record.sex == '1' ? '男' : '女')
      }, {
        title: '出生年月',
        key: 'birthday',
        render: (text, record) => {
          const date = record.birthday;
          return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
        }
      }, {
        title: '爱好',
        key: 'hobby',
        render: (text, record) => {
          const hobby = {
            eat: '吃饭',
            sleep: '睡觉',
            beat: '打豆豆'
          };
          const res = [];

          Object.keys(hobby).forEach(v => {
            if(record[v]) res.push(hobby[v]);
          });

          return <span>
            {res.length ? res.reduce((p, n) => `${p} ${n}`) : ''}
          </span>;
        }
      }, {
        title: '手机号码',
        key: 'phone',
        dataIndex: 'phone',
      }, {
        title: '操作',
        key: 'action',
        render: (text, record) => (
            <span>
              <a href="javascript:void 0;" style={{marginRight: 10}} >编辑</a>
              <a href="javascript:void 0;" >删除</a>
            </span>
        )
      }];
		return (
			<div>
				<Row type="flex" justify="space-between">
          <Col>
            <Select multiple 
           
             placeholder='按条件排序' >
              <Option key='name'>姓名</Option>
              <Option key='birthday'>出生年月</Option>
              <Option key='sex'>性别</Option>
            </Select>
          </Col>
					<Col>
						<Form inline >
			        <FormItem
               label="姓名">
			          <Input {...getFieldDecorator('name')} />
			        </FormItem>
			        <FormItem 
                label='性别' >
                <Select {...getFieldDecorator('sex', {
                  initialValue: '2'
                })}>
                  <Option value="1">男</Option>
                  <Option value="0">女</Option>
                  <Option value="2">无</Option>
                </Select>
			        </FormItem>
			        <Button type="primary" htmlType="submit" style={{marginRight: 20}}>搜索</Button>
			      </Form>
					</Col>
				</Row>
				<Row style={{marginTop: 20}}>
					<Col>
						<Table  columns={columns}  />
					</Col>
				</Row>
			</div>
			);
	}
}

BikeMessageSearch = Form.create()(BikeMessageSearch);

export default BikeMessageSearch;

