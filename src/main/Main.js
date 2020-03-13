import React, { useState } from 'react'
import { Layout, Form, Input, Button,} from 'antd';

import './mainstyle.css'
import { ListForm, SiderForm } from '../components';


export const Main = () =>{
    const { Header, Footer, Sider, Content } = Layout;
    localStorage.clear();
    const data = ['Ant Design Title 1','Ant Design Title 2','Ant Design Title 3','Ant Design Title 4'];
      localStorage.setItem('Ant Design Title 1','1');
      localStorage.setItem('Ant Design Title 2','2');
      localStorage.setItem('Ant Design Title 3','3');
      localStorage.setItem('Ant Design Title 4','4');

      let data2 = [];
      data2.push(localStorage.getItem('Ant Design Title 1'));
      data2.push(localStorage.getItem('Ant Design Title 2'));
      data2.push(localStorage.getItem('Ant Design Title 3'));
      data2.push(localStorage.getItem('Ant Design Title 4'));
      console.log(data2);
      localStorage.removeItem('Ant Design Title 4');
      localStorage.removeItem('Ant Design Title 3');
      data2.pop();
      data2.pop()

return(
    <Layout>
    <Header className = 'header-activity'/>
    <Layout>
      <Sider className = 'sider-activity' >
        <SiderForm/>
      </Sider>
      <Content className = 'content-activity'>
        <ListForm dataSource = { data2 }/>
      </Content>
    </Layout>
    <Footer className = 'footer-activity'>Created by Armen Balikyan</Footer>
  </Layout>
)
}