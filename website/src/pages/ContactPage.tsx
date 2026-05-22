// Project Signature: alranin-community-development-association
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import ContactForm from '../components/forms/ContactForm';
import { useLanguage } from '../context/LanguageContext';

export default function ContactPage() {
  const { t, isRTL } = useLanguage();

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-4">{t.common.contactUs}</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">{t.contact.title}</h1>
          <p className="text-white/75 text-xl leading-relaxed">{t.contact.subtitle}</p>
        </div>
      </section>

      {/* Contact Layout */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <SectionTitle title={t.contact.formTitle} centered={false} />
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className={`bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 ${isRTL ? 'text-right' : 'text-left'}`}>
                <h3 className="text-lg font-bold text-primary mb-6">{t.contact.infoTitle}</h3>
                <ul className="space-y-5">
                  <li className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className="w-10 h-10 bg-primary/8 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-400 font-medium mb-0.5">Email</p>
                      <a href={`mailto:${t.contact.info.email}`} className="text-neutral-700 text-sm hover:text-primary transition-colors">
                        {t.contact.info.email}
                      </a>
                    </div>
                  </li>
                  <li className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className="w-10 h-10 bg-primary/8 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-400 font-medium mb-0.5">Phone</p>
                      <p className="text-neutral-700 text-sm" dir="ltr">{t.contact.info.phone}</p>
                    </div>
                  </li>
                  <li className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className="w-10 h-10 bg-primary/8 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-400 font-medium mb-0.5">Location</p>
                      <p className="text-neutral-700 text-sm">{t.contact.info.location}</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Social */}
              <div className={`bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 ${isRTL ? 'text-right' : 'text-left'}`}>
                <h3 className="text-base font-bold text-primary mb-5">{t.contact.info.social}</h3>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, label: 'Facebook' },
                    { icon: Instagram, label: 'Instagram' },
                    { icon: Twitter, label: 'Twitter' },
                    { icon: Linkedin, label: 'LinkedIn' },
                  ].map(({ icon: Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={label}
                      className="w-10 h-10 bg-primary/8 rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-200"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className={`bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-100 ${isRTL ? 'text-right' : 'text-left'}`}>
                <div className="h-48 bg-neutral-100 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={32} className="text-neutral-300 mx-auto mb-2" />
                    <p className="text-neutral-400 text-sm">{t.contact.mapTitle}</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-neutral-700 text-sm font-medium">{t.contact.info.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
