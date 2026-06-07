export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center static-background p-4">
      <h1 className="text-4xl font-bold text-gold md:text-5xl">Contact Us</h1>
      <p className="mt-4 text-lg text-gold md:text-xl description">
        Contact us via the form. We’ll respond promptly.
      </p>
      <div className="mt-6 w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gold">Name</label>
          <input
            type="text"
            id="name"
            className="w-full rounded-lg border p-2 placeholder-turquoise"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gold">Email</label>
          <input
            type="email"
            id="email"
            className="w-full rounded-lg border p-2 placeholder-turquoise"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gold">Message</label>
          <textarea
            id="message"
            className="w-full rounded-lg border p-2 placeholder-turquoise"
            rows={4}
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          className="w-full rounded-lg button-primary px-6 py-2 hover:glow-yellow active:glow-yellow"
          style={{
            ':hover': { boxShadow: '0 0 16px 4px #F3F224' },
            ':active': { boxShadow: '0 0 16px 4px #F3F224' }
          }}
        >
          Send Message
        </button>
      </div>
    </main>
  );
}