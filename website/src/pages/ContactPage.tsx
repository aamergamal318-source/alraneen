// Project Signature: alranin-community-development-association
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import ContactForm from '../components/forms/ContactForm';
import { useLanguage } from '../context/LanguageContext';

export default function ContactPage() {
  const { t, isRTL } = useLanguage();

  const socialLinks = [
    { Icon: Facebook,  label: 'Facebook' },
    { Icon: Instagram, label: 'Instagram' },
    { Icon: Twitter,   label: 'X' },
    { Icon: Linkedin,  label: 'LinkedIn' },
  ];

  return (
    <div>
      {/* Page Hero */}
      <section className="bg-primary py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full border border-gold/10" />
          <div className="absolute -top-16 -left-16 w-48 h-48 rounded-full border border-white/5" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label">{t.common.contactUs}</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">{t.contact.title}</h1>
          <div className="h-[3px] w-14 bg-gradient-to-r from-gold to-gold-light rounded-full mx-auto mb-5" />
          <p className="text-white/70 text-xl leading-relaxed">{t.contact.subtitle}</p>
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

            {/* Sidebar */}
            <div className="space-y-5">

              {/* Contact Info */}
              <div className={`bg-white rounded-2xl p-7 shadow-card border border-neutral-100 ${isRTL ? 'text-right' : 'text-left'}`}>
                <h3 className="text-base font-bold text-primary mb-6">{t.contact.infoTitle}</h3>
                <ul className="space-y-5">
                  {[
                    { Icon: Mail,    label: 'البريد الإلكتروني', value: t.contact.info.email, href: `mailto:${t.contact.info.email}`, dir: undefined },
                    { Icon: Phone,   label: 'الهاتف',            value: t.contact.info.phone, href: undefined,                        dir: 'ltr' as const },
                    { Icon: MapPin,  label: 'الموقع',            value: t.contact.info.location, href: undefined,                    dir: undefined },
                  ].map(({ Icon, label, value, href, dir }) => (
                    <li key={label} className={`flex items-start gap-3.5 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <div className="w-10 h-10 bg-primary/8 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon size={17} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-neutral-400 mb-0.5">{label}</p>
                        {href ? (
                          <a href={href} className="text-neutral-700 text-sm hover:text-primary transition-colors font-medium" dir={dir}>{value}</a>
                        ) : (
                          <p className="text-neutral-700 text-sm font-medium" dir={dir}>{value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social */}
              <div className={`bg-white rounded-2xl p-7 shadow-card border border-neutral-100 ${isRTL ? 'text-right' : 'text-left'}`}>
                <h3 className="text-sm font-bold text-primary mb-4">{t.contact.info.social}</h3>
                <div className="flex gap-2.5">
                  {socialLinks.map(({ Icon, label }) => (
                    <span
                      key={label}
                      aria-label={label}
                      title={label}
                      className="w-10 h-10 bg-primary/8 rounded-xl flex items-center justify-center text-primary"
                    >
                      <Icon size={17} />
                    </span>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-card border border-neutral-100">
                <div className="h-44 bg-gradient-to-br from-primary/5 to-teal/5 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={30} className="text-primary/25 mx-auto mb-2" />
                    <p className="text-neutral-400 text-sm">{t.contact.mapTitle}</p>
                  </div>
                </div>
                <div className="p-4">
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
