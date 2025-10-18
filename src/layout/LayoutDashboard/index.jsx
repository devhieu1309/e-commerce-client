import { Layout } from "antd";
import "./LayoutDashboard.css";
import { SearchOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useState } from "react";
import Notify from "../../components/Notify";
import MenuSider from "../../components/MenuSider";
import { Outlet } from "react-router-dom";
const { Sider, Content } = Layout;

function LayoutDashboard(){
    const [collapsed, setCollapsed] = useState(false);
    const logoFold = "/logo-fold.png";
    const logo = "/logo.png";
    return (
        <>
            <Layout className="layout-default">
                <header className="header">
                    <div className={"header__logo " + (collapsed && "header__logo-collapsed")}>
                        <img src={collapsed ? logoFold : logo} alt="Logo" />
                    </div>
                    <div className="header__nav">
                        <div className="header__nav-left">
                            <div className="header__collapse" 
                                onClick={() => setCollapsed(!collapsed)}
                            >
                                <MenuUnfoldOutlined />
                            </div>
                            <div className="header__search">
                                <SearchOutlined />
                            </div>
                        </div>
                        <div className="header__nav-right">
                            <Notify/>
                        </div>
                    </div>
                </header>
                
                <Layout>
                    <Sider className="sider" collapsed={collapsed} theme="light" width={250}>
                        <MenuSider/>
                    </Sider>

                    <Content className="content">
                        <Outlet/>
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}

export default LayoutDashboard;