import React, { useState } from "react";
import {
  X,
  ShoppingBag,
  Star,
  Check,
  Minus,
  Plus
} from "lucide-react";

import { Product, buildWhatsAppLink } from "../data/businessData";


interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}


export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose
}) => {


  const [quantity, setQuantity] = useState(1);


  if (!product) return null;


  const increase = () => {
    setQuantity(prev => prev + 1);
  };


  const decrease = () => {
    if(quantity > 1){
      setQuantity(prev => prev - 1);
    }
  };



  const whatsappLink = buildWhatsAppLink(
    `${product.name} (${quantity} pesanan)`
  );



  return (

<div
className="
fixed
inset-0
z-50
bg-black/60
backdrop-blur-sm
flex
items-end
sm:items-center
justify-center
p-3
"
>


<div

className="
bg-white
dark:bg-slate-900
rounded-3xl
overflow-hidden
w-full
max-w-lg
max-h-[90vh]
overflow-y-auto
shadow-2xl
animate-fade-in
"

>



{/* HEADER IMAGE */}

<div
className="
relative
aspect-square
"
>


<img

src={product.image}

alt={product.name}

className="
w-full
h-full
object-cover
"

onError={(e)=>{

e.currentTarget.src =
product.fallbackImage;

}}

/>




<button

onClick={onClose}

className="
absolute
top-3
right-3
bg-white/90
dark:bg-slate-800
rounded-full
p-2
shadow
"

>

<X className="w-5 h-5"/>

</button>



{
product.badge &&

<div

className="
absolute
bottom-3
left-3
bg-gradient-to-r
from-amber-500
to-orange-500
text-white
px-3
py-1
rounded-full
text-xs
font-bold
"

>

{product.badge}

</div>

}



</div>





{/* CONTENT */}

<div
className="
p-5
"
>



<h2

className="
text-xl
sm:text-2xl
font-extrabold
text-slate-900
dark:text-white
"

>

{product.name}

</h2>





{/* RATING */}

<div

className="
flex
items-center
gap-1
mt-2
"

>

{

[1,2,3,4,5].map(i=>(

<Star

key={i}

className="
w-4
h-4
fill-yellow-400
text-yellow-400
"

/>

))

}


<span
className="
text-sm
text-slate-500
"
>

5.0 Premium

</span>


</div>





{/* PRICE */}

<div

className="
mt-4
text-2xl
font-black
text-orange-500
"

>

{product.price}

</div>






<p

className="
mt-3
text-sm
leading-relaxed
text-slate-600
dark:text-slate-300
"

>

{product.description}

</p>







{/* HIGHLIGHT */}

<div

className="
mt-5
space-y-2
"

>

<h3

className="
font-bold
text-sm
"

>

Keunggulan Produk

</h3>


{

product.highlights.map(
(item,index)=>(


<div

key={index}

className="
flex
items-center
gap-2
text-sm
"

>

<Check

className="
w-4
h-4
text-green-500
shrink-0
"

/>

{item}

</div>


)

)

}

</div>







{/* QUANTITY */}

<div

className="
mt-6
flex
items-center
justify-between
bg-orange-50
dark:bg-slate-800
rounded-2xl
p-3
"

>

<span

className="
font-bold
text-sm
"

>

Jumlah Pesanan

</span>



<div

className="
flex
items-center
gap-4
"

>


<button

onClick={decrease}

className="
w-8
h-8
rounded-full
bg-white
shadow
flex
items-center
justify-center
"

>

<Minus className="w-4 h-4"/>

</button>




<span

className="
font-bold
"

>

{quantity}

</span>




<button

onClick={increase}

className="
w-8
h-8
rounded-full
bg-orange-500
text-white
shadow
flex
items-center
justify-center
"

>

<Plus className="w-4 h-4"/>

</button>



</div>


</div>








{/* ORDER */}

<a

href={whatsappLink}

target="_blank"

rel="noopener noreferrer"

className="
mt-5
w-full
py-3
rounded-2xl
bg-gradient-to-r
from-amber-500
to-orange-500
text-white
font-bold
flex
items-center
justify-center
gap-2
shadow-lg
active:scale-95
transition
"

>

<ShoppingBag className="w-5 h-5"/>

Pesan Sekarang via WhatsApp

</a>




</div>


</div>


</div>


  );
};