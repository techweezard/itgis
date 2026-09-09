import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { MapPin, Users, Globe2 } from 'lucide-react';

export default function Network() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <section className="bg-slate-50 pt-20 pb-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            {t.network.title}
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed mb-16">
            <p>{t.network.content}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-slate-200 p-8 rounded-lg text-center flex flex-col items-center">
              <MapPin className="w-10 h-10 text-slate-900 mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Local Proximity</h3>
              <p className="text-sm text-slate-600">On-site support available across the Berlin metropolitan area.</p>
            </div>
            
            <div className="border border-slate-200 p-8 rounded-lg text-center flex flex-col items-center">
              <Users className="w-10 h-10 text-slate-900 mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Start-up Ecosystem</h3>
              <p className="text-sm text-slate-600">Deeply integrated with Berlin's thriving tech and start-up culture.</p>
            </div>
            
            <div className="border border-slate-200 p-8 rounded-lg text-center flex flex-col items-center">
              <Globe2 className="w-10 h-10 text-slate-900 mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Turkish-German Network</h3>
              <p className="text-sm text-slate-600">Bridging technological gaps with dedicated multilingual consultancy.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
