import React from 'react';
import { Descriptions, Button } from 'antd';





export class Patientdetail extends React.Component{


    render() {

        const {info} = this.props;
console.log(info);
        if(info == null){
            return 1;
        }

        return (
            <div className={"content"}>
                <div className={"book-detail"}>
                    {/*<div className={"book-image"}><img alt="image" src={info.image} style={{width:"350px", height:"350px"}}/></div>*/}
                    <div className={"descriptions"}>
                        <Descriptions>
                            <Descriptions.Item label={"姓名"} span={3}>{info.name}</Descriptions.Item>
                            <Descriptions.Item label={"年龄"} span={3}>{info.age}</Descriptions.Item>
                            <Descriptions.Item label={"性别"} span={3}>{info.gender}</Descriptions.Item>
                            <Descriptions.Item label={"职业"} span={3}>{info.job}</Descriptions.Item>
                            <Descriptions.Item label={"电话号码"} span={3}>{info.tel}</Descriptions.Item>
                            <Descriptions.Item label={"地址"} span={3}>{info.address}</Descriptions.Item>
                            <Descriptions.Item label={"描述"} span={3}>{info.description}</Descriptions.Item>

                            {/*<Descriptions.Item label={"症状描述"} span={3}>{<span className={"price"}>{ info.price}</span>}</Descriptions.Item>*/}
                            {/*<Descriptions.Item label={"状态 "} span={3}>{info.inventory !== 0? <span>有货 <span className={"inventory"}>库存{info.inventory}件</span></span> : <span className={"status"}>无货</span>}</Descriptions.Item>*/}
                            {/*<Descriptions.Item label={"作品简介"} span={3}>{info.description}</Descriptions.Item>*/}
                        </Descriptions>
                    </div>
                </div>
                {/*<div className={"button-groups"}>*/}
                {/*    <Button type="danger" icon="shopping-cart" size={"large"}>*/}
                {/*        加入购物车*/}
                {/*    </Button>*/}

                {/*    <Button type="danger" icon="pay-circle" size={"large"} style={{marginLeft:"15%"}}ghost>*/}
                {/*        立即购买*/}
                {/*    </Button>*/}
                {/*</div>*/}
            </div>


        )

    }

}