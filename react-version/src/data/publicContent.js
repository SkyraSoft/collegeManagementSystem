export const academicDepartments = {
  'computer-science': {
    title: 'Computer Science & AI',
    subtitle: 'Innovating the Digital Frontier',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop',
    description: 'The Department of Computer Science at Skyra Institute is dedicated to pushing the boundaries of computing. We offer cutting-edge programs in Artificial Intelligence, Cybersecurity, and Software Engineering. Our students learn in state-of-the-art labs and collaborate with industry giants.',
    stats: [
      { label: 'Faculty', value: '45+' },
      { label: 'Research Labs', value: '12' },
      { label: 'Employment Rate', value: '99%' }
    ],
    programs: ['B.S. in Computer Science', 'M.S. in Artificial Intelligence', 'Ph.D. in Cyber Security']
  },
  'business': {
    title: 'Business & Management',
    subtitle: 'Shaping Global Leaders',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1471&auto=format&fit=crop',
    description: 'Our Business School prepares students for the complexities of the global market. Through case studies, international internships, and entrepreneurial incubators, we build leaders who are ready to make a sustainable impact.',
    stats: [
      { label: 'Fortune 500 Alumni', value: '500+' },
      { label: 'Startups Incubated', value: '120' },
      { label: 'Global Partners', value: '35' }
    ],
    programs: ['B.B.A. in Global Management', 'MBA in Strategic Leadership', 'Executive MBA']
  },
  'engineering': {
    title: 'Advanced Engineering',
    subtitle: 'Building the Future',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1470&auto=format&fit=crop',
    description: 'From sustainable civil infrastructure to next-generation robotics, the Engineering department equips students with the technical skills and ethical grounding needed to solve the worlds most pressing challenges.',
    stats: [
      { label: 'Patents Filed', value: '200+' },
      { label: 'Research Grants', value: '$15M' },
      { label: 'Student Projects', value: '300+' }
    ],
    programs: ['B.S. in Mechanical Engineering', 'M.S. in Robotics', 'Ph.D. in Sustainable Energy']
  }
};

