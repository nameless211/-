import React from 'react';
import {List} from 'antd'
import {Book} from './Book'
import {getBooks, getdocorders, getonesorder, getPD} from "../services/bookService";
import {Orderinstance} from "./Orderinstance";
import {Odinstance} from "./Orderdocinstance";


export class DorderList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {books:[]};
    }

    componentDidMount() {

        const callback =  (data) => {
           this.setState({books:data});
        };
        getdocorders(1,callback);
//getPD(1,callback);
    }

    render() {
        return (
            <List
                grid={{gutter: 10, column: 1}}
                dataSource={this.state.books}
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 8,

                }}
                renderItem={item => (
                    <List.Item>
                        <Odinstance info={item} />
                    </List.Item>
                )}
            />
        );
    }

}