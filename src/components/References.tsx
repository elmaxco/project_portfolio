import { Quote } from 'lucide-react';

const references = [
  {
    name: 'Mario',
    role: 'CEO at Nintendo',
    image: 'https://image.cdn2.seaart.me/2023-07-22/47696317661253/37482c38198763e17698578f71a61a0f0f151ae5_high.webp',
    text: 'Max is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding.',
  },
  {
    name: 'Ghost of Lego Yoda',
    role: 'Lead Developer at Lego Star Wars',
    image: 'https://steamuserimages-a.akamaihd.net/ugc/1718706881190546968/CFD3A67416CC779C8E23B9139F2E23D0398F6BB2/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
    text: 'Working with Max was a pleasure. He brings both technical expertise and great communication skills to every project.',
  },
];

export function References() {
  return (
    <section id="references" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">References</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {references.map((reference) => (
            <div key={reference.name} className="bg-white p-6 rounded-lg shadow-sm">
              <Quote className="h-8 w-8 text-blue-600 mb-4" />
              <p className="text-gray-600 mb-6">{reference.text}</p>
              <div className="flex items-center">
                <img
                  src={reference.image}
                  alt={reference.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{reference.name}</h3>
                  <p className="text-gray-600 text-sm">{reference.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}