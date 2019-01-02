var url = {
    news:'data/news',
    producterCenterList:'data/producterCenterList',
    mallList:"data/mallList",
    profileCulture:"data/profileCulture",
    // pageDetails:"data/pageDetails",
    install(Vue,options){
        Vue.prototype.$url = url;
    }
}

export default url;