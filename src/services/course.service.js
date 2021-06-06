import axios from 'axios'


const API_URL = `http://${process.env.VUE_APP_HOST}:${process.env.VUE_APP_PORT}/v2/`

class CourseService {
    getCourse(course) {
        const config = {
            headers: { 'Authorization': localStorage.getItem('token') }
        };
        return axios.get(API_URL + 'course/' + course, config)
    }
    deleteCourse(id) {
        const config = {
            headers: { 'Authorization': localStorage.getItem('token') }
        };
        return axios.delete(API_URL + 'course/' + id, config)
    }
    createCourse(course) {
        const config = {
            headers: { 'Authorization': localStorage.getItem('token') }
        };
        return axios.post(API_URL + 'course' ,{
            courseName: course.courseName,
            teacher: course.teacher,
            description: course.description,
            schedule: course.schedule
        },  config)
    }
}


export default new CourseService()