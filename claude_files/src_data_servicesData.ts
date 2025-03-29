import { h, type VNode } from 'vue';

// Define the Service type
export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription?: string;
  category: string;
  icon: () => VNode;
  features: string[];
  benefits?: string;
  process?: string[];
  featured?: boolean;
  highlighted?: boolean;
}

// Categories
export const categories = [
  {
    id: 'development',
    name: 'Development'
  },
  {
    id: 'support',
    name: 'Customer Support'
  },
  {
    id: 'management',
    name: 'Project Management'
  },
  {
    id: 'marketing',
    name: 'Marketing'
  },
  {
    id: 'design',
    name: 'Design'
  },
  {
    id: 'accounting',
    name: 'Accounting'
  }
];

// SVG Icon components
const DevIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '40',
  height: '40',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('path', { d: 'M16 18h6' }),
  h('path', { d: 'M2 6h6' }),
  h('path', { d: 'M2 12h18' }),
  h('path', { d: 'M18 6l3 3-3 3' }),
  h('path', { d: 'M6 18l-3-3 3-3' })
]);

const SupportIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '40',
  height: '40',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('path', { d: '19.7 14a6.9 6.9 0 0 0 .3-2V5l-8-3-8 3v7c0 5.2 3.3 10 8 11 1.9-.4 3.6-1.4 5-2.7' }),
  h('path', { d: '14.6 15h1.8a2 2 0 0 1 1.9 2.4l-1 5' }),
  h('path', { d: '5 10h14' }),
  h('path', { d: '21 22l-3-3m0 3 3-3' })
]);

const ManagementIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '40',
  height: '40',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('path', { d: 'M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1' }),
  h('path', { d: 'M16 3h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1' }),
  h('path', { d: 'M2 12h20' }),
  h('path', { d: 'M20 3h2' }),
  h('path', { d: 'M2 3h2' }),
  h('path', { d: 'M7 21h10' }),
  h('path', { d: 'M12 12v9' })
]);

const MarketingIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '40',
  height: '40',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('path', { d: 'M3 3v18h18' }),
  h('path', { d: 'M18.4 9.6a3 3 0 1 1 4.2 4.2L12 22l-8-8 9.8-9.8a3 3 0 1 1 4.4 4.2Z' })
]);

const DesignIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '40',
  height: '40',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('circle', { cx: '6', cy: '12', r: '4' }),
  h('circle', { cx: '18', cy: '12', r: '4' }),
  h('path', { d: 'M14 12h-4' })
]);

const AccountingIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '40',
  height: '40',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('path', { d: 'M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2' }),
  h('rect', { x: '9', y: '3', width: '6', height: '4', rx: '2' }),
  h('path', { d: 'M9 12h6' }),
  h('path', { d: 'M9 16h6' })
]);

// Web Development Icons
const WebDevIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '30',
  height: '30',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('path', { d: 'M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2Z' }),
  h('path', { d: 'M3 10h18' }),
  h('path', { d: 'M8 2v3' }),
  h('path', { d: 'M16 2v3' }),
  h('circle', { cx: '6', cy: '14', r: '1' }),
  h('circle', { cx: '12', cy: '14', r: '1' }),
  h('circle', { cx: '18', cy: '14', r: '1' })
]);

const MobileAppIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '30',
  height: '30',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('rect', { x: '5', y: '2', width: '14', height: '20', rx: '2', ry: '2' }),
  h('path', { d: 'M12 18h.01' })
]);

const BackendIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '30',
  height: '30',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('rect', { x: '2', y: '6', width: '20', height: '12', rx: '2' }),
  h('path', { d: 'M12 12h.01' }),
  h('path', { d: 'M17 12h.01' }),
  h('path', { d: 'M7 12h.01' })
]);

const EcommerceIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '30',
  height: '30',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('circle', { cx: '8', cy: '21', r: '1' }),
  h('circle', { cx: '19', cy: '21', r: '1' }),
  h('path', { d: 'M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12' })
]);

const IntegrationIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '30',
  height: '30',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('path', { d: 'M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3' })
]);

const CustomSoftwareIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '30',
  height: '30',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('path', { d: 'M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h1' }),
  h('path', { d: 'M16 3h1a2 2 0 0 1 2 2v5a2 2 0 0 0 2 2 2 2 0 0 0-2 2v5a2 2 0 0 1-2 2h-1' })
]);

const TechnicalSupportIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '30',
  height: '30',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('path', { d: 'M9.1 9a3 3 0 0 1 5.8 0' }),
  h('path', { d: 'M6.2 10a6 6 0 0 1 11.6 0' }),
  h('path', { d: 'M2 13h6L6 18l1 1' }),
  h('path', { d: 'M22 13h-6l2 5-1 1' }),
  h('path', { d: 'M10 18v3' }),
  h('path', { d: 'M14 18v3' })
]);

const LiveChatIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '30',
  height: '30',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('path', { d: 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z' })
]);

// Video Editing Icon
const VideoEditingIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '30',
  height: '30',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('path', { d: 'M15.6 11.6L22 7v10l-6.4-4.5v-1' }),
  h('rect', { x: '2', y: '6', width: '14', height: '12', rx: '2' }),
  h('path', { d: 'M8 12h0' }),
  h('path', { d: 'M12 10v4' }),
  h('path', { d: 'M10 12h4' })
]);

// UX Design Icon
const UXDesignIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '30',
  height: '30',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('rect', { x: '2', y: '3', width: '20', height: '14', rx: '2', ry: '2' }),
  h('path', { d: 'M8 21h8' }),
  h('path', { d: 'M12 17v4' }),
  h('path', { d: 'M6 14v3' }),
  h('path', { d: 'M18 14v3' })
]);

// SEO Icon
const SEOIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '30',
  height: '30',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('circle', { cx: '11', cy: '11', r: '8' }),
  h('path', { d: 'M21 21l-4.35-4.35' }),
  h('path', { d: 'M11 8v6' }),
  h('path', { d: 'M8 11h6' })
]);

// Social Media Icon
const SocialMediaIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '30',
  height: '30',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('path', { d: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' })
]);

// Logo Design Icon
const LogoDesignIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '30',
  height: '30',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('path', { d: 'M12 22v-5' }),
  h('path', { d: 'M9 7V2' }),
  h('path', { d: 'M15 7V2' }),
  h('path', { d: 'M6 13V8h12v5' }),
  h('path', { d: 'M6 17h12' })
]);

// Content Writing Icon
const ContentWritingIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '30',
  height: '30',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('path', { d: 'M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z' }),
  h('path', { d: 'M15 5l4 4' })
]);

