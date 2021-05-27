import axios from 'axios'


const API_URL = `http://${process.env.VUE_APP_HOST}:${process.env.VUE_APP_PORT}/v2/`

class TeacherService {
    getAll(){
        const config = {
            headers: { 'Authorization': localStorage.getItem('token') }
        };
        return axios.get(API_URL + 'user/', config)
    }
    get(user){
        const config = {
            headers: { 'Authorization': localStorage.getItem('token') }
        };
        return axios.get(API_URL + 'user/' + user, config)
    }
    deleteTeacher(id){
        const config = {
            headers: { 'Authorization': localStorage.getItem('token') }
        };
        return axios.delete(API_URL + 'user/' + id, config)
    }
    update(user,id){
        const config = {
            headers: { 'Authorization': localStorage.getItem('token') }
        };
        return axios.put(API_URL+'user/'+id,{
            completeName: user.completeName,
            phone: user.phone,
            email: user.email
        }, config)
    }
}

export default new TeacherService()