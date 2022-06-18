import React from 'react';
import {List} from 'antd'
import {Smsg} from "./Singlemessage";
import {getBooks} from "../services/bookService"
import {getMessages} from "../services/bookService";


export class Msg extends React.Component{

    constructor(props) {
        super(props);
        this.state = {messages:[]};
    }

    componentDidMount() {

        const callback =  (data) => {
            this.setState({messages:data});
        };

        getMessages({"search":null}, callback);

    }

    render() {
        return (
            <List
                grid={{gutter: 30, column: 1}}
                dataSource={this.state.messages}
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 4,

                }}
                renderItem={item => (
                    <List.Item>
                        <Smsg info={item} />
                    </List.Item>
                )}
            />
        );
    }

}