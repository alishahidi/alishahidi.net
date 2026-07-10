import type { Metadata } from 'next';
import { ResumeDocument } from '@/components/resume/ResumeDocument';

export const metadata: Metadata = {
  title: 'Résumé (print, FA)',
  robots: { index: false, follow: false },
};

// Bare print view — used to generate the downloadable PDF.
export default function ResumePrintFa() {
  return (
    <div className="min-h-screen bg-white">
      <ResumeDocument lang="fa" />
    </div>
  );
}
