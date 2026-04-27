"use client";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import ReservationModal from "@/components/ReservationModal";

const combos = [
  { id:1,title:"Combo 1–2 per",price:"₹1,099",tag:"Best Value",img:"https://yabasa.in/wp-content/uploads/2026/01/WhatsApp-Image-2025-12-05-at-15.52.09_f4561993.jpg",sections:[{heading:"Welcome Drink",items:["Solkadhi / Mojito"]},{heading:"Soup (Choose 1)",items:["Manchow Soup","Seafood Soup"]},{heading:"Starter (Choose 2)",items:["Ole Bombil 4pc","Tandoori Prawns 4pc","Bangda Rawa Fry 1pc"]},{heading:"Main Course (Choose 1)",items:["Prawns Biryani 5pc","Prawns (4pc) / Bangda (1pc)","Malvani / Goan / Mangalorean Curry","2pc Amboli / Rice"]},{heading:"Dessert",items:["Gulab Jamun"]}]},
  { id:2,title:"Combo 2–3 per",price:"₹1,999",tag:"Popular",img:"https://yabasa.in/wp-content/uploads/2026/01/DSC05616-scaled.jpg",sections:[{heading:"Welcome Drink",items:["Solkadhi / Mojito"]},{heading:"Soup (Choose 1)",items:["Manchow Soup","Seafood Soup"]},{heading:"Starter (Choose 3)",items:["Ole Bombil 6pc","Tandoori Prawns 6pc","Bangda Rawa Fry 2pc","Surmai Tawa Fry 1pc"]},{heading:"Main Course (Choose 2)",items:["Prawns Biryani 6pc","Surmai / Prawns Malvani Curry","Amboli / Rice","Goan / Mangalorean option"]},{heading:"Dessert",items:["Gulab Jamun"]}]},
  { id:3,title:"Group Combo (5–6 pax)",price:"₹4,999",tag:"Group Special",img:"https://yabasa.in/wp-content/uploads/2026/01/DSC03168.jpg",sections:[{heading:"Welcome Drink (×6)",items:["Solkadhi / Mojito"]},{heading:"Soup (×6)",items:["Manchow Soup","Seafood Soup","Crab Soup"]},{heading:"Starter",items:["Tandoori Baby Surmai 1pc","Ole Bombil 6pc","Prawns Koliwada 6pc","Bangda Rawa Fry 4pc","Surmai Tawa Fry 2pc"]},{heading:"Main Course (Choose 3)",items:["Surmai Malvani / Goan Curry","Prawns Malvani / Mangalorean","Amboli / Dosa (12pc)","Steam / Indrayani Rice","Prawns Biryani 8pc"]},{heading:"Dessert",items:["Gulab Jamun (12pc)"]},{heading:"Add-On",items:["KF Ultra / Budweiser Bucket (6 pints) @₹1,500"]}]},
];
const menuSections = [
  { cat:"Starters",items:[{name:"Ole Bombil (Bombay Duck)",desc:"Marinated, spiced & fried to perfection"},{name:"Tandoori Prawns",desc:"Smoky charred prawns with mint chutney"},{name:"Bangda Rawa Fry",desc:"Crispy semolina-coated mackerel"},{name:"Prawns Koliwada",desc:"Spiced Maharashtrian-style prawn fry"},{name:"Surmai Tawa Fry",desc:"King mackerel pan-fried in masala butter"}]},
  { cat:"Main Course",items:[{name:"Surmai Masala Fry",desc:"Bold Malvani masala with fresh Surmai"},{name:"Prawns Malwani Curry",desc:"Rich coconut-based coastal prawn curry"},{name:"Crab Masala",desc:"Whole crab in fiery Maharashtrian masala"},{name:"Prawn Biryani",desc:"Aromatic long-grain rice with spiced prawns"},{name:"Surmai Goan Curry",desc:"Tangy Goan-style king mackerel curry"},{name:"Mangalorean Fish Curry",desc:"Coconut milk base with coastal spices"}]},
  { cat:"Thalis",items:[{name:"Non-Veg Thali",desc:"Complete coastal meal — fish, prawns, rice, amboli, solkadhi"},{name:"Crab Thali",desc:"Whole crab with curry, rice and accompaniments"},{name:"Seafood Thali",desc:"A grand coastal spread for the true seafood lover"}]},
  { cat:"Beverages",items:[{name:"Solkadhi",desc:"Traditional Malvani kokum coconut drink"},{name:"Mojito",desc:"Fresh mint, lime, soda"},{name:"Manchow Soup",desc:"Spicy Chinese-style thick soup"},{name:"Seafood Soup",desc:"Coastal broth with fresh seafood"}]},
];

