import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Phone, Calendar, Clock, X, Star, 
  Sparkles, ShieldCheck, Zap, Heart, 
  ChevronLeft, ChevronRight, CheckCircle2, Percent 
} from 'lucide-react';
import FriskvardBanner from './FriskvardBanner';

const salons = [
  {
    name: "Solna & Södermalm",
    locations: [
      {
        name: "Solna",
        address: "Solnavägen 29 H",
        postal: "171 45, Solna"
      },
      {
        name: "Södermalm",
        address: "Götgatan 81",
        postal: "116 62, Stockholm"
      }
    ],
    phone: "076-095 58 87",
    bookingUrl: "https://www.bokadirekt.se/places/frisor-solna-styling-by-brazil-klinink-58888",
    openingHours: [
      { day: "Måndag-Fredag", hours: "10:00 - 19:00" },
      { day: "Lördag", hours: "10:00 - 17:00" },
      { day: "Söndag", hours: "Stängt" }
    ]
  }
];

const teamMembers = [
  {
    name: "Rosangela Lima",
    title: "Frisör & Hudterapeut",
    description: "Grundare av Styling by Brazil med över 20 års erfarenhet. Rosangela kombinerar brasiliansk expertis med modern svensk skönhetsvård.",
    specialties: [
      "Braziliansk vaxning",
      "Avancerad hårvård",
      "Laser hårborttagning",
      "Kroppsskulptering"
    ],
    image: "https://static.wixstatic.com/media/8f7788_5151a69b73984f2997c10d2746c44d86~mv2.jpg/v1/fill/w_403,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/eb3c684b-99d1-4490-9028-73719b3a6901_edi.jpg",
    location: "Solna",
    bookingUrl: "https://www.bokadirekt.se/places/frisor-solna-styling-by-brazil-klinink-58888",
    slug: "rosangela-lima"
  },
  {
    name: "Doctor Haydar",
    title: "Injektionsspecialist",
    description: "Certifierad behandlare specialiserad på estetiska injektioner. Haydar fokuserar på naturliga resultat och medicinsk säkerhet genom de senaste teknikerna inom skönhetsvård.",
    specialties: [
      "Botox / Neurotoxin",
      "Fillers & Skinboosters",
      "Polynukleotider (PN)",
      "PRP-behandlingar"
    ],
    image: "https://drhaddebeauty.se/img777.jpg",
    location: "Solna",
    bookingUrl: "https://www.bokadirekt.se/places/dr-hadde-beauty-131864",
    slug: "haydar"
  },
  {
    name: "July",
    title: "Skönhetsterapeut",
    description: "Expert på ansiktsbehandlingar och bryn. July brinner för att ge varje kund en personlig och avkopplande upplevelse med fokus på lyster och hälsa.",
    specialties: [
      "Djupgående ansiktsbehandling",
      "Lash & Brow Lift",
      "Professionell vaxning",
      "Hudanalys"
    ],
    image: "https://i.ibb.co/NcYLY5x/photo-2025-08-23-07-53-47-2.jpg",
    location: "Solna",
    bookingUrl: "https://www.bokadirekt.se/places/frisor-solna-styling-by-brazil-klinink-58888",
    slug: "july"
  }
];

