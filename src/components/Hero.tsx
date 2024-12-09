import { FileDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm Max Jacobsson
              <span className="block text-blue-600">Full Stack Developer</span>
            </h1>           
            <div className="flex gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get in touch
              </a>
              <a
                href="/cv.pdf"
                download
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
              >
                <FileDown className="h-5 w-5" />
                Download CV
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://p.turbosquid.com/ts-thumb/FS/i3K2J8/DEZND7S7/6/png/1471210751/1920x1080/fit_q87/900008aec8226b48143c704bae475e122ce6b5f0/6.jpg"
              alt="Max Jacobsson"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-blue-600/10 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}