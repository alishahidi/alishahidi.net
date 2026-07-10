export type ResumeLang = 'en' | 'fa';

export interface ResumeExperience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
  skills: string[];
}

export interface ResumeEducation {
  degree: string;
  school: string;
  period: string;
  note?: string;
}

export interface ResumeContent {
  dir: 'ltr' | 'rtl';
  name: string;
  title: string;
  contact: {
    website: string;
    websiteUrl: string;
    email: string;
    phone: string;
    phoneDisplay: string;
    github: string;
    githubUrl: string;
    location: string;
  };
  labels: {
    summary: string;
    experience: string;
    education: string;
    skills: string;
    softSkills: string;
    languages: string;
    personal: string;
    skillsUsed: string;
  };
  summary: string[];
  experience: ResumeExperience[];
  education: ResumeEducation[];
  skills: string[];
  softSkills: string[];
  languages: string[];
  personal: string[];
}

export const resume: Record<ResumeLang, ResumeContent> = {
  en: {
    dir: 'ltr',
    name: 'Ali Shahidi',
    title: 'Backend Developer — Java & Spring Boot',
    contact: {
      website: 'alishahidi.github.io',
      websiteUrl: 'https://alishahidi.github.io',
      email: 'alishahidi1376@gmail.com',
      phone: '+989354162611',
      phoneDisplay: '+98 935 416 2611',
      github: 'github.com/alishahidi',
      githubUrl: 'https://github.com/alishahidi',
      location: 'Tehran, Iran',
    },
    labels: {
      summary: 'Profile',
      experience: 'Experience',
      education: 'Education',
      skills: 'Technical Skills',
      softSkills: 'Strengths',
      languages: 'Languages',
      personal: 'Personal',
      skillsUsed: 'Skills',
    },
    summary: [
        'Backend software engineer specializing in Java and Spring Boot, focused on designing and implementing server-side systems, software architecture, and scalable, reliable services — with particular attention to data structures and how the components of a system communicate.',
        'I approach each project beyond the code itself: stability, extensibility, and precision of design come first. My aim is to build systems that don\'t merely work, but that teams can depend on with confidence.',
      ],
    experience: [
        {
          role: 'Java Software Developer',
          company: 'Navashgaran Asr Parseh',
          period: 'Feb 2024 — Present',
          bullets: [
              'Develop, maintain, and optimize enterprise-scale backend services with Java and Spring Boot.',
              'Design and implement RESTful APIs for high-traffic production systems.',
              'Contribute to layered, service-oriented architecture design.',
              'Drive the migration of data from legacy systems to modern data structures.',
              'Collaborate closely with backend, database, and infrastructure teams.',
              'Share technical leadership through code review, technical decision-making, and mentoring of junior and mid-level developers; serve as tech lead on parts of the project.',
              'Prioritize scalability, stability, and maintainability across production systems.',
            ],
          skills: [
              'Java',
              'Spring Boot',
              'Backend Architecture',
              'Data Migration',
            ],
        },
        {
          role: 'Backend Developer (Intern)',
          company: 'Neshan Maps',
          period: 'Aug 2023 — Sep 2023',
          bullets: [
              'Joined the backend team as a formal intern, contributing to backend services for live product features.',
              'Gained hands-on experience with microservices architecture.',
              'Implemented caching and data management with Redis.',
              'Completed Neshan\'s specialized backend bootcamp, adopting professional development workflows and production practices.',
            ],
          skills: [
              'Backend Development',
              'Redis',
              'Microservices',
              'REST API',
              'Git',
            ],
        },
        {
          role: 'Software Developer (Frontend Focus)',
          company: 'LaunchingMax',
          period: 'Feb 2023 — Jul 2023',
          bullets: [
              'Built user interfaces for organizational web applications with React.js and HTML5.',
              'Implemented web pages and integrated them with backend APIs.',
              'Collaborated closely with the backend team in a team-oriented environment.',
              'Enhanced UI/UX and contributed to the product development process in a company setting.',
            ],
          skills: [
              'React.js',
              'HTML5',
              'JavaScript',
              'Frontend Development',
              'Teamwork',
            ],
        },
        {
          role: 'PHP Developer',
          company: 'Freelance',
          period: 'Jul 2019 — Feb 2023',
          bullets: [
              'Developed web applications and backend systems with PHP and Laravel.',
              'Designed and implemented backend logic and database interactions.',
              'Applied MVC architecture to build modular, maintainable components.',
              'Built user interfaces with HTML, CSS, and Bootstrap alongside the backend.',
              'Designed and implemented Apantos, a custom PHP framework focused on security, modularity, and ease of development.',
              'Delivered independent projects end to end — from requirements analysis through implementation to final delivery.',
            ],
          skills: [
              'PHP',
              'Laravel',
              'MySQL',
              'Bootstrap',
              'System Design',
              'MVC',
            ],
        },
      ],
    education: [
        {
          degree: 'B.Sc. Computer Engineering',
          school: 'Islamic Azad University, Tehran',
          period: '2025 — Present',
        },        {
          degree: 'B.Sc. Computer Engineering',
          school: 'Khayyam University, Mashhad',
          period: '2022 — 2025',
          note: 'Withdrew after relocating to Tehran.',
        },
      ],
    skills: [
        'Java',
        'Spring Boot',
        'Hibernate',
        'Oracle',
        'MySQL',
        'Redis',
        'RabbitMQ',
        'Docker',
        'Linux',
        'RESTful API Design',
        'System Design',
        'Multithreading',
        'Data Migration',
        'Unit Testing',
        'JSP',
        'Git',
        'Python (tooling)',
        'Frontend basics',
      ],
    softSkills: [
        'Problem solving',
        'Analytical thinking',
        'Ownership & accountability',
        'Effective teamwork',
        'Composure under pressure',
        'Focus in demanding conditions',
      ],
    languages: [
        'Persian (native)',
        'English (intermediate)',
      ],
    personal: [
        'Born 2004',
        'Based in Tehran (Haft-e Tir)',
        'Military service: educational exemption',
        'Single',
      ],
  },

  fa: {
    dir: 'rtl',
    name: 'علی شهیدی',
    title: 'توسعه‌دهنده بک‌اند — Java و Spring Boot',
    contact: {
      website: 'alishahidi.github.io',
      websiteUrl: 'https://alishahidi.github.io',
      email: 'alishahidi1376@gmail.com',
      phone: '+989354162611',
      phoneDisplay: '۰۹۳۵۴۱۶۲۶۱۱',
      github: 'github.com/alishahidi',
      githubUrl: 'https://github.com/alishahidi',
      location: 'تهران، هفت‌تیر',
    },
    labels: {
      summary: 'درباره من',
      experience: 'تجربه‌های کاری',
      education: 'سوابق تحصیلی',
      skills: 'مهارت‌های فنی',
      softSkills: 'نقاط قوت',
      languages: 'زبان‌ها',
      personal: 'اطلاعات شخصی',
      skillsUsed: 'مهارت‌ها',
    },
    summary: [
        'مهندس نرم‌افزار بک‌اند با تخصص در Java و Spring Boot؛ متمرکز بر طراحی و پیاده‌سازی سیستم‌های سمت سرور، معماری نرم‌افزار و ساخت سرویس‌های مقیاس‌پذیر و قابل‌اعتماد، با توجه ویژه به ساختارهای داده و نحوه‌ی ارتباط اجزای مختلف سیستم.',
        'در هر پروژه فراتر از کدنویسی صرف نگاه می‌کنم؛ پایداری، قابلیت توسعه و دقت در طراحی در اولویت نخست قرار دارند. هدف من ساختن سیستم‌هایی است که نه‌فقط کار کنند، بلکه بتوان با اطمینان به آن‌ها تکیه کرد.',
      ],
    experience: [
        {
          role: 'توسعه‌دهنده نرم‌افزار جاوا (Java Software Developer)',
          company: 'ناوشگران عصر پارسه',
          period: 'بهمن ۱۴۰۲ تا اکنون',
          bullets: [
              'توسعه، نگهداری و بهینه‌سازی سرویس‌های بک‌اند در مقیاس سازمانی با Java و Spring Boot.',
              'طراحی و پیاده‌سازی APIهای RESTful برای سیستم‌های پرترافیک در محیط Production.',
              'مشارکت در طراحی معماری لایه‌ای و سرویس‌محور.',
              'راهبری مهاجرت داده از سیستم‌های Legacy به ساختارهای داده‌ی مدرن.',
              'همکاری نزدیک با تیم‌های بک‌اند، پایگاه‌داده و زیرساخت.',
              'مشارکت در راهبری فنی از طریق Code Review، تصمیم‌گیری‌های فنی و منتورینگ توسعه‌دهندگان junior و mid-level؛ ایفای نقش Tech Lead در بخش‌هایی از پروژه.',
              'اولویت‌دادن به مقیاس‌پذیری، پایداری و قابلیت نگهداری در سراسر سیستم‌های Production.',
            ],
          skills: [
              'Java',
              'Spring Boot',
              'Backend Architecture',
              'Data Migration',
            ],
        },
        {
          role: 'توسعه‌دهنده بک‌اند (کارآموز)',
          company: 'Neshan Maps',
          period: 'مرداد ۱۴۰۲ تا شهریور ۱۴۰۲',
          bullets: [
              'فعالیت در تیم بک‌اند در قالب کارآموزی رسمی و مشارکت در توسعه‌ی سرویس‌های بک‌اند برای قابلیت‌های واقعی محصول.',
              'کسب تجربه‌ی عملی با معماری Microservices.',
              'پیاده‌سازی کش و مدیریت داده با Redis.',
              'گذراندن بوت‌کمپ تخصصی بک‌اند نشان و به‌کارگیری فرآیندهای حرفه‌ای توسعه و شیوه‌های محیط Production.',
            ],
          skills: [
              'Backend Development',
              'Redis',
              'Microservices',
              'REST API',
              'Git',
            ],
        },
        {
          role: 'توسعه‌دهنده نرم‌افزار (Software Developer — Frontend Focus)',
          company: 'LaunchingMax',
          period: 'بهمن ۱۴۰۱ تا تیر ۱۴۰۲',
          bullets: [
              'توسعه‌ی رابط کاربری وب‌اپلیکیشن‌های سازمانی با React.js و HTML5.',
              'پیاده‌سازی صفحات وب و یکپارچه‌سازی آن‌ها با APIهای بک‌اند.',
              'همکاری نزدیک با تیم بک‌اند در محیطی تیمی.',
              'بهبود تجربه و رابط کاربری (UI/UX) و مشارکت در فرآیند توسعه‌ی محصول در ساختار شرکتی.',
            ],
          skills: [
              'React.js',
              'HTML5',
              'JavaScript',
              'Frontend Development',
              'کار تیمی',
            ],
        },
        {
          role: 'توسعه‌دهنده PHP (PHP Developer)',
          company: 'فریلنسر',
          period: 'تیر ۱۳۹۸ تا بهمن ۱۴۰۱',
          bullets: [
              'توسعه‌ی وب‌اپلیکیشن‌ها و سیستم‌های بک‌اند با PHP و Laravel.',
              'طراحی و پیاده‌سازی منطق بک‌اند و تعامل با پایگاه‌داده.',
              'به‌کارگیری معماری MVC برای ساخت ماژول‌های قابل‌توسعه و قابل‌نگهداری.',
              'توسعه‌ی رابط کاربری با HTML، CSS و Bootstrap در کنار بک‌اند.',
              'طراحی و پیاده‌سازی فریم‌ورک اختصاصی PHP با نام Apantos، متمرکز بر امنیت، ماژولار بودن و سادگی توسعه.',
              'انجام پروژه‌های مستقل به‌صورت سرتاسری — از تحلیل نیازمندی‌ها تا پیاده‌سازی و تحویل نهایی.',
            ],
          skills: [
              'PHP',
              'Laravel',
              'MySQL',
              'Bootstrap',
              'طراحی سیستم',
              'معماری MVC',
            ],
        },
      ],
    education: [
        {
          degree: 'مهندسی کامپیوتر (کارشناسی)',
          school: 'دانشگاه آزاد اسلامی، تهران',
          period: '۱۴۰۴ — در حال تحصیل',
        },        {
          degree: 'مهندسی کامپیوتر (کارشناسی)',
          school: 'دانشگاه خیام مشهد',
          period: '۱۴۰۱ تا ۱۴۰۴',
          note: 'انصراف از تحصیل به دلیل مهاجرت به تهران.',
        },
      ],
    skills: [
        'Java',
        'Spring Boot',
        'Hibernate',
        'Oracle',
        'MySQL',
        'Redis',
        'RabbitMQ',
        'Docker',
        'Linux',
        'RESTful API Design',
        'System Design',
        'Multithreading',
        'Data Migration',
        'Unit Testing',
        'JSP',
        'Git',
        'Python (ابزار کمکی)',
        'آشنایی با فرانت‌اند',
      ],
    softSkills: [
        'حل مسئله',
        'تفکر تحلیلی',
        'مسئولیت‌پذیری و پاسخ‌گویی',
        'کار تیمی مؤثر',
        'حفظ آرامش زیر فشار',
        'تمرکز در شرایط دشوار',
      ],
    languages: [
        'فارسی (زبان مادری)',
        'انگلیسی (متوسط)',
      ],
    personal: [
        'سال تولد: ۱۳۸۳',
        'ساکن تهران، هفت‌تیر',
        'وضعیت سربازی: معافیت تحصیلی',
        'وضعیت تأهل: مجرد',
      ],
  },
};

export const resumePdfPaths: Record<ResumeLang, string> = {
  en: '/resume/Ali-Shahidi-Resume-EN.pdf',
  fa: '/resume/Ali-Shahidi-Resume-FA.pdf',
};
