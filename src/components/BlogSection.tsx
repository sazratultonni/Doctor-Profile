import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BLOG_POSTS, BlogPost } from '../data/doctorData';
import { ArrowRight, Clock, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const { bilingual, isBn } = useLanguage();

  const categories = [
    { id: 'All', en: 'All Articles', bn: 'সব আর্টিকেল' },
    { id: 'Back Pain', en: 'Back Pain', bn: 'কোমর ও পিঠের ব্যথা' },
    { id: 'Sciatica', en: 'Sciatica', bn: 'সায়াটিকা' },
    { id: 'Joint Pain', en: 'Joint Pain', bn: 'হাঁটু ও জয়েন্ট' },
    { id: 'Patient Education', en: 'Patient Education', bn: 'পেশেন্ট গাইড' }
  ];

  const bnBlogPosts: Record<string, { title: string; excerpt: string; category: string; readTime: string; publishDate: string; body: string[] }> = {
    'post-1': {
      title: 'রেডিওফ্রিকোয়েন্সি অ্যাবলেশন (RFA): ক্রনিক ব্যথায় আধুনিক সমাধান',
      excerpt: 'দীর্ঘদিন ব্যথানাশক ওষুধ খেয়ে পার্শ্বপ্রতিক্রিয়ায় না ভুগে কীভাবে লক্ষ্যভিত্তিক রেডিওফ্রিকোয়েন্সি থেরাপির মাধ্যমে ব্যথাবহনকারী নার্ভ শান্ত করা যায়।',
      category: 'Back Pain',
      readTime: '৪ মিনিট পাঠ',
      publishDate: '১২ সেপ্টেম্বর, ২০২৪',
      body: [
        'দীর্ঘস্থায়ী কোমর ও ঘাড়ের ব্যথায় ফ্যাসেট জয়েন্টের সমস্যা অত্যন্ত সাধারণ। প্রচলিত ব্যথানাশক ওষুধ সাময়িক আরাম দিলেও এর দীর্ঘমেয়াদী ব্যবহারে কিডনি ও পাকস্থলীর ক্ষতি হতে পারে।',
        'রেডিওফ্রিকোয়েন্সি অ্যাবলেশন (RFA) পদ্ধতিতে অত্যাধুনিক সি-আর্ম ফ্লুরোস্কোপির মাধ্যমে বিশেষ নিডল সুনির্দিষ্ট সেন্সরি নার্ভের কাছে পৌঁছে দেওয়া হয়। নিয়ন্ত্রিত তাপপ্রয়োগের মাধ্যমে ব্যথার সংকেত মস্তিষ্কে পৌঁছানো সাময়িকভাবে বন্ধ করে দেওয়া হয়।',
        'এই পদ্ধতিতে রোগীকে কোনো জেনারেল অ্যানেস্থেশিয়া বা হাসপাতালে ভর্তি হতে হয় না। সাধারণত কয়েক ঘণ্টার মধ্যেই রোগী স্বাভাবিক পরিবেশে ফিরে যেতে পারেন।'
      ]
    },
    'post-2': {
      title: 'সায়াটিকা ও ডিস্ক হার্নিয়েশন: কখন ইন্টারভেনশনাল চিকিৎসা জরুরি?',
      excerpt: 'কোমর থেকে পা পর্যন্ত ছড়িয়ে পড়া তীব্র ঝিনঝিন ও অবশ ভাবের কারণ এবং সি-আর্ম গাইডেড ট্রান্সফোরামিনাল এপিডুরাল ইনজেকশনের ভূমিকা।',
      category: 'Sciatica',
      readTime: '৫ মিনিট পাঠ',
      publishDate: '২৮ আগস্ট, ২০২৪',
      body: [
        'লাম্বার ডিস্ক প্রোল্যাপ্স বা ডিস্ক হার্নিয়েশনে নার্ভ রুটের ওপর চাপ পড়লে পায়ে তীব্র বিদ্যুৎ চমকানোর মতো ব্যথা বা অবশ ভাব দেখা দেয়, যাকে চিকিৎসাবিজ্ঞানের ভাষায় সায়াটিকা বলা হয়।',
        'প্রারম্ভিক অবস্থায় বিশ্রাম ও ফিজিওথেরাপির পাশাপাশি ট্রান্সফোরামিনাল এপিডুরাল স্টেরয়েড ইনজেকশন (TFESI) অত্যন্ত কার্যকরী। এটি সরাসরি প্রদাহযুক্ত নার্ভ রুটের চারপাশে অ্যান্টি-ইনফ্ল্যামেটরি ওষুধ পৌঁছে দিয়ে ফোলা কমায়।',
        'সঠিক সময়ে এই ইন্টারভেনশন নিলে ৮০% ক্ষেত্রে বড় ধরনের ডিস্ক সার্জারির ঝুঁকি এড়ানো সম্ভব।'
      ]
    },
    'post-3': {
      title: 'অস্টিওআর্থ্রাইটিস ও হাঁটুর ব্যথা: জেনিকুলার নার্ভ ব্লক ও পিআরপি',
      excerpt: 'হাঁটু প্রতিস্থাপন (TKR) অপারেশনের বিকল্প হিসেবে আধুনিক জেনিকুলার নার্ভ রেডিওফ্রিকোয়েন্সি ও রিজেনারেটিভ থেরাপি।',
      category: 'Joint Pain',
      readTime: '৪ মিনিট পাঠ',
      publishDate: '১৫ জুলাই, ২০২৪',
      body: [
        'বয়স বৃদ্ধির সাথে সাথে হাঁটুর কার্টিলেজ ক্ষয়প্রাপ্ত হয়ে অস্টিওআর্থ্রাইটিসের সৃষ্টি হয়। ব্যথার কারণে হাঁটাচলা ও সিঁড়ি ভাঙা কঠিন হয়ে পড়ে।',
        'যাঁরা নানা কারণে হাঁটু প্রতিস্থাপন সার্জারি করাতে চান না বা শারীরিক অসুস্থতার জন্য সার্জারির উপযুক্ত নন, তাঁদের জন্য জেনিকুলার নার্ভ ব্লক একটি অনন্য আধুনিক পদ্ধতি।',
        'আল্ট্রাসাউন্ড বা ফ্লুরোস্কোপিক নির্দেশনায় হাঁটুর ব্যথাবহনকারী সংবেদনশীল নার্ভগুলোতে রেডিওফ্রিকোয়েন্সি বা পিআরপি প্রয়োগ করে দীর্ঘমেয়াদী আরাম পাওয়া যায়।'
      ]
    }
  };

  const filteredPosts = activeCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(p => p.category === activeCategory);

  return (
    <section id="blog" className="py-24 lg:py-32 relative bg-[#FFFFFF] border-t border-[#E2E7E8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#3D9C98] mb-3 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3D9C98]" />
              <span>{bilingual('EDITORIAL INSIGHTS', 'চিকিৎসা তথ্য ও বিশ্লেষণ')}</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#18212B] tracking-tight">
              {bilingual('Clinical Insights & Articles', 'মেডিকেল আর্টিকেল ও স্বাস্থ্য পরামর্শ')}
            </h2>
            <p className="mt-4 text-[#5E6872] max-w-xl text-base sm:text-lg">
              {bilingual(
                'Physician-authored analyses on modern pain science, interventional advances, and musculoskeletal preservation.',
                'আধুনিক পেইন ম্যানেজমেন্ট, স্নায়ুর যত্ন এবং ব্যথামুক্ত জীবনযাত্রার বিজ্ঞানভিত্তিক দিকনির্দেশনা।'
              )}
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#FAFAF7] border border-[#E2E7E8] rounded-xl overflow-x-auto shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#3D9C98] text-white font-semibold shadow-sm'
                    : 'text-[#5E6872] hover:text-[#18212B] hover:bg-white'
                }`}
              >
                {isBn ? cat.bn : cat.en}
              </button>
            ))}
          </div>
        </div>

        {/* Large Editorial Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPosts.map((post, idx) => {
            const bnPost = bnBlogPosts[post.id];
            const title = isBn && bnPost ? bnPost.title : post.title;
            const excerpt = isBn && bnPost ? bnPost.excerpt : post.excerpt;
            const readTime = isBn && bnPost ? bnPost.readTime : post.readTime;
            const publishDate = isBn && bnPost ? bnPost.publishDate : post.publishDate;

            return (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onClick={() => setSelectedPost(post)}
                className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E2E7E8] flex flex-col justify-between group hover:border-[#3D9C98] hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-[0_10px_30px_rgba(24,33,43,0.02)] hover:shadow-[0_15px_40px_rgba(61,156,152,0.08)]"
              >
                <div>
                  {/* Meta Header */}
                  <div className="flex items-center justify-between text-xs font-mono text-[#5E6872] mb-4">
                    <span className="text-[#3D9C98] uppercase tracking-wider font-semibold">{post.category}</span>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-[#18212B] mb-4 group-hover:text-[#3D9C98] transition-colors leading-snug">
                    {title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-[#5E6872] leading-relaxed line-clamp-3 mb-6">
                    {excerpt}
                  </p>
                </div>

                {/* Read Action */}
                <div className="pt-4 border-t border-[#E2E7E8] flex items-center justify-between text-xs font-semibold text-[#3D9C98]">
                  <span className="group-hover:text-[#31827E] transition-colors flex items-center gap-1.5">
                    {bilingual('Read Clinical Article', 'পুরো আর্টিকেল পড়ুন')}
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="font-mono text-[#5E6872] text-[11px]">{publishDate}</span>
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>

      {/* Light Blog Article Reader Modal */}
      <AnimatePresence>
        {selectedPost && (() => {
          const bnPost = bnBlogPosts[selectedPost.id];
          const modalTitle = isBn && bnPost ? bnPost.title : selectedPost.title;
          const modalExcerpt = isBn && bnPost ? bnPost.excerpt : selectedPost.excerpt;
          const modalReadTime = isBn && bnPost ? bnPost.readTime : selectedPost.readTime;
          const modalPublishDate = isBn && bnPost ? bnPost.publishDate : selectedPost.publishDate;
          const modalBody = isBn && bnPost ? bnPost.body : selectedPost.body;

          return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPost(null)}
                className="absolute inset-0 bg-[#18212B]/40 backdrop-blur-sm"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 16 }}
                transition={{ duration: 0.25 }}
                className="relative w-full max-w-3xl bg-white border border-[#E2E7E8] rounded-2xl shadow-2xl p-6 sm:p-10 z-10 max-h-[90vh] overflow-y-auto"
              >
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-6 right-6 p-2 rounded-lg text-[#5E6872] hover:text-[#18212B] hover:bg-slate-100 transition-colors cursor-pointer"
                  aria-label="Close article"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-3 text-xs font-mono text-[#3D9C98] uppercase tracking-widest mb-2 font-medium">
                      <span>{selectedPost.category}</span>
                      <span>·</span>
                      <span>{modalReadTime}</span>
                      <span>·</span>
                      <span className="text-[#5E6872]">{modalPublishDate}</span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-4xl font-bold text-[#18212B] leading-tight">
                      {modalTitle}
                    </h3>
                    <div className="mt-3 flex items-center gap-2 text-xs text-[#5E6872] font-mono">
                      <span>{bilingual('Author: Dr. Shamsul Alam', 'লেখক: ডাঃ শামসুল আলম')}</span>
                      <span>·</span>
                      <span className="text-[#3D9C98] font-semibold">{bilingual('Clinical Editorial', 'ক্লিনিক্যাল সম্পাদকীয়')}</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#E7F2F5] border border-[#7BAFC4]/30 text-sm text-[#18212B] italic">
                    &ldquo;{modalExcerpt}&rdquo;
                  </div>

                  <div className="space-y-4 text-[#5E6872] text-base leading-relaxed pt-2">
                    {modalBody.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-[#E2E7E8] flex items-center justify-between">
                    <div className="text-xs font-mono text-[#5E6872]">
                      {bilingual('MEDICAL PUBLICATION', 'মেডিকেল পাবলিকেশন')}
                    </div>
                    <button
                      onClick={() => setSelectedPost(null)}
                      className="px-5 py-2.5 rounded-lg bg-[#3D9C98] hover:bg-[#31827E] text-white font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer shadow-sm"
                    >
                      {bilingual('Close Article', 'বন্ধ করুন')}
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>

    </section>
  );
};
