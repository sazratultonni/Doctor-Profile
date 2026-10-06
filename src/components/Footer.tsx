import React from 'react';
import { DOCTOR_PROFILE, CHAMBERS_LIST } from '../data/doctorData';
import { ShieldAlert } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenWordPressTheme?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenWordPressTheme }) => {
  const { lang, bilingual, isBn } = useLanguage();

  return (
    <footer id="contact" className="bg-[#EEF2F1] text-[#5E6872] text-sm border-t border-[#E2E7E8] pt-20 pb-28 lg:pb-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#E2E7E8]">
          
          {/* Brand & Doctor Authority Column */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="font-display font-bold text-2xl text-[#18212B] tracking-tight hover:text-[#3D9C98] transition-colors inline-block">
              {bilingual(DOCTOR_PROFILE.name, 'ডাঃ শামসুল আলম')}
            </a>
            <div className="text-sm font-semibold text-[#3D9C98]">
              {bilingual(DOCTOR_PROFILE.specialty, 'পেইন মেডিসিন ও ইন্টারভেনশনাল বিশেষজ্ঞ')}
            </div>
            <p className="text-[#5E6872] text-xs sm:text-sm leading-relaxed pr-6">
              {bilingual(
                'Dedicated to pinpoint diagnosis and targeted interventional management for spinal disorders, radiculopathy, and persistent musculoskeletal pain syndromes.',
                'মেরুদণ্ড, কোমর ও স্নায়ুর ব্যথায় নির্ভুল রোগ নির্ণয় ও সর্বাধুনিক ইন্টারভেনশনাল চিকিৎসাসেবা প্রদান।'
              )}
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 rounded-lg bg-[#3D9C98] hover:bg-[#31827E] text-white font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer shadow-sm"
              >
                {bilingual('Book Appointment', 'সিরিয়াল বুক করুন')}
              </button>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <div className="font-mono text-xs uppercase tracking-widest text-[#18212B] font-semibold">
              {bilingual('Navigation', 'ডিরেক্টরি')}
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#about" className="hover:text-[#3D9C98] transition-colors">{bilingual('About Doctor', 'ডাক্তার পরিচিতি')}</a></li>
              <li><a href="#expertise" className="hover:text-[#3D9C98] transition-colors">{bilingual('Conditions Managed', 'ব্যথার চিকিৎসাসমূহ')}</a></li>
              <li><a href="#treatments" className="hover:text-[#3D9C98] transition-colors">{bilingual('Interventional Procedures', 'চিকিৎসা পদ্ধতি')}</a></li>
              <li><a href="#chambers" className="hover:text-[#3D9C98] transition-colors">{bilingual('Chamber Locations', 'চেম্বার ও সময়সূচী')}</a></li>
              <li><a href="#education" className="hover:text-[#3D9C98] transition-colors">{bilingual('Patient Education', 'রোগীদের গাইড')}</a></li>
              <li><a href="#blog" className="hover:text-[#3D9C98] transition-colors">{bilingual('Clinical Articles', 'মেডিকেল আর্টিকেল')}</a></li>
            </ul>
          </div>

          {/* Key Treatments Column */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-mono text-xs uppercase tracking-widest text-[#18212B] font-semibold">
              {bilingual('Interventions', 'চিকিৎসাসমূহ')}
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#treatments" className="hover:text-[#3D9C98] transition-colors">{bilingual('Nerve Blocks (Medial Branch)', 'নার্ভ ব্লক ও ইনজেকশন')}</a></li>
              <li><a href="#treatments" className="hover:text-[#3D9C98] transition-colors">{bilingual('Epidural Steroid Injections', 'এপিডুরাল ইনজেকশন')}</a></li>
              <li><a href="#treatments" className="hover:text-[#3D9C98] transition-colors">{bilingual('Radiofrequency Ablation (RFA)', 'রেডিওফ্রিকোয়েন্সি অ্যাবলেশন (RFA)')}</a></li>
              <li><a href="#treatments" className="hover:text-[#3D9C98] transition-colors">{bilingual('Joint & Bursa Injections', 'হাঁটু ও জয়েন্ট ইনজেকশন')}</a></li>
              <li><a href="#treatments" className="hover:text-[#3D9C98] transition-colors">{bilingual('Sciatica Radiculopathy Care', 'সায়াটিকা ও স্নায়ুর যত্ন')}</a></li>
            </ul>
          </div>

          {/* Practice Chambers Column */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-mono text-xs uppercase tracking-widest text-[#18212B] font-semibold">
              {bilingual('Chambers & Contact', 'চেম্বার ও যোগাযোগ')}
            </div>
            <div className="space-y-3 text-xs">
              {CHAMBERS_LIST.map((chamber) => (
                <div key={chamber.id} className="p-3 rounded-lg bg-white border border-[#E2E7E8] shadow-2xs">
                  <div className="text-[#18212B] font-medium">
                    {isBn 
                      ? (chamber.area.toLowerCase().includes('dhanmondi') ? 'শামসুল পেইন অ্যান্ড স্পাইন সেন্টার' : 'অ্যাডভান্সড পেইন কেয়ার সেন্টার') 
                      : chamber.name}
                  </div>
                  <div className="text-[#5E6872]">
                    {isBn
                      ? (chamber.area.toLowerCase().includes('dhanmondi') ? 'শনি, সোম, বুধ · সন্ধ্যা ৬:০০ – রাত ৯:০০' : 'রবি, মঙ্গল, বৃহস্পতি · বিকাল ৩:০০ – রাত ৮:০০')
                      : `${chamber.days} · ${chamber.timing}`}
                  </div>
                  <a href={`tel:${chamber.phone}`} className="text-[#3D9C98] font-medium hover:underline block mt-0.5 font-mono">
                    {chamber.phone}
                  </a>
                </div>
              ))}
              <div className="pt-1 text-[#5E6872]">
                Email: <a href="mailto:care@drshamsulalam.com" className="text-[#18212B] hover:text-[#3D9C98]">care@drshamsulalam.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimers & Legal Notice */}
        <div className="py-8 space-y-4 text-xs text-[#5E6872] leading-relaxed border-b border-[#E2E7E8]">
          <div className="flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 text-[#D8C6A0] shrink-0 mt-0.5" />
            <div>
              <span className="text-[#18212B] font-semibold uppercase tracking-wider">{bilingual('Medical Information Disclaimer: ', 'সতর্কীকরণ: ')}</span>
              {bilingual(
                'The information provided on this website is for educational and informational purposes only and does not constitute formal medical diagnosis, treatment advice, or a doctor-patient relationship. Patients experiencing acute severe neurological symptoms should seek immediate emergency medical care.',
                'এই ওয়েবসাইটের তথ্য কেবল জনসচেতনতা ও সাধারণ জ্ঞানের উদ্দেশ্যে। ব্যক্তিগত শারীরিক সমস্যার ক্ষেত্রে চিকিৎসকের সরাসরি পরামর্শ অপরিহার্য।'
              )}
            </div>
          </div>
        </div>

        {/* Quiet Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5E6872]">
          <div>
            © {new Date().getFullYear()} {bilingual('Dr. Shamsul Alam · Pain Medicine Specialist. All rights reserved.', 'ডাঃ শামসুল আলম · পেইন মেডিসিন বিশেষজ্ঞ। সর্বস্বত্ব সংরক্ষিত।')}
          </div>
          <div className="flex items-center gap-6">
            {onOpenWordPressTheme && (
              <button
                onClick={onOpenWordPressTheme}
                className="text-[#3D9C98] font-bold hover:underline cursor-pointer"
              >
                {bilingual('WordPress Theme (.zip)', 'ওয়ার্ডপ্রেস থিম (.zip)')}
              </button>
            )}
            <span>·</span>
            <a href="#" className="hover:text-[#18212B] transition-colors">{bilingual('Privacy Policy', 'গোপনীয়তা নীতি')}</a>
            <span>·</span>
            <a href="#" className="hover:text-[#18212B] transition-colors">{bilingual('Terms of Practice', 'ব্যবহারের শর্তাবলী')}</a>
            <span>·</span>
            <a href="#chambers" className="hover:text-[#18212B] transition-colors">{bilingual('Chamber Directory', 'চেম্বার তালিকা')}</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
