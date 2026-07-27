import React, { useState, useEffect } from "react";
import {
  Sun,
  Moon,
  Menu,
  X,
  Phone,
  ShoppingBag,
  Star,
  Heart,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  CheckCircle,
  Sparkles,
  Search,
  User,
  Calendar,
  MessageSquare
} from "lucide-react";


// ===============================
// DATA
// ===============================

const BUSINESS = {
  name: "Pudding Buah Pontianak",
  whatsapp: "6289670972892",
  address: "Pal Sembilan, Kec. Sungai Kakap, Kabupaten Kubu Raya, Kalimantan Barat 78391",
  hours: "Setiap Hari 08.00 - 21.00 WIB"
};


const PRODUCTS = [
  {
    id:1,
    name:"Pudding Buah Premium",
    category:"favorite",
    image:"/images/pudingcup4.png",
    desc:"Pudding lembut dengan buah segar pilihan dan vla vanilla premium."
  },
  {
    id:2,
    name:"Pudding Cup Mini",
    category:"cup",
    image:"/images/pudingcup9.png",
    desc:"Cocok untuk snack acara dan hampers."
  },
  {
    id:3,
    name:"Pudding Birthday Custom",
    category:"birthday",
    image:"/images/pudinghbd.png",
    desc:"Custom tulisan ucapan untuk ulang tahun."
  },
  {
    id:4,
    name:"Deluxe Custom Pudding",
    category:"special",
    image:"/images/pudingcutom.png",
    desc:"Tampilan premium untuk acara besar."
  },
  {
  id:5,
  name:"Pudding Buah Signature Hampers",
  category:"hampers",
  image:"/images/foto3.png",
  desc:"Hampers pudding buah premium dengan buah segar pilihan, kemasan cantik dan cocok untuk hadiah ulang tahun, keluarga, maupun acara spesial."
},
];


const TESTIMONIALS=[
 {
  name:"Siska",
  text:"Puddingnya enak banget, buahnya fresh dan tampilannya cantik.",
 },
 {
  name:"Rina",
  text:"Pesanan ulang tahun anak saya sangat puas. Recommended!"
 },
 {
  name:"ricky",
  text:"Pelayanan cepat dan rasa premium."
 }
];


const FAQ=[
 {
 id:1,
 q:"Berapa lama pudding bisa bertahan?",
 a:"Pudding terbaik dikonsumsi dalam keadaan dingin dan fresh."
 },
 {
 id:2,
 q:"Apakah bisa request tulisan?",
 a:"Bisa, kami menerima tulisan ulang tahun atau ucapan khusus."
 },
 {
 id:3,
 q:"Apakah bisa pesan untuk acara?",
 a:"Bisa untuk ulang tahun, kantor, arisan dan acara keluarga."
 }
];



const waLink=(text="Halo saya ingin pesan pudding")=>{
 return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(text)}`;
};



// ===============================
// APP
// ===============================

export default function App(){


const [dark,setDark]=useState(false);

const [menu,setMenu]=useState(false);

const [category,setCategory]=useState("all");

const [slide,setSlide]=useState(0);

const [faq,setFaq]=useState<number|null>(1);

const [modal,setModal]=useState(false);

const [name,setName]=useState("");

const [date,setDate]=useState("");

const [note,setNote]=useState("");



useEffect(()=>{

if(dark)
document.documentElement.classList.add("dark");

else
document.documentElement.classList.remove("dark");

},[dark]);



const products =
category==="all"
? PRODUCTS
: PRODUCTS.filter(
p=>p.category===category
);



function sendOrder(){

const message=
`
Halo Admin ${BUSINESS.name}

Nama:
${name}

Pesanan:
Pudding Buah

Tanggal:
${date}

