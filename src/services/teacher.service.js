import axios from 'axios'


const API_URL = `http://${process.env.VUE_APP_HOST}:${process.env.VUE_APP_PORT}/v2/`

class TeacherService {
    getAll(){
        const config = {
            headers: { 'Authorization': localStorage.getItem('token') }
        };
        return axios.get(API_URL + 'user/', config)
    }
}

export default new TeacherService()