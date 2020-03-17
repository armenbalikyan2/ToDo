import React, { useState, useEffect } from 'react';
import {
    Input,
    Button,
    Form,
} from 'antd'
import { connect } from 'react-redux';
import { setDataLoading } from '../actions/SetDataActions';

export const Data = [];
export const SiderForm = ({setData}) => {
    const [form] = Form.useForm();
    const [input, setInput] = useState({
        title: '',
        description: '',
    })
    const [storage, setStorage] = useState({
        title: '',
        description: '',
    })

    useEffect(() => {
        setData();
    }, [])

    const handleInputChange = (event) => {
        event.preventDefault();
        const {
            target: { name, value }
        } = event;
        setInput({
            ...input,
            [name]: value
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setStorage({
            title: input.title,
            description: input.description,
        });
        Data.push(storage);
        setInput({
            title: "",
            description: "",
        });
    }
    console.log(Data);

    return (
        <Form
            form={form}
            onSubmit={handleSubmit}
        >
            <div className='form'>

                <Form.Item >
                    <Input onChange={handleInputChange} value={input.title} name='title' className='input' placeholder="input title" />
                </Form.Item>

                <Form.Item >
                    <Input onChange={handleInputChange} value={input.description} name='description' className='input' placeholder="input description" />
                </Form.Item>

                <Form.Item >
                    <Button onClick={handleSubmit} className='button' type="primary">Submit</Button>
                </Form.Item>

            </div>
        </Form>
    )
}
const mapStateToProps = (state) => ({
    data: state.setData.data,
})

const mapDispatchToProps = (dispatch) => {
    return {
        setData: () => dispatch(setDataLoading(Data))
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SiderForm);