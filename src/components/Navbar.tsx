import React, { useState, useEffect } from 'react';
import {
  Sun,
  Moon,
  Menu,
  X,
  PhoneCall
} from 'lucide-react';

import {
  buildWhatsAppLink
} from '../data/businessData';


interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val:boolean)=>void;
  onOpenOrderModal: ()=>void;
}


export const Navbar:React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  onOpenOrderModal
})=>{


const [isScrolled,setIsScrolled]=useState(false);
const [mobileMenuOpen,setMobileMenuOpen]=useState(false);
const [activeSection,setActiveSection]=useState('hero');


useEffect(()=>{

const handleScroll=()=>{

setIsScrolled(window.scrollY>20);


const sections=[
'hero',
'produk',
'galeri',
'testimoni',
'faq',
'lokasi'
];


const position=window.scrollY+120;


sections.forEach(section=>{

const el=document.getElementById(section);

if(el){

if(
position>=el.offsetTop &&
position<el.offsetTop+el.offsetHeight
){

setActiveSection(section);

}

}

});


};


window.addEventListener(
'scroll',
handleScroll
);


return()=>window.removeEventListener(
'scroll',
handleScroll
);


},[]);



const navLinks=[

{
name:'Beranda',
href:'#hero',
id:'hero'
},

{
name:'Produk',
href:'#produk',
id:'produk'
},

{
name:'Galeri',
href:'#galeri',
id:'galeri'
},

{
name:'Testimoni',
href:'#testimoni',
id:'testimoni'
},

{
name:'FAQ',
href:'#faq',
id:'faq'
},

{
name:'Lokasi',
href:'#lokasi',
id:'lokasi'
}

];



const scrollTo=(e:React.MouseEvent<HTMLAnchorElement>,href:string)=>{

e.preventDefault();

setMobileMenuOpen(false);

const id=href.replace('#','');

const target=document.getElementById(id);

if(target){

target.scrollIntoView({
behavior:'smooth'
});

}

};



return (

<header

className={`
fixed
top-0
left-0
right-0
z-50
transition-all
duration-300

${
isScrolled

?

'bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl shadow-lg border-b border-orange-100 dark:border-slate-800 py-3'

:

'bg-transparent py-5'

}

`}

>


<div className="
max-w-7xl
mx-auto
px-4
sm:px-6
lg:px-8
">


<div className="
flex
items-center
justify-between
">


{/* LOGO */}

<a
href="#hero"
onClick={(e)=>scrollTo(e,'#hero')}
className="
flex
items-center
gap-3
"
>


<div className="
w-11
h-11
rounded-2xl
bg-gradient-to-tr
from-amber-500
via-orange-500
to-rose-500
p-0.5
shadow-lg
">

<div className="
w-full
h-full
rounded-[14px]
bg-white
dark:bg-slate-900
overflow-hidden
flex
items-center
justify-center
">

<img

src="/logo.png"

alt="Pudding Buah Pontianak"

className="
w-full
h-full
object-cover
"

onError={(e)=>{
e.currentTarget.style.display='none'
}}

/>


</div>

</div>



<div>

<div className="
font-bold
text-lg
sm:text-xl
text-slate-900
dark:text-white
">

Pudding Buah

</div>


<div className="
text-[11px]
font-bold
uppercase
tracking-wider
text-orange-500
">

Pontianak

</div>


</div>


</a>





{/* DESKTOP MENU */}

<nav className="
hidden
md:flex
items-center
gap-1
bg-white/60
dark:bg-slate-800/60
rounded-full
p-1.5
border
backdrop-blur
">


{
navLinks.map(link=>(


<a

key={link.id}

href={link.href}

onClick={(e)=>scrollTo(e,link.href)}

className={`
px-4
py-2
rounded-full
text-xs
font-bold
transition

${
activeSection===link.id

?

'bg-gradient-to-r from-amber-500 to-orange-500 text-white'

:

'text-slate-600 dark:text-slate-300 hover:bg-orange-50'

}

`}

>

{link.name}

</a>


))

}


</nav>





{/* ACTION */}

<div className="
flex
items-center
gap-2
">


<button

onClick={()=>setDarkMode(!darkMode)}

className="
w-11
h-11
rounded-full
bg-white
dark:bg-slate-800
border
flex
items-center
justify-center
"

>

{
darkMode
?
<Sun/>
:
<Moon/>
}

</button>




<a

href={buildWhatsAppLink()}

target="_blank"

rel="noopener noreferrer"

className="
hidden
sm:flex
items-center
gap-2
px-5
py-3
rounded-full
bg-gradient-to-r
from-amber-500
to-orange-500
text-white
text-xs
font-bold
shadow-lg
hover:shadow-orange-500/30
transition
"

>

<PhoneCall className="w-4 h-4"/>

Pesan Sekarang

</a>





<button

onClick={()=>setMobileMenuOpen(!mobileMenuOpen)}

className="
md:hidden
w-11
h-11
rounded-xl
bg-white
dark:bg-slate-800
border
flex
items-center
justify-center
"

>

{
mobileMenuOpen
?
<X/>
:
<Menu/>
}

</button>



</div>


</div>

</div>





{/* MOBILE MENU */}

{
mobileMenuOpen &&

<div className="
md:hidden
bg-white/95
dark:bg-slate-900/95
backdrop-blur-xl
border-b
p-4
shadow-xl
">


<div className="
space-y-2
">


{
navLinks.map(link=>(

<a

key={link.id}

href={link.href}

onClick={(e)=>scrollTo(e,link.href)}

className="
block
px-4
py-3
rounded-xl
font-semibold
text-sm
bg-slate-50
dark:bg-slate-800
"

>

{link.name}

</a>

))

}



<a

href={buildWhatsAppLink()}

target="_blank"

rel="noopener noreferrer"

className="
block
text-center
py-3
rounded-xl
bg-gradient-to-r
from-amber-500
to-orange-500
text-white
font-bold
"

>

Pesan via WhatsApp

</a>


</div>


</div>

}


</header>


);

};