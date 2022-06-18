import React from 'react'
import { Menu,Layout, Icon} from 'antd'
import {history} from "../utils/history";


const { SubMenu } = Menu;
const { Sider } = Layout;

export class SideBar_d extends React.Component {

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
        history.push("/Message_d");
    };
    bookOnClick1 = () => {
        history.push("/doctor");};
    bookOnClick2 = () => {
        history.push("/docord");};

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
                        <span style={{ fontSize: '16px'}}>我的</span>
                    </Menu.Item>
                    <Menu.Item key="3" onClick={this.bookOnClick2}>
                        <Icon type="shopping-cart" style={{ fontSize: '18px'}} />
                        <span style={{ fontSize: '16px'}}>我的诊疗</span>
                    </Menu.Item>
                </Menu>
            </Sider>
            </div>
            </div>

        );
    }

}