Catatan:
${note}
`;

window.open(
waLink(message),
"_blank"
);

setModal(false);

}



return (

<div className="
min-h-screen
bg-orange-50
dark:bg-slate-950
text-slate-800
dark:text-white
">


{/* NAVBAR */}

<header className="
fixed top-0
w-full
z-50
bg-white/80
dark:bg-slate-900/80
backdrop-blur
shadow
">

<div className="
max-w-7xl
mx-auto
px-4
py-3
flex
justify-between
items-center
">


<div className="flex items-center gap-3">

<div className="
w-11
h-11
rounded-xl
overflow-hidden
shadow
">

<img
src="/logo.png"
alt="Pudding Buah Pontianak"
className="
w-full
h-full
object-cover
"
/>

</div>


<div>

<h1 className="
font-bold
text-lg
">

Pudding Buah

</h1>

<p className="
text-xs
text-orange-500
">

Pontianak

</p>

</div>

</div>



<div className="
hidden md:flex
gap-5
text-sm
font-semibold
">

<a href="#produk">Menu</a>

<a href="#galeri">Galeri</a>

<a href="#testimoni">Testimoni</a>

<a href="#faq">FAQ</a>

<a href="#kontak">Kontak</a>

</div>



<div className="flex gap-2">


<button
onClick={()=>setDark(!dark)}
className="
p-3
rounded-full
bg-slate-100
dark:bg-slate-800
">

{
dark?
<Sun size={18}/>
:
<Moon size={18}/>
}

</button>


<a
href={waLink()}
className="
hidden sm:flex
items-center
gap-2
px-4
py-2
rounded-full
bg-green-500
text-white
font-bold
text-sm
">

<Phone size={16}/>
WA

</a>



<button
onClick={()=>setMenu(!menu)}
className="
md:hidden
p-3
">

{
menu?
<X/>
:
<Menu/>
}

</button>


</div>


</div>



{
menu&&

<div className="
md:hidden
p-5
bg-white
dark:bg-slate-900
space-y-3
">

<a href="#produk"
className="block">
Menu
</a>

<a href="#faq"
className="block">
FAQ
</a>

<a href="#kontak"
className="block">
Kontak
</a>


</div>

}


</header>
{/* HERO SECTION */}

<section
id="hero"
className="
pt-32
pb-16
px-4
"
>

<div className="
max-w-7xl
mx-auto
grid
md:grid-cols-2
gap-10
items-center
">


<div>


<div className="
inline-flex
items-center
gap-2
px-4
py-2
rounded-full
bg-orange-100
text-orange-600
text-sm
font-bold
">

<Sparkles size={16}/>

Pudding Buah Premium

</div>


<h2 className="
mt-5
text-4xl
md:text-6xl
font-extrabold
leading-tight
">

Kesegaran Buah
<br/>

<span className="
text-orange-500
">

Dalam Setiap Gigitan

</span>

</h2>



<p className="
mt-5
text-slate-600
dark:text-slate-300
text-lg
">

Pudding buah homemade dengan buah pilihan,
vla vanilla premium dan dibuat fresh setiap hari
untuk berbagai acara spesial.

</p>



<div className="
mt-7
flex
gap-3
flex-wrap
">


<button

onClick={()=>setModal(true)}

className="
px-6
py-3
rounded-full
bg-gradient-to-r
from-orange-500
to-amber-500
text-white
font-bold
flex
items-center
gap-2
shadow-lg
">

<ShoppingBag size={18}/>

Pesan Sekarang

</button>



<a

href={waLink()}

className="
px-6
py-3
rounded-full
bg-green-500
text-white
font-bold
flex
items-center
gap-2
">

<MessageCircle size={18}/>

WhatsApp

</a>


</div>


</div>





<div className="
relative
">


<img

src="/images/foto1.png"

className="
rounded-3xl
shadow-2xl
w-full
object-cover
aspect-square
"

/>



<div className="
absolute
bottom-5
left-5
bg-white
dark:bg-slate-900
rounded-2xl
p-4
shadow-xl
">

<div className="
flex
items-center
gap-2
">

<Star
className="
text-yellow-400
fill-yellow-400
"
size={18}
/>

<b>
5.0 Rating
</b>

</div>

<p className="
text-xs
text-slate-500
">

Pelanggan puas

</p>


</div>



</div>


</div>

</section>





{/* STATISTIC */}


<section
className="
py-8
"
>

<div className="
max-w-5xl
mx-auto
grid
grid-cols-3
gap-4
px-4
">


{
[
["1500+","Pelanggan"],
["100%","Fresh"],
["5.0","Rating"]
]
.map((x,i)=>(


<div
key={i}
className="
bg-white
dark:bg-slate-900
rounded-2xl
p-5
text-center
shadow
"
>

<h3 className="
text-2xl
font-bold
text-orange-500
">

{x[0]}

</h3>

<p className="
text-xs
text-slate-500
">

{x[1]}

</p>


</div>


))

}


</div>

</section>






{/* PRODUCT SECTION */}


<section
id="produk"
className="
py-16
px-4
"
>


<div className="
max-w-7xl
mx-auto
">


<div className="
text-center
mb-10
">


<h2 className="
text-3xl
font-bold
">

Menu Favorit Kami

</h2>


<p className="
text-slate-500
mt-2
">

Pilih pudding terbaik untuk acara Anda

</p>


</div>





<div className="
flex
gap-3
overflow-x-auto
mb-8
justify-center
">


{
[
["all","Semua"],
["favorite","Favorit"],
["hampers","Hampers"],
["cup","Cup"],
["birthday","Birthday"],
["special","Special"]
]
.map(c=>(


<button

key={c[0]}

onClick={()=>setCategory(c[0])}

className={`
px-5
py-2
rounded-full
text-sm
font-bold
transition

