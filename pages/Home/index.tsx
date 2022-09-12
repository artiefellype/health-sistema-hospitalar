import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";
import "antd/dist/antd.css";

const { Header, Footer, Sider } = Layout;

interface props {
  children: React.ReactNode,
}

const Dashboard = ({children}: props) => (
  <Layout style={{height:'100vh'}}>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={[
          UserOutlined,
          VideoCameraOutlined,
          UploadOutlined,
          UserOutlined,
        ].map((icon, index) => ({
          key: String(index + 1),
          icon: React.createElement(icon),
          label: `nav ${index + 1}`,
        }))}
      />
    </Sider>
    <Layout style={{ background: '#064663'}}>
      <Header
        className="site-layout-sub-header-background"
        style={{ padding: 0 }}
      />
      {children}
      <Footer style={{ textAlign: "center", background: '#064663' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  </Layout>
);

export default Dashboard;
