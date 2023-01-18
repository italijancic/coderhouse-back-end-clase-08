import { UserModel } from '../models/User.model.js'


export const getUsers = async () => {

  try {

    const users = await UserModel.find( { deletedAt: { $exists: false } })

    return users

  } catch (error) {
    throw new Error(error.message)
  }

}

export const getUser = async (userId) => {

  try {

    const user = await UserModel.findById(userId)

    return user

  } catch (error) {
    throw new Error(error.message)
  }

}

export const createUser = async (user) => {

  try {

    const createdUser = await UserModel.create(user)

    return createdUser

  } catch (error) {
    throw new Error(error.message)
  }

}

export const updateUser = async (userId, data) => {

  try {

    const updatedUser = await UserModel.findByIdAndUpdate(userId, data, {new: true})

    return updatedUser

  } catch (error) {
    throw new Error(error.message)
  }

}

export const deleteUser = async (userId) => {

  try {

    await UserModel.delete( { _id: userId } )

  } catch (error) {
    throw new Error(error.message)
  }

}