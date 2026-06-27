import React from 'react';

/**
 * HeroSection Component
 * A responsive hero section for a Student Management System SaaS called "Cerisee"
 * Built with React + Tailwind CSS
 */
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 px-6 sm:px-16">
      {/* Subtle Dot-Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'radial-gradient(#DC2626 1px, transparent 1px), radial-gradient(#9CA3AF 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          backgroundPosition: '0 0, 12px 12px',
        }}
      />

      <div className="relative mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* === LEFT COLUMN: CONTENT === */}
        <div className="flex flex-col items-start justify-center">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-1.5 bg-red-50 border border-red-200 px-3 py-1 rounded-full text-xs font-bold text-red-600 uppercase tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
            All-in-One Solution
          </div>

          {/* Headline */}
          <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Simplify Management.<br />
            <span className="text-red-600">Empower Education.</span>
          </h1>

          {/* Description */}
          <p className="mt-4 text-gray-500 text-base sm:text-lg max-w-md leading-relaxed">
            Cerisee is a complete Student Management System designed to automate and streamline academic and administrative operations in one secure platform.
          </p>

          {/* Feature Checklist */}
          <ul className="mt-6 flex flex-col gap-3">
            {[
              "Centralized & Smart Management",
              "Secure, Reliable & Scalable",
              "Real-time Insights & Analytics"
            ].map((text) => (
              <li key={text} className="flex items-center gap-3 text-gray-800 font-semibold text-sm sm:text-base">
                <span className="flex-shrink-0 text-red-600">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l5-5z" clipRule="evenodd" />
                  </svg>
                </span>
                {text}
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <a 
              href="#features" 
              className="bg-red-600 text-white rounded-full px-6 py-3 font-semibold text-sm sm:text-base shadow-md hover:bg-red-700 hover:shadow-lg transition-all duration-200 flex items-center gap-2"
            >
              Explore Features <span>→</span>
            </a>
            <button 
              className="bg-white text-gray-800 border border-gray-300 rounded-full px-6 py-3 font-semibold text-sm sm:text-base hover:bg-gray-50 transition-all duration-200 flex items-center gap-2"
            >
              <span className="text-red-600 text-xs">▶</span> Watch Demo
            </button>
          </div>

          {/* Trust Bar */}
          <div className="mt-12 w-full">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Trusted by <span className="text-red-600 font-extrabold">500+</span> Institutions
            </p>
            <div className="mt-4 flex flex-wrap gap-4 items-center">
              {[
                { name: 'Greenfield University', code: 'GU' },
                { name: 'Southridge College', code: 'SC' },
                { name: 'Brighton Institute', code: 'BI' },
                { name: 'Maplewood Academy', code: 'MA' },
                { name: 'Redbridge School', code: 'RS' }
              ].map((inst) => (
                <div 
                  key={inst.name} 
                  className="flex items-center gap-2 bg-gray-50 border border-gray-200 px-3.5 py-1.5 rounded-lg text-gray-500 hover:text-gray-800 transition-colors duration-200"
                >
                  <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                  <span className="text-[10px] font-bold tracking-tight">{inst.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* === RIGHT COLUMN: DEVICE MOCKUPS === */}
        <div className="hidden md:flex relative h-[500px] w-full items-center justify-center lg:justify-end">
          
          {/* Background Accents (Soft Red Blobs) */}
          <div className="absolute right-0 bottom-4 w-80 h-80 bg-red-500 rounded-full opacity-20 blur-3xl pointer-events-none" />
          <div className="absolute top-10 right-12 w-48 h-48 bg-red-400 rounded-full opacity-35 blur-2xl pointer-events-none" />

          {/* Laptop Mockup */}
          <div className="relative bg-gray-800 p-2.5 rounded-2xl shadow-2xl border-4 border-gray-300 w-full max-w-[440px] z-10 mr-12 transform hover:scale-[1.01] transition-transform duration-300">
            {/* Screen */}
            <div className="bg-white rounded-lg p-2.5 text-[8px] text-gray-700 overflow-hidden font-sans select-none">
              
              {/* Top bar */}
              <div className="flex justify-between items-center border-b border-gray-100 pb-1.5 mb-2">
                <div className="flex items-center gap-1 font-bold text-gray-900">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                  <span>Cerisee Dashboard</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-400">
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <div className="w-3.5 h-3.5 rounded-full bg-gray-200"></div>
                </div>
              </div>

              {/* 4 Stat Cards in a row */}
              <div className="grid grid-cols-4 gap-1.5 mb-3">
                <div className="bg-teal-500 text-white p-1.5 rounded shadow-sm">
                  <div className="opacity-80 text-[5px] font-medium leading-none">Students</div>
                  <div className="font-bold text-[9px] mt-0.5">2,456</div>
                </div>
                <div className="bg-blue-500 text-white p-1.5 rounded shadow-sm">
                  <div className="opacity-80 text-[5px] font-medium leading-none">Teachers</div>
                  <div className="font-bold text-[9px] mt-0.5">156</div>
                </div>
                <div className="bg-lime-500 text-white p-1.5 rounded shadow-sm">
                  <div className="opacity-80 text-[5px] font-medium leading-none">Attendance</div>
                  <div className="font-bold text-[9px] mt-0.5">90.4%</div>
                </div>
                <div className="bg-gray-800 text-white p-1.5 rounded shadow-sm">
                  <div className="opacity-80 text-[5px] font-medium leading-none">Fees</div>
                  <div className="font-bold text-[8px] mt-0.5">₹12.45L</div>
                </div>
              </div>

              {/* Lower content: Chart + Activities */}
              <div className="grid grid-cols-3 gap-2">
                {/* Chart Area */}
                <div className="col-span-2 bg-gray-50 border border-gray-100 rounded p-2">
                  <div className="font-bold text-gray-900 text-[6.5px] mb-1">Attendance Overview</div>
                  
                  {/* SVG Chart line */}
                  <svg className="w-full h-10 text-red-500" viewBox="0 0 100 30" fill="none">
                    <path d="M0 25 Q15 8, 35 20 T70 6 T100 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M0 25 Q15 8, 35 20 T70 6 T100 18 L100 30 L0 30 Z" fill="rgba(220, 38, 38, 0.05)"/>
                  </svg>
                </div>
                
                {/* Recent Activities */}
                <div className="bg-gray-50 border border-gray-100 rounded p-2">
                  <div className="font-bold text-gray-900 text-[6.5px] mb-1">Recent Activity</div>
                  <ul className="flex flex-col gap-1 text-[5px] text-gray-500">
                    <li className="flex items-center gap-1 font-medium">
                      <span className="w-1 h-1 rounded-full bg-blue-500"></span> Admission #102
                    </li>
                    <li className="flex items-center gap-1 font-medium">
                      <span className="w-1 h-1 rounded-full bg-teal-500"></span> Fee Paid (₹5k)
                    </li>
                    <li className="flex items-center gap-1 font-medium">
                      <span className="w-1 h-1 rounded-full bg-amber-500"></span> Exams Posted
                    </li>
                  </ul>
                </div>
              </div>

            </div>
            
            {/* Laptop base keyboard lip */}
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-[108%] h-1.5 bg-gray-400 rounded-b-xl border-t border-gray-300"></div>
            {/* Laptop stand/lip shadow */}
            <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-14 h-1 bg-gray-500 rounded-b-md opacity-40"></div>
          </div>

          {/* Smartphone Mockup (Overlaps on bottom-right of laptop) */}
          <div className="absolute -bottom-4 right-2 w-[150px] bg-gray-900 p-1.5 rounded-[2.2rem] border-4 border-gray-800 shadow-2xl rotate-[-5deg] z-20 overflow-hidden transform hover:rotate-[0deg] transition-all duration-300">
            {/* Screen */}
            <div className="bg-white rounded-[1.8rem] p-2.5 text-[8px] text-gray-800 h-[210px] flex flex-col justify-between font-sans overflow-hidden select-none">
              
              {/* Header */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <div className="text-[5.5px] text-gray-400 font-medium">Welcome Back,</div>
                    <div className="font-bold text-gray-900 text-[7.5px] leading-tight">Admin Portal</div>
                  </div>
                  <div className="w-3.5 h-3.5 rounded-full bg-red-100 flex items-center justify-center text-[6px] text-red-600 font-extrabold">C</div>
                </div>

                {/* 3x3 Icon Grid */}
                <div className="grid grid-cols-3 gap-1">
                  {[
                    { label: 'Students', icon: '🎓' },
                    { label: 'Attendance', icon: '📅' },
                    { label: 'Fees', icon: '💳' },
                    { label: 'Exams', icon: '📝' },
                    { label: 'Library', icon: '📚' },
                    { label: 'Transport', icon: '🚌' }
                  ].map((item) => (
                    <div key={item.label} className="bg-gray-50 border border-gray-100 p-1 rounded-md flex flex-col items-center justify-center text-[5.5px] hover:bg-red-50 transition-colors">
                      <span className="text-[9px] mb-0.5">{item.icon}</span>
                      <span className="text-gray-600 font-semibold">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Red Upcoming Events Card at bottom */}
              <div className="bg-red-50 border border-red-100 p-1.5 rounded-lg">
                <div className="font-bold text-red-600 text-[6.5px] mb-0.5 flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-red-600 animate-pulse"></span>
                  Upcoming Events
                </div>
                <div className="text-gray-500 text-[5.5px] leading-tight font-medium">Board Meeting @ 10:00 AM Today</div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
