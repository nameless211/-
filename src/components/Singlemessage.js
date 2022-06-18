import React from 'react';
import { Card } from 'antd';

import {Link} from 'react-router-dom'
import nullListeners from "react-redux/lib/utils/Subscription";

const { Meta } = Card;

export class Smsg extends React.Component{


    render() {

        const {info} = this.props;
console.log(info);
        return (
            // <Link to={{
            //     pathname: '/bookDetails',
            //     search: '?id=' + info.bookId}}
            //       target="_blank"
            // >
                <Card
                    hoverable
                    style={{width: 720}}
                >
                    <font color="black"><Meta title={"通知"+info.num+":" + info.name+" "}description={"发布于2022."+ info.date}/></font>
                </Card>
           //</Link>
        );


    }



}