import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CHAMBERS_LIST, Chamber } from '../data/doctorData';
import { MapPin, Clock, Calendar, Phone, MessageSquare, ExternalLink, Navigation } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ChambersSectionProps {
  onOpenBooking: (preferredChamber?: string) => void;
}

export const ChambersSection: React.FC<ChambersSectionProps> = ({ onOpenBooking }) => {
  const [selectedChamberId, setSelectedChamberId] = useState<string>(CHAMBERS_LIST[0].id);
  const { lang, bilingual, isBn } = useLanguage();

  return (
    <section id="chambers" className="py-24 lg:py-32 relative bg-[#F3F5F2] border-t border-[#E2E7E8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#3D9C98] mb-3 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3D9C98]" />
              <span>{bilingual('PRACTICE LOCATIONS', 'চেম্বার ও লোকেশন')}</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#18212B] tracking-tight">
              {bilingual('Clinical Chambers', 'ডাঃ শামসুল আলমের চেম্বারসমূহ')}
            </h2>
            <p className="mt-4 text-[#5E6872] max-w-xl text-base sm:text-lg">
              {bilingual(
                'Consultations and interventional assessments conducted across two prime clinical centres in Dhaka.',
                'ঢাকা শহরের কেন্দ্রস্থলে ধানমন্ডি ও পান্থপথে আধুনিক সুযোগ-সুবিধা সম্বলিত চেম্বার।'
              )}
            </p>
          </div>

          <div className="text-xs font-mono text-[#5E6872]">
            {bilingual('ADVANCE APPOINTMENTS RECOMMENDED', 'আগে থেকে সিরিয়াল নেওয়া আবশ্যক')}
          </div>
        </div>

        {/* 2 Chambers Grid - Elegant White Panels with Teal Location Markers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {CHAMBERS_LIST.map((chamber, idx) => {
            const isDhanmondi = chamber.area.toLowerCase().includes('dhanmondi');
            const chamberDisplayName = isBn 
              ? (isDhanmondi ? 'শামসুল পেইন অ্যান্ড স্পাইন সেন্টার' : 'অ্যাডভান্সড পেইন কেয়ার সেন্টার')
              : chamber.name;
            const chamberDisplayDays = isBn
              ? (isDhanmondi ? 'শনিবার, সোমবার, বুধবার' : 'রবিবার, মঙ্গলবার, বৃহস্পতিবার')
              : chamber.days;
            const chamberDisplayTiming = isBn
              ? (isDhanmondi ? 'সন্ধ্যা ৬:০০ – রাত ৯:০০' : 'বিকাল ৩:০০ – রাত ৮:০০')
              : chamber.timing;
            const chamberDisplayAddress = isBn
              ? (isDhanmondi ? 'বাড়ি ১২, রোড ৭, ধানমন্ডি, ঢাকা ১২০৫' : 'লেভেল ৪, গ্রিন টাওয়ার, পান্থপথ, ঢাকা ১২০৫')
              : chamber.address;

            return (
              <motion.div
                key={chamber.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`rounded-3xl border p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden bg-white shadow-[0_15px_45px_rgba(24,33,43,0.04)] ${
                  selectedChamberId === chamber.id
                    ? 'border-[#3D9C98] ring-1 ring-[#3D9C98]'
                    : 'border-[#E2E7E8] hover:border-[#3D9C98]/50'
                }`}
              >
                <div>
                  {/* Top Row: Location Tag & Chamber ID */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E7F2F5] border border-[#7BAFC4]/30 text-xs font-mono text-[#3D9C98] font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-[#3D9C98]" />
                      <span>{bilingual(`CHAMBER 0${idx + 1} · ${chamber.area.toUpperCase()}`, `চেম্বার ০${idx + 1} · ${isDhanmondi ? 'ধানমন্ডি' : 'পান্থপথ'}`)}</span>
                    </span>
                    <span className="text-xs font-mono text-[#5E6872]">{bilingual('DHAKA, BANGLADESH', 'ঢাকা, বাংলাদেশ')}</span>
                  </div>

                  {/* Chamber Name */}
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#18212B] mb-6">
                    {chamberDisplayName}
                  </h3>

                  {/* Info Blocks */}
                  <div className="space-y-4 mb-8">
                    {/* Schedule */}
                    <div className="p-4 rounded-xl bg-[#FAFAF7] border border-[#E2E7E8] flex items-start gap-3">
                      <Clock className="w-4 h-4 text-[#3D9C98] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-mono text-[#5E6872] uppercase tracking-wider mb-0.5">
                          {bilingual('Consultation Days & Timing', 'পরামর্শের দিন ও সময়সূচী')}
                        </div>
                        <div className="text-sm font-semibold text-[#18212B]">
                          {chamberDisplayDays}
                        </div>
                        <div className="text-xs text-[#3D9C98] font-mono mt-0.5 font-medium">
                          {chamberDisplayTiming}
                        </div>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="p-4 rounded-xl bg-[#FAFAF7] border border-[#E2E7E8] flex items-start gap-3">
                      <Navigation className="w-4 h-4 text-[#3D9C98] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-mono text-[#5E6872] uppercase tracking-wider mb-0.5">
                          {bilingual('Physical Address', 'চেম্বারের ঠিকানা')}
                        </div>
                        <div className="text-sm text-[#18212B]">
                          {chamberDisplayAddress}
                        </div>
                        <div className="text-xs text-[#5E6872] mt-1">
                          {bilingual(`Landmark: ${chamber.landmark}`, `ল্যান্ডমার্ক: ${isDhanmondi ? 'ধানমন্ডি লেকের কাছে' : 'স্কয়ার হাসপাতালের বিপরীতে'}`)}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subtle map-inspired line graphics (Light palette) */}
                  <div className="relative h-28 rounded-xl border border-[#E2E7E8] bg-[#F8FAF9] overflow-hidden p-4 mb-8 flex items-center justify-between">
                    <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 400 120" fill="none">
                      <line x1="0" y1="60" x2="400" y2="60" stroke="#CBD5E1" strokeWidth="5" />
                      <line x1="0" y1="60" x2="400" y2="60" stroke="#94A3B8" strokeWidth="1" strokeDasharray="4 4" />
                      <line x1="160" y1="0" x2="160" y2="120" stroke="#CBD5E1" strokeWidth="7" />
                      <line x1="280" y1="0" x2="280" y2="120" stroke="#E2E8F0" strokeWidth="4" />
                      <circle cx="160" cy="60" r="14" fill="#3D9C98" fillOpacity="0.15" />
                      <circle cx="160" cy="60" r="5" fill="#3D9C98" />
                    </svg>

                    <div className="relative z-10 flex flex-col justify-between h-full">
                      <div className="text-[11px] font-mono text-[#3D9C98] font-semibold">
                        GPS: {chamber.mapCoords.lat}° N, {chamber.mapCoords.lng}° E
                      </div>
                      <div className="text-xs text-[#5E6872] font-medium">
                        {bilingual('Central Dhaka Access Point', 'কেন্দ্রীয় ঢাকা যোগাযোগ পয়েন্ট')}
                      </div>
                    </div>

                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(chamber.name + ' ' + chamber.area)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E2E7E8] hover:border-[#3D9C98] text-[#18212B] text-xs font-medium transition-colors shadow-sm"
                    >
                      <span>{bilingual('View Map', 'ম্যাপ দেখুন')}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#3D9C98]" />
                    </a>
                  </div>
                </div>

                {/* Action Buttons Row */}
                <div className="pt-6 border-t border-[#E2E7E8] flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onOpenBooking(chamber.name)}
                    className="flex-1 py-3 px-4 rounded-xl bg-[#3D9C98] hover:bg-[#31827E] text-white font-bold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{bilingual('Book at this Chamber', 'এই চেম্বারে সিরিয়াল নিন')}</span>
                  </button>

                  <a
                    href={`tel:${chamber.phone}`}
                    className="py-3 px-4 rounded-xl border border-[#18212B] text-[#18212B] hover:bg-[#FAFAF7] text-xs font-semibold flex items-center gap-2 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#3D9C98]" />
                    <span className="hidden sm:inline">{bilingual('Call Chamber', 'চেম্বারে কল')}</span>
                  </a>

                  <a
                    href={`https://wa.me/${chamber.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                      `Hello Dr. Shamsul Alam Chamber Desk (${chamber.area}), I would like to inquire about an appointment.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-[#E2E7E8] text-[#5E6872] hover:text-[#3D9C98] hover:border-[#3D9C98] transition-colors"
                    title="Chat on WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
