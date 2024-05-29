import { json } from "stream/consumers"
import { User } from "../entity/user"
import { Request, Response } from "express"
import { captureRejectionSymbol } from "events"


// ---Obtener todos los usuarios
export const getUsers = async(req: Request, res: Response) => {
    try {
        
        const listaUsers = await User.find()
        return res.json(listaUsers)
    } catch(error){
        if(error instanceof Error)
        return res.status(500).json({message: error.message})
    }
}

// --- Obtener unicamente un usuario por ID
export const getUser = async(req: Request, res: Response) => {
    try {
        console.log(req.params)

        const { id } = req.params
        const numId = parseInt(id,10); 
        const user = await User.findOne({where: {id:numId}});

        if(!user){
            return res.status(404).json({ message: "User not found"});
        }
        return res.json(user)

    } catch (err){
        if(err instanceof Error)
            return res.status(500).json({message: err.message})
    }
}



// --- Agregra nuevos usuarios
export const createUser = async(req: Request, res: Response) => {
    try {
        console.log(req.body)
        
        //const {nombre, contrasenia, correo_electronico} = req.body
        const {contrasenia, correo_electronico} = req.body
        const user = new User()
        user.contrasenia = contrasenia
        user.correo_electronico = correo_electronico
        
        await user.save()
        
        //Regresar al usuario el objeto creado
        return res.json({ message: "User saved successfully"}); 
        
        
    } catch(error){
        if(error instanceof Error)
            return res.status(500).json({message: error.message})
    }
}


// --- Eliminar usuarios por ID
export const deleteUsers = async (req: Request , res: Response) => {
    try {
        console.log(req.params);
        
        const { id } = req.params   ; 
        const numericId = parseInt(id, 10);
        const user = await User.findOne({ where: { id:numericId } }); //Encontramos el id
        
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        
        await User.remove(user);
        
        return res.json({ message: "User deleted successfully :)" });
    } catch (err) {
        if (err instanceof Error) {
            return res.status(500).json({ message: err.message });
        }
    }
};


// --- Actualizar los datos de un usuario por id. 
export const updateUser = async (req: Request, res: Response) => {
    try{
        console.log(req.params)

        const {id} = req.params
        const numId = parseInt(id, 10); 
        const user = await User.findOne({where: {id:numId}});

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const {contrasenia, correo_electronico} = req.params


    }catch(err){
        if(err instanceof Error){
            return res.status(500).json({ message: err.message})
        }
    }
}