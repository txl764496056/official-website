var url = {
    news:'data/news',
    producterCenterList:'data/producterCenterList',
    install(Vue,options){
        Vue.prototype.$url = url;
    }
}

export default url;