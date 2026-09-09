import React, { useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Server, Map, Image as ImageIcon, CheckCircle2 } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function Services() {
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const serviceCategories = [
    {
      id: 'it',
      icon: <Server className="w-12 h-12 text-slate-900 mb-6" />,
      title: t.services.categories.it.title,
      desc: t.services.categories.it.desc,
      items: t.services.categories.it.items
    },
    {
      id: 'gis',
      icon: <Map className="w-12 h-12 text-slate-900 mb-6" />,
      title: t.services.categories.gis.title,
      desc: t.services.categories.gis.desc,
      items: t.services.categories.gis.items
    },
    {
      id: 'dia',
      icon: <ImageIcon className="w-12 h-12 text-slate-900 mb-6" />,
      title: t.services.categories.dia.title,
      desc: t.services.categories.dia.desc,
      items: t.services.categories.dia.items
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-50 pt-20 pb-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            {t.services.title}
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl">
            {t.services.subtitle}
          </p>
        </div>
      </section>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-32">
        {serviceCategories.map((category, index) => (
          <section 
            key={category.id} 
            id={category.id} 
            className={`flex flex-col lg:flex-row gap-16 items-start ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className="flex-1 lg:sticky lg:top-32">
              {category.icon}
              <h2 className="text-3xl font-bold text-slate-900 mb-6">{category.title}</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {category.desc}
              </p>
              <div className="h-1 w-20 bg-slate-900"></div>
            </div>
            
            <div className="flex-1 w-full bg-slate-50 border border-slate-200 p-8 rounded-lg">
              <h3 className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-8">
                Included Services
              </h3>
              <ul className="space-y-6">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-slate-900 mr-4 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-800 font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
