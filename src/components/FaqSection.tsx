import React, { useState } from 'react';
import { FAQS, buildWhatsAppLink } from '../data/businessData';

import {
  ChevronDown,
  HelpCircle,
  Search,
  MessageCircle,
  Sparkles
} from 'lucide-react';



export const FaqSection: React.FC = () => {


const [openId,setOpenId] =
useState<string>('faq-1');


const [searchQuery,setSearchQuery] =
useState('');



const filteredFaqs =
FAQS.filter(faq =>
faq.question
.toLowerCase()
.includes(searchQuery.toLowerCase())

||

faq.answer
.toLowerCase()
.includes(searchQuery.toLowerCase())

);




return (

<section
id="faq"
className="
py-12
sm:py-20
bg-white
dark:bg-slate-900
"
>


<div
className="
max-w-4xl
mx-auto
px-4
sm:px-6
"
>




{/* HEADER */}

<div
className="
text-center
mb-10
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
text-orange-600
text-xs
font-bold
"
>

<HelpCircle
className="
w-4
h-4
"
/>

Bantuan Pelanggan

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

Pertanyaan

<span className="
text-orange-500
">
 Umum
</span>

</h2>



<p
className="
mt-3
text-sm
text-slate-600
dark:text-slate-300
"
>

Informasi seputar pemesanan,
delivery dan custom pudding.

</p>





{/* SEARCH */}

<div
className="
relative
max-w-lg
mx-auto
mt-6
"
>


<Search

className="
absolute
left-4
top-1/2
-translate-y-1/2
w-5
h-5
text-slate-400
"

/>


<input

value={searchQuery}

onChange={(e)=>
setSearchQuery(e.target.value)
}

placeholder="Cari pertanyaan..."

className="
w-full
pl-12
pr-4
py-4
rounded-2xl
bg-slate-100
dark:bg-slate-800
border
border-slate-200
dark:border-slate-700
text-sm
outline-none
focus:ring-2
focus:ring-orange-500
"

/>


</div>


</div>







{/* FAQ LIST */}


<div
className="
space-y-4
"
>


{
filteredFaqs.map(faq=>{


const active =
openId===faq.id;



return (

<div

key={faq.id}

className={`
rounded-3xl
overflow-hidden
border
transition-all

${
active

?

'bg-orange-50 dark:bg-slate-800 border-orange-300 shadow-lg'

:

'bg-white dark:bg-slate-800/40 border-slate-200 dark:border-slate-700'

}

`}

>


<button

onClick={()=>setOpenId(
active ? '' : faq.id
)}

className="
w-full
flex
items-center
justify-between
gap-4
p-5
text-left
"

>


<span
className="
font-bold
text-sm
sm:text-base
text-slate-900
dark:text-white
"
>

{faq.question}

</span>




<div

className={`
w-9
h-9
rounded-full
flex
items-center
justify-center
transition

${
active
?
'bg-orange-500 text-white rotate-180'
:
'bg-orange-100 text-orange-600'
}

`}

>

<ChevronDown
className="
w-5
h-5
"
/>

</div>



</button>






<div

className={`
grid
transition-all
duration-300

${
active
?
'grid-rows-[1fr] opacity-100'
:
'grid-rows-[0fr] opacity-0'
}

`}

>


<div
className="
overflow-hidden
"
>


<p
className="
px-5
pb-5
text-sm
leading-relaxed
text-slate-600
dark:text-slate-300
"
>

{faq.answer}

</p>


</div>


</div>



</div>


)

})

}



</div>







{/* CTA */}


<div

className="
mt-10
rounded-3xl
p-6
text-center
bg-gradient-to-r
from-orange-100
via-amber-100
to-rose-100
dark:from-slate-800
dark:to-slate-800
"

>


<Sparkles
className="
mx-auto
text-orange-500
"
/>


<h3
className="
mt-3
font-black
text-lg
text-slate-900
dark:text-white
"
>

Belum menemukan jawaban?

</h3>



<p
className="
text-sm
text-slate-600
dark:text-slate-300
mt-2
"
>

Admin kami siap membantu rekomendasi
pudding terbaik untuk acara Anda.

</p>




<a

href={buildWhatsAppLink('Konsultasi Pudding')}

target="_blank"

rel="noopener noreferrer"

className="
inline-flex
items-center
gap-2
mt-5
px-6
py-3
rounded-2xl
bg-gradient-to-r
from-orange-500
to-amber-500
text-white
font-bold
shadow-lg
"

>

<MessageCircle
className="
w-5
h-5
"
/>

Chat WhatsApp

</a>



</div>



</div>


</section>

);


};