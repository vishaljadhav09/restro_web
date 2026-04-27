"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ReservationModal from "@/components/ReservationModal";
import { ChevronDown, Star, Fish, Flame, Award, Clock, MapPin, Phone, ArrowRight } from "lucide-react";

const testimonials = [
  { text:"खूपच भन्नाट चव! फिश थाळी एकदम फ्रेश आणि ऑथेंटिक मालवणी टेस्ट. पुन्हा नक्की येणार!", author:"Rohit Patil", stars:5 },
  { text:"Crab masala आणि Solkadhi combo म्हणजे heaven! Authentic Malvani taste, proper style cooking.", author:"Sagar Shinde", stars:5 },
  { text:"Ambience खूपच छान आहे आणि seafood quality top-class. Baner मध्ये best seafood place!", author:"Priya Jadhav", stars:5 },
  { text:"A must visit for every seafood lover. The prawns were absolutely fresh and perfectly spiced!", author:"Amit Deshmukh", stars:5 },
];
const highlights = [
  { icon:Fish,  title:"Ocean-Fresh Seafood", desc:"Sourced daily from the coast" },
  { icon:Flame, title:"Malvani Mastery",      desc:"Authentic coastal recipes" },
  { icon:Award, title:"Serving Since 2014",   desc:"A decade of trust in Pune" },
  { icon:Clock, title:"Open Daily",           desc:"Lunch & Dinner, Mon–Sun" },
];
const dishes = [
  { name:"Surmai Masala Fry",     desc:"Perfectly spiced Surmai fillet pan-fried in Malvani masala.",           emoji:"🐟", tag:"Chef Pick" },
  { name:"Prawns Malwani Curry",  desc:"Juicy prawns in rich coconut-based Malvani gravy.",                     emoji:"🦐", tag:"Bestseller" },
  { name:"Crab Masala",           desc:"Whole crab cooked in bold Maharashtrian masala.",                        emoji:"🦀", tag:"Must Try" },
  { name:"Seafood Thali",         desc:"Complete coastal feast — fish curry, prawns, rice, amboli & solkadhi.", emoji:"🍱", tag:"Popular" },
  { name:"Bangda Rawa Fry",       desc:"Mackerel coated in semolina, fried crisp — a Malvani classic.",        emoji:"🐠", tag:"" },
  { name:"Tandoori Prawns",       desc:"Large prawns marinated in spiced yogurt, grilled over charcoal.",      emoji:"🍢", tag:"" },
];
const marqueeItems = ["Kharadi","Baner","Magarpatta","Fresh Daily","Malvani Cuisine","Coastal Flavors","Seafood Thali","Prawns","Crab Masala","Surmai Fry"];

