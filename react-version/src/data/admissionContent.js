// Structured admission content — no raw HTML, proper data objects for rich rendering.

export const admissionPages = {
  undergraduate: {
    title: 'Undergraduate Admissions',
    subtitle: 'Begin your academic journey with one of our world-class undergraduate programs.',
    heroImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c476?q=80&w=1470&auto=format&fit=crop',
    overview: 'Skyra Institute seeks curious, motivated students who are ready to grow. Our undergraduate experience blends rigorous coursework with hands-on research, study abroad, and career preparation — so you graduate ready for what comes next.',
    stats: [
      { icon: 'fas fa-users', value: '3,200+', label: 'Enrolled Undergrads' },
      { icon: 'fas fa-chalkboard-teacher', value: '12:1', label: 'Student-Faculty Ratio' },
      { icon: 'fas fa-award', value: '92%', label: 'Financial Aid Recipients' },
      { icon: 'fas fa-briefcase', value: '98%', label: 'Job / Grad School within 6 mos' },
    ],
    requirements: [
      { title: 'Common App or Skyra Application', description: 'Submit through the Common Application portal or directly on our website.' },
      { title: 'Official High School Transcripts', description: 'Must include all courses completed through junior year and senior-year mid-year grades.' },
      { title: 'Letters of Recommendation (2)', description: 'One from a school counselor and one from a teacher in a core academic subject.' },
      { title: 'Personal Essay', description: 'A 650-word essay responding to one of our essay prompts.' },
      { title: 'SAT or ACT Scores', description: 'Test-optional for Fall 2026. Scores may be submitted if you feel they reflect your abilities.' },
    ],
    deadlines: [
      { round: 'Early Decision', date: 'November 1, 2026', notification: 'December 15' },
      { round: 'Early Action', date: 'November 15, 2026', notification: 'January 31' },
      { round: 'Regular Decision', date: 'January 15, 2027', notification: 'March 30' },
      { round: 'Transfer Students', date: 'March 1, 2027', notification: 'May 15' },
    ],
    sidebarLinks: [
      { label: 'Graduate Admissions', to: '/admissions/graduate' },
      { label: 'International Students', to: '/admissions/international' },
      { label: 'Tuition & Fees', to: '/admissions/tuition' },
      { label: 'Scholarships & Aid', to: '/admissions/scholarships' },
      { label: 'Apply Now', to: '/admission' },
    ],
  },

  graduate: {
    title: 'Graduate Admissions',
    subtitle: 'Advance your career with a graduate degree designed around real-world impact.',
    heroImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1470&auto=format&fit=crop',
    overview: 'Our graduate programs combine academic rigor with practical application. Whether you want to pivot careers, deepen technical expertise, or pursue original research, Skyra\'s graduate school offers the mentorship and flexibility you need.',
    stats: [
      { icon: 'fas fa-graduation-cap', value: '1,800+', label: 'Graduate Students' },
      { icon: 'fas fa-flask', value: '150+', label: 'Research Projects' },
      { icon: 'fas fa-globe-americas', value: '40+', label: 'Countries Represented' },
      { icon: 'fas fa-clock', value: '100%', label: 'Evening / Online Options' },
    ],
    requirements: [
      { title: 'Bachelor\'s Degree', description: 'From a regionally accredited institution with a minimum 3.0 GPA.' },
      { title: 'GRE / GMAT Scores', description: 'Required for MBA and Engineering programs. Waived for applicants with 5+ years of experience.' },
      { title: 'Statement of Purpose', description: 'A 1,000-word essay describing your research interests, career goals, and reasons for choosing Skyra.' },
      { title: 'Professional Resume / CV', description: 'Including academic background, work experience, and publications if applicable.' },
      { title: 'Letters of Recommendation (3)', description: 'At least one from a former professor or research supervisor.' },
    ],
    deadlines: [
      { round: 'Priority Deadline', date: 'December 1, 2026', notification: 'February 15' },
      { round: 'Regular Deadline', date: 'February 15, 2027', notification: 'April 1' },
      { round: 'Rolling Admission', date: 'Until May 1', notification: '3–4 weeks after submission' },
    ],
    sidebarLinks: [
      { label: 'Undergraduate Admissions', to: '/admissions/undergraduate' },
      { label: 'International Students', to: '/admissions/international' },
      { label: 'Tuition & Fees', to: '/admissions/tuition' },
      { label: 'Scholarships & Aid', to: '/admissions/scholarships' },
      { label: 'Apply Now', to: '/admission' },
    ],
  },

  international: {
    title: 'International Students',
    subtitle: 'Join a global community of learners from over 40 countries.',
    heroImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1470&auto=format&fit=crop',
    overview: 'At Skyra Institute, international students are an integral part of our campus community. Our International Student Office provides comprehensive support — from the moment you apply to the day you graduate — including visa guidance, airport pickup, housing assistance, and cultural programming.',
    stats: [
      { icon: 'fas fa-globe', value: '40+', label: 'Countries Represented' },
      { icon: 'fas fa-home', value: '100%', label: 'Guaranteed Housing (Year 1)' },
      { icon: 'fas fa-dollar-sign', value: '$8M', label: 'International Scholarships' },
      { icon: 'fas fa-hands-helping', value: '24/7', label: 'Dedicated Support' },
    ],
    requirements: [
      { title: 'TOEFL / IELTS Scores', description: 'Minimum TOEFL iBT 80 or IELTS 6.5. Waived if prior degree was taught in English.' },
      { title: 'Financial Declaration Form (I-20)', description: 'Proof of financial support covering tuition and living expenses for at least one year.' },
      { title: 'Passport Copy', description: 'A clear copy of the biographical page of your valid passport.' },
      { title: 'Credential Evaluation', description: 'Official evaluation of non-U.S. transcripts through WES or ECE.' },
      { title: 'Visa Interview Preparation', description: 'Our team provides mock interview sessions and documentation checklists for your F-1 visa appointment.' },
    ],
    deadlines: [
      { round: 'Fall Intake', date: 'April 15, 2026', notification: 'May 30' },
      { round: 'Spring Intake', date: 'October 1, 2026', notification: 'November 15' },
      { round: 'Summer Intake', date: 'February 1, 2027', notification: 'March 15' },
    ],
    sidebarLinks: [
      { label: 'Undergraduate Admissions', to: '/admissions/undergraduate' },
      { label: 'Graduate Admissions', to: '/admissions/graduate' },
      { label: 'Tuition & Fees', to: '/admissions/tuition' },
      { label: 'Scholarships & Aid', to: '/admissions/scholarships' },
      { label: 'Apply Now', to: '/admission' },
    ],
  },

  tuition: {
    title: 'Tuition & Fees',
    subtitle: 'Transparent pricing for your investment in a world-class education.',
    heroImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1470&auto=format&fit=crop',
    overview: 'Skyra Institute is committed to making education affordable. The figures below represent the estimated total cost of attendance for the 2026–2027 academic year. Many students pay significantly less thanks to financial aid, scholarships, and work-study opportunities.',
    stats: [
      { icon: 'fas fa-hand-holding-usd', value: '$52K', label: 'Avg. Aid Package' },
      { icon: 'fas fa-percentage', value: '75%', label: 'Students Receiving Aid' },
      { icon: 'fas fa-file-invoice-dollar', value: '$0', label: 'Application Fee' },
      { icon: 'fas fa-piggy-bank', value: '12-mo', label: 'Payment Plan Available' },
    ],
    costTable: [
      { item: 'Undergraduate Tuition', amount: '$45,000 / year' },
      { item: 'Graduate Tuition', amount: '$1,200 / credit hour' },
      { item: 'Room & Board (Double)', amount: '$14,000 / year' },
      { item: 'Room & Board (Single)', amount: '$17,500 / year' },
      { item: 'Mandatory Student Fees', amount: '$1,500 / year' },
      { item: 'Technology Fee', amount: '$500 / year' },
      { item: 'Health Insurance', amount: '$2,800 / year' },
    ],
    sidebarLinks: [
      { label: 'Undergraduate Admissions', to: '/admissions/undergraduate' },
      { label: 'Graduate Admissions', to: '/admissions/graduate' },
      { label: 'International Students', to: '/admissions/international' },
      { label: 'Scholarships & Aid', to: '/admissions/scholarships' },
      { label: 'Apply Now', to: '/admission' },
    ],
  },

  scholarships: {
    title: 'Scholarships & Financial Aid',
    subtitle: 'We believe financial barriers should never stand in the way of your potential.',
    heroImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1470&auto=format&fit=crop',
    overview: 'Over 75% of Skyra students receive some form of financial assistance. From merit-based scholarships recognizing academic excellence to need-based grants ensuring access for all, we provide multiple pathways to fund your education.',
    stats: [
      { icon: 'fas fa-trophy', value: '$12M', label: 'Awarded Annually' },
      { icon: 'fas fa-medal', value: '350+', label: 'Named Scholarships' },
      { icon: 'fas fa-users', value: '75%', label: 'Students Receiving Aid' },
      { icon: 'fas fa-handshake', value: '200+', label: 'Work-Study Positions' },
    ],
    scholarshipList: [
      { name: 'Presidential Scholarship', amount: 'Full Tuition', criteria: 'Top 1% of applicants based on academic record and leadership.' },
      { name: 'Dean\'s Merit Award', amount: '$20,000 / year', criteria: 'Students with a 3.8+ GPA and outstanding extracurriculars.' },
      { name: 'Innovation Grant (STEM)', amount: '$10,000 / year', criteria: 'STEM majors who demonstrate exceptional creativity in science or tech.' },
      { name: 'Global Citizen Award', amount: '$15,000 / year', criteria: 'International students demonstrating leadership and community impact.' },
      { name: 'Need-Based Grant', amount: 'Varies', criteria: 'Based on FAFSA or CSS Profile analysis of demonstrated need.' },
      { name: 'Skyra Legacy Scholarship', amount: '$5,000 / year', criteria: 'Children or grandchildren of Skyra alumni.' },
    ],
    sidebarLinks: [
      { label: 'Undergraduate Admissions', to: '/admissions/undergraduate' },
      { label: 'Graduate Admissions', to: '/admissions/graduate' },
      { label: 'International Students', to: '/admissions/international' },
      { label: 'Tuition & Fees', to: '/admissions/tuition' },
      { label: 'Apply Now', to: '/admission' },
    ],
  },
};
