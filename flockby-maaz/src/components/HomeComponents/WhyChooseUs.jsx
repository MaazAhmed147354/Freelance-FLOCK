function WhyChooseUs() {
  const features = [
    {
      id: 1,
      title: "Fast Delivery",
      icon: "⏱️",
      desc: "Hot & fresh in under 30 mins.",
    },
    {
      id: 2,
      title: "Fresh Ingredients",
      icon: "🥗",
      desc: "Quality produce every time.",
    },
    {
      id: 3,
      title: "Secure Payments",
      icon: "💳",
      desc: "Safe and easy checkout.",
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-6 text-center">
      <h2 className="text-3xl font-bold mb-8">Why Choose FlockByMaaz?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f) => (
          <div key={f.id} className="bg-white p-6 rounded-lg shadow">
            <div className="text-5xl mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
