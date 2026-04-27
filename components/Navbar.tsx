"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import ReservationModal from "./ReservationModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [reservationOpen, setReservationOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 55);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { href: "/",        label: "Home" },
    { href: "/about",   label: "About Us" },
    { href: "/menu",    label: "Menu" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{ backgroundColor: scrolled ? "rgba(244,240,236,0.97)":"rgba(244,240,236,0.93)", backdropFilter:"blur(10px)", borderBottom:"1px solid #e0d4c0", boxShadow: scrolled ? "0 2px 24px rgba(136,81,51,0.10)":"none" }}>

        {/* Brown top strip */}
        <div className="hidden lg:flex items-center justify-between px-10 py-1.5"
          style={{ backgroundColor:"#885133" }}>
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase" style={{ color:"rgba(244,240,236,0.70)" }}>
            Serving Pune Since 2014 &nbsp;·&nbsp; Three Locations
          </span>
          <div className="flex gap-8">
            {[["7720073535","Kharadi"],["7744013535","Baner"]].map(([num,loc])=>(
              <a key={num} href={"tel:"+num} className="flex items-center gap-1.5 font-sans text-[10px] tracking-widest transition-colors" style={{ color:"rgba(244,240,236,0.70)" }} onMouseEnter={e=>(e.currentTarget.style.color="#f4f0ec")} onMouseLeave={e=>(e.currentTarget.style.color="rgba(244,240,236,0.70)")}>
                <Phone size={9}/> {loc}: {num}
              </a>
            ))}
          </div>
        </div>

        {/* Main bar */}
        <div className="flex items-center justify-between px-6 md:px-10 py-3">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full border-2 flex items-center justify-center transition-all duration-300" style={{ borderColor:"#885133", backgroundColor:"#f0e6d7" }}>
              <span className="font-display text-base tracking-wider" style={{ color:"#885133" }}>YB</span>
            </div>
            <div>
              <div className="font-display text-lg tracking-widest leading-tight" style={{ color:"#1e1008" }}>Ya Basa</div>
              <div className="font-sans text-[9px] tracking-[0.28em] uppercase font-light" style={{ color:"#a8673f" }}>Kitchen & Bar</div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map(({ href, label })=>(
              <Link key={href} href={href} className={"nav-link font-sans text-[11px] tracking-[0.18em] uppercase font-semibold transition-colors duration-300"+(pathname===href?" active":"")} style={{ color: pathname===href ? "#d62300":"#5c3420" }} onMouseEnter={e=>{ if(pathname!==href)(e.currentTarget as HTMLElement).style.color="#885133"; }} onMouseLeave={e=>{ if(pathname!==href)(e.currentTarget as HTMLElement).style.color="#5c3420"; }}>
                {label}
              </Link>
            ))}
            <button onClick={()=>setReservationOpen(true)} className="btn-red ml-2 px-7 py-2.5">Reservation</button>
          </div>

          <button onClick={()=>setMobileOpen(!mobileOpen)} className="md:hidden p-1" style={{ color:"#1e1008" }}>
            {mobileOpen ? <X size={22}/> : <Menu size={22}/>}
          </button>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden overflow-hidden transition-all duration-400 border-t" style={{ maxHeight: mobileOpen?"420px":"0", borderColor:"#e0d4c0", backgroundColor:"#f4f0ec" }}>
          <div className="px-6 py-6 flex flex-col gap-5">
            {links.map(({ href, label })=>(
              <Link key={href} href={href} onClick={()=>setMobileOpen(false)} className="font-sans text-[11px] tracking-[0.2em] uppercase font-semibold" style={{ color: pathname===href ? "#d62300":"#5c3420" }}>{label}</Link>
            ))}
            <button onClick={()=>{ setReservationOpen(true); setMobileOpen(false); }} className="btn-red py-3 mt-1">Make Reservation</button>
            <div className="pt-3 border-t flex flex-col gap-2" style={{ borderColor:"#e0d4c0" }}>
              {[["7720073535","Kharadi"],["7744013535","Baner"]].map(([num,loc])=>(
                <a key={num} href={"tel:"+num} className="flex items-center gap-2 font-sans text-[11px]" style={{ color:"#a8673f" }}><Phone size={11}/> {loc}: {num}</a>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <ReservationModal isOpen={reservationOpen} onClose={()=>setReservationOpen(false)} />
    </>
  );
}