export default function TeamSection() {
  const [showLocationPopup, setShowLocationPopup] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 bg-neutral-50" id="team-section">
      <div className="container">
        <FriskvardBanner />

        {/* --- SALONGSSEKTION MED VIDEO --- */}
        <div className="max-w-7xl mx-auto mb-32">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-light mb-6">Våra Salonger</h2>
          </div>
          
          {salons.map((salon) => (
            <motion.div
              key={salon.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-neutral-100"
            >
              <div className="grid lg:grid-cols-2">
                <div className="relative h-[400px] lg:h-auto bg-neutral-900">
                  <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-80">
                    <source src="https://lh3.googleusercontent.com/ggs/AF1QipPAf3IP9-5gSepBP0TJD2fdlD-abWjdAHwL_DMF=m18" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="p-8 lg:p-16 flex flex-col justify-center bg-[#FDFBF8]">
                  <h3 className="text-4xl font-semibold mb-8 bg-gradient-to-r from-[#B08D57] to-[#D4B78F] bg-clip-text text-transparent">
                    {salon.name}
                  </h3>
                  
                  <div className="grid sm:grid-cols-2 gap-8 mb-10">
                    {salon.locations.map((loc) => (
                      <div key={loc.name} className="space-y-1">
                        <p className="text-[#B08D57] font-bold text-xs uppercase tracking-widest">{loc.name}</p>
                        <p className="text-neutral-800 font-medium">{loc.address}</p>
                        <p className="text-neutral-500 text-sm">{loc.postal}</p>
                        {loc.name === "Södermalm" && (
                          <p className="text-red-600 text-[10px] font-bold leading-tight mt-2 italic">
                            OBS: Just nu vaxning på Götgatan 81 (Salong Baresso).
                          </p>
                        )}
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setShowLocationPopup(true)}
                    className="w-full py-5 bg-neutral-900 text-white rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-[#B08D57] transition-all duration-300 shadow-xl flex items-center justify-center gap-3"
                  >
                    <Calendar className="w-5 h-5" />
                    Boka Tid Online
                  </button>

                  <div className="mt-10 pt-8 border-t border-neutral-200 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-[#B08D57]" />
                      <a href={`tel:${salon.phone.replace(/\s/g, '')}`} className="font-bold text-neutral-800">{salon.phone}</a>
                    </div>
                    <div className="flex gap-1">
                       {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#D4B78F] text-[#D4B78F]" />)}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- HAYDAR BOTOX HIGHLIGHT CARD --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto mb-32 relative"
        >
          <div className="bg-neutral-900 rounded-[3rem] overflow-hidden shadow-2xl border border-white/10">
            <div className="grid lg:grid-cols-5">
              <div className="lg:col-span-2 relative h-[450px] lg:h-auto">
                <img 
                  src="https://drhaddebeauty.se/img777.jpg" 
                  alt="Haydar Botox" 
                  className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                
                {/* BOTOX RABATT BADGE */}
                <motion.div 
                  initial={{ scale: 0, rotate: -20 }}
                  whileInView={{ scale: 1, rotate: -12 }}
                  viewport={{ once: true }}
                  className="absolute top-10 left-10 z-20 bg-gradient-to-br from-[#D4B78F] to-[#B08D57] text-neutral-900 p-5 rounded-3xl shadow-2xl border-4 border-white/20 flex flex-col items-center justify-center"
                >
                  <span className="text-[10px] font-black uppercase tracking-widest leading-none mb-1">Erbjudande</span>
                  <span className="text-4xl font-black leading-none">10%</span>
                  <span className="text-xs font-bold uppercase mt-1">på Botox</span>
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent lg:bg-gradient-to-r" />
              </div>

              <div className="lg:col-span-3 p-8 lg:p-16 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4B78F]/10 border border-[#D4B78F]/20 mb-6 w-fit">
                  <Sparkles className="w-4 h-4 text-[#D4B78F]" />
                  <span className="text-[#D4B78F] text-xs font-bold uppercase tracking-widest">Introduktionspris</span>
                </div>
                
                <h3 className="text-3xl lg:text-5xl font-light text-white mb-6">
                  Expertis inom <span className="text-[#D4B78F] italic">Injektioner</span>
                </h3>
                
                <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                  Doctor Haydar erbjuder nu marknadsledande injektionsbehandlingar med fokus på säkerhet och ett naturligt resultat. Passa på att boka Botox till ett förmånligt pris.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {[
                    { title: "Neurotoxin (Botox)", icon: <ShieldCheck className="w-5 h-5" /> },
                    { title: "Fillers", icon: <Zap className="w-5 h-5" /> },
                    { title: "Skinboosters", icon: <Sparkles className="w-5 h-5" /> },
                    { title: "PRP / Mesoterapi", icon: <Heart className="w-5 h-5" /> }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-neutral-200">
                      <div className="text-[#D4B78F]">{item.icon}</div>
                      <span className="text-sm font-medium tracking-wide">{item.title}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href="https://www.bokadirekt.se/places/dr-hadde-beauty-131864"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#D4B78F] hover:bg-white text-neutral-900 rounded-2xl transition-all duration-300 font-bold uppercase tracking-widest text-xs"
                >
                  Boka med 10% rabatt
                  <Calendar className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- TEAM SLIDESHOW (DEN GAMLA DESIGNEN) --- */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light mb-4">Vårt Team</h2>
            <p className="text-neutral-500">Möt våra specialister på Styling by Brazil</p>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="bg-neutral-900 rounded-[3rem] overflow-hidden shadow-2xl border border-white/5"
              >
                <div className="grid lg:grid-cols-5">
                  <div className="lg:col-span-2 relative h-[450px] lg:h-[650px]">
                    <img 
                      src={teamMembers[currentIndex].image} 
                      alt={teamMembers[currentIndex].name}
                      className="absolute inset-0 w-full h-full object-cover grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 lg:bg-gradient-to-r via-transparent" />
                  </div>

                  <div className="lg:col-span-3 p-8 lg:p-20 flex flex-col justify-center">
                    <div className="mb-6">
                      <h3 className="text-5xl font-light text-white mb-2 italic">{teamMembers[currentIndex].name}</h3>
                      <p className="text-[#D4B78F] text-xl font-medium uppercase tracking-widest">{teamMembers[currentIndex].title}</p>
                    </div>

                    <p className="text-neutral-400 text-lg leading-relaxed mb-10">
                      {teamMembers[currentIndex].description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 mb-12">
                      {teamMembers[currentIndex].specialties.map((spec, i) => (
                        <div key={i} className="flex items-center gap-3 text-neutral-200 bg-white/5 p-4 rounded-2xl border border-white/5">
                          <CheckCircle2 className="w-5 h-5 text-[#D4B78F]" />
                          <span className="text-sm font-medium">{spec}</span>
                        </div>
                      ))}
                    </div>

                    <a 
                      href={teamMembers[currentIndex].bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#D4B78F] hover:bg-white text-neutral-900 rounded-2xl transition-all duration-300 font-bold uppercase tracking-widest text-xs"
                    >
                      Boka Tid
                      <Calendar className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Navigation */}
            <div className="flex justify-center lg:justify-end items-center gap-4 mt-12">
              <button onClick={prevSlide} className="w-14 h-14 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-all">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex gap-2">
                {teamMembers.map((_, i) => (
                  <button key={i} onClick={() => setCurrentIndex(i)} className={`h-1.5 rounded-full transition-all ${currentIndex === i ? 'w-8 bg-[#D4B78F]' : 'w-2 bg-neutral-300'}`} />
                ))}
              </div>
              <button onClick={nextSlide} className="w-14 h-14 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-all">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* POPUP FÖR BOKNING */}
      <AnimatePresence>
        {showLocationPopup && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowLocationPopup(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
            >
              <div className="bg-white rounded-[2.5rem] shadow-2xl max-w-md w-full p-10 relative pointer-events-auto">
                <button onClick={() => setShowLocationPopup(false)} className="absolute top-6 right-6 p-2">
                  <X className="w-6 h-6 text-neutral-400" />
                </button>
                <div className="text-center mb-8">
                  <MapPin className="w-10 h-10 text-[#B08D57] mx-auto mb-4" />
                  <h3 className="text-3xl font-light">Välj Salong</h3>
                </div>
                <div className="space-y-4">
                  <a href="https://www.bokadirekt.se/places/frisor-solna-styling-by-brazil-klinink-58888" target="_blank" className="block p-6 bg-[#FDFBF8] rounded-3xl hover:border-[#D4B78F] border-2 border-transparent transition-all">
                    <p className="font-bold text-lg">Solna</p>
                    <p className="text-sm text-neutral-500">Solnavägen 29 H</p>
                  </a>
                  <a href="https://www.bokadirekt.se/places/sodermalm-frisor-och-brasiliansk-vaxning-stylingbybrazil-50453" target="_blank" className="block p-6 bg-[#FDFBF8] rounded-3xl hover:border-[#D4B78F] border-2 border-transparent transition-all">
                    <p className="font-bold text-lg">Södermalm</p>
                    <p className="text-sm text-neutral-500">Götgatan 81</p>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
