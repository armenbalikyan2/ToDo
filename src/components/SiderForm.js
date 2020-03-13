import React, { useState } from 'react';
import {
    Input,
    Button,
    Form,
} from 'antd'

export const SiderForm = (props) => {
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');

    const onFormLayoutChange = ({ layout }) => {
        setFormLayout(layout);
    };

    const formItemLayout =
        formLayout === 'horizontal'
        ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 },
        }
      : null;

  const buttonItemLayout =
        formLayout === 'horizontal'
      ? {
          wrapperCol: { span: 14, offset: 4 },
        }
      : null;
      
    return (
        <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        initialValues={{ layout: formLayout }}
        onValuesChange={onFormLayoutChange}
        >
            <div  className='form'>  

                <Form.Item >
                    <Input className = 'input' placeholder="input title" />
                </Form.Item>
                
                <Form.Item >
                    <Input className = 'input' placeholder="input description" />
                </Form.Item>

                <Form.Item {...buttonItemLayout}>
                    <Button  className = 'button'  type="primary">Submit</Button>
                </Form.Item>

            </div> 
        </Form>
    )
}