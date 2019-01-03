var url = {
    news:'data/news',
    producterCenterList:'data/producterCenterList',
    mallList:"data/mallList",
    profileCulture:"data/profileCulture",
    dismsg:"data/dismsg",
    honors:"data/honors",
    announce:"data/announce",
    install(Vue,options){
        Vue.prototype.$url = url;
    }
}

export default url;