const features = [
  {
    title: "AI Code Generation",
    desc: "Generate production-ready code instantly.",
  },
  {
    title: "Explain Code",
    desc: "Understand every generated file easily.",
  },
  {
    title: "Debug Errors",
    desc: "Automatically identify and fix coding issues.",
  },
  {
    title: "Deploy Projects",
    desc: "Get deployment guidance for your apps.",
  },
];

export default function Features() {
  return (
    <section className="bg-gray-50 py-20">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center">

          Features

        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

          {features.map((item) => (

            <div
              key={item.title}
              className="bg-white rounded-xl p-6 shadow"
            >
              <h3 className="font-bold text-xl">

                {item.title}

              </h3>

              <p className="text-gray-600 mt-4">

                {item.desc}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}