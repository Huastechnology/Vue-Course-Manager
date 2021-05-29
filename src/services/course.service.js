import axios from 'axios'


const API_URL = `http://${process.env.VUE_APP_HOST}:${process.env.VUE_APP_PORT}/v2/`

class CourseService {
    getCourse(course){
        const config = {
            headers: { 'Authorization': localStorage.getItem('token') }
        };
        return axios.get(API_URL + 'course/' + course, config)
    }
    deleteCourse(id){
        const config = {
            headers: { 'Authorization': localStorage.getItem('token') }
        };
        return axios.delete(API_URL + 'course/' + id, config)
    }
}

export default new CourseService()