import React from 'react';
import {Button, Card} from 'antd';

import {Link} from 'react-router-dom'
import nullListeners from "react-redux/lib/utils/Subscription";
import {history} from "../utils/history";
import {addoi} from "../services/bookService";

const { Meta } = Card;

export class Book extends React.Component{
    f1 = () => {
        let user = localStorage.getItem("user");
        let u=JSON.parse(user);
        let pid0=u.userId;
        let pname=u.username;

let did0=this.props.info.orderId;
let dpmt0=this.props.info.department;
let docname0=this.props.info.doctorname;
let time0=this.props.info.time;
        addoi({"did":did0,"dpmt":dpmt0,
            "dn":docname0,
        "tm":time0,"pid":pid0,"pn":pname});};


    render() {

        const {info} = this.props;
// if(info.type!="编程"){return null;}
    return (
        // <Link to={{
        //     pathname: '/bookDetails',
        //     search: '?id=' + info.bookId}}
        //       target="_blank"
        // >
            <Card
                 hoverable
                 style={{width:360,backgroundColor:"whitesmoke",opacity:"0.9"}}                // cover={<img alt="image" src={info.image} className={"bookImg"}/>}
                //onClick={this.showBookDetails.bind(this, info.bookId)}
            >
                <Meta title={"医生姓名："+info.doctorname+
                    " \n 所属科室:"+info.department } />
                <Meta title={"时间段内余量："+info.capacity+
                    "  就诊时间："+info.time}/>
                <br/>
                <Button onClick={this.f1} >
                    挂号
                </Button>
            </Card>
       // </Link>
    );


    }



}

