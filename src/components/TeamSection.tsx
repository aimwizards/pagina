import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Calendar, Clock, X, Star } from 'lucide-react';
import TeamMember from './TeamMember';
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

const solnaTeam = [
  {
    name: "Rosangela Lima",
    title: "Frisör skönhet hudterapeut",
    specialties: [
      "Klippning",
      "Slingor",
      "Färgning",
      "Keratin",
      "Hudterapeut",
      "Ansiktsbehandling",
      "Braziliansk vaxning",
      "Laser hårborttagning",
      "Hårvård",
      "Hårbehandling",
      "Kroppsvård",
      "Reducering av fett",
      "Reducering massage",
      "Celluiliter"
    ],
    image: "https://static.wixstatic.com/media/8f7788_5151a69b73984f2997c10d2746c44d86~mv2.jpg/v1/fill/w_403,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/eb3c684b-99d1-4490-9028-73719b3a6901_edi.jpg",
    location: "Solna",
    phone: "076-095 58 87",
    bookingUrl: "/team/rosangela-lima",
    slug: "rosangela-lima"
  },
  {
    name: "July",
    title: "Skönhetsterapeut",
    specialties: [
      "Ansiktsbehandling",
      "Hudvård",
      "Vaxning",
      "Ögonbryn",
      "Fransar"
    ],
    image: "https://i.ibb.co/NcYLY5x/photo-2025-08-23-07-53-47-2.jpg",
    location: "Solna",
    phone: "076-095 58 87",
    bookingUrl: "https://www.bokadirekt.se/places/frisor-solna-styling-by-brazil-klinink-58888",
    slug: "july"
  },
  {
    name: "Haydar",
    title: "Estetiska injektionsbehandlingar",
    specialties: [
      "Neurotoxin",
      "Fillers",
      "Polynukleotider (PN)",
      "Skinbooster / Mesoterapi",
      "PRP - med kroppens egna resurser"
    ],
    image: "https://drhaddebeauty.se/img777.jpg",
    location: "Solna",
    phone: "076-095 58 87",
    bookingUrl: "https://www.bokadirekt.se/places/dr-hadde-beauty-131864",
    slug: "haydar"
  }
];

const sodermalmTeam = [];

