import React from 'react';
import {Button, Card} from 'antd';

import {Link} from 'react-router-dom'
import nullListeners from "react-redux/lib/utils/Subscription";
import {history} from "../utils/history";
import {addoi, deloi} from "../services/bookService";

const { Meta } = Card;

export class Orderinstance extends React.Component{
    f1 = () => {
//         let user = localStorage.getItem("user");
//         let u=JSON.parse(user);
//         let pid0=u.userId;
//         let pname=u.username;
//
let id0=this.props.info.oiid;
// let dpmt0=this.props.info.department;
// let docname0=this.props.info.doctorname;
// let time0=this.props.info.time;
//         addoi({"did":did0,"dpmt":dpmt0,
//             "dn":docname0,
//         "tm":time0,"pid":pid0,"pn":pname});
deloi({"a":id0})  ;
    };


    render() {

        const {info} = this.props;
        console.log(info);
// if(info.type!="编程"){return null;}
    return (
        // <Link to={{
        //     pathname: '/bookDetails',
        //     search: '?id=' + info.bookId}}
        //       target="_blank"
        // >
            <Card
                 hoverable
                 style={{width:720,backgroundColor:"whitesmoke",opacity:"0.9"}}                // cover={<img alt="image" src={info.image} className={"bookImg"}/>}
                //onClick={this.showBookDetails.bind(this, info.bookId)}
            >
                <Meta title={"医生姓名："+info.docname+
                    " \n 所属科室:"+info.department +
                    "  就诊时间："+info.time} description={"订单号："+info.oiid}/>
                <Meta title={"医生给出的诊断："+info.description}/>
                <br/>
                <Button onClick={this.f1} >
                    退号
                </Button>
            </Card>

    );

    }

}

