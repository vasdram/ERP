let http = {};

http.install = function (Vue, axios, options) {

    Vue.prototype.$httpGet = (path, storeMethod) => {
        axios
            .get(options.url + path, options.config)
            .then(res => {
                handleResult(res, storeMethod)
            })
            .catch(err => {
                console.error(err);
            })
    };

    Vue.prototype.$httpPost = (path, data, storeMethod) => {
        axios
            .post(options.url + path, data, options.config)
            .then(res => {
                handleResult(res, storeMethod)
            })
            .catch(err => {
                console.log(err);
            })

    };

    function handleResult(params, storeMethod) {
        console.log(params.data);
        options.store.dispatch(storeMethod, params.data)
    }
};

export default http