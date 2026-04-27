import React, { useState } from 'react';

const Profile = () => {
  // Data profil
  const [profile, setProfile] = useState({
    namaLengkap: 'Zalvia Inasya',
    email: 'zalvainasya.zalina@gmail.com',
    alamat: 'Jl. Darussalam',
    noHp: '+62-812-3456-7890',
    jenisKelamin: 'Perempuan',
    username: 'zalvia_inasya',
    password: '********',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);

  // Form edit
  const [editForm, setEditForm] = useState({
    namaLengkap: profile.namaLengkap,
    email: profile.email,
    jenisKelamin: profile.jenisKelamin,
    username: profile.username,
    password: '',
    confirmPassword: '',
  });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = () => {
    if (editForm.password && editForm.password !== editForm.confirmPassword) {
      alert('Password dan Confirm Password tidak cocok!');
      return;
    }
    setProfile({
      ...profile,
      namaLengkap: editForm.namaLengkap,
      email: editForm.email,
      jenisKelamin: editForm.jenisKelamin,
      username: editForm.username,
      password: editForm.password || profile.password,
    });
    setIsEditing(false);
    alert('Profil berhasil diperbarui!');
  };

  const handleLogout = () => {
    setShowLogoutPopup(false);
    alert('Anda telah keluar dari akun.');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Card Utama */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg overflow-hidden">
        
        {/* Header dengan waktu 9:41 sesuai UI */}
        <div className="px-6 py-3 bg-white border-b border-gray-200 flex justify-between items-center">
          <span className="text-sm font-semibold text-black">9:41</span>
          <div className="flex gap-1">
            <span className="text-sm">📶</span>
            <span className="text-sm">🔋</span>
          </div>
        </div>

        {!isEditing ? (
          // ========== PROFIL VIEW ==========
          <>
            <div className="px-6 pt-6 pb-2">
              <h1 className="text-2xl font-bold text-gray-800">Profil</h1>
            </div>

            <div className="px-6 py-4 space-y-4">
              {/* Nama Lengkap */}
              <div className="border-b border-gray-100 pb-3">
                <p className="text-xs text-gray-400 uppercase tracking-wide">Nama Lengkap</p>
                <p className="text-gray-800 font-medium text-base">{profile.namaLengkap}</p>
              </div>
              
              {/* Email */}
              <div className="border-b border-gray-100 pb-3">
                <p className="text-xs text-gray-400 uppercase tracking-wide">Email</p>
                <p className="text-gray-800 font-medium text-base">{profile.email}</p>
              </div>
              
              {/* Alamat */}
              <div className="border-b border-gray-100 pb-3">
                <p className="text-xs text-gray-400 uppercase tracking-wide">Alamat</p>
                <p className="text-gray-800 font-medium text-base">{profile.alamat}</p>
              </div>
              
              {/* No HP */}
              <div className="border-b border-gray-100 pb-3">
                <p className="text-xs text-gray-400 uppercase tracking-wide">No. HP</p>
                <p className="text-gray-800 font-medium text-base">{profile.noHp}</p>
              </div>
            </div>

            {/* Tombol Aksi */}
            <div className="px-6 pb-8 space-y-3">
              <button
                onClick={() => setIsEditing(true)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition duration-200"
              >
                Edit Profil
              </button>
              <button
                onClick={() => setShowChangePassword(true)}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 rounded-xl font-semibold transition duration-200"
              >
                Ubah Kata Sandi
              </button>
              <button
                onClick={() => setShowLogoutPopup(true)}
                className="w-full border border-red-500 text-red-600 hover:bg-red-50 py-3 rounded-xl font-semibold transition duration-200"
              >
                Keluar Dari Akun
              </button>
            </div>
          </>
        ) : (
          // ========== EDIT PROFIL FORM ==========
          <>
            <div className="px-4 py-4 border-b border-gray-200 flex items-center">
              <button 
                onClick={() => setIsEditing(false)} 
                className="text-blue-600 font-medium text-base"
              >
                ← Kembali
              </button>
              <h2 className="text-xl font-bold text-gray-800 flex-1 text-center">Edit Profile</h2>
              <div className="w-16"></div>
            </div>

            <div className="p-6 space-y-4">
              {/* Nama Lengkap */}
              <div>
                <label className="block text-xs text-gray-500 uppercase mb-1 font-semibold">Nama Lengkap</label>
                <input
                  type="text"
                  name="namaLengkap"
                  value={editForm.namaLengkap}
                  onChange={handleEditChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nama Lengkap"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs text-gray-500 uppercase mb-1 font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={editForm.email}
                  onChange={handleEditChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Email"
                />
              </div>

              {/* Jenis Kelamin - Radio button style seperti di UI */}
              <div>
                <label className="block text-xs text-gray-500 uppercase mb-1 font-semibold">Jenis Kelamin</label>
                <div className="flex gap-6 mt-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="jenisKelamin"
                      value="Laki-laki"
                      checked={editForm.jenisKelamin === 'Laki-laki'}
                      onChange={handleEditChange}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>Laki-laki</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="jenisKelamin"
                      value="Perempuan"
                      checked={editForm.jenisKelamin === 'Perempuan'}
                      onChange={handleEditChange}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>Perempuan</span>
                  </label>
                </div>
              </div>

              {/* Username */}
              <div>
                <label className="block text-xs text-gray-500 uppercase mb-1 font-semibold">Username</label>
                <input
                  type="text"
                  name="username"
                  value={editForm.username}
                  onChange={handleEditChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Username"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs text-gray-500 uppercase mb-1 font-semibold">Password</label>
                <input
                  type="password"
                  name="password"
                  value={editForm.password}
                  onChange={handleEditChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Password"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-xs text-gray-500 uppercase mb-1 font-semibold">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={editForm.confirmPassword}
                  onChange={handleEditChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Confirm Password"
                />
              </div>
            </div>

            {/* Tombol Simpan / Batal */}
            <div className="px-6 pb-6 flex gap-3">
              <button
                onClick={() => setIsEditing(false)}
                className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-xl font-semibold hover:bg-gray-300 transition"
              >
                Batal
              </button>
              <button
                onClick={handleSaveProfile}
                className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
              >
                Simpan
              </button>
            </div>
          </>
        )}
      </div>

      {/* ========== POPUP LOGOUT ========== */}
      {showLogoutPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-[320px] p-6 shadow-xl">
            <div className="text-center">
              <div className="mb-4">
                <div className="mx-auto w-14 h-14 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⚠️</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Yakin ingin keluar?</h3>
              <p className="text-gray-500 text-sm mb-6">Anda akan dikeluarkan dari akun ini</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowLogoutPopup(false)}
                className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-xl font-medium hover:bg-gray-200 transition"
              >
                Batal
              </button>
              <button
                onClick={handleLogout}
                className="flex-1 bg-red-600 text-white py-2 rounded-xl font-medium hover:bg-red-700 transition"
              >
                Keluar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========== POPUP UBAH KATA SANDI (jika diperlukan) ========== */}
      {showChangePassword && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-[350px] p-6 shadow-xl">
            <h3 className="text-xl font-bold mb-4 text-center">Ubah Kata Sandi</h3>
            <input
              type="password"
              placeholder="Password Baru"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Konfirmasi Password Baru"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex gap-3">
              <button
                onClick={() => setShowChangePassword(false)}
                className="flex-1 bg-gray-200 py-2 rounded-xl font-semibold"
              >
                Batal
              </button>
              <button
                onClick={() => {
                  alert('Kata sandi berhasil diubah');
                  setShowChangePassword(false);
                }}
                className="flex-1 bg-blue-600 text-white py-2 rounded-xl font-semibold"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;