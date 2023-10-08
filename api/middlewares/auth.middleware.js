import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    const token = req.headers["token"];

    if (!token) {
        return res.status(400).json({
            message: "Token is not provided",
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        req.user = decoded;

        next();
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            return res.status(403).json({
                message: "Token is expired",
            });
        }

        return res.status(401).json({
            message: "Token is not valid",
        });
    }
};

export const authenticateToken = (req, res, next) => {
    const token = req.headers["token"];

    if (!token) {
        return res.status(401).json({ message: 'Token không tồn tại.' });
    }

    jwt.verify(token, process.env.SECRET_KEY, (error, user) => {
        if (error) {
            return res.status(403).json({ message: 'Token không hợp lệ.' });
        }
        req.user = user; // Lưu thông tin người dùng vào req.user
        next();
    });
};
