import { resumePdfPaths } from '@/data/resume';

/* Download icon — inline SVG (lucide-style), inherits currentColor */
function IconDownload({ className = 'h-[18px] w-[18px]' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 3v12" />
      <path d="m7 11 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

/**
 * The two résumé download buttons — English and Persian PDFs, shipped as
 * static files in `public/resume/` (paths centralized in `data/resume.ts`).
 * One primary (gold) + one secondary (outline) keeps a clear visual hierarchy.
 */
export function ResumeDownloadButtons({
  size = 'md',
}: {
  size?: 'sm' | 'md' | 'lg';
}) {
  const pad =
    size === 'lg' ? 'px-8 py-3.5 text-lg' : size === 'sm' ? 'px-4 py-1.5 text-[13px]' : 'px-6 py-3 text-base';
  const icon = size === 'lg' ? 'h-5 w-5' : size === 'sm' ? 'h-[15px] w-[15px]' : 'h-[18px] w-[18px]';

  return (
    <div className="flex flex-col items-stretch gap-3.5 sm:flex-row sm:items-center">
      <a
        href={resumePdfPaths.en}
        download="Ali-Shahidi-Resume-EN.pdf"
        lang="en"
        dir="ltr"
        className={`cta-glow group inline-flex items-center justify-center gap-2.5 rounded-full bg-gold font-display font-semibold text-void transition-transform hover:scale-[1.03] ${pad}`}
      >
        <IconDownload className={`${icon} transition-transform group-hover:translate-y-0.5`} />
        <span>
          Download CV
          <span className="ms-2 font-mono text-xs font-normal opacity-70">English · PDF</span>
        </span>
      </a>
      <a
        href={resumePdfPaths.fa}
        download="Ali-Shahidi-Resume-FA.pdf"
        lang="fa"
        dir="rtl"
        className={`group inline-flex items-center justify-center gap-2.5 rounded-full border border-plasma/40 font-display font-semibold text-starlight transition-colors hover:border-plasma hover:text-plasma ${pad}`}
      >
        <IconDownload className={`${icon} transition-transform group-hover:translate-y-0.5`} />
        <span dir="rtl">
          دانلود رزومه
          <span className="ms-2 block font-mono text-xs font-normal text-deep-grey sm:inline">
            فارسی · PDF
          </span>
        </span>
      </a>
    </div>
  );
}
