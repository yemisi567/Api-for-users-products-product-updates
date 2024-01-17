import prisma from "../db";
import { comparePassword, createJWTToken, hashPassword } from "../modules/auth";

export const createUser = async (req, res) => {
    const user = await prisma.user.create({
        data: {
            username: req.body.username,
            password: await hashPassword(req.body.password)
        }
    })

    const token = createJWTToken(user)
    return res.json({
        token
    });
}

export const signIn = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            username: req.body.username
        }
    })

    const isValid = await comparePassword(req.body.password, user.password)

    if(!isValid) {
        res.status(401)
        res.json({message: "Invalid password"})
        return;
    }

    if(isValid) {
        const token = createJWTToken(user)
        return res.json({
            token
        });
    }
}