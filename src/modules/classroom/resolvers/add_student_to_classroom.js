import { registerUserToCourse,findOne } from './../../../db/repositories/course.repository'
const addStudentToClassroom = async (_,{sub})=>{
console.log(sub)
let {course,student} = sub
 let subs=   await registerUserToCourse({
     courseId:course,
     userId:student
 })
 subs=subs.toJSON()
console.log(subs)
 return {
     "id":"1",
     "course":{
         "id":"1"
     },
     "student":{
         "id":"1"
     }
    }
}

export {
    addStudentToClassroom
}