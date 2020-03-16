import React, { useState } from 'react'
import { Layout, Form, Input, Button, } from 'antd';
import './mainstyle.css'
import { ListForm,SiderForm } from '../components';
import { Data } from '../components/SiderForm';
import { watchRemoveDataSaga } from '../sagas';
import { connect } from 'react-redux';


export const Main = ({removeData}) => {
  const { Header, Footer, Sider, Content } = Layout;
  const [formData,setForm] = useState({})


  const handleRemove = (key) => {
    removeData(key);
  }

  const handleEdit = (data) => {
    setForm(data)
  }

  return (
    <Layout>
      <Header className='header-activity' />
      <Layout>
        <Sider className='sider-activity' >
          <SiderForm />
        </Sider>
        <Content className='content-activity'>
          <ListForm dataSource={formData} edit={handleEdit} remove={handleRemove}/>
        </Content>
      </Layout>
      <Footer className='footer-activity'>Created by Armen Balikyan</Footer>
    </Layout>
  )
}
const mapStateToProps = (state) => ({
  data: state.getData.data,
})

const mapDispatchToProps = (dispatch) => {
  return {
    removeData: (key) => {
      dispatch(watchRemoveDataSaga(key))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
