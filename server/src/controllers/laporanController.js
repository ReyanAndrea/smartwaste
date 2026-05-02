import prisma from "../prismaClient.js";

// Buat laporan baru (warga)
export const createLaporan = async (req, res) => {
  try {
    const {
      title,
      description,
      location
    } = req.body;
    const photo = req.file ? req.file.filename : null;

    if (!title || !description || !location || !photo) {
      return res.status(400).json({
        message: "Semua field harus diisi"
      });
    }

    const laporan = await prisma.laporan.create({
      data: {
        user_id: req.user.id,
        title,
        description,
        location,
        photo,
      },
    });

    res.status(201).json({
      message: "Laporan berhasil dibuat",
      laporan
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};

// Lihat riwayat laporan milik warga
export const getMyLaporan = async (req, res) => {
  try {
    const laporan = await prisma.laporan.findMany({
      where: {
        user_id: req.user.id
      },
      orderBy: {
        created_at: "desc"
      },
    });

    res.json(laporan);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};

// Lihat detail laporan (warga & admin)
export const getDetailLaporan = async (req, res) => {
  try {
    const {
      id
    } = req.params;

    const laporan = await prisma.laporan.findUnique({
      where: {
        id: parseInt(id)
      },
      include: {
        user: {
          select: {
            name: true,
            email: true
          }
        }
      },
    });

    if (!laporan) {
      return res.status(404).json({
        message: "Laporan tidak ditemukan"
      });
    }

    res.json(laporan);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};

// Lihat semua laporan (admin)
export const getAllLaporan = async (req, res) => {
  try {
    const laporan = await prisma.laporan.findMany({
      orderBy: {
        created_at: "desc"
      },
      include: {
        user: {
          select: {
            name: true,
            email: true
          }
        }
      },
    });

    res.json(laporan);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};

// Update status laporan (admin)
export const updateStatusLaporan = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const {
      status
    } = req.body;

    const validStatus = ["menunggu", "diproses", "selesai"];
    if (!validStatus.includes(status)) {
      return res.status(400).json({
        message: "Status tidak valid"
      });
    }

    const laporan = await prisma.laporan.update({
      where: {
        id: parseInt(id)
      },
      data: {
        status
      },
    });

    res.json({
      message: "Status laporan berhasil diperbarui",
      laporan
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};

// Hapus laporan (admin)
export const deleteLaporan = async (req, res) => {
  try {
    const {
      id
    } = req.params;

    await prisma.laporan.delete({
      where: {
        id: parseInt(id)
      },
    });

    res.json({
      message: "Laporan berhasil dihapus"
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};

// Lihat statistik laporan (admin)
export const getStatistik = async (req, res) => {
  try {
    const menunggu = await prisma.laporan.count({
      where: {
        status: "menunggu"
      },
    });
    const diproses = await prisma.laporan.count({
      where: {
        status: "diproses"
      },
    });
    const selesai = await prisma.laporan.count({
      where: {
        status: "selesai"
      },
    });
    const total = await prisma.laporan.count();

    res.json({
      menunggu,
      diproses,
      selesai,
      total
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};