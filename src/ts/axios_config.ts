// @此文件设置axios传入参数的格式

// @axios接口定义 参数含义
// @url：请求的url地址
// @method:请求方式（默认GET）
// @data:发送数据（可选，POST时使用）
// @param:请求参数（可选，GET时使用）
interface axiosConfig{
    url:string;
    method?:method_string;
    data?:any;
    param?:any;
}

// @字符串自变量设置 解决method种类固定但可选的情况
type method_string = 'get' | 'GET' | 'delete' | 'DELETE' | 
'post' | 'POST' | 'put' | 'PUT' ;

export default axiosConfig;