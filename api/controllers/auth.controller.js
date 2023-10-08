import jwt from 'jsonwebtoken';
import UserModel from '../models/user.model.js';
import asyncHandler from 'express-async-handler';
import bcrypt from 'bcrypt';

// Đăng ký người dùng (chỉ cho quản lý)
const register = asyncHandler(async (req, res) => {
    const { fullname, email, password, phonenumber } = req.body;
    //1.Validation
    if (!fullname || !email || !password || !phonenumber) {
        return res.status(400).json({ message: 'Vui lòng nhập đầy đủ thông tin.' });
    }

    try {
        //2. Check user exist
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email đã tồn tại.' });
        }
        //Has password (mã hoá password)
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //3. Create new user

        // Đăng ký chỉ cho vai trò 'quản lý'
        const role = 'manager';

        const newUser = new UserModel({
            fullname,
            email,
            password: hashedPassword,
            role,
            phonenumber,
            isActive: false,
        });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

const login = asyncHandler(async (req, res) => {
    try {
        const { email, password } = req.body;

        //1. Check authentication
        const existingUser = await UserModel.findOne({ email });
        if (!existingUser) {
            res.status(401);
            throw new Error("Invalid credentials");
        }

        //2. Check password
        const passwordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!passwordCorrect) {
            res.status(401);
            throw new Error("Email or password is not correct!");
        }

        //3. Check role and isActive
        if ((existingUser.role !== 'admin' && existingUser.role !== 'manager') || existingUser.isActive !== true) {
            res.status(403);
            throw new Error("Bạn chưa được xác nhận tài khoản.");
        }

        //4.Tạo mã thông báo JWT
        const jwtPayload = {
            email: existingUser.email,
            id: existingUser.id,
            fullname: existingUser.fullname,
        };
        const token = jwt.sign(jwtPayload, process.env.SECRET_KEY, {
            expiresIn: "1d",
        });

        res.status(200).json({
            accessToken: token,
            message: "Login successfully"
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Lấy thông tin người dùng (me) - yêu cầu xác thực token
const getMe = asyncHandler(async (req, res) => {
    try {
        const { id } = req.user;
        const user = await UserModel.findById(id).select("-password");

        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Xác nhận tài khoản người dùng (chỉ cho admin)
const confirm = asyncHandler(async (req, res) => {
    const { userId } = req.params;
    const { role } = req.user;
    try {
        // Kiểm tra xem người dùng có vai trò là admin hay không
        if (role !== 'admin') {
            return res.status(403).json({ message: 'Bạn không có quyền xác nhận tài khoản.' });
        }

        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'Người dùng không tồn tại.' });
        }

        user.isActive = true;
        await user.save();

        res.status(200).json({ message: 'Xác nhận tài khoản thành công.' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

const AuthController = {
    register,
    login,
    getMe,
    confirm,
};

export default AuthController;