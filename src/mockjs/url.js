var url = {
    news:'data/news',
    producterCenterList:'data/producterCenterList',
    mallList:"data/mallList",
    install(Vue,options){
        Vue.prototype.$url = url;
    }
}

export default url;