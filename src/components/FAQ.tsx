import { useState } from "react";
import { FAQ } from "../content";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 bg-gradient-to-b from-gray-950 to-gray-900/20">
      <div className="container">
        <div className="text-center mb-20">
          <h2 className="section-title">
            <span className="gradient-text">FAQ</span>
          </h2>
          <p className="section-subtitle">
            Common questions about the Solanian way
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {FAQ.map((item, index) => (
            <div key={index} className="glass-card">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex items-center justify-between"
              >
                <h3 className="text-xl font-semibold text-white pr-6">
                  {item.q}
                </h3>
                <span className="text-gray-400 text-2xl font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <p className="text-gray-300 text-lg leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}