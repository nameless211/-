import React from 'react';
import {Button, Card, Checkbox, Form, Icon, Input} from "antd";
import * as userService from "../services/userService";
import {withRouter} from "react-router-dom";

import 'antd/dist/antd.css';
import '../css/login.css'

import {history} from "../utils/history";
import {changemsg} from "../services/bookService";


 class Change extends React.Component{

    handleSubmit = e => {
        let user = localStorage.getItem("user");
        let u=JSON.parse(user);
        let pid0=u.userId;
        let pname=u.username;
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                changemsg({values,"id":pid0});
                console.log('Received values of form: ',{values,"id":pid0});

            }
        });
    };
    render() {

        const { getFieldDecorator } = this.props.form;
        return (
            <Card>
                <Form onSubmit={this.handleSubmit} >
                    <Form.Item>
                        {getFieldDecorator('phonenumber', {
                            rules: [{ required: true }],
                        })(
                            <Input
                                placeholder={"电话号码"}
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('age', {
                            rules: [{ required: true }],
                        })(
                            <Input
                                placeholder={"年龄"}
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('address', {
                            rules: [{ required: true }],
                        })(
                            <Input
                                placeholder={"地址"}
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('ds', {
                            rules: [{ required: true }],
                        })(
                            <Input
                                placeholder={"填写更多信息"}
                            />,
                        )}
                    </Form.Item>

                    <Form.Item>
                        <Button  htmlType="submit" >
                            确认修改
                        </Button>

                    </Form.Item>
                </Form>
            </Card>


        );
    }

}
const WForm = Form.create()(Change);
export default withRouter(WForm);