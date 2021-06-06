export default class Courses {
    constructor(courseName, teacher, description, ...schedule){
        this.courseName = courseName
        this.teacher = teacher
        this.description = description
        this.schedule = schedule
        
    }
}