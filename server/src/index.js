import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import {
  fileURLToPath
} from "url";
import authRoutes from "./routes/authRoutes.js";
import laporanRoutes from "./routes/laporanRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(
  import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

// Serve uploads folder
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/laporan", laporanRoutes);

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "SmartWaste API is running!"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});