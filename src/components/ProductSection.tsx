import React, { useState } from 'react';
import { PRODUCTS, Product, buildWhatsAppLink } from '../data/businessData';
import {
  ShoppingBag,
  Eye,
  Star,
  Sparkles,
  Check
} from 'lucide-react';
import { ProductModal } from './ProductModal';


export const ProductSection: React.FC = () => {

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);


  const categories = [
    { id:'all', label:'Semua Menu' },
    { id:'hampers', label:'Hampers Signature' },
    { id:'birthday', label:'Custom Birthday' },
    { id:'cup', label:'Puding Cup' },
    { id:'special', label:'Deluxe Tumpeng' }
  ];


  const filteredProducts =
    activeCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter(
          product => product.category === activeCategory
        );


  return (

<section
id="produk"
className="
py-10
sm:py-16
lg:py-20
bg-orange-50/40
dark:bg-slate-900/40
"
>

<div className="
max-w-7xl
mx-auto
px-3
sm:px-6
lg:px-8
">


{/* HEADER */}

<div className="
text-center
max-w-3xl
mx-auto
mb-8
sm:mb-12
">


<div className="
inline-flex
items-center
gap-2
px-3
py-1
rounded-full
bg-amber-100
text-amber-700
text-xs
font-bold
">

<Sparkles className="w-4 h-4"/>

Pilihan Varian Puding Segar

</div>


<h2 className="
mt-3
text-2xl
sm:text-4xl
lg:text-5xl
font-extrabold
font-display
text-slate-900
dark:text-white
">

Menu Utama &

<span className="
text-amber-500
">
 Koleksi Favorit
</span>

</h2>


<p className="
mt-3
text-sm
sm:text-base
text-slate-600
dark:text-slate-300
">

Dibuat fresh menggunakan buah pilihan,
vla vanilla premium dan topping melimpah.

</p>



{/* CATEGORY */}

<div className="
flex
gap-2
mt-6
overflow-x-auto
no-scrollbar
justify-start
sm:justify-center
">

{
categories.map(cat=>(

<button

key={cat.id}

onClick={()=>setActiveCategory(cat.id)}

className={`
whitespace-nowrap
px-4
py-2
rounded-full
text-xs
font-bold
transition-all

${
activeCategory===cat.id

?
'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'

:

'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border'
}

`}

>

{cat.label}

</button>

))
}

</div>


</div>




{/* PRODUCT GRID */}

<div className="
grid
grid-cols-2
sm:grid-cols-3
lg:grid-cols-4
gap-3
sm:gap-6
">


{
filteredProducts.map(product=>(


<div

key={product.id}

className="
glass-card
rounded-2xl
overflow-hidden
border
border-orange-100
dark:border-slate-800
shadow-md
hover:shadow-2xl
hover:-translate-y-2
transition-all
duration-300
group
flex
flex-col
justify-between
"

>


{/* IMAGE */}

<div className="
relative
aspect-square
overflow-hidden
bg-slate-100
">


<img

src={product.image}

alt={product.name}

loading="lazy"

className="
w-full
h-full
object-cover
group-hover:scale-110
transition
duration-500
"

onError={(e)=>{
e.currentTarget.src = product.fallbackImage;
}}

/>


<div className="
absolute
inset-0
bg-gradient-to-t
from-black/60
via-transparent
"
/>



{
product.badge &&

<div className="
absolute
top-2
left-2
px-2
py-1
rounded-full
bg-gradient-to-r
from-amber-500
to-orange-500
text-white
text-[10px]
font-bold
">

{product.badge}

</div>

}



<div className="
absolute
bottom-2
right-2
bg-white/90
rounded-xl
px-3
py-1
text-orange-600
font-extrabold
text-xs
">

{product.price}

</div>


</div>





{/* CONTENT */}

<div className="
p-3
sm:p-5
">


<span className="
text-[10px]
uppercase
tracking-widest
font-bold
text-amber-600
">

Fresh Fruit Pudding

</span>



<h3 className="
mt-1
text-sm
sm:text-xl
font-bold
text-slate-900
dark:text-white
line-clamp-2
">

{product.name}

</h3>



<div className="
flex
items-center
gap-1
mt-2
">

{
[1,2,3,4,5].map(i=>(

<Star

key={i}

className="
w-3
h-3
fill-yellow-400
text-yellow-400
"

/>

))
}


<span className="
text-xs
text-slate-500
">

5.0

</span>

</div>



<p className="
hidden
sm:block
text-sm
text-slate-600
dark:text-slate-300
mt-3
line-clamp-2
">

{product.description}

</p>



<div className="
hidden
sm:block
mt-3
space-y-1
">

{
product.highlights.map(
(hl,index)=>(

<div
key={index}
className="
flex
items-center
gap-2
text-xs
"
>

<Check
className="
w-3
h-3
text-green-500
"
/>

{hl}

</div>

)
)
}

</div>


</div>





{/* BUTTON */}

<div className="
p-3
pt-0
flex
gap-2
">


<button

onClick={()=>setSelectedProduct(product)}

className="
flex-1
rounded-xl
bg-slate-100
dark:bg-slate-800
py-2
text-xs
font-bold
flex
items-center
justify-center
gap-1
hover:bg-slate-200
dark:hover:bg-slate-700
transition
"

>

<Eye className="w-4 h-4 text-amber-500"/>

Detail

</button>




<a

href={
buildWhatsAppLink(product.name)
}

target="_blank"

rel="noopener noreferrer"

className="
flex-1
rounded-xl
bg-gradient-to-r
from-amber-500
to-orange-500
text-white
py-2
text-xs
font-bold
flex
items-center
justify-center
gap-1
hover:shadow-lg
hover:shadow-orange-500/30
transition-all
active:scale-95
"

>

<ShoppingBag className="w-4 h-4"/>

Pesan

</a>


</div>



</div>


))
}


</div>


</div>



<ProductModal

product={selectedProduct}

onClose={()=>setSelectedProduct(null)}

/>


</section>

  );

};