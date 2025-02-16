import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white/80">
      {/* Main Footer Content */}
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Solna Location */}
          <div className="space-y-4">
            <h3 className="text-xl font-light text-white mb-6">Solna</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-rose-400 mt-1" />
                <div>
                  <p>Solnavägen 29 H</p>
                  <p>171 45, Solna</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-rose-400" />
                <a href="tel:0760955887" className="hover:text-rose-400 transition-colors">
                  076-095 58 87
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-rose-400" />
                <a href="mailto:info@stylingbybrazil.se" className="hover:text-rose-400 transition-colors">
                  info@stylingbybrazil.se
                </a>
              </div>
            </div>
          </div>

          {/* Södermalm Location */}
          <div className="space-y-4">
            <h3 className="text-xl font-light text-white mb-6">Södermalm</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-rose-400 mt-1" />
                <div>
                  <p>Katarina Bangata 15</p>
                  <p>116 39, Södermalm</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-rose-400" />
                <a href="tel:0734411255" className="hover:text-rose-400 transition-colors">
                  073-441 12 55
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-rose-400" />
                <a href="mailto:info@stylingbybrazil.se" className="hover:text-rose-400 transition-colors">
                  info@stylingbybrazil.se
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-light text-white mb-6">Snabblänkar</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/priser" className="hover:text-rose-400 transition-colors">
                  Priser
                </Link>
              </li>
              <li>
                <Link to="/boka" className="hover:text-rose-400 transition-colors">
                  Boka Tid
                </Link>
              </li>
              <li>
                <Link to="/behandlingar" className="hover:text-rose-400 transition-colors">
                  Behandlingar
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="hover:text-rose-400 transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Hours */}
          <div>
            <h3 className="text-xl font-light text-white mb-6">Följ Oss</h3>
            <div className="flex gap-4 mb-8">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-neutral-800 p-3 rounded-full hover:bg-rose-500 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-neutral-800 p-3 rounded-full hover:bg-rose-500 transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>

            <div className="space-y-3">
              <h4 className="text-white font-light flex items-center gap-2">
                <Clock className="w-5 h-5 text-rose-400" />
                Öppettider
              </h4>
              <div className="space-y-1 text-sm">
                <p>Mån-Fre: 10:00 - 19:00</p>
                <p>Lör: 10:00 - 17:00</p>
                <p>Sön: Stängt</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-400">
              © {new Date().getFullYear()} StylingByBrazil. Alla rättigheter förbehållna.
            </p>
            <div className="flex gap-6 text-sm text-neutral-400">
              <a href="/privacy" className="hover:text-rose-400 transition-colors">
                Integritetspolicy
              </a>
              <a href="/terms" className="hover:text-rose-400 transition-colors">
                Villkor
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}