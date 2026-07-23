export default function Footer() {
  return (
    <footer className="border-t border-border px-4 sm:px-6 py-4 text-xs text-text-secondary flex flex-col sm:flex-row items-center justify-between gap-2">
      <span>© {new Date().getFullYear()} Admin Dashboard. All rights reserved.</span>
      <span>Built with Next.js &amp; Tailwind CSS</span>
    </footer>
  );
}
