import axios from 'axios'

const API_URL = `http://${process.env.VUE_APP_HOST}:${process.env.VUE_APP_PORT}/v2/`
console.log(API_URL)

class AuthService {
    login(user){
        return axios.post(API_URL + 'login',{
            email: user.email,
            password: user.password
        }) .then(response => {
            if(response.data.accessToken){
                localStorage.setItem('user', JSON.stringify(response.data))
                localStorage.setItem('id', JSON.stringify(response.data.id))
            }

            return response.data

        })
    }
    logout(){
        localStorage.removeItem('user')
        localStorage.removeItem('id')
    }
    register(user){
        return axios.post(API_URL, 'user',{
            completeName: user.completeName,
            phone: user.phone,
            email: user.email,
            password: user.password
        })
    }
}

export default new AuthService()