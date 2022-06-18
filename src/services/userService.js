import config from 'config';
import {postRequest} from "../utils/ajax";
import {history} from '../utils/history';
import {message} from 'antd';

export const guahao = (data) => {
    const url = `${config.apiUrl}/addOrder`;
    const callback = (data) => {
        console.log(data);
        if(data.status >= 0 ) {
                localStorage.setItem('user', JSON.stringify(data.data));
                history.push("/");
                message.success(data.msg);
        } else{
            message.error(data.msg);
        }
    };
    postRequest(url, data, callback);
};

export const login = (data) => {
    const url = `${config.apiUrl}/login`;
    const callback = (data) => {
        console.log(data.userType);
        if(data.status >= 0 ) {

             if(data.data.userType<1){
                localStorage.setItem('user', JSON.stringify(data.data));
                history.push("/");
                message.success(data.msg);
            }else if(data.data.userType>1){
                localStorage.setItem('user', JSON.stringify(data.data));
                history.push("/control");
                message.success(data.msg);
            }else{
                 localStorage.setItem('user', JSON.stringify(data.data));
                 history.push("/message_d");
                 message.success(data.msg);
             }
        } else{
            message.error(data.msg);
        }
    };
    postRequest(url, data, callback);
};

export const logout = () => {
    const url = `${config.apiUrl}/logout`;

    const callback = (data) => {
        if(data.status >= 0) {
            localStorage.removeItem("user");
            history.push("/login");
            message.success(data.msg);
        }
        else{
            message.error(data.msg);
        }
    };
    postRequest(url, {}, callback);
};

export const checkSession = (callback) => {
    const url = `${config.apiUrl}/checkSession`;
    postRequest(url, {}, callback);
};

export const addUser = (data) => {
    const url = `${config.apiUrl}/addUser`;
    const callback = (data) => {
        if(data.status >= 0) {
            message.success(data.msg);
        }
        else{
            message.error(data.msg);
        }
    };
    postRequest(url, data, callback);
};