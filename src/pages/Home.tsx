import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { ArrowRight, Server, Map, Image as ImageIcon, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const { t } = useLanguage();

  const services = [
    {
      id: 'it',
      icon: <Server className="w-8 h-8 mb-4 text-slate-900" />,
      title: t.services.categories.it.title,
      desc: t.services.categories.it.desc,
      items: t.services.categories.it.items.slice(0, 3)
    },
    {
      id: 'gis',
      icon: <Map className="w-8 h-8 mb-4 text-slate-900" />,
      title: t.services.categories.gis.title,
      desc: t.services.categories.gis.desc,
      items: t.services.categories.gis.items.slice(0, 3)
    },
    {
      id: 'dia',
      icon: <ImageIcon className="w-8 h-8 mb-4 text-slate-900" />,
      title: t.services.categories.dia.title,
      desc: t.services.categories.dia.desc,
      items: t.services.categories.dia.items.slice(0, 3)
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-50 pt-24 pb-32 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
              {t.hero.title}
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-slate-900 hover:bg-slate-800 transition-colors"
              >
                {t.hero.cta_primary}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link 
                to="/services" 
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-base font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 transition-colors"
              >
                {t.hero.cta_secondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-2">
              {t.valueProp.title}
            </h2>
            <div className="h-1 w-12 bg-slate-900"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {t.valueProp.items.map((item, idx) => (
              <div key={idx} className="border-l-2 border-slate-200 pl-6 hover:border-slate-900 transition-colors">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">{t.services.title}</h2>
            <p className="text-lg text-slate-600 max-w-2xl">{t.services.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                {service.icon}
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.desc}</p>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-slate-300 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to={`/services#${service.id}`} 
                  className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-slate-600 transition-colors mt-auto group"
                >
                  Explore Details
                  <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-6">{t.contact.title}</h2>
              <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
                {t.contact.subtitle}
              </p>
              
              <div className="space-y-4 text-slate-300">
                <div className="flex items-center">
                  <div className="w-12 text-slate-500 font-mono text-sm">ADDR</div>
                  <div>Franz-Künstler-Straße 7, 10969 Berlin</div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 text-slate-500 font-mono text-sm">TEL 1</div>
                  <div>0174 217 00 78 (Erhan Eroğlu)</div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 text-slate-500 font-mono text-sm">TEL 2</div>
                  <div>01525 844 43 29 (Taylan Korkmaz)</div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 text-slate-500 font-mono text-sm">MAIL</div>
                  <div>erhanerogluant@gmail.com</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white text-slate-900 rounded-lg p-8 shadow-xl">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">{t.contact.form.name}</label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-slate-900 focus:border-slate-900 outline-none transition-colors" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">{t.contact.form.email}</label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-slate-900 focus:border-slate-900 outline-none transition-colors" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">{t.contact.form.service}</label>
                  <select id="service" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-slate-900 focus:border-slate-900 outline-none transition-colors bg-white">
                    <option>{t.services.categories.it.title}</option>
                    <option>{t.services.categories.gis.title}</option>
                    <option>{t.services.categories.dia.title}</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">{t.contact.form.message}</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-slate-900 focus:border-slate-900 outline-none transition-colors resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-slate-900 text-white font-medium py-3 rounded-md hover:bg-slate-800 transition-colors">
                  {t.contact.form.submit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
