import axios from 'axios'


const API_URL = `http://${process.env.VUE_APP_HOST}:${process.env.VUE_APP_PORT}/v2/`

class StudentService {
    getAll(){
        const config = {
            headers: { 'Authorization': localStorage.getItem('token') }
        };
        return axios.get(API_URL + 'student/', config)
    }
    get(user){
        const config = {
            headers: { 'Authorization': localStorage.getItem('token') }
        };
        return axios.get(API_URL + 'student/' + user, config)
    }
    update(user, id){
        const config = {
            headers: { 'Authorization': localStorage.getItem('token') }
        };
        return axios.put(API_URL + 'student/Id/' + id, {
            name: user.name,
            email: user.email,
            course: user.course,
            tutorName: user.tutorName,
            tutorPhone: user.tutorPhone
        }, config)
    }
    create(user){
        const config = {
            headers: { 'Authorization': localStorage.getItem('token') }
        };
        return axios.post (API_URL + 'student',{
            name: user.name,
            email: user.email,
            course: user.course,
            tutorName: user.tutorName,
            tutorPhone: user.tutorPhone
        },config)
    }
    delete(id){
        const config = {
            headers: { 'Authorization': localStorage.getItem('token') }
        };
        return axios.delete(API_URL+'student/'+id,config)
    }
}

export default new StudentService()