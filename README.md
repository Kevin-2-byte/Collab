# Collab

Situs statis (HTML/CSS/JS) untuk mencari rekan tim lintas jurusan. Siap dihosting di GitHub Pages.

## Deploy ke GitHub Pages
1. Buat repository baru di GitHub (mis. `collab`).
2. Upload semua isi folder ini ke branch `main` (atau `git init && git add . && git commit -m "init" && git push`).
3. Settings → Pages → Source: **Deploy from a branch** → Branch `main`, folder `/ (root)` → Save.
4. Tunggu 1–2 menit; situs hidup di `https://USERNAME.github.io/collab/`.

## Struktur
- `index.html` landing, `masuk.html` masuk/daftar, `app.html` aplikasi (Beranda, Teman, Proyek, Proyek Saya, Pesan, Profil)
- `js/data.js` data contoh, `js/app.js` logika, `css/style.css` gaya

## Batasan
GitHub Pages hanya hosting statis. Akun, proyek, dan pesan disimpan di `localStorage` browser (tidak dibagikan antar pengguna). Untuk akun & chat sungguhan, sambungkan backend (mis. Supabase atau Firebase) dan ganti pemakaian `localStorage` di `js/app.js`.
