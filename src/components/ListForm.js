import React from 'react'
import {
    List,
    Button,
    Avatar
} from 'antd'
import {
    EditFilled,
    DeleteOutlined,
} from '@ant-design/icons';


export const ListForm = (props) =>{
    return (
        <List
        className = "list"
        itemLayout="horizontal"
        dataSource={props.dataSource}
        renderItem={item => (
            <List.Item
            actions={[
                <Button onClick = {props.onClick} type = "primary" size = 'middle' icon = {<EditFilled />} ></Button>, 
                <Button onClick = {props.onClick} type = "primary" size = 'middle' icon = {<DeleteOutlined />} danger ></Button>
            ]}
            >
                <List.Item.Meta
                className = "list-item" 
                avatar={<Avatar size={64} src="https://scontent.fevn1-4.fna.fbcdn.net/v/t1.15752-9/89920169_158384661881833_2876984259837427712_n.jpg?_nc_cat=101&_nc_sid=b96e70&_nc_ohc=uK1O7s9xNm8AX-MVNt1&_nc_ht=scontent.fevn1-4.fna&oh=abeb4be10b4223ea864dd1e1618fd4eb&oe=5E90BCEA" />}
                title={item}
                />
            </List.Item>
        )}
    />
    )
}
