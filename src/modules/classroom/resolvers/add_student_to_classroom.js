import { registerUserToCourse, findOne } from './../../../db/repositories/course.repository'
const addStudentToClassroom = async (_, { sub }) => {

    let { course, student } = sub
    let subs = await registerUserToCourse({
        courseId: course,
        userId: student
    })
    subs = subs.toJSON()
    console.log(subs)
    return {
      id:subs.id,
      courseId:subs.courseId,
      studentId:subs.userId
    }
}

export {
    addStudentToClassroom
}