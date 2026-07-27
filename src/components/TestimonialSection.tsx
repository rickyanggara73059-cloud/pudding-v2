import React, { useState, useEffect } from 'react';
import { 
  TESTIMONIALS 
} from '../data/businessData';

import {
  Star,
  Quote,
  MessageCircleHeart,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Users,
  Award
} from 'lucide-react';



export const TestimonialSection: React.FC = () => {


const [currentIndex,setCurrentIndex] = useState(0);



const nextSlide = () => {

setCurrentIndex(prev =>
prev === TESTIMONIALS.length - 1
? 0
: prev + 1
);

};



const prevSlide = () => {

setCurrentIndex(prev =>
prev === 0
? TESTIMONIALS.length - 1
: prev - 1
);

};





useEffect(()=>{

const timer=setInterval(()=>{
nextSlide();
},5000);


return ()=>clearInterval(timer);


},[]);





return (

<section
id="testimoni"
className="
py-12
sm:py-20
bg-orange-50/50
dark:bg-slate-900
overflow-hidden
"
>


<div
className="
max-w-6xl
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
bg-rose-100
text-rose-600
text-xs
font-bold
"
>

<MessageCircleHeart
className="
w-4
h-4
"/>

Review Pelanggan

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

Cerita Manis

<span className="
text-orange-500
">
 Mereka
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

Kepercayaan pelanggan adalah kebahagiaan terbesar kami.

</p>


</div>







{/* TRUST STATS */}

<div
className="
grid
grid-cols-3
gap-3
max-w-3xl
mx-auto
mt-8
mb-10
"
>



<div
className="
bg-white
dark:bg-slate-800
rounded-2xl
p-3
text-center
shadow
"
>

<Star
className="
mx-auto
text-yellow-400
fill-yellow-400
"
/>


<b className="
block
text-lg
"
>
4.9
</b>


<span
className="
text-xs
text-slate-500
"
>
Rating
</span>


</div>





<div
className="
bg-white
dark:bg-slate-800
rounded-2xl
p-3
text-center
shadow
"
>


<Users
className="
mx-auto
text-orange-500
"
/>


<b className="
block
text-lg
"
>
1500+
</b>


<span
className="
text-xs
text-slate-500
"
>
Pelanggan
</span>


</div>





<div
className="
bg-white
dark:bg-slate-800
rounded-2xl
p-3
text-center
shadow
"
>


<Award
className="
mx-auto
text-green-500
"
/>


<b className="
block
text-lg
"
>
100%
</b>


<span
className="
text-xs
text-slate-500
"
>
Fresh
</span>


</div>



</div>







{/* SLIDER */}


<div
className="
overflow-hidden
"
>


<div

className="
flex
transition-transform
duration-500
"

style={{
transform:
`translateX(-${currentIndex*100}%)`
}}

>


{
TESTIMONIALS.map(test=>(


<div
key={test.id}
className="
min-w-full
px-1
"
>


<div
className="
relative
bg-white
dark:bg-slate-800
rounded-3xl
p-6
sm:p-10
shadow-xl
border
border-orange-100
dark:border-slate-700
"
>



<Quote

className="
absolute
right-6
top-6
w-12
h-12
text-orange-200
"

/>





<div
className="
flex
gap-1
"
>

{
Array.from({
length:test.rating
}).map((_,i)=>(

<Star

key={i}

className="
w-5
h-5
fill-yellow-400
text-yellow-400
"

/>

))
}


</div>







<p
className="
mt-5
text-sm
sm:text-lg
italic
leading-relaxed
text-slate-700
dark:text-slate-200
"
>

"{test.comment}"

</p>








<div
className="
mt-8
pt-5
border-t
flex
items-center
justify-between
gap-4
"
>


<div
className="
flex
items-center
gap-3
"
>


<img

src={test.avatar}

alt={test.name}

className="
w-14
h-14
rounded-full
object-cover
border-2
border-orange-400
"

/>




<div>


<div
className="
flex
items-center
gap-1
"
>

<b>
{test.name}
</b>


<CheckCircle2
className="
w-4
h-4
text-green-500
"
/>


</div>



<p
className="
text-xs
text-slate-500
"
>

{test.location}

</p>


</div>


</div>





<div
className="
hidden
sm:block
text-right
"
>

<p
className="
text-xs
font-bold
text-orange-500
"
>

{test.productOrdered}

</p>


<p
className="
text-xs
text-slate-400
"
>

{test.date}

</p>


</div>



</div>



</div>


</div>


))

}



</div>


</div>







{/* CONTROL */}

<div
className="
flex
justify-center
items-center
gap-5
mt-8
"
>


<button

onClick={prevSlide}

className="
w-11
h-11
rounded-full
bg-white
shadow
flex
items-center
justify-center
"

>

<ChevronLeft/>

</button>





<div
className="
flex
gap-2
"
>

{
TESTIMONIALS.map((_,i)=>(

<button

key={i}

onClick={()=>setCurrentIndex(i)}

className={`
h-2
rounded-full
transition-all

${
i===currentIndex
?
'w-8 bg-orange-500'
:
'w-2 bg-slate-300'
}

`}

/>

))

}

</div>





<button

onClick={nextSlide}

className="
w-11
h-11
rounded-full
bg-white
shadow
flex
items-center
justify-center
"

>

<ChevronRight/>

</button>



</div>



</div>


</section>

);


};