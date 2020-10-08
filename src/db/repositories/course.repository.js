import { Course, CourseUser, User } from '../models'

const findAll = async () => {
	return await Course.findAll();
}

const findOne = async (id) => {
	return await CourseUser.findAll({
		where: { courseId:id },
		include: [			
			{ model: User, as: 'user', required: false },
			{ model: Course, as: 'course', required: false }
		]
	});

}
const registerUserToCourse = async (subscription)=>{
	return await CourseUser.create(subscription,{
		include: [			
			{ model: User, as: 'user', required: false },
			{ model: Course, as: 'course', required: false }
		]
	})
}
const registerCourse = async (course) => {
	let newCourse = await Course.create(course)
		
	return newCourse.toJSON()
}



export {
	findAll,
	findOne,
	registerCourse,
	registerUserToCourse
}