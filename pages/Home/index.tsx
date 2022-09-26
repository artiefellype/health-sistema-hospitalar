import { Layout, Menu, Button } from "antd";
import React, { useState } from "react";
import "antd/dist/antd.css";
import NavItems from "../../src/components/NavItems/NavItems";
import { BiLeftIndent, BiListUl } from "react-icons/bi";
import { Title } from "../../src/components/";
import { Content } from "antd/lib/layout/layout";

const { Header, Footer, Sider } = Layout;

interface props {
    children: React.ReactNode;
}

const Dashboard = ({ children }: props) => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    return (
        <Layout style={{
            height: "100vh"

        }}>
            <Sider
                breakpoint="lg"
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
                style={{ height: "100vh", position: "fixed" }}
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
                    {!collapsed ? <Title color="white" style={{
                        marginRight: "4rem",
                        display: collapsed ? "none" : "flex",

                    }}> HEALTH</Title> : null}

                </div>

                <Menu
                    theme="dark"
                    mode="inline"
                    inlineCollapsed={collapsed}
                    defaultSelectedKeys={["4"]}
                    items={NavItems}
                />
            </Sider>

            <Layout style={{
                marginLeft: collapsed ? 80 : 200,
                height: "100vh",
            }}>
                <Header
                    style={{
                        padding: 0,
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        paddingRight: "1rem",
                        width: "100%",
                        height: "4rem",
                    }}
                >
                    <Button type="primary">Sair</Button>
                </Header>
                <Content style={{
                    padding: "1rem",
                    overflow: "auto",
                    backgroundColor: "#ffffff",
                }}>
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default Dashboard;
