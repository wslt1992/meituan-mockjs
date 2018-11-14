import axios from 'axios';
import url from '../global/url'
var https={
    listing:{
        request(){
            return axios.get(url.listing).then((res)=>res.data)
        }
    },
    registerInVue(Vue){
        Vue.prototype.$https = https
    }
}
export default https;