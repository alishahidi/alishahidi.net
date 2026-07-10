'use client';

import { Suspense, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ResumeDocument } from '@/components/resume/ResumeDocument';
import { resumePdfPaths, type ResumeLang } from '@/data/resume';

function ResumeContent() {
  const searchParams = useSearchParams();
  const [lang, setLang] = useState<ResumeLang>(() =>
    searchParams.get('lang') === 'fa' ? 'fa' : 'en'
  );

  const switchLang = (next: ResumeLang) => {
    setLang(next);
    window.history.replaceState(null, '', `?lang=${next}`);
  };

  return (
    <div className="min-h-screen">
      {/* toolbar */}
      <header className="print-hidden sticky top-0 z-40 border-b border-white/5 bg-void/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center gap-3 px-4 py-3 sm:px-6">
          <Link
            href="/"
            className="group flex items-center gap-2 font-mono text-[13px] text-stardust transition-colors hover:text-gold-bright"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-gold shadow-[0_0_10px_2px_rgba(253,184,19,0.5)]" />
            Ali Shahidi
          </Link>

          <div className="ms-auto flex flex-wrap items-center gap-3">
            {/* language toggle */}
            <div
              role="group"
              aria-label="Resume language"
              className="flex overflow-hidden rounded-full border border-white/12 font-mono text-[13px]"
            >
              <button
                onClick={() => switchLang('en')}
                aria-pressed={lang === 'en'}
                className={`px-4 py-1.5 transition-colors ${
                  lang === 'en'
                    ? 'bg-gold font-semibold text-void'
                    : 'text-stardust hover:text-starlight'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => switchLang('fa')}
                aria-pressed={lang === 'fa'}
                className={`px-4 py-1.5 transition-colors ${
                  lang === 'fa'
                    ? 'bg-gold font-semibold text-void'
                    : 'text-stardust hover:text-starlight'
                }`}
              >
                فارسی
              </button>
            </div>

            <a
              href={resumePdfPaths[lang]}
              download
              className="rounded-full bg-gold px-4 py-1.5 font-mono text-[13px] font-semibold text-void transition hover:brightness-110"
            >
              {lang === 'fa' ? 'دانلود PDF' : 'Download PDF'}
            </a>
            <button
              onClick={() => window.print()}
              className="rounded-full border border-white/12 px-4 py-1.5 font-mono text-[13px] text-starlight transition-colors hover:border-gold hover:text-gold-bright"
            >
              {lang === 'fa' ? 'چاپ' : 'Print'}
            </button>
          </div>
        </div>
      </header>

      {/* document */}
      <main className="px-3 py-6 sm:px-6 sm:py-12">
        <ResumeDocument lang={lang} />
        <p className="print-hidden mx-auto mt-6 max-w-[210mm] text-center font-mono text-[12px] text-deep-grey">
          {lang === 'fa'
            ? 'نسخه HTML این رزومه — برای دریافت فایل PDF از دکمه دانلود استفاده کنید.'
            : 'HTML version of this résumé — use the download button for the PDF file.'}
        </p>
      </main>
    </div>
  );
}

export default function ResumePage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <p className="font-mono text-sm text-stardust animate-pulse">loading…</p>
        </div>
      }
    >
      <ResumeContent />
    </Suspense>
  );
}
