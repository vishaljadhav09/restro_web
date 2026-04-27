"use client";
import { useState } from "react";
import { X, Phone, Clock } from "lucide-react";
interface Props { isOpen:boolean; onClose:()=>void; }
export default function ReservationModal({ isOpen, onClose }:Props) {
  const [form,setForm] = useState({ name:"",phone:"",date:"",time:"",guests:"2",location:"Kharadi" });
  const [submitted,setSubmitted] = useState(false);
  if(!isOpen) return null;
  const handleSubmit = (e:React.FormEvent) => { e.preventDefault(); setSubmitted(true); setTimeout(()=>{ setSubmitted(false); onClose(); setForm({ name:"",phone:"",date:"",time:"",guests:"2",location:"Kharadi" }); },3000); };
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" style={{ backgroundColor:"rgba(30,16,8,0.60)", backdropFilter:"blur(8px)" }} onClick={onClose}>
      <div className="relative w-full max-w-lg overflow-hidden" style={{ backgroundColor:"#f4f0ec", border:"1px solid #e0d4c0", boxShadow:"0 30px 80px rgba(136,81,51,0.22)" }} onClick={e=>e.stopPropagation()}>
        {/* Red top line */}
        <div className="h-1 w-full" style={{ background:"linear-gradient(to right,#885133,#d62300,#885133)" }} />
        <div className="p-8 md:p-10">
          <button onClick={onClose} className="absolute top-5 right-5 transition-colors" style={{ color:"#a8673f" }} onMouseEnter={e=>(e.currentTarget.style.color="#d62300")} onMouseLeave={e=>(e.currentTarget.style.color="#a8673f")}><X size={18}/></button>
          <div className="text-center mb-8">
            <p className="section-badge mb-3">Welcome to Ya Basa</p>
            <h2 className="font-display text-3xl" style={{ color:"#1e1008" }}>Reserve Your Table</h2>
            <div className="thin-line mt-4"/>
          </div>
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="font-display text-2xl mb-2" style={{ color:"#d62300" }}>Reservation Confirmed!</h3>
              <p className="font-sans text-sm font-light" style={{ color:"#5c3420" }}>We will call you to confirm. See you soon!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-[10px] tracking-widest uppercase font-semibold mb-1.5" style={{ color:"#885133" }}>Name</label><input required type="text" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your name" className="form-input"/></div>
                <div><label className="block text-[10px] tracking-widest uppercase font-semibold mb-1.5" style={{ color:"#885133" }}>Phone</label><input required type="tel" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="Phone number" className="form-input"/></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-[10px] tracking-widest uppercase font-semibold mb-1.5" style={{ color:"#885133" }}>Date</label><input required type="date" value={form.date} onChange={e=>setForm({...form,date:e.target.value})} className="form-input"/></div>
                <div><label className="block text-[10px] tracking-widest uppercase font-semibold mb-1.5" style={{ color:"#885133" }}>Time</label><input required type="time" value={form.time} onChange={e=>setForm({...form,time:e.target.value})} className="form-input"/></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-[10px] tracking-widest uppercase font-semibold mb-1.5" style={{ color:"#885133" }}>Guests</label>
                  <select value={form.guests} onChange={e=>setForm({...form,guests:e.target.value})} className="form-input">
                    {[1,2,3,4,5,6,7,8,9,10].map(n=><option key={n} value={n}>{n} {n===1?"Guest":"Guests"}</option>)}
                    <option value="10+">10+ Guests</option>
                  </select>
                </div>
                <div><label className="block text-[10px] tracking-widest uppercase font-semibold mb-1.5" style={{ color:"#885133" }}>Location</label>
                  <select value={form.location} onChange={e=>setForm({...form,location:e.target.value})} className="form-input">
                    <option>Kharadi</option><option>Baner</option><option>Magarpatta</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="btn-red w-full py-3.5 mt-2">Confirm Reservation</button>
              <div className="flex items-center justify-center gap-6 pt-1">
                <span className="flex items-center gap-1.5 text-[10px]" style={{ color:"#a8673f" }}><Clock size={10}/> Mon–Sun Open</span>
                <span className="flex items-center gap-1.5 text-[10px]" style={{ color:"#a8673f" }}><Phone size={10}/> 7720073535</span>
              </div>
            </form>
          )}
        </div>
        <div className="h-1 w-full" style={{ background:"linear-gradient(to right,#885133,#d62300,#885133)" }} />
      </div>
    </div>
  );
}
