export default function Counselling() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center static-background p-4">
      <h1 className="text-4xl font-bold text-gold md:text-5xl">Counselling Services</h1>
      <p className="mt-4 text-lg text-gold md:text-xl description">
        Personalized counselling for growth. Support for all needs.
      </p>
      <div className="mt-6 w-full max-w-4xl">
        <div className="rounded-lg p-4 shadow">
          <h2 className="text-xl font-semibold text-gold">Counselling Overview</h2>
          <p className="mt-2 text-turquoise description">
            Expert guidance for students and teachers. Book a session today.
          </p>
        </div>
      </div>
    </main>
  );
}