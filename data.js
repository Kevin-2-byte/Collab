const K='collab-v1';
const S=[
{n:'Nadia Safira',j:'Desain Komunikasi Visual',s:5,u:'Institut Teknologi Bandung',m:96,sk:['Figma','UI/UX Research','Design System','Blender 3D'],i:'Lomba Gemastik, Edutech',st:'Tersedia untuk Proyek'},
{n:'Fajar Nugraha',j:'Manajemen Bisnis',s:7,u:'Universitas Gadjah Mada',m:92,sk:['Pitch Deck','Financial Model','Market Validation','Lean Canvas'],i:'Inkubasi Bisnis, PKM-K',st:'Tersedia untuk Proyek'},
{n:'Aisyah Putri Rahayu',j:'Teknik Informatika',s:3,u:'ITS Surabaya',m:89,sk:['Flutter','Dart','Firebase','RESTful API'],i:'Social Impact, Mobile App',st:'Tersedia untuk Proyek'},
{n:'Dimas Arya Wicaksana',j:'Farmasi & Bioteknologi',s:5,u:'Universitas Airlangga',m:88,sk:['Riset Biomedis','Data Klinis','Penulisan Ilmiah'],i:'PKM-RE, Healthtech',st:'Mencari Tim Inti'},
{n:'Citra Dewi Lestari',j:'Ilmu Komunikasi',s:5,u:'Universitas Diponegoro',m:85,sk:['Copywriting','SEO Content','Social Strategy','PR'],i:'Creative Agency, Startup',st:'Tersedia untuk Proyek'},
{n:'Rizky Maulana',j:'Teknik Elektro',s:5,u:'Institut Teknologi Bandung',m:84,sk:['IoT','ESP32','MQTT','Arduino'],i:'Proyek IoT, PKM',st:'Tersedia untuk Proyek'}];
const P=[
{id:'cfr',k:'Social Impact & Tech',c:'Lomba & Hackathon',t:'Campus Food Rescue',d:'Platform redistribusi kelebihan makanan layak konsumsi dari kantin kampus ke panti asuhan sekitar.',o:'Rizky Maulana',need:['UI/UX Designer','Mobile Dev','Marketing'],tags:['Figma','Flutter','Supabase'],f:2,n:5,dl:'2026-11-25',m:95},
{id:'bio',k:'PKM Karsa Cipta 2025',c:'PKM & Riset',t:'BioSensor: Deteksi Merkuri',d:'Perangkat sensor optik portabel berbasis spektrometri untuk mendeteksi merkuri di kawasan sungai.',o:'Hendra Wijaya',need:['Frontend Web','Desain Casing 3D'],tags:['Python','React','CAD','Arduino'],f:3,n:5,dl:'2026-12-15',m:92},
{id:'nut',k:'Healthtech & AI',c:'Startup & Bisnis',t:'NutriCare: Asisten Nutrisi',d:'Rekomendasi gizi harian hemat biaya berbasis computer vision untuk mahasiswa rantau.',o:'Salsabila Noor',need:['Flutter Dev','Data Scientist'],tags:['PyTorch','Flutter','FastAPI'],f:2,n:4,dl:'2026-12-05',m:89},
{id:'lok',k:'Startup & Bisnis',c:'Startup & Bisnis',t:'LokerKampus: Magang & Paruh Waktu',d:'Platform agregasi kerja paruh waktu dan asisten laboratorium terpercaya.',o:'Galih Perkasa',need:['Backend Go','Product Designer'],tags:['Go','Docker','PostgreSQL','Figma'],f:1,n:4,dl:'2026-11-20',m:87},
{id:'rub',k:'Edu-Creative & VR',c:'Tugas Besar',t:'RuangBudaya: Tur Virtual',d:'Digitalisasi artefak budaya lokal nusantara dalam bentuk virtual tour.',o:'Maya Anggraini',need:['3D Modeler','WebXR Dev'],tags:['Three.js','Blender','WebXR'],f:2,n:5,dl:'2026-12-18',m:84}];
const CH={
eco:{n:'EcoTrack Team',s:'Sistem Pengelolaan Sampah Kampus • 4 anggota',m:[['Dimas Arya','Sensor ultrasonic ESP32 sudah dikalibrasi. Payload MQTT format JSON sudah saya kirim ke endpoint staging ya.','10:15'],['me','Mantap Dimas! Integrasi API di frontend dashboard sudah siap terima data realtime. Nanti malam saya deploy ke Vercel buat testing bareng.','10:30'],['Clarissa Amanda','Pihak pengelola kantin sudah menyetujui uji coba tahap 1 untuk 3 titik tempat sampah pintar minggu depan! 🎉','10:38']]},
med:{n:'MedConnect PKM-KC',s:'PKM Karsa Cipta • 3 anggota',m:[['Rizky Maulana','Besok rapat persiapan review dosen pembimbing jam 19.30 via GMeet.','Kemarin']]},
'nadia-safira':{n:'Nadia Safira',s:'DKV • ITB',m:[['Nadia Safira','Bisa tolong cek responsivitas kartu di tablet?','09:15']]}};
function seed(u,demo){return{user:u,joined:[],sent:[],
reqs:demo?[{n:'Rizky Maulana',j:'Teknik Elektro',s:5,i:'Tertarik kolaborasi proyek IoT & PKM'}]:[],
threads:demo?JSON.parse(JSON.stringify(CH)):{},
mine:demo?[
{id:'eco',k:'Lingkungan & IoT',t:'EcoTrack: Platform Pemantauan Daur Ulang Kampus',role:'Lead Frontend & IoT',d:'Sistem pemilahan sampah pintar di kantin dengan sensor ESP32, MQTT Broker, dan web dashboard.',pr:65,dl:'2026-11-25',team:4},
{id:'medp',k:'PKM Karsa Cipta 2025',t:'MedConnect: Telemedisin Offline-First untuk Posyandu 3T',role:'Fullstack Developer',d:'Rekam medis elektronik berbasis PWA untuk pemantauan gizi balita di wilayah minim sinyal.',pr:35,dl:'2026-12-15',team:3},
{id:'fin',k:'Fintech / Hackathon',t:'FinEdu: Gamifikasi Keuangan Gen Z',role:'Pemilik',d:'Simulasi investasi saham dan cashflow dengan mekanik visual RPG.',draft:1,need:['UI Designer','Content Writer'],tags:['Unity','Financial Modeling'],f:3,n:4,dl:'2026-12-30',team:3},
{id:'cb',k:'Pilot Project',t:'Campus Bite: Food Rescue Network',role:'UI/UX Designer & Product Lead',d:'Kurasi surplus makanan kantin dengan diskon hingga 70%; 180+ porsi terselamatkan.',done:1,team:2},
{id:'gem',k:'Juara 2 Nasional',t:'Gemastik XVI: Desain Pengalaman Pengguna',role:'Developer',d:'Desain antarmuka aplikasi inklusif untuk penyandang disabilitas sensorik.',done:1,team:3}]:[]}}
