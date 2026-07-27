import React from 'react';
import {
  ShoppingBag,
  ArrowRight,
  Star,
  Heart,
  ShieldCheck,
  Sparkles,
  Instagram,
  Facebook,
  MapPin,
  Clock
} from 'lucide-react';

import {
  BUSINESS_INFO,
  buildWhatsAppLink
} from '../data/businessData';


interface HeroProps {
  onOpenOrderModal: () => void;
}


export const Hero: React.FC<HeroProps> = ({
  onOpenOrderModal
}) => {


const highlightBadges = [
  {
    icon:'🍓',
    text:'Buah Premium Segar'
  },
  {
    icon:'🎁',
    text:'Hampers Elegan'
  },
  {
    icon:'🎂',
    text:'Custom Birthday'
  },
  {
    icon:'🚚',
    text:'Delivery Area Pontianak'
  }
];



return (

<section
id="hero"
className="
relative
overflow-hidden
pt-24
sm:pt-32
pb-10
sm:pb-20
"
>


<div className="
absolute
top-20
-left-20
w-80
h-80
bg-amber-400/20
rounded-full
blur-3xl
"
/>


<div className="
absolute
bottom-0
right-0
w-96
h-96
bg-orange-500/20
rounded-full
blur-3xl
"
/>



<div className="
max-w-7xl
mx-auto
px-4
sm:px-6
lg:px-8
relative
z-10
">


<div className="
grid
lg:grid-cols-12
gap-10
items-center
">



{/* TEXT */}

<div
className="
lg:col-span-7
text-center
lg:text-left
space-y-5
animate-fade-in
"
>


<div
className="
inline-flex
items-center
gap-2
px-4
py-2
rounded-full
bg-amber-100
text-amber-700
font-bold
text-xs
"
>

<Sparkles className="w-4 h-4"/>

Dessert Premium Pontianak

</div>




<h1
className="
text-3xl
sm:text-5xl
lg:text-6xl
font-black
leading-tight
text-slate-900
dark:text-white
"
>

Pudding Buah

<span
className="
bg-gradient-to-r
from-amber-500
to-orange-500
bg-clip-text
text-transparent
"
>

 Pontianak

</span>

</h1>




<p
className="
text-sm
sm:text-lg
text-slate-600
dark:text-slate-300
leading-relaxed
"
>

Pudding sutra lembut dengan buah segar pilihan,
vla vanilla homemade,
dan kreasi premium untuk
<strong>
 hampers, ulang tahun, dan acara spesial.
</strong>

</p>





<div
className="
flex
flex-wrap
justify-center
lg:justify-start
gap-2
"
>

{
highlightBadges.map((item,index)=>(

<div

key={index}

className="
px-3
py-2
rounded-xl
bg-white
dark:bg-slate-800
shadow-sm
border
text-xs
font-semibold
"

>

{item.icon}
{" "}
{item.text}

</div>

))
}

</div>




<div
className="
flex
flex-col
sm:flex-row
gap-3
justify-center
lg:justify-start
pt-3
"
>


<a

href={buildWhatsAppLink()}

target="_blank"

rel="noopener noreferrer"

className="
px-6
py-3
rounded-2xl
bg-gradient-to-r
from-amber-500
to-orange-500
text-white
font-bold
shadow-lg
flex
items-center
justify-center
gap-2
hover:scale-105
transition
"

>

<ShoppingBag className="w-5 h-5"/>

Pesan Sekarang

<ArrowRight className="w-4 h-4"/>

</a>



<button

onClick={onOpenOrderModal}

className="
px-6
py-3
rounded-2xl
bg-white
dark:bg-slate-800
border
font-bold
flex
items-center
justify-center
gap-2
"

>

<Sparkles className="w-4 h-4 text-orange-500"/>

Custom Order

</button>



</div>
// LANJUTAN HERO.TSX


{/* TRUST INFO */}

<div
className="
mt-6
pt-5
border-t
border-slate-200
dark:border-slate-800
flex
flex-wrap
justify-center
lg:justify-start
gap-4
text-xs
"
>


<div className="
flex
items-center
gap-2
text-slate-600
dark:text-slate-300
">

<div className="
w-8
h-8
rounded-full
bg-yellow-100
flex
items-center
justify-center
">

<Star
className="
w-4
h-4
fill-yellow-400
text-yellow-400
"
/>

</div>


<div>

<b className="
text-slate-900
dark:text-white
">
4.9/5
</b>

<br/>

<span>
1.500+ Pesanan
</span>

</div>

</div>





<div className="
flex
items-center
gap-2
text-slate-600
dark:text-slate-300
">


<div className="
w-8
h-8
rounded-full
bg-green-100
flex
items-center
justify-center
">

<ShieldCheck
className="
w-4
h-4
text-green-600
"
/>

</div>


<div>

<b className="
text-slate-900
dark:text-white
">
Fresh Daily
</b>

<br/>

<span>
Tanpa Pengawet
</span>

</div>


</div>






<div className="
flex
items-center
gap-2
text-slate-600
dark:text-slate-300
">


<div className="
w-8
h-8
rounded-full
bg-orange-100
flex
items-center
justify-center
">

<MapPin
className="
w-4
h-4
text-orange-500
"
/>

</div>


<div>

<b className="
text-slate-900
dark:text-white
">
Pontianak
</b>

<br/>

<span>
Kubu Raya & Sekitar
</span>

</div>


</div>



</div>





{/* SOCIAL */}

<div
className="
flex
justify-center
lg:justify-start
gap-4
mt-4
"
>


<a

href={BUSINESS_INFO.instagramUrl}

target="_blank"

rel="noopener noreferrer"

className="
flex
items-center
gap-2
text-sm
font-semibold
text-pink-500
"

>

<Instagram
className="w-4 h-4"
/>

Instagram

</a>



<a

href={BUSINESS_INFO.facebookUrl}

target="_blank"

rel="noopener noreferrer"

className="
flex
items-center
gap-2
text-sm
font-semibold
text-blue-500
"

>

<Facebook
className="w-4 h-4"
/>

Facebook

</a>


</div>


</div>






{/* IMAGE */}

<div
className="
lg:col-span-5
relative
"
>


<div
className="
absolute
inset-0
bg-gradient-to-r
from-amber-400
to-orange-500
blur-3xl
opacity-20
rounded-full
"
/>




<div
className="
relative
rounded-3xl
overflow-hidden
border-4
border-white
dark:border-slate-800
shadow-2xl
group
"
>


<img

src="/foto1.png"

alt="Pudding Buah Premium Pontianak"

loading="eager"

className="
w-full
h-[320px]
sm:h-[430px]
object-cover
group-hover:scale-105
transition
duration-700
"

/>




<div
className="
absolute
inset-0
bg-gradient-to-t
from-black/70
via-transparent
"
/>





<div
className="
absolute
bottom-5
left-5
right-5
bg-white/90
dark:bg-slate-900/90
backdrop-blur
rounded-2xl
p-4
"
>


<div
className="
flex
justify-between
items-center
"
>


<div>

<p
className="
text-xs
font-bold
text-orange-500
uppercase
"
>
Premium Homemade
</p>


<h3
className="
font-black
text-slate-900
dark:text-white
"
>
Fresh Fruit Pudding
</h3>


</div>



<div
className="
px-3
py-1
rounded-full
bg-orange-500
text-white
text-xs
font-bold
"
>
Fresh
</div>


</div>


</div>



</div>






{/* FLOAT BADGE */}

<div
className="
absolute
-top-4
left-3
sm:left-0
bg-white
dark:bg-slate-800
rounded-2xl
shadow-xl
p-3
flex
gap-2
items-center
"
>


<ShieldCheck
className="
text-green-500
"
/>


<div>

<p
className="
text-[10px]
text-slate-400
"
>
Quality
</p>

<p
className="
text-xs
font-bold
"
>
100% Buah Segar
</p>


</div>


</div>





<div
className="
absolute
-bottom-4
right-3
sm:right-0
bg-white
dark:bg-slate-800
rounded-2xl
shadow-xl
p-3
flex
gap-2
items-center
"
>


<Heart
className="
text-red-500
fill-red-500
"
/>



<div>

<p
className="
text-xs
font-bold
"
>
Halal & Higienis
</p>


<p
className="
text-[10px]
text-slate-400
"
>
Dibuat Fresh
</p>


</div>


</div>



</div>



</div>


</div>


</section>


);

};