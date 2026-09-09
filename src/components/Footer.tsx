import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                <span className="text-slate-900 font-bold text-xl leading-none">B</span>
              </div>
              <span className="font-semibold text-xl tracking-tight text-white uppercase">
                Tech & GIS
              </span>
            </Link>
            <p className="text-sm">
              {t.about.title}
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4 uppercase tracking-wider text-sm">{t.nav.services}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">{t.services.categories.it.title}</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">{t.services.categories.gis.title}</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">{t.services.categories.dia.title}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4 uppercase tracking-wider text-sm">{t.nav.about}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">{t.nav.about}</Link></li>
              <li><Link to="/network" className="hover:text-white transition-colors">{t.nav.network}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4 uppercase tracking-wider text-sm">{t.nav.contact}</h3>
            <ul className="space-y-2 text-sm">
              <li>Franz-Künstler-Straße 7</li>
              <li>10969 Berlin</li>
              <li className="pt-2">
                <a href="mailto:erhanerogluant@gmail.com" className="hover:text-white transition-colors">
                  erhanerogluant@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+491742170078" className="hover:text-white transition-colors">
                  0174 217 00 78
                </a>
              </li>
              <li>
                <a href="tel:+4915258444329" className="hover:text-white transition-colors">
                  01525 844 43 29
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} Berlin Tech & GIS Consulting. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <span>Imprint</span>
            <span>Privacy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
