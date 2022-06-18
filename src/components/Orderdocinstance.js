import React from 'react';
import {Button, Card, Form, Input} from 'antd';

import {Link} from 'react-router-dom'
import nullListeners from "react-redux/lib/utils/Subscription";
import {history} from "../utils/history";
import {addoi, changedes, changemsg, deloi} from "../services/bookService";

const { Meta } = Card;

export class Odinstance extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('提交的信息: ' + this.state.value);
        event.preventDefault();
        let id0=this.props.info.oiid;
        let str=this.state.value;
        changedes({"oid":id0,"des":str});

    }


    f1 = () => {

let id0=this.props.info.oiid;

deloi({"a":id0})  ;
    };
//     f2 = () => {
// //         let user = localStorage.getItem("user");
//         history.push("/changedes");
//     };

    render() {
        //const { getFieldDecorator } = this.props.form;
        const {info} = this.props;
        console.log(info);
// if(info.type!="编程"){return null;}
    return (

            <Card
                 hoverable
                 style={{width:720,backgroundColor:"whitesmoke",opacity:"0.9"}}                // cover={<img alt="image" src={info.image} className={"bookImg"}/>}
                //onClick={this.showBookDetails.bind(this, info.bookId)}
            >
                <Meta title={"患者姓名："+info.patname+
                    " \n 挂号科室:"+info.department +
                    "  预期就诊时间："+info.time} description={"订单号："+info.oiid}/>
                <Meta title={"诊疗记录："+info.description}></Meta>
                <br/>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        输入新的诊疗结果
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="提交" />
                </form>
                <Button onClick={this.f1} >
                    删除此号
                </Button >

            </Card>

    );

    }

}

