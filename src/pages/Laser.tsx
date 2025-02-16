import React from 'react';
import PageHero from '../components/PageHero';
import { Sparkles, Calendar } from 'lucide-react';

export default function Laser() {
  return (
    <div>
      <PageHero 
        title="Laser"
        description="Permanent hårborttagning med modern teknologi"
        image="https://pamchaneyaesthetics.com/wp-content/uploads/2022/12/Are-Laser-Treatments-Good-for-All-Skin-Types-2048x1366.jpeg"
      />
      
      <section className="py-24">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-6">Modern laserbehandling</h2>
            <p className="text-neutral-600 leading-relaxed">
              Med vår avancerade RF Soprano Ice-teknologi erbjuder vi säker och effektiv 
              permanent hårborttagning för alla hudtyper. Vår moderna utrustning garanterar 
              optimal komfort och resultat.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/5c8d59b3f4e5317be3fe8bd7/3f0c5bac-fcf1-4118-9db9-8719852ef948/laser+treatment+for+dark+spots+price.png?format=2500w"
                alt="Laser behandling"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-light mb-4">Fördelar med laserbehandling</h3>
              <ul className="space-y-3 text-neutral-600">
                <li>✨ Permanent hårborttagning</li>
                <li>✨ Passar alla hudtyper</li>
                <li>✨ Smärtfri behandling</li>
                <li>✨ Snabba resultat</li>
                <li>✨ Modern teknologi</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/priser" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-beige-500 text-white rounded-full hover:bg-beige-600 transition-colors duration-300">
              <Sparkles className="w-5 h-5" />
              Se våra priser
            </a>
            <a href="/boka" className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-beige-500 text-beige-500 rounded-full hover:bg-beige-500 hover:text-white transition-all duration-300">
              <Calendar className="w-5 h-5" />
              Boka tid
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}