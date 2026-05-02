import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {
  PrismaClient
} from "@prisma/client";

const prisma = new PrismaClient();


// Change password
export const changePassword = async (req, res) => {
  try {
    const {
      oldPassword,
      newPassword
    } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        id: req.user.id
      },
    });

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Password lama tidak sesuai"
      });
    }

    if (newPassword.length < 8) {
      return res.status(400).json({
        message: "Password baru minimal 8 karakter"
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await prisma.user.update({
      where: {
        id: req.user.id
      },
      data: {
        password: hashedPassword
      },
    });

    res.json({
      message: "Password berhasil diubah"
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};

// Update profile
export const updateProfile = async (req, res) => {
  try {
    const {
      name,
      email
    } = req.body;

    const user = await prisma.user.update({
      where: {
        id: req.user.id
      },
      data: {
        name,
        email
      },
    });

    res.json({
      message: "Profil berhasil diperbarui",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};

// Register
export const register = async (req, res) => {
  try {
    const {
      name,
      email,
      password
    } = req.body;

    // Cek email udah ada belum
    const existingUser = await prisma.user.findUnique({
      where: {
        email
      },
    });

    if (existingUser) {
      return res.status(400).json({
        message: "Email sudah terdaftar"
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Simpan user baru
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json({
      message: "Registrasi berhasil",
      user
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};

// Login
export const login = async (req, res) => {
  try {
    const {
      email,
      password
    } = req.body;

    // Cek user ada ga
    const user = await prisma.user.findUnique({
      where: {
        email
      },
    });

    if (!user) {
      return res.status(400).json({
        message: "Email atau password salah"
      });
    }

    // Cek password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Email atau password salah"
      });
    }

    // Bikin token JWT
    const token = jwt.sign({
        id: user.id,
        role: user.role
      },
      process.env.JWT_SECRET, {
        expiresIn: "1d"
      }
    );

    res.json({
      message: "Login berhasil",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};