export default function MenuPage() {
  const [activeCategory,setActiveCategory] = useState("All");
  const [reservationOpen,setReservationOpen] = useState(false);
  const cats = ["All",...menuSections.map(s=>s.cat)];
  const filtered = activeCategory==="All" ? menuSections : menuSections.filter(s=>s.cat===activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden" style={{ backgroundColor:"#f0e6d7", borderBottom:"1px solid #e0d4c0" }}>
        <div className="absolute inset-0 opacity-30 dot-pattern"/>
        <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none" style={{ background:"radial-gradient(ellipse at top right, rgba(214,35,0,0.07) 0%, transparent 70%)" }}/>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <span className="section-badge">Smoked Stories</span>
          <h1 className="font-display mt-6 mb-4" style={{ fontSize:"clamp(3rem,8vw,6rem)", color:"#1e1008", animation:"fadeUp 0.9s cubic-bezier(.16,1,.3,1) 0.2s both" }}>
            Our <span className="brand-text">Menu.</span>
          </h1>
          <div className="orn max-w-xs mx-auto mb-6"><span className="font-serif italic" style={{ color:"#885133" }}>✦</span></div>
          <p className="font-sans font-light leading-relaxed" style={{ color:"#5c3420", fontSize:"15px", animation:"fadeUp 0.9s cubic-bezier(.16,1,.3,1) 0.35s both" }}>
            At <strong style={{ color:"#1e1008", fontWeight:500 }}>Ya Basa</strong>, we bring you the authentic taste of coastal flavors — from fresh prawns and Malvani curries to sizzling tandoor platters and signature seafood specials.
          </p>
        </div>
      </section>

      {/* Signature strip — Brown */}
      <section className="py-7 px-6 border-b" style={{ backgroundColor:"#885133", borderColor:"#7a4a2a" }}>
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4">
          {["Surmai Masala Fry","Prawns Techa & Malwani","Non-Veg Thalis"].map(d=>(
            <div key={d} className="px-5 py-2.5" style={{ border:"1px solid rgba(244,240,236,0.30)" }}>
              <span className="font-display text-sm" style={{ color:"rgba(244,240,236,0.85)" }}>{d}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Menu items */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="font-display" style={{ fontSize:"clamp(1.8rem,3vw,2.5rem)", color:"#1e1008" }}>Best Seafood & Coastal Specials</h2>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase mt-2" style={{ color:"#d62300" }}>Loved by Foodies Across Pune</p>
          </div>
        </ScrollReveal>
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {cats.map(c=><button key={c} onClick={()=>setActiveCategory(c)} className={"tag-chip"+(activeCategory===c?" active":"")}>{c}</button>)}
        </div>
        {filtered.map(section=>(
          <div key={section.cat} className="mb-14">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-7">
                <h3 className="font-display text-2xl" style={{ color:"#1e1008" }}>{section.cat}</h3>
                <div className="flex-1 h-px" style={{ backgroundColor:"#e0d4c0" }}/>
                <div className="red-bar"/>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {section.items.map((item,i)=>(
                <ScrollReveal key={item.name} delay={i*60}>
                  <div className="dish-card combo-card rounded p-5 flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor:"#d62300" }}/>
                    <div>
                      <div className="font-sans font-semibold text-sm mb-1" style={{ color:"#1e1008" }}>{item.name}</div>
                      <div className="font-sans font-light text-xs leading-relaxed" style={{ color:"#7a5030" }}>{item.desc}</div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Combo packages */}
      <section className="py-24 px-6 beige-stripe border-t" style={{ borderColor:"#e0d4c0" }}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="section-badge">Best Deals</span>
              <h2 className="font-display mt-5 mb-4" style={{ fontSize:"clamp(2rem,4vw,3rem)", color:"#1e1008" }}>Combo <span className="brand-text">Packages</span></h2>
              <div className="orn max-w-xs mx-auto"><span className="font-serif italic" style={{ color:"#885133" }}>✦</span></div>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {combos.map((combo,i)=>(
              <ScrollReveal key={combo.id} delay={i*150}>
                <div className="combo-card bg-white h-full flex flex-col" style={{ border:"1px solid #e0d4c0", boxShadow:"0 8px 40px rgba(136,81,51,0.10)" }}>
                  <div className="img-zoom relative h-56 overflow-hidden">
                    <img src={combo.img} alt={combo.title} className="w-full h-full object-cover"/>
                    <div className="absolute inset-0" style={{ background:"linear-gradient(to top, rgba(255,255,255,0.92) 0%, transparent 60%)" }}/>
                    <div className="absolute top-4 right-4 highlight-pill">{combo.tag}</div>
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-5">
                      <h3 className="font-display text-xl" style={{ color:"#1e1008" }}>{combo.title}</h3>
                      <span className="font-display text-2xl brand-text">{combo.price}</span>
                    </div>
                    <div className="space-y-4 flex-1">
                      {combo.sections.map(s=>(
                        <div key={s.heading}>
                          <div className="font-sans text-[10px] tracking-widest uppercase font-semibold mb-1.5" style={{ color:"#885133" }}>{s.heading}</div>
                          <ul className="space-y-0.5">{s.items.map(it=><li key={it} className="font-sans font-light text-xs flex items-start gap-1.5" style={{ color:"#5c3420" }}><span style={{ color:"#e0d4c0", marginTop:"2px" }}>·</span>{it}</li>)}</ul>
                        </div>
                      ))}
                    </div>
                    <button onClick={()=>setReservationOpen(true)} className="btn-red w-full py-3 mt-6">Book This Combo</button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <ReservationModal isOpen={reservationOpen} onClose={()=>setReservationOpen(false)}/>
    </>
  );
}