${
category===c[0]

?
"bg-orange-500 text-white"

:

"bg-white dark:bg-slate-900 border"

}

`}

>

{c[1]}

</button>


))

}


</div>





<div className="
grid
grid-cols-2
md:grid-cols-4
gap-5
">


{
products.map(product=>(


<div

key={product.id}

className="
bg-white
dark:bg-slate-900
rounded-3xl
overflow-hidden
shadow
hover:-translate-y-2
transition
"

>


<img

src={product.image}

className="
aspect-square
w-full
object-cover
"

/>



<div className="
p-4
">


<h3 className="
font-bold
text-sm
">

{product.name}

</h3>


<p className="
text-orange-500
font-bold
mt-2
">

{product.price}

</p>


<button

onClick={()=>setModal(true)}

className="
mt-4
w-full
py-2
rounded-xl
bg-orange-500
text-white
text-xs
font-bold
flex
items-center
justify-center
gap-2
">

<ShoppingBag size={14}/>

Pesan

</button>



</div>


</div>


))

}


</div>


</div>


</section>
{/* GALLERY SECTION */}

<section
id="galeri"
className="
py-16
px-4
bg-orange-50
dark:bg-slate-900
"
>

<div className="
max-w-7xl
mx-auto
">

<div className="
text-center
mb-10
">

<h2 className="
text-3xl
font-bold
">

Galeri

<span className="
text-orange-500
">
 Pudding
</span>

</h2>


<p className="
mt-3
text-slate-500
">

Koleksi pudding buah premium dan pesanan pelanggan.

</p>

</div>



<div className="
grid
grid-cols-2
md:grid-cols-4
gap-5
">


{
[
"foto1.png",
"foto2.png",
"foto3.png",
"foto4.png",
"foto5.png",
"foto6.png",
"foto7.png",
"foto8.png",
"foto9.png",
"foto10.png",
"pudingcup4.png",
"pudingcup6.png"
].map((img,index)=>(


<div
key={index}
className="
group
rounded-3xl
overflow-hidden
shadow-lg
bg-white
dark:bg-slate-800
hover:-translate-y-2
transition-all
duration-300
"
>


<img

src={`/images/${img}`}

const galleryAlt = [
  "Pudding Buah Premium Pontianak",
  "Pudding Buah Segar Pontianak",
  "Pudding Birthday Custom Pontianak",
  "Dessert Premium Pontianak",
  "Pudding Hampers Pontianak",
  "Pudding Buah Homemade",
  "Pudding Buah Fresh",
  "Pudding Untuk Ulang Tahun",
  "Dessert Box Pontianak",
  "Pudding Premium Buah Segar",
  "Pudding Cup Premium",
  "Pudding Cup Mini"
];

loading="lazy"

className="
w-full
aspect-square
object-cover
group-hover:scale-110
transition
duration-500
"

/>


</div>


))

}


</div>


</div>

</section>
{/* TESTIMONIAL SECTION */}

<section
id="testimoni"
className="
py-16
px-4
bg-orange-50
dark:bg-slate-900
"
>

<div className="
max-w-5xl
mx-auto
text-center
">


<h2 className="
text-3xl
font-bold
mb-8
">

Apa Kata Pelanggan?

</h2>



<div className="
relative
bg-white
dark:bg-slate-800
rounded-3xl
p-8
shadow-xl
">


<MessageCircle
className="
mx-auto
text-orange-500
mb-4
"
/>


<p className="
text-lg
italic
">

"{TESTIMONIALS[slide].text}"

</p>


<h3 className="
mt-5
font-bold
">

{TESTIMONIALS[slide].name}

</h3>


<div className="
flex
justify-center
gap-2
mt-5
">

<button

onClick={()=>setSlide(
slide===0?
TESTIMONIALS.length-1:
slide-1
)}

className="
p-2
rounded-full
bg-orange-100
"
>

<ChevronLeft/>

</button>



<button

onClick={()=>setSlide(
slide===TESTIMONIALS.length-1?
0:
slide+1
)}

className="
p-2
rounded-full
bg-orange-100
"
>

<ChevronRight/>

</button>


</div>


</div>


</div>


</section>





{/* FAQ */}


<section
id="faq"
className="
py-16
px-4
"
>


<div className="
max-w-4xl
mx-auto
">


<h2 className="
text-3xl
font-bold
text-center
mb-8
">

Pertanyaan Umum

</h2>



<div className="
space-y-4
">


{
FAQ.map(item=>(


<div
key={item.id}
className="
bg-white
dark:bg-slate-900
rounded-2xl
shadow
overflow-hidden
"
>


<button

onClick={()=>setFaq(
faq===item.id?
null:
item.id
)}

className="
w-full
p-5
flex
justify-between
font-bold
text-left
"
>

{item.q}

<ChevronDown
className={`
transition

