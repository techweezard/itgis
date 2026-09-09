import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <section className="bg-slate-50 pt-20 pb-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            {t.nav.about}
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">{t.about.title}</h2>
          <div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed">
            <p>{t.about.content}</p>
          </div>
          
          <div className="mt-16 pt-16 border-t border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">Erhan Eroğlu</h3>
                <p className="text-slate-600 mb-1">Co-Founder & Consultant</p>
                <a href="tel:+491742170078" className="text-slate-900 font-medium hover:underline">0174 217 00 78</a>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">Taylan Korkmaz</h3>
                <p className="text-slate-600 mb-1">Co-Founder & Consultant</p>
                <a href="tel:+4915258444329" className="text-slate-900 font-medium hover:underline">01525 844 43 29</a>
              </div>
            </div>
            
            <div className="mt-8 bg-slate-50 p-6 rounded-lg border border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Headquarters</h3>
                <p className="text-slate-600">Franz-Künstler-Straße 7, 10969 Berlin</p>
              </div>
              <div className="mt-4 md:mt-0">
                <h3 className="font-semibold text-slate-900 mb-2 text-left md:text-right">Email</h3>
                <a href="mailto:erhanerogluant@gmail.com" className="text-slate-900 font-medium hover:underline">erhanerogluant@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
