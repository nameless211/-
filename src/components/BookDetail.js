import React from 'react';
import {Descriptions, Button, Form,Icon, Input} from 'antd';
import {history} from "../utils/history";





export class BookDetail extends React.Component{
    f1 = () => {

    };

    render() {

        const {info} = this.props;

        if(info == null){
            return null;
        }

        return (
            <div className={"content"}>
                <div className={"book-detail"}>
                    {/*<div className={"book-image"}>*/}
                    {/*    <img alt="image" src={info.image} style={{width:"350px", height:"350px"}}/>*/}
                    {/*</div>*/}
                    <div className={"descriptions"}>
                        <Descriptions>
                            <Descriptions.Item className={"title"} span={3}>{info.name}</Descriptions.Item>
                            <Descriptions.Item label={"时间"} span={3}>{info.author}</Descriptions.Item>
                            <Descriptions.Item label={"科室"} span={3}>{info.type}</Descriptions.Item>
                            <Descriptions.Item label={"定价"} span={3}>{<span className={"price"}>{'¥' + info.price}</span>}</Descriptions.Item>
                            <Descriptions.Item label={"状态 "} span={3}>{info.inventory !== 0? <span>有时间 <span className={"inventory"}>累计接诊{info.inventory}人</span></span> : <span className={"status"}>无货</span>}</Descriptions.Item>
                            {/*<Descriptions.Item label={"作品简介"} span={3}>{info.description}</Descriptions.Item>*/}
                        </Descriptions>
                    </div>
                </div>
            </div>


        )

    }

}
