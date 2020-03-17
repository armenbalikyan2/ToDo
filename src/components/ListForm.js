import React, { useEffect } from 'react'
import {
    List,
    Button,
    Avatar
} from 'antd'
import {
    EditFilled,
    DeleteOutlined,
} from '@ant-design/icons';
import { connect } from 'react-redux'
import { getDataLoading } from '../actions/GetDataActions';


export const ListForm = ({data}, {getDataLoading}) => {
    useEffect(() => {
        getDataLoading();
    }, [])
    
    return (
        <List
            className="list"
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
                <List.Item
                    actions={[
                        <Button onClick={this.edit(item)} type="primary" size='middle' icon={<EditFilled />} ></Button>,
                        <Button onClick={this.remove(item.key)} type="primary" size='middle' icon={<DeleteOutlined />} danger ></Button>
                    ]}
                >
                    <List.Item.Meta
                        className="list-item"
                        avatar={<Avatar size={64} src="https://scontent.fevn1-4.fna.fbcdn.net/v/t1.15752-9/89920169_158384661881833_2876984259837427712_n.jpg?_nc_cat=101&_nc_sid=b96e70&_nc_ohc=uK1O7s9xNm8AX-MVNt1&_nc_ht=scontent.fevn1-4.fna&oh=abeb4be10b4223ea864dd1e1618fd4eb&oe=5E90BCEA" />}
                        title={item}
                    />
                </List.Item>
            )}
        />
    )
}

const mapStateToProps = (state) => ({
    data: state.getData.data,
    loading: state.gettingData
})

const mapDispatchToProps = (dispatch) => ({
    getDataLoading: () => dispatch(getDataLoading)
})

export default connect(mapStateToProps, mapDispatchToProps)(ListForm)