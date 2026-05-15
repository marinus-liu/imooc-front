// import axios from "axios"
import axios from '@/utils/request'

/*const getCaptchaCode = async() =>{
    let res = '' ; 
    try{
        res = await axios.get('/getCaptcha')
        if( res.status === 200){
            return res.data
        }
    }catch (e){
        console.log(e)
    }
    return res;
           
}*/
const getCaptchaCode  = () => {
    return axios.get('/getCaptcha')
}

/*const forget = async (option) => { 
    let res = '' ; 
    try{
        res = await axios.post('/forget', {
            ...option
        })
        if( res.status === 200){
            return res.data
        }
    }catch (e){
        console.log(e)
    }
    return res;
           
}*/
const forget = (option) =>{
    return axios.post('/forget', {
        ...option
    })
}

 export { getCaptchaCode , forget }