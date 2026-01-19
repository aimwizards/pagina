import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Phone, Calendar, Clock, X, Star, 
  Sparkles, ShieldCheck, Zap, Heart, 
  ChevronLeft, ChevronRight, CheckCircle2 
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
    name: "Haydar",
    title: "Injektionsspecialist",
    description: "Certifierad behandlare specialiserad på estetiska injektioner. Haydar fokuserar på naturliga resultat och medicinsk säkerhet.",
    specialties: [
      "Neurotoxin & Fillers",
      "Polynukleotider (PN)",
      "Skinboosters",
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
    description: "Expert på ansiktsbehandlingar och bryn. July brinner för att ge varje kund en personlig och avkopplande upplevelse.",
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
    <section className="py-24 bg-neutral-50 overflow-hidden" id="team-section">
      <div className="container">
        {/* Friskvård Banner */}
        <FriskvardBanner />

        {/* Salons Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-light mb-6"
          >
            Våra Salonger
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-600 max-w-2xl mx-auto"
          >
            Välkommen till en värld av skönhet. Du hittar oss på två centrala adresser i Stockholm.
          </motion.p>
        </div>

        {/* Salon Card */}
        <div className="max-w-7xl mx-auto mb-32">
          {salons.map((salon) => (
            <motion.div
              key={salon.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-neutral-100"
            >
              <div className="grid lg:grid-cols-2">
                <div className="relative h-[350px] lg:h-auto overflow-hidden bg-neutral-900">
                  <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-80">
                    <source src="https://lh3.googleusercontent.com/ggs/AF1QipPAf3IP9-5gSepBP0TJD2fdlD-abWjdAHwL_DMF=m18" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="p-8 lg:p-16 flex flex-col justify-center bg-[#FDFBF8]">
                  <h3 className="text-4xl font-semibold mb-8 text-center lg:text-left bg-gradient-to-r from-[#B08D57] to-[#D4B78F] bg-clip-text text-transparent">
                    {salon.name}
                  </h3>
                  
                  <div className="grid sm:grid-cols-2 gap-8 mb-10">
                    {salon.locations.map((loc) => (
                      <div key={loc.name} className="space-y-2">
                        <div className="flex items-center gap-2 text-[#B08D57] font-bold uppercase tracking-wider text-xs">
                          <MapPin className="w-4 h-4" /> {loc.name}
                        </div>
                        <p className="text-neutral-800 font-medium">{loc.address}</p>
                        <p className="text-neutral-500 text-sm">{loc.postal}</p>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setShowLocationPopup(true)}
                    className="w-full py-5 bg-neutral-900 text-white rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-[#B08D57] transition-all duration-300 shadow-xl flex items-center justify-center gap-3"
                  >
                    <Calendar className="w-5 h-5" />
                    Boka Tid Online
                  </button>

                  <div className="mt-10 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#B08D57]/10 rounded-full flex items-center justify-center">
                        <Phone className="w-5 h-5 text-[#B08D57]" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-[#B08D57] uppercase">Ring oss</p>
                        <a href={`tel:${salon.phone.replace(/\s/g, '')}`} className="text-lg font-bold text-neutral-800">{salon.phone}</a>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-neutral-200" />)}
                      </div>
                      <span className="text-sm font-medium text-neutral-600">2000+ nöjda kunder</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* TEAM SLIDESHOW SECTION */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-light mb-4">Vårt Team</h2>
            <p className="text-neutral-500">Möt våra specialister som gör din skönhetsresa unik</p>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="bg-neutral-900 rounded-[3rem] overflow-hidden shadow-2xl border border-white/5"
              >
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Image Part */}
                  <div className="lg:col-span-2 relative h-[450px] lg:h-[650px]">
                    <img 
                      src={teamMembers[currentIndex].image} 
                      alt={teamMembers[currentIndex].name}
                      className="absolute inset-0 w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent lg:bg-gradient-to-r lg:via-neutral-900/20" />
                    
                    {/* Floating Info on Image (Mobile only) */}
                    <div className="absolute bottom-8 left-8 lg:hidden">
                       <h3 className="text-white text-3xl font-light">{teamMembers[currentIndex].name}</h3>
                       <p className="text-[#D4B78F] font-medium tracking-widest uppercase text-xs mt-1">{teamMembers[currentIndex].title}</p>
                    </div>
                  </div>

                  {/* Content Part */}
                  <div className="lg:col-span-3 p-8 lg:p-20 flex flex-col justify-center relative">
                    <div className="absolute top-10 right-10 opacity-5 hidden lg:block">
                      <Sparkles className="w-32 h-32 text-white" />
                    </div>

                    <div className="hidden lg:block mb-6">
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4B78F]/10 border border-[#D4B78F]/20 mb-4">
                        <Sparkles className="w-4 h-4 text-[#D4B78F]" />
                        <span className="text-[#D4B78F] text-[10px] font-bold uppercase tracking-widest">Topprankad specialist</span>
                      </div>
                      <h3 className="text-5xl font-light text-white mb-2 italic">
                        {teamMembers[currentIndex].name}
                      </h3>
                      <p className="text-[#D4B78F] text-xl font-medium tracking-wide">
                        {teamMembers[currentIndex].title}
                      </p>
                    </div>

                    <p className="text-neutral-400 text-lg leading-relaxed mb-10 lg:max-w-lg">
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

                    <div className="flex flex-col sm:flex-row gap-4">
                      <a 
                        href={teamMembers[currentIndex].bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 lg:flex-none group inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#D4B78F] hover:bg-white text-neutral-900 rounded-2xl transition-all duration-300 font-bold uppercase tracking-widest text-xs"
                      >
                        Boka tid hos {teamMembers[currentIndex].name.split(' ')[0]}
                        <Calendar className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center lg:justify-end items-center gap-4 mt-8">
              <button 
                onClick={prevSlide}
                className="w-14 h-14 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-all duration-300 group"
              >
                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
              </button>
              
              <div className="flex gap-2 mx-4">
                {teamMembers.map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-1.5 transition-all duration-500 rounded-full ${currentIndex === i ? 'w-8 bg-[#D4B78F]' : 'w-2 bg-neutral-300'}`}
                  />
                ))}
              </div>

              <button 
                onClick={nextSlide}
                className="w-14 h-14 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-all duration-300 group"
              >
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Location Selection Popup */}
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
              className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            >
              <div className="bg-white rounded-[2.5rem] shadow-2xl max-w-md w-full p-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#B08D57] via-[#D4B78F] to-[#B08D57]" />
                
                <button
                  onClick={() => setShowLocationPopup(false)}
                  className="absolute top-6 right-6 p-2 rounded-full hover:bg-neutral-100 transition-colors"
                >
                  <X className="w-6 h-6 text-neutral-400" />
                </button>

                <div className="text-center mb-10">
                  <div className="w-20 h-20 bg-[#FDFBF8] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-inner border border-neutral-50">
                    <MapPin className="w-10 h-10 text-[#B08D57]" />
                  </div>
                  <h3 className="text-3xl font-light mb-2">Välj Salong</h3>
                  <p className="text-neutral-500">Var vill du boka din behandling?</p>
                </div>

                <div className="space-y-4">
                  <a
                    href="https://www.bokadirekt.se/places/frisor-solna-styling-by-brazil-klinink-58888"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-6 bg-[#FDFBF8] hover:bg-white rounded-3xl border-2 border-transparent hover:border-[#D4B78F] hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-[#B08D57] transition-colors">
                        <MapPin className="w-6 h-6 text-[#B08D57] group-hover:text-white" />
                      </div>
                      <div className="flex-1 text-left">
                        <h4 className="text-lg font-bold text-neutral-800">Solna</h4>
                        <p className="text-sm text-neutral-500 italic">Solnavägen 29 H</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-neutral-300 group-hover:text-[#B08D57]" />
                    </div>
                  </a>

                  <a
                    href="https://www.bokadirekt.se/places/sodermalm-frisor-och-brasiliansk-vaxning-stylingbybrazil-50453"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-6 bg-[#FDFBF8] hover:bg-white rounded-3xl border-2 border-transparent hover:border-[#D4B78F] hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-[#B08D57] transition-colors">
                        <MapPin className="w-6 h-6 text-[#B08D57] group-hover:text-white" />
                      </div>
                      <div className="flex-1 text-left">
                        <h4 className="text-lg font-bold text-neutral-800">Södermalm</h4>
                        <p className="text-sm text-neutral-500 italic">Götgatan 81</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-neutral-300 group-hover:text-[#B08D57]" />
                    </div>
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
