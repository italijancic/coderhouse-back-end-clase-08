import* as userServices from '../services/user.services.js'
import {STATUS} from '../constants/constants.js'

export const getUsers = async (req, res) => {
  try {

    const users = await userServices.getUsers()

    res.status(200).json({
      status: STATUS.SUCCESS,
      users: users
    })

  } catch (error) {
    res.status(500).json({
      status: STATUS.FAIL,
      error: error.message
    })
  }
}

export const getUser = async (req, res) => {
  try {

    const { userId } = req.params

    const user = await userServices.getUser(userId)

    res.status(200).json({
      status: STATUS.SUCCESS,
      users: user
    })

  } catch (error) {
    res.status(500).json({
      status: STATUS.FAIL,
      error: error.message
    })
  }
}

export const createUser = async (req, res) => {
  try {

    const createdUser = await userServices.createUser(req.body)

    res.status(201).json({
      status: STATUS.SUCCESS,
      createdUser: createdUser
    })

  } catch (error) {
    res.status(500).json({
      status: STATUS.FAIL,
      error: error.message
    })
  }
}

export const updateUser = async (req, res) => {
  try {

    const { userId } = req.params

    const updatedUser = await userServices.updateUser(userId, req.body)

    res.status(200).json({
      status: STATUS.SUCCESS,
      updateUser: updatedUser
    })

  } catch (error) {
    res.status(500).json({
      status: STATUS.FAIL,
      error: error.message
    })
  }
}

export const deleteUser = async (req, res) => {
  try {

    const { userId } = req.params
    await userServices.deleteUser(userId)

    res.status(200).json({
      status: STATUS.SUCCESS,
      message: 'User deleted OK'
    })

  } catch (error) {
    res.status(500).json({
      status: STATUS.FAIL,
      error: error.message
    })
  }
}