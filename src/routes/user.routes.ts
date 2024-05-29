import { Router } from "express";
import { createUser, getUsers, deleteUsers, getUser, updateUser} from "../controllers/user.controler";

const router = Router()

router.post('/users',createUser)
router.get('/users',getUsers)
router.delete('/users/:id',deleteUsers)
router.get('/user/:id',getUser)
router.put('/user/:id', updateUser)


export default router