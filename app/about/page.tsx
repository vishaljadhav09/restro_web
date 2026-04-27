"use client";
import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ReservationModal from "@/components/ReservationModal";
import { Star, Shield, Heart, Instagram } from "lucide-react";
const values = [
  { icon:Star,   title:"Freshness First",   desc:"Ocean-fresh seafood sourced daily, never frozen." },
  { icon:Shield, title:"Hygiene Standards", desc:"Strict quality control and hygiene checks in every kitchen." },
  { icon:Heart,  title:"Authentic Taste",   desc:"Time-honoured Malvani and coastal recipes passed down generations." },
];
export default function AboutPage() {
  const [reservationOpen,setReservationOpen] = useState(false);
  return (
    <>
      <section className="relative pt-40 pb-24 px-6 overflow-hidden" style={{ backgroundColor:"#f0e6d7", borderBottom:"1px solid #e0d4c0" }}>
        <div className="absolute inset-0 opacity-30 dot-pattern"/>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <span className="section-badge">Know More</span>
          <h1 className="font-display mt-6 mb-4" style={{ fontSize:"clamp(3rem,8vw,6rem)", color:"#1e1008", animation:"fadeUp 0.9s cubic-bezier(.16,1,.3,1) 0.2s both" }}>About <span className="brand-text">Us.</span></h1>
          <div className="orn max-w-xs mx-auto mb-6"><span className="font-serif italic" style={{ color:"#885133" }}>✦</span></div>
          <p className="font-serif italic leading-relaxed" style={{ fontSize:"1.2rem", color:"#5c3420", animation:"fadeUp 0.9s cubic-bezier(.16,1,.3,1) 0.35s both" }}>
            Ya Basa is a leading seafood restaurant in Kharadi, Baner, and Magarpatta, Pune, known for serving fresh, high-quality seafood with authentic coastal flavors.
          </p>
        </div>
      </section>

      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="grid grid-cols-2 gap-3">
              {["https://yabasa.in/wp-content/uploads/2026/01/DSC03896-scaled.jpg","https://yabasa.in/wp-content/uploads/2026/01/DSC03787-scaled.jpg"].map((src,i)=>(
                <div key={i} className={"img-zoom rounded overflow-hidden aspect-square"+(i===1?" mt-8":"")} style={{ border:"1px solid #e0d4c0", boxShadow:"0 8px 40px rgba(136,81,51,0.12)" }}><img src={src} alt="Ya Basa" className="w-full h-full object-cover"/></div>
              ))}
              <div className="img-zoom rounded overflow-hidden col-span-2 aspect-video" style={{ border:"1px solid #e0d4c0", boxShadow:"0 8px 40px rgba(136,81,51,0.12)" }}>
                <img src="https://yabasa.in/wp-content/uploads/2026/01/crab-thali-scaled.jpg" alt="Crab Thali" className="w-full h-full object-cover"/>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div>
              <span className="section-badge">Our Kitchen & Bar</span>
              <h2 className="font-display mt-5 mb-6" style={{ fontSize:"clamp(2rem,3.5vw,2.8rem)", color:"#1e1008" }}>Serving Premium<br/>Fresh Seafood in Pune</h2>
              <p className="font-sans font-light leading-relaxed mb-5" style={{ color:"#5c3420", fontSize:"15px" }}>Ya Basa is a trusted seafood restaurant in Kharadi, Baner, and Magarpatta, known for delivering ocean-fresh flavors and an unforgettable fine dining experience.</p>
              <p className="font-sans font-light leading-relaxed mb-8" style={{ color:"#5c3420", fontSize:"15px" }}>From expertly grilled fish and prawns to signature coastal specialties, every dish is crafted with quality ingredients and authentic taste.</p>
              <Link href="/menu" className="btn-red px-8 py-3">View Menu</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 px-6 beige-stripe border-y" style={{ borderColor:"#e0d4c0" }}>
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="section-badge">A Few Words About Us</span>
            <h2 className="font-display mt-5 mb-6" style={{ fontSize:"clamp(1.8rem,3.5vw,2.8rem)", color:"#1e1008" }}>Where Fresh Seafood Meets<br/><span className="brand-text">Fine Dining</span></h2>
            <div className="orn max-w-xs mx-auto mb-8"><span className="font-serif italic" style={{ color:"#885133" }}>✦</span></div>
            <p className="font-sans font-light leading-relaxed mb-5 max-w-2xl mx-auto" style={{ color:"#5c3420", fontSize:"15px" }}>At <strong style={{ color:"#1e1008", fontWeight:500 }}>Ya Basa</strong>, we redefine seafood dining with a perfect blend of freshness, flavor, and fine-dining elegance. Our chefs curate a premium selection of coastal delicacies — authentic Maharashtrian seafood, Malvani curries, tandoor specialties, and signature chef-crafted platters.</p>
            <p className="font-sans font-light leading-relaxed max-w-2xl mx-auto" style={{ color:"#5c3420", fontSize:"15px" }}>Every dish is prepared using freshly sourced fish, prawns, and crab, seasoned with traditional spices to deliver bold and unforgettable flavors.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="section-badge">What We Stand For</span>
            <h2 className="font-display mt-5" style={{ fontSize:"clamp(2rem,3.5vw,2.8rem)", color:"#1e1008" }}>Our Core Values</h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map(({ icon:Icon, title, desc },i)=>(
            <ScrollReveal key={title} delay={i*120}>
              <div className="loc-card rounded p-8 text-center">
                <div className="w-14 h-14 mx-auto mb-5 rounded-full flex items-center justify-center" style={{ border:"1px solid #e0d4c0", backgroundColor:"#f0e6d7" }}>
                  <Icon size={22} style={{ color:"#d62300" }}/>
                </div>
                <h3 className="font-display text-xl mb-3" style={{ color:"#1e1008" }}>{title}</h3>
                <p className="font-sans font-light text-sm leading-relaxed" style={{ color:"#5c3420" }}>{desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 border-y" style={{ backgroundColor:"#f0e6d7", borderColor:"#e0d4c0" }}>
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl mb-5" style={{ color:"#1e1008" }}>Our Food Policy</h2>
            <p className="font-sans font-light leading-relaxed" style={{ color:"#5c3420", fontSize:"15px" }}>At Yabasa, we are committed to serving the freshest seafood in Kharadi, Baner, and Magarpatta. We carefully source high-quality fish, prawns, and coastal ingredients. Our kitchen follows strict quality control, freshness checks, and hygiene practices to deliver a safe and premium seafood dining experience.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="section-badge">Meet The Taste Experts</span>
            <h2 className="font-display mt-5 mb-4" style={{ fontSize:"clamp(2rem,3.5vw,2.8rem)", color:"#1e1008" }}>Renowned Chefs</h2>
            <div className="orn max-w-xs mx-auto"><span className="font-serif italic" style={{ color:"#885133" }}>✦</span></div>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {[{ img:"https://yabasa.in/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-09-at-2.22.01-PM.jpeg",name:"Khushal Singh",role:"The Heart of Ya Basa",ig:"https://www.instagram.com/p/DSKRhG_CD5k/"},{ img:"https://yabasa.in/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-09-at-2.24.13-PM.jpeg",name:"Our Head Chef",role:"Master of Coastal Cuisine",ig:null}].map((chef,i)=>(
            <ScrollReveal key={chef.name} direction={i===0?"left":"right"}>
              <div style={{ border:"1px solid #e0d4c0", boxShadow:"0 8px 40px rgba(136,81,51,0.10)" }}>
                <div className="img-zoom h-80 overflow-hidden"><img src={chef.img} alt={chef.name} className="w-full h-full object-cover"/></div>
                <div className="p-6" style={{ backgroundColor:"#ffffff" }}>
                  <h3 className="font-display text-xl mb-1" style={{ color:"#1e1008" }}>{chef.name}</h3>
                  <p className="font-sans text-[10px] tracking-widest uppercase font-semibold" style={{ color:"#885133" }}>{chef.role}</p>
                  {chef.ig && <a href={chef.ig} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 font-sans text-xs transition-colors" style={{ color:"#a8673f" }}><Instagram size={11}/> Follow on Instagram</a>}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 border-t" style={{ backgroundColor:"#f0e6d7", borderColor:"#e0d4c0" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <ScrollReveal>
            <div>
              <h2 className="font-display text-3xl mb-2" style={{ color:"#1e1008" }}>Careers</h2>
              <h3 className="font-sans text-[10px] tracking-widest uppercase font-semibold mb-4" style={{ color:"#885133" }}>Be a Part of Our Restaurant</h3>
              <p className="font-sans font-light text-sm leading-relaxed mb-5" style={{ color:"#5c3420" }}>If you are energetic, dedicated and love hospitality — we&apos;d love to have you in our team.</p>
              <a href="mailto:yabasahr@gmail.com" className="btn-red px-7 py-3">Apply Today</a>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div>
              <h2 className="font-display text-3xl mb-5" style={{ color:"#1e1008" }}>Review Us On</h2>
              <div className="flex flex-wrap gap-3">
                {[{label:"Instagram",href:"https://www.instagram.com/yabasa_pune"},{label:"Facebook",href:"#"},{label:"Google",href:"https://share.google/fdzeQOGjIvcCeZnxm"}].map(({label,href})=>(
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="btn-outline-brown px-5 py-2.5">{label}</a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <ReservationModal isOpen={reservationOpen} onClose={()=>setReservationOpen(false)}/>
    </>
  );
}
