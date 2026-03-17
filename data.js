/************************************************************/
/* File        : data.js                                    */
/* Path        : lw_devil_profiles/data.js                  */
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
  ],
  "Next Commander": [], // Contoh jika User baru didaftarkan tapi belum ada koleksi
};
