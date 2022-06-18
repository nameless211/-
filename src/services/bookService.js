import config from 'config';
import {postRequest, postRequest_v2} from "../utils/ajax";
import {history} from "../utils/history";
import {message} from "antd";


export const getBooks = (data, callback) => {
    const url = `${config.apiUrl}/getBooks`;
    postRequest(url, data, callback);
    console.log(callback);
};
export const getonesorder = (data, callback) => {
    const url = `${config.apiUrl}/getonesorder`;
    postRequest(url, data, callback);
    console.log(callback);
};
export const getdocorders = (data, callback) => {
    const url = `${config.apiUrl}/gdo`;
    postRequest(url, data, callback);
    console.log(callback);
};
export const getPD = (data, callback) => {
    const url = `${config.apiUrl}/getPD`;
    postRequest(url, data, callback);
    console.log(callback);
};
export const getBook = (id, callback) => {
    const data = {id: id};
    const url = `${config.apiUrl}/getBook`;
    postRequest_v2(url, data, callback);
    console.log(data);

};
export const getMessages = (data, callback) => {
    const url = `${config.apiUrl}/displayAll`;
    postRequest(url, data, callback);
    console.log(callback);
};
export const addoi = (data) => {
    const url = `${config.apiUrl}/oiload`;
    const callback=(data)=>{
        if(data.status >= 0) {
            console.log(data);
            alert("挂号成功，请按时就诊")
        }
        else{
            alert("没号了，请换一个")
        }
    };
    postRequest(url, data, callback);
    console.log(callback);
};
export const changedes = (data) => {
    const url = `${config.apiUrl}/cgd`;
    const callback=(data)=>{
        console.log(data);
    };
    postRequest(url, data, callback);
    console.log(callback);
};
export const changemsg = (data) => {
    const url = `${config.apiUrl}/change`;
    const callback=(data)=>{
        console.log(data);
    };
    postRequest(url, data, callback);
    console.log(callback);
};
export const deloi = (data) => {
    const url = `${config.apiUrl}/deleteoneorder`;
    const callback=(data)=>{
        console.log(data);
    };
    postRequest(url, data, callback);
    console.log(callback);
};
export const delusr = (data) => {
    const url = `${config.apiUrl}/deluser`;
    const callback=(data)=>{
        console.log(data);
    };
    postRequest(url, data, callback);
    console.log(callback);
};
export const getPatient = (id, callback) => {
    const data = {id: id};
    const url = `${config.apiUrl}/getPatient`;
    postRequest_v2(url, data, callback);

};