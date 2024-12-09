import { Quote } from 'lucide-react';

const references = [
  {
    name: 'Sarah Johnson',
    role: 'CTO at TechCorp',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200',
    text: 'Max is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding.',
  },
  {
    name: 'Michael Chen',
    role: 'Lead Developer at StartupX',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200',
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