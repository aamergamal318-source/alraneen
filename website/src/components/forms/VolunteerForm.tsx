// Project Signature: alranin-community-development-association
import { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function VolunteerForm() {
  const { t, isRTL } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', city: '', age: '', interest: '', message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = `w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all ${isRTL ? 'text-right' : 'text-left'}`;
  const labelClass = `block text-sm font-semibold text-neutral-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`;

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
        <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
        <p className="text-green-800 font-bold text-xl">{t.volunteer.form.success}</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-8">
      <div className={`flex items-start gap-3 bg-gold/10 border border-gold/20 rounded-xl p-4 mb-8 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
        <AlertCircle size={18} className="text-gold-dark mt-0.5 flex-shrink-0" />
        <p className="text-sm text-neutral-700">{t.volunteer.formNote}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>{t.volunteer.form.name} *</label>
            <input name="name" required value={form.name} onChange={handleChange} className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>{t.volunteer.form.email} *</label>
            <input name="email" type="email" required value={form.email} onChange={handleChange} className={inputClass} />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div>
            <label className={labelClass}>{t.volunteer.form.phone}</label>
            <input name="phone" value={form.phone} onChange={handleChange} className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>{t.volunteer.form.city} *</label>
            <input name="city" required value={form.city} onChange={handleChange} className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>{t.volunteer.form.age}</label>
            <input name="age" type="number" min={16} max={99} value={form.age} onChange={handleChange} className={inputClass} />
          </div>
        </div>
        <div>
          <label className={labelClass}>{t.volunteer.form.interest} *</label>
          <select name="interest" required value={form.interest} onChange={handleChange} className={inputClass}>
            <option value="">—</option>
            {t.volunteer.fields.map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass}>{t.volunteer.form.message}</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            className={inputClass}
          />
        </div>
        <button
          type="submit"
          className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-light transition-colors duration-200 text-base shadow-md hover:shadow-lg"
        >
          {t.volunteer.form.submit}
        </button>
      </form>
    </div>
  );
}
