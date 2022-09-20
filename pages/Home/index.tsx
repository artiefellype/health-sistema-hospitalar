import { Layout, Menu, Button } from "antd";
import React, { useState } from "react";
import "antd/dist/antd.css";
import NavItems from "../../src/components/NavItems/NavItems";

import { BiLeftIndent, BiListUl} from "react-icons/bi";
import { H1 } from "../../src/components/Title/styles";

const { Header, Footer, Sider } = Layout;

interface props {
  children: React.ReactNode;
}

const Dashboard = ({ children }: props) => {
  const [collapsed, setCollapsed] = useState(false);

  const logoIcon = {
    color: "white",
    margin: "10px",
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout style={{ height: "100%" }}>
      <Sider
        breakpoint="lg"
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div style={{
          display: "flex",
          flexDirection: "row",
        }}>
        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{ marginBottom: 16, margin: "15px" }}
        >
          {collapsed ? <BiLeftIndent /> : <BiListUl />}
        </Button>
        {/*<BiClinic size={40} style={logoIcon} /> */}
        { !collapsed ? <H1 color="white" style={{marginRight: "4rem"}}> HEALTH</H1> : null}

        </div>
        
        <Menu
          theme="dark"
          mode="inline"
          inlineCollapsed={collapsed}
          defaultSelectedKeys={["4"]}
          items={NavItems}
        />
      </Sider>
      <Layout style={{ background: "#064663" }}>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0 }}
        />
        {children}
      </Layout>
    </Layout>
  );
};

export default Dashboard;