// Main Services - These are the main category cards shown on the "All Services" view
export const mainServices: Service[] = [
  {
    id: 'dev-main',
    slug: 'development',
    title: 'Development Solutions',
    description: 'Custom software solutions to accelerate your business with high-quality web applications, mobile apps, and systems integration.',
    category: 'development',
    featured: true,
    icon: DevIcon,
    features: [
      'Web & Mobile Applications',
      'Software Architecture',
      'Systems Integration',
      'API Development',
      'Full-Stack Solutions'
    ]
  },
  {
    id: 'support-main',
    slug: 'customer-support',
    title: 'Customer Support',
    description: 'Exceptional multilingual customer service that delights your clients across multiple channels 24/7.',
    category: 'support',
    icon: SupportIcon,
    features: [
      '24/7 Technical Support',
      'Multilingual Service',
      'Live Chat, Email & Phone',
      'Ticketing Systems',
      'Customer Experience Management'
    ]
  },
  {
    id: 'management-main',
    slug: 'project-management',
    title: 'Project Management',
    description: 'Maximize results with efficient management and coordination of your projects using agile methodologies.',
    category: 'management',
    icon: ManagementIcon,
    features: [
      'Agile Methodologies',
      'Strategic Planning',
      'Quality Assurance',
      'Detailed Reporting',
      'Resource Allocation'
    ]
  },
  {
    id: 'marketing-main',
    slug: 'marketing',
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies to boost your online presence and drive customer acquisition.',
    category: 'marketing',
    icon: MarketingIcon,
    features: [
      'SEO & Content Marketing',
      'Social Media Management',
      'PPC Campaigns',
      'Email Marketing',
      'Performance Analytics'
    ]
  },
  {
    id: 'design-main',
    slug: 'design',
    title: 'Design & Creative',
    description: 'Eye-catching designs that communicate your brand message and engage your target audience.',
    category: 'design',
    icon: DesignIcon,
    features: [
      'UI/UX Design',
      'Brand Identity',
      'Graphic Design',
      'Video Production',
      'Motion Graphics'
    ]
  },
  {
    id: 'accounting-main',
    slug: 'accounting',
    title: 'Accounting & Finance',
    description: 'Comprehensive financial services to ensure accurate reporting and streamlined operations.',
    category: 'accounting',
    icon: AccountingIcon,
    features: [
      'Bookkeeping',
      'Financial Reporting',
      'Accounts Payable/Receivable',
      'Payroll Management',
      'Tax Preparation'
    ]
  }
];

