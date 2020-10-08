
import { findOne } from './../../../db/repositories/course.repository'
import { findOne as findOneTeacher } from './../../../db/repositories/teacher.repository'
const getClassroom= async (_,{id}) => {
    let result = await findOne(id)
    result = result.map((res)=>res.toJSON())
    let teacher = await findOneTeacher(result[0].course.teacherId)
    teacher = teacher.toJSON()
    let students =[]
    result.forEach((res)=>{
        students.push(res.user)       
    })
    return {
        teacher,
        students,
        course:result[0].course
    }
}



export {
    getClassroom
}