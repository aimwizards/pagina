import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, MapPin, Phone } from 'lucide-react';

const teamMembers = {
  'rosangela-lima': {
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
    bookingUrl: "https://www.bokadirekt.se/places/frisor-solna-styling-by-brazil-klinink-58888",
    bio: "Med över två decennier i skönhetsbranschen har Rosangela utvecklat en omfattande expertis inom flera områden. Hon är en mångsidig expert som behärskar allt från avancerad hårvård till kroppsbehandlingar. Hennes specialiteter inkluderar professionell hårfärgning, keratinbehandlingar och slingor för alla hårtyper. Som hudterapeut erbjuder hon skräddarsydda ansiktsbehandlingar och expertis inom laser hårborttagning. Rosangela är även specialiserad på kroppsbehandlingar som inkluderar fettreducering och anti-cellulitbehandlingar. Hennes helhetssyn på skönhet och välbefinnande, kombinerat med hennes tekniska skicklighet, gör henne till en eftertraktad expert för kunder som söker omfattande skönhetslösningar."
  },
  'tatiana-h': {
    name: "Tatiana H.",
    title: "Certifierad Hudterapeut",
    specialties: [
      "Ansiktsbehandling",
      "Laserbehandling",
      "Massage"
    ],
    image: "https://static.wixstatic.com/media/8f7788_69aebb91fd98466a842e6e02e2c6d9c9~mv2.jpg/v1/fill/w_403,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/thumbnail_f8f820d1-11fb-42fe-9ffd-ae2737.jpg",
    location: "Solna",
    phone: "076-095 58 87",
    bookingUrl: "https://www.bokadirekt.se/places/frisor-solna-styling-by-brazil-klinink-58888",
    bio: "Tatiana är en dedikerad hudterapeut med djupgående kunskap inom hudvård och behandlingar. Hon specialiserar sig på avancerade ansiktsbehandlingar som är skräddarsydda för varje kunds unika hudtyp och behov. Med sin expertis inom laserbehandlingar erbjuder hon effektiva lösningar för olika hudproblem. Hennes massagebehandlingar kombinerar olika tekniker för optimal avslappning och resultat. Tatianas metodiska approach och förmåga att skapa en lugnande behandlingsmiljö gör henne särskilt uppskattad bland kunder som söker både resultat och välbefinnande."
  },
  'justina-polivoda': {
    name: "Justina Polivoda",
    title: "Hudterapeut",
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
    bio: "Justina är en erfaren hudterapeut med särskild expertis inom ögon- och brynbehandlingar. Hon har utvecklat en unik förmåga att skapa naturligt vackra resultat genom sina specialiserade behandlingar. Hennes browlift-behandlingar ger en subtil men märkbar lyftning av ögonbrynen, medan hennes lashlift-teknik framhäver ögonfransarnas naturliga längd och böjning. Som hudterapeut erbjuder hon även skräddarsydda ansiktsbehandlingar som förbättrar hudens struktur och utseende. Justinas noggrannhet och öga för detaljer gör henne till ett utmärkt val för kunder som söker precisa och naturliga resultat."
  },
  'noir-t': {
    name: "Nori",
    title: "Frisör",
    specialties: [
      "Klippning herr",
      "Klippning dam",
      "Klippning barn",
      "Styling fön",
      "Från afro till skandinaviskt hår"
    ],
    image: "https://static.wixstatic.com/media/8f7788_827e9905211647778aefccc98c9c4a86~mv2.jpeg/v1/fill/w_403,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202024-09-27%20at%2022_01_13.jpeg",
    location: "Solna",
    phone: "070-465 65 13",
    bio: "Nori är en skicklig frisör med en unik förmåga att arbeta med alla hårtyper, från skandinaviskt till afro hår. Hans expertis inom herr- och damklippning kombinerar klassiska tekniker med moderna trender för att skapa personliga och stilrena frisyrer. Med särskild kunskap om barns behov gör han klippningen till en trygg och positiv upplevelse för de yngsta kunderna. Hans förmåga att förstå och arbeta med olika hårtexturer, kombinerat med hans skicklighet inom styling och föning, gör honom till en mångsidig frisör som kan möta varje kunds individuella önskemål."
  }
};

export default function TeamMemberPage() {
  const { slug } = useParams();
  const member = teamMembers[slug as keyof typeof teamMembers];

  if (!member) {
    return <div>Member not found</div>;
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container max-w-4xl pt-32 pb-24">
        {/* Header with Circle Image */}
        <div className="flex flex-col items-center mb-16">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl font-light mb-2">{member.name}</h1>
          <p className="text-xl text-neutral-600 mb-6">{member.title}</p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="flex items-center gap-2 text-neutral-600">
              <MapPin className="w-5 h-5 text-rose-400" />
              <span>{member.location}</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-600">
              <Phone className="w-5 h-5 text-rose-400" />
              <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="hover:text-rose-500 transition-colors">
                {member.phone}
              </a>
            </div>
            {member.bookingUrl ? (
              <a 
                href={member.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors"
              >
                <Calendar className="w-5 h-5" />
                Boka tid
              </a>
            ) : (
              <a 
                href={`tel:${member.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-2 px-6 py-2 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Ring nu
              </a>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Bio */}
          <div className="prose prose-lg max-w-none mb-16">
            <p className="lead text-neutral-600">{member.bio}</p>
          </div>

          {/* Specialties */}
          <div>
            <h3 className="text-2xl font-light mb-6">Specialiteter</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {member.specialties.map((specialty, index) => (
                <div 
                  key={index}
                  className="bg-neutral-50 p-4 rounded-lg text-center text-neutral-600 hover:bg-neutral-100 transition-colors"
                >
                  {specialty}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}