import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <section className="pt-20 pb-12 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            {t.nav.contact}
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      <section className="py-20 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-6 uppercase tracking-wider">{t.contact.info.address}</h3>
                <p className="text-slate-600 leading-relaxed">
                  Franz-Künstler-Straße 7<br />
                  10969 Berlin<br />
                  Germany
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-6 uppercase tracking-wider">Direct Contacts</h3>
                
                <div className="space-y-6">
                  <div>
                    <p className="font-semibold text-slate-900">Erhan Eroğlu</p>
                    <a href="tel:+491742170078" className="text-slate-600 hover:text-slate-900 transition-colors">0174 217 00 78</a>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-slate-900">Taylan Korkmaz</p>
                    <a href="tel:+4915258444329" className="text-slate-600 hover:text-slate-900 transition-colors">01525 844 43 29</a>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-100">
                    <p className="font-semibold text-slate-900 mb-1">{t.contact.info.email}</p>
                    <a href="mailto:erhanerogluant@gmail.com" className="text-slate-600 hover:text-slate-900 transition-colors">
                      erhanerogluant@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white p-10 rounded-lg border border-slate-200 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">{t.contact.title}</h2>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">{t.contact.form.name}</label>
                      <input type="text" id="name" className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-slate-900 focus:border-slate-900 outline-none transition-colors" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">{t.contact.form.email}</label>
                      <input type="email" id="email" className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-slate-900 focus:border-slate-900 outline-none transition-colors" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">{t.contact.form.service}</label>
                    <select id="service" className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-slate-900 focus:border-slate-900 outline-none transition-colors bg-white">
                      <option>{t.services.categories.it.title}</option>
                      <option>{t.services.categories.gis.title}</option>
                      <option>{t.services.categories.dia.title}</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">{t.contact.form.message}</label>
                    <textarea id="message" rows={6} className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-slate-900 focus:border-slate-900 outline-none transition-colors resize-none"></textarea>
                  </div>
                  
                  <button type="submit" className="w-full bg-slate-900 text-white font-medium py-4 rounded-md hover:bg-slate-800 transition-colors">
                    {t.contact.form.submit}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
