import React, { useState } from 'react';
import { 
  GALLERY_ITEMS, 
  GalleryItem,
  buildWhatsAppLink
} from '../data/businessData';

import {
  Image as ImageIcon,
  Maximize2,
  Sparkles,
  ShoppingBag
} from 'lucide-react';

import { LightboxModal } from './LightboxModal';



export const GallerySection: React.FC = () => {


const [activeCategory,setActiveCategory] =
useState<string>('all');


const [selectedGalleryItem,setSelectedGalleryItem] =
useState<GalleryItem|null>(null);



const categories = [
{
id:'all',
label:'Semua'
},
{
id:'hampers',
label:'Hampers'
},
{
id:'birthday',
label:'Birthday'
},
{
id:'cup',
label:'Puding Cup'
}
];



const filteredItems =
activeCategory==='all'
?
GALLERY_ITEMS
:
GALLERY_ITEMS.filter(
item=>item.category===activeCategory
);



return (

<section
id="galeri"
className="
py-12
sm:py-20
bg-orange-50/40
dark:bg-slate-900
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



{/* HEADER */}

<div
className="
text-center
max-w-3xl
mx-auto
mb-8
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
bg-orange-100
text-orange-700
text-xs
font-bold
"
>

<Sparkles
className="
w-4
h-4
"
/>

Koleksi Pelanggan

</div>




<h2
className="
mt-4
text-3xl
sm:text-5xl
font-black
text-slate-900
dark:text-white
"
>

Galeri

<span
className="
text-orange-500
"
>
 Pudding
</span>

</h2>



<p
className="
mt-3
text-sm
sm:text-base
text-slate-600
dark:text-slate-300
"
>

Inspirasi kreasi pudding buah premium
untuk hadiah, ulang tahun dan acara spesial.

</p>



{/* CATEGORY */}

<div
className="
flex
gap-2
mt-6
justify-start
sm:justify-center
overflow-x-auto
"
>


{
categories.map(cat=>(


<button

key={cat.id}

onClick={()=>setActiveCategory(cat.id)}

className={`
px-5
py-2
rounded-full
text-xs
font-bold
whitespace-nowrap
transition

${
activeCategory===cat.id

?

'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'

:

'bg-white dark:bg-slate-800 border text-slate-700 dark:text-slate-300'

}

`}

>

{cat.label}

</button>


))

}


</div>



</div>






{/* GALLERY GRID */}


<div
className="
grid
grid-cols-2
sm:grid-cols-3
lg:grid-cols-4
gap-3
sm:gap-6
"
>


{
filteredItems.map(item=>(


<div

key={item.id}

onClick={()=>setSelectedGalleryItem(item)}

className="
group
relative
aspect-square
rounded-3xl
overflow-hidden
cursor-pointer
shadow-md
hover:shadow-2xl
transition-all
duration-500
hover:-translate-y-2
"
>


<img

src={item.image}

alt={item.title}

loading="lazy"

className="
w-full
h-full
object-cover
group-hover:scale-110
transition
duration-700
"


onError={(e)=>{

e.currentTarget.src =
item.fallbackImage;

}}

/>




{/* OVERLAY */}

<div

className="
absolute
inset-0
bg-gradient-to-t
from-black/80
via-transparent
opacity-80
"

></div>





{/* CATEGORY */}

<div

className="
absolute
top-3
left-3
px-3
py-1
rounded-full
bg-white/90
text-orange-600
text-[10px]
font-bold
"

>

{item.category}

</div>





{/* CONTENT */}

<div

className="
absolute
bottom-3
left-3
right-3
text-white
"

>


<div
className="
flex
justify-between
items-center
"
>


<h3
className="
font-bold
text-xs
sm:text-sm
line-clamp-1
"
>

{item.title}

</h3>



<div
className="
bg-white/20
backdrop-blur
p-2
rounded-full
"
>

<Maximize2
className="
w-4
h-4
"
/>

</div>


</div>



<p
className="
text-[10px]
text-white/80
mt-1
line-clamp-2
"
>

{item.description}

</p>


</div>



</div>


))

}


</div>





{/* CTA */}

<div
className="
mt-10
text-center
"
>


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
bg-gradient-to-r
from-amber-500
to-orange-500
text-white
font-bold
shadow-lg
"

>

<ShoppingBag
className="
w-5
h-5
"
/>

Buat Pesanan Custom

</a>


</div>



</div>





<LightboxModal

item={selectedGalleryItem}

items={filteredItems}

onClose={()=>
setSelectedGalleryItem(null)
}

onSelectIndex={(idx)=>
setSelectedGalleryItem(filteredItems[idx])
}

/>



</section>

);


};