export const infoPages = {
  // Resources / Footer Links
  'academic-calendar': {
    title: 'Academic Calendar',
    badge: 'Admissions & Student Planning',
    subtitle: 'A quick overview of the 2026-2027 academic year, including semester start dates, breaks, final exams, and graduation.',
    content: `
      <div class="info-hero-card" data-aos="fade-up">
        <p class="eyebrow">Campus update</p>
        <h2>Fall 2026 admissions are now open</h2>
        <p>Priority applications are due soon. Review the key academic milestones below to plan registration, breaks, finals, and commencement with confidence.</p>
        <ul class="feature-list">
          <li><i class="fas fa-check-circle"></i> Early application window for priority review</li>
          <li><i class="fas fa-check-circle"></i> Semester milestones and breaks clearly mapped</li>
          <li><i class="fas fa-check-circle"></i> Simple next steps for students and parents</li>
        </ul>
      </div>

      <div class="calendar-grid">
        <article class="calendar-card" data-aos="fade-up">
          <span class="calendar-chip">Semester Start</span>
          <h3>Fall Semester Begins</h3>
          <strong>August 24, 2026</strong>
          <p>Welcome week, orientation sessions, and first-day registration activities begin.</p>
        </article>

        <article class="calendar-card" data-aos="fade-up" data-aos-delay="100">
          <span class="calendar-chip">Break</span>
          <h3>Fall Break</h3>
          <strong>October 12–14, 2026</strong>
          <p>Students and faculty enjoy a short mid-semester pause before the final stretch.</p>
        </article>

        <article class="calendar-card" data-aos="fade-up" data-aos-delay="150">
          <span class="calendar-chip">Exams</span>
          <h3>Final Exams</h3>
          <strong>December 10–16, 2026</strong>
          <p>Final assessments and grading periods take place across the full week.</p>
        </article>

        <article class="calendar-card" data-aos="fade-up" data-aos-delay="200">
          <span class="calendar-chip">Spring Launch</span>
          <h3>Spring Semester Begins</h3>
          <strong>January 18, 2027</strong>
          <p>New classes, updated schedules, and spring registration support begin here.</p>
        </article>

        <article class="calendar-card" data-aos="fade-up" data-aos-delay="250">
          <span class="calendar-chip">Graduation</span>
          <h3>Commencement</h3>
          <strong>May 15, 2027</strong>
          <p>Students celebrate achievements and receive their official ceremony details.</p>
        </article>
      </div>

      <div class="calendar-note" data-aos="fade-up">
        <h3>Planning tip</h3>
        <p>Keep the priority deadline in mind and confirm your registration dates in the student portal before the semester starts.</p>
      </div>
    `
  },
  'course-catalog': {
    title: 'Course Catalog',
    badge: 'Programs & Curriculum',
    subtitle: 'Browse the academic pathways, course planning guides, and registration guidance available to students at Skyra Institute.',
    content: `
      <div class="info-hero-card" data-aos="fade-up">
        <p class="eyebrow">Student planning</p>
        <h2>Explore Our Curriculum</h2>
        <p>The Course Catalog provides comprehensive details on all undergraduate and graduate courses offered at Skyra Institute, including prerequisites, credit hours, and descriptions.</p>
        <ul class="feature-list">
          <li><i class="fas fa-check-circle"></i> Clear program and course pathways</li>
          <li><i class="fas fa-check-circle"></i> Prerequisite and credit guidance</li>
          <li><i class="fas fa-check-circle"></i> Student portal registration support</li>
        </ul>
      </div>

      <div class="calendar-grid">
        <article class="calendar-card" data-aos="fade-up">
          <span class="calendar-chip">Programs</span>
          <h3>Undergraduate Degrees</h3>
          <strong>Business, Engineering, Computer Science</strong>
          <p>Choose from foundational and advanced pathways designed for academic growth.</p>
        </article>

        <article class="calendar-card" data-aos="fade-up" data-aos-delay="100">
          <span class="calendar-chip">Graduate Study</span>
          <h3>Graduate Programs</h3>
          <strong>AI, Leadership, Robotics</strong>
          <p>Build specialized expertise with research-driven and industry-aligned learning.</p>
        </article>

        <article class="calendar-card" data-aos="fade-up" data-aos-delay="150">
          <span class="calendar-chip">Registration</span>
          <h3>Class Planning</h3>
          <strong>Portal-based enrollment</strong>
          <p>Use the Student Portal to review schedules, check prerequisites, and register.</p>
        </article>

        <article class="calendar-card" data-aos="fade-up" data-aos-delay="200">
          <span class="calendar-chip">Support</span>
          <h3>Academic Advising</h3>
          <strong>Faculty and student success teams</strong>
          <p>Get help mapping your courses, requirements, and graduation timeline.</p>
        </article>
      </div>

      <div class="calendar-note" data-aos="fade-up">
        <h3>Registration reminder</h3>
        <p><em>Please log in to the Student Portal to register for classes.</em></p>
      </div>
    `
  },
  'library': {
    title: 'Library Services',
    badge: 'Research & Learning Hub',
    subtitle: 'Discover the campus resources, study support, and digital collections available through Skyra Central Library.',
    content: `
      <div class="info-hero-card" data-aos="fade-up">
        <p class="eyebrow">Campus resource</p>
        <h2>The Heart of Research</h2>
        <p>The Skyra Central Library offers over 2 million physical volumes and access to 150+ premium academic databases.</p>
        <ul class="feature-list">
          <li><i class="fas fa-check-circle"></i> 24/7 access during academic terms</li>
          <li><i class="fas fa-check-circle"></i> Research consultations and study support</li>
          <li><i class="fas fa-check-circle"></i> Interlibrary loan and group room bookings</li>
        </ul>
      </div>

      <div class="calendar-grid">
        <article class="calendar-card" data-aos="fade-up">
          <span class="calendar-chip">Collections</span>
          <h3>Physical & Digital Library</h3>
          <strong>2M+ books and 150+ databases</strong>
          <p>Access scholarly resources, journals, and materials for every academic discipline.</p>
        </article>

        <article class="calendar-card" data-aos="fade-up" data-aos-delay="100">
          <span class="calendar-chip">Support</span>
          <h3>Research Assistance</h3>
          <strong>Consultations and citation help</strong>
          <p>Connect with librarians for project planning, source evaluation, and academic guidance.</p>
        </article>

        <article class="calendar-card" data-aos="fade-up" data-aos-delay="150">
          <span class="calendar-chip">Study Spaces</span>
          <h3>Group & Quiet Rooms</h3>
          <strong>Flexible booking for students</strong>
          <p>Reserve collaborative spaces and dedicated quiet zones for focused work.</p>
        </article>

        <article class="calendar-card" data-aos="fade-up" data-aos-delay="200">
          <span class="calendar-chip">Access</span>
          <h3>Library Services</h3>
          <strong>Open around the clock during term</strong>
          <p>Use online resources, digital lending, and in-person support whenever you need it.</p>
        </article>
      </div>

      <div class="calendar-note" data-aos="fade-up">
        <h3>Need help?</h3>
        <p>Visit the library desk or contact the campus support team for recommendations and access guidance.</p>
      </div>
    `
  },
  'title-ix': {
    title: 'Title IX Policy',
    content: `
      <h2>Commitment to Equality</h2>
      <p>Skyra Institute of Technology does not discriminate on the basis of sex in its education programs and activities. We are committed to maintaining a safe and respectful campus environment.</p>
      <p>To report a Title IX concern, please contact the Title IX Coordinator at titleix@skyra.edu.</p>
    `
  },
  'accessibility': {
    title: 'Accessibility Statement',
    content: `
      <h2>Web Accessibility</h2>
      <p>Skyra Institute is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards (WCAG 2.1 AA).</p>
    `
  },
  'privacy': {
    title: 'Privacy Policy',
    content: `
      <h2>Data Privacy</h2>
      <p>We take your privacy seriously. This policy outlines how we collect, use, and protect student and public data in compliance with FERPA and GDPR regulations.</p>
    `
  }
};
