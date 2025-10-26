"use client"

export default function MetricsBanner() {
  const metrics = [
    { value: "30+", label: "Years of Experience" },
    { value: "100+", label: "Happy Customers" },
    { value: "25+", label: "Luxury Cars" },
    { value: "50+", label: "Qualified Chauffeurs" },
  ]

  return (
    <section className="bg-black py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-y-8">
        {metrics.map((item, index) => (
          <div key={index}>
            <h3 className="text-4xl font-extrabold text-white">{item.value}</h3>
            <p className="text-white mt-2 text-sm sm:text-base">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