export default function HomePage() {
  const [reservationOpen,setReservationOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const fn = ()=>{ if(heroRef.current) heroRef.current.style.transform=`translateY(${window.scrollY*0.35}px)`; };
    window.addEventListener("scroll",fn,{passive:true});
    return ()=>window.removeEventListener("scroll",fn);
  },[]);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor:"#f4f0ec" }}>
        <div ref={heroRef} className="absolute inset-0" style={{ background:"radial-gradient(ellipse at 60% 40%, rgba(214,35,0,0.06) 0%, transparent 60%), radial-gradient(ellipse at 20% 70%, rgba(136,81,51,0.08) 0%, transparent 55%)" }}/>
        {/* Floating shapes */}
        {[{s:200,t:"8%",l:"4%",d:0},{s:130,t:"68%",l:"2%",d:2},{s:170,t:"12%",r:"4%",d:1.5},{s:90,t:"72%",r:"7%",d:3}].map((sh,i)=>(
          <div key={i} className="float-shape absolute rounded-full pointer-events-none" style={{ width:sh.s,height:sh.s,top:sh.t,left:(sh as any).l,right:(sh as any).r, backgroundColor:`rgba(136,81,51,0.06)`, border:`1px solid rgba(136,81,51,0.10)`, animationDuration:`${7+i*1.5}s`, animationDelay:`${sh.d}s` }}/>
        ))}
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-25 pointer-events-none dot-pattern"/>
        {/* Red accent corner */}
        <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none" style={{ background:"radial-gradient(ellipse at top right, rgba(214,35,0,0.08) 0%, transparent 70%)" }}/>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div style={{ animation:"fadeIn 1s ease 0.1s both" }}>
            <span className="section-badge">Premium Seafood Restaurant · Pune</span>
          </div>
          <h1 className="font-display mt-8 mb-4 leading-none" style={{ fontSize:"clamp(3.5rem,10vw,8rem)", color:"#1e1008", animation:"fadeUp 1s cubic-bezier(.16,1,.3,1) 0.3s both" }}>
            Ya Basa
          </h1>
          <p className="font-serif italic mb-4" style={{ fontSize:"clamp(1.3rem,3vw,2.2rem)", color:"#d62300", animation:"fadeUp 1s cubic-bezier(.16,1,.3,1) 0.45s both" }}>
            Kitchen &amp; Bar
          </p>
          <p className="font-sans font-light mb-10 max-w-xl mx-auto leading-relaxed" style={{ fontSize:"15px", color:"#5c3420", animation:"fadeUp 1s cubic-bezier(.16,1,.3,1) 0.55s both" }}>
            Bold coastal flavors crafted with ocean-fresh seafood,<br/>handpicked spices &amp; time-honoured Malvani recipes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" style={{ animation:"fadeUp 1s cubic-bezier(.16,1,.3,1) 0.65s both" }}>
            <button onClick={()=>setReservationOpen(true)} className="btn-red px-10 py-4">Reserve a Table</button>
            <Link href="/menu" className="btn-outline-brown px-10 py-4">Explore Menu</Link>
          </div>
          <div className="flex items-center justify-center gap-8 mt-12 font-sans text-[10px] tracking-widest uppercase" style={{ color:"#a8673f", animation:"fadeIn 1.2s ease 0.8s both" }}>
            {["Kharadi","Baner","Magarpatta"].map((loc,i)=>(
              <span key={loc} className="flex items-center gap-1.5">{i>0&&<span className="mr-6 opacity-30">·</span>}<MapPin size={9} style={{ color:"#d62300" }}/> {loc}</span>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce" style={{ color:"rgba(214,35,0,0.5)" }}>
          <span className="font-sans text-[9px] tracking-[0.3em] uppercase">Scroll</span>
          <ChevronDown size={15}/>
        </div>
      </section>

      {/* MARQUEE — Red bar */}
      <div className="overflow-hidden py-3.5 border-y" style={{ backgroundColor:"#d62300", borderColor:"#a81b00" }}>
        <div className="marquee-track flex gap-0 whitespace-nowrap">
          {[...marqueeItems,...marqueeItems].map((item,i)=>(
            <span key={i} className="font-display text-sm px-8" style={{ color: i%2===0 ? "rgba(244,240,236,0.90)":"rgba(244,240,236,0.60)" }}>
              {item} &nbsp;·
            </span>
          ))}
        </div>
      </div>

      {/* STORY */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div>
              <span className="section-badge">Our Coastal Story</span>
              <h2 className="font-display mt-5 mb-6 leading-tight" style={{ fontSize:"clamp(2.2rem,4vw,3.5rem)", color:"#1e1008" }}>
                At <span className="brand-text">Ya Basa</span>
              </h2>
              <p className="font-sans font-light leading-relaxed mb-5" style={{ color:"#5c3420", fontSize:"15px" }}>
                We bring the authentic taste of the coast to Pune with <strong style={{ color:"#1e1008", fontWeight:500 }}>fresh seafood, bold marinades, and perfectly grilled specialities</strong>. Every dish is crafted using handpicked ingredients and time-honoured recipes.
              </p>
              <p className="font-sans font-light leading-relaxed mb-8" style={{ color:"#5c3420", fontSize:"15px" }}>
                From <strong style={{ color:"#1e1008", fontWeight:500 }}>signature seafood grills to multi-cuisine favourites</strong>, our kitchen celebrates flavour, freshness, and fire. Paired with warm hospitality and crafted drinks — Ya Basa is where great food and great moments meet.
              </p>
              <div className="flex gap-4">
                <button onClick={()=>setReservationOpen(true)} className="btn-red px-8 py-3">Reserve Now</button>
                <Link href="/about" className="btn-outline-brown px-8 py-3">Our Story</Link>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="grid grid-cols-2 gap-4">
              <div className="img-zoom rounded overflow-hidden aspect-[3/4]" style={{ border:"1px solid #e0d4c0", boxShadow:"0 8px 40px rgba(136,81,51,0.12)" }}>
                <img src="https://yabasa.in/wp-content/uploads/2026/01/DSC03168.jpg" alt="Ya Basa Restaurant" className="w-full h-full object-cover"/>
              </div>
              <div className="img-zoom rounded overflow-hidden aspect-[3/4] mt-10" style={{ border:"1px solid #e0d4c0", boxShadow:"0 8px 40px rgba(136,81,51,0.12)" }}>
                <img src="https://yabasa.in/wp-content/uploads/2026/02/Seafood-Thalis.jpeg" alt="Seafood Thali" className="w-full h-full object-cover"/>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* STATS */}
      <section className="py-14 border-y" style={{ backgroundColor:"#f0e6d7", borderColor:"#e0d4c0" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
          {highlights.map(({ icon:Icon, title, desc },i)=>(
            <ScrollReveal key={title} delay={i*100}>
              <div className="text-center group">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-300" style={{ border:"1px solid #e0d4c0", backgroundColor:"#ffffff" }} onMouseEnter={e=>{ (e.currentTarget as HTMLElement).style.borderColor="#d62300"; (e.currentTarget as HTMLElement).style.boxShadow="0 6px 24px rgba(214,35,0,0.15)"; }} onMouseLeave={e=>{ (e.currentTarget as HTMLElement).style.borderColor="#e0d4c0"; (e.currentTarget as HTMLElement).style.boxShadow="none"; }}>
                  <Icon size={20} style={{ color:"#d62300" }}/>
                </div>
                <div className="font-sans text-sm font-semibold mb-1" style={{ color:"#1e1008" }}>{title}</div>
                <div className="font-sans text-xs font-light" style={{ color:"#a8673f" }}>{desc}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CHEF HIGHLIGHTS */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="section-badge">Grilled Fresh. Served Bold.</span>
              <h2 className="font-display mt-5 mb-4" style={{ fontSize:"clamp(2rem,4vw,3rem)", color:"#1e1008" }}>Chef&apos;s Highlights</h2>
              <div className="orn max-w-xs mx-auto"><span className="font-serif italic text-lg" style={{ color:"#885133" }}>✦</span></div>
              <p className="font-sans font-light mt-5 max-w-xl mx-auto" style={{ color:"#5c3420", fontSize:"15px" }}>
                Handcrafted seafood and multi-cuisine grills, made using fresh ingredients and signature Ya Basa spices.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dishes.map((dish,i)=>(
              <ScrollReveal key={dish.name} delay={i*80}>
                <div className="dish-card combo-card rounded p-6 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <span style={{ fontSize:"2.5rem" }}>{dish.emoji}</span>
                    {dish.tag && <span className="highlight-pill">{dish.tag}</span>}
                  </div>
                  <h3 className="font-display text-xl mb-2" style={{ color:"#1e1008" }}>{dish.name}</h3>
                  <p className="font-sans font-light text-sm leading-relaxed" style={{ color:"#5c3420" }}>{dish.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="text-center mt-12">
              <Link href="/menu" className="btn-red px-10 py-4 inline-flex items-center gap-2">View Full Menu <ArrowRight size={14}/></Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SINCE 2014 */}
      <section className="py-28 px-6 beige-stripe border-y" style={{ borderColor:"#e0d4c0" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="w-64 h-64 mx-auto rounded-full overflow-hidden" style={{ border:"3px solid rgba(136,81,51,0.30)", boxShadow:"0 20px 60px rgba(136,81,51,0.18)" }}>
                <img src="https://yabasa.in/wp-content/uploads/2025/12/Ya-basa-logo-1.jpg" alt="Ya Basa" className="w-full h-full object-contain"/>
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-5 py-2 font-sans text-[10px] tracking-widest uppercase" style={{ backgroundColor:"#d62300", color:"#ffffff" }}>
                Since 2014
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div>
              <span className="section-badge">Seafood &amp; Multicuisine Delight!</span>
              <h2 className="font-display mt-5 mb-2" style={{ fontSize:"clamp(2rem,4vw,3rem)", color:"#1e1008" }}>Ya Basa</h2>
              <p className="font-serif italic text-xl mb-4" style={{ color:"#885133" }}>Kitchen &amp; Bar</p>
              <p className="font-sans font-light leading-relaxed mb-7" style={{ color:"#5c3420", fontSize:"15px" }}>
                A trusted name in Pune&apos;s food scene since 2014, known for <strong style={{ color:"#1e1008", fontWeight:500 }}>quality seafood, signature recipes, vibrant ambience, and unforgettable dining experiences</strong>.
              </p>
              <div className="flex gap-4">
                <button onClick={()=>setReservationOpen(true)} className="btn-red px-7 py-3">Reservations</button>
                <Link href="/menu" className="btn-outline-brown px-7 py-3">Explore Menu</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 px-6" style={{ backgroundColor:"#f0e6d7" }}>
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="section-badge">They All Love Our Food</span>
              <h2 className="font-display mt-5 mb-4" style={{ fontSize:"clamp(2rem,4vw,3rem)", color:"#1e1008" }}>What Our Guests Say</h2>
              <div className="orn max-w-xs mx-auto"><span className="font-serif italic text-lg" style={{ color:"#885133" }}>✦</span></div>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t,i)=>(
              <ScrollReveal key={i} delay={i*100}>
                <div className="testi-card rounded p-7">
                  <div className="big-quote leading-none mb-2">&ldquo;</div>
                  <div className="flex gap-1 mb-4">{[...Array(t.stars)].map((_,j)=><Star key={j} size={13} style={{ color:"#d62300", fill:"#d62300" }}/>)}</div>
                  <p className="font-serif italic leading-relaxed mb-5" style={{ fontSize:"1.15rem", color:"#3d2010" }}>&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-px" style={{ backgroundColor:"#885133" }}/>
                    <span className="font-sans text-xs tracking-widest uppercase font-semibold" style={{ color:"#885133" }}>{t.author}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-display" style={{ fontSize:"clamp(2rem,4vw,2.8rem)", color:"#1e1008" }}>Find Us in <span className="brand-text">Pune</span></h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{name:"Kharadi",phone:"7720073535",open:true},{name:"Baner",phone:"7744013535",open:true},{name:"Magarpatta",phone:null,open:false}].map((loc,i)=>(
              <ScrollReveal key={loc.name} delay={i*100}>
                <div className="loc-card rounded p-8 text-center">
                  <MapPin size={22} className="mx-auto mb-3" style={{ color:"#d62300" }}/>
                  <h3 className="font-display text-xl mb-1" style={{ color:"#1e1008" }}>{loc.name}</h3>
                  <p className="font-sans text-xs tracking-widest uppercase mb-4" style={{ color:"#a8673f" }}>Pune, Maharashtra</p>
                  {loc.phone ? <a href={"tel:"+loc.phone} className="font-sans text-sm flex items-center justify-center gap-1.5" style={{ color:"#885133" }}><Phone size={12}/> {loc.phone}</a> : <span className="font-sans text-sm" style={{ color:"#a8673f" }}>Coming Soon</span>}
                  <div className="mt-3 text-[10px] tracking-widest uppercase font-sans" style={{ color: loc.open?"#5c7a45":"#a8673f" }}>{loc.open?"● Open Now":"● Coming Soon"}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 px-6 text-center" style={{ backgroundColor:"#885133" }}>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute inset-0 opacity-10 dot-pattern"/>
          <ScrollReveal>
            <span className="section-badge" style={{ color:"rgba(244,240,236,0.80)" }}>Happy Hours at Ya Basa</span>
            <h2 className="font-display mt-6 mb-3" style={{ fontSize:"clamp(2.2rem,5vw,4rem)", color:"#f4f0ec" }}>
              Good Food.<br/><span style={{ color:"#f0e6d7" }}>Great Drinks.</span>
            </h2>
            <p className="font-sans font-light tracking-widest uppercase text-xs mt-4 mb-8" style={{ color:"rgba(244,240,236,0.50)" }}>Baner · Kharadi · Magarpatta</p>
            <button onClick={()=>setReservationOpen(true)} className="btn-red px-12 py-4">Reserve a Table</button>
          </ScrollReveal>
        </div>
      </section>

      <ReservationModal isOpen={reservationOpen} onClose={()=>setReservationOpen(false)}/>
    </>
  );
}
