import User from "../models/user.model.js";
import bcrypt from 'bcryptjs'

export const signup = async (req, res) => {
    try {
        const {firstname, lastname, email, password, confirmPassword } = req.body

        if(password !== confirmPassword){
            return res.status(400).json({
                error: "Passwords don't match"
            })
        }

        const hashedPass = await bcrypt.hash(password, 10)

        const user = await User.findOne({email})

        if(user){
            return res.status(400).json({
                error: "User already exits"
            })
        }

        const profilePic = `https://avatar.iran.liara.run/username?username=${firstname}+${lastname}`

        const newUser = new User ({
            firstname,
            lastname,
            email,
            password: hashedPass,
            profilePic
        })

        await newUser.save()

        res.status(201).json({
            _id:newUser._id,
            firstname: newUser.firstname,
            lastname: newUser.lastname,
            email: newUser.email,
            profilePic: newUser.profilePic
        })
        
    } catch (error) {
        console.log("Error while signup:- ",error.message);
        res.status(500).json({
            error: "Internal Server Error"
        })

    }
}

export const signin = async (req, res) => {
    console.log('Sign in Panel');
}

export const logout = async (req, res) => {
    console.log('Sign out Panel');
}

export const google = async (req, res) => {
    console.log('Sign in Google Panel');
}