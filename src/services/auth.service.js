import axios from 'axios'

const API_URL = `http://${process.env.VUE_APP_HOST}:${process.env.VUE_APP_PORT}/v2/`
console.log(API_URL)

class AuthService {
    login(user){
        return axios.post(API_URL + 'login',{
            email: user.email,
            password: user.password
        }) .then(response => {
            if(response.data.token){
                localStorage.setItem('user', JSON.stringify(response.data))
                localStorage.setItem('id', JSON.stringify(response.data.id))
                localStorage.setItem('token', response.data.token)
            }
            return response.data
        })
    }
    logout(){
        localStorage.removeItem('user')
        localStorage.removeItem('id')
        localStorage.removeItem('token')
    }
    register(user){
        const config = {
            headers: { 'Authorization': localStorage.getItem('token') }
        };
        return axios.post(API_URL + 'user',{
            completeName: user.completeName,
            phone: user.phone,
            email: user.email,
            password: user.password
        }, config)
    }
}

export default new AuthService()