/************************************************************/
/* File        : data.js                                    */
/* Path        : /data.js                                   */
/* Project     : Devil Profiles                             */
/* URL         : https://deco82.github.io/devil-profiles/   */
/* Description : Centralized data repository for avatars.   */
/*               Stores usernames, image paths, and         */
/*               detailed descriptions in JSON format       */
/*               for easy maintenance.                      */
/* Author      : Aji Wijayono                               */
/* Email       : aji.wijayono@gmail.com                     */
/* Created     : 17 March 2026                              */
/*----------------------------------------------------------*/
/* © 2026 Aji Wijayono — All rights reserved.               */
/* Crafted with precision and clean architecture.           */
/************************************************************/

const avatarData = {
  FYDL: [
    {
      image: "images/FYDL/FYDL_Alliance_GrandPortrait_v1-0.png",
      tema: "The Fiery Devil United Front - Alliance Grand Portrait v1.0",
      aliansi: "FYDL",
      desc: "Potret kolektif dari seluruh komander yang tergabung dalam aliansi #FYDL (Fiery Devil), melambangkan keragaman, kekuatan, dan kesatuan tim.",
      details: [
        "Karakter: 30 karakter chibi elit unik dalam satu bingkai, mewakili berbagai persona komander (Ksatria, Penyihir, Penjelajah, Tehnokrat, dll).",
        "Aset Utama: Bola Energi Surya (Pusat), Bingkai Mekanikal Gear Raksasa, dan Siluet Kota Post-Apocalyptic di bawah Blood Moon.",
        "Elemen Grafis: Efek kode biner (Digital), Blood Moon bercahaya, dan ukiran lencana aliansi #FYDL (Phoenix) yang megah.",
        "Pencahayaan: Pencahayaan intens (Firelight) yang dramatis dari bawah, menciptakan gradasi api merah-oranye yang hangat namun berbahaya.",
        "Easter Egg: Elemen 'Key Access' dan 'Key' yang tersebar secara halus di bingkai mekanikal, melambangkan akses tak terbatas tim.",
        "Palet Warna: Crimson Red, Burning Orange, dan Jet Black (Energi, Bahaya, dan Kekuatan).",
      ],
    },
    {
      image: "images/FYDL/FYDL_Alliance_GrandPortrait_v2-0.png",
      tema: "The Eternal Flame Council - Alliance Grand Portrait v2.0",
      aliansi: "FYDL",
      desc: "Perombakan total taktis (v2.0) dari potret aliansi #FYDL, menampilkan 'Dewan Api Abadi' dalam posisi rapat strategi United di dalam bunker komando rahasia.",
      details: [
        "Latar Belakang: Bunker komando taktis di bawah reruntuhan kota, diterangi aliran lava alami di dinding batu, menciptakan atmosfer serius dan mendalam.",
        "Komposisi Karakter: 30+ karakter chibi elit dalam formasi United Leaders. Tidak berdiri diam; mereka aktif dalam pose rapat strategi, melihat hologram, dan memeriksa persenjataan.",
        "Pusat (The Core): Peta strategi hologram besar (melayang) dengan pendaran cahaya biru-neon, menampilkan wilayah perang dan logo Phoenix #FYDL yang berputar.",
        "Persenjataan Elit: Penambahan detail senjata berat taktis (meriam laser, robot drone kecil, pedang api) yang tersebar di sekitar meja komando, menekankan tema Survival Game.",
        "Palet Warna: Crimson Red, Burning Orange, Midnight Black (Kekuatan Api) dipadu dengan Electric Blue (Teknologi Hologram).",
      ],
    },
    {
      image: "images/FYDL/FYDL_Eid_Special_Edition_1447H.png",
      tema: "The Fiery Ketupat Gathering - Eid Special Edition",
      aliansi: "FYDL",
      desc: "Edisi spesial kolaborasi Idul Fitri 1447 H, menampilkan seluruh komander aliansi #FYDL dalam suasana penuh kedamaian, kebersamaan, dan kesucian di depan Masjid Terapung.",
      details: [
        "Latar Belakang: Pelataran Masjid Terapung modern dengan arsitektur geometris Islami di tepi pantai, di bawah pendaran bulan purnama dan siluet Monas di kejauhan.",
        "Komposisi Karakter: 30+ karakter chibi mengenakan busana Muslim/Muslimah (Baju Koko & Hijab) dengan aksen warna aliansi, berpose ramah sambil memegang ketupat dan bersila bersama.",
        "Pusat Visual (The Core): Hiasan Ketupat Raksasa yang memancarkan cahaya emas hangat, menggantikan posisi hologram strategi sebagai simbol kebersamaan.",
        "Elemen Taktikal: Drone pengintai, persenjataan berat, dan robot pendamping tetap hadir namun dalam mode 'standby' yang damai, dihiasi lampu lentera tradisional.",
        "Palet Warna: Biru Malam (Kosmik), Emas (Suci), Hijau Ketupat (Tradisi), dan Oranye Api (Identitas FYDL).",
      ],
    },
  ],
  Deco82: [
    {
      image: "images/Deco82/Deco82_FYDL_v1-0.png",
      tema: "Last War: Survival - Fiery Devil",
      aliansi: "FYDL",
      desc: "Representasi digital persona Deco82 sebagai 'Fiery Devil' dalam dunia post-apocalyptic.",
      details: [
        "Karakter: Chibi Warrior dengan Tactical Goggles & Setelan Api.",
        "Aset Utama: Motor Cruiser Kustom, Inti Energi Surya, & Landmark Siluet Kota.",
        "Elemen Grafis: Efek Kode Biner (Digital), Blood Moon, & Ikon Kunci Emas (Key Access).",
        "Palet Warna: Dominasi Merah-Oranye (Energi/Bahaya) & Hitam (Ketangguhan).",
      ],
    },
    {
      image: "images/Deco82/deco82_x_mooncute_idul_fitri_1447h.png",
      tema: "Idul Fitri 1447H Collaboration",
      aliansi: "FYDL",
      desc: "Karya kolaborasi spesial antara Deco82 dan Mooncute dalam menyambut hari kemenangan dengan nuansa hangat.",
      details: [
        "Karakter: Deco82 (Baju Koko & Peci) bersama Mooncute (Hijab Hijau Tosca) dalam gaya Chibi.",
        "Aset Utama: Motor Cruiser (Identitas Deco82), Ketupat, serta karakter Ikan Hiu & Buaya (Simbolis Kota Surabaya).",
        "Elemen Grafis: Ornamen Islami Klasik, Bulan Sabit Berapi (Ciri Khas FYDL), & Lampion Gantung.",
        "Palet Warna: Hijau Sage & Emas (Tradisi/Suci) dipadu Biru Malam (Kedamaian).",
      ],
    },
    {
      image: "images/Deco82/Deco82_Lost_In_The_Crowd.png",
      tema: "LOST IN THE CROWD",
      aliansi: "FYDL",
      desc: "Representasi visual dari fenomena 'Loneliness in a Crowd', mencerminkan perjuangan batin seorang komandan militer yang merasa hampa dan kehilangan tujuan hidup meski berada di tengah kesibukan markas.",
      details: [
        "Karakter: Komandan pria (3D Chibi) dengan armor sci-fi hitam beraksen api taktis, kacamata pelindung, dan ekspresi wajah melamun menatap kosong.",
        "Aset Utama: Barak/pangkalan militer Tangerang yang ramai dengan prajurit latar belakang yang dibuat agak kabur (out of focus).",
        "Elemen Grafis: Emblem Radar HUD (Tengah Kiri: FREQ: 82.00 | LOC: TGR), Badge Aliansi (Tengah Kanan: [#FYDL] | [#1252]), bingkai retak dengan labirin terputus, kompas rusak, dan jam pasir kosong.",
        "Palet Warna: Latar belakang hangat (oranye/kuning) kontras dengan sorotan rim light dingin (cyan/biru muda) pada karakter utama.",
      ],
    },
    {
      image: "", // Contoh jika gambar sedang dibuat (Coming Soon)
      tema: "Top Secret Project",
      aliansi: "FYDL",
      desc: "Project avatar rahasia yang sedang dikerjakan.",
      details: ["Status: In Progress", "ETA: Soon"],
    },
  ],
  Mooncute: [
    {
      image: "images/Mooncute/Mooncute_FYDL_v1-0.png",
      tema: "Moonlight Guardian - Cat Edition",
      aliansi: "FYDL",
      desc: "Persona digital Mooncute yang memadukan estetika malam yang tenang dengan keceriaan karakter bertema kucing.",
      details: [
        "Karakter: Gadis Chibi mengenakan Onesie (Kigurumi) Kucing dengan aksesoris bintang di rambut.",
        "Aset Utama: Bulan Sabit Raksasa sebagai singgasana, Hiu & Buaya (Simbol Suroboyo) versi imut.",
        "Elemen Grafis: Langit malam berbintang, awan lembut, dan bingkai lingkaran kristal bercahaya.",
        "Palet Warna: Pastel Ungu, Biru Malam, & Kuning Lembut (Ketenangan/Keajaiban).",
      ],
    },
    {
      image: "images/Mooncute/Mooncute_VODL_v1-0.png",
      tema: "Vortex Guardian - Night Edition",
      aliansi: "VODL",
      desc: "Representasi Mooncute dalam aliansi VODL, menonjolkan kekuatan mistis dari pusaran galaksi ungu.",
      details: [
        "Karakter: Chibi Mooncute mengenakan Onesie Kucing Hitam-Ungu dengan Orbs Api Biru di tangan.",
        "Aset Utama: Bulan Sabit Kristal, Hiu & Buaya Suroboyo, serta efek pecahan batu melayang (Levitation).",
        "Elemen Grafis: Background Vortex (Pusaran) Galaksi, bintang jatuh, dan logo Aliansi #VODL (Vortex Of The Devil).",
        "Palet Warna: Deep Purple & Electric Blue (Misteri/Kekuatan Cosmic) dipadu Hitam (Elegan).",
      ],
    },
    {
      image: "images/Mooncute/mooncute_x_deco82_idul_fitri_1447h.png",
      tema: "Idul Fitri 1447H Collaboration - VODL Edition",
      aliansi: "VODL",
      desc: "Edisi kolaborasi Mooncute dan Deco82 dengan identitas aliansi VODL, menampilkan suasana hangat jamuan hari raya.",
      details: [
        "Karakter: Mooncute (Membawa Nampan Kue Lebaran) & Deco82 (Memegang Api Biru Mystical).",
        "Aset Utama: Hidangan Kue Kering, Ketupat, Motor Cruiser, serta Ikan Hiu & Buaya (Identitas Suroboyo).",
        "Elemen Grafis: Logo Aliansi #VODL (Vortex Of The Devil) dengan aksen bunga & bulan sabit, serta bingkai floral hijau.",
        "Palet Warna: Hijau Emerald & Cream (Harmoni Tradisional) dengan sentuhan Api Biru (Kekuatan Vortex).",
      ],
    },
    {
      image: "images/Mooncute/Mooncute_VODL_Pink_v1-0.png",
      tema: "Vortex Guardian - Pink Nebula Edition",
      aliansi: "VODL",
      desc: "Edisi spesial Mooncute dalam balutan nuansa nebula merah muda, memadukan sisi feminin dengan kekuatan Vortex.",
      details: [
        "Karakter: Chibi Mooncute dengan Onesie Kucing berwarna Pink Cerah dan bola api oranye kemerahan.",
        "Aset Utama: Bulan Sabit Kristal, Ikon Suroboyo (Hiu & Buaya), serta taburan bintang jatuh.",
        "Elemen Grafis: Pusaran (Vortex) Nebula Pink, batuan kristal melayang, dan badge Aliansi #VODL.",
        "Palet Warna: Rose Pink, Magenta, & Deep Maroon (Kasih Sayang/Keberanian) dengan aksen Cahaya Kuning.",
      ],
    },
    {
      image: "images/Mooncute/Mooncute_VODL_Pink_v1-1.png",
      tema: "Moonlight Embracer - Hoodie Edition",
      aliansi: "VODL",
      desc: "Edisi spesial Mooncute yang memeluk bulan sabit raksasa dengan gaya casual menggunakan hoodie, menunjukkan kendali atas elemen kosmik.",
      details: [
        "Karakter: Chibi Mooncute dengan Hoodie Pink bertudung, memeluk bulan sabit. Aksesoris bulan sabut & bintang di rambut.",
        "Aset Utama: Bulan Sabit Kristal (Sebagai singgasana), Ikon Suroboyo (Hiu & Buaya) yang ekspresif, dan awan lembut.",
        "Elemen Grafis: Pusaran (Vortex) Nebula Pink di luar bingkai, bintang gantung, dan lencana Aliansi #VODL yang elegan.",
        "Palet Warna: Rose Pink, Lavender, & Putih Mutiara (Kelembutan/Ketenangan) dengan aksen cahaya lembut.",
      ],
    },
    {
      image: "images/Mooncute/Mooncute_VODL_Pink_v1-2.png",
      tema: "Moonlight Hijab - Suramadu Edition",
      aliansi: "VODL",
      desc: "Edisi spesial Mooncute berhijab yang memancarkan kedamaian di depan Jembatan Suramadu, simbol kebanggaan identitas lokal.",
      details: [
        "Karakter: Chibi Mooncute mengenakan Hijab Pink dan memegang lentera (fanoos) bercahaya.",
        "Aset Utama: Jembatan Suramadu (Siluet Biru), Bulan Sabit Kristal, dan awan putih lembut.",
        "Elemen Grafis: Bingkai oktagon Islami, lampion gantung, dan lencana Aliansi #FYDL (Fiery Devil) dengan gaya orb.",
        "Palet Warna: Soft Pink (Kelembutan) & Sky Blue (Kejernihan) dengan aksen emas dari cahaya lentera.",
      ],
    },
    {
      image: "images/Mooncute/Mooncute_VODL_Pink_v1-3.png",
      tema: "Moonlight Hijab - Backlit Suramadu Edition",
      aliansi: "VODL",
      desc: "Edisi spesial Mooncute berhijab dengan posisi bulan sabit di belakang karakter, menciptakan efek Backlit yang dramatis di depan Jembatan Suramadu.",
      details: [
        "Karakter: Chibi Mooncute berhijab pink, duduk di depan bulan sabit, memegang lentera fanoos dengan posisi tangan yang lebih terbuka.",
        "Aset Utama: Jembatan Suramadu (Siluet Biru), Bulan Sabit Raksasa (Di Belakang Karakter), dan taburan bintang jatuh.",
        "Elemen Grafis: Bingkai oktagon Islami, lampion gantung, lencana Aliansi #FYDL (Gaya Orb), dan efek cahaya Backlit.",
        "Palet Warna: Soft Pink & Sky Blue dengan aksen Emas intens dari cahaya bulan dan lentera.",
      ],
    },
    {
      image: "images/Mooncute/Mooncute_Found_In_The_Silence.png",
      tema: "FOUND IN THE SILENCE",
      aliansi: "FYDL",
      desc: "Representasi visual dari keheningan jarak jauh, menggambarkan seorang operator taktis wanita yang mengisolasi diri di menara sunyi, mencari arah di tengah hampa dan dinginnya malam.",
      details: [
        "Karakter: Operator/sniper wanita (3D Chibi) dengan seragam night-ops ramping, headset komunikasi, memegang gadget taktis dengan senyum tipis lembut.",
        "Aset Utama: Menara pantau militer yang tinggi dan sunyi dengan pemandangan cakrawala malam kota Surabaya bertabur lampu dari kejauhan.",
        "Elemen Grafis: Emblem Radar HUD (Tengah Kiri: FREQ: 82.00 | LOC: SBY), Badge Aliansi (Tengah Kanan: [#FYDL] | [#1252]), bingkai kaca retak dengan gelombang flatline, kompas eror 'LOST', dan siluet jangkar melayang.",
        "Palet Warna: Dominasi warna malam yang dingin (biru tua/perak) kontras dengan pendaran cahaya hangat (amber/oranye neon) dari layar gadget ke wajah karakter.",
      ],
    },
  ],
  黄Adeline: [
    {
      image: "images/Adeline/Adeline_FYDL_v1-0.png",
      tema: "Elemental Phoenix - Fire Poodle Edition",
      aliansi: "FYDL",
      desc: "Representasi Adeline dalam aliansi FYDL, menggabungkan semangat Phoenix dengan persona imut namun membara bersama pendamping Fire Poodle-nya.",
      details: [
        "Karakter: Chibi Adeline mengenakan Hoodie Onesie bertema Poodle Api dengan rambut ekor api menyala.",
        "Aset Utama: Monas (Simbol Identitas Jakarta), Siluet Kota, & Pendamping Fire Poodle berkalung bel.",
        "Elemen Grafis: Bingkai oktagon Islami-Art Deco, logo Phoenix Aliansi #FYDL (Fiery Devil), & bintang gantung.",
        "Marga '黃' (Huáng): Elemen Teks Tionghoa di depan nama Adeline yang berarti 'Kuning' (Marga Huang), melambangkan kemakmuran, kehormatan, & identitas keluarga yang kuat.",
        "Palet Warna: Dominasi Merah Crimson & Emas (Kekuatan/Energi Api) dengan aksen Krem (Keceriaan).",
      ],
    },
    {
      image: "images/Adeline/BabyAdeline_FYDL_v1-0.png",
      tema: "Fire Spirit Hatchling - Baby Edition",
      aliansi: "FYDL",
      desc: "Representasi BabyAdeline dalam aliansi FYDL, menampilkan sisi 'Hatchling' (menetas) yang imut namun sudah memancarkan potensi api Phoenix.",
      details: [
        "Karakter: Baby Chibi mengenakan Hoodie Onesie Poodle Api, duduk dengan ekspresi polos & mata berapi.",
        "Aset Utama: Monas (Simbol Identitas Jakarta), Siluet Kota, Tugu Selamat Datang (Miniatur di Air Mancur), & bunga sakar.",
        "Elemen Grafis: Bingkai oktagon Islami-Art Deco, logo Phoenix Aliansi #FYDL (Fiery Devil), & bintang gantung.",
        "Marga '黃' (Huáng): Elemen Teks Tionghoa di depan nama BabyAdeline yang berarti 'Kuning' (Marga Huang), melambangkan kemakmuran, kehormatan, & identitas keluarga yang kuat.",
        "Palet Warna: Dominasi Merah Crimson, Emas, & Krem (Kekuatan Api & Keceriaan).",
      ],
    },
    {
      image: "images/Adeline/Adeline_VODL_v1-0.png",
      tema: "Vortex Blossom - Sakura Poodle Edition",
      aliansi: "VODL",
      desc: "Representasi Adeline dalam aliansi VODL, memadukan kelembutan bunga Sakura dengan kekuatan mistis Vortex.",
      details: [
        "Karakter: Chibi Adeline mengenakan Hoodie Poodle krem-pink dengan hiasan kelopak Sakura dan mata ungu bercahaya.",
        "Aset Utama: Siluet Monas, Pendamping Poodle putih yang imut, & hamparan bunga Sakura (Ceri) yang sedang mekar.",
        "Elemen Grafis: Bingkai melingkar dengan ornamen Vortex di sudut, lencana Aliansi #VODL (Vortex Of The Devil), & bola energi (orb) Sakura.",
        "Marga '黃' (Huáng): Simbol Tionghoa yang berarti 'Kuning', merepresentasikan marga keluarga, kemakmuran, & kehormatan yang tak luntur meski berpindah aliansi.",
        "Palet Warna: Dusty Rose, Soft Pink, & Ungu Mistis (Elegansi/Ketenangan) dipadu warna Putih (Kesucian).",
      ],
    },
    {
      image: "images/Adeline/Adeline_VODL_v1-1.png",
      tema: "Vortex Blossom - Brown Poodle Edition",
      aliansi: "VODL",
      desc: "Variasi v1.1 Adeline dalam aliansi VODL, menampilkan pendamping Brown Poodle di tengah suasana Sakura yang mistis.",
      details: [
        "Karakter: Chibi Adeline mengenakan Hoodie Poodle krem-pink dengan ekspresi tenang dan mata ungu kristal.",
        "Aset Utama: Pendamping Brown Poodle (Cokelat), Siluet Monas, & Kelopak Sakura yang bermekaran di latar depan.",
        "Elemen Grafis: Ornamen Vortex (Pusaran) di setiap sudut bingkai, lencana #VODL (Vortex Of The Devil), & orb energi Sakura melayang.",
        "Marga '黃' (Huáng): Karakter Tionghoa yang berarti 'Kuning'. Secara filosofis melambangkan elemen tanah (pusat), kemakmuran, serta kehormatan garis keturunan Huang yang tetap dibawa dalam persona digitalnya.",
        "Palet Warna: Rose Gold, Mauve, & Cokelat Tanah (Kehangatan/Stabilitas) dalam bingkai magis.",
      ],
    },
    {
      image: "images/Adeline/Adeline_VODL_v1-2.png",
      tema: "Vortex Empress - Sakura Kimono Edition",
      aliansi: "VODL",
      desc: "Variasi v1.2 Adeline dalam aliansi VODL, menampilkan estetika oriental yang anggun dengan busana tradisional di tengah badai Sakura.",
      details: [
        "Karakter: Chibi Adeline mengenakan Kimono Pink dengan hiasan rambut bunga Sakura (Kanzashi) dan mata ungu yang dalam.",
        "Aset Utama: Pendamping Brown Poodle, Siluet Monas, & Kelopak Sakura yang mengelilingi karakter secara melingkar.",
        "Elemen Grafis: Bingkai elegan dengan aksen Vortex (Pusaran) kosmik, lencana #VODL (Vortex Of The Devil), & orb energi bunga.",
        "Marga '黃' (Huáng): Karakter Tionghoa yang berarti 'Kuning'. Melambangkan akar keluarga Huang, kemuliaan, dan elemen 'Tanah' yang menjadi pusat keseimbangan di tengah aliansi.",
        "Palet Warna: Dusty Pink, Lavender, & Gold (Keanggunan/Kemewahan) dengan latar belakang Nebula yang syahdu.",
      ],
    },
    {
      image: "images/Adeline/Adeline_VODL_v1-3.png",
      tema: "Vortex Matriarch - Sakura Kimono Grand Edition",
      aliansi: "VODL",
      desc: "Variasi v1.3 Adeline dalam aliansi VODL, menampilkan evolusi karakter yang lebih dewasa dengan estetika Kimono bangsawan di tengah pusaran Sakura.",
      details: [
        "Karakter: Persona Adeline dewasa mengenakan Kimono sutra motif Sakura, rambut tertata rapi dengan hiasan Kanzashi lengkap, memegang piring berisi bunga Sakura.",
        "Aset Utama: Pendamping Brown Poodle yang setia, siluet Monas yang megah, dan awan nebula pink.",
        "Elemen Grafis: Bingkai Vortex kosmik yang berpijar, lencana Aliansi #VODL (Vortex Of The Devil), dan gelembung energi Sakura melayang.",
        "Marga '黃' (Huáng): Simbol marga Tionghoa yang berarti 'Kuning', melambangkan kemuliaan kaisar, pusat stabilitas elemen tanah, serta kehormatan keluarga yang abadi.",
        "Palet Warna: Mauve, Dusty Rose, dan Cokelat hangat, menciptakan kesan mewah dan tenang.",
      ],
    },
  ],
  "Jay nurul": [
    {
      image: "images/Jay_nurul/Jay_nurul_VODL_v-1-0.png",
      tema: "Celestial Sorcerer - Void Edition",
      aliansi: "VODL",
      desc: "Representasi Jay nurul dalam aliansi VODL, menampilkan penguasaan atas elemen ruang angkasa dan rasi bintang.",
      details: [
        "Karakter: Chibi Warrior berambut perak dengan penutup mata (Blindfold) tunggal, mengenakan seragam taktis gelap dengan aksen bintang.",
        "Aset Utama: Miniatur tata surya yang mengorbit di tangan, pemandangan pegunungan bersalju, dan pendamping Lumba-lumba (Dolphin) kosmik.",
        "Elemen Grafis: Bingkai lingkaran dengan rasi bintang (Constellation), bulan sabit perak, dan lencana Aliansi #VODL (Vortex Of The Devil).",
        "Palet Warna: Midnight Blue, Perak, dan Biru Kristal (Kekuatan Kosmik/Ketenangan) dengan aksen oranye api kecil.",
      ],
    },
    {
      image: "images/Jay_nurul/Jay_nurul_VODL_v-1-1.png",
      tema: "Moonlight Sorcerer - Vortex Guardian Edition",
      aliansi: "VODL",
      desc: "Variasi v1.1 Jay nurul dalam aliansi VODL, menampilkan penguasaan atas energi bulan kristal dan persahabatan dengan penjaga mistis.",
      details: [
        "Karakter: Chibi Sorcerer berambut perak dengan penutup mata penuh (Blindfold), memeluk bulan sabit kristal ungu.",
        "Aset Utama: Ikon Suroboyo (Hiu & Buaya) yang berjaga di atas tebing batu, serta latar belakang bulan purnama raksasa.",
        "Elemen Grafis: Bingkai Vortex (Pusaran) ungu yang dinamis, lencana Aliansi #VODL (Vortex Of The Devil), dan bintang-bintang gantung.",
        "Palet Warna: Deep Purple, Indigo, dan Ultra Violet (Misteri/Kekuatan Batin) dengan pendaran cahaya putih kristal.",
      ],
    },
    {
      image: "images/Jay_nurul/Jay_nurul_VODL_v-1-2.png",
      tema: "Celestial Ramadan - Suramadu Edition",
      aliansi: "VODL",
      desc: "Variasi v1.2 Jay nurul dalam aliansi VODL, menampilkan ketenangan spiritual dengan latar belakang Jembatan Suramadu yang ikonik.",
      details: [
        "Karakter: Chibi Sorcerer berambut perak dengan penutup mata (Blindfold) hitam, tersenyum sembari memegang lentera (fanoos) yang bercahaya.",
        "Aset Utama: Jembatan Suramadu (Siluet Biru), Bulan Sabit Raksasa di latar belakang, dan awan putih lembut.",
        "Elemen Grafis: Bingkai oktagon Islami berwarna rose-gold, lampion gantung, dan lencana Aliansi #VODL (Vortex Of The Devil) dalam bentuk orb kristal.",
        "Palet Warna: Soft Pink, Sky Blue, dan Emas (Kedamaian/Harapan) yang kontras dengan seragam gelap karakter.",
      ],
    },
    {
      image: "images/Jay_nurul/Jay_nurul_FYDL_v-1-0.png",
      tema: "The Evolved Strategic Overlord - Taurus Glyph Edition v1.0.1",
      aliansi: "FYDL",
      desc: "Representasi personal Jay 08 (Madridista) di server 1252, mengusung perpaduan kekuatan kosmik, identitas lokal Samarinda, dan simbol zodiak Taurus yang minimalis.",
      details: [
        "Karakter: Chibi Gojo-inspired (Rambut putih, penutup mata) dalam pose 'Six Eyes' strategis, memegang orb energi 'Hollow Purple'.",
        "Aset Utama: Bola energi Hollow Purple, bulan ungu kosmik, dan pusaran nebula.",
        "Elemen Grafis: Bingkai Vortex ungu tua dengan ornamen bintang, lencana #FYDL, dan informasi server #1252.",
        "Badge Samarinda: Landmark Jembatan Mahakam dan Tugu Pesut tanpa satwa atau teks tambahan untuk visual yang bersih.",
        "Badge Zodiak: Menampilkan Glyph Astrologi Taurus (♉) yang minimalis dan elegan.",
        "Palet Warna: Biru Malam, Ungu Kosmik, dan Emas.",
      ],
    },
  ],
  ValrJen1907: [
    {
      image: "images/ValrJen1907/ValrJen1907_VODL_v1-0.png",
      tema: "The Crow's Flight - Karasuno Edition",
      aliansi: "VODL",
      desc: "Representasi ValrJen1907 dalam aliansi VODL, mengusung semangat pantang menyerah tim Karasuno High dari seri Haikyuu!!.",
      details: [
        "Karakter: Chibi Jen mengenakan kacamata dan Jaket Sport Karasuno High (Hitam-Putih-Biru).",
        "Aset Utama: Burung Gagak (The Crows), Bola Voli Bersayap, dan siluet gedung pencakar langit malam.",
        "Elemen Grafis: Bingkai Vortex biru tua dengan ornamen papan strategi (Clipboard), awan bergulung, dan lencana #VODL.",
        "Easter Egg: Slogan 'Fly High' di samping karakter, melambangkan ambisi untuk terbang melampaui batas.",
        "Palet Warna: Midnight Blue, Slate Gray, dan Putih (Kedewasaan & Sportivitas).",
      ],
    },
    {
      image: "images/ValrJen1907/ValrJen1907_VODL_v1-1.png",
      tema: "The Celestial Winged Strategist - Vortex Empress v1.1",
      aliansi: "VODL",
      desc: "Representasi elit ValrJen1907 dalam aliansi VODL, menampilkan evolusi karakter dewasa yang anggun dengan kontrol penuh atas elemen taktikal.",
      details: [
        "Karakter: Persona ValrJen dewasa berambut panjang dan berkacamata, mengenakan jubah elit taktis (Karasuno/VODL).",
        "Aset Utama: Bola voli bersayap mistis yang dipegang bangga, Papan strategi (Clipboard) digital yang menyala dengan data.",
        "Elemen Grafis: Bingkai oktagon Islami rose-gold, Vortex (Pusaran) energi kosmik ungu-hitam, dan lencana Aliansi #VODL dalam bentuk orb kristal.",
        "Aura: Pancaran batin yang tenang namun misterius di balik kacamata, melambangkan keahlian manipulasi ruang dan waktu.",
        "Palet Warna: Dusty Pink, Midnight Blue, Silver, dan Mauve (Elegansi/Kemewahan).",
      ],
    },
    {
      image: "images/ValrJen1907/ValrJen1907_VODL_v1-2.png",
      tema: "Void-Bound Strategist - Vortex Empress v1.2",
      aliansi: "VODL",
      desc: "Representasi elit ValrJen1907 dalam aliansi VODL, menampilkan persona 'Void-Bound Strategist' yang megah dengan kontrol mutlak atas elemen Vortex kosmik.",
      details: [
        "Karakter: Persona ValrJen dewasa berambut panjang dan berkacamata, mengenakan jubah elit taktis (Karasuno/VODL).",
        "Pose: Pose statis yang mendominasi, menopang papan strategi (Clipboard) digital di tangan kiri, dan memegang serta menunjukkan bola voli bersayap mistis dengan bangga.",
        "Elemen Grafis: Bingkai oktagon rose-gold dengan ukiran rasi bintang voli, latar belakang Pusaran Kosmik Raksasa (Vortex) yang dinamis, serta siluet Monas (Local Landmark) di bawah. Sepasang gagak Karasuno realistis (Fly High Crows) terbang mengelilingi sebagai pengintai.",
        "Emblem Aliansi (Kunci): Lencana #VODL (Vortex Of The Devil) dirender sebagai orb kristal ungu yang **sangat menonjol dan diletakkan di tengah kanan bingkai**.",
        "Teks: Nama 'ValrJen1907' di atas (Gothic font) dan 'Last War : Survival Game' di bawah (Modern font).",
        "Palet Warna: Midnight Blue, Dusty Rose, Silver, Mauve, Crimson Red, dan Ungu Crystal (Elegansi/Kekuatan Cosmic).",
      ],
    },
  ],
  "Commander Red Igris": [
    {
      image: "images/Commander_Red_Igris/Commander_Red_Igris_VODL_v-1-0.png",
      tema: "The Crimson Knight - Vortex Overlord Edition",
      aliansi: "VODL",
      desc: "Representasi Commander Red Igris dalam aliansi VODL, menampilkan ksatria berbaju zirah merah yang menguasai energi pusaran kosmik.",
      details: [
        "Karakter: Ksatria Chibi dengan zirah merah (Crimson Armor) lengkap dan helm berhias bulu panjang yang ikonik.",
        "Aset Utama: Pedang besar (Greatsword) yang dialiri energi, siluet Monas, serta jembatan layang di bawah langit malam.",
        "Elemen Grafis: Bingkai melingkar dengan ornamen Vortex ungu, bulan sabit besar di latar belakang, dan lencana Aliansi #VODL (Vortex Of The Devil).",
        "Aura: Pancaran energi ungu yang kontras dengan warna merah zirah, melambangkan loyalitas yang kuat dan kekuatan mistis yang tak terhentikan.",
        "Palet Warna: Crimson Red, Deep Purple, dan Midnight Blue (Ketangguhan & Misteri).",
      ],
    },
    {
      image: "images/Commander_Red_Igris/Commander_Red_Igris_VODL_v-1-2.png",
      tema: "Void-Bound Blood Knight - Vortex Overlord v1.1",
      aliansi: "VODL",
      desc: "Evolusi elit Commander Red Igris dalam aliansi VODL, menampilkan persona 'Void-Bound Blood Knight' yang megah dengan kontrol mutlak atas elemen Vortex kosmik.",
      details: [
        "Karakter: Persona Igris dewasa dalam zirah Crimson Red metalik yang rumit (Dark Fantasy/Techwear) dengan jubah bulu merah panjang dinamis.",
        "Pose: Pose statis yang mendominasi, memegang Greatsword 'Void-Rune' yang tertancap centrally, dan memanipulasi orb Vortex kosmik (Deep Purple/Black) secara aktif.",
        "Elemen Grafis: Bingkai oktagon rose-gold dengan ukiran rasi bintang voli, latar belakang Pusaran Kosmik Raksasa (Vortex) yang dinamis, serta siluet Monas (Local Landmark).",
        "Guardian: Sepasang gagak Karasuno realistis (Fly High Crows) terbang mengelilingi sebagai pengintai dan penjaga dimensinya.",
        "Emblem Aliansi (Kunci): Lencana #VODL (Vortex Of The Devil) dirender sebagai orb kristal ungu yang **sangat menonjol dan diletakkan di tengah kanan bingkai**.",
        "Teks: Nama 'Commander Red Igris' di atas (Gothic font) dan 'Last War : Survival Game' di bawah (Modern font).",
        "Palet Warna: Midnight Blue, Dusty Rose, Silver, Mauve, Crimson Red, dan Ungu Crystal (Elegansi/Kekuatan Cosmic).",
      ],
    },
  ],
  smallcute: [
    {
      image: "images/Smallcute/Smallcute_FYDL_v1-0.png",
      tema: "The Uchiha's Amaterasu - Fiery Devil Edition v1.0",
      aliansi: "FYDL",
      desc: "Representasi personal untuk smallcute dalam aliansi FYDL di server 1252, mengusung perpaduan kekuatan legendaris klan Uchiha dari seri Naruto dengan sentuhan visual taktis yang anggun.",
      details: [
        "Karakter: Chibi female ninja terinspirasi gaya Sasuke Uchiha dengan rambut hitam panjang, aksesori jepit bunga, dan sepasang mata Sharingan merah yang ikonik.",
        "Aset Utama: Api hitam-ungu mistis (Amaterasu) yang melayang di tangan kanan, senjata kunai, shuriken, dan gulungan ninja (scrolls) di sekeliling karakter.",
        "Elemen Grafis: Bingkai bulat bertema pusaran api taktis dengan hiasan pola Mangekyou Sharingan dan lambang kipas Uchiha di setiap sudutnya, dilengkapi lencana resmi #FYDL Fiery Devil.",
        "Branding Teks: Nama kustom 'smallcute' di bagian atas, identitas 'Server 1252' di tengah bawah, serta judul game 'Last War: Survival' pada bagian terbawah bingkai.",
        "Palet Warna: Crimson Red (Merah Lembut), Deep Purple, Hitam, dan Dark Blue (Kesan Feminin namun Kuat).",
      ],
    },
    {
      image: "images/Smallcute/Smallcute_Sasuke_FYDL_v1-1.png",
      tema: "The Avenger's Awakening - True Sasuke Uchiha Edition v1.1",
      aliansi: "FYDL",
      desc: "Representasi karakter asli Sasuke Uchiha untuk akun smallcute dalam aliansi FYDL di server 1252, mengusung estetika gelap khas klan Uchiha langsung dari seri anime Naruto Shippuden.",
      details: [
        "Karakter: Sasuke Uchiha asli (bukan chibi) dalam posisi meditasi silang, menampilkan detail mata kanan Sharingan merah dan mata kiri Rinnegan ungu.",
        "Pakaian & Ornamen: Mengenakan kemeja abu-abu tua/hitam berkerah tinggi khas era Shippuden dengan tali katan (shimenawa) ungu melingkar di pinggang.",
        "Aset Utama: Kobaran api hitam-ungu Amaterasu di telapak tangan, pedang Kusanagi dengan aliran listrik Chidori di pojok kanan atas, serta gulungan ninja dan shuriken yang melayang.",
        "Elemen Grafis: Bingkai melingkar simetris bertema pusaran api dan awan akatsuki, dihiasi lambang kipas klan Uchiha dan pola Mangekyou Sharingan di sudut-sudut bingkai.",
        "Branding Teks: Nama kustom 'smallcute' di bagian atas tengah, identitas 'Server 1252' di bawah, serta judul game 'Last War: Survival' di dasar bingkai.",
        "Palet Warna: Crimson Red, Deep Purple, Hitam, dan aksen Biru Gelap elektrik.",
      ],
    },
    {
      image: "images/Smallcute/Smallcute_Sasuke_FYDL_v1-2.png",
      tema: "The Blue Lightning God - Chidori Edition v1.2",
      aliansi: "FYDL",
      desc: "Representasi karakter asli Sasuke Uchiha untuk akun smallcute dalam aliansi FYDL di server 1252, berfokus pada elemen petir elektrik taktis dengan dominasi warna biru dan perak.",
      details: [
        "Karakter: Sasuke Uchiha asli dalam pose bertarung taktis yang dinamis, menggenggam pedang Kusanagi yang dialiri petir intens.",
        "Aset Utama: Bola listrik Chidori biru-putih yang meledak di tangan kiri, dikelilingi sambaran petir dan pusaran awan badai gelap pada latar belakang.",
        "Elemen Grafis: Bingkai metalik perak dan biru gelap dengan ornamen lambang kipas klan Uchiha di pojok kiri bawah, hiasan bunga teratai, serta pola Mangekyou Sharingan yang bersinar biru elektrik di setiap sudut atas dan bawah.",
        "Aliansi & Server: Lencana #FYDL Fiery Devil di sisi kanan dengan kobaran api taktis berwarna biru, serta keterangan 'Server 1252' di bagian bawah lingkaran.",
        "Branding Teks: Nama kustom 'smallcute' melengkung di bagian atas, serta judul bawah 'Sasuke Uchiha: The Blue Lightning God' pada dasar bingkai.",
        "Palet Warna: Azure Blue (Biru Elektrik), Perak Metalik, Midnight Blue, dan aksen Putih Terang.",
      ],
    },
    {
      image: "images/Smallcute/Smallcute_FYDL_v1-3.png",
      tema: "Chibi Fem-Sasuke Magic Edition v1.3",
      aliansi: "FYDL",
      desc: "Representasi karakter versi perempuan (genderbend) Sasuke Uchiha dalam gaya seni chibi imut untuk akun smallcute dalam aliansi FYDL di server 1252, dengan nuansa palet warna yang sedikit lembut (soft).",
      details: [
        "Karakter: Karakter perempuan berambut hitam panjang menyerupai Sasuke Uchiha dengan mata Sharingan merah, mengenakan hiasan bunga di rambut dan baju berlogo klan Uchiha.",
        "Aset Utama: Efek sihir api/aura berwarna ungu kehitaman yang menyala di atas telapak tangan dalam posisi meditasi duduk di atas awan gelap.",
        "Elemen Grafis: Bingkai melingkar ornamen gelap dengan dekorasi senjata kunai di pojok kanan atas, gulungan ninja (scroll), serta pola mata Mangekyou Sharingan merah di sudut-sudut bingkai.",
        "Aliansi & Server: Lencana #FYDL Fiery Devil dengan lambang Uchiha di sisi kanan dengan kobaran api merah, serta keterangan 'Server 1252' tepat di bawah karakter.",
        "Branding Teks: Nama kustom 'smallcute' dengan hiasan bintang melengkung di bagian atas, serta judul game 'Last War: Survival' pada bagian dasar bingkai.",
        "Palet Warna: Dark Purple (Ungu Gelap), Soft Pink/Red (Merah Lembut), Crimson, dan Midnight Blue.",
      ],
    },
    {
      image: "images/Smallcute/Smallcute_Sasuke_Ramen_v1-4.png",
      tema: "The Shinobi Break - Hokage Rock Ramen Edition v1.4",
      aliansi: "FYDL",
      desc: "Representasi santai dan lucu dari Sasuke Uchiha untuk akun smallcute dalam aliansi FYDL di server 1252, menampilkan momen santap ramen yang menggiurkan dengan latar belakang ikonik tebing Batu Hokage.",
      details: [
        "Karakter: Sasuke Uchiha dalam gaya seni chibi/anime yang ekspresif, tampak sangat menikmati semangkuk ramen hangat berkuah kental lengkap dengan sumpit di tangannya.",
        "Aset Utama: Semangkuk ramen lezat penuh topping (telur, narutomaki, daging) yang mengepulkan uap hangat, disajikan di atas meja kedai tradisional.",
        "Elemen Grafis: Latar belakang pemandangan luar kedai yang memperlihatkan monumen pahatan Batu Hokage di bawah langit sore yang cerah, serta dekorasi lampion khas kedai ramen.",
        "Aliansi & Server: Penempatan lencana #FYDL Fiery Devil yang disesuaikan secara tematis di sudut bingkai, lengkap dengan teks 'Server 1252' yang terintegrasi rapi.",
        "Branding Teks: Nama kustom 'smallcute' dengan font bergaya ninja yang melengkung dinamis di bagian atas bingkai.",
        "Palet Warna: Warm Orange (Oranye Hangat), Terrakota, Kuning Gurih (ramen), dan aksen Biru-Hitam khas pakaian Sasuke.",
      ],
    },
    {
      image: "images/Smallcute/Smallcute_Sasuke_Dango_v1-5.png",
      tema: "The Sweet Shinobi - Hokage Rock Dango Edition v1.5",
      aliansi: "FYDL",
      desc: "Representasi yang sangat imut dan santai dari Sasuke Uchiha untuk akun smallcute dalam aliansi FYDL di server 1252, menampilkan momen lahap saat memakan sate dango raksasa dengan latar belakang Batu Hokage.",
      details: [
        "Karakter: Sasuke Uchiha dalam gaya seni chibi dengan ekspresi super ceria dan mata terpejam bahagia, pipinya menggembung karena sedang mengunyah dango yang melar.",
        "Aset Utama: Sate dango tiga warna ukuran besar (merah muda, putih, hijau) yang dipegang erat, lengkap dengan tikar piknik kecil berisi secangkir teh hijau hangat dan piring dango cadangan.",
        "Elemen Grafis: Latar belakang halaman rumput hijau di depan jendela terbuka yang memperlihatkan deretan pahatan wajah Batu Hokage di bawah langit biru berawan.",
        "Aliansi & Server: Lencana #FYDL Fiery Devil berlogo Uchiha dengan kobaran api biru taktis di sisi kanan, serta keterangan teks 'Server 1252' di bagian bawah.",
        "Branding Teks: Nama kustom 'smallcute' melengkung rapi di bagian atas bingkai, serta judul game 'Last War: Survival' di dasar bingkai.",
        "Palet Warna: Biru Indigo (pakaian Sasuke), Hijau Cerah (rumput & dango), Merah Muda Lembut, dan aksen bingkai perak metalik dengan sudut Sharingan merah.",
      ],
    },
  ],
  kooncute: [
    {
      image: "images/Kooncute/Kooncute_MaineCoon_v1-0.png",
      tema: "The Majestic Maine Coon - Elegance Edition v1.0",
      aliansi: "FYDL",
      desc: "Representasi karakter orisinal bertema kucing raksasa Maine Coon yang anggun untuk akun KOONCUTE dalam aliansi Fiery Devil (#FYDL) di server 1252, berfokus pada estetika taktis yang imut, hangat, dan megah.",
      details: [
        "Karakter: Gadis anime berambut panjang yang anggun dengan telinga kucing (nekomimi) berbulu lebat dan halus khas ras Maine Coon, mengenakan sweater rajut hangat dengan ekspresi tersenyum manis.",
        "Aset Utama: Karakter utama sedang menggendong seekor kucing Maine Coon hitam berbulu lebat yang terpejam manja, dengan latar belakang ruangan hangat berfasilitas perapian dan rak buku yang estetik.",
        "Elemen Grafis: Bingkai lingkaran logam ornamen emas melingkar yang megah dengan permata biru di beberapa sisi, dihiasi detail ukiran tapak kaki kucing (paw prints) ikonik serta dekorasi tulang ikan emas di tepian bingkai.",
        "Aliansi & Server: Lencana kustom kotak emas berbentuk perisai bertuliskan '[#FYDL] Fiery Devil' di sisi kiri luar bingkai, serta keterangan teks 'Server 1252' di bagian bawah lingkaran.",
        "Branding Teks: Nama kustom 'KOONCUTE' melengkung rapi di bagian atas bingkai, serta judul label game 'Last War: Survival Game' pada dudukan dasar bingkai.",
        "Palet Warna: Kombinasi warna hangat seperti Soft Beige, Cokelat Pastel, Hitam pekat yang elegan, dengan aksen Emas Muda dan Biru Permata pada bingkai taktis.",
      ],
    },
    {
      image: "images/Kooncute/Kooncute_RaccoonTanuki_v1-0.png",
      tema: "The Adorable Outlaw - Raccoon & Tanuki Edition v1.0",
      aliansi: "FYDL",
      desc: "Representasi karakter berkerudung tema Raccoon/Tanuki yang cerdik dan menggemaskan untuk akun KOONCUTE dalam aliansi Fiery Devil (#FYDL) di server 1252, mengusung vibe playful dan aktif khas Last War.",
      details: [
        "Karakter: Gadis anime berwajah imut yang mengenakan jaket hoodie dengan kupluk bertelinga raccoon serta ekor bergaris tebal yang menggemaskan, menampilkan ekspresi ceria dan sedikit usil.",
        "Aset Utama: Efek kelopak bunga dan dedaunan pohon oak yang melayang alami di sekeliling karakter, dipadukan dengan latar belakang pemandangan hutan bernuansa musim gugur (autumn vibes) yang hangat.",
        "Elemen Grafis: Bingkai lingkaran bertema petualangan alam dengan dekorasi ranting pohon, cetakan jejak kaki raccoon (paw prints) yang estetik di sudut bingkai, serta perpaduan tekstur kayu alami dan logam modern.",
        "Aliansi & Server: Lencana resmi #FYDL Fiery Devil terpajang rapi di sisi kanan dengan aksen lambang aliansi yang tegas, lengkap dengan teks 'Server 1252' di bagian bawah lingkaran.",
        "Branding Teks: Tipografi nama 'KOONCUTE' melengkung dinamis di bagian atas dengan efek glow, serta label teks 'Last War - Survival Game' di dasar bingkai.",
        "Palet Warna: Dominasi warna Cokelat Tanah, Cream Lembut, Oranye Musim Gugur, dan aksen Hijau Daun yang segar.",
      ],
    },
    {
      image: "images/Kooncute/Kooncute_Cocoon_v1-0.png",
      tema: "The Mystical Cocoon - Butterfly Transformation Edition v1.0",
      aliansi: "FYDL",
      desc: "Representasi karakter orisinal bertema kepompong dan transformasi kupu-kupu yang cantik untuk akun KOONCUTE dalam aliansi Fiery Devil (#FYDL) di server 1252, berfokus pada estetika magis, anggun, dan penuh pendaran cahaya.",
      details: [
        "Karakter: Gadis anime berambut panjang anggun dengan hiasan sayap kupu-kupu transparan di kepala, mengenakan gaun sutra transparan yang indah dengan ekspresi tenang dan lembut.",
        "Aset Utama: Karakter utama sedang menangkupkan kedua tangan memegang kupu-kupu yang bersinar terang, dikelilingi oleh visual kepompong sutra (cocoon) yang bercahaya dan kupu-kupu transparan yang betergangan di latar belakang.",
        "Elemen Grafis: Bingkai lingkaran logam ornamen emas melingkar yang megah dengan permata biru di beberapa sisi, dihiasi detail ukiran kepompong bercahaya di sudut atas serta ilustrasi sayap kupu-kupu warna-warni yang estetik di sudut bawah.",
        "Aliansi & Server: Lencana kustom kotak emas berbentuk perisai bertuliskan '[#FYDL] Fiery Devil' di sisi kiri luar bingkai, serta keterangan teks 'Server 1252' di bagian bawah lingkaran.",
        "Branding Teks: Nama kustom 'KOONCUTE' melengkung rapi dengan font sans-serif modern di bagian atas bingkai, serta judul label game 'Last War: Survival Game' pada dudukan dasar bingkai.",
        "Palet Warna: Kombinasi warna magis yang lembut seperti Soft Lavender, Putih Mutiara, Ungu Pastel, dan pendaran cahaya Neon Mint/Cyan, berpadu dengan aksen Emas Gelap pada bingkai taktis.",
      ],
    },
  ],
  "Next Commander": [], // Contoh jika User baru didaftarkan tapi belum ada koleksi
};
