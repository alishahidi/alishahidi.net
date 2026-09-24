export type ResumeLang = 'en' | 'fa';

export interface ResumeExperience {
  role: string;
  company: string;
  period: string;
  location?: string;
  intro?: string;
  bullets: string[];
  skills: string[];
}

export interface ResumeEducation {
  degree: string;
  school: string;
  period: string;
  note?: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
  note?: string;
}

export interface ResumeProject {
  title: string;
  description: string;
  stack: string[];
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
    linkedin: string;
    linkedinUrl: string;
    location: string;
  };
  labels: {
    summary: string;
    experience: string;
    projects: string;
    projectsNote: string;
    education: string;
    skills: string;
    softSkills: string;
    languages: string;
    personal: string;
    skillsUsed: string;
  };
  summary: string[];
  experience: ResumeExperience[];
  projects: ResumeProject[];
  education: ResumeEducation[];
  skillGroups: SkillGroup[];
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
      website: 'alishahidi.net',
      websiteUrl: 'https://alishahidi.net',
      email: 'alishahidi1376@gmail.com',
      phone: '+989354162611',
      phoneDisplay: '+98 935 416 2611',
      github: 'github.com/alishahidi',
      githubUrl: 'https://github.com/alishahidi',
      linkedin: 'linkedin.com/in/alishahidi-7160b6200',
      linkedinUrl: 'https://linkedin.com/in/alishahidi-7160b6200',
      location: 'Tehran, Iran',
    },
    labels: {
      summary: 'Profile',
      experience: 'Experience',
      projects: 'Selected Projects',
      projectsNote: 'Private / under NDA — described at a high level, without client or product names.',
      education: 'Education',
      skills: 'Technical Skills',
      softSkills: 'Strengths',
      languages: 'Languages',
      personal: 'Personal',
      skillsUsed: 'Skills',
    },
    summary: [
      'Backend software engineer specialized in Java and Spring Boot, focused on distributed server-side systems, software architecture, and scalable, reliable services. Works across the full backend stack: microservices and event-driven architecture, relational and geospatial data, messaging and streaming, and the infrastructure that runs them. Prioritizes stability, maintainability, and design precision — building systems that don\'t just work, but can be trusted.',
    ],
    experience: [
      {
        role: 'Backend Developer',
        company: 'Navashgaran-e Asr-e Parseh',
        period: '02/2024 — Present',
        location: 'Tehran',
        bullets: [
          'Developed, maintained, and optimized enterprise-scale backend services using Java and Spring Boot.',
          'Designed and implemented RESTful APIs for high-traffic production systems.',
          'Contributed to layered, service-oriented architecture design.',
          'Led data migration from legacy systems to modern data structures.',
          'Collaborated closely with backend, database, and infrastructure teams.',
          'Contributed to technical leadership through code review, technical decision-making, and mentoring junior and mid-level developers; served as Tech Lead on select parts of the project.',
          'Prioritized scalability, stability, and maintainability across production systems.',
        ],
        skills: ['Java', 'Spring Boot', 'Backend Architecture', 'Data Migration', 'Docker', 'Docker Swarm', 'NFC', 'LLM'],
      },
      {
        role: 'Freelance Backend Developer (Concurrent)',
        company: 'Remote',
        period: '04/2024 — Present',
        location: 'Remote',
        intro:
          'Independent backend engineering work carried out alongside full-time employment, delivering production-grade systems for private clients under NDA (no employer or product names disclosed).',
        bullets: [],
        skills: [],
      },
      {
        role: 'Backend Developer Intern',
        company: 'Neshan Maps',
        period: '07/2023 — 09/2023',
        location: 'Mashhad',
        bullets: [
          'Worked on the backend team as a formal intern, contributing to backend services for real product features.',
          'Gained hands-on experience with microservices architecture.',
          'Implemented caching and data management with Redis.',
          'Completed Neshan\'s specialized backend bootcamp, applying professional development processes and production practices.',
        ],
        skills: ['Backend Development', 'Git', 'Java 17', 'Spring Boot', 'PostgreSQL', 'Microservices', 'RabbitMQ', 'Redis', 'Docker', 'PostGIS'],
      },
      {
        role: 'Software Developer — Frontend Focus',
        company: 'Launching Max',
        period: '02/2023 — 07/2023',
        location: 'Mashhad',
        bullets: [
          'Developed user interfaces for enterprise web applications using React.js and HTML5.',
          'Implemented web pages and integrated them with backend APIs.',
          'Worked closely with the backend team in a team-based environment.',
          'Improved UI/UX and contributed to the product development process within a company structure.',
        ],
        skills: ['Teamwork', 'React.js', 'HTML5', 'JavaScript', 'Frontend Development'],
      },
    ],
    projects: [
      {
        title: 'Enterprise Backend Framework & Code-Generation Platform',
        description:
          'A modular Spring Boot framework and CLI code generator that scaffolds production-ready services with security, persistence, caching, messaging, workflow, and observability wired in — a shared foundation that accelerates delivery across teams.',
        stack: ['Java 21', 'Spring Boot', 'Spring Cloud', 'Multi-module Maven (BOM + 20+ modules)', 'OAuth2 / OIDC', 'Redis', 'RabbitMQ', 'Resilience4j', 'Camunda'],
      },
      {
        title: 'Real-Time Fleet GPS Tracking & Navigation Platform',
        description:
          'Real-time ingestion of vehicle telemetry over TCP/UDP with live position streaming to interactive maps, geofencing, rules-based alerting, and trip analytics for managing large fleets.',
        stack: ['Java 21', 'Spring Boot', 'Spring Cloud Gateway', 'Netty', 'PostgreSQL / PostGIS', 'RabbitMQ', 'Redis', 'WebSocket', 'MinIO', 'React / Next.js', 'MapLibre'],
      },
      {
        title: 'Visual Content Design Studio (Canvas Editor)',
        description:
          'A browser-based design studio (Canva/Figma-style) for composing social posts, stories, and menu layouts from reusable widgets, with a server-side render/export pipeline and multi-channel publishing on a contract-first microservices platform.',
        stack: ['Java 21', 'Spring Boot', 'OpenAPI / gRPC (contract-first)', 'Apache Kafka (Outbox / Saga)', 'PostgreSQL (db-per-service)', 'ClickHouse', 'Elasticsearch', 'Kubernetes / Helm', 'Next.js'],
      },
      {
        title: 'Multi-Channel Social-Media Management & Analytics Platform',
        description:
          'A multi-tenant platform that unifies inbound conversations across channels, with scheduled publishing, rule-driven automation, and engagement/sentiment analytics over high-volume message data.',
        stack: ['Java 21', 'Spring Boot', 'Spring Cloud Gateway', 'PostgreSQL / PostGIS', 'ScyllaDB', 'Redis', 'RabbitMQ', 'Camunda BPM', 'Python / FastAPI', 'React'],
      },
      {
        title: 'Online Learning / Academy Platform',
        description:
          'An event-driven e-learning platform with course catalog, enrollment, payments, verifiable certificates, and CMS-managed content across dedicated user, catalog, commerce, content, media, and notification services.',
        stack: ['Java 21', 'Spring Boot', 'Spring Cloud (Eureka, Config, Gateway)', 'PostgreSQL', 'RabbitMQ', 'MinIO', 'JWT / RBAC', 'Docker'],
      },
      {
        title: 'E-commerce Platform (Specialty Retail)',
        description:
          'A production e-commerce backend built as Spring Boot microservices behind an API gateway, serving a customer storefront, a self-service panel, and an administrative back office.',
        stack: ['Java 21', 'Spring Boot', 'Spring Cloud (Eureka, Config, Gateway)', 'PostgreSQL', 'RabbitMQ', 'Redis', 'MinIO'],
      },
      {
        title: 'Zero-Trust Internal Network Access Gateway',
        description:
          'A split-tunnel, least-privilege access gateway that exposes only explicitly granted internal services at stable virtual addresses, with a reconcile loop that renders WireGuard peers, NAT/firewall rules, and DNS zones from database state.',
        stack: ['Python', 'FastAPI', 'PostgreSQL', 'WireGuard', 'nftables', 'CoreDNS', 'JWT', 'Docker', 'React', 'Electron'],
      },
      {
        title: 'Assistive Hands-Free Interaction System (IoT + Computer Vision)',
        description:
          'A privacy-first assistive system that fuses head-motion (IMU) and webcam eye/gaze tracking into calibrated input events, enabling hands-free computer and smart-home control for people with limited mobility.',
        stack: ['Python', 'MQTT', 'OpenCV', 'MediaPipe', 'NumPy', 'PySerial', 'Arduino / C++ (BNO085 IMU)', 'Event-driven services'],
      },
    ],
    education: [
      {
        degree: 'B.Sc. Computer Engineering',
        school: 'Islamic Azad University',
        period: '03/2025 — Present',
        note: 'Tehran.',
      },
      {
        degree: 'B.Sc. Computer Engineering',
        school: 'Khayyam University',
        period: '03/2022 — 03/2025',
        note: 'Mashhad — transferred to Tehran due to relocation.',
      },
    ],
    skillGroups: [
      {
        label: 'Languages',
        items: ['Java', 'Python', 'TypeScript / JavaScript', 'SQL', 'PHP'],
      },
      {
        label: 'Backend & Frameworks',
        items: ['Spring Boot', 'Spring Cloud', 'Hibernate / JPA', 'Laravel', 'Netty', 'REST', 'gRPC', 'WebSocket'],
      },
      {
        label: 'Concurrency & Performance',
        items: [
          'Multithreading',
          'JVM Optimization',
          'Garbage Collection Tuning',
          'Caching (Redis / Redisson)',
          'Resilience4j',
          'Connection Pooling',
          'Thread-Safe High-Throughput Services',
          'Production Profiling',
        ],
      },
      {
        label: 'Architecture & Design',
        items: [
          'Microservices',
          'API Gateway',
          'Event-Driven Architecture (Outbox / Saga)',
          'Domain-Driven Design',
          'Database-per-Service',
          'System Design',
          'Design Patterns',
          'Data Migration Patterns',
        ],
      },
      {
        label: 'Databases & Geospatial',
        items: ['PostgreSQL', 'PostGIS', 'Oracle DB', 'PL/SQL', 'ScyllaDB / Cassandra', 'Redis', 'MySQL', 'ClickHouse', 'Elasticsearch'],
      },
      {
        label: 'Messaging & Streaming',
        items: ['Apache Kafka', 'RabbitMQ', 'MQTT', 'WebSocket / STOMP'],
      },
      {
        label: 'DevOps & Infrastructure',
        items: ['Docker', 'Kubernetes (Helm / ArgoCD)', 'Linux', 'CI/CD (Jenkins)', 'Git', 'MikroTik networking', 'MinIO / Object Storage', 'Proxmox / ESXi', 'Observability (Prometheus / Zipkin)'],
      },
      {
        label: 'Practices & Tools',
        items: ['Unit & Integration Testing (JUnit, Testcontainers)', 'Code Review', 'Prompt Engineering', 'LLM-Assisted Development'],
      },
    ],
    softSkills: [
      'Problem-solving',
      'Analytical Thinking',
      'Accountability',
      'Effective Teamwork',
      'Composure Under Pressure',
      'Focus in Difficult Conditions',
    ],
    languages: ['Persian (Native)', 'English'],
    personal: [
      'Born 2004',
      'Based in Tehran',
      'Military service: educational exemption',
      'Single',
    ],
  },

  fa: {
    dir: 'rtl',
    name: 'علی شهیدی',
    title: 'توسعه‌دهنده بک‌اند — Java و Spring Boot',
    contact: {
      website: 'alishahidi.net',
      websiteUrl: 'https://alishahidi.net',
      email: 'alishahidi1376@gmail.com',
      phone: '+989354162611',
      phoneDisplay: '+98 935 416 2611',
      github: 'github.com/alishahidi',
      githubUrl: 'https://github.com/alishahidi',
      linkedin: 'linkedin.com/in/alishahidi-7160b6200',
      linkedinUrl: 'https://linkedin.com/in/alishahidi-7160b6200',
      location: 'تهران، ایران',
    },
    labels: {
      summary: 'درباره من',
      experience: 'تجربه‌های کاری',
      projects: 'پروژه‌های منتخب',
      projectsNote: 'خصوصی / تحت عدم‌افشا — بدون ذکر نام کارفرما یا محصول و در سطح کلی توضیح داده شده‌اند.',
      education: 'سوابق تحصیلی',
      skills: 'مهارت‌های فنی',
      softSkills: 'نقاط قوت',
      languages: 'زبان‌ها',
      personal: 'اطلاعات شخصی',
      skillsUsed: 'مهارت‌ها',
    },
    summary: [
      'مهندس نرم‌افزار بک‌اند با تخصص در Java و Spring Boot؛ متمرکز بر سیستم‌های توزیع‌شدهٔ سمت سرور، معماری نرم‌افزار و سرویس‌های مقیاس‌پذیر و قابل‌اعتماد. در سراسر لایه‌های بک‌اند کار می‌کند: میکروسرویس و معماری رویدادمحور، دادهٔ رابطه‌ای و مکان‌محور، پیام‌رسانی و استریمینگ، و زیرساختی که آن‌ها را اجرا می‌کند. پایداری، قابلیت نگهداری و دقت در طراحی در اولویت نخست‌اند — هدف، ساختن سیستم‌هایی است که نه‌فقط کار کنند، بلکه بتوان به آن‌ها اعتماد کرد.',
    ],
    experience: [
      {
        role: 'توسعه‌دهنده بک‌اند (Backend Developer)',
        company: 'ناوشگران عصر پارسه',
        period: '۰۲/۱۴۰۳ تا اکنون',
        location: 'تهران',
        bullets: [
          'توسعه، نگهداری و بهینه‌سازی سرویس‌های بک‌اند در مقیاس سازمانی با Java و Spring Boot.',
          'طراحی و پیاده‌سازی APIهای RESTful برای سیستم‌های پرترافیک در محیط Production.',
          'مشارکت در طراحی معماری لایه‌ای و سرویس‌محور.',
          'راهبری مهاجرت داده از سیستم‌های Legacy به ساختارهای داده‌ی مدرن.',
          'همکاری نزدیک با تیم‌های بک‌اند، پایگاه‌داده و زیرساخت.',
          'مشارکت در راهبری فنی از طریق Code Review، تصمیم‌گیری‌های فنی و منتورینگ توسعه‌دهندگان junior و mid-level؛ ایفای نقش Tech Lead در بخش‌هایی از پروژه.',
          'اولویت‌دادن به مقیاس‌پذیری، پایداری و قابلیت نگهداری در سراسر سیستم‌های Production.',
        ],
        skills: ['Java', 'Spring Boot', 'Backend Architecture', 'Data Migration', 'Docker', 'Docker Swarm', 'NFC', 'LLM'],
      },
      {
        role: 'توسعه‌دهنده بک‌اند فریلنسر (موازی)',
        company: 'دورکار',
        period: '۰۴/۱۴۰۳ تا اکنون',
        location: 'Remote',
        intro:
          'کار مستقل مهندسی بک‌اند در کنار شغل تمام‌وقت، با تحویل سیستم‌های در سطح Production برای کارفرمایان خصوصی تحت عدم‌افشا (بدون ذکر نام کارفرما یا محصول).',
        bullets: [],
        skills: [],
      },
      {
        role: 'کارآموز توسعه‌دهنده بک‌اند (Backend Developer Intern)',
        company: 'Neshan Maps',
        period: '۰۷/۱۴۰۲ تا ۰۹/۱۴۰۲',
        location: 'مشهد',
        bullets: [
          'فعالیت در تیم بک‌اند در قالب کارآموزی رسمی و مشارکت در توسعه‌ی سرویس‌های بک‌اند برای قابلیت‌های واقعی محصول.',
          'کسب تجربه‌ی عملی با معماری Microservices.',
          'پیاده‌سازی کش و مدیریت داده با Redis.',
          'گذراندن بوت‌کمپ تخصصی بک‌اند نشان و به‌کارگیری فرآیندهای حرفه‌ای توسعه و شیوه‌های محیط Production.',
        ],
        skills: ['Backend Development', 'Git', 'Java 17', 'Spring Boot', 'PostgreSQL', 'Microservices', 'RabbitMQ', 'Redis', 'Docker', 'PostGIS'],
      },
      {
        role: 'توسعه‌دهنده نرم‌افزار (Frontend Focus)',
        company: 'Launching Max',
        period: '۱۱/۱۴۰۱ تا ۰۴/۱۴۰۲',
        location: 'مشهد',
        bullets: [
          'توسعه‌ی رابط کاربری وب‌اپلیکیشن‌های سازمانی با React.js و HTML5.',
          'پیاده‌سازی صفحات وب و یکپارچه‌سازی آن‌ها با APIهای بک‌اند.',
          'همکاری نزدیک با تیم بک‌اند در محیطی تیمی.',
          'بهبود تجربه و رابط کاربری (UI/UX) و مشارکت در فرآیند توسعه‌ی محصول در ساختار شرکتی.',
        ],
        skills: ['کار تیمی', 'React.js', 'HTML5', 'JavaScript', 'Frontend Development'],
      },
    ],
    projects: [
      {
        title: 'فریم‌ورک بک‌اند سازمانی و پلتفرم تولید کد',
        description:
          'فریم‌ورک ماژولار مبتنی بر Spring Boot به‌همراه ابزار CLI تولید کد که سرویس‌های آمادهٔ Production را با امنیت، پایداری داده، کش، پیام‌رسانی، workflow و مشاهده‌پذیریِ از پیش‌آماده می‌سازد؛ بنیانی مشترک برای تسریع توسعه در تیم‌ها.',
        stack: ['Java 21', 'Spring Boot', 'Spring Cloud', 'Maven چندماژولی (BOM + ۲۰+ ماژول)', 'OAuth2 / OIDC', 'Redis', 'RabbitMQ', 'Resilience4j', 'Camunda'],
      },
      {
        title: 'پلتفرم بلادرنگ ردیابی GPS و ناوبری ناوگان',
        description:
          'دریافت بلادرنگ داده‌های تله‌متری خودرو روی TCP/UDP، پخش زندهٔ موقعیت روی نقشهٔ تعاملی، geofencing، هشداردهی مبتنی بر قواعد و تحلیل سفر برای مدیریت ناوگان‌های بزرگ.',
        stack: ['Java 21', 'Spring Boot', 'Spring Cloud Gateway', 'Netty', 'PostgreSQL / PostGIS', 'RabbitMQ', 'Redis', 'WebSocket', 'MinIO', 'React / Next.js', 'MapLibre'],
      },
      {
        title: 'استودیوی طراحی محتوای بصری (ویرایشگر بوم)',
        description:
          'استودیوی طراحی مبتنی بر وب (به سبک Canva/Figma) برای ساخت پست، استوری و منو از ویجت‌های قابل‌استفادهٔ مجدد، با خط‌لولهٔ رندر/خروجی سمت سرور و انتشار چندکاناله روی پلتفرم میکروسرویسِ قرارداد-محور.',
        stack: ['Java 21', 'Spring Boot', 'OpenAPI / gRPC (قرارداد-محور)', 'Apache Kafka (Outbox / Saga)', 'PostgreSQL (پایگاه‌داده به‌ازای هر سرویس)', 'ClickHouse', 'Elasticsearch', 'Kubernetes / Helm', 'Next.js'],
      },
      {
        title: 'پلتفرم مدیریت و تحلیل چندکانالهٔ شبکه‌های اجتماعی',
        description:
          'پلتفرم چنداجاره‌ای که مکالمات ورودی از کانال‌های مختلف را یکپارچه می‌کند؛ به‌همراه انتشار زمان‌بندی‌شده، اتوماسیون مبتنی بر قواعد و تحلیل تعامل/احساسات روی داده‌های پرحجم پیام.',
        stack: ['Java 21', 'Spring Boot', 'Spring Cloud Gateway', 'PostgreSQL / PostGIS', 'ScyllaDB', 'Redis', 'RabbitMQ', 'Camunda BPM', 'Python / FastAPI', 'React'],
      },
      {
        title: 'پلتفرم آموزش آنلاین (آکادمی)',
        description:
          'پلتفرم رویدادمحور آموزش آنلاین با کاتالوگ دوره، ثبت‌نام، پرداخت، صدور گواهیِ قابل‌راستی‌آزمایی و مدیریت محتوا در سرویس‌های دامنه‌ای مجزا.',
        stack: ['Java 21', 'Spring Boot', 'Spring Cloud (Eureka، Config، Gateway)', 'PostgreSQL', 'RabbitMQ', 'MinIO', 'JWT / RBAC', 'Docker'],
      },
      {
        title: 'پلتفرم فروشگاهی (خرده‌فروشی تخصصی)',
        description:
          'بک‌اند فروشگاهی در مقیاس Production به‌صورت میکروسرویس‌های Spring Boot پشت API Gateway — ویترین فروشگاه، پنل خودخدمتِ مشتری و بخش مدیریت.',
        stack: ['Java 21', 'Spring Boot', 'Spring Cloud (Eureka، Config، Gateway)', 'PostgreSQL', 'RabbitMQ', 'Redis', 'MinIO'],
      },
      {
        title: 'دروازهٔ دسترسی امن به شبکهٔ داخلی (Zero-Trust)',
        description:
          'دروازهٔ دسترسی با کمینه‌دسترسی که تنها سرویس‌های داخلیِ صریحاً مجازشده را در آدرس‌های مجازیِ پایدار در دسترس می‌گذارد؛ با حلقهٔ reconcile که peerهای WireGuard، قواعد NAT/فایروال و DNS را از وضعیت پایگاه‌داده می‌سازد.',
        stack: ['Python', 'FastAPI', 'PostgreSQL', 'WireGuard', 'nftables', 'CoreDNS', 'JWT', 'Docker', 'React', 'Electron'],
      },
      {
        title: 'سیستم تعامل بدون‌دستِ کمک‌رسان (IoT + بینایی ماشین)',
        description:
          'سیستم کمک‌رسانِ حریم‌خصوصی‌محور که حرکت سر (IMU) و ردیابی چشم/نگاه با وب‌کم را به رویدادهای ورودیِ کالیبره‌شده تبدیل می‌کند و کنترل بدون‌دستِ رایانه و خانهٔ هوشمند را برای افراد با تحرک محدود ممکن می‌سازد.',
        stack: ['Python', 'MQTT', 'OpenCV', 'MediaPipe', 'NumPy', 'PySerial', 'Arduino / C++ (IMU BNO085)', 'معماری رویدادمحور'],
      },
    ],
    education: [
      {
        degree: 'مهندسی کامپیوتر (کارشناسی)',
        school: 'دانشگاه آزاد اسلامی',
        period: '۰۷/۱۴۰۴ — در حال تحصیل',
        note: 'تهران.',
      },
      {
        degree: 'مهندسی کامپیوتر (کارشناسی)',
        school: 'دانشگاه خیام',
        period: '۰۷/۱۴۰۱ تا ۰۷/۱۴۰۴',
        note: 'مشهد — انتقال به تهران به دلیل مهاجرت.',
      },
    ],
    skillGroups: [
      {
        label: 'زبان‌ها',
        items: ['Java', 'Python', 'TypeScript / JavaScript', 'SQL', 'PHP'],
      },
      {
        label: 'بک‌اند و فریم‌ورک‌ها',
        items: ['Spring Boot', 'Spring Cloud', 'Hibernate / JPA', 'Laravel', 'Netty', 'REST', 'gRPC', 'WebSocket'],
      },
      {
        label: 'همزمانی و کارایی',
        items: [
          'Multithreading',
          'بهینه‌سازی JVM',
          'تنظیم Garbage Collection',
          'کش (Redis / Redisson)',
          'Resilience4j',
          'Connection Pooling',
          'سرویس‌های thread-safe و پرتراکنش',
          'پروفایلینگ در محیط Production',
        ],
      },
      {
        label: 'معماری و طراحی',
        items: [
          'Microservices',
          'API Gateway',
          'معماری رویدادمحور (Outbox / Saga)',
          'Domain-Driven Design',
          'پایگاه‌داده به‌ازای هر سرویس',
          'طراحی سیستم',
          'الگوهای طراحی',
          'الگوهای مهاجرت داده',
        ],
      },
      {
        label: 'پایگاه‌داده و مکان‌محور',
        items: ['PostgreSQL', 'PostGIS', 'Oracle DB', 'PL/SQL', 'ScyllaDB / Cassandra', 'Redis', 'MySQL', 'ClickHouse', 'Elasticsearch'],
      },
      {
        label: 'پیام‌رسانی و استریمینگ',
        items: ['Apache Kafka', 'RabbitMQ', 'MQTT', 'WebSocket / STOMP'],
      },
      {
        label: 'DevOps و زیرساخت',
        items: ['Docker', 'Kubernetes (Helm / ArgoCD)', 'Linux', 'CI/CD (Jenkins)', 'Git', 'شبکه‌سازی MikroTik', 'MinIO / ذخیره‌سازی شیء', 'Proxmox / ESXi', 'مشاهده‌پذیری (Prometheus / Zipkin)'],
      },
      {
        label: 'شیوه‌ها و ابزار',
        items: ['تست واحد و یکپارچگی (JUnit، Testcontainers)', 'Code Review', 'Prompt Engineering', 'توسعه به کمک LLM'],
      },
    ],
    softSkills: [
      'حل مسئله',
      'تفکر تحلیلی',
      'مسئولیت‌پذیری و پاسخ‌گویی',
      'کار تیمی مؤثر',
      'حفظ آرامش زیر فشار',
      'تمرکز در شرایط دشوار',
    ],
    languages: ['فارسی (زبان مادری)', 'انگلیسی'],
    personal: [
      'سال تولد: ۱۳۸۳',
      'ساکن تهران',
      'وضعیت سربازی: معافیت تحصیلی',
      'وضعیت تأهل: مجرد',
    ],
  },
};

/* The current, hand-authored résumé PDFs (public/resume/). These are the
   canonical files linked from every download button across the site. */
export const resumePdfPaths: Record<ResumeLang, string> = {
  en: '/resume/en-resume.pdf',
  fa: '/resume/fa-resume.pdf',
};
