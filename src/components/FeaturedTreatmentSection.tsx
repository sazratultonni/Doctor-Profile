import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FeaturedTreatmentSectionProps {
  onOpenBooking: () => void;
}

export const FeaturedTreatmentSection: React.FC<FeaturedTreatmentSectionProps> = ({ onOpenBooking }) => {
  const [activeMode, setActiveMode] = useState<'fluoroscopy' | 'ultrasound'>('fluoroscopy');
  const { lang, bilingual, isBn } = useLanguage();

  return (
    <section className="py-24 lg:py-32 relative bg-[#FFFFFF] border-y border-[#E2E7E8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Pre-heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#3D9C98] mb-3 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3D9C98]" />
            <span>{bilingual('CINEMATIC CLINICAL SPOTLIGHT', 'ইন্টারভেনশনাল স্পটলাইট')}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#18212B] tracking-tight">
            {bilingual('Precision Image Guidance', 'প্রিসিশন ইমেজ গাইডেন্স প্রযুক্তি')}
          </h2>
          <p className="mt-4 text-[#5E6872] text-base sm:text-lg">
            {bilingual(
              'Sub-millimeter targeting ensures therapeutic medication reaches the exact anatomical pain generator while protecting surrounding neurovascular structures.',
              'সি-আর্ম ফ্লুরোস্কোপি ও আল্ট্রাসাউন্ডের সাহায্যে মিলিমিটারের নিখুঁততায় সরাসরি ব্যথার মূল উৎসে চিকিৎসা পৌঁছে দেওয়া হয়।'
            )}
          </p>
        </div>

        {/* Cinematic Main Container - Light Editorial Card */}
        <div className="rounded-3xl border border-[#E2E7E8] bg-[#FAFAF7] p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(24,33,43,0.04)] relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left: Interactive Medical Imaging Display Simulation (Light Theme) */}
            <div className="lg:col-span-6 flex flex-col">
              
              {/* Imaging Mode Selector */}
              <div className="flex items-center justify-between p-1.5 rounded-xl bg-white border border-[#E2E7E8] mb-4 shadow-sm">
                <button
                  onClick={() => setActiveMode('fluoroscopy')}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    activeMode === 'fluoroscopy'
                      ? 'bg-[#3D9C98] text-white font-semibold shadow-sm'
                      : 'text-[#5E6872] hover:text-[#18212B]'
                  }`}
                >
                  {bilingual('Fluoroscopy (Live X-Ray C-Arm)', 'ফ্লুরোস্কোপি (লাইভ সি-আর্ম)')}
                </button>
                <button
                  onClick={() => setActiveMode('ultrasound')}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    activeMode === 'ultrasound'
                      ? 'bg-[#3D9C98] text-white font-semibold shadow-sm'
                      : 'text-[#5E6872] hover:text-[#18212B]'
                  }`}
                >
                  {bilingual('Musculoskeletal Ultrasound', 'মাস্কুলোস্কেলিটাল আল্ট্রাসাউন্ড')}
                </button>
              </div>

              {/* Procedural Screen Canvas - Clean Light High-Precision Vector Display */}
              <div className="relative aspect-[16/10] rounded-2xl border border-[#DDE8E9] bg-white overflow-hidden flex items-center justify-center p-6 shadow-sm">
                
                {/* HUD Elements */}
                <div className="absolute top-4 left-4 font-mono text-[10px] text-[#3D9C98] flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3D9C98] animate-pulse" />
                  <span>IMAGE-GUIDED FEED · DEMO PREVIEW</span>
                </div>
                <div className="absolute top-4 right-4 font-mono text-[10px] text-[#5E6872]">
                  {activeMode === 'fluoroscopy' ? 'AXIAL L4-L5 TRANSFORAMINAL' : 'GENICULAR NERVE CROSS-SECTION'}
                </div>

                {/* Light Vector Visual Simulation */}
                {activeMode === 'fluoroscopy' ? (
                  <svg className="w-full h-full max-w-[380px]" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Vertebral Radiographic Shadows in soft ivory/slate */}
                    <rect x="70" y="40" width="180" height="50" rx="8" fill="#F3F5F2" stroke="#CBD5E1" strokeWidth="1.5" />
                    <rect x="60" y="110" width="200" height="60" rx="10" fill="#F3F5F2" stroke="#CBD5E1" strokeWidth="1.5" />
                    
                    {/* Intervertebral Disc Space */}
                    <rect x="80" y="92" width="160" height="16" rx="4" fill="#E7F2F5" stroke="#3D9C98" strokeWidth="1" strokeDasharray="3 3" />
                    <text x="160" y="104" textAnchor="middle" fill="#3D9C98" fontSize="8" fontFamily="monospace" fontWeight="600">L4-L5 DISC SPACE</text>

                    {/* Pedicle circles */}
                    <circle cx="95" cy="65" r="9" stroke="#94A3B8" strokeWidth="1.5" fill="#FFFFFF" />
                    <circle cx="225" cy="65" r="9" stroke="#94A3B8" strokeWidth="1.5" fill="#FFFFFF" />
                    <circle cx="85" cy="140" r="11" stroke="#94A3B8" strokeWidth="1.5" fill="#FFFFFF" />
                    <circle cx="235" cy="140" r="11" stroke="#94A3B8" strokeWidth="1.5" fill="#FFFFFF" />

                    {/* Procedural Needle Trajectory */}
                    <line x1="280" y1="180" x2="190" y2="108" stroke="#F43F5E" strokeWidth="1.5" strokeDasharray="2 2" />
                    <line x1="280" y1="180" x2="190" y2="108" stroke="#18212B" strokeWidth="1" />
                    
                    {/* Contrast Dye Spread (Safety confirmation in soft teal) */}
                    <ellipse cx="188" cy="106" rx="16" ry="9" fill="#3D9C98" fillOpacity="0.25" />
                    <circle cx="190" cy="108" r="3" fill="#F43F5E" />

                    {/* Target crosshair */}
                    <circle cx="190" cy="108" r="18" stroke="#3D9C98" strokeWidth="1" strokeDasharray="2 3" />
                    <line x1="190" y1="84" x2="190" y2="132" stroke="#3D9C98" strokeWidth="0.8" opacity="0.6" />
                    <line x1="166" y1="108" x2="214" y2="108" stroke="#3D9C98" strokeWidth="0.8" opacity="0.6" />
                  </svg>
                ) : (
                  <svg className="w-full h-full max-w-[380px]" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Ultrasound Tissue Layers */}
                    <path d="M 20 50 Q 160 45 300 50 L 300 170 Q 160 175 20 170 Z" fill="#F8FAF9" />
                    <path d="M 20 80 Q 160 75 300 80" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />
                    <path d="M 20 120 Q 160 115 300 120" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />
                    
                    {/* Cortical Bone Hyper-echogenic Reflection */}
                    <path d="M 50 150 Q 160 135 270 150" stroke="#18212B" strokeWidth="3" />
                    <path d="M 50 155 Q 160 140 270 155" fill="#E2E7E8" />

                    {/* Nerve Cross-section */}
                    <ellipse cx="160" cy="105" rx="14" ry="10" stroke="#3D9C98" strokeWidth="1.5" fill="#E7F2F5" />
                    <circle cx="156" cy="103" r="2" fill="#3D9C98" />
                    <circle cx="164" cy="104" r="2" fill="#3D9C98" />
                    <circle cx="160" cy="108" r="2" fill="#3D9C98" />

                    {/* In-Plane Needle Ultrasound Visualization */}
                    <line x1="40" y1="90" x2="146" y2="105" stroke="#18212B" strokeWidth="2" />
                    <polygon points="146,105 140,102 140,108" fill="#F43F5E" />

                    {/* Acoustic Shadowing */}
                    <path d="M 50 155 L 40 190 L 280 190 L 270 155 Z" fill="#F1F5F9" fillOpacity="0.7" />
                  </svg>
                )}

                {/* Subtext info */}
                <div className="absolute bottom-3 inset-x-4 flex items-center justify-between text-[10px] font-mono text-[#5E6872] bg-[#F8FAF9] px-3 py-1.5 rounded-lg border border-[#E2E7E8]">
                  <span>SAFETY: CONTRAST-CONFIRMED DEPLOYMENT</span>
                  <span className="text-[#3D9C98] font-semibold">ACCURACY &lt; 0.5MM</span>
                </div>
              </div>
            </div>

            {/* Right: Explanatory Content & Benefit Checklist */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="space-y-3">
                <div className="text-xs font-mono text-[#3D9C98] uppercase tracking-widest font-medium">
                  {bilingual('PROCEDURAL ARCHITECTURE', 'ইন্টারভেনশন পদ্ধতি')}
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#18212B]">
                  {bilingual('Why Visual Guidance Makes All the Difference', 'ইমেজ গাইডেন্সের কার্যকারিতা ও প্রয়োজনীয়তা')}
                </h3>
                <p className="text-[#5E6872] text-sm sm:text-base leading-relaxed">
                  {bilingual(
                    'Blind injections rely on external anatomical landmarks and risk improper medication placement. Dr. Shamsul Alam performs interventional procedures using continuous real-time fluoroscopic and ultrasound visualization to verify needle position and medication dispersal.',
                    'অনুমানের ওপর ভিত্তি করে ইনজেকশন দিলে সঠিক স্থানে ওষুধ পৌঁছায় না। ডাঃ শামসুল আলম সরাসরি স্ক্রিনে সি-আর্ম ও আল্ট্রাসাউন্ড পর্যবেক্ষণের মাধ্যমে নিখুঁতভাবে ব্যথাবহনকারী নার্ভে চিকিৎসা প্রয়োগ করেন।'
                  )}
                </p>
              </div>

              {/* Who May Benefit */}
              <div className="p-5 rounded-2xl bg-white border border-[#E2E7E8] space-y-3 shadow-sm">
                <div className="text-xs font-mono text-[#18212B] uppercase tracking-wider flex items-center gap-2 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#3D9C98]" />
                  <span>{bilingual('Clinical Indications for Image-Guided Therapy', 'যাঁদের জন্য এই চিকিৎসা বিশেষভাবে উপযোগী')}</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-[#5E6872]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#3D9C98] font-bold">·</span>
                    <span>{bilingual('Severe sciatica or cervical radiculopathy not resolving with oral medication', 'ওষুধে না কমা তীব্র সায়াটিকা, কোমর থেকে পায়ে ছড়ানো ব্যথা বা ঘাড়ের ব্যথা')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3D9C98] font-bold">·</span>
                    <span>{bilingual('Facet joint arthropathy causing persistent lumbar hyperextension pain', 'মেরুদণ্ডের ফ্যাসেট জয়েন্টের ক্ষয়জনিত তীব্র ও দীর্ঘস্থায়ী কোমর ব্যথা')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3D9C98] font-bold">·</span>
                    <span>{bilingual('Knee or shoulder osteoarthritis where precise joint preservation is critical', 'হাঁটু বা কাঁধের অস্টিওআর্থ্রাইটিস বা ক্ষয়রোধে সুনির্দিষ্ট ইন্টারভেনশন')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3D9C98] font-bold">·</span>
                    <span>{bilingual('Patients needing to confirm pain generators before considering surgical opinions', 'অপারেশন ছাড়াই ব্যথামুক্ত হতে চান বা ব্যথার সুনির্দিষ্ট উৎস নিশ্চিত হতে চান')}</span>
                  </li>
                </ul>
              </div>

              {/* CTA Row */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenBooking}
                  className="px-6 py-3.5 rounded-xl bg-[#3D9C98] hover:bg-[#31827E] text-white font-bold text-xs tracking-wider uppercase transition-all duration-200 shadow-[0_4px_16px_rgba(61,156,152,0.25)] cursor-pointer flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{bilingual('Book Procedural Consultation', 'পরামর্শের জন্য সিরিয়াল নিন')}</span>
                </button>
                <div className="text-xs text-[#5E6872] font-mono">
                  {bilingual('Outpatient Procedure Suite · Dhaka', 'ডে-কেয়ার ইন্টারভেনশন স্যুট · ঢাকা')}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
