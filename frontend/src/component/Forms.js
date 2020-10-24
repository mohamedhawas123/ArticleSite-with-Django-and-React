import React, { useState } from 'react';
import { Form, Input, Button, Radio } from 'antd';
import axios from 'axios'

class CustomForm extends React.Component{

    handleSubmit = (event, requestTypes, articleID) => {
        event.preventDefault();
        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;

        switch(requestTypes) {
            case 'post':
                axios.post('http://127.0.0.1:8000/api/', {
                    title: title,
                    content: content
                })
                .then(res => {
                    console.log(res)
                })
                .catch(err => console.log(err))



            case 'put':
                axios.put(`http://127.0.0.1:8000/api/${articleID}/`, {
                    title: title,
                    content: content
                })
                .then(res => {
                    console.log(res)
                })
                .catch(err => console.log(err))




        }

    }


    render() {
        return (
    
      <Form onSubmitCapture={(event) => this.handleSubmit(event, this.props.requestTypes, this.props.articleID)} >
   
        <Form.Item label="Title">
          <Input name="title" placeholder="put a title here" />
        </Form.Item>
        <Form.Item label="content">
          <Input  name="content" placeholder="put a content here" />
        </Form.Item>
        <Form.Item>
        <Button type="primary" htmlType="submit">{this.props.btn}</Button>
        </Form.Item>
      </Form>
    
  );
    }
 
 
  
};


export default CustomForm;
