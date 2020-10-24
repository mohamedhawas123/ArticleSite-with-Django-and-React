import React from 'react'

import { Form, Input, Button, Checkbox } from 'antd';
import { Spin } from 'antd';
import {connect} from 'react-redux' 
import { LoadingOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom'
import * as actio from '../store/action/auth'


const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};


class Login extends React.Component {

     onFinish = values => {
        
        
        console.log('Success:', values);
        this.props.onAuth(values.username, values.password)
        this.props.history.push("/")

      };

     onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };

    render() {


        let errorMess = null;
        if(this.props.error) {

            errorMess = (<p>{this.props.error.message}</p>);
        }

        return (
            <div>
                {errorMess}
                {
                    this.props.loading ? <Spin indicator={antIcon} />

                    :
                

            
            <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
                
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            
            >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                {
                    required: true,
                    message: 'Please input your username!',
                },
                ]}
            >
                <Input />
            </Form.Item  >

            <Form.Item {...tailLayout}
                label="Password"
                name="password"
                rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item>
                
            </Form.Item>

            <Form.Item >
                <Button type="primary" htmlType="submit" style={{margin : '10px'}} >
                Login
                </Button>
                Or 
                <NavLink style={{marginRight: '10px'}} to='/signup/'>
                    Signup
                </NavLink>
            </Form.Item>
            </Form>
    }
            </div>
        );
    }
  

  
};  

const mapStateToProps = state => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actio.authLogin(username, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)