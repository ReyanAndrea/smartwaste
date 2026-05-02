import express from "express";
import {
  createLaporan,
  getMyLaporan,
  getDetailLaporan,
  getAllLaporan,
  updateStatusLaporan,
  deleteLaporan,
  getStatistik,
} from "../controllers/laporanController.js";
import {
  verifyToken,
  verifyAdmin
} from "../middleware/auth.js";
import upload from "../middleware/upload.js";

const router = express.Router();

// Warga
router.post("/", verifyToken, upload.single("photo"), createLaporan);
router.get("/my", verifyToken, getMyLaporan);

// Admin
router.get("/statistik", verifyToken, verifyAdmin, getStatistik);
router.get("/", verifyToken, verifyAdmin, getAllLaporan);
router.put("/:id/status", verifyToken, verifyAdmin, updateStatusLaporan);
router.delete("/:id", verifyToken, verifyAdmin, deleteLaporan);

// Detail (warga & admin) - taruh paling bawah
router.get("/:id", verifyToken, getDetailLaporan);

export default router;