${faq===item.id?"rotate-180":""}

`}
/>


</button>



{
faq===item.id&&

<div className="
px-5
pb-5
text-slate-500
text-sm
">

{item.a}

</div>

}



</div>


))

}


</div>


</div>


</section>






{/* CONTACT */}


<section

id="kontak"

className="
py-16
px-4
bg-slate-900
text-white
"


>


<div className="
max-w-6xl
mx-auto
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-5
gap-6
">


<div>

<MapPin
className="text-orange-400"
/>

<h3 className="
font-bold
mt-3
">

Alamat

</h3>


<a
href="https://maps.app.goo.gl/HovWxzJi9RssWspy8?g_st=aw"
target="_blank"
rel="noopener noreferrer"
className="
text-sm
text-slate-400
hover:text-orange-400
transition
"
>

{BUSINESS.address}

</a>

</div>




<div>

<Clock
className="text-orange-400"
/>


<h3 className="
font-bold
mt-3
">

Jam Operasional

</h3>


<p className="
text-sm
text-slate-400
">

{BUSINESS.hours}

</p>


</div>




<div>

<Phone
className="text-orange-400"
/>


<h3 className="
font-bold
mt-3
">

WhatsApp

</h3>


<a

href={waLink()}

className="
text-sm
text-green-400
"

>

Chat Admin

</a>


</div>
<div>

<Instagram
className="text-pink-500"
/>

<h3 className="
font-bold
mt-3
">

Instagram

</h3>

<a
href="https://www.instagram.com/puddingbuah_ptk/"
target="_blank"
rel="noopener noreferrer"
className="
text-sm
text-pink-400
hover:text-pink-300
"
>

@puddingbuah_ptk

</a>

</div>

<div>

<Facebook
className="text-blue-500"
/>

<h3 className="
font-bold
mt-3
">

Facebook

</h3>

<a
href="https://www.facebook.com/puddingbuahptk"
target="_blank"
rel="noopener noreferrer"
className="
text-sm
text-blue-400
hover:text-blue-300
"
>

Pudding Buah PTK

</a>

</div>


</div>


</section>








{/* FLOATING WA */}


<a

href={waLink()}

target="_blank"

className="
fixed
right-5
bottom-5
z-50
w-14
h-14
rounded-full
bg-green-500
text-white
flex
items-center
justify-center
shadow-2xl
animate-bounce
"

>


<MessageCircle/>

</a>






{/* ORDER MODAL */}


{
modal &&


<div className="
fixed
inset-0
z-[60]
bg-black/60
flex
items-center
justify-center
p-5
">


<div className="
bg-white
dark:bg-slate-900
rounded-3xl
w-full
max-w-md
p-6
"
>


<div className="
flex
justify-between
mb-5
">


<h2 className="
font-bold
text-xl
">

Pesan Pudding

</h2>


<button

onClick={()=>setModal(false)}

>

<X/>

</button>


</div>





<input

placeholder="Nama"

value={name}

onChange={e=>setName(e.target.value)}

className="
w-full
mb-3
p-3
rounded-xl
border
"

/>



<input

placeholder="Tanggal Pesanan"

value={date}

onChange={e=>setDate(e.target.value)}

className="
w-full
mb-3
p-3
rounded-xl
border
"

/>



<textarea

placeholder="Catatan"

value={note}

onChange={e=>setNote(e.target.value)}

className="
w-full
mb-4
p-3
rounded-xl
border
"

/>



<button

onClick={sendOrder}

className="
w-full
py-3
rounded-xl
bg-green-500
text-white
font-bold
"

>

Kirim WhatsApp

</button>


</div>


</div>


}





{/* FOOTER */}


<footer className="
py-8
text-center
text-sm
text-slate-500
">


© {new Date().getFullYear()} 
<b>
 Pudding Buah Pontianak
</b>


</footer>



</div>

);

}