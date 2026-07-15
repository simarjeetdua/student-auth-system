import Student from "../models/Student.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js"
// import jwt from "jsonwebtoken"; //instead of this i directly use generatetoken in utils

// now we register student
export const registerStudent = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                 success: false,
                 message: "All fields are required",
            });
         }

        const existingStudent = await Student.findOne({ email });

        if (existingStudent) {
            return res.status(400).json({
                success: false,
                message: "Student already exists",
            });
        }

        // now we hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create student
        const student = await Student.create({
            name,
            email,
            password: hashedPassword,
        });

       //now we generate tokens
        const token = generateToken(student._id);
        console.log("Generated Token:", token);
        console.log(typeof token);

        res.status(201).json({
            success: true,
            message: "Student registered successfully",
            token,
            student: {
                id: student._id,
                name: student.name,
                email: student.email,
            },
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

//now we logoin the student
export const loginStudent = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and Password are required",
            });
        }

        const student = await Student.findOne({ email });

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found",
            });
        }

        // now we compare the password
        const isMatch = await bcrypt.compare(password, student.password);

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials",
            });
        }

       const token = generateToken(student._id);

        res.status(200).json({
            success: true,
            message: "Login successful",
            token,
            student: {
                id: student._id,
                name: student.name,
                email: student.email,
            },
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};