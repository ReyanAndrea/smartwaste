import React, { useState } from 'react';
// Icons could be from lucide-react, heroicons, or similar. Using emoji/unicode for simplicity.

const ProfileJsx = () => {
  // State for profile data
  const [profile, setProfile] = useState({
    namaLengkap: 'Zalvia Inasya',
    email: 'zalvainasya.zalina@gmail.com',
    alamat: 'Jl. Darussalam',
    noHp: '+62-812-3456-7890',
    jenisKelamin: 'Perempuan',
    username: 'zalvia_inasya',
    password: '********',
  });

  // State for edit mode, popup, and edit form data
  const [isEditing, setIsEditing] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  
  // Temporary state for edit form
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
    // Validation: check if passwords match (only if password field is not empty)
    if (editForm.password && editForm.password !== editForm.confirmPassword) {
      alert('Password dan Konfirmasi Password tidak cocok!');
      return;
    }

    // Update profile
    setProfile({
      ...profile,
      namaLengkap: editForm.namaLengkap,
      email: editForm.email,
      jenisKelamin: editForm.jenisKelamin,
      username: editForm.username,
      password: editForm.password || profile.password,
    });

    // Exit edit mode
    setIsEditing(false);
    alert('Profil berhasil diperbarui!');
  };

  const handleCancelEdit = () => {
    // Reset edit form to current profile data
    setEditForm({
      namaLengkap: profile.namaLengkap,
      email: profile.email,
      jenisKelamin: profile.jenisKelamin,
      username: profile.username,
      password: '',
      confirmPassword: '',
    });
    setIsEditing(false);
  };

  const handleLogout = () => {
    setShowLogoutPopup(false);
    alert('Anda telah keluar dari akun.');
    // Redirect or clear auth state here
    // e.g., window.location.href = '/login';
  };

  // Time string for top bar (09:41)
  const currentTime = '9:41';

  return (
    <div className="min-h-screen bg-gray-100 relative font-sans">
      {/* Status Bar (iOS style) */}
      <div className="bg-white px-6 pt-2 pb-1 flex justify-between text-sm text-gray-800 border-b border-gray-200">
        <span className="font-semibold">{currentTime}</span>
        <div className="flex space-x-1">
          <span>📶</span> <span>📶</span> <span>🔋</span>
        </div>
      </div>

      {/* Conditionally render Profile View or Edit Form */}
      {!isEditing ? (
        // --- PROFILE VIEW (as per first image and "Profile Baru Warga" with data) ---
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-4">
          {/* Header */}
          <div className="px-6 pt-6 pb-2 border-b border-gray-200 flex items-center">
            <h1 className="text-xl font-bold text-gray-800">Profil</h1>
          </div>

          {/* Profile Details */}
          <div className="p-6 space-y-4">
            <div className="border-b border-gray-100 pb-3">
              <p className="text-xs text-gray-400 uppercase tracking-wide">Nama Lengkap</p>
              <p className="text-gray-800 font-medium">{profile.namaLengkap}</p>
            </div>
            <div className="border-b border-gray-100 pb-3">
              <p className="text-xs text-gray-400 uppercase tracking-wide">Email</p>
              <p className="text-gray-800 font-medium">{profile.email}</p>
            </div>
            <div className="border-b border-gray-100 pb-3">
              <p className="text-xs text-gray-400 uppercase tracking-wide">Alamat</p>
              <p className="text-gray-800 font-medium">{profile.alamat}</p>
            </div>
            <div className="border-b border-gray-100 pb-3">
              <p className="text-xs text-gray-400 uppercase tracking-wide">No. HP</p>
              <p className="text-gray-800 font-medium">{profile.noHp}</p>
            </div>
            <div className="border-b border-gray-100 pb-3">
              <p className="text-xs text-gray-400 uppercase tracking-wide">Jenis Kelamin</p>
              <p className="text-gray-800 font-medium">{profile.jenisKelamin}</p>
            </div>
            <div className="border-b border-gray-100 pb-3">
              <p className="text-xs text-gray-400 uppercase tracking-wide">Username</p>
              <p className="text-gray-800 font-medium">{profile.username}</p>
            </div>
            <div className="pb-2">
              <p className="text-xs text-gray-400 uppercase tracking-wide">Password</p>
              <p className="text-gray-800 font-medium">••••••••</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="px-6 pb-6 space-y-3">
            <button
              onClick={() => setIsEditing(true)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Edit Profil
            </button>
            <button
              onClick={() => setShowLogoutPopup(true)}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition"
            >
              Ubah Kata Sandi
            </button>
            <button
              onClick={() => setShowLogoutPopup(true)}
              className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
            >
              Keluar Dari Akun
            </button>
          </div>
        </div>
      ) : (
        // --- EDIT PROFILE FORM (based on second image: Edit Profile) ---
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-4">
          {/* Header with Back Button */}
          <div className="px-4 py-4 border-b border-gray-200 flex items-center">
            <button onClick={handleCancelEdit} className="text-blue-600 font-medium mr-4">
              ← Kembali
            </button>
            <h2 className="text-xl font-bold text-gray-800 flex-1 text-center">Edit Profil</h2>
            <div className="w-12"></div> {/* spacer for alignment */}
          </div>

          {/* Form Fields */}
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-xs text-gray-500 uppercase mb-1">Nama Lengkap</label>
              <input
                type="text"
                name="namaLengkap"
                value={editForm.namaLengkap}
                onChange={handleEditChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 uppercase mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={editForm.email}
                onChange={handleEditChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 uppercase mb-1">Jenis Kelamin</label>
              <select
                name="jenisKelamin"
                value={editForm.jenisKelamin}
                onChange={handleEditChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-500 uppercase mb-1">Username</label>
              <input
                type="text"
                name="username"
                value={editForm.username}
                onChange={handleEditChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 uppercase mb-1">Password (biarkan kosong jika tidak diubah)</label>
              <input
                type="password"
                name="password"
                value={editForm.password}
                onChange={handleEditChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 uppercase mb-1">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={editForm.confirmPassword}
                onChange={handleEditChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="px-6 pb-6 flex space-x-3">
            <button
              onClick={handleCancelEdit}
              className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              Batal
            </button>
            <button
              onClick={handleSaveProfile}
              className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Simpan
            </button>
          </div>
        </div>
      )}

      {/* Logout Popup Modal (as shown in Pop-Up Logout and combined popup) */}
      {showLogoutPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-80 max-w-md p-6 shadow-xl transform transition-all">
            {/* Pop-Up Header */}
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                <span className="text-red-600 text-xl">⚠️</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Yakin ingin keluar?</h3>
              <p className="text-sm text-gray-500 mb-6">Anda akan dikeluarkan dari akun ini</p>
            </div>
            {/* Popup Actions */}
            <div className="flex space-x-3">
              <button
                onClick={() => setShowLogoutPopup(false)}
                className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition"
              >
                Batal
              </button>
              <button
                onClick={handleLogout}
                className="flex-1 bg-red-600 text-white py-2 rounded-lg font-medium hover:bg-red-700 transition"
              >
                Keluar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileJsx;