// Project Signature: alranin-community-development-association
import { CheckCircle } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import VolunteerForm from '../components/forms/VolunteerForm';
import { useLanguage } from '../context/LanguageContext';

export default function VolunteerPage() {
  const { t, isRTL } = useLanguage();

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-4">{t.common.joinUs}</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">{t.volunteer.title}</h1>
          <p className="text-white/75 text-xl leading-relaxed">{t.volunteer.subtitle}</p>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <h2 className="text-2xl font-bold text-primary mb-4">{t.volunteer.whyTitle}</h2>
              <p className="text-neutral-700 leading-relaxed mb-6">{t.volunteer.whyDesc}</p>

              <div className={`bg-gold/10 border border-gold/20 rounded-2xl p-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                <h3 className="text-primary font-bold text-lg mb-3">{t.volunteer.earlyTitle}</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">{t.volunteer.earlyDesc}</p>
              </div>
            </div>

            <div>
              <h3 className={`text-xl font-bold text-primary mb-5 ${isRTL ? 'text-right' : 'text-left'}`}>
                {t.volunteer.fieldsTitle}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {t.volunteer.fields.map((field, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-3 bg-neutral-50 rounded-xl p-3 border border-neutral-100 ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    <CheckCircle size={18} className="text-gold flex-shrink-0" />
                    <span className="text-neutral-700 text-sm">{field}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t.volunteer.formTitle} />
          <VolunteerForm />
        </div>
      </section>
    </div>
  );
}
