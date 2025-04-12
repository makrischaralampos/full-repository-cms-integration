export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-8 text-center">
      <p className="text-xs text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} <span className="font-medium">Charalampos Makris</span>. All
        rights reserved.
      </p>
    </footer>
  )
}
