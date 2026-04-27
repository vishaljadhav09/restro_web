"use client";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import ReservationModal from "@/components/ReservationModal";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
export default function ContactPage() {
  const [reservationOpen,setReservationOpen] = useState(false);
  const [form,setForm] = useState({ name:"",email:"",phone:"",subject:"",message:"" });
  const [submitted,setSubmitted] = useState(false);
  const [loading,setLoading] = useState(false);
  const handleSubmit = (e:React.FormEvent) => { e.preventDefault(); setLoading(true); setTimeout(()=>{ setLoading(false); setSubmitted(true); },1500); };
  return (
    <>
      <section className="relative pt-40 pb-24 px-6 overflow-hidden" style={{ backgroundColor:"#f0e6d7", borderBottom:"1px solid #e0d4c0" }}>
        <div className="absolute inset-0 opacity-30 dot-pattern"/>
        <div className="absolute top-0 right-0 w-80 h-80 pointer-events-none" style={{ background:"radial-gradient(ellipse at top right, rgba(214,35,0,0.07) 0%, transparent 65%)" }}/>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <span className="section-badge">Reserve A Table</span>
          <h1 className="font-display mt-6 mb-4" style={{ fontSize:"clamp(3rem,8vw,6rem)", color:"#1e1008", animation:"fadeUp 0.9s cubic-bezier(.16,1,.3,1) 0.2s both" }}>Contact <span className="brand-text">Us.</span></h1>
          <div className="orn max-w-xs mx-auto mb-6"><span className="font-serif italic" style={{ color:"#885133" }}>✦</span></div>
          <p className="font-sans font-light leading-relaxed" style={{ color:"#5c3420", fontSize:"15px", animation:"fadeUp 0.9s cubic-bezier(.16,1,.3,1) 0.35s both" }}>
            Looking for the <strong style={{ color:"#1e1008", fontWeight:500 }}>best restaurant in Pune</strong> for a special dinner, family outing, or celebration? Get in touch with <strong style={{ color:"#1e1008", fontWeight:500 }}>Ya Basa Restaurant</strong> today.
          </p>
        </div>
      </section>

      <section className="py-14 px-6 border-b" style={{ borderColor:"#e0d4c0" }}>
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <span className="section-badge">Come, Dine With Us</span>
            <h2 className="font-display mt-5 mb-4" style={{ fontSize:"clamp(1.8rem,3vw,2.5rem)", color:"#1e1008" }}>Are You Craving Fresh Seafood?</h2>
            <p className="font-sans font-light leading-relaxed" style={{ color:"#5c3420", fontSize:"15px" }}>Experience the finest seafood restaurant in Kharadi, Baner, Magarpatta — where freshness meets flavor. From expertly grilled fish to signature coastal delicacies, Ya Basa brings you an unforgettable fine dining experience.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="font-display text-center mb-12" style={{ fontSize:"clamp(2rem,3.5vw,2.8rem)", color:"#1e1008" }}>Our Locations</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[{branch:"Kharadi",phone:"7720073535",open:true},{branch:"Baner",phone:"7744013535",open:true},{branch:"Magarpatta",phone:null,open:false}].map((loc,i)=>(
            <ScrollReveal key={loc.branch} delay={i*120}>
              <div className="loc-card rounded p-8 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ border:"1px solid #e0d4c0", backgroundColor:"#f0e6d7" }}><MapPin size={22} style={{ color:"#d62300" }}/></div>
                <h3 className="font-display text-xl mb-1" style={{ color:"#1e1008" }}>{loc.branch}</h3>
                <p className="font-sans text-[10px] tracking-widest uppercase mb-4" style={{ color:"#a8673f" }}>Pune, Maharashtra</p>
                <div className="font-sans text-xs mb-3" style={{ color:"#a8673f" }}>For {loc.branch}</div>
                {loc.phone ? <a href={"tel:"+loc.phone} className="font-display text-2xl flex items-center justify-center gap-2" style={{ color:"#885133" }}><Phone size={16}/> {loc.phone}</a> : <span className="font-display text-xl" style={{ color:"#a8673f" }}>Coming Soon</span>}
                <div className="mt-3 font-sans text-[10px] tracking-widest uppercase" style={{ color: loc.open?"#5c7a45":"#a8673f" }}>{loc.open?"● Open Now":"● Coming Soon"}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 beige-stripe border-t" style={{ borderColor:"#e0d4c0" }}>
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="section-badge">Have Feedback?</span>
              <h2 className="font-display mt-5 mb-3" style={{ fontSize:"clamp(2rem,3.5vw,2.5rem)", color:"#1e1008" }}>Get In Touch</h2>
              <p className="font-sans font-light text-sm" style={{ color:"#5c3420" }}>Your experience at Ya Basa matters to us. Share your feedback and help us continue serving the best seafood in Pune.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="bg-white" style={{ border:"1px solid #e0d4c0", boxShadow:"0 8px 40px rgba(136,81,51,0.10)" }}>
              <div className="h-1" style={{ background:"linear-gradient(to right,#885133,#d62300,#885133)" }}/>
              <div className="p-8 md:p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle size={48} className="mx-auto mb-4" style={{ color:"#d62300" }}/>
                    <h3 className="font-display text-2xl mb-2" style={{ color:"#1e1008" }}>Thank You!</h3>
                    <p className="font-sans font-light text-sm" style={{ color:"#5c3420" }}>Your feedback has been received. We will get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {[{label:"Name *",key:"name",type:"text",ph:"Your full name"},{label:"Email *",key:"email",type:"email",ph:"your@email.com"},{label:"Contact No. *",key:"phone",type:"tel",ph:"Phone number"},{label:"Subject *",key:"subject",type:"text",ph:"Subject"}].map(({ label,key,type,ph })=>(
                        <div key={key}>
                          <label className="block font-sans text-[10px] tracking-widest uppercase font-semibold mb-1.5" style={{ color:"#885133" }}>{label}</label>
                          <input required type={type} placeholder={ph} value={(form as any)[key]} onChange={e=>setForm({...form,[key]:e.target.value})} className="form-input"/>
                        </div>
                      ))}
                    </div>
                    <div>
                      <label className="block font-sans text-[10px] tracking-widest uppercase font-semibold mb-1.5" style={{ color:"#885133" }}>Message *</label>
                      <textarea required rows={5} placeholder="Your message..." value={form.message} onChange={e=>setForm({...form,message:e.target.value})} className="form-input resize-none"/>
                    </div>
                    <button type="submit" disabled={loading} className="btn-red w-full py-4">{loading?"Sending...":"Send Message"}</button>
                  </form>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 px-6 text-center border-t" style={{ borderColor:"#e0d4c0" }}>
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-2xl mb-3" style={{ color:"#1e1008" }}>Open Hours</h2>
            <div className="orn max-w-xs mx-auto mb-6"><span className="font-serif italic" style={{ color:"#885133" }}>✦</span></div>
            <p className="font-display text-4xl mb-3" style={{ color:"#885133" }}>Monday – Sunday</p>
            <p className="font-sans text-[10px] tracking-widest uppercase mb-2" style={{ color:"#a8673f" }}>Handpicked Flavors. Unforgettable Taste.</p>
            <div className="flex items-center justify-center gap-2 mt-4 mb-8" style={{ color:"#5c3420" }}>
              <Clock size={13} style={{ color:"#d62300" }}/>
              <span className="font-sans text-sm">Price range: <strong style={{ color:"#885133" }}>₹2,400 for two people</strong></span>
            </div>
            <button onClick={()=>setReservationOpen(true)} className="btn-red px-10 py-4">Book a Table</button>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 px-6 border-t" style={{ backgroundColor:"#885133", borderColor:"rgba(244,240,236,0.15)" }}>
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-10">
          {[{icon:<Phone size={16}/>,label:"Kharadi",value:"7720073535",href:"tel:7720073535"},{icon:<Phone size={16}/>,label:"Baner",value:"7744013535",href:"tel:7744013535"},{icon:<Mail size={16}/>,label:"Email",value:"yabasahr@gmail.com",href:"mailto:yabasahr@gmail.com"},{icon:<MapPin size={16}/>,label:"Magarpatta",value:"Coming Soon",href:null}].map(({icon,label,value,href})=>(
            <div key={label} className="flex items-center gap-3">
              <div style={{ color:"#f0e6d7" }}>{icon}</div>
              <div>
                <div className="font-sans text-[9px] tracking-widest uppercase mb-0.5" style={{ color:"rgba(244,240,236,0.45)" }}>{label}</div>
                {href ? <a href={href} className="font-sans text-sm transition-colors" style={{ color:"rgba(244,240,236,0.80)" }} onMouseEnter={e=>((e.currentTarget as HTMLElement).style.color="#f4f0ec")} onMouseLeave={e=>((e.currentTarget as HTMLElement).style.color="rgba(244,240,236,0.80)")}>{value}</a> : <span className="font-sans text-sm" style={{ color:"rgba(244,240,236,0.45)" }}>{value}</span>}
              </div>
            </div>
          ))}
        </div>
      </section>
      <ReservationModal isOpen={reservationOpen} onClose={()=>setReservationOpen(false)}/>
    </>
  );
}
