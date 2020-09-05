import axios from 'axios';
import qs from 'qs';

export default ({
    method = 'get',
    url = '',
    params = {},
    success = () => {},
    fail = () => {},
    headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'If-Modified-Since': '0'
    },
    needCheckApiStatus = true,
    needStringify = true
}) => {
    const obj = {
        method,
        url,
        headers
    };

    if (['post', 'put'].includes(method)) {
        // 使用 qs 套件來轉換成序列化，非JSON格式，如：name=hehe&age=10
        obj.data = needStringify ? qs.stringify(params) : params;
    } else {
        obj.params = params;
    }

    return axios(obj).then((response) => {
        const { data } = response;

        if (data.status === 'Y' || !needCheckApiStatus) {
            success(data);
            return data;
        }

        fail(data);
        return data;
    }).catch(() => {
        fail('error');
    });
};
