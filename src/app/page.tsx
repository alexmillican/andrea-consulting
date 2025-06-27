export default function Home() {
  return (
    <div className="min-h-screen bg-white">      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0E6AAB] to-[#65A837] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Healthcare Business Excellence
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Empowering healthcare organizations to achieve operational excellence, financial sustainability, and exceptional patient outcomes.
            </p>
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
                We provide comprehensive healthcare consulting services designed to transform your organization's performance and patient care delivery.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#E8E8E8] p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#0E6AAB] rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Improvement</h3>
                <p className="text-gray-700">
                  Implement evidence-based quality improvement initiatives to enhance patient safety, clinical outcomes, and regulatory compliance.
                </p>
              </div>

              <div className="bg-[#E8E8E8] p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#65A837] rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Operational Excellence</h3>
                <p className="text-gray-700">
                  Streamline workflows, optimize resource allocation, and improve operational efficiency across all departments.
                </p>
              </div>

              <div className="bg-[#E8E8E8] p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#0E6AAB] rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Financial Optimization</h3>
                <p className="text-gray-700">
                  Develop sustainable financial strategies, revenue cycle management, and cost reduction initiatives.
                </p>
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

      {/* Detailed Services & Founder Credentials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Detailed Services */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  Comprehensive Healthcare Solutions
                </h2>
                
                <div className="space-y-8">
                  <div className="border-l-4 border-[#0E6AAB] pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Strategic Planning & Implementation</h3>
                    <p className="text-gray-700">
                      We work with healthcare leadership teams to develop and execute comprehensive strategic plans that align with organizational goals, market dynamics, and regulatory requirements. Our approach ensures sustainable growth and competitive advantage.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#65A837] pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Process Improvement & Lean Healthcare</h3>
                    <p className="text-gray-700">
                      Utilizing proven methodologies like Lean Six Sigma and Kaizen, we identify inefficiencies, eliminate waste, and optimize care delivery processes to improve patient outcomes while reducing costs.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#0E6AAB] pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Technology Integration & Digital Health</h3>
                    <p className="text-gray-700">
                      Navigate the complex landscape of healthcare technology with strategic guidance on EHR optimization, telemedicine implementation, and digital transformation initiatives that enhance patient care and operational efficiency.
                    </p>
                  </div>
                </div>
              </div>

              {/* Founder Credentials */}
              <div className="bg-[#E8E8E8] rounded-xl p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Expert Leadership
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Healthcare Expertise</h3>
                    <p className="text-gray-700 mb-4">
                      Our founder brings over 15 years of healthcare consulting experience, having worked with leading healthcare systems, specialty practices, and healthcare technology companies across the nation.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#65A837] rounded-full mt-2"></div>
                      <p className="text-gray-700">Master's in Healthcare Administration (MHA)</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#65A837] rounded-full mt-2"></div>
                      <p className="text-gray-700">Certified Lean Six Sigma Black Belt</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#65A837] rounded-full mt-2"></div>
                      <p className="text-gray-700">Board Certified in Healthcare Management</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#65A837] rounded-full mt-2"></div>
                      <p className="text-gray-700">Former Healthcare System Executive</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-300">
                    <p className="text-gray-700 italic">
                      "Healthcare organizations deserve a partner who understands both the clinical and business sides of healthcare. We're committed to delivering measurable results that improve patient care and organizational performance."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
