import { Router } from 'express'

import * as userController from '../controllers/user.controllers.js'

const router = Router()

router.get('/', userController.getUsers)

router.get('/:userId', userController.getUser)

router.post('/', userController.createUser)

router.put('/:userId', userController.updateUser)

router.delete('/:userId', userController.deleteUser)

export default router