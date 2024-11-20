import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';
import TeamMember from './TeamMember';

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
    location: "Solna & Södermalm",
    phone: "073-441 12 55",
    bookingUrl: "https://www.bokadirekt.se/places/frisor-stockholm-sodermalm-styling-by-brazil-vaxning-50453",
    slug: "rosangela-lima"
  },
  {
    name: "Tatiana H.",
    title: "Certifierad Hudterapeut",
    specialties: [
      "Ansiktsbehandling",
      "Laserbehandling",
      "Massage",
      "Hudvård",
      "Kroppsbehandling"
    ],
    image: "https://static.wixstatic.com/media/8f7788_69aebb91fd98466a842e6e02e2c6d9c9~mv2.jpg/v1/fill/w_403,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/thumbnail_f8f820d1-11fb-42fe-9ffd-ae2737.jpg",
    location: "Solna",
    phone: "073-441 12 55",
    bookingUrl: "https://www.bokadirekt.se/places/frisor-stockholm-sodermalm-styling-by-brazil-vaxning-50453",
    slug: "tatiana-h"
  },
  {
    name: "Justina Polivoda",
    title: "Cidesco-diplomerad hudterapeut",
    specialties: [
      "Ansiktsbehandling",
      "Ögonbryn",
      "Browlift",
      "Lashlift"
    ],
    image: "https://static.wixstatic.com/media/8f7788_cf871a14f08d416cb3218474e2377690~mv2.jpg/v1/fill/w_403,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/download.jpg",
    location: "Solna",
    phone: "072-913 70 04",
    bookingUrl: "https://www.bokadirekt.se/places/justina-polivoda-55860",
    slug: "justina-polivoda"
  },
  {
    name: "Noir T.",
    title: "Frisör",
    specialties: [
      "Klippning herr",
      "Klippning dam",
      "Klippning barn",
      "Styling fön",
      "Från afro till skandinaviskt hår"
    ],
    image: "https://static.wixstatic.com/media/8f7788_a6852ed605b44de0afb04181c3fc0306~mv2.jpg/v1/fill/w_600,h_931,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/382D7CFA-A67F-4C3C-AEFE-FC3F26AC132E.jpg",
    location: "Solna",
    phone: "070-465 65 13",
    slug: "noir-t"
  }
];

const sodermalmTeam = [
  {
    name: "Juliana",
    title: "Vaxningsspecialist",
    specialties: [
      "Vaxning",
      "Braziliansk vaxning",
      "Kroppsvaxning"
    ],
    image: "https://static.wixstatic.com/media/8f7788_787c9f7df92e4a07b6539ce497450b97~mv2.jpg/v1/fill/w_600,h_809,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/AD8CC2E9-AB36-4E97-A69F-91B2004E8D50.jpg",
    location: "Södermalm",
    phone: "073-441 12 55",
    bookingUrl: "https://www.bokadirekt.se/places/frisor-stockholm-sodermalm-styling-by-brazil-vaxning-50453",
    slug: "juliana"
  },
  {
    name: "Alyna",
    title: "Nagel- och vaxningsspecialist",
    specialties: [
      "Vaxning",
      "Nagelvård",
      "Pedikyr",
      "Manikyr"
    ],
    image: "https://static.wixstatic.com/media/8f7788_c4f94b0b253a4850af69e94ad723d34b~mv2.jpg/v1/fill/w_357,h_600,al_c,q_80,enc_auto/8f7788_c4f94b0b253a4850af69e94ad723d34b~mv2.jpg",
    location: "Södermalm",
    phone: "073-441 12 55",
    bookingUrl: "https://www.bokadirekt.se/places/frisor-stockholm-sodermalm-styling-by-brazil-vaxning-50453",
    slug: "alyna"
  }
];

export default function TeamSection() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  // For mobile view, we'll show Rosangela first in Södermalm
  const getMobileTeam = (location: string) => {
    if (location === 'solna') {
      return solnaTeam;
    } else if (location === 'sodermalm') {
      return [solnaTeam[0], ...sodermalmTeam]; // Rosangela first, then other Södermalm team members
    }
    return [];
  };

  // For desktop view, we'll show all team members
  const desktopTeam = [...solnaTeam, ...sodermalmTeam];

  return (
    <section className="py-24 bg-neutral-50" id="team-section">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-light text-center mb-6"
        >
          Våra Salonger
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center text-neutral-600 mb-16 max-w-2xl mx-auto"
        >
          Vi har två salonger i Stockholm - en i Solna och en på Södermalm. Välj din närmaste salong och boka tid hos någon av våra skickliga specialister.
        </motion.p>

        {/* Mobile Location Selector */}
        <div className="md:hidden mb-8">
          <div className="flex flex-col gap-4">
            <button
              onClick={() => setSelectedLocation(selectedLocation === 'solna' ? null : 'solna')}
              className={`p-6 rounded-xl text-left transition-all duration-300 relative overflow-hidden shadow-lg
                bg-gradient-to-r from-[#D4B78F] to-[#E6CCAF] text-white
                ${selectedLocation === 'solna' && 'ring-2 ring-[#D4B78F]/20'}`}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-5 h-5" />
                  <h3 className="text-lg font-light">Solna</h3>
                </div>
                <div className="flex items-center gap-2 text-sm opacity-90">
                  <Phone className="w-4 h-4" />
                  076-095 58 87
                </div>
              </div>
            </button>

            <button
              onClick={() => setSelectedLocation(selectedLocation === 'sodermalm' ? null : 'sodermalm')}
              className={`p-6 rounded-xl text-left transition-all duration-300 relative overflow-hidden shadow-lg
                bg-gradient-to-r from-[#D4B78F] to-[#E6CCAF] text-white
                ${selectedLocation === 'sodermalm' && 'ring-2 ring-[#D4B78F]/20'}`}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-5 h-5" />
                  <h3 className="text-lg font-light">Södermalm</h3>
                </div>
                <div className="flex items-center gap-2 text-sm opacity-90">
                  <Phone className="w-4 h-4" />
                  073-441 12 55
                </div>
              </div>
            </button>
          </div>

          {/* Mobile Team Display */}
          <div className="mt-8">
            {selectedLocation && (
              <div className="space-y-4">
                {getMobileTeam(selectedLocation).map((member) => (
                  <TeamMember key={`${member.slug}-${selectedLocation}`} {...member} />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Desktop View - Show All Team Members */}
        <div className="hidden md:block">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {desktopTeam.map((member) => (
              <TeamMember key={member.slug} {...member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}