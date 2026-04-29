/**
 * DHONTOL CAT HOUSE - Booking Logic
 */

// Pastikan fungsi ini bisa diakses secara global oleh tombol di HTML
window.sendWhatsApp = function(paket) {
    // 1. Pengaturan Nomor WhatsApp (Ganti dengan nomor aslimu)
    // Gunakan format internasional tanpa tanda '+' (contoh: 62812...)
    const nomorWA = "6285883878382"; 

    // 2. Draft Pesan Otomatis
    let pesan = "";

    // Logika pesan berdasarkan tombol yang diklik
    if (paket === 'VIP') {
        pesan = "Halo Dhontol Cat House! Saya tertarik untuk memesan *Paket VIP Luxury* (500k/malam) untuk kucing saya. Mohon informasi ketersediaan slotnya. ✨";
    } else if (paket === 'Premium') {
        pesan = "Halo Dhontol Cat House! Saya mau tanya ketersediaan *Paket Reguler* (200k/malam) untuk kucing saya. Terima kasih! 🐱🐾";
    } else if (paket === 'Reguler') {
        pesan = "Halo Dhontol Cat House! Saya mau tanya ketersediaan *Paket Reguler* (200k/malam) untuk anabul saya. Terima kasih! 🐱";
    } else {
        // Jika klik tombol "Booking Sekarang" yang di Navbar (Umum)
        pesan = "Halo Dhontol Cat House! Saya tertarik untuk memesan *Paket premium* (300k/malam) untuk kucing saya. Mohon informasi ketersediaan slotnya. ✨";
    }

    // 3. Proses Pengiriman
    // EncodeURIComponent berfungsi agar karakter spasi dan simbol aman dibaca oleh URL browser
    const linkWA = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;

    // 4. Eksekusi
    // Membuka WhatsApp di tab baru agar website kamu tetap terbuka
    window.open(linkWA, '_blank');
};