var url = {
    news:'data/news',
    install(Vue,options){
        Vue.prototype.$url = url;
    }
}

export default url;