import React from 'react'
import { Menu,Layout, Icon} from 'antd'
import {history} from "../utils/history";


const { SubMenu } = Menu;
const { Sider } = Layout;

export class Bar1 extends React.Component {

    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        if(collapsed){

        }
        console.log(collapsed);
        this.setState({ collapsed });
    };

    bookOnClick = () => {
        history.push("/");
    };
    bookOnClick1 = (t) => {
        history.push("/Message");};
    bookOnClick2 = () => {
        history.push("/patient");};
    render() {
        return (
            <div style={{width:this.state.collapsed? "80px":"180px", maxWidth:this.state.collapsed? "80px":"180px", minWidth:this.state.collapsed? "80px":"180px" }}>
                <div className="mySider">
                    <Sider collapsible collapsed={this.state.collapsed} width="180px" onCollapse={this.onCollapse} className="sider" style={{ background: '#fff'}}>
                        <Menu defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1" onClick={this.bookOnClick}>
                                <Icon type="read" style={{ fontSize: '18px'}}/>
                                <span style={{ fontSize: '16px'}}>医院信息</span>
                            </Menu.Item>
                            <Menu.Item key="2" onClick={this.bookOnClick1}>
                                <Icon type="shopping-cart" style={{ fontSize: '18px'}} />
                                <span style={{ fontSize: '16px'}}>挂号</span>
                            </Menu.Item>
                            <Menu.Item key="3" onClick={this.bookOnClick2}>
                                <Icon type="solution"  style={{ fontSize: '18px'}}/>
                                <span style={{ fontSize: '16px'}}>我的</span>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Icon type="user" style={{ fontSize: '12px'}}/>
                                <span style={{ fontSize: '11px'}}>急诊科</span>
                            </Menu.Item>
                            <Menu.Item key="5">
                                <Icon type="user" style={{ fontSize: '12px'}}/>
                                <span style={{ fontSize: '11px'}}>正畸科</span>
                            </Menu.Item>
                            <Menu.Item key="6">
                                <Icon type="user" style={{ fontSize: '12px'}}/>
                                <span style={{ fontSize: '11px'}}>修复科</span>
                            </Menu.Item>
                            <Menu.Item key="7">
                                <Icon type="user" style={{ fontSize: '12px'}}/>
                                <span style={{ fontSize: '11px'}}>预防保健科</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                </div>
            </div>

        );
    }

}