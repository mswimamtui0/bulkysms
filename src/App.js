import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [activeFaq, setActiveFaq] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [expandedPost, setExpandedPost] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => setLanguage(prev => (prev === 'en' ? 'sw' : 'en'));
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  const toggleFaq = (index) => setActiveFaq(activeFaq === index ? null : index);
  const toggleBlogPost = (id) => setExpandedPost(expandedPost === id ? null : id);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ============================================================
  // TRANSLATIONS (Privacy & Terms as blog‑style sections)
  // ============================================================
  const t = {
    en: {
      nav: {
        services: 'Services',
        pricing: 'Pricing',
        testimonials: 'Testimonials',
        blog: 'Blog',
        contact: 'Contact',
        help: 'Help',
        contactUs: 'Contact Us'
      },
      hero: {
        badge: 'SMS & WhatsApp Platform Tanzania',
        title: 'Deliver Your Messages.',
        titleGold: 'Grow Your Business.',
        subtitle: 'Reach more customers with our powerful Bulk SMS platform. Send OTPs via SMS & WhatsApp.',
        stats: [
          { label: 'Networks', value: '5+' },
          { label: 'Mobile Users', value: '60M+' },
          { label: 'Delivery Rate', value: '98%' }
        ],
        cta: 'Get Started Today',
        cta2: 'View Pricing',
        card: {
          networks: 'Mobile Networks',
          users: 'Mobile Users',
          speed: 'Delivery Speed',
          rate: 'Delivery Rate'
        },
        note: 'Enterprise-grade reliability across all networks'
      },
      whyChoose: {
        label: 'Why Bulkysms',
        title: 'Built for ',
        titleGold: 'Business Communication',
        subtitle: 'Reliable, compliant, and easy to use — all from one account.',
        features: [
          { title: 'Dedicated Support', desc: 'Our team is committed to helping you get your messages delivered.' },
          { title: 'Reliable Delivery', desc: 'We route your messages through the most reliable pathways available.' },
          { title: 'Clear Compliance', desc: 'Easy access to regional regulations and industry best practices.' },
          { title: 'One Account Access', desc: 'Access all our SMS and WhatsApp solutions with a single account.' }
        ]
      },
      services: {
        label: 'Solutions',
        title: 'Our ',
        titleGold: 'Messaging Services',
        subtitle: 'Reach your customers anywhere in Tanzania through the channels they prefer.',
        list: [
          { title: 'Internet SMS', desc: 'Send messages directly to mobile phones via our network. Custom sender IDs and real-time tracking.', features: ['All Tanzania Networks', 'Custom Sender ID', 'API Integration', 'Delivery Reports'] },
          { title: 'WhatsApp Business', desc: 'Connect with customers on WhatsApp. Send notifications, promotions, and updates with official templates.', features: ['Reach Customers', 'Template Management', 'Multi-Account', 'Automated Campaigns'] },
          { title: 'SIM-Based SMS', desc: 'Use your own SIM cards for cost-effective messaging. Perfect for local campaigns.', features: ['Flat Rate', 'Multi-SIM', 'Two-Way Communication', 'Mobile App Sync'] },
          { title: 'AI Chatbot Assistant', desc: 'Automate customer interactions on WhatsApp. Capture leads and process orders without coding.', features: ['No-Code Builder', '24/7 Availability', 'Lead Generation', 'Order Processing'] }
        ]
      },
      networks: {
        label: 'Tanzania Coverage',
        title: 'We Connect to ',
        titleGold: 'All Networks',
        subtitle: 'Reliable coverage across Tanzania.',
        list: ['Vodacom Tanzania', 'Airtel Tanzania', 'Tigo Tanzania', 'Halotel', 'TTCL', 'Zantel']
      },
      pricing: {
        label: 'Pricing',
        title: 'Simple, ',
        titleGold: 'Transparent Plans',
        subtitle: 'Competitive rates with volume discounts. Choose what fits your business.',
        plans: [
          { name: 'Internet SMS', price: 'TSh 16', sub: '/ msg', desc: 'Volume-based pricing for local delivery', features: ['1 to 5,000: TSh 16', '5,001 to 50,000: TSh 15', '50,001 to 100,000: TSh 14', '100,001 to 500,000: TSh 13', '500,001+: TSh 12'], featured: false },
          { name: 'SIM-Based SMS', price: 'TSh 5', sub: 'flat rate', desc: 'Global coverage using your SIM cards', features: ['One flat rate', 'Two-way communication', 'Multi-SIM management', 'API ready'], featured: true, note: 'SIM carrier subscription required' },
          { name: 'WhatsApp SMS', price: 'TSh 12', sub: 'flat rate', desc: 'Global reach with Meta integration', features: ['Multi-account', 'Template management', 'Automated campaigns', 'Analytics dashboard'], featured: false, note: 'Additional Meta fees may apply' }
        ],
        note: 'All prices in TSh. Enterprise discounts available for high-volume clients.'
      },
      testimonials: {
        label: 'Testimonials',
        title: 'What Our ',
        titleGold: 'Clients Say',
        subtitle: 'Real feedback from businesses that trust Bulkysms.',
        list: [
          { stars: 5, text: '"Reliable delivery and excellent support. Bulkysms has been a game-changer for our customer communication."', name: 'Steven Matiku', role: 'ECOWATER International' },
          { stars: 5, text: '"Great value for money. The platform is intuitive and the delivery rates are outstanding."', name: 'David Demetry', role: 'BUSBORA Tanzania' },
          { stars: 5, text: '"The support team is responsive and the platform consistently delivers our messages on time."', name: 'Philipo Lubuva', role: 'Tanganyika Law Society' }
        ]
      },
      howItWorks: {
        label: 'How It Works',
        title: 'Get Started in ',
        titleGold: '4 Simple Steps',
        subtitle: 'We make it easy for you to start communicating with your customers.',
        steps: [
          { title: 'Contact Us', desc: 'Reach out via phone, WhatsApp, or our contact form' },
          { title: 'We Discuss Your Needs', desc: 'Our team listens and recommends the best solution' },
          { title: 'We Set You Up', desc: 'We handle the technical setup for your account' },
          { title: 'Start Sending', desc: 'You begin sending messages to your customers' }
        ]
      },
      whyUs: {
        label: 'Why Choose Us',
        title: 'We Make ',
        titleGold: 'Communication Easy',
        subtitle: "Here's why businesses in Tanzania trust Bulkysms.",
        reasons: [
          { title: 'Free Consultation', desc: 'We take time to understand your business needs' },
          { title: 'We Handle Setup', desc: 'We set everything up so you can start immediately' },
          { title: 'Ongoing Support', desc: 'Our team is always available to help you' },
          { title: 'Best Rates', desc: 'Competitive pricing for businesses in Tanzania' }
        ]
      },
      blog: {
        label: 'Blog',
        title: 'Latest ',
        titleGold: 'Blog Posts',
        subtitle: 'Expert tips, guides, and insights to help you grow your business with SMS and WhatsApp marketing.',
        categories: ['All', 'Marketing Tips', 'WhatsApp Business', 'Sales Strategies', 'Security'],
        posts: [
          {
            title: 'Why Bulk SMS is the Most Effective Marketing Channel in Tanzania',
            excerpt: 'Discover why businesses across Tanzania are choosing bulk SMS over social media and email to reach their customers instantly.',
            content: 'In today\'s fast-paced digital world, businesses need to communicate with customers quickly and effectively. Bulk SMS offers an unparalleled 98% open rate compared to email\'s 20%. For Tanzanian businesses, SMS is particularly effective because of high mobile phone penetration (over 60 million subscribers) and reliable network coverage across all regions, from Dar es Salaam to rural areas.',
            category: 'Marketing Tips',
            date: 'August 9, 2026',
            author: 'Bulkysms Team',
            readTime: '5 min read'
          },
          {
            title: 'WhatsApp Business vs. SMS: Which is Better for Tanzanian Businesses?',
            excerpt: 'Compare WhatsApp Business and traditional SMS to determine the best communication channel for your business in Tanzania.',
            content: 'Both WhatsApp Business and SMS have unique strengths. SMS is available on every phone, including feature phones, making it the most accessible option. WhatsApp Business offers rich media but requires smartphones. For time-sensitive notifications like OTPs and payment reminders, SMS is more reliable. For customer engagement and support, WhatsApp Business offers a richer experience. Many Tanzanian businesses use both channels.',
            category: 'WhatsApp Business',
            date: 'August 8, 2026',
            author: 'Bulkysms Team',
            readTime: '7 min read'
          },
          {
            title: 'How to Boost Sales by 40% with SMS Marketing in Tanzania',
            excerpt: 'Learn proven strategies to increase your sales using targeted SMS campaigns that convert customers into loyal buyers.',
            content: 'SMS marketing has proven to be one of the most effective sales channels in Tanzania. This guide covers segmentation, timing, and crafting messages that convert. Research shows that personalized SMS messages have a 45% response rate. By segmenting your audience and sending targeted offers, you can significantly increase your conversion rates and build lasting customer relationships.',
            category: 'Sales Strategies',
            date: 'August 7, 2026',
            author: 'Bulkysms Team',
            readTime: '6 min read'
          },
          {
            title: 'OTP Delivery: Why Tanzanian Businesses Need Secure Authentication',
            excerpt: 'Learn why One-Time Password (OTP) delivery via SMS is essential for securing your customers\' accounts in Tanzania.',
            content: 'Cyber threats are on the rise in Tanzania. OTP delivery via SMS provides an additional layer of security that protects both your business and your customers. With mobile money transactions growing rapidly across the country, securing your authentication flow is essential. It builds trust and reduces the risk of unauthorized access to sensitive data.',
            category: 'Security',
            date: 'August 6, 2026',
            author: 'Bulkysms Team',
            readTime: '4 min read'
          }
        ],
        newsletter: {
          title: 'Subscribe to Our Newsletter',
          desc: 'Get the latest SMS marketing tips and updates delivered to your inbox.',
          placeholder: 'Enter your email',
          button: 'Subscribe',
          cta: 'Contact Our Team'
        }
      },
      faq: {
        label: 'FAQ',
        title: 'Frequently ',
        titleGold: 'Asked Questions',
        subtitle: 'Everything you need to know about Bulkysms.',
        list: [
          { q: 'What is Bulkysms?', a: 'Bulkysms is a business messaging platform that allows you to send SMS and WhatsApp messages to customers worldwide. We provide reliable delivery across all networks in Tanzania.' },
          { q: 'How do I send messages?', a: 'Simply upload your contact list, compose your message, and send. The platform handles delivery and provides real-time reports on delivery status.' },
          { q: 'Can I integrate Bulkysms with my systems?', a: 'Yes, we offer a comprehensive REST API that enables integration with your CRM, ERP, or any custom application. Documentation is available to help you get started quickly.' },
          { q: 'What support do you provide?', a: 'We offer dedicated support via email and phone. Enterprise clients receive priority support and account management.' },
          { q: 'Is my data secure?', a: 'Yes, we use encryption and follow industry best practices to protect your data. Our systems are regularly audited for security compliance.' }
        ]
      },
      about: {
        label: 'About Us',
        title: 'Who ',
        titleGold: 'We Are',
        subtitle: 'Bulkysms is a trusted messaging platform serving businesses across Tanzania and beyond.',
        text: `Bulkysms was founded with a clear mission: to simplify business communication in Tanzania and make it accessible, reliable, and affordable for every organisation. We understand that in today's competitive landscape, staying connected with customers, partners, and employees is not just an advantage — it's a necessity.

Our platform combines powerful SMS and WhatsApp messaging tools, designed specifically for the Tanzanian market. We have invested heavily in local infrastructure, partnering with all major mobile network operators (Vodacom, Airtel, Tigo, Halotel, TTCL, and Zantel) to ensure that your messages reach their destination instantly, even in the most remote areas.

What sets us apart is our commitment to customer success. Our team of experts works closely with businesses of all sizes — from micro-enterprises to large corporations — to tailor solutions that fit their unique needs. Whether you need to send payment reminders, promotional offers, OTPs, or critical alerts, we make it simple and cost-effective.

Beyond technology, we pride ourselves on transparency and ethics. We operate with a clear code of conduct, ensuring that your data is secure and your communications comply with local and international regulations. We believe that business growth should go hand in hand with integrity and social responsibility.

Join the hundreds of businesses that already trust Bulkysms to power their communication. Let us help you build stronger relationships, drive engagement, and achieve your goals.`
      },
      careers: {
        label: 'Careers',
        title: 'Join Our ',
        titleGold: 'Team',
        subtitle: 'We\'re always looking for talented people to help us build the future of business messaging.',
        text: `At Bulkysms, we believe that our people are our greatest asset. We are a dynamic, fast-growing company that values innovation, creativity, and a passion for technology. If you are looking for a place where you can make a real impact, grow professionally, and work with a supportive team, we would love to hear from you.

We currently have no open positions, but we are always interested in meeting exceptional individuals who share our vision. We encourage you to send your CV and a brief cover letter to our HR team at careers@bulkysms.com. We will keep your details on file and reach out when a suitable opportunity arises.

In the meantime, we invite you to follow our company page on social media to stay updated on new job openings, company news, and industry insights. We are committed to building a diverse and inclusive workplace where everyone can thrive.

Thank you for your interest in joining Bulkysms. We look forward to potentially working with you in the future.`
      },
      privacy: {
        label: 'Privacy Policy',
        title: 'Privacy ',
        titleGold: 'Policy',
        subtitle: 'Your data is safe with us.',
        sections: [
          { type: 'heading', text: 'Our Commitment to Privacy' },
          { type: 'paragraph', text: 'At Bulkysms, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully to understand our views and practices regarding your personal data and how we will treat it.' },
          { type: 'heading', text: 'Information We Collect' },
          { type: 'paragraph', text: 'We may collect and process the following data about you: information you provide by filling in forms on our site (e.g., name, email address, phone number), details of your visits to our site and the resources that you access, if you contact us we may keep a record of that correspondence, and technical data such as your IP address, browser type, and operating system.' },
          { type: 'heading', text: 'How We Use Your Information' },
          { type: 'paragraph', text: 'We use your information to provide you with the services you request, improve our website and services, send you promotional communications (only with your consent), and comply with legal obligations.' },
          { type: 'heading', text: 'Data Security' },
          { type: 'paragraph', text: 'We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. All data is encrypted in transit using SSL/TLS protocols, and our servers are protected by firewalls and other security technologies.' },
          { type: 'heading', text: 'Data Sharing' },
          { type: 'paragraph', text: 'We do not sell, trade, or rent your personal identification information to third parties. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers for the purposes outlined above.' },
          { type: 'heading', text: 'Cookies' },
          { type: 'paragraph', text: 'Our site uses cookies to distinguish you from other users and to provide you with a better experience. You can set your browser to refuse cookies, but this may limit some functionalities.' },
          { type: 'heading', text: 'Your Rights' },
          { type: 'paragraph', text: 'You have the right to request access to, correction of, or deletion of your personal data. You can also object to processing or request restriction. To exercise any of these rights, please contact us at info@bulkysms.com.' },
          { type: 'heading', text: 'Changes to This Policy' },
          { type: 'paragraph', text: 'We may update this policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically. By using our services, you consent to the collection and use of your information as described in this policy. If you have any questions about this Privacy Policy, please contact us.' }
        ]
      },
      terms: {
        label: 'Terms of Service',
        title: 'Terms of ',
        titleGold: 'Service',
        subtitle: 'By using Bulkysms, you agree to our terms.',
        sections: [
          { type: 'heading', text: 'Acceptance of Terms' },
          { type: 'paragraph', text: 'By using Bulkysms, you confirm that you are at least 18 years old and have the legal capacity to enter into a binding agreement. You also agree to comply with all applicable laws and regulations.' },
          { type: 'heading', text: 'Description of Services' },
          { type: 'paragraph', text: 'Bulkysms provides messaging services, including SMS and WhatsApp messaging, to businesses. We offer a range of plans and features, all of which are subject to change without prior notice.' },
          { type: 'heading', text: 'User Obligations' },
          { type: 'paragraph', text: 'You agree to use the services only for lawful purposes, not to send spam, fraudulent, or malicious content, not to attempt to gain unauthorised access to our systems, and to provide accurate and complete information when registering.' },
          { type: 'heading', text: 'Fees and Payment' },
          { type: 'paragraph', text: 'Charges for our services are clearly stated on our pricing page. You agree to pay all fees in accordance with the selected plan. Payments are non-refundable except as required by law.' },
          { type: 'heading', text: 'Intellectual Property' },
          { type: 'paragraph', text: 'All content on this site, including text, graphics, logos, and software, is the property of Bulkysms and protected by copyright laws. You may not reproduce, distribute, or create derivative works without our express permission.' },
          { type: 'heading', text: 'Limitation of Liability' },
          { type: 'paragraph', text: 'Bulkysms provides services "as is" without warranties of any kind. We shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.' },
          { type: 'heading', text: 'Termination' },
          { type: 'paragraph', text: 'We reserve the right to suspend or terminate your account if you violate these terms. You may also terminate your account at any time by contacting us.' },
          { type: 'heading', text: 'Changes to Terms' },
          { type: 'paragraph', text: 'We may revise these terms at any time. Your continued use of the services constitutes acceptance of the updated terms.' },
          { type: 'heading', text: 'Governing Law' },
          { type: 'paragraph', text: 'These terms are governed by the laws of the United Republic of Tanzania.' },
          { type: 'heading', text: 'Contact' },
          { type: 'paragraph', text: 'If you have any questions about these Terms of Service, please contact us at info@bulkysms.com.' }
        ]
      },
      contact: {
        label: 'Contact Us',
        title: 'Get in ',
        titleGold: 'Touch',
        subtitle: 'Reach out to our team and we\'ll help you get started.',
        info: {
          phone: 'Phone',
          whatsapp: 'WhatsApp',
          email: 'Email',
          office: 'Office',
          hours: 'Working Hours'
        },
        hours: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM'],
        form: {
          title: 'Send Us a Message',
          subtitle: 'We\'ll respond within 24 hours',
          name: 'Your Name',
          phone: 'Phone Number',
          email: 'Email Address',
          message: 'Tell us about your needs...',
          button: 'Send Message'
        },
        social: 'Follow Us'
      },
      footer: {
        brand: 'Dar es Salaam, Tanzania',
        brandDesc: 'SMS and WhatsApp solutions for businesses.',
        solutions: 'Solutions',
        company: 'Company',
        support: 'Support',
        copyright: '© 2026 Bulkysms. All rights reserved. Crafted with precision in Tanzania.'
      },
      whatsapp: 'Chat with us'
    },
    sw: {
      nav: {
        services: 'Huduma',
        pricing: 'Bei',
        testimonials: 'Maoni',
        blog: 'Blogu',
        contact: 'Wasiliana',
        help: 'Msaada',
        contactUs: 'Wasiliana Nasi'
      },
      hero: {
        badge: 'Jukwaa la SMS & WhatsApp Tanzania',
        title: 'Wasiliana na Wateja Wako.',
        titleGold: 'Kua Biashara Yako.',
        subtitle: 'Fikia wateja zaidi kwa jukwaa letu la SMS. Tuma OTPs kwa SMS na WhatsApp.',
        stats: [
          { label: 'Mitandao', value: '5+' },
          { label: 'Watumiaji', value: '60M+' },
          { label: 'Uwasilishaji', value: '98%' }
        ],
        cta: 'Anza Sasa',
        cta2: 'Tazama Bei',
        card: {
          networks: 'Mitandao',
          users: 'Watumiaji',
          speed: 'Kasi',
          rate: 'Kiwango'
        },
        note: 'Uaminifu wa kiwango cha biashara'
      },
      whyChoose: {
        label: 'Kwa Nini Bulkysms',
        title: 'Imeundwa kwa ',
        titleGold: 'Mawasiliano ya Biashara',
        subtitle: 'Inaaminika, inazingatia sheria, na rahisi kutumia — yote kwa akaunti moja.',
        features: [
          { title: 'Msaada wa Moja kwa Moja', desc: 'Timu yetu imejitolea kukusaidia.' },
          { title: 'Uwasilishaji wa Kuaminika', desc: 'Tunapeleka ujumbe wako kwa njia bora.' },
          { title: 'Kufuata Sheria', desc: 'Ufikiaji rahisi wa kanuni.' },
          { title: 'Akaunti Moja', desc: 'Fikia suluhisho zote kwa akaunti moja.' }
        ]
      },
      services: {
        label: 'Suluhisho',
        title: 'Huduma Zetu za ',
        titleGold: 'Ujumbe',
        subtitle: 'Fikia wateja wako popote Tanzania.',
        list: [
          { title: 'SMS Mtandao', desc: 'Tuma ujumbe kwenye simu za mkononi. Namba yako mwenyewe na ufuatiliaji.', features: ['Mitandao yote Tanzania', 'Namba yako', 'API', 'Ripoti'] },
          { title: 'WhatsApp Biashara', desc: 'Ungana na wateja kwenye WhatsApp. Tuma notisi na matangazo.', features: ['Fikia wateja', 'Usimamizi wa templates', 'Akaunti nyingi', 'Kampeni otomatiki'] },
          { title: 'SMS Simu', desc: 'Tumia SIM kadi yako kwa ujumbe wa gharama nafuu.', features: ['Bei moja', 'SIM nyingi', 'Mawasiliano pande mbili', 'Sawazisha na programu'] },
          { title: 'Msaidizi wa AI', desc: 'Otomatiki mwingiliano wa wateja kwenye WhatsApp.', features: ['Jenga bila programu', 'Inapatikana 24/7', 'Kukamata wateja', 'Kuchakata maagizo'] }
        ]
      },
      networks: {
        label: 'Ufikiaji Tanzania',
        title: 'Tunaungana na ',
        titleGold: 'Mitandao Yote',
        subtitle: 'Ufikiaji wa kuaminika kote nchini.',
        list: ['Vodacom Tanzania', 'Airtel Tanzania', 'Tigo Tanzania', 'Halotel', 'TTCL', 'Zantel']
      },
      pricing: {
        label: 'Bei',
        title: 'Bei ',
        titleGold: 'Rahisi na Wazi',
        subtitle: 'Bei zinazoshindana na punguzo kulingana na kiasi.',
        plans: [
          { name: 'SMS Mtandao', price: 'TSh 16', sub: '/ ujumbe', desc: 'Bei kulingana na kiasi', features: ['1 hadi 5,000: TSh 16', '5,001 hadi 50,000: TSh 15', '50,001 hadi 100,000: TSh 14', '100,001 hadi 500,000: TSh 13', '500,001+: TSh 12'], featured: false },
          { name: 'SMS Simu', price: 'TSh 5', sub: 'bei moja', desc: 'Ufikiaji wa kimataifa kwa SIM kadi zako', features: ['Bei moja', 'Mawasiliano pande mbili', 'Usimamizi wa SIM nyingi', 'API tayari'], featured: true, note: 'Inahitaji usajili wa SMS wa SIM' },
          { name: 'WhatsApp SMS', price: 'TSh 12', sub: 'bei moja', desc: 'Ufikiaji wa kimataifa kwa Meta', features: ['Akaunti nyingi', 'Usimamizi wa templates', 'Kampeni otomatiki', 'Dashibodi'], featured: false, note: 'Ada za Meta zinaweza kutumika' }
        ],
        note: 'Bei zote ni TSh. Punguzo kwa wateja wa kiwango cha juu.'
      },
      testimonials: {
        label: 'Maoni',
        title: 'Wateja Wetu ',
        titleGold: 'Wanasema',
        subtitle: 'Maoni halisi kutoka kwa biashara.',
        list: [
          { stars: 5, text: '"Uwasilishaji wa kuaminika na msaada bora. Bulkysms imebadilisha mawasiliano yetu."', name: 'Steven Matiku', role: 'ECOWATER International' },
          { stars: 5, text: '"Thamani nzuri kwa pesa. Jukwaa ni rahisi kutumia na viwango vya uwasilishaji ni bora."', name: 'David Demetry', role: 'BUSBORA Tanzania' },
          { stars: 5, text: '"Timu ya msaada inajibu haraka na jukwaa linatoa ujumbe wetu kwa wakati."', name: 'Philipo Lubuva', role: 'Tanganyika Law Society' }
        ]
      },
      howItWorks: {
        label: 'Jinsi Inavyofanya Kazi',
        title: 'Anza Kwa ',
        titleGold: 'Hatua 4 Rahisi',
        subtitle: 'Tunafanya iwe rahisi kwako kuanza.',
        steps: [
          { title: 'Wasiliana Nasi', desc: 'Piga simu, tuma WhatsApp, au jaza fomu' },
          { title: 'Tunajadili Mahitaji Yako', desc: 'Timu yetu inasikiliza na kupendekeza suluhisho' },
          { title: 'Tunakusaidia Kuanza', desc: 'Tunashughulikia usanidi wa akaunti yako' },
          { title: 'Anza Kutuma Ujumbe', desc: 'Unaanza kutuma ujumbe kwa wateja wako' }
        ]
      },
      whyUs: {
        label: 'Kwa Nini Sisi',
        title: 'Tunafanya ',
        titleGold: 'Mawasiliano Rahisi',
        subtitle: 'Hapa kwa nini biashara nchini Tanzania zinatuamini.',
        reasons: [
          { title: 'Mashauriano Bure', desc: 'Tunachukua muda kuelewa mahitaji yako' },
          { title: 'Tunashughulikia Usanidi', desc: 'Tunasanidi kila kitu ili uanze mara moja' },
          { title: 'Msaada wa Daima', desc: 'Timu yetu iko tayari kukusaidia' },
          { title: 'Bei Bora', desc: 'Bei zinazoshindana nchini Tanzania' }
        ]
      },
      blog: {
        label: 'Blogu',
        title: 'Machapisho ',
        titleGold: 'Yaliyopita',
        subtitle: 'Vidokezo, mwongozo, na maarifa kukusaidia kukuza biashara yako.',
        categories: ['Zote', 'Vidokezo', 'WhatsApp Biashara', 'Mikakati', 'Usalama'],
        posts: [
          {
            title: 'Kwa Nini SMS ni Njia Bora ya Uuzaji Tanzania',
            excerpt: 'Jua kwa nini biashara nchini Tanzania zinachagua SMS badala ya mitandao ya kijamii.',
            content: 'Katika ulimwengu wa leo, biashara zinahitaji kuwasiliana na wateja kwa haraka. SMS ina kiwango cha ufunguzi cha 98% ikilinganishwa na barua pepe 20%. Kwa biashara za Tanzania, SMS ni bora kutokana na idadi kubwa ya watumiaji wa simu (zaidi ya milioni 60).',
            category: 'Vidokezo',
            date: 'Agosti 9, 2026',
            author: 'Timu ya Bulkysms',
            readTime: 'Dk 5'
          },
          {
            title: 'WhatsApp Biashara dhidi ya SMS: Nini Bora Kwa Biashara Yako?',
            excerpt: 'Linganisha WhatsApp Biashara na SMS za jadi ili kubaini njia bora ya mawasiliano.',
            content: 'WhatsApp Biashara na SMS zina nguvu zao. SMS inapatikana kwenye simu zote, ikiwa ni pamoja na simu za kawaida. WhatsApp inatoa huduma za media lakini inahitaji simu mahiri. Kwa notisi za wakati kama OTP, SMS ni bora. Kwa mawasiliano na wateja, WhatsApp inatoa uzoefu bora.',
            category: 'WhatsApp Biashara',
            date: 'Agosti 8, 2026',
            author: 'Timu ya Bulkysms',
            readTime: 'Dk 7'
          },
          {
            title: 'Jinsi ya Kuongeza Mauzo kwa 40% kwa SMS Tanzania',
            excerpt: 'Jifunze mikakati ya kuongeza mauzo kwa kutumia kampeni za SMS.',
            content: 'Uuzaji wa SMS umeonekana kuwa moja ya njia bora nchini Tanzania. Mwongozo huu unashughulikia mgawanyo, muda, na kuandika ujumbe unaobadilisha. Utafiti unaonyesha kuwa ujumbe wa SMS wa kibinafsi una kiwango cha majibu cha 45%.',
            category: 'Mikakati',
            date: 'Agosti 7, 2026',
            author: 'Timu ya Bulkysms',
            readTime: 'Dk 6'
          },
          {
            title: 'Uwasilishaji wa OTP: Kwa Nini Biashara Zinahitaji Usalama Tanzania',
            excerpt: 'Jua kwa nini uwasilishaji wa OTP kwa SMS ni muhimu kwa usalama wa wateja wako.',
            content: 'Vitisho vya mtandao vinaongezeka Tanzania. Uwasilishaji wa OTP kwa SMS hutoa safu ya ziada ya usalama. Pamoja na shughuli za fedha za simu kuongezeka, usalama wa uthibitishaji ni muhimu. Inajenga imani na kupunguza hatari ya ufikiaji usioidhinishwa.',
            category: 'Usalama',
            date: 'Agosti 6, 2026',
            author: 'Timu ya Bulkysms',
            readTime: 'Dk 4'
          }
        ],
        newsletter: {
          title: 'Jiandikishe Kwa Jarida Letu',
          desc: 'Pata vidokezo vya hivi karibuni vya SMS na sasisho.',
          placeholder: 'Ingiza barua pepe yako',
          button: 'Jiandikisha',
          cta: 'Wasiliana Nasi'
        }
      },
      faq: {
        label: 'Maswali',
        title: 'Maswali ',
        titleGold: 'Yanayoulizwa Mara Kwa Mara',
        subtitle: 'Kila kitu unachohitaji kujua.',
        list: [
          { q: 'Bulkysms ni nini?', a: 'Bulkysms ni jukwaa la ujumbe wa SMS na WhatsApp kwa biashara. Tunatoa huduma kwa wateja nchini Tanzania.' },
          { q: 'Je, nitumie SMS au WhatsApp?', a: 'SMS inafanya kazi kwenye simu zote. WhatsApp inahitaji simu mahiri. Chaguo linategemea wateja wako.' },
          { q: 'Je, naweza kuunganisha na mifumo yangu?', a: 'Ndiyo, tunatoa API ya REST inayowezesha kuunganishwa na CRM, ERP, au programu nyingine.' },
          { q: 'Mna msaada gani?', a: 'Tunatoa msaada wa moja kwa moja kupitia barua pepe na simu.' },
          { q: 'Je, data yangu iko salama?', a: 'Ndiyo, tunatumia usimbaji fiche na kufuata viwango bora vya usalama.' }
        ]
      },
      about: {
        label: 'Kuhusu Sisi',
        title: 'Sisi ',
        titleGold: 'Ni Nani',
        subtitle: 'Bulkysms ni jukwaa linaloaminika kwa biashara nchini Tanzania.',
        text: `Bulkysms ilianzishwa kwa lengo wazi: kurahisisha mawasiliano ya biashara nchini Tanzania na kuifanya iwe ya urahisi, kuaminika, na nafuu kwa kila shirika. Tunaelewa kwamba katika mazingira ya biashara ya leo, kuwasiliana na wateja, washirika, na wafanyakazi si faida tu — bali ni hitaji la msingi.

Jukwaa letu linachanganya zana za ujumbe wa SMS na WhatsApp, zilizoundwa mahususi kwa soko la Tanzania. Tumewekeza sana katika miundombinu ya ndani, tukishirikiana na waendeshaji wote wakuu wa mitandao ya simu (Vodacom, Airtel, Tigo, Halotel, TTCL, na Zantel) ili kuhakikisha kwamba ujumbe wako unafika mara moja, hata katika maeneo ya mbali.

Kinachotutofautisha ni dhamira yetu ya mafanikio ya wateja. Timu yetu ya wataalam inafanya kazi kwa karibu na biashara za ukubwa wote — kutoka biashara ndogo hadi makampuni makubwa — ili kusanikua suluhisho zinazofaa mahitaji yao ya kipekee. Iwe unahitaji kutuma vikumbusho vya malipo, matangazo ya ofa, OTPs, au taarifa muhimu, tunarahisisha na kufanya gharama kuwa nafuu.

Zaidi ya teknolojia, tunajivunia uwazi na maadili. Tunafanya kazi kwa kanuni wazi, kuhakikisha kwamba data yako iko salama na mawasiliano yako yanazingatia sheria za ndani na kimataifa. Tunaamini kwamba ukuaji wa biashara unapaswa kuendelea sambamba na uadilifu na uwajibikaji wa kijamii.

Jiunge na mamia ya biashara ambazo tayari zinatuamini kwa mawasiliano yao. Hebu tusaidie kujenga uhusiano imara, kuongeza ushirikiano, na kufikia malengo yako.`
      },
      careers: {
        label: 'Kazi',
        title: 'Jiunge Na ',
        titleGold: 'Timu Yetu',
        subtitle: 'Tunatafuta watu wenye vipaji kutusaidia kujenga mustakabali wa mawasiliano.',
        text: `Katika Bulkysms, tunaamini kwamba watu wetu ndio mali yetu kubwa. Sisi ni kampuni inayokua kwa kasi, yenye nguvu, inayothamini ubunifu, ubunifu, na shauku ya teknolojia. Ikiwa unatafuta mahali ambapo unaweza kuleta mabadiliko halisi, kukua kitaalamu, na kufanya kazi na timu inayosaidiana, tungependa kusikia kutoka kwako.

Kwa sasa hatuna nafasi zilizo wazi, lakini tunavutiwa kila wakati na watu bora wanaoshiriki maono yetu. Tunakuhimiza kutuma CV yako na barua fupi ya maombi kwa timu yetu ya HR kupitia careers@bulkysms.com. Tutaweka maelezo yako kwenye faili na kukujulisha wakati nafasi inapotokea.

Wakati huo huo, tunakualika ufuate ukurasa wetu wa kampuni kwenye mitandao ya kijamii ili upate taarifa za nafasi mpya za kazi, habari za kampuni, na maarifa ya tasnia. Tumejitolea kujenga mazingira ya kazi yenye utofauti na ushirikiano ambapo kila mtu anaweza kustawi.

Asante kwa nia yako ya kujiunga na Bulkysms. Tunatazamia kufanya kazi nawe katika siku zijazo.`
      },
      privacy: {
        label: 'Sera ya Faragha',
        title: 'Sera ya ',
        titleGold: 'Faragha',
        subtitle: 'Data yako iko salama nasi.',
        sections: [
          { type: 'heading', text: 'Dhamira Yetu ya Faragha' },
          { type: 'paragraph', text: 'Katika Bulkysms, tunachukulia faragha yako kwa uzito. Sera hii ya Faragha inaelezea jinsi tunavyokusanya, kutumia, kufichua, na kulinda taarifa zako unapotembelea tovuti yetu au kutumia huduma zetu. Tafadhali soma sera hii kwa uangalifu ili kuelewa maoni na desturi zetu kuhusu data yako ya kibinafsi na jinsi tutakavyoitendea.' },
          { type: 'heading', text: 'Taarifa Tunazokusanya' },
          { type: 'paragraph', text: 'Tunaweza kukusanya na kuchakata data ifuatayo kukuhusu: taarifa unazotoa kwa kujaza fomu kwenye tovuti yetu (k.m., jina, barua pepe, nambari ya simu), maelezo ya ziara zako kwenye tovuti yetu na rasilimali unazofikia, ukiwasiliana nasi tunaweza kuweka rekodi ya mawasiliano hayo, na data ya kiufundi kama vile anwani yako ya IP, aina ya kivinjari, na mfumo wa uendeshaji.' },
          { type: 'heading', text: 'Jinsi Tunavyotumia Taarifa Zako' },
          { type: 'paragraph', text: 'Tunatumia taarifa zako kwa: kukupa huduma unazoomba, kuboresha tovuti na huduma zetu, kukutumia mawasiliano ya matangazo (kwa idhini yako tu), na kutii majukumu ya kisheria.' },
          { type: 'heading', text: 'Usalama wa Data' },
          { type: 'paragraph', text: 'Tunatekeleza hatua sahihi za kiufundi na shirika kulinda data yako ya kibinafsi dhidi ya ufikiaji usioidhinishwa, mabadiliko, ufichuzi, au uharibifu. Data zote zimepigwa siri wakati wa kusafirishwa kwa kutumia itifaki za SSL/TLS, na seva zetu zinalindwa na ngome za usalama na teknolojia zingine.' },
          { type: 'heading', text: 'Kushiriki Data' },
          { type: 'paragraph', text: 'Hatupitishi, kukodisha, au kukodisha taarifa zako za kitambulisho kwa wahusika wengine. Tunaweza kushiriki data ya jumla ya kidemografia iliyojumlishwa ambayo haihusiani na taarifa yoyote ya kitambulisho cha kibinafsi kuhusu wageni na watumiaji na washirika wetu wa biashara, waaminifu wanaoaminika, na watangazaji kwa madhumuni yaliyoelezwa hapo juu.' },
          { type: 'heading', text: 'Vidakuzi' },
          { type: 'paragraph', text: 'Tovuti yetu inatumia vidakuzi ili kukutofautisha na watumiaji wengine na kukupa uzoefu bora. Unaweza kuweka kivinjari chako kukataa vidakuzi, lakini hii inaweza kuweka mipaka kwenye baadhi ya utendakazi.' },
          { type: 'heading', text: 'Haki Zako' },
          { type: 'paragraph', text: 'Una haki ya kuomba ufikiaji, marekebisho, au ufutaji wa data yako ya kibinafsi. Unaweza pia kupinga usindikaji au kuomba kizuizi. Ili kutekeleza haki zozote kati ya hizi, tafadhali wasiliana nasi kwa info@bulkysms.com.' },
          { type: 'heading', text: 'Mabadiliko ya Sera Hii' },
          { type: 'paragraph', text: 'Tunaweza kusasisha sera hii mara kwa mara. Mabadiliko yoyote yatachapishwa kwenye ukurasa huu pamoja na tarehe ya marekebisho. Tunakuhimiza ukague sera hii mara kwa mara. Kwa kutumia huduma zetu, unakubali kukusanya na kutumia taarifa zako kama ilivyoelezwa katika sera hii. Ikiwa una maswali yoyote kuhusu Sera hii ya Faragha, tafadhali wasiliana nasi.' }
        ]
      },
      terms: {
        label: 'Masharti ya Huduma',
        title: 'Masharti ya ',
        titleGold: 'Huduma',
        subtitle: 'Kwa kutumia Bulkysms, unakubali masharti yetu.',
        sections: [
          { type: 'heading', text: 'Kukubali Masharti' },
          { type: 'paragraph', text: 'Kwa kutumia Bulkysms, unathibitisha kuwa una angalau miaka 18 na una uwezo wa kisheria wa kuingia katika makubaliano ya kisheria. Pia unakubali kufuata sheria na kanuni zote zinazotumika.' },
          { type: 'heading', text: 'Maelezo ya Huduma' },
          { type: 'paragraph', text: 'Bulkysms hutoa huduma za ujumbe, ikiwa ni pamoja na SMS na WhatsApp, kwa biashara. Tunatoa aina mbalimbali za mipango na vipengele, vyote vinavyoweza kubadilishwa bila taarifa ya awali.' },
          { type: 'heading', text: 'Wajibu wa Mtumiaji' },
          { type: 'paragraph', text: 'Unakubali kutumia huduma kwa madhumuni halali pekee, kutotuma barua taka, maudhui ya ulaghai, au yenye madhara, kutojaribu kupata ufikiaji usioidhinishwa wa mifumo yetu, na kutoa taarifa sahihi na kamili wakati wa kujiandikisha.' },
          { type: 'heading', text: 'Ada na Malipo' },
          { type: 'paragraph', text: 'Malipo ya huduma zetu yameelezwa wazi kwenye ukurasa wetu wa bei. Unakubali kulipa ada zote kwa mujibu wa mpango uliochaguliwa. Malipo hayarejeshewi isipokuwa kama inavyotakiwa na sheria.' },
          { type: 'heading', text: 'Miliki za Kiakili' },
          { type: 'paragraph', text: 'Maudhui yote kwenye tovuti hii, ikiwa ni pamoja na maandishi, picha, alama, na programu, ni mali ya Bulkysms na inalindwa na sheria za hakimiliki. Huwezi kuiga, kusambaza, au kuunda kazi za derivative bila idhini yetu wazi.' },
          { type: 'heading', text: 'Kizuizi cha Dhima' },
          { type: 'paragraph', text: 'Bulkysms hutoa huduma "kama ilivyo" bila dhamana za aina yoyote. Hatutawajibika kwa uharibifu wowote usio wa moja kwa moja, wa bahati mbaya, au unaofuata kutokana na matumizi ya huduma zetu.' },
          { type: 'heading', text: 'Kusimamisha' },
          { type: 'paragraph', text: 'Tunahifadhi haki ya kusimamisha au kukatisha akaunti yako ikiwa unakiuka masharti haya. Unaweza pia kusitisha akaunti yako wakati wowote kwa kuwasiliana nasi.' },
          { type: 'heading', text: 'Mabadiliko ya Masharti' },
          { type: 'paragraph', text: 'Tunaweza kurekebisha masharti haya wakati wowote. Kuendelea kutumia huduma kunaonyesha kukubali masharti yaliyosasishwa.' },
          { type: 'heading', text: 'Sheria Inayotumika' },
          { type: 'paragraph', text: 'Masharti haya yanatawaliwa na sheria za Jamhuri ya Muungano wa Tanzania.' },
          { type: 'heading', text: 'Mawasiliano' },
          { type: 'paragraph', text: 'Ikiwa una maswali yoyote kuhusu Masharti haya ya Huduma, tafadhali wasiliana nasi kwa info@bulkysms.com.' }
        ]
      },
      contact: {
        label: 'Wasiliana Nasi',
        title: 'Wasiliana ',
        titleGold: 'Nasi',
        subtitle: 'Wasiliana na timu yetu na tutakusaidia kuanza.',
        info: {
          phone: 'Simu',
          whatsapp: 'WhatsApp',
          email: 'Barua Pepe',
          office: 'Ofisi',
          hours: 'Saa za Kufanya Kazi'
        },
        hours: ['Jumatatu - Ijumaa: 8:00 AM - 6:00 PM', 'Jumamosi: 9:00 AM - 2:00 PM'],
        form: {
          title: 'Tuma Ujumbe',
          subtitle: 'Tutajibu ndani ya masaa 24',
          name: 'Jina Lako',
          phone: 'Namba ya Simu',
          email: 'Barua Pepe',
          message: 'Tuambie mahitaji yako...',
          button: 'Tuma Ujumbe'
        },
        social: 'Tufuate'
      },
      footer: {
        brand: 'Dar es Salaam, Tanzania',
        brandDesc: 'Suluhisho za SMS na WhatsApp kwa biashara.',
        solutions: 'Huduma',
        company: 'Kampuni',
        support: 'Msaada',
        copyright: '© 2026 Bulkysms. Haki zote zimehifadhiwa. Imeundwa kwa usahihi Tanzania.'
      },
      whatsapp: 'Tumia WhatsApp'
    }
  };

  const lang = t[language];

  // ============================================================
  // CONTACT FORM - DIRECT WHATSAPP
  // ============================================================
  const sendToWhatsApp = (e) => {
    e.preventDefault();
    const name = document.getElementById('formName').value;
    const phone = document.getElementById('formPhone').value;
    const email = document.getElementById('formEmail').value || 'Not provided';
    const message = document.getElementById('formMessage').value;
    if (!name || !phone || !message) {
      alert(language === 'en' ? 'Please fill in all required fields.' : 'Tafadhali jaza sehemu zote zinazohitajika.');
      return;
    }
    const whatsappNumber = '255757170544';
    const text = language === 'en' 
      ? `New Bulkysms Inquiry%0A%0AName: ${name}%0APhone: ${phone}%0AEmail: ${email}%0A%0AMessage:%0A${message}`
      : `Ujumbe Mpya Bulkysms%0A%0AJina: ${name}%0ASimu: ${phone}%0ABarua pepe: ${email}%0A%0AUjumbe:%0A${message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(url, '_blank');
    document.getElementById('contactForm').reset();
    alert(language === 'en' ? 'Opening WhatsApp... Our team will respond shortly!' : 'WhatsApp inafungua... Timu yetu itawasiliana nanyi hivi karibuni!');
  };

  // ============================================================
  // RENDER (Privacy & Terms as blog‑style sections)
  // ============================================================
  const renderBlogSections = (sections) => {
    return sections.map((section, idx) => {
      if (section.type === 'heading') {
        return <h3 key={idx} style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--gold-dark)', marginTop: '2rem', marginBottom: '0.5rem' }}>{section.text}</h3>;
      }
      return <p key={idx} style={{ marginBottom: '1rem', lineHeight: '1.8' }}>{section.text}</p>;
    });
  };

  return (
    <div className="app">
      {/* ===== NAVBAR ===== */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <a href="/" className="logo">bulky<span>SMS</span></a>
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation">☰</button>
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li><a href="#services" onClick={closeMenu}>{lang.nav.services}</a></li>
            <li><a href="#pricing" onClick={closeMenu}>{lang.nav.pricing}</a></li>
            <li><a href="#testimonials" onClick={closeMenu}>{lang.nav.testimonials}</a></li>
            <li><a href="#blog" onClick={closeMenu}>{lang.nav.blog}</a></li>
            <li><a href="#contact" onClick={closeMenu}>{lang.nav.contact}</a></li>
            <li><a href="#faq" onClick={closeMenu}>{lang.nav.help}</a></li>
            <li><button className="lang-toggle" onClick={toggleLanguage}>{language === 'en' ? 'SW' : 'EN'}</button></li>
            <li><a href="#contact" className="nav-cta" onClick={closeMenu}>{lang.nav.contactUs}</a></li>
          </ul>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="hero hero-video-bg">
        <div className="hero-video-background">
          <video className="hero-bg-video" autoPlay muted loop playsInline>
            <source src="/videos/bulky-1.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="badge">{lang.hero.badge}</span>
            <h1>{lang.hero.title} <span className="gold">{lang.hero.titleGold}</span></h1>
            <p>{lang.hero.subtitle}</p>
            <div className="hero-stats">
              {lang.hero.stats.map((stat, idx) => (
                <div className="stat-item" key={idx}>
                  <div className="info"><strong>{stat.value}</strong><span>{stat.label}</span></div>
                </div>
              ))}
            </div>
            <div className="hero-actions">
              <a href="#contact" className="btn-primary">{lang.hero.cta}</a>
              <a href="#pricing" className="btn-secondary">{lang.hero.cta2}</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <div className="stat-row"><span className="label">{lang.hero.card.networks}</span><span className="value">5+</span></div>
              <div className="stat-row"><span className="label">{lang.hero.card.users}</span><span className="value">60M+</span></div>
              <div className="stat-row"><span className="label">{lang.hero.card.speed}</span><span className="value">2.3s</span></div>
              <div className="stat-row"><span className="label">{lang.hero.card.rate}</span><span className="value">98%</span></div>
              <div className="gold-bar"><div className="fill"></div></div>
              <div className="card-note">{lang.hero.note}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="why-choose">
        <div className="container">
          <div className="text-center">
            <span className="section-label">{lang.whyChoose.label}</span>
            <h2 className="section-title">{lang.whyChoose.title}<span className="gold">{lang.whyChoose.titleGold}</span></h2>
            <p className="section-sub mx-auto">{lang.whyChoose.subtitle}</p>
          </div>
          <div className="features-grid">
            {lang.whyChoose.features.map((f, i) => (
              <div className="feature-item" key={i}>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="services" id="services">
        <div className="container">
          <div className="text-center">
            <span className="section-label">{lang.services.label}</span>
            <h2 className="section-title">{lang.services.title}<span className="gold">{lang.services.titleGold}</span></h2>
            <p className="section-sub mx-auto">{lang.services.subtitle}</p>
          </div>
          <div className="services-grid">
            {lang.services.list.map((s, i) => (
              <div className="service-card" key={i}>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul>{s.features.map((f, j) => <li key={j}>{f}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NETWORKS ===== */}
      <section className="networks">
        <div className="container">
          <div className="text-center">
            <span className="section-label">{lang.networks.label}</span>
            <h2 className="section-title">{lang.networks.title}<span className="gold">{lang.networks.titleGold}</span></h2>
            <p className="section-sub mx-auto">{lang.networks.subtitle}</p>
          </div>
          <div className="network-grid">
            {lang.networks.list.map((n, i) => <span className="network-item" key={i}>{n}</span>)}
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className="pricing" id="pricing">
        <div className="container">
          <div className="text-center">
            <span className="section-label">{lang.pricing.label}</span>
            <h2 className="section-title">{lang.pricing.title}<span className="gold">{lang.pricing.titleGold}</span></h2>
            <p className="section-sub mx-auto">{lang.pricing.subtitle}</p>
          </div>
          <div className="pricing-wrapper">
            {lang.pricing.plans.map((plan, i) => (
              <div className={`pricing-card ${plan.featured ? 'featured' : ''}`} key={i}>
                <div className="plan">{plan.name}</div>
                <div className="price">{plan.price} <small>{plan.sub}</small></div>
                <div className="description">{plan.desc}</div>
                <ul>{plan.features.map((f, j) => <li key={j}>{f}</li>)}</ul>
                <a href="#contact" className="btn">{lang.nav.contactUs}</a>
                {plan.note && <div className="pricing-note-inner">{plan.note}</div>}
              </div>
            ))}
          </div>
          <div className="pricing-note">{lang.pricing.note}</div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <div className="text-center">
            <span className="section-label">{lang.testimonials.label}</span>
            <h2 className="section-title">{lang.testimonials.title}<span className="gold">{lang.testimonials.titleGold}</span></h2>
            <p className="section-sub mx-auto">{lang.testimonials.subtitle}</p>
          </div>
          <div className="testimonial-grid">
            {lang.testimonials.list.map((t, i) => (
              <div className="testimonial" key={i}>
                <div className="stars">{'★'.repeat(t.stars)}</div>
                <div className="text">{t.text}</div>
                <div className="author">
                  <div className="initial">{t.name.charAt(0)}</div>
                  <div><div className="name">{t.name}</div><div className="role">{t.role}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="how-it-works" id="how-it-works">
        <div className="container">
          <div className="text-center">
            <span className="section-label">{lang.howItWorks.label}</span>
            <h2 className="section-title">{lang.howItWorks.title}<span className="gold">{lang.howItWorks.titleGold}</span></h2>
            <p className="section-sub mx-auto">{lang.howItWorks.subtitle}</p>
          </div>
          <div className="steps-grid">
            {lang.howItWorks.steps.map((step, i) => (
              <div className="step-item" key={i}>
                <div className="step-number">{i + 1}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section className="why-us" id="why-us">
        <div className="container">
          <div className="text-center">
            <span className="section-label">{lang.whyUs.label}</span>
            <h2 className="section-title">{lang.whyUs.title}<span className="gold">{lang.whyUs.titleGold}</span></h2>
            <p className="section-sub mx-auto">{lang.whyUs.subtitle}</p>
          </div>
          <div className="why-us-grid">
            {lang.whyUs.reasons.map((item, i) => (
              <div className="why-us-item" key={i}>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BLOG ===== */}
      <section className="blog-section" id="blog">
        <div className="container">
          <div className="text-center">
            <span className="section-label">{lang.blog.label}</span>
            <h2 className="section-title">{lang.blog.title}<span className="gold">{lang.blog.titleGold}</span></h2>
            <p className="section-sub mx-auto">{lang.blog.subtitle}</p>
          </div>
          <div className="blog-categories">
            {lang.blog.categories.map((cat, idx) => (
              <span className={`category ${idx === 0 ? 'active' : ''}`} key={idx}>{cat}</span>
            ))}
          </div>
          <div className="blog-grid">
            {lang.blog.posts.map((post, index) => (
              <div className={`blog-card ${expandedPost === index ? 'expanded' : ''}`} key={index}>
                <div className="blog-card-header">
                  <div className="blog-meta">
                    <span className="blog-category-tag">{post.category}</span>
                    <span className="blog-date">{post.date}</span>
                  </div>
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  {expandedPost === index && (
                    <div className="blog-full-content">
                      <p>{post.content}</p>
                      <div className="blog-cta">
                        <p>{lang.blog.newsletter.cta}</p>
                        <a href="#contact" className="btn-primary" style={{ padding: '10px 28px', fontSize: '0.85rem' }}>
                          {language === 'en' ? 'Contact Our Team' : 'Wasiliana Nasi'}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
                <div className="blog-card-footer">
                  <div className="blog-author">
                    <span className="author-name">{post.author}</span>
                    <span className="read-time">{post.readTime}</span>
                  </div>
                  <button className="read-more-btn" onClick={() => toggleBlogPost(index)}>
                    {expandedPost === index ? (language === 'en' ? 'Read Less' : 'Soma Kidogo') : (language === 'en' ? 'Read More' : 'Soma Zaidi')}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="blog-newsletter">
            <div className="newsletter-content">
              <h3>{lang.blog.newsletter.title}</h3>
              <p>{lang.blog.newsletter.desc}</p>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder={lang.blog.newsletter.placeholder} required />
                <button type="submit" className="btn-primary">{lang.blog.newsletter.button}</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="faq" id="faq">
        <div className="container">
          <div className="text-center">
            <span className="section-label">{lang.faq.label}</span>
            <h2 className="section-title">{lang.faq.title}<span className="gold">{lang.faq.titleGold}</span></h2>
            <p className="section-sub mx-auto">{lang.faq.subtitle}</p>
          </div>
          <div className="faq-list">
            {lang.faq.list.map((faq, i) => (
              <div className={`faq-item ${activeFaq === i ? 'active' : ''}`} key={i} onClick={() => toggleFaq(i)}>
                <div className="faq-question">{faq.q}</div>
                <div className="faq-answer">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT US ===== */}
      <section className="about-section" id="about">
        <div className="container">
          <div className="text-center">
            <span className="section-label">{lang.about.label}</span>
            <h2 className="section-title">{lang.about.title}<span className="gold">{lang.about.titleGold}</span></h2>
            <p className="section-sub mx-auto">{lang.about.subtitle}</p>
          </div>
          <div className="about-content" style={{ textAlign: 'left', maxWidth: '900px', margin: '40px auto', lineHeight: '1.9' }}>
            {lang.about.text.split('\n').map((para, idx) => (
              <p key={idx} style={{ marginBottom: '1rem' }}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CAREERS ===== */}
      <section className="careers-section" id="careers">
        <div className="container">
          <div className="text-center">
            <span className="section-label">{lang.careers.label}</span>
            <h2 className="section-title">{lang.careers.title}<span className="gold">{lang.careers.titleGold}</span></h2>
            <p className="section-sub mx-auto">{lang.careers.subtitle}</p>
          </div>
          <div className="careers-content" style={{ textAlign: 'left', maxWidth: '900px', margin: '40px auto', lineHeight: '1.9' }}>
            {lang.careers.text.split('\n').map((para, idx) => (
              <p key={idx} style={{ marginBottom: '1rem' }}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRIVACY POLICY ===== */}
      <section className="privacy-section" id="privacy">
        <div className="container">
          <div className="text-center">
            <span className="section-label">{lang.privacy.label}</span>
            <h2 className="section-title">{lang.privacy.title}<span className="gold">{lang.privacy.titleGold}</span></h2>
            <p className="section-sub mx-auto">{lang.privacy.subtitle}</p>
          </div>
          <div style={{ maxWidth: '900px', margin: '40px auto', padding: '0 20px' }}>
            {renderBlogSections(lang.privacy.sections)}
          </div>
        </div>
      </section>

      {/* ===== TERMS OF SERVICE ===== */}
      <section className="terms-section" id="terms">
        <div className="container">
          <div className="text-center">
            <span className="section-label">{lang.terms.label}</span>
            <h2 className="section-title">{lang.terms.title}<span className="gold">{lang.terms.titleGold}</span></h2>
            <p className="section-sub mx-auto">{lang.terms.subtitle}</p>
          </div>
          <div style={{ maxWidth: '900px', margin: '40px auto', padding: '0 20px' }}>
            {renderBlogSections(lang.terms.sections)}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="contact-page" id="contact">
        <div className="container">
          <div className="text-center">
            <span className="section-label">{lang.contact.label}</span>
            <h2 className="section-title">{lang.contact.title}<span className="gold">{lang.contact.titleGold}</span></h2>
            <p className="section-sub mx-auto">{lang.contact.subtitle}</p>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>{lang.contact.info.phone}</h3>
              <div className="contact-item"><div><strong>{lang.contact.info.phone}</strong><a href="tel:+255757170544">+255 757 170 544</a></div></div>
              <div className="contact-item"><div><strong>{lang.contact.info.whatsapp}</strong><a href="https://wa.me/255757170544">+255 757 170 544</a></div></div>
              <div className="contact-item"><div><strong>{lang.contact.info.email}</strong><a href="mailto:info@bulkysms.com">info@bulkysms.com</a></div></div>
              <div className="contact-item"><div><strong>{lang.contact.info.office}</strong><p>Dar es Salaam, Tanzania</p></div></div>
              <div className="contact-item"><div><strong>{lang.contact.info.hours}</strong><p>{lang.contact.hours[0]}</p><p>{lang.contact.hours[1]}</p></div></div>

              {/* ===== SOCIAL MEDIA WITH ICONS ===== */}
              <div className="contact-social">
                <h4>{lang.contact.social}</h4>
                <div className="social-links">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i> Facebook
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i> Twitter
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i> Instagram
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i> LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <div className="contact-form-wrapper">
                <h3>{lang.contact.form.title}</h3>
                <p className="form-subtitle">{lang.contact.form.subtitle}</p>
                <form className="contact-form" id="contactForm" onSubmit={sendToWhatsApp}>
                  <div className="form-group"><input type="text" id="formName" placeholder={lang.contact.form.name} required /></div>
                  <div className="form-group"><input type="tel" id="formPhone" placeholder={lang.contact.form.phone} required /></div>
                  <div className="form-group"><input type="email" id="formEmail" placeholder={lang.contact.form.email} /></div>
                  <div className="form-group"><textarea id="formMessage" placeholder={lang.contact.form.message} rows="4" required></textarea></div>
                  <button type="submit" className="btn-primary submit-btn">{lang.contact.form.button}</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="/" className="logo">bulky<span>SMS</span></a>
              <p>{lang.footer.brand}<br />{lang.footer.brandDesc}</p>
            </div>
            <div className="footer-links">
              <h5>{lang.footer.solutions}</h5>
              <a href="#services">{lang.nav.services}</a>
              <a href="#pricing">{lang.nav.pricing}</a>
              <a href="#testimonials">{lang.nav.testimonials}</a>
              <a href="#contact">{lang.nav.contact}</a>
            </div>
            <div className="footer-links">
              <h5>{lang.footer.company}</h5>
              <a href="#about">{lang.about.label}</a>
              <a href="#careers">{lang.careers.label}</a>
              <a href="#blog">{lang.blog.label}</a>
              <a href="#contact">{lang.nav.contact}</a>
            </div>
            <div className="footer-links">
              <h5>{lang.footer.support}</h5>
              <a href="#faq">{lang.faq.label}</a>
              <a href="#contact">{lang.nav.contact}</a>
              <a href="#privacy">{lang.privacy.label}</a>
              <a href="#terms">{lang.terms.label}</a>
            </div>
          </div>
          <div className="footer-bottom">{lang.footer.copyright}</div>
        </div>
      </footer>

      {/* ===== WHATSAPP FLOATING BUTTON ===== */}
      <a 
        href="https://wa.me/255757170544?text=Hello!%20I%20want%20to%20learn%20more%20about%20Bulkysms%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
        <span className="whatsapp-text">{lang.whatsapp}</span>
      </a>
    </div>
  );
};

export default App;