// Sub-services - These are the specific services within each category
export const subServices: Service[] = [
  // Development Sub-services
  {
    id: 'web-development',
    slug: 'web-development',
    title: 'Web Development',
    shortDescription: 'Custom websites and web applications built with modern technologies.',
    description: 'Expert web development services delivering responsive, high-performance websites and web applications tailored to your business needs.',
    category: 'development',
    highlighted: true,
    icon: WebDevIcon,
    features: [
      'Responsive Design',
      'Progressive Web Apps (PWA)',
      'E-commerce Solutions',
      'CMS Implementation',
      'Performance Optimization'
    ],
    benefits: 'Our web development solutions are engineered for speed, security, and scalability, ensuring your digital presence effectively supports your business goals and delivers exceptional user experiences.',
    process: [
      'Requirements analysis and planning',
      'UI/UX design and prototyping',
      'Development and implementation',
      'Testing and quality assurance',
      'Deployment and ongoing maintenance'
    ]
  },
  {
    id: 'mobile-development',
    slug: 'mobile-development',
    title: 'Mobile App Development',
    shortDescription: 'Native and cross-platform mobile applications for iOS and Android.',
    description: 'End-to-end mobile application development services delivering intuitive, feature-rich apps that engage users and drive business growth.',
    category: 'development',
    highlighted: true,
    icon: MobileAppIcon,
    features: [
      'iOS and Android Development',
      'Cross-platform Solutions',
      'UI/UX Design',
      'API Integration',
      'App Store Optimization'
    ],
    benefits: 'Our mobile solutions combine cutting-edge technology with intuitive user experiences to deliver apps that users love and that achieve your business objectives.',
    process: [
      'Market research and concept development',
      'UI/UX design and wireframing',
      'Development and testing',
      'App store submission',
      'Post-launch support and updates'
    ]
  },
  {
    id: 'backend-development',
    slug: 'backend-development',
    title: 'Backend Development',
    shortDescription: 'Scalable, secure server-side applications and APIs.',
    description: 'Robust backend development services that power your applications with efficient, scalable, and secure server-side solutions.',
    category: 'development',
    icon: BackendIcon,
    features: [
      'API Development',
      'Database Design',
      'Server Architecture',
      'Cloud Integration',
      'Performance Optimization'
    ],
    benefits: 'Our backend solutions ensure your applications run efficiently with optimized performance, security, and the ability to scale as your business grows.',
    process: [
      'System architecture design',
      'Database modeling',
      'API development and documentation',
      'Integration with front-end',
      'Deployment and monitoring'
    ]
  },
  {
    id: 'ecommerce-development',
    slug: 'ecommerce-development',
    title: 'E-commerce Development',
    shortDescription: 'Custom online stores and marketplace solutions.',
    description: 'Comprehensive e-commerce development services to create engaging, conversion-focused online stores that drive sales.',
    category: 'development',
    icon: EcommerceIcon,
    features: [
      'Custom Online Stores',
      'Shopping Cart Development',
      'Payment Gateway Integration',
      'Inventory Management',
      'Mobile Commerce'
    ],
    benefits: 'Our e-commerce solutions combine user-friendly interfaces with robust backend systems to deliver seamless shopping experiences that convert visitors into customers.',
    process: [
      'Business requirements analysis',
      'Platform selection and customization',
      'Design and development',
      'Payment and shipping integration',
      'Testing and launch'
    ]
  },
  {
    id: 'software-integration',
    slug: 'software-integration',
    title: 'Software Integration',
    shortDescription: 'Seamless connection of different applications and systems.',
    description: 'Expert system integration services to connect disparate applications and data sources, creating unified workflows and enhanced efficiency.',
    category: 'development',
    icon: IntegrationIcon,
    features: [
      'API Development',
      'Middleware Solutions',
      'Data Transformation',
      'Legacy System Integration',
      'Cloud Service Integration'
    ],
    benefits: 'Our integration services eliminate data silos and streamline processes, enabling your systems to work together seamlessly and improving overall operational efficiency.',
    process: [
      'Systems analysis and mapping',
      'Integration strategy development',
      'API and connector development',
      'Testing and validation',
      'Deployment and monitoring'
    ]
  },
  {
    id: 'custom-software',
    slug: 'custom-software',
    title: 'Custom Software',
    shortDescription: 'Bespoke software solutions tailored to your business needs.',
    description: 'Tailored software development services that address your unique business challenges with custom-built applications designed for your specific requirements.',
    category: 'development',
    icon: CustomSoftwareIcon,
    features: [
      'Business Process Automation',
      'Workflow Management Systems',
      'Data Analytics Platforms',
      'Customer Relationship Management',
      'Enterprise Resource Planning'
    ],
    benefits: 'Custom software provides competitive advantages by addressing your specific business needs with precision, scalability, and without the limitations of off-the-shelf solutions.',
    process: [
      'Discovery and requirements gathering',
      'Solution architecture and design',
      'Iterative development and feedback',
      'Testing and quality assurance',
      'Deployment and continuous improvement'
    ]
  },

  // Customer Support Sub-services
  {
    id: 'technical-support',
    slug: 'technical-support',
    title: 'Technical Support',
    shortDescription: '24/7 technical assistance for your products and services.',
    description: 'Round-the-clock technical support services to ensure your customers receive expert assistance whenever they need it.',
    category: 'support',
    highlighted: true,
    icon: TechnicalSupportIcon,
    features: [
      '24/7 Support Coverage',
      'Multi-tier Support Levels',
      'Ticket Management',
      'Remote Troubleshooting',
      'Knowledge Base Development'
    ],
    benefits: 'Our technical support teams provide rapid resolution to customer issues, reducing downtime and ensuring satisfaction through expertly managed support processes.',
    process: [
      'Initial assessment and triage',
      'Troubleshooting and resolution',
      'Escalation if needed',
      'Documentation and knowledge base updates',
      'Follow-up and satisfaction verification'
    ]
  },
  {
    id: 'live-chat-support',
    slug: 'live-chat-support',
    title: 'Live Chat Support',
    shortDescription: 'Real-time customer assistance through web chat platforms.',
    description: 'Responsive live chat support services that provide immediate assistance to website visitors and customers through real-time messaging.',
    category: 'support',
    highlighted: true,
    icon: LiveChatIcon,
    features: [
      'Proactive Chat Engagement',
      'Real-time Customer Assistance',
      'Chatbot Integration',
      'Multi-channel Support',
      'Analytics and Reporting'
    ],
    benefits: 'Live chat support increases conversion rates and customer satisfaction by providing immediate assistance at critical decision points in the customer journey.',
    process: [
      'Chat initiation and welcome',
      'Customer need identification',
      'Real-time problem solving',
      'Information provision or escalation',
      'Conversation closure and follow-up'
    ]
  },
  {
    id: 'email-support',
    slug: 'email-support',
    title: 'Email Support',
    shortDescription: 'Comprehensive email-based customer assistance.',
    description: 'Professional email support services providing detailed, personalized responses to customer inquiries and issues via email channels.',
    category: 'support',
    icon: () => h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '30',
      height: '30',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }, [
      h('rect', { x: '2', y: '4', width: '20', height: '16', rx: '2' }),
      h('path', { d: 'M22 7l-10 5-10-5' })
    ]),
    features: [
      'Dedicated Support Team',
      'Consistent Response Times',
      'Detailed Problem Resolution',
      'Personalized Assistance',
      'Email Template Management'
    ],
    benefits: 'Our email support services ensure that your customers receive thorough, well-crafted responses that address their concerns completely, building trust and satisfaction.',
    process: [
      'Receipt and prioritization',
      'Research and solution development',
      'Personalized response creation',
      'Follow-up communications',
      'Resolution verification'
    ]
  },
  {
    id: 'phone-support',
    slug: 'phone-support',
    title: 'Phone Support',
    shortDescription: 'Direct voice assistance for immediate customer needs.',
    description: 'Professional telephone support services providing real-time voice assistance to solve customer issues quickly and effectively.',
    category: 'support',
    icon: () => h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '30',
      height: '30',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }, [
      h('path', { d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' })
    ]),
    features: [
      'Trained Call Center Agents',
      'Multiple Language Support',
      'Call Routing Systems',
      'Quality Monitoring',
      'Call Recording & Analytics'
    ],
    benefits: 'Our phone support services provide the human connection that many customers prefer, ensuring immediate assistance and real-time problem solving for complex issues.',
    process: [
      'Call reception and identification',
      'Issue assessment',
      'Guided troubleshooting',
      'Resolution or escalation',
      'Customer satisfaction verification'
    ]
  },

  // Design Sub-services
  {
    id: 'ux-ui-design',
    slug: 'ux-ui-design',
    title: 'UX/UI Design',
    shortDescription: 'User-centered design for intuitive digital experiences.',
    description: 'Comprehensive UX/UI design services that create intuitive, engaging, and accessible digital experiences that users love.',
    category: 'design',
    highlighted: true,
    icon: UXDesignIcon,
    features: [
      'User Research & Testing',
      'Information Architecture',
      'Wireframing & Prototyping',
      'Visual Design',
      'Accessibility Implementation'
    ],
    benefits: 'Our UX/UI design services create digital experiences that are not only visually appealing but also intuitive and efficient, leading to higher user satisfaction and conversion rates.',
    process: [
      'User research and persona development',
      'Information architecture planning',
      'Low and high-fidelity wireframing',
      'Visual design and prototyping',
      'Usability testing and refinement'
    ]
  },
  {
    id: 'video-editing',
    slug: 'video-editing',
    title: 'Video Editing',
    shortDescription: 'Professional video production and post-processing services.',
    description: 'Expert video editing and production services that transform raw footage into compelling, professional-quality video content for marketing, education, or entertainment purposes.',
    category: 'design',
    highlighted: true,
    icon: VideoEditingIcon,
    features: [
      'Professional Editing & Cuts',
      'Color Grading & Correction',
      'Motion Graphics & Effects',
      'Sound Design & Mixing',
      'Format Optimization'
    ],
    benefits: 'Our video editing services elevate your raw footage into polished, professional content that engages viewers, conveys your message effectively, and represents your brand with quality and consistency.',
    process: [
      'Content review and planning',
      'Rough cut assembly',
      'Fine editing and enhancement',
      'Graphics and audio integration',
      'Review, revision, and final delivery'
    ]
  },
  {
    id: 'logo-design',
    slug: 'logo-design',
    title: 'Logo Design',
    shortDescription: 'Memorable brand identities that set you apart from competitors.',
    description: 'Creative logo design services that develop distinctive, meaningful brand marks that represent your business and resonate with your target audience.',
    category: 'design',
    icon: LogoDesignIcon,
    features: [
      'Market & Competitor Research',
      'Concept Development',
      'Color Psychology Implementation',
      'Multiple Iterations & Formats',
      'Brand Guidelines Documentation'
    ],
    benefits: 'Our logo design services create the cornerstone of your visual identity, ensuring your brand is immediately recognizable, memorable, and effectively communicates your values.',
    process: [
      'Discovery and research',
      'Concept development',
      'Design refinement',
      'Client feedback and iterations',
      'Finalization and file preparation'
    ]
  },
  {
    id: 'graphic-design',
    slug: 'graphic-design',
    title: 'Graphic Design',
    shortDescription: 'Visual content that communicates your message effectively.',
    description: 'Professional graphic design services that create visually compelling materials for print, digital, and social media applications.',
    category: 'design',
    icon: () => h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '30',
      height: '30',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }, [
      h('path', { d: 'M12 3v18' }),
      h('rect', { x: '4', y: '4', width: '16', height: '6', rx: '2' }),
      h('rect', { x: '4', y: '14', width: '16', height: '6', rx: '2' })
    ]),
    features: [
      'Print & Digital Design',
      'Branding Materials',
      'Marketing Collateral',
      'Social Media Graphics',
      'Presentation Design'
    ],
    benefits: 'Our graphic design services ensure consistent, professional visual communication across all touchpoints, strengthening your brand and effectively conveying your message to your audience.',
    process: [
      'Project briefing and goal setting',
      'Concept development',
      'Design creation',
      'Review and revisions',
      'Final delivery in appropriate formats'
    ]
  },
  {
    id: 'motion-graphics',
    slug: 'motion-graphics',
    title: 'Motion Graphics',
    shortDescription: 'Animated visual elements that bring your content to life.',
    description: 'Creative motion graphics services that bring static elements to life through animation, adding visual interest and improving engagement with your content.',
    category: 'design',
    icon: () => h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '30',
      height: '30',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }, [
      h('path', { d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z' }),
      h('polyline', { points: '14 2 14 8 20 8' }),
      h('path', { d: 'M12 18v-6' }),
      h('path', { d: 'M8 18v-1' }),
      h('path', { d: 'M16 18v-3' })
    ]),
    features: [
      '2D & 3D Animation',
      'Explainer Videos',
      'Logo Animation',
      'Infographic Animation',
      'Social Media Motion Graphics'
    ],
    benefits: 'Our motion graphics services transform static content into dynamic visual experiences that capture attention, improve retention, and make complex information more digestible.',
    process: [
      'Concept development',
      'Storyboarding',
      'Style frame creation',
      'Animation and timing',
      'Sound design and finalization'
    ]
  },

  // Marketing Sub-services
  {
    id: 'seo-services',
    slug: 'seo-services',
    title: 'SEO Services',
    shortDescription: 'Improve your website visibility and organic search rankings.',
    description: 'Comprehensive SEO services to boost your website\'s visibility in search engines and drive targeted organic traffic to your business.',
    category: 'marketing',
    highlighted: true,
    icon: SEOIcon,
    features: [
      'Keyword Research & Strategy',
      'On-Page SEO Optimization',
      'Technical SEO Audits',
      'Content Optimization',
      'Link Building Campaigns'
    ],
    benefits: 'Our SEO services help you gain visibility where it matters most, driving qualified traffic to your website and increasing your online presence in a sustainable, algorithm-friendly way.',
    process: [
      'Comprehensive website audit',
      'Keyword research and competitive analysis',
      'Strategy development',
      'On-page and technical optimization',
      'Regular performance reporting'
    ]
  },
  {
    id: 'social-media-marketing',
    slug: 'social-media-marketing',
    title: 'Social Media Marketing',
    shortDescription: 'Engage your audience and build brand presence across social platforms.',
    description: 'Strategic social media marketing services that help your brand build meaningful connections with your audience and drive measurable business results.',
    category: 'marketing',
    icon: SocialMediaIcon,
    features: [
      'Platform Strategy Development',
      'Content Creation & Curation',
      'Community Management',
      'Paid Social Campaigns',
      'Performance Analytics'
    ],
    benefits: 'Our social media marketing services build authentic connections with your audience, increase brand visibility, and create engaged communities that support your business growth.',
    process: [
      'Social media audit',
      'Strategy and content planning',
      'Content creation and scheduling',
      'Community engagement',
      'Analytics and optimization'
    ]
  },
  {
    id: 'content-marketing',
    slug: 'content-marketing',
    title: 'Content Marketing',
    shortDescription: 'Valuable content that attracts and engages your target audience.',
    description: 'Strategic content marketing services that create and distribute valuable, relevant content to attract, engage, and convert your target audience.',
    category: 'marketing',
    highlighted: true,
    icon: ContentWritingIcon,
    features: [
      'Content Strategy Development',
      'Blog & Article Writing',
      'Ebook & Whitepaper Creation',
      'Video & Podcast Content',
      'Content Distribution'
    ],
    benefits: 'Our content marketing services establish your brand as an industry authority, build trust with your audience, and create a sustainable pipeline of engaged prospects.',
    process: [
      'Audience and competitor research',
      'Content strategy development',
      'Content calendar planning',
      'Content creation and publishing',
      'Performance measurement and optimization'
    ]
  },
  {
    id: 'ppc-advertising',
    slug: 'ppc-advertising',
    title: 'PPC Advertising',
    shortDescription: 'Targeted paid campaigns that deliver immediate visibility and conversions.',
    description: 'Data-driven PPC advertising services that create and manage targeted paid campaigns across search, social, and display networks to drive traffic and conversions.',
    category: 'marketing',
    icon: () => h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '30',
      height: '30',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }, [
      h('circle', { cx: '12', cy: '12', r: '10' }),
      h('path', { d: 'M12 6v6l4 2' }),
      h('path', { d: 'M5 3L2 6' }),
      h('path', { d: 'M22 6l-3-3' }),
      h('path', { d: 'M6 19l-2 2' }),
      h('path', { d: 'M18 19l2 2' })
    ]),
    features: [
      'Google Ads Management',
      'Social Media Advertising',
      'Display & Remarketing',
      'Landing Page Optimization',
      'Conversion Tracking & Analytics'
    ],
    benefits: 'Our PPC advertising services deliver immediate visibility and targeted traffic, providing measurable ROI through campaigns optimized for your specific business goals.',
    process: [
      'Account setup and keyword research',
      'Campaign structure development',
      'Ad creation and landing page optimization',
      'Bid management and campaign monitoring',
      'Performance analysis and optimization'
    ]
  },

  // Management Sub-services
  {
    id: 'agile-project-management',
    slug: 'agile-project-management',
    title: 'Agile Project Management',
    shortDescription: 'Flexible, iterative approach to managing complex projects.',
    description: 'Expert agile project management services that use iterative development, team collaboration, and customer feedback to deliver projects efficiently and adaptively.',
    category: 'management',
    highlighted: true,
    icon: () => h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '30',
      height: '30',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }, [
      h('rect', { x: '3', y: '3', width: '18', height: '18', rx: '2' }),
      h('path', { d: 'M3 9h18' }),
      h('path', { d: 'M9 21V9' }),
      h('path', { d: 'M15 12l-3 3-3-3' })
    ]),
    features: [
      'Scrum & Kanban Methodologies',
      'Sprint Planning & Execution',
      'Daily Stand-ups & Retrospectives',
      'Continuous Integration',
      'Stakeholder Collaboration'
    ],
    benefits: 'Our agile project management services increase project transparency, adaptability, and stakeholder satisfaction through iterative development and continuous improvement.',
    process: [
      'Project kickoff and team formation',
      'Backlog creation and prioritization',
      'Sprint planning and execution',
      'Continuous review and adaptation',
      'Project delivery and retrospective'
    ]
  },
  {
    id: 'quality-assurance',
    slug: 'quality-assurance',
    title: 'Quality Assurance',
    shortDescription: 'Comprehensive testing and quality control for flawless deliverables.',
    description: 'Thorough quality assurance services that implement testing methodologies and quality control processes to ensure the reliability and performance of your products.',
    category: 'management',
    icon: () => h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '30',
      height: '30',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }, [
      h('path', { d: 'M9 12l2 2 4-4' }),
      h('path', { d: 'M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7z' })
    ]),
    features: [
      'Manual & Automated Testing',
      'Performance Testing',
      'Security Testing',
      'Usability Testing',
      'Regression Testing'
    ],
    benefits: 'Our quality assurance services identify and address issues early in the development process, reducing costs and ensuring your products meet the highest standards.',
    process: [
      'Test planning and strategy development',
      'Test case creation',
      'Test execution',
      'Defect tracking and resolution',
      'Regression testing and reporting'
    ]
  },

  // Accounting Sub-services
  {
    id: 'bookkeeping',
    slug: 'bookkeeping',
    title: 'Bookkeeping',
    shortDescription: 'Accurate financial record-keeping for your business.',
    description: 'Professional bookkeeping services that maintain accurate, up-to-date financial records, ensuring your business stays financially organized and compliant.',
    category: 'accounting',
    highlighted: true,
    icon: () => h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '30',
      height: '30',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }, [
      h('path', { d: 'M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20' }),
      h('path', { d: 'M12 12h4' }),
      h('path', { d: 'M12 16h4' }),
      h('path', { d: 'M8 12h.01' }),
      h('path', { d: 'M8 16h.01' })
    ]),
    features: [
      'Transaction Recording & Categorization',
      'Bank Reconciliation',
      'Financial Statement Preparation',
      'Accounts Payable/Receivable',
      'Month-End Close Process'
    ],
    benefits: 'Our bookkeeping services ensure your financial records are accurate and up-to-date, providing you with the reliable financial information you need to make informed business decisions.',
    process: [
      'Initial assessment and setup',
      'Regular transaction processing',
      'Account reconciliation',
      'Financial statement preparation',
      'Period-end review and reporting'
    ]
  },
  {
    id: 'tax-preparation',
    slug: 'tax-preparation',
    title: 'Tax Preparation',
    shortDescription: 'Comprehensive tax services for compliance and optimization.',
    description: 'Expert tax preparation services that ensure compliance with tax laws while identifying opportunities to minimize your tax burden legally.',
    category: 'accounting',
    icon: () => h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '30',
      height: '30',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }, [
      h('rect', { x: '2', y: '4', width: '20', height: '16', rx: '2' }),
      h('path', { d: 'M6 8h.01' }),
      h('path', { d: 'M6 12h.01' }),
      h('path', { d: 'M6 16h.01' }),
      h('path', { d: 'M12 8h6' }),
      h('path', { d: 'M12 12h6' }),
      h('path', { d: 'M12 16h6' })
    ]),
    features: [
      'Individual & Business Tax Returns',
      'Tax Planning & Strategies',
      'Tax Credit Identification',
      'IRS Representation',
      'State & Local Tax Compliance'
    ],
    benefits: 'Our tax preparation services ensure compliance with all applicable tax laws while identifying legal strategies to minimize your tax burden and avoid costly penalties.',
    process: [
      'Tax information gathering',
      'Review of financial documents',
      'Tax strategy development',
      'Return preparation and review',
      'Filing and post-filing support'
    ]
  }
];
