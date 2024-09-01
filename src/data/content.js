const sliderImg1 = require('../assets/Slider_img_1.jpg');

const content = {
  menuItems: [
    { label: 'About Us', link: 'aboutUsSection' },
    { label: 'Practice Areas', link: 'practiceAreaSection' },
    { label: 'Contact', link: 'contactFormSection' },
  ],
  hero: {
    title: 'Your Trusted Legal Advocates',
    subtitle: 'Fighting for Justice, One Case at a Time',
    ctaText: 'Contact Us',
  },
  slides : [
      {
          title: 'Welcome to Our Website',
          subtitle: 'Discover amazing things!',
          ctaText: 'Learn More',
          image: sliderImg1,
      },
      {
          title: 'Get in Touch With Us',
          subtitle: 'We are here to help',
          ctaText: 'Call Us',
          image: '../assets/Slider_img_1.jpg',
      },
      // Add more slides as needed
    ],
  disclaimerModal: {
    title: 'Disclaimer',
    content: 'According to the guidelines of the Bar Council of India, lawyers and law offices are prohibited from soliciting clients or advertising.',
    agreementNote: 'By clicking the "I Agree" button, you confirm that you are seeking information independently about justice warrior. It is also acknowledged that no advertisements, personal communications, solicitations, invitations, or any other forms of inducement have been made by or on behalf of justice warrior or any of its members to solicit work through this website.',
  },
  floatButtons: {
    call_chat: 919344063559,
    defaultMessage: 'I would appreciate your legal guidance. Could we schedule an appointment?',
    helpText: [
      'Call',
      'Chat',
      'Scroll Top'
    ]
  },
  aboutUs: [{
    title: 'About Us',
    content: `At Justice Warrior Law Firm, we are dedicated to providing exceptional legal services 
      with a personal touch. Founded in 2024, our firm has become a trusted advocate for individuals 
      and businesses seeking justice and fairness. Our experienced team of advocates brings a wealth 
      of knowledge and a relentless commitment to achieving the best possible outcomes for our clients.`,
  }],
  missionStatement: [
    {
      content: 'At Justice Warrior Law Firm, we uphold integrity, client-centered service, excellence, justice, fairness, respect, and accountability.',
    },
    {
      content: 'At Justice Warrior, our mission is to provide exceptional legal services with a personal touch. We believe in upholding the principles of justice and fairness, ensuring that every client receives the best possible representation.',
    },
    {
      content: 'We endeavor to create a legal advice system where each and every client  finds his disputes redressed in an economical and timely fashion.',
    }
  ],
  practiceAreas: {
    title: 'Our Practice Areas',
    areas: [
      { title: 'Civil Law', description: 'Civil legal matters including disputes and litigation.' },
      { title: 'Criminal Law', description: 'Defense against criminal charges and legal representation.' },
      { title: 'Personal Law', description: 'Legal support for marriage, divorce, and related issues.' },
      { title: 'Employment Law', description: 'sample_text' },
      { title: 'Matrimonial Law', description: 'sample_text' },
      { title: 'Business Law', description: 'sample_text' },
    ],
  },
  contactForm: {
    title: 'Consult a lawyer',
    responseTitle: 'Enquiry received. We will reach out to you shortly.',
    submitButtonText: 'Book Appointment'
  },
  footer: {
    contact: {
      title: 'Contact',
      list: [
        'Mobile: +91 987654321',
        'Mobile: +56 968435219',
        'Telephone: 044-87654321',
        '\n ',
        'help@justicewarrior.in',
      ],
    },
    offices: {
      title: 'Our Offices',
      locations: [
        '5423, Saket Court, New Delhi',
        '568, Patiala House Court, New Delhi',
        '247, Block A, Rajasthan High Court,Jaipur',
        '265, Sikandrabad, Bulandshahr, Uttar Pradesh',
        '102, Bhavya Sree Arcade, Erragada, Hyderabad',
      ],
    },
    copyright: new Date().getFullYear() + ' Justice Warrior Law Firm',
    socialMedia: {
      twitter: 'https://twitter.com/',
      instagram: 'https://www.instagram.com/',
      youtube: 'https://www.youtube.com/',
      linkedin: 'https://in.linkedin.com/',
    }
  },
};

export default content;
