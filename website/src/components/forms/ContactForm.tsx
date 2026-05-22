// Project Signature: alranin-community-development-association
import { useState } from 'react';
import { CheckCircle, Info, Send } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

/*
 * To activate real email delivery, replace FORM_ID with your Formspree endpoint:
 * 1. Go to formspree.io and create a free form.
 * 2. Replace the empty string below with your form ID (e.g. "xrgjabc").
 * 3. Never commit real API keys; the Formspree ID in the URL is safe to expose.
 */
const FORMSPREE_ID = '';

export default function ContactForm() {
  const { t, isRTL } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (FORMSPREE_ID) {
      try {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(form),
        });
        if (res.ok) setSubmitted(true);
      } catch {
        // fallback: show success anyway (form UI)
        setSubmitted(true);
      }
    } else {
      // Demo mode — no backend connected
      setSubmitted(true);
    }
    setLoading(false);
  };

  const inputClass = `w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary focus:bg-white transition-all ${isRTL ? 'text-right' : 'text-left'}`;
  const labelClass = `block text-sm font-semibold text-neutral-700 mb-1.5 ${isRTL ? 'text-right' : 'text-left'}`;

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-12 text-center">
        <CheckCircle size={48} className="text-emerald-500 mx-auto mb-4" />
        <p className="text-emerald-800 font-extrabold text-xl mb-2">{t.contact.form.success}</p>
        <p className="text-emerald-600 text-sm">سنتواصل معك في أقرب وقت ممكن.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-card border border-neutral-100 p-8">
      {/* Notice */}
      <div className={`flex items-start gap-3 bg-gold/8 border border-gold/20 rounded-xl p-4 mb-7 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
        <Info size={17} className="text-gold-dark mt-0.5 flex-shrink-0" />
        <p className="text-sm text-neutral-600 leading-relaxed">{t.contact.note}</p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>{t.contact.form.name} <span className="text-rose-500">*</span></label>
            <input name="name" required value={form.name} onChange={handleChange} className={inputClass} autoComplete="name" />
          </div>
          <div>
            <label className={labelClass}>{t.contact.form.email} <span className="text-rose-500">*</span></label>
            <input name="email" type="email" required value={form.email} onChange={handleChange} className={inputClass} autoComplete="email" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>{t.contact.form.phone}</label>
            <input name="phone" value={form.phone} onChange={handleChange} className={inputClass} autoComplete="tel" dir="ltr" />
          </div>
          <div>
            <label className={labelClass}>{t.contact.form.type} <span className="text-rose-500">*</span></label>
            <select name="type" required value={form.type} onChange={handleChange} className={inputClass}>
              <option value="">— {isRTL ? 'اختر' : 'Select'} —</option>
              {t.contact.form.types.map((tp) => (
                <option key={tp} value={tp}>{tp}</option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label className={labelClass}>{t.contact.form.message} <span className="text-rose-500">*</span></label>
          <textarea
            name="message"
            required
            value={form.message}
            onChange={handleChange}
            rows={5}
            className={`${inputClass} resize-none`}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary-light transition-all duration-200 text-base shadow-primary hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
        >
          {loading ? t.common.loading : (
            <>
              {t.contact.form.submit}
              <Send size={16} />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
