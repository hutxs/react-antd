
import {Form, Input, Button, Checkbox, Radio, Row, Col, message} from 'antd';
import React from 'react';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

//var app = require('./common');

const Login = React.createClass({
  mixins: [Form.ValueMixin],

  getInitialState() {
	return {
	  formData: {
		email: undefined,
		password: undefined,
		agreement: undefined,
	  }
	};
  },

  handleSubmit(e) {
	e.preventDefault();
	console.log(this.state.formData);
	message.success('收到表单值~~~ ：' + JSON.stringify(this.state.formData, function(k, v) {
	  if (typeof v === 'undefined') {
		return '';
	  }
	  return v;
	}));

	app.login(this.state.formData);
  },

  render() {
	const formData = this.state.formData;
	return (
	  <Form horizontal onSubmit={this.handleSubmit}>
		<FormItem
		  label="邮箱："
		  id="username"
		  labelCol={{span: 6, offset: 4}}
		  wrapperCol={{span: 4}}
		  required>
		  <Input type="text" id="username" name="username" placeholder="请输入邮箱" value={formData.email} onChange={this.setValue.bind(this, 'email')} />
		</FormItem>
		<FormItem
		  id="password"
		  label="密码："
		  labelCol={{span: 6, offset: 4}}
		  wrapperCol={{span: 4}}
		  required>
		  <Input type="password" id="password" name="password" placeholder="请输入密码" value={formData.password} onChange={this.setValue.bind(this, 'password')} />
		</FormItem>
		<FormItem
		  wrapperCol={{span: 4, offset: 10}} >
		  <Col span="14">
			<label>
			  <Checkbox name="agreement" value={formData.agreement} onChange={this.setValue.bind(this, 'agreement')} /> 记住登录
			</label>
		  </Col>
		</FormItem>
		<Row>
		  <Col span="12" offset="10">
			<Button type="primary" htmlType="submit">登录</Button>
		  </Col>
		</Row>
	  </Form>
	);
  }
});

module.exports = Login;
