import CardsFeatures from "../CardsFeatures/CardsFeatures";
import features from "../../data/features.json";

const Features = () => {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature) => (
              <CardsFeatures key={feature}>
                <div className="text-center p-6 rounded-2xl hover:bg-gray-50 transition">
                  <div className="w-16 h-16 {feature.classe} rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <i
                      data-lucide={feature.icon}
                      className="w-8 h-8 {feature.color-text}"
                    ></i>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.info}</p>
                </div>
              </CardsFeatures>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Features;
