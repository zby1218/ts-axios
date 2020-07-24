// @此文件用于发送http请求
import axiosConfig from './axios_config'

export default function xhr(config:axiosConfig):void{
    const {url,method='get',data = null} = config;
    const request = new XMLHttpRequest();
    //异步
    request.open(method.toUpperCase(),url,true);
    request.send(data);
}

