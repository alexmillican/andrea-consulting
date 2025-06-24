export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Transform Your Business with Strategic Consulting
          </h1>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Expert consulting services for modern businesses. We help you navigate complex challenges and unlock your full potential through strategic insights and proven methodologies.
          </p>
          
          <div className="mb-16">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors mr-4">
              Schedule Consultation
            </button>
            <button className="border border-slate-300 hover:border-slate-400 text-slate-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Learn More
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Strategic Planning</h3>
            <p className="text-slate-600">Market analysis, competitive positioning, and growth strategy development tailored to your business goals.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Operational Excellence</h3>
            <p className="text-slate-600">Process improvement, automation, and performance optimization to drive efficiency and results.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Digital Transformation</h3>
            <p className="text-slate-600">Technology strategy, digital workflow optimization, and data-driven decision making for the modern era.</p>
          </div>
        </div>

        <div className="bg-slate-900 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a consultation and discover how we can help you achieve your strategic objectives.
          </p>
          <div className="space-y-2 text-slate-300">
            <p>📧 hello@andreaconsulting.com</p>
            <p>📞 (555) 123-4567</p>
          </div>
        </div>
      </main>
    </div>
  );
}
