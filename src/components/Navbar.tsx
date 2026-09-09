import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { Globe, Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { Language } from '../i18n/translations';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const links = [
    { href: '/', label: t.nav.home },
    { href: '/services', label: t.nav.services },
    { href: '/about', label: t.nav.about },
    { href: '/network', label: t.nav.network },
    { href: '/contact', label: t.nav.contact },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 bg-slate-900 rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-xl leading-none">B</span>
              </div>
              <span className="font-semibold text-xl tracking-tight text-slate-900 uppercase">
                Tech & GIS
              </span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-slate-900",
                  location.pathname === link.href ? "text-slate-900 border-b-2 border-slate-900 py-2" : "text-slate-500 py-2"
                )}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="flex items-center space-x-2 border-l border-slate-200 pl-6 ml-2">
              <Globe className="w-4 h-4 text-slate-400" />
              {(['de', 'en', 'tr'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={cn(
                    "text-xs font-semibold uppercase px-1.5 py-1 rounded transition-colors",
                    language === lang 
                      ? "bg-slate-100 text-slate-900" 
                      : "text-slate-400 hover:text-slate-700"
                  )}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-500 hover:text-slate-900 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-6 space-y-1 shadow-lg absolute w-full">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block px-3 py-3 rounded-md text-base font-medium",
                location.pathname === link.href 
                  ? "bg-slate-50 text-slate-900" 
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="px-3 pt-4 pb-2 border-t border-slate-100 flex items-center space-x-4">
            <Globe className="w-5 h-5 text-slate-400" />
            {(['de', 'en', 'tr'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  setLanguage(lang);
                  setIsOpen(false);
                }}
                className={cn(
                  "text-sm font-semibold uppercase px-3 py-1.5 rounded transition-colors",
                  language === lang 
                    ? "bg-slate-100 text-slate-900" 
                    : "text-slate-500 hover:text-slate-900"
                )}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
