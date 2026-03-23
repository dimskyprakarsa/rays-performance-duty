/**
 * RAYS PERFORMANCE - Storage Helper
 * Digunakan untuk mengelola session dan utilitas data
 */

export const Storage = {
    // Menyimpan data login
    saveSession: (userKey, email) => {
        localStorage.setItem('userKey', userKey);
        localStorage.setItem('currentUserEmail', email);
    },

    // Mengambil data session
    getSession: () => {
        return {
            userKey: localStorage.getItem('userKey'),
            email: localStorage.getItem('currentUserEmail')
        };
    },

    // Menghapus session (Logout)
    clearSession: () => {
        localStorage.clear();
        window.location.href = 'index.html';
    },

    // Helper format mata uang
    formatMoney: (amount) => {
        return "$ " + Number(amount).toLocaleString();
    },

    // Helper format jam kerja
    formatDuration: (decimalHours) => {
        const totalSeconds = Math.floor(decimalHours * 3600);
        const h = Math.floor(totalSeconds / 3600);
        const m = Math.floor((totalSeconds % 3600) / 60);
        const s = totalSeconds % 60;
        return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }
};