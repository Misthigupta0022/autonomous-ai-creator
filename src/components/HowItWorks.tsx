const steps = [
  "Describe your idea",
  "AI creates the architecture",
  "Generate production code",
  "Deploy with one click",
];

export default function HowItWorks() {
  return (
    <section className="max-w-6xl mx-auto py-20">

      <h2 className="text-4xl font-bold text-center">

        How It Works

      </h2>

      <div className="grid md:grid-cols-2 gap-6 mt-14">

        {steps.map((step, index) => (

          <div
            key={step}
            className="border rounded-xl p-6"
          >

            <span className="font-bold text-2xl">

              {index + 1}

            </span>

            <p className="mt-4">

              {step}

            </p>

          </div>

        ))}

      </div>

    </section>
  );
}