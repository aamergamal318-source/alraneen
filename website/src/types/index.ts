// Project Signature: alranin-community-development-association

export type Language = 'ar' | 'he' | 'en';

export interface Program {
  id: string;
  icon: string;
  titleKey: string;
  descKey: string;
}

export interface Initiative {
  id: string;
  titleKey: string;
  descKey: string;
  targetKey: string;
  status: 'planning' | 'soon' | 'open' | 'seeking';
  categoryKey: string;
  image?: string;
}

export interface NewsItem {
  id: string;
  titleKey: string;
  summaryKey: string;
  date: string;
  categoryKey: string;
  image?: string;
}

export interface Partner {
  id: string;
  nameKey: string;
  categoryKey: string;
  logo?: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface TranslationSet {
  nav: {
    home: string;
    about: string;
    fields: string;
    initiatives: string;
    volunteer: string;
    support: string;
    news: string;
    partners: string;
    contact: string;
    admin: string;
  };
  hero: {
    tagline: string;
    subtitle: string;
    desc: string;
    ctaLearn: string;
    ctaVolunteer: string;
    ctaSupport: string;
    badge: string;
  };
  founding: {
    banner: string;
    desc: string;
  };
  about: {
    title: string;
    subtitle: string;
    intro: string;
    whyTitle: string;
    whyDesc: string;
    storyTitle: string;
    storyDesc: string;
    missionTitle: string;
    missionDesc: string;
    visionTitle: string;
    visionDesc: string;
    valuesTitle: string;
    values: {
      responsibility: string;
      transparency: string;
      innovation: string;
      empowerment: string;
      partnership: string;
      sustainability: string;
    };
    valueDescs: {
      responsibility: string;
      transparency: string;
      innovation: string;
      empowerment: string;
      partnership: string;
      sustainability: string;
    };
    goalsTitle: string;
    goals: string[];
    audienceTitle: string;
    audiences: string[];
  };
  programs: {
    title: string;
    subtitle: string;
    learnMore: string;
    items: {
      education: { title: string; desc: string };
      tech: { title: string; desc: string };
      youth: { title: string; desc: string };
      volunteer: { title: string; desc: string };
      grants: { title: string; desc: string };
      leadership: { title: string; desc: string };
      cultural: { title: string; desc: string };
      partnerships: { title: string; desc: string };
    };
  };
  initiatives: {
    title: string;
    subtitle: string;
    details: string;
    statuses: {
      planning: string;
      soon: string;
      open: string;
      seeking: string;
    };
    items: {
      scholarships: { title: string; desc: string; target: string; category: string };
      leaders: { title: string; desc: string; target: string; category: string };
      techlab: { title: string; desc: string; target: string; category: string };
      volunteerDays: { title: string; desc: string; target: string; category: string };
      schoolSupport: { title: string; desc: string; target: string; category: string };
      aiWorkshops: { title: string; desc: string; target: string; category: string };
      cultural: { title: string; desc: string; target: string; category: string };
    };
  };
  volunteer: {
    title: string;
    subtitle: string;
    intro: string;
    whyTitle: string;
    whyDesc: string;
    earlyTitle: string;
    earlyDesc: string;
    fieldsTitle: string;
    fields: string[];
    formTitle: string;
    formNote: string;
    form: {
      name: string;
      email: string;
      phone: string;
      city: string;
      age: string;
      interest: string;
      message: string;
      submit: string;
      success: string;
    };
  };
  support: {
    title: string;
    subtitle: string;
    intro: string;
    typesTitle: string;
    types: string[];
    cardsTitle: string;
    cards: { title: string; desc: string }[];
    cta: string;
    note: string;
  };
  news: {
    title: string;
    subtitle: string;
    readMore: string;
    demoNote: string;
    categories: {
      all: string;
      launch: string;
      initiative: string;
      partnership: string;
      volunteer: string;
    };
    items: {
      launch: { title: string; summary: string; category: string };
      volunteers: { title: string; summary: string; category: string };
      education: { title: string; summary: string; category: string };
      digital: { title: string; summary: string; category: string };
      partnership: { title: string; summary: string; category: string };
    };
  };
  partners: {
    title: string;
    subtitle: string;
    ctaTitle: string;
    ctaDesc: string;
    ctaBtn: string;
    categories: {
      schools: string;
      local: string;
      academic: string;
      tech: string;
      civil: string;
      donors: string;
      youth: string;
    };
    placeholder: string;
  };
  contact: {
    title: string;
    subtitle: string;
    formTitle: string;
    infoTitle: string;
    mapTitle: string;
    form: {
      name: string;
      email: string;
      phone: string;
      type: string;
      types: string[];
      message: string;
      submit: string;
      success: string;
    };
    info: {
      email: string;
      phone: string;
      location: string;
      social: string;
    };
    note: string;
  };
  newsletter: {
    title: string;
    desc: string;
    placeholder: string;
    btn: string;
    success: string;
  };
  cta: {
    volunteer: { title: string; desc: string; btn: string };
    partner: { title: string; desc: string; btn: string };
    support: { title: string; desc: string; btn: string };
  };
  stats: {
    title: string;
    items: { value: string; label: string }[];
  };
  footer: {
    desc: string;
    links: string;
    contact: string;
    social: string;
    rights: string;
    founding: string;
  };
  admin: {
    title: string;
    subtitle: string;
    stats: { initiatives: string; news: string; volunteers: string; partners: string };
    tables: { initiatives: string; news: string };
    actions: { add: string; edit: string; delete: string };
    demoNote: string;
  };
  common: {
    joinUs: string;
    bePartner: string;
    contactUs: string;
    learnMore: string;
    readMore: string;
    submit: string;
    loading: string;
    demo: string;
    new: string;
    foundingStage: string;
  };
}
