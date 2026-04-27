import Link from "next/link";
import { Mail, MapPin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#5c3420", color: "rgba(244,240,236,0.65)" }}>
      <div className="h-1 w-full" style={{ background: "linear-gradient(to right,#885133,#d62300,#885133)" }} />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-full border-2"
              style={{ borderColor: "rgba(244,240,236,0.4)", backgroundColor: "rgba(244,240,236,0.10)" }}
            >
              <span className="font-display text-base" style={{ color: "#f0e6d7" }}>YB</span>
            </div>
            <div>
              <div className="font-display text-lg tracking-widest" style={{ color: "#f4f0ec" }}>Ya Basa</div>
              <div className="font-sans text-[9px] uppercase tracking-[0.25em]" style={{ color: "rgba(244,240,236,0.45)" }}>
                Kitchen & Bar
              </div>
            </div>
          </div>

          <p className="mb-5 font-sans text-sm font-light leading-relaxed">
            Serving Pune since 2014 with authentic coastal seafood, bold Malvani flavors, and unforgettable dining experiences.
          </p>

          <div className="flex gap-3">
            {[{ href: "https://www.instagram.com/yabasa_pune", icon: <Instagram size={14} /> }, { href: "#", icon: <Facebook size={14} /> }].map(({ href, icon }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center border border-[rgba(244,240,236,0.25)] text-[rgba(244,240,236,0.50)] transition-all hover:border-[rgba(244,240,236,0.6)] hover:text-[#f4f0ec]"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-sans text-[10px] font-semibold uppercase tracking-[0.3em]" style={{ color: "#f0e6d7" }}>
            Quick Links
          </h3>
          <ul className="space-y-3">
            {[{ href: "/", label: "Home" }, { href: "/about", label: "About Us" }, { href: "/menu", label: "Our Menu" }, { href: "/contact", label: "Contact Us" }].map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="font-sans text-sm font-light text-[rgba(244,240,236,0.55)] transition-colors hover:text-[#f4f0ec]">
                  &rarr; {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-sans text-[10px] font-semibold uppercase tracking-[0.3em]" style={{ color: "#f0e6d7" }}>
            Locations
          </h3>
          <ul className="space-y-4">
            {[{ name: "Kharadi", phone: "7720073535" }, { name: "Baner", phone: "7744013535" }, { name: "Magarpatta", phone: null }].map(({ name, phone }) => (
              <li key={name} className="flex items-start gap-2">
                <MapPin size={13} className="mt-0.5 shrink-0" style={{ color: "#d62300" }} />
                <div>
                  <div className="font-sans text-sm font-medium" style={{ color: "rgba(244,240,236,0.85)" }}>{name}</div>
                  <div className="mb-0.5 font-sans text-xs font-light" style={{ color: "rgba(244,240,236,0.35)" }}>Pune, Maharashtra</div>
                  {phone ? (
                    <a href={`tel:${phone}`} className="font-sans text-xs text-[rgba(240,230,215,0.70)] transition-colors hover:text-[#f0e6d7]">
                      {phone}
                    </a>
                  ) : (
                    <span className="font-sans text-xs" style={{ color: "rgba(244,240,236,0.35)" }}>Coming Soon</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-sans text-[10px] font-semibold uppercase tracking-[0.3em]" style={{ color: "#f0e6d7" }}>
            Hours & Contact
          </h3>
          <div className="space-y-4 font-sans text-sm font-light">
            <div>
              <div className="mb-0.5 font-semibold" style={{ color: "rgba(244,240,236,0.85)" }}>Open Hours</div>
              <div>Monday - Sunday</div>
              <div>Lunch & Dinner</div>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={12} style={{ color: "#d62300" }} />
              <a href="mailto:yabasahr@gmail.com" className="text-[rgba(244,240,236,0.65)] transition-colors hover:text-[#f4f0ec]">
                yabasahr@gmail.com
              </a>
            </div>
            <div>
              <div className="mb-0.5 font-semibold" style={{ color: "rgba(244,240,236,0.85)" }}>Price Range</div>
              <div className="font-display text-xl" style={{ color: "#f0e6d7" }}>Rs. 2,400 for two</div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t py-5 text-center font-sans text-[11px] tracking-widest" style={{ borderColor: "rgba(244,240,236,0.10)", color: "rgba(244,240,236,0.28)" }}>
        &copy; {new Date().getFullYear()} Ya Basa Restaurant &middot; All rights reserved
      </div>
    </footer>
  );
}
