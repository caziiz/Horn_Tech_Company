const data = {
  company: {
    name: 'HornTech Solutions',
    legalName: 'HornTech Solutions Ltd',
    tagline: "Building Somalia's Digital Future",
    description:
      'HornTech Solutions is a Somali technology company providing software development, IT consulting, networking, cybersecurity, and digital transformation services for businesses across Somalia and East Africa.',
    industry: 'Information Technology',
    founded: 2018,
    registrationNumber: 'SO-REG-2025-001234',
    taxId: 'TIN-123456789',
    employees: 45,
    headquarters: {
      country: 'Somalia',
      city: 'Mogadishu',
      district: 'Hodan',
      street: 'KM4 Road',
      building: 'HornTech Building',
      postalCode: '252',
    },
    logo: 'logo.png',
    favicon: '/favicon.ico',
    coverImage: '/images/office-cover.jpg',
    mission: 'Empower Somali businesses through innovative technology.',
    vision: 'To become the leading technology partner in East Africa.',
    values: ['Integrity', 'Innovation', 'Customer Focus', 'Teamwork', 'Quality'],
    languages: ['Somali', 'English', 'Arabic'],
  },

  contacts: {
    phone: ['+252611234567', '+252615678901'],
    email: {
      general: 'info@horntech.so',
      support: 'support@horntech.so',
      sales: 'sales@horntech.so',
      careers: 'careers@horntech.so',
    },
    website: 'https://www.horntech.so',
    workingHours: {
      Monday: '08:00 - 17:00',
      Tuesday: '08:00 - 17:00',
      Wednesday: '08:00 - 17:00',
      Thursday: '08:00 - 17:00',
      Friday: '08:00 - 12:00',
      Saturday: '09:00 - 14:00',
      Sunday: 'Closed',
    },
    map: {
      lat: 2.0469,
      lng: 45.3182,
      embedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.789!2d45.3182!3d2.0469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMDInNDguOCJOIDQ1wrAxOScwNS41IkU!5e0!3m2!1sen!2sso!4v1700000000000!5m2!1sen!2sso',
    },
  },

  socialMedia: {
    facebook: 'https://facebook.com/horntech',
    linkedin: 'https://linkedin.com/company/horntech',
    twitter: 'https://twitter.com/horntech',
    instagram: 'https://instagram.com/horntech',
    youtube: 'https://youtube.com/@horntech',
    tiktok: 'https://tiktok.com/@horntech',
  },

  services: [
    {
      id: 1,
      name: 'Software Development',
      description: 'Custom web and mobile applications tailored to your business needs.',
      icon: 'code',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'ERP Systems'],
    },
    {
      id: 2,
      name: 'Networking',
      description: 'Enterprise networking and infrastructure solutions for reliable connectivity.',
      icon: 'network',
      features: ['LAN/WAN', 'Fiber Installation', 'Wireless Networks', 'VPN'],
    },
    {
      id: 3,
      name: 'Cybersecurity',
      description: 'Protect your business from cyber threats with enterprise-grade security.',
      icon: 'shield',
      features: ['Firewall', 'Penetration Testing', 'Security Audits', 'Monitoring'],
    },
    {
      id: 4,
      name: 'IT Consulting',
      description: 'Strategic technology guidance to optimize your IT operations and investments.',
      icon: 'briefcase',
      features: ['IT Strategy', 'Infrastructure Assessment', 'Vendor Management', 'Cost Optimization'],
    },
    {
      id: 5,
      name: 'Digital Transformation',
      description: 'Modernize your business processes with cutting-edge digital solutions.',
      icon: 'sparkles',
      features: ['Process Automation', 'Legacy Modernization', 'Digital Workflows', 'Change Management'],
    },
    {
      id: 6,
      name: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for growing businesses.',
      icon: 'cloud',
      features: ['Cloud Migration', 'AWS & Azure', 'Backup & Recovery', 'Managed Cloud'],
    },
  ],

  about: {
    story:
      'Founded in 2018 in Mogadishu, HornTech Solutions began with a simple mission: to help Somali businesses embrace modern technology and compete on a global stage. What started as a small team of passionate developers has grown into one of East Africa\'s most trusted IT partners.\n\nOver the years, we have delivered hundreds of successful projects for government agencies, financial institutions, telecom companies, and SMEs across Somalia and the broader region. Our deep understanding of local business needs, combined with international best practices, sets us apart.\n\nToday, with offices in Mogadishu and Hargeisa, HornTech continues to drive digital innovation — empowering organizations to transform their operations, secure their data, and build the digital infrastructure Somalia needs for a prosperous future.',
    whyChooseUs: [
      'Experienced Team',
      'Affordable Pricing',
      '24/7 Support',
      'Local Expertise',
      'International Standards',
    ],
    coreValues: [
      {
        title: 'Integrity',
        description: 'We operate with transparency and honesty in every client engagement.',
        icon: 'shield-check',
      },
      {
        title: 'Innovation',
        description: 'We embrace new technologies to deliver cutting-edge solutions.',
        icon: 'lightbulb',
      },
      {
        title: 'Customer Focus',
        description: 'Your success is our priority — we listen, adapt, and deliver.',
        icon: 'heart',
      },
      {
        title: 'Teamwork',
        description: 'Collaboration drives our best work and your best outcomes.',
        icon: 'users',
      },
      {
        title: 'Quality',
        description: 'We maintain the highest standards in every project we undertake.',
        icon: 'award',
      },
    ],
    timeline: [
      {
        year: 2018,
        title: 'Company Founded',
        description: 'HornTech Solutions established in Mogadishu with a team of 5 engineers.',
      },
      {
        year: 2019,
        title: 'First Major Contract',
        description: 'Secured government portal development project, marking our entry into public sector IT.',
      },
      {
        year: 2020,
        title: 'Cybersecurity Division',
        description: 'Launched dedicated cybersecurity services to address growing regional threats.',
      },
      {
        year: 2022,
        title: 'Hargeisa Branch Opens',
        description: 'Expanded operations to Somaliland with a new office in Hargeisa.',
      },
      {
        year: 2024,
        title: '350+ Clients Milestone',
        description: 'Reached 350 active clients across Somalia and East Africa.',
      },
      {
        year: 2026,
        title: 'Regional Expansion',
        description: 'Launching cloud and digital transformation services across 6 countries.',
      },
    ],
  },

  team: [
    {
      name: 'Ahmed Ali',
      position: 'Chief Executive Officer',
      photo: '/team/ceo.jpg',
      bio: 'Over 15 years of experience in technology.',
    },
    {
      name: 'Fatima Hassan',
      position: 'Operations Manager',
      photo: '/team/operations.jpg',
      bio: 'Expert in project management.',
    },
  ],

  projects: [
    {
      title: 'Government Portal',
      client: 'Ministry',
      category: 'Web Development',
      image: '/projects/gov.jpg',
      description: 'National online service portal.',
    },
    {
      title: 'Banking Mobile App',
      client: 'Private Bank',
      category: 'Mobile Development',
      image: '/projects/bank.jpg',
      description: 'Digital banking application.',
    },
  ],

  clients: [
    { name: 'Somali Telecom', logo: '/clients/st.jpg' },
    { name: 'National Bank', logo: '/clients/bank.jpg' },
    { name: 'Dahabshiil', logo: '/clients/dahab.jpg' },
    { name: 'Hormuud Telecom', logo: '/clients/hormuud.jpg' },
    { name: 'Premier Bank', logo: '/clients/premier.jpg' },
    { name: 'Somali Chamber of Commerce', logo: '/clients/chamber.jpg' },
  ],

  testimonials: [
    {
      name: 'Mohamed Yusuf',
      company: 'ABC Logistics',
      rating: 5,
      comment:
        'Professional team and excellent service. HornTech delivered our logistics management system ahead of schedule.',
    },
    {
      name: 'Amina Mohamed',
      company: 'Green Valley Farms',
      rating: 5,
      comment:
        'Their networking team set up our entire office infrastructure flawlessly. Highly recommended for any Somali business.',
    },
    {
      name: 'Hassan Abdi',
      company: 'Mogadishu Trading Co.',
      rating: 5,
      comment:
        'The cybersecurity audit they performed saved us from potential data breaches. True experts in their field.',
    },
    {
      name: 'Fadumo Ali',
      company: 'East Africa Media Group',
      rating: 4,
      comment:
        'Great communication throughout our website redesign project. The team understood our vision perfectly.',
    },
  ],

  pricing: [
    {
      package: 'Starter',
      price: 500,
      currency: 'USD',
      features: ['Website', 'Hosting', 'Email Support'],
    },
    {
      package: 'Business',
      price: 1500,
      currency: 'USD',
      features: ['Custom Website', 'SEO', 'Priority Support'],
    },
  ],

  careers: [
    {
      title: 'Frontend Developer',
      location: 'Mogadishu',
      type: 'Full Time',
      experience: '2+ Years',
      salary: 'Negotiable',
    },
  ],

  faq: [
    {
      question: 'Do you provide support?',
      answer: 'Yes, 24/7 technical support.',
    },
    {
      question: 'Do you work outside Somalia?',
      answer: 'Yes, across East Africa and remotely worldwide.',
    },
  ],

  statistics: {
    clients: 350,
    projects: 520,
    employees: 45,
    yearsExperience: 8,
    countriesServed: 6,
  },

  certifications: ['ISO 9001', 'Cisco Partner', 'Microsoft Partner', 'AWS Partner', 'CompTIA Authorized'],

  gallery: ['/gallery/office1.jpg', '/gallery/office2.jpg', '/gallery/team.jpg'],

  blog: [
    {
      title: 'Digital Transformation in Somalia',
      slug: 'digital-transformation',
      author: 'Ahmed Ali',
      date: '2026-01-15',
    },
  ],

  partners: [
    { name: 'Microsoft' },
    { name: 'Cisco' },
    { name: 'AWS' },
    { name: 'Google Cloud' },
    { name: 'Dell Technologies' },
    { name: 'Fortinet' },
  ],

  downloads: [
    { name: 'Company Profile', file: '/downloads/profile.pdf' },
    { name: 'Service Catalog', file: '/downloads/services.pdf' },
  ],

  locations: [
    {
      office: 'Head Office',
      city: 'Mogadishu',
      district: 'Hodan',
      phone: '+252611234567',
      email: 'mogadishu@horntech.so',
    },
    {
      office: 'Branch Office',
      city: 'Hargeisa',
      district: '26 June',
      phone: '+252634567890',
      email: 'hargeisa@horntech.so',
    },
  ],

  seo: {
    title: 'HornTech Solutions | Somalia IT Company',
    description: 'Leading Somali software development and IT services company.',
    keywords: ['Somalia', 'IT', 'Software', 'Networking', 'Cybersecurity'],
  },

  legal: {
    privacyPolicy: '/privacy-policy',
    termsOfService: '/terms',
    cookiePolicy: '/cookies',
  },

  settings: {
    currency: 'USD',
    timezone: 'Africa/Mogadishu',
    country: 'Somalia',
    defaultLanguage: 'English',
  },

  navigation: [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
  ],

  cta: {
    title: 'Ready to Transform Your Business?',
    subtitle: "Let HornTech Solutions help you build the digital future.",
    primaryButton: 'Get Started Today',
    secondaryButton: 'Explore Services',
  },

  pageIntros: {
    contact:
      "Have a project in mind? We'd love to hear from you. Reach out and let's build something great together.",
    services: 'Comprehensive technology solutions for businesses across Somalia and East Africa.',
    about: 'Learn about our journey, values, and commitment to Somalia\'s digital transformation.',
  },
}

export default data
