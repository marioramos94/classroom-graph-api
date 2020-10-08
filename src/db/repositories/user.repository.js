import User from '../models/user'


const findAllStudents = async () => {
  return await User.findAll({
    where: { isAdmin:false }
  })
}

const findUserBy = async (email) => {
  return await User.findOne({
    attributes: ['id', 'name', 'email', 'password', 'documentType', 'document'],
    where: {email: email}
  });
}

const findUserById = async (id) => {
  return await User.findOne({
    attributes: ['id', 'name', 'email', 'phone', 'documentType', 'document'],
    where: {id: id}
  });
}


export  {
  findAllStudents,
  findUserBy,
  findUserById
}