import React from 'react';
import { 
  BUSINESS_INFO, 
  buildWhatsAppLink 
} from '../data/businessData';

import {
  Instagram,
  Facebook,
  Phone,
  MapPin,
  Clock,
  ArrowUp,
  MessageCircle,
  Heart
} from 'lucide-react';



export const Footer: React.FC = () => {


const scrollToTop = () => {

window.scrollTo({
top:0,
behavior:'smooth'
});

};




return (

<footer
className="
bg-slate-950
text-slate-300
pt-14
pb-8
border-t
border-slate-800
"
>


<div
className="
max-w-7xl
mx-auto
px-4
sm:px-6
"
>




{/* CTA BOX */}

<div
className="
mb-12
rounded-3xl
p-6
sm:p-8
bg-gradient-to-r
from-orange-500
via-amber-500
to-rose-500
text-white
flex
flex-col
sm:flex-row
items-center
justify-between
gap-5
shadow-xl
"
>


<div>

<h3
className="
text-xl
sm:text-2xl
font-black
"
>

Siap Pesan Pudding Favorit Anda?

</h3>


<p
className="
text-sm
text-white/90
mt-1
"
>

Pesan sekarang untuk acara ulang tahun,
hampers dan momen spesial.

</p>


</div>



<a

href={buildWhatsAppLink()}

target="_blank"

rel="noopener noreferrer"

className="
inline-flex
items-center
gap-2
px-6
py-3
rounded-2xl
bg-white
text-orange-600
font-bold
shadow-lg
hover:scale-105
transition
"

>

<MessageCircle
className="
w-5
h-5
"/>

Pesan WhatsApp

</a>



</div>






<div
className="
grid
grid-cols-1
md:grid-cols-3
gap-10
"
>




{/* BRAND */}

<div>


<div
className="
flex
items-center
gap-3
"
>


<div
className="
w-12
h-12
rounded-2xl
overflow-hidden
bg-orange-500
p-1
"
>

<img

src="/logo.png"

alt="logo"

className="
w-full
h-full
object-cover
rounded-xl
"

onError={(e)=>{
e.currentTarget.style.display='none';
}}

/>


</div>



<div>

<h3
className="
text-xl
font-black
text-white
"
>

Pudding Buah

</h3>


<span
className="
text-xs
text-orange-400
font-bold
"
>

PONTIANAK

</span>


</div>


</div>



<p
className="
mt-4
text-sm
leading-relaxed
text-slate-400
"
>

{BUSINESS_INFO.shortDesc}

</p>





<div
className="
flex
gap-3
mt-5
"
>


<a
href={BUSINESS_INFO.instagramUrl}
className="
w-10
h-10
rounded-full
bg-slate-800
flex
items-center
justify-center
hover:bg-pink-600
transition
"
>

<Instagram
className="
w-5
h-5
"/>

</a>



<a
href={BUSINESS_INFO.facebookUrl}
className="
w-10
h-10
rounded-full
bg-slate-800
flex
items-center
justify-center
hover:bg-blue-600
transition
"
>

<Facebook
className="
w-5
h-5
"/>

</a>



</div>


</div>






{/* MENU */}

<div>


<h4
className="
font-bold
text-white
mb-4
"
>

Menu

</h4>



<div
className="
space-y-3
text-sm
"
>

<a href="#produk" className="block hover:text-orange-400">
Produk
</a>

<a href="#galeri" className="block hover:text-orange-400">
Galeri
</a>

<a href="#testimoni" className="block hover:text-orange-400">
Testimoni
</a>

<a href="#faq" className="block hover:text-orange-400">
FAQ
</a>


</div>


</div>







{/* CONTACT */}

<div>


<h4
className="
font-bold
text-white
mb-4
"
>

Kontak

</h4>



<div
className="
space-y-4
text-sm
"
>


<div className="
flex gap-3
">

<MapPin
className="
w-5
h-5
text-orange-500
shrink-0
"/>

<span>
{BUSINESS_INFO.address}
</span>

</div>




<div className="
flex gap-3
">

<Phone
className="
w-5
h-5
text-orange-500
"/>

<span>
{BUSINESS_INFO.whatsappFormatted}
</span>

</div>




<div className="
flex gap-3
">

<Clock
className="
w-5
h-5
text-orange-500
"/>

<span>
{BUSINESS_INFO.openingHours}
</span>

</div>



</div>


</div>



</div>







{/* COPYRIGHT */}

<div
className="
mt-10
pt-6
border-t
border-slate-800
flex
flex-col
sm:flex-row
justify-between
items-center
gap-4
text-xs
"
>


<p>

© {new Date().getFullYear()}
{" "}
<b className="text-white">
Pudding Buah Pontianak
</b>

{" "}
Made with

<Heart
className="
inline
w-3
h-3
fill-red-500
text-red-500
mx-1
"/>

</p>



<button

onClick={scrollToTop}

className="
flex
items-center
gap-2
px-4
py-2
rounded-full
bg-slate-800
hover:bg-orange-500
transition
"

>

Ke Atas

<ArrowUp
className="
w-4
h-4
"/>

</button>


</div>




</div>


</footer>

);

};