export default function TeamSection() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [showLocationPopup, setShowLocationPopup] = useState(false);

  const desktopTeam = [...solnaTeam, ...sodermalmTeam];

  return (
    <section className="py-24 bg-neutral-50" id="team-section">
      <div className="container">
        {/* Friskvård Banner */}
        <FriskvardBanner />

        {/* Salons Section */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-light text-center mb-4"
        >
          Våra Salonger
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center text-neutral-600 mb-12 max-w-2xl mx-auto"
        >
          Besök oss på någon av våra salonger och boka tid hos någon av våra skickliga specialister.
        </motion.p>

        {/* Salon Cards */}
        <div className="max-w-7xl mx-auto mb-24">
          {salons.map((salon) => (
            <motion.div
              key={salon.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white via-[#FDFBF8] to-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left Side - Video */}
                <div className="relative h-[400px] lg:h-[600px] overflow-hidden bg-neutral-900">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src="https://lh3.googleusercontent.com/ggs/AF1QipPAf3IP9-5gSepBP0TJD2fdlD-abWjdAHwL_DMF=m18" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10"></div>
                </div>

                {/* Right Side - Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  {/* Header */}
                  <div className="mb-8">
                    <h3 className="text-4xl font-semibold bg-gradient-to-r from-[#D4B78F] to-[#E6CCAF] bg-clip-text text-transparent mb-6 text-center">
                      {salon.name}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {salon.locations.map((loc) => (
                        <div key={loc.name} className="text-center">
                          <p className="text-neutral-800 font-medium text-xl mb-2">{loc.name}</p>
                          <p className="text-neutral-600">{loc.address}</p>
                          <p className="text-neutral-500">{loc.postal}</p>
                          {loc.name === "Södermalm" && (
                            <p className="text-red-600 font-semibold text-sm mt-2">
                              OBS: OBS: Just nu har vi braziliansk vaxning på Götgatan 81 i salong baresso, Ring för mer information för vi har begränsade tider, Boka online nedanför.
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Info Cards */}
                  <div className="space-y-4 mb-8">
                    {/* Opening Hours Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#D4B78F]/10 hover:border-[#D4B78F]/30 transition-all duration-300">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="bg-[#D4B78F]/10 p-2 rounded-lg">
                          <Clock className="w-5 h-5 text-[#D4B78F]" />
                        </div>
                        <h4 className="text-lg font-medium text-neutral-800">Öppettider</h4>
                      </div>
                      <div className="space-y-2 ml-11">
                        {salon.openingHours.map((time) => (
                          <div key={time.day} className="flex justify-between items-center text-sm">
                            <span className="text-neutral-600 font-medium">{time.day}</span>
                            <span className="text-neutral-800 font-semibold">{time.hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Contact Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#D4B78F]/10 hover:border-[#D4B78F]/30 transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <div className="bg-[#D4B78F]/10 p-2 rounded-lg">
                          <Phone className="w-5 h-5 text-[#D4B78F]" />
                        </div>
                        <div>
                          <p className="text-xs text-neutral-500 mb-1">Kontakta oss</p>
                          <a
                            href={`tel:${salon.phone.replace(/\s/g, '')}`}
                            className="text-lg font-semibold text-neutral-800 hover:text-[#D4B78F] transition-colors"
                          >
                            {salon.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => setShowLocationPopup(true)}
                    className="group relative flex items-center justify-center gap-3 w-full py-5 bg-gradient-to-r from-[#D4B78F] to-[#E6CCAF] text-white rounded-2xl
                      hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#E6CCAF] to-[#D4B78F] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Calendar className="w-6 h-6 relative z-10" />
                    <span className="text-xl font-medium relative z-10">Boka i Solna eller Södermalm</span>
                  </button>

                  {/* Trust Badge */}
                  <div className="mt-6 flex flex-col items-center justify-center gap-3">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#D4B78F] text-[#D4B78F]" />
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-neutral-600">
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full bg-[#D4B78F] border-2 border-white"></div>
                        <div className="w-8 h-8 rounded-full bg-[#E6CCAF] border-2 border-white"></div>
                        <div className="w-8 h-8 rounded-full bg-[#D4B78F] border-2 border-white"></div>
                      </div>
                      <span className="font-medium">Över 2000+ nöjda kunder</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Members Section */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-light text-center mb-4"
        >
          Vårt Team
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center text-neutral-600 mb-12 max-w-2xl mx-auto"
        >
          Möt våra erfarna specialister som är här för att ta hand om dig
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {desktopTeam.map((member) => (
            <TeamMember key={member.slug} {...member} />
          ))}
        </div>
      </div>

      {/* Location Selection Popup */}
      <AnimatePresence>
        {showLocationPopup && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowLocationPopup(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Popup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative">
                {/* Close Button */}
                <button
                  onClick={() => setShowLocationPopup(false)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-neutral-100 transition-colors"
                >
                  <X className="w-6 h-6 text-neutral-600" />
                </button>

                {/* Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#D4B78F] to-[#E6CCAF] rounded-full mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-light mb-2">Välj Salong</h3>
                  <p className="text-neutral-600">Vilken av våra salonger vill du boka hos?</p>
                </div>

                {/* Location Options */}
                <div className="space-y-4">
                  <a
                    href="https://www.bokadirekt.se/places/frisor-solna-styling-by-brazil-klinink-58888"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-6 bg-gradient-to-br from-white to-neutral-50 rounded-2xl border-2 border-[#D4B78F]/20 hover:border-[#D4B78F] hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D4B78F]/10 rounded-xl flex items-center justify-center group-hover:bg-[#D4B78F]/20 transition-colors">
                        <MapPin className="w-6 h-6 text-[#D4B78F]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-medium text-neutral-800 mb-1">Solna</h4>
                        <p className="text-sm text-neutral-600">Solnavägen 29 H</p>
                        <p className="text-xs text-neutral-500">171 45, Solna</p>
                      </div>
                      <Calendar className="w-5 h-5 text-[#D4B78F] group-hover:scale-110 transition-transform" />
                    </div>
                  </a>

                  <a
                    href="https://www.bokadirekt.se/places/sodermalm-frisor-och-brasiliansk-vaxning-stylingbybrazil-50453"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-6 bg-gradient-to-br from-white to-neutral-50 rounded-2xl border-2 border-[#D4B78F]/20 hover:border-[#D4B78F] hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D4B78F]/10 rounded-xl flex items-center justify-center group-hover:bg-[#D4B78F]/20 transition-colors">
                        <MapPin className="w-6 h-6 text-[#D4B78F]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-medium text-neutral-800 mb-1">Södermalm</h4>
                        <p className="text-sm text-neutral-600">Götgatan 81</p>
                        <p className="text-xs text-neutral-500">116 62, Stockholm</p>
                        <p className="text-xs text-red-600 font-semibold mt-2">
                          OBS: Från första januari är vi inte på Katarina Bangata 15. Vi återkommer snart med en ny adress i Södermalm där vi kommer erbjuda vaxning och frisör.
                        </p>
                      </div>
                      <Calendar className="w-5 h-5 text-[#D4B78F] group-hover:scale-110 transition-transform" />
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
