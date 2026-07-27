export interface Product {
  id: string;
  name: string;
  category: 'all' | 'hampers' | 'birthday' | 'cup' | 'special';
  price: string;
  description: string;
  badge?: string;
  image: string;
  fallbackImage: string;
  highlights: string[];
  popular?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'hampers' | 'birthday' | 'cup';
  image: string;
  fallbackImage: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  productOrdered: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const BUSINESS_INFO = {
  name: "Pudding Buah Pontianak",
  tagline: "Dessert Premium, Hampers & Birthday Cake Buah Segar Pontianak",
  shortDesc: "Pusat kreasi puding buah segar premium, hampers cantik, dan cake ulang tahun segar tanpa bahan pengawet di Pontianak & Kubu Raya.",
  whatsappNumber: "6289670972892",
  whatsappFormatted: "0896-7097-2892",
  address: "Pal Sembilan, Kec. Sungai Kakap, Kabupaten Kubu Raya, Kalimantan Barat 78391",
  addressShort: "Pal Sembilan, Kubu Raya / Pontianak",
  googleMapsEmbed: "https://maps.google.com/maps?q=Pal+Sembilan,+Kec.+Sungai+Kakap,+Kabupaten+Kubu+Raya,+Kalimantan+Barat&t=&z=15&ie=UTF8&iwloc=&output=embed",
  googleMapsDirect: "https://maps.google.com/?q=Pal+Sembilan,+Kec.+Sungai+Kakap,+Kabupaten+Kubu+Raya,+Kalimantan+Barat",
  openingHours: "Setiap Hari: 08.00 - 21.00 WIB",
  instagramUrl: "https://www.instagram.com/puddingbuah_ptk/",
  facebookUrl: "https://www.facebook.com/puddingbuahptk",
  instagramHandle: "@puddingbuah_ptk",
  facebookHandle: "Pudding Buah PTK"
};

export const PRODUCTS: Product[] = [
  {
    id: "prod-hampers",
    name: "Pudding Buah Signature (Family & Hampers Size)",
    category: "hampers",
    price: "Mulai Rp 150.000",
    description: "Puding sutra lembut lezat dipadukan dengan kelezatan vla susu vanila spesial dan topping buah-buahan segar melimpah (Anggur, Strawberry, Kiwi, Jeruk, Lengkeng). Pilihan favorit untuk hampers dan hantaran keluarga.",
    badge: "BEST SELLER",
    image: "/images/pudinghbd.png",
    fallbackImage: "/images/pudinghbd.png",
    highlights: ["Buah Pilihan Segar Melimpah", "Gratis Flakon Vla Susu Vanila", "Sudah Termasuk Box Hampers Cantik", "Bisa Tambah Kartu Ucapan Custom"],
    popular: true
  },
  {
    id: "prod-birthday",
    name: "Custom Birthday Cake Pudding",
    category: "birthday",
    price: "Mulai Rp 180.000",
    description: "Kue ulang tahun segar berbahan dasar puding buah premium yang sehat & tidak bikin enek. Bebas kustomisasi tulisan nama akrilik/cokelat, topping buah impian, dan hiasan pita elegan.",
    badge: "MOST POPULAR",
    image: "/images/pudingcutom.png",
    fallbackImage: "/images/pudingcutom.png",
    highlights: ["Custom Tulisan Nama & Usia", "Gratis Lilin Ulang Tahun & Pisau", "Tampilan Mewah & Instagrammable", "Pilihan Favorit Ulang Tahun Anak & Orang Tua"],
    popular: true
  },
  {
    id: "prod-cup",
    name: "Puding Cup Personal Set (Isi 4, 6, 9 Cup)",
    category: "cup",
    price: "Mulai Rp 65.000",
    description: "Puding cup porsi personal higienis dengan vla terpisah dan potongan buah segar di atasnya. Sangat cocok untuk hidangan acara arisan, rapat kantor, snack box ulang tahun, atau stok dessert sehat di rumah.",
    badge: "FAVORITE EVENT",
    image: "/images/pudingcup9.png",
    fallbackImage: "/images/pudingcup9.png",
    highlights: ["Tersedia Set Isi 4, 6, atau 9 Cup", "Vla Vanila Terpisah Higienis", "Mudah Dibagikan Saat Acara", "Tekstur Lembut Lumer Di Mulut"],
    popular: true
  },
  {
    id: "prod-special",
    name: "Deluxe Fruit Tumpeng / Tier Pudding",
    category: "special",
    price: "Mulai Rp 250.000",
    description: "Kreasi tumpeng puding bertingkat berukuran jumbo yang dikelilingi taman buah tropis segar. Menjadi pusat perhatian yang memukau di acara syukuran, peresmian, dan anniversary.",
    badge: "PREMIUM SELECTION",
    image: "/images/foto1.png",
    fallbackImage: "/images/foto1.png",
    highlights: ["Porsi Besar (12 - 18 Orang)", "Susunan Buah Tropis Premium", "Free Stand/Tampah Hias Cantik", "Sangat Berkesan Untuk Acara Penting"],
    popular: false
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Signature Fruit Pudding Deluxe",
    category: "hampers",
    image: "/images/foto1.png",
    fallbackImage: "/images/foto1.png",
    description: "Puding loyang bulat bertabur kiwi, anggur, strawberry, dan jeruk sunkist segar."
  },
  {
    id: "gal-2",
    title: "Happy Birthday Custom Pudding",
    category: "birthday",
    image: "/images/pudinghbd.png",
    fallbackImage: "/images/pudinghbd.png",
    description: "Kreasi puding ulang tahun spesial dengan ucapan Happy Birthday & topper buah manis."
  },
  {
    id: "gal-3",
    title: "Birthday Cake Pudding Theme",
    category: "birthday",
    image: "/images/pudingcutom.png",
    fallbackImage: "/images/pudingcutom.png",
    description: "Design khusus cake puding ulang tahun sesuai warna dan karakter keinginan pemesan."
  },
  {
    id: "gal-4",
    title: "Puding Cup Box Isi 9",
    category: "cup",
    image: "/images/pudingcup9.png",
    fallbackImage: "/images/pudingcup9.png",
    description: "Kemasan boks hampers puding cup isi 9 varian buah komplit."
  },
  {
    id: "gal-5",
    title: "Puding Cup Box Isi 6",
    category: "cup",
    image: "/images/pudingcup6.png",
    fallbackImage: "/images/pudingcup6.png",
    description: "Puding cup porsi sedang yang pas untuk hampers hadiah sahabat dan kerabat."
  },
  {
    id: "gal-6",
    title: "Puding Cup Personal Isi 4",
    category: "cup",
    image: "/images/pudingcup4.png",
    fallbackImage: "/images/pudingcup4.png",
    description: "Puding cup personal mini set untuk hampers ucapan simpel dan manis."
  },
  {
    id: "gal-7",
    title: "Special Moment Hampers Box",
    category: "hampers",
    image: "/images/foto2.png",
    fallbackImage: "/images/foto2.png",
    description: "Hampers puding eksklusif pita emas dengan kartu ucapan romantis."
  },
  {
    id: "gal-8",
    title: "Fresh Strawberry & Grape Delight",
    category: "hampers",
    image: "/images/foto3.png",
    fallbackImage: "/images/foto3.png",
    description: "Kombinasi rasa strawberry manis dan anggur segar pilihan."
  },
  {
    id: "gal-9",
    title: "Tropical Mixed Fruits Special",
    category: "hampers",
    image: "/images/foto4.png",
    fallbackImage: "/images/foto4.png",
    description: "Puding buah dengan aneka topping tropis lengkap rasa manis dan asam segar."
  },
  {
    id: "gal-10",
    title: "Premium Family Celebration",
    category: "birthday",
    image: "/images/foto5.png",
    fallbackImage: "/images/foto5.png",
    description: "Hidangan puding manis nan menyegarkan untuk kumpul hangat keluarga besar."
  },
  {
    id: "gal-11",
    title: "Elegant Gold Ribbon Edition",
    category: "hampers",
    image: "/images/foto6.png",
    fallbackImage: "/images/foto6.png",
    description: "Hampers hantaran dengan packaging pita satin emas dan vla susu dalam botol kaca."
  },
  {
    id: "gal-12",
    title: "Custom Birthday Topper",
    category: "birthday",
    image: "/images/foto7.png",
    fallbackImage: "/images/foto7.png",
    description: "Design ucapan kustom sesuai permintaan pelanggan."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testi-1",
    name: "Sisca Wijaya",
    location: "Pontianak Selatan",
    rating: 5,
    comment: "Puding buahnya bener-bener segerrr banget! Buahnya melimpah dan tidak pelit, vla vanilanya lembut gak bikin enek. Pesen buat ulang tahun mama, sekeluarga pada suka banget. Langganan terus!",
    date: "2 Minggu Lalu",
    productOrdered: "Custom Birthday Cake Pudding",
    avatar: "/images/foto1.png"
  },
  {
    id: "testi-2",
    name: "dr. Hendra Pratama",
    location: "Kubu Raya",
    rating: 5,
    comment: "Recommended bgt buat hampers jenguk atau hadiah ulang tahun! Kemasannya sangat rapi, higienis, dan pengiriman tepat waktu di area Pontianak. Pudingnya segar tiada tanding.",
    date: "1 Bulan Lalu",
    productOrdered: "Pudding Buah Signature Hampers",
    avatar: "/images/foto2.png"
  },
  {
    id: "testi-3",
    name: "Ibu Ratna Juwita",
    location: "Pontianak Kota",
    rating: 5,
    comment: "Order puding cup isi 9 buat acara arisan bulanan di rumah. Semua tamu pada nanyain pesen di mana karena pudingnya enak dan buahnya fresh banget. Admin WA nya juga ramah & gercep!",
    date: "3 Minggu Lalu",
    productOrdered: "Puding Cup Box Isi 9",
    avatar: "/images/foto3.png"
  },
  {
    id: "testi-4",
    name: "Kevin & Fiona",
    location: "Pontianak Barat",
    rating: 5,
    comment: "Alternatif pengganti cake ultah yang super sehat! Anak-anak seneng banget karena warna buahnya cantik & manisnya pas. Pasti bakal order lagi buat acara wisuda nanti.",
    date: "4 Hari Lalu",
    productOrdered: "Custom Birthday Cake Pudding",
    avatar: "/images/foto4.png"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Bagaimana cara melakukan pemesanan Pudding Buah Pontianak?",
    answer: "Pemesanan sangat mudah! Anda cukup menekan tombol 'Pesan via WhatsApp' yang tersedia di website. Anda akan terhubung langsung ke WhatsApp admin kami untuk memilih varian, request ucapan, dan menentukan jadwal pengiriman."
  },
  {
    id: "faq-2",
    question: "Apakah bisa request tulisan nama & ucapan ulang tahun?",
    answer: "Sangat bisa! Untuk varian Hampers dan Custom Birthday Cake, kami menyediakan fasilitas GRATIS kartu ucapan dan request tulisan nama/ucapan ulang tahun di atas puding (menggunakan akrilik hias atau tulisan cokelat lezat)."
  },
  {
    id: "faq-3",
    question: "Berapa lama daya tahan dan cara penyimpanan puding buah?",
    answer: "Pudding kami dibuat fresh setiap hari tanpa bahan pengawet. Dalam suhu ruangan bertahan hingga 4-6 jam. Jika disimpan di dalam lemari es (chiller/kulkas), puding tahan hingga 3-4 hari dengan rasa yang tetap segar dan nikmat."
  },
  {
    id: "faq-4",
    question: "Apakah ada layanan pengiriman (delivery) di area Pontianak?",
    answer: "Ya, kami menyediakan pengiriman kurir lokal aman khusus makanan untuk area Kota Pontianak, Kubu Raya, dan sekitarnya. Puding akan dikemas aman sehingga tiba di tempat tujuan dalam kondisi sempurna."
  },
  {
    id: "faq-5",
    question: "Berapa hari sebelum acara sebaiknya pemesanan dilakukan?",
    answer: "Untuk menjaga kualitas dan ketersediaan stok buah segar, kami menyarankan pemesanan H-1 atau H-2 sebelum acara. Namun untuk pemesanan dadakan di hari H, silakan hubungi admin WA untuk cek ketersediaan kuota slot hari ini."
  }
];

export const buildWhatsAppLink = (
  productName?: string,
  customerName?: string,
  deliveryDate?: string,
  customRequest?: string
) => {
  let message = `Halo Pudding Buah Pontianak 👋\n\n`;

  if (productName) {
    message += `Saya tertarik untuk memesan: *${productName}*\n\n`;
  } else {
    message += `Saya ingin memesan puding buah segar.\n\n`;
  }

  if (customerName) {
    message += `📌 *Nama Pemesan:* ${customerName}\n`;
  } else {
    message += `📌 *Nama Pemesan:* \n`;
  }

  if (deliveryDate) {
    message += `📌 *Jadwal Pengiriman:* ${deliveryDate}\n`;
  } else {
    message += `📌 *Jadwal Pengiriman:* \n`;
  }

  if (customRequest) {
    message += `📌 *Request Ucapan/Topping:* ${customRequest}\n`;
  } else {
    message += `📌 *Request Ucapan/Topping:* \n`;
  }

  message += `📌 *Alamat Delivery:* \n\nMohon info ketersediaan slot dan total pembayarannya. Terima kasih! 😊`;

  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
};
