export default function Home() {
  return (
    <div className="min-h-screen bg-white">      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0E6AAB] to-[#65A837] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-12">
              <p className="text-xl md:text-2xl text-blue-100 mb-6 leading-relaxed">
                <span className="font-semibold text-white">FH Healthcare Consulting</span> provides services to 
                <span className="font-semibold text-white ml-1"> Life Sciences organizations</span> helping them optimize their 
                <span className="font-bold text-yellow-200 ml-1">market access and reimbursement</span>, leveraging 
                <span className="font-bold text-yellow-200 ml-1">HEOR tools</span>: that is, 
                <span className="italic text-blue-100 ml-1">achievable price, time to market and patient population size</span>.
              </p>
            </div>
            
            <div className="border-t border-blue-300/30 pt-8">
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
                Its Founder and Managing Director, <span className="font-semibold text-white ml-1">Andrea Latour</span>, has a unique blend of 
                <span className="font-medium text-yellow-200 ml-1">strategy & commercial</span>, 
                <span className="font-medium text-yellow-200 ml-1">market access & pricing</span>, and 
                <span className="font-medium text-yellow-200 ml-1">HEOR & evidence generation</span> experience, 
                from many years in <span className="font-semibold text-white ml-1">Industry and Consulting roles</span>, 
                across <span className="italic text-blue-200 ml-1">European and APAC markets</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We provide comprehensive market access consulting services designed to optimize your product's pathway to market and maximize commercial success.
              </p>
            </div>

            {/* First row - 3 services */}
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-[#E8E8E8] p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-[#0E6AAB] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Market Access</h3>
                </div>
                <ul className="text-gray-700 text-base space-y-1">
                  <li className="flex items-baseline"><span className="mr-2 text-2xl">•</span><span>Market/payer landscape assessment</span></li>
                  <li className="flex items-baseline"><span className="mr-2 text-2xl">•</span><span>Stakeholder/KOL mapping</span></li>
                  <li className="flex items-baseline"><span className="mr-2 text-2xl">•</span><span>New product planning</span></li>
                  <li className="flex items-baseline"><span className="mr-2 text-2xl">•</span><span>Value proposition development</span></li>
                  <li className="flex items-baseline"><span className="mr-2 text-2xl">•</span><span>GVD/CVD development and adaptation</span></li>
                  <li className="flex items-baseline"><span className="mr-2 text-2xl">•</span><span>Payer engagement</span></li>
                </ul>
              </div>

              <div className="bg-[#E8E8E8] p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-[#65A837] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Pricing</h3>
                </div>
                <ul className="text-gray-700 text-base space-y-1">
                  <li className="flex items-baseline"><span className="mr-2 text-2xl">•</span><span>Pricing research</span></li>
                  <li className="flex items-baseline"><span className="mr-2 text-2xl">•</span><span>Willingness-to-pay (Gabor-Granger/Van Westendorp)</span></li>
                  <li className="flex items-baseline"><span className="mr-2 text-2xl">•</span><span>Payer's analogues & precedents</span></li>
                  <li className="flex items-baseline"><span className="mr-2 text-2xl">•</span><span>Economically justifiable price (EJP)</span></li>
                  <li className="flex items-baseline"><span className="mr-2 text-2xl">•</span><span>HE analysis integration</span></li>
                  <li className="flex items-baseline"><span className="mr-2 text-2xl">•</span><span>Access schemes, RSAs, MESs</span></li>
                </ul>
              </div>

              <div className="bg-[#E8E8E8] p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-[#0E6AAB] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">HTA</h3>
                </div>
                <ul className="text-gray-700 text-base space-y-1">
                  <li className="flex items-baseline"><span className="mr-2 text-2xl">•</span><span>HTA roadmapping</span></li>
                  <li className="flex items-baseline"><span className="mr-2 text-2xl">•</span><span>Reimbursement dossier development</span></li>
                  <li className="flex items-baseline"><span className="mr-2 text-2xl">•</span><span>Dossier review</span></li>
                  <li className="flex items-baseline"><span className="mr-2 text-2xl">•</span><span>Targeted literature reviews</span></li>
                  <li className="flex items-baseline"><span className="mr-2 text-2xl">•</span><span>Stakeholder input collection</span></li>
                  <li className="flex items-baseline"><span className="mr-2 text-2xl">•</span><span>Patient organization engagement</span></li>
                </ul>
              </div>
            </div>

            {/* Second row - 2 services */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-[#E8E8E8] p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-[#65A837] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">HE (Health Economics)</h3>
                </div>
                <ul className="text-gray-700 text-base space-y-1">
                  <li className="flex items-baseline"><span className="mr-2 text-2xl">•</span><span>Model development (CUA, CEA, CMA)</span></li>
                  <li className="flex items-baseline"><span className="mr-2 text-2xl">•</span><span>Decision Tree, Markov, Partition Survival</span></li>
                  <li className="flex items-baseline"><span className="mr-2 text-2xl">•</span><span>BIA: Financial & Outcome-based</span></li>
                  <li className="flex items-baseline"><span className="mr-2 text-2xl">•</span><span>Model adaptation</span></li>
                  <li className="flex items-baseline"><span className="mr-2 text-2xl">•</span><span>COI/BOI studies</span></li>
                  <li className="flex items-baseline"><span className="mr-2 text-2xl">•</span><span>Bucker ITC & Local HE studies</span></li>
                </ul>
              </div>

              <div className="bg-[#E8E8E8] p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-[#0E6AAB] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571-3-5.571 3" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">OR / RWE</h3>
                </div>
                <ul className="text-gray-700 text-base space-y-1">
                  <li className="flex items-baseline"><span className="mr-2 text-2xl">•</span><span>Evidence gaps analysis</span></li>
                  <li className="flex items-baseline"><span className="mr-2 text-2xl">•</span><span>Evidence generation planning</span></li>
                  <li className="flex items-baseline"><span className="mr-2 text-2xl">•</span><span>Costing and MRU studies</span></li>
                  <li className="flex items-baseline"><span className="mr-2 text-2xl">•</span><span>Ad boards, Delphi Panels</span></li>
                  <li className="flex items-baseline"><span className="mr-2 text-2xl">•</span><span>Publications & Literature reviews</span></li>
                  <li className="flex items-baseline"><span className="mr-2 text-2xl">•</span><span>Evidence dissemination</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-[#E8E8E8]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Get Started Today
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Ready to transform your healthcare organization? Contact us to schedule a consultation and discover how we can help you achieve your strategic objectives.
            </p>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#0E6AAB] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-600">Email</p>
                    <a href="mailto:alatour@fhhealthconsulting.com" className="text-[#0E6AAB] font-semibold hover:underline">
                      alatour@fhhealthconsulting.com
                    </a>
                  </div>
                </div>
                
                <div className="w-px h-12 bg-gray-300 hidden md:block"></div>
                
                <button className="bg-[#65A837] hover:bg-[#5a8b31] text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
