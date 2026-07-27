import React, { useEffect, useState } from 'react';
import { MessageCircle, X, ShoppingBag } from 'lucide-react';
import { buildWhatsAppLink } from '../data/businessData';



interface FloatingWhatsAppProps {
  onOpenOrderModal: () => void;
}



export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  onOpenOrderModal
}) => {


const [showTooltip,setShowTooltip] =
useState(true);



useEffect(()=>{

const timer = setTimeout(()=>{

setShowTooltip(false);

},7000);


return ()=>clearTimeout(timer);


},[]);





return (

<div

className="
fixed
bottom-6
right-4
sm:right-6
z-50
flex
flex-col
items-end
gap-3
"

>





{/* CHAT INFO */}

{
showTooltip &&

<div

className="
relative
bg-white
dark:bg-slate-800
rounded-2xl
shadow-xl
border
border-orange-100
dark:border-slate-700
p-3
max-w-[230px]
animate-in
fade-in
slide-in-from-bottom-3
"

>


<button

onClick={()=>setShowTooltip(false)}

className="
absolute
-right-2
-top-2
w-6
h-6
rounded-full
bg-slate-200
dark:bg-slate-700
flex
items-center
justify-center
"

>

<X
className="
w-3
h-3
"/>

</button>





<div
className="
flex
items-center
gap-3
"
>


<div

className="
w-9
h-9
rounded-full
bg-emerald-500
flex
items-center
justify-center
text-white
"

>

<MessageCircle
className="
w-5
h-5
"/>

</div>




<div>

<p
className="
text-xs
font-black
text-slate-900
dark:text-white
"
>

Admin Siap Membantu 👋

</p>


<p
className="
text-[11px]
text-slate-500
"
>

Konsultasi & pesan pudding

</p>


</div>


</div>



</div>

}







{/* BUTTON */}

<div
className="
relative
"
>


<span

className="
absolute
inset-0
rounded-full
bg-emerald-500
animate-ping
opacity-50
"

/>




<a

href={buildWhatsAppLink()}

target="_blank"

rel="noopener noreferrer"

className="
relative
w-14
h-14
rounded-full
bg-gradient-to-r
from-emerald-500
to-green-600
text-white
shadow-2xl
flex
items-center
justify-center
hover:scale-110
transition
"

>


<MessageCircle

className="
w-7
h-7
fill-white
"

/>


</a>



</div>






{/* ORDER QUICK BUTTON */}

<button

onClick={onOpenOrderModal}

className="
hidden
sm:flex
items-center
gap-2
px-4
py-2
rounded-full
bg-white
dark:bg-slate-800
shadow-lg
border
border-orange-100
dark:border-slate-700
text-xs
font-bold
text-orange-600
"

>


<ShoppingBag
className="
w-4
h-4
"
/>

Order Custom

</button>



</div>

);

};