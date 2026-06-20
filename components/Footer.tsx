export default function Footer() {
  return (
    <footer
      className="
        text-center
        py-10
        border-t
        border-slate-300
        dark:border-slate-700
      "
    >
      <p className="text-slate-600 dark:text-slate-400">
        Designed & Developed by
      </p>

      <p className="mt-1 text-slate-900 dark:text-white font-semibold">
         © 2026 Veeravalli Shanmukha Santhosh Rao
      </p>

      <p className="mt-1 text-slate-700 dark:text-slate-300">
        Built with Next.js • TypeScript • Tailwind CSS
      </p>
    </footer>
  );
}