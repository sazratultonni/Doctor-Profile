import React from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS_LIST } from '../data/doctorData';
import { Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const TestimonialsSection: React.FC = () => {
  const { bilingual, isBn } = useLanguage();

  const bnTestimonials = [
    {
      initials: 'এম.আর.',
      patientContext: 'বয়স ৫২ • ব্যাংকার',
      conditionTreated: 'সারভাইকাল রেডিকুলোপ্যাথি (ঘাড় ও হাতের তীব্র ব্যথা)',
      quote: 'দিনের পর দিন ব্যথানাশক ওষুধ খেয়ে গ্যাস্ট্রিকের সমস্যায় ভুগছিলাম। ডাঃ শামসুল আলম আল্ট্রাসাউন্ডের সাহায্যে সুনির্দিষ্ট নার্ভ ব্লক দেন। দ্বিতীয় দিন থেকেই হাতের অবশ ভাব ও অসহ্য ব্যথা কমে যায়। এখন নিয়মিত অফিসে যেতে পারছি।',
      outcomeNote: 'সি৬-সি৭ নার্ভ রুটে সুনির্দিষ্ট ইন্টারভেনশন; ব্যথামুক্ত স্বাভাবিক কর্মজীবন পুনরুদ্ধার।'
    },
    {
      initials: 'এস.কে.',
      patientContext: 'বয়স ৬৪ • অবসরপ্রাপ্ত প্রকৌশলী',
      conditionTreated: 'লাম্বার স্পাইনাল স্টেনোসিস ও ক্রনিক সায়াটিকা',
      quote: 'কোমর থেকে পা পর্যন্ত টান লাগায় ১০ মিনিটও দাঁড়িয়ে থাকতে পারতাম না। বড় ধরনের অপারেশনের পরামর্শ পেয়ে ভয় পেয়েছিলাম। ডাঃ আলম সি-আর্ম ফ্লুরোস্কোপিক ট্রান্সফোরামিনাল এপিডুরাল পদ্ধতিতে চিকিৎসা করেন। কোনো সার্জারি ছাড়াই এখন হাঁটতে পারি।',
      outcomeNote: 'অপারেশনবিহীন সফল রুট-লেভেল ইন্টারভেনশন; স্বাভাবিক চলাফেরার ক্ষমতা ফিরে পেয়েছেন।'
    },
    {
      initials: 'টি.এ.',
      patientContext: 'বয়স ৪৭ • স্কুল শিক্ষিকা',
      conditionTreated: 'ক্রনিক ফ্যাসেট জয়েন্ট সিন্ড্রোম ও পিঠের ব্যথা',
      quote: 'দীর্ঘক্ষণ দাঁড়িয়ে ক্লাসে পড়াতে পিঠের ব্যথায় কষ্ট হতো। এমআরআই দেখে সঠিক কারণ বের করার পর রেডিওফ্রিকোয়েন্সি অ্যাবলেশন (RFA) করা হয়। চিকিৎসা চলাকালীন কোনো অতিরিক্ত কষ্ট ছাড়াই অনেক মাসের ব্যথা থেকে মুক্তি পেয়েছি।',
      outcomeNote: 'রেডিওফ্রিকোয়েন্সি অ্যাবলেশন সফল; ব্যথানাশক ওষুধের মাত্রা ৯০% হ্রাস।'
    }
  ];

  return (
    <section className="py-24 lg:py-32 relative bg-[#FAFAF7] border-t border-[#E2E7E8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#3D9C98] mb-3 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3D9C98]" />
              <span>{bilingual('PATIENT EXPERIENCES', 'রোগীদের অভিজ্ঞতা ও প্রতিক্রিয়া')}</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#18212B] tracking-tight">
              {bilingual('Clinical Recovery Perspectives', 'রোগমুক্তির বাস্তব অভিজ্ঞতা')}
            </h2>
            <p className="mt-4 text-[#5E6872] max-w-xl text-base sm:text-lg">
              {bilingual(
                'Reflections on diagnostic clarity, targeted interventional care, and regaining daily quality of life.',
                'সঠিক রোগ নির্ণয় ও আধুনিক ইন্টারভেনশনাল চিকিৎসার মাধ্যমে ব্যথামুক্ত স্বাভাবিক জীবনে ফিরে আসার গল্প।'
              )}
            </p>
          </div>

          <div className="text-xs font-mono text-[#5E6872]">
            {bilingual('CLINICAL CASE PERSPECTIVES', 'ক্লিনিক্যাল কেস স্টাডি')}
          </div>
        </div>

        {/* Editorial Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TESTIMONIALS_LIST.map((item, idx) => {
            const bnItem = bnTestimonials[idx] || item;
            const initials = isBn ? bnItem.initials : item.initials;
            const patientContext = isBn ? bnItem.patientContext : item.patientContext;
            const conditionTreated = isBn ? bnItem.conditionTreated : item.conditionTreated;
            const quote = isBn ? bnItem.quote : item.quote;
            const outcomeNote = isBn ? bnItem.outcomeNote : item.outcomeNote;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-[#E2E7E8] flex flex-col justify-between relative group hover:border-[#3D9C98] transition-all duration-300 shadow-[0_15px_45px_rgba(24,33,43,0.02)] hover:shadow-[0_20px_50px_rgba(61,156,152,0.08)]"
              >
                <div>
                  {/* Header: Patient Initials & Large Quote Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-[#E7F2F5] border border-[#7BAFC4]/30 flex items-center justify-center font-display font-bold text-[#3D9C98] text-sm">
                        {initials}
                      </div>
                      <div>
                        <div className="font-display font-semibold text-[#18212B] text-sm">
                          {isBn ? `রোগী ${initials}` : `Patient ${initials}`}
                        </div>
                        <div className="text-xs text-[#5E6872]">
                          {patientContext}
                        </div>
                      </div>
                    </div>

                    <Quote className="w-8 h-8 text-[#3D9C98]/20 group-hover:text-[#3D9C98]/40 transition-colors" />
                  </div>

                  {/* Condition Tag */}
                  <div className="mb-4">
                    <span className="text-[11px] font-mono text-[#3D9C98] uppercase tracking-wider font-semibold">
                      {conditionTreated}
                    </span>
                  </div>

                  {/* Quote Body */}
                  <p className="text-sm sm:text-base text-[#18212B] leading-relaxed italic mb-6">
                    &ldquo;{quote}&rdquo;
                  </p>
                </div>

                {/* Outcome Note */}
                <div className="pt-4 border-t border-[#E2E7E8] text-xs text-[#5E6872]">
                  <span className="text-[#18212B] font-medium">{isBn ? 'ফলাফল: ' : 'Outcome: '}</span>
                  {outcomeNote}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Demo Disclaimer Note */}
        <div className="mt-12 text-center text-xs text-[#5E6872] font-mono">
          {bilingual(
            'Note: Patient experiences are illustrative demo records intended to demonstrate clinical presentation and treatment response. Individual medical outcomes vary.',
            'সতর্কবার্তা: প্রতিটি রোগীর শারীরিক গঠন ও ব্যথার ধরন আলাদা হওয়ায় চিকিৎসার ফলাফল ব্যক্তিভেদে ভিন্ন হতে পারে।'
          )}
        </div>

      </div>
    </section>
  );
};
