const convertCookies = (cookies) => {
    let result = '';
    Object.keys(cookies).forEach((key) => {
        result += `${key}=${cookies[key]};`;
    });
    return result;
};

const headers = {
    Cookie: convertCookies({
        sid: 's:D7hOweI3fn7Xv6C5pNVNjhMRdFkqglRv.iVlwsplRRtGHVP6/eA4h3cWDmUoQv7M8jpXRB/PQ9Fn',
        'connect.sid': 's:D7hOweI3fn7Xv6C5pNVNjhMRdFkqglRv.iVlwsplRRtGHVP6/eA4h3cWDmUoQv7M8jpXRB/PQ9Fn',
        lang: 'zh-tw',
        langx: 'zh-tw'
    })
};

const commonConfig = {
    target: 'http://localhost:3000/', // yapi
    // target: 'http://ctl-v3-dev.vir888.com/', // 開發
    // target: 'http://ctl-v3.vir777.net/', // QA
    changeOrigin: true,
    headers,
    ws: false
};

module.exports = {
    '/mock': commonConfig,
    '/cl': commonConfig,
    '/almond': commonConfig,
    '/sparrow': commonConfig,
    '/web': commonConfig,
    '/agv3': {
        target: 'https://hall.vir999.net/',
        headers,
        changeOrigin: true,
        ws: false
    }
};
