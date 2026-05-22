// Project Signature: alranin-community-development-association
import { useState } from 'react';
import { LayoutDashboard, FileText, Lightbulb, Users, Handshake, Plus, Pencil, Trash2, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface StatCard {
  label: string;
  value: number;
  icon: React.ReactNode;
  color: string;
}

export default function AdminPage() {
  const { t, isRTL, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<'initiatives' | 'news'>('initiatives');

  const stats: StatCard[] = [
    { label: t.admin.stats.initiatives, value: 7, icon: <Lightbulb size={20} />, color: 'bg-primary' },
    { label: t.admin.stats.news, value: 5, icon: <FileText size={20} />, color: 'bg-teal-600' },
    { label: t.admin.stats.volunteers, value: 0, icon: <Users size={20} />, color: 'bg-gold-dark' },
    { label: t.admin.stats.partners, value: 0, icon: <Handshake size={20} />, color: 'bg-indigo-600' },
  ];

  const initiativeRows = Object.entries(t.initiatives.items).map(([key, item]) => ({
    id: key,
    title: item.title,
    category: item.category,
    target: item.target,
    status: key === 'scholarships' ? t.initiatives.statuses.seeking
      : key === 'techlab' || key === 'aiWorkshops' ? t.initiatives.statuses.open
      : key === 'volunteerDays' || key === 'cultural' ? t.initiatives.statuses.soon
      : t.initiatives.statuses.planning,
  }));

  const newsRows = Object.entries(t.news.items).map(([key, item]) => ({
    id: key,
    title: item.title,
    category: item.category,
    date: key === 'launch' ? '2026-01-15' : key === 'volunteers' ? '2026-02-01' : key === 'education' ? '2026-02-20' : key === 'digital' ? '2026-03-10' : '2026-04-05',
  }));

  return (
    <div className="min-h-screen bg-neutral-50" dir={isRTL ? 'rtl' : 'ltr'} lang={lang}>
      {/* Header */}
      <div className="bg-primary text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
            <LayoutDashboard size={28} className="text-gold" />
            <div>
              <h1 className="text-2xl font-bold">{t.admin.title}</h1>
              <p className="text-white/70 text-sm">{t.admin.subtitle}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Demo Warning */}
        <div className={`flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-10 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
          <AlertTriangle size={20} className="text-amber-600 mt-0.5 flex-shrink-0" />
          <p className="text-amber-800 text-sm">{t.admin.demoNote}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
          {stats.map((s, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100">
              <div className={`flex items-center justify-between mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className={`w-11 h-11 ${s.color} rounded-xl flex items-center justify-center text-white`}>
                  {s.icon}
                </div>
              </div>
              <div className={`text-3xl font-extrabold text-primary mb-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                {s.value}
              </div>
              <div className={`text-sm text-neutral-500 ${isRTL ? 'text-right' : 'text-left'}`}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden">
          <div className={`flex border-b border-neutral-100 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {(['initiatives', 'news'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 text-sm font-semibold transition-colors ${
                  activeTab === tab
                    ? 'border-b-2 border-primary text-primary bg-primary/5'
                    : 'text-neutral-500 hover:text-primary'
                }`}
              >
                {tab === 'initiatives' ? t.admin.tables.initiatives : t.admin.tables.news}
              </button>
            ))}
          </div>

          <div className="p-6">
            {/* Add Button */}
            <div className={`flex mb-6 ${isRTL ? 'justify-end' : 'justify-start'}`}>
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white font-semibold text-sm rounded-lg hover:bg-primary-light transition-colors">
                <Plus size={16} />
                {t.admin.actions.add}
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              {activeTab === 'initiatives' ? (
                <table className="w-full text-sm">
                  <thead>
                    <tr className={`border-b border-neutral-100 ${isRTL ? 'text-right' : 'text-left'}`}>
                      <th className="py-3 px-4 font-semibold text-neutral-500 text-xs uppercase tracking-wide">
                        {isRTL ? 'العنوان' : 'Title'}
                      </th>
                      <th className="py-3 px-4 font-semibold text-neutral-500 text-xs uppercase tracking-wide">
                        {isRTL ? 'التصنيف' : 'Category'}
                      </th>
                      <th className="py-3 px-4 font-semibold text-neutral-500 text-xs uppercase tracking-wide">
                        {isRTL ? 'الحالة' : 'Status'}
                      </th>
                      <th className="py-3 px-4 font-semibold text-neutral-500 text-xs uppercase tracking-wide">
                        {isRTL ? 'إجراءات' : 'Actions'}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {initiativeRows.map((row) => (
                      <tr key={row.id} className="border-b border-neutral-50 hover:bg-neutral-50/50 transition-colors">
                        <td className={`py-4 px-4 font-medium text-neutral-800 ${isRTL ? 'text-right' : 'text-left'}`}>
                          {row.title}
                        </td>
                        <td className={`py-4 px-4 text-neutral-600 ${isRTL ? 'text-right' : 'text-left'}`}>
                          {row.category}
                        </td>
                        <td className={`py-4 px-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                          <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                            {row.status}
                          </span>
                        </td>
                        <td className={`py-4 px-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                          <div className={`flex gap-2 ${isRTL ? 'flex-row-reverse justify-end' : 'justify-start'}`}>
                            <button className="p-1.5 text-neutral-400 hover:text-primary hover:bg-primary/8 rounded-lg transition-colors">
                              <Pencil size={15} />
                            </button>
                            <button className="p-1.5 text-neutral-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                              <Trash2 size={15} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <table className="w-full text-sm">
                  <thead>
                    <tr className={`border-b border-neutral-100 ${isRTL ? 'text-right' : 'text-left'}`}>
                      <th className="py-3 px-4 font-semibold text-neutral-500 text-xs uppercase tracking-wide">
                        {isRTL ? 'العنوان' : 'Title'}
                      </th>
                      <th className="py-3 px-4 font-semibold text-neutral-500 text-xs uppercase tracking-wide">
                        {isRTL ? 'التصنيف' : 'Category'}
                      </th>
                      <th className="py-3 px-4 font-semibold text-neutral-500 text-xs uppercase tracking-wide">
                        {isRTL ? 'التاريخ' : 'Date'}
                      </th>
                      <th className="py-3 px-4 font-semibold text-neutral-500 text-xs uppercase tracking-wide">
                        {isRTL ? 'إجراءات' : 'Actions'}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {newsRows.map((row) => (
                      <tr key={row.id} className="border-b border-neutral-50 hover:bg-neutral-50/50 transition-colors">
                        <td className={`py-4 px-4 font-medium text-neutral-800 ${isRTL ? 'text-right' : 'text-left'}`}>
                          {row.title}
                        </td>
                        <td className={`py-4 px-4 text-neutral-600 ${isRTL ? 'text-right' : 'text-left'}`}>
                          {row.category}
                        </td>
                        <td className={`py-4 px-4 text-neutral-600 ${isRTL ? 'text-right' : 'text-left'}`}>
                          <time>{row.date}</time>
                        </td>
                        <td className={`py-4 px-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                          <div className={`flex gap-2 ${isRTL ? 'flex-row-reverse justify-end' : 'justify-start'}`}>
                            <button className="p-1.5 text-neutral-400 hover:text-primary hover:bg-primary/8 rounded-lg transition-colors">
                              <Pencil size={15} />
                            </button>
                            <button className="p-1.5 text-neutral-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                              <Trash2 size={15} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
