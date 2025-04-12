export default function ContactPage() {
  return (
    <section className="max-w-xl space-y-6">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="text-gray-600 dark:text-gray-400">
        Interested in working together or just want to say hi? Fill out the form below.
      </p>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white/10 dark:bg-black/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white/10 dark:bg-black/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white/10 dark:bg-black/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 dark:bg-blue-500 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  )
}
