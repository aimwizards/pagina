import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Calendar, Clock, Sparkles, Star } from 'lucide-react';
import TeamMember from './TeamMember';

const salons = [
  {
    name: "Solna",
    address: "Solnavägen 29 H",
    postal: "171 45, Solna",
    phone: "076-095 58 87",
    bookingUrl: "https://www.bokadirekt.se/places/frisor-solna-styling-by-brazil-klinink-58888",
    openingHours: [
      { day: "Måndag-Fredag", hours: "10:00 - 19:00" },
      { day: "Lördag", hours: "10:00 - 17:00" },
      { day: "Söndag", hours: "Stängt" }
    ],
    services: [
      "Frisör",
      "Keratin",
      "Laser",
      "Hudvård",
      "Ögon & Bryn",
      "Vaxning"
    ]
  },
  {
    name: "Södermalm",
    address: "Katarina Bangata 15",
    postal: "116 39, Södermalm",
    phone: "073-441 12 55",
    bookingUrl: "https://www.bokadirekt.se/places/frisor-stockholm-sodermalm-styling-by-brazil-vaxning-50453",
    openingHours: [
      { day: "Måndag-Fredag", hours: "10:00 - 19:00" },
      { day: "Lördag", hours: "10:00 - 17:00" },
      { day: "Söndag", hours: "Stängt" }
    ],
    services: [
      "Frisör",
      "Hudvård",
      "Laser",
      "Ansiktsbehandling",
      "Kroppsbehandling"
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
    location: "Solna & Södermalm",
    phone: "076-095 58 87",
    bookingUrl: "/team/rosangela-lima",
    slug: "rosangela-lima"
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
    name: "Nori",
    title: "Frisör",
    specialties: [
      "Klippning herr",
      "Klippning dam",
      "Klippning barn",
      "Styling fön",
      "Från afro till skandinaviskt hår"
    ],
    image: "https://static.wixstatic.com/media/8f7788_827e9905211647778aefccc98c9c4a86~mv2.jpeg/v1/fill/w_600,h_808,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202024-09-27%20at%2022_01_13.jpeg",
    location: "Solna",
    phone: "070-465 65 13",
    slug: "nori"
  }
];

const sodermalmTeam = [];

export default function TeamSection() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const desktopTeam = [...solnaTeam, ...sodermalmTeam];

  return (
    <section className="py-24 bg-neutral-50" id="team-section">
      <div className="container">
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
          Välj din närmaste salong och boka tid hos någon av våra skickliga specialister.
        </motion.p>

        {/* Salon Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {salons.map((salon) => (
            <motion.div
              key={salon.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500"
            >
              <div className="p-8 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-beige-50 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-beige-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-light">{salon.name}</h3>
                    <p className="text-neutral-600">{salon.address}</p>
                    <p className="text-neutral-500 text-sm">{salon.postal}</p>
                  </div>
                </div>

                <div className="space-y-6 flex-grow">
                  {/* Opening Hours */}
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-beige-400 mt-1" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-neutral-800 mb-2">Öppettider</p>
                      {salon.openingHours.map((time) => (
                        <div key={time.day} className="flex justify-between text-sm">
                          <span className="text-neutral-600">{time.day}</span>
                          <span className="text-neutral-800">{time.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Services */}
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-beige-400 mt-1" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-neutral-800 mb-2">Behandlingar</p>
                      <div className="flex flex-wrap gap-2">
                        {salon.services.map((service) => (
                          <span
                            key={service}
                            className="text-sm bg-beige-50 text-beige-500 px-3 py-1 rounded-full"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-beige-400" />
                    <a
                      href={`tel:${salon.phone.replace(/\s/g, '')}`}
                      className="text-neutral-600 hover:text-beige-500 transition-colors"
                    >
                      {salon.phone}
                    </a>
                  </div>
                </div>

                {/* Booking Button - Now outside the space-y-6 div */}
                <a
                  href={salon.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 mt-8 bg-beige-500 text-white rounded-lg
                    hover:bg-beige-600 transition-colors duration-300"
                >
                  <Calendar className="w-5 h-5" />
                  Boka tid
                </a>
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
    </section>
  );
}