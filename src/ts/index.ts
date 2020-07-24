// @此文件构建axios函数的内部实现

import axiosConfig from './axios_config'
import xhr from './xml'
// @请求主体函数
// @参数：请求信息  由于请求信息为固定的格式，进行接口定义
// @返回值：无
function axios(config:axiosConfig):void{
    console.log(12);
    xhr(config);
}
//使用default 不用设置接收的变量名
export default axios;