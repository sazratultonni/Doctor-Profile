<?php
/**
 * Header Template
 * 
 * @package Dr_Shamsul_Alam
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    
    <!-- Instant In-Head Fail-Safe Theme Language & Navigation Script -->
    <script>
    (function() {
        window.__drShamsulDict = {
            en: {
                brandName: 'DR. SHAMSUL ALAM',
                brandSub: 'Pain Medicine Specialist',
                navAbout: 'About',
                navExpertise: 'Expertise',
                navTreatments: 'Treatments',
                navChambers: 'Chambers',
                navEducation: 'Patient Guide',
                navInsights: 'Insights',
                bookApt: 'BOOK APPOINTMENT',
                heroBadge: 'PAIN MEDICINE SPECIALIST',
                heroTitle: 'DR. SHAMSUL ALAM',
                heroSubtitle: 'Helping patients understand, manage and move beyond persistent pain.',
                heroDesc: 'Providing evidence-based diagnostic clarity and targeted image-guided interventional therapies for complex spinal, nerve, and joint pain.',
                contactDoc: 'CONTACT DOCTOR',
                expVal: '15+ Years',
                expLabel: 'Clinical Experience',
                precisionVal: 'Precision Guidance',
                precisionLabel: 'C-Arm & Ultrasound',
                focusVal: 'Targeted Care',
                focusLabel: 'Spine & Nerve Focus',
                trust1Title: '15+ Years Experience',
                trust1Desc: 'Dedicated practice in advanced multidisciplinary pain diagnosis and precision interventional procedures.',
                trust2Title: 'Precision Image Guidance',
                trust2Desc: 'Targeted C-Arm fluoroscopy and high-resolution ultrasound for sub-millimeter needle accuracy.',
                trust3Title: 'Evidence-Based Protocols',
                trust3Desc: 'Non-surgical interventions adhering to international pain medicine guidelines (WIP, SIS, APS).',
                trust4Title: 'Compassionate Patient-First',
                trust4Desc: 'Individualized treatment mapping prioritizing functional mobility and root-cause relief.',
                aboutEyebrow: 'PHYSICIAN PROFILE',
                aboutTitle: 'Accurate Diagnosis Is The Foundation Of True Pain Relief',
                expertiseEyebrow: 'CLINICAL SCOPE',
                expertiseTitle: 'Conditions We Diagnose & Treat',
                expertiseSubtitle: 'Targeted evaluation and image-guided interventions for acute and long-standing musculoskeletal, spinal, and neurological pain conditions.',
                treatmentsEyebrow: 'PRECISION INTERVENTIONS',
                treatmentsTitle: 'Image-Guided Treatments',
                treatmentsSubtitle: 'Modern non-surgical interventional options designed to target inflammation and break pain circuits without general anesthesia.',
                chambersEyebrow: 'CHAMBERS & LOCATIONS',
                chambersTitle: 'Where to Consult Dr. Shamsul Alam',
                chambersSubtitle: 'Convenient consultation locations across Dhaka with complete diagnostic and interventional facilities.',
                educationEyebrow: 'PATIENT GUIDE',
                educationTitle: 'Understanding Your Pain',
                ctaEyebrow: 'TAKE THE NEXT STEP',
                ctaTitle: 'Move Beyond Persistent Pain',
                ctaDesc: 'Do not let chronic pain dictate your everyday life. Schedule a thorough clinical evaluation to discover evidence-based interventional options tailored to your condition.',
                ctaCall: 'CALL CHAMBER',
                footerSub: 'Pain Medicine & Interventional Pain Specialist',
                footerBio: 'Dedicated to pinpoint diagnosis and targeted interventional management for spinal disorders, radiculopathy, and persistent musculoskeletal pain syndromes.'
            },
            bn: {
                brandName: 'ডাঃ শামসুল আলম',
                brandSub: 'পেইন মেডিসিন ও ইন্টারভেনশনাল বিশেষজ্ঞ',
                navAbout: 'পরিচিতি',
                navExpertise: 'চিকিৎসা ক্ষেত্র',
                navTreatments: 'পদ্ধতিসমূহ',
                navChambers: 'চেম্বার',
                navEducation: 'পেশেন্ট গাইড',
                navInsights: 'আর্টিকেল',
                bookApt: 'সিরিয়াল বুক করুন',
                heroBadge: 'পেইন মেডিসিন বিশেষজ্ঞ',
                heroTitle: 'ডাঃ শামসুল আলম',
                heroSubtitle: 'দীর্ঘস্থায়ী ও জটিল ব্যথামুক্ত স্বাভাবিক জীবনের নিরাপদ চিকিৎসা।',
                heroDesc: 'সি-আর্ম ফ্লুরোস্কোপি ও আল্ট্রাসাউন্ডের নিখুঁত নির্দেশনায় মেরুদণ্ড, কোমর ও স্নায়ুর ব্যথায় অত্যাধুনিক নন-সার্জিক্যাল ইন্টারভেনশনাল থেরাপি।',
                contactDoc: 'যোগাযোগ করুন',
                expVal: '১৫+ বছর',
                expLabel: 'ক্লিনিক্যাল অভিজ্ঞতা',
                precisionVal: 'প্রিসিশন গাইডেন্স',
                precisionLabel: 'সি-আর্ম ও আল্ট্রাসাউন্ড',
                focusVal: 'লক্ষ্যভিত্তিক চিকিৎসা',
                focusLabel: 'মেরুদণ্ড ও স্নায়ুর ব্যথা',
                trust1Title: '১৫+ বছরের অভিজ্ঞতা',
                trust1Desc: 'দীর্ঘস্থায়ী ব্যথা নির্ণয় ও সর্বাধুনিক ইন্টারভেনশনাল চিকিৎসায় নির্ভরযোগ্য ক্লিনিক্যাল দক্ষতা।',
                trust2Title: 'ইমেজ-গাইডেড প্রিসিশন',
                trust2Desc: 'সি-আর্ম ও হাই-রেজোলিউশন আল্ট্রাসাউন্ড দ্বারা মিলিমিটারের নিখুঁততায় সরাসরি ব্যথার মূল উৎসে চিকিৎসা।',
                trust3Title: 'আন্তর্জাতিক প্রটোকল',
                trust3Desc: 'WIP, SIS ও আন্তর্জাতিক পেইন মেডিসিন গাইডলাইন অনুসরণ করে নন-সার্জিক্যাল চিকিৎসা।',
                trust4Title: 'রোগীবান্ধব সেবা',
                trust4Desc: 'ব্যথানাশক ওষুধের অতিরিক্ত ব্যবহার এড়িয়ে দীর্ঘস্থায়ী আরাম ও কর্মক্ষমতা ফিরিয়ে আনা।',
                aboutEyebrow: 'ডাক্তার পরিচিতি',
                aboutTitle: 'সঠিক রোগ নির্ণয়ই ব্যথামুক্তির মূল চাবিকাঠি',
                expertiseEyebrow: 'চিকিৎসাসেবার ক্ষেত্র',
                expertiseTitle: 'যেসব ব্যথার চিকিৎসা দেওয়া হয়',
                expertiseSubtitle: 'মেরুদণ্ড, কোমর, ঘাড়, হাঁটু ও স্নায়ুর বিভিন্ন তীব্র ও দীর্ঘস্থায়ী ব্যথায় আধুনিক মূল্যায়ন ও চিকিৎসা।',
                treatmentsEyebrow: 'অত্যাধুনিক ইন্টারভেনশন',
                treatmentsTitle: 'ইমেজ-গাইডেড চিকিৎসা পদ্ধতিসমূহ',
                treatmentsSubtitle: 'অপারেশনবিহীন আধুনিক ইন্টারভেনশনাল চিকিৎসা, যা জেনারেল অ্যানেস্থেশিয়া ছাড়াই দ্রুত আরাম প্রদান করে।',
                chambersEyebrow: 'চেম্বার ও সময়সূচী',
                chambersTitle: 'ডাঃ শামসুল আলমের চেম্বারসমূহ',
                chambersSubtitle: 'ধানমন্ডি ও পান্থপথে আধুনিক চিকিৎসাসেবা সম্বলিত নির্ধারিত চেম্বার।',
                educationEyebrow: 'রোগীদের গাইড',
                educationTitle: 'ব্যথা সম্পর্কে জানুন ও সচেতন হোন',
                ctaEyebrow: 'সুস্থ জীবনের পথে',
                ctaTitle: 'দীর্ঘদিনের ব্যথা নিয়ে আর কষ্ট নয়',
                ctaDesc: 'ব্যথাকে আপনার দৈনন্দিন জীবনের বাধা হতে দেবেন না। সুনির্দিষ্ট পরীক্ষা ও আধুনিক ইন্টারভেনশনাল চিকিৎসার মাধ্যমে সুস্থ জীবনে ফিরে আসুন।',
                ctaCall: 'চেম্বারে ফোন করুন',
                footerSub: 'পেইন মেডিসিন ও ইন্টারভেনশনাল বিশেষজ্ঞ',
                footerBio: 'মেরুদণ্ড, হাড় ও স্নায়ুজনিত জটিল ব্যথায় সর্বাধুনিক ইমেজ-গাইডেড পদ্ধতিতে নিবেদিত চিকিৎসাসেবা।'
            }
        };

        window.setThemeLanguage = function(targetLang) {
            targetLang = (targetLang === 'bn') ? 'bn' : 'en';
            try {
                localStorage.setItem('dr_shamsul_theme_lang', targetLang);
                if (document.documentElement) {
                    document.documentElement.lang = targetLang;
                }

                // 1. Immediately toggle active classes on all switcher buttons
                var btns = document.querySelectorAll('.lang-btn, .lang-btn-mob');
                for (var i = 0; i < btns.length; i++) {
                    var bLang = btns[i].getAttribute('data-lang');
                    if (bLang === targetLang) {
                        btns[i].classList.add('active');
                    } else {
                        btns[i].classList.remove('active');
                    }
                }

                // 2. Apply dictionary texts immediately
                var d = window.__drShamsulDict[targetLang] || window.__drShamsulDict.en;
                if (d) {
                    // Header Brand
                    var bName = document.querySelector('.brand-name');
                    if (bName) bName.textContent = d.brandName;
                    var bSub = document.querySelector('.brand-sub');
                    if (bSub) bSub.textContent = d.brandSub;

                    // Navigation Links (Desktop)
                    var navLinks = document.querySelectorAll('.desktop-nav .nav-link');
                    if (navLinks.length >= 6) {
                        if (navLinks[0]) navLinks[0].textContent = d.navAbout;
                        if (navLinks[1]) navLinks[1].textContent = d.navExpertise;
                        if (navLinks[2]) navLinks[2].textContent = d.navTreatments;
                        if (navLinks[3]) navLinks[3].textContent = d.navChambers;
                        if (navLinks[4]) navLinks[4].textContent = d.navEducation;
                        if (navLinks[5]) navLinks[5].textContent = d.navInsights;
                    }

                    // Navigation Links (Mobile)
                    var mobLinks = document.querySelectorAll('.mobile-drawer .mobile-link');
                    if (mobLinks.length >= 6) {
                        if (mobLinks[0]) mobLinks[0].textContent = d.navAbout;
                        if (mobLinks[1]) mobLinks[1].textContent = d.navExpertise;
                        if (mobLinks[2]) mobLinks[2].textContent = d.navTreatments;
                        if (mobLinks[3]) mobLinks[3].textContent = d.navChambers;
                        if (mobLinks[4]) mobLinks[4].textContent = d.navEducation;
                        if (mobLinks[5]) mobLinks[5].textContent = d.navInsights;
                    }

                    // Booking CTA Buttons
                    var ctaSpans = document.querySelectorAll('[data-i18n="book_apt"], .open-booking-modal span, .open-booking-modal');
                    for (var j = 0; j < ctaSpans.length; j++) {
                        var el = ctaSpans[j];
                        if (el.tagName === 'SPAN' || el.tagName === 'BUTTON') {
                            var t = el.textContent.trim().toUpperCase();
                            if (t.indexOf('BOOK') !== -1 || el.textContent.indexOf('অ্যাপয়েন্টমেন্ট') !== -1 || el.textContent.indexOf('সিরিয়াল') !== -1) {
                                el.textContent = d.bookApt;
                            }
                        }
                    }

                    // Hero Elements
                    var hBadge = document.querySelector('.hero-badge .badge-text');
                    if (hBadge) hBadge.textContent = d.heroBadge;
                    var hTitle = document.querySelector('.hero-title');
                    if (hTitle) hTitle.textContent = d.heroTitle;
                    var hSub = document.querySelector('.hero-subtitle');
                    if (hSub) hSub.textContent = d.heroSubtitle;
                    var hDesc = document.querySelector('.hero-description');
                    if (hDesc) hDesc.textContent = d.heroDesc;
                    var hContact = document.querySelector('.hero-actions a.btn-outline span');
                    if (hContact) hContact.textContent = d.contactDoc;

                    // Hero Metrics
                    var hMetrics = document.querySelectorAll('.hero-micro-metrics .micro-metric');
                    if (hMetrics.length >= 3) {
                        var m0v = hMetrics[0].querySelector('.metric-val'); if (m0v) m0v.textContent = d.expVal;
                        var m0l = hMetrics[0].querySelector('.metric-label'); if (m0l) m0l.textContent = d.expLabel;
                        var m1v = hMetrics[1].querySelector('.metric-val'); if (m1v) m1v.textContent = d.precisionVal;
                        var m1l = hMetrics[1].querySelector('.metric-label'); if (m1l) m1l.textContent = d.precisionLabel;
                        var m2v = hMetrics[2].querySelector('.metric-val'); if (m2v) m2v.textContent = d.focusVal;
                        var m2l = hMetrics[2].querySelector('.metric-label'); if (m2l) m2l.textContent = d.focusLabel;
                    }

                    // Trust Cards
                    var tCards = document.querySelectorAll('.trust-card');
                    if (tCards.length >= 4) {
                        var t0 = tCards[0].querySelector('.trust-title'); if (t0) t0.textContent = d.trust1Title;
                        var d0 = tCards[0].querySelector('.trust-desc'); if (d0) d0.textContent = d.trust1Desc;
                        var t1 = tCards[1].querySelector('.trust-title'); if (t1) t1.textContent = d.trust2Title;
                        var d1 = tCards[1].querySelector('.trust-desc'); if (d1) d1.textContent = d.trust2Desc;
                        var t2 = tCards[2].querySelector('.trust-title'); if (t2) t2.textContent = d.trust3Title;
                        var d2 = tCards[2].querySelector('.trust-desc'); if (d2) d2.textContent = d.trust3Desc;
                        var t3 = tCards[3].querySelector('.trust-title'); if (t3) t3.textContent = d.trust4Title;
                        var d3 = tCards[3].querySelector('.trust-desc'); if (d3) d3.textContent = d.trust4Desc;
                    }

                    // Section Headings
                    var abEye = document.querySelector('#about .section-eyebrow span:last-child'); if (abEye) abEye.textContent = d.aboutEyebrow;
                    var abHead = document.querySelector('#about .section-title'); if (abHead) abHead.textContent = d.aboutTitle;

                    var exEye = document.querySelector('#expertise .section-eyebrow span:last-child'); if (exEye) exEye.textContent = d.expertiseEyebrow;
                    var exTitle = document.querySelector('#expertise .section-title'); if (exTitle) exTitle.textContent = d.expertiseTitle;
                    var exSub = document.querySelector('#expertise .section-subtitle'); if (exSub) exSub.textContent = d.expertiseSubtitle;

                    var trEye = document.querySelector('#treatments .section-eyebrow span:last-child'); if (trEye) trEye.textContent = d.treatmentsEyebrow;
                    var trTitle = document.querySelector('#treatments .section-title'); if (trTitle) trTitle.textContent = d.treatmentsTitle;
                    var trSub = document.querySelector('#treatments .section-subtitle'); if (trSub) trSub.textContent = d.treatmentsSubtitle;

                    var chEye = document.querySelector('#chambers .section-eyebrow span:last-child'); if (chEye) chEye.textContent = d.chambersEyebrow;
                    var chTitle = document.querySelector('#chambers .section-title'); if (chTitle) chTitle.textContent = d.chambersTitle;
                    var chSub = document.querySelector('#chambers .section-subtitle'); if (chSub) chSub.textContent = d.chambersSubtitle;

                    var edEye = document.querySelector('#education .section-eyebrow span:last-child'); if (edEye) edEye.textContent = d.educationEyebrow;
                    var edTitle = document.querySelector('#education .section-title'); if (edTitle) edTitle.textContent = d.educationTitle;

                    var ctaEye = document.querySelector('.cta-section .section-eyebrow span:last-child'); if (ctaEye) ctaEye.textContent = d.ctaEyebrow;
                    var ctaTitle = document.querySelector('.cta-section .section-title'); if (ctaTitle) ctaTitle.textContent = d.ctaTitle;
                    var ctaDesc = document.querySelector('.cta-section .section-description'); if (ctaDesc) ctaDesc.textContent = d.ctaDesc;
                    var ctaCall = document.querySelector('.cta-section a.btn-secondary span'); if (ctaCall) ctaCall.textContent = d.ctaCall;

                    var ftSub = document.querySelector('.footer-brand-sub'); if (ftSub) ftSub.textContent = d.footerSub;
                    var ftBio = document.querySelector('.footer-bio'); if (ftBio) ftBio.textContent = d.footerBio;
                }

                // Dispatch custom event for theme-main.js or other components
                if (window.dispatchEvent) {
                    window.dispatchEvent(new CustomEvent('themeLanguageChanged', { detail: { lang: targetLang } }));
                }
            } catch (err) {
                console.error('Error switching language:', err);
            }
        };

        // Fail-safe Mobile Drawer Toggle
        window.toggleDrShamsulMobileMenu = function() {
            var drawer = document.getElementById('mobile-drawer');
            var openIcon = document.getElementById('toggle-icon-open');
            var closeIcon = document.getElementById('toggle-icon-close');
            if (drawer) {
                var isOpen = drawer.classList.contains('open') || drawer.style.display === 'block';
                if (isOpen) {
                    drawer.classList.remove('open');
                    drawer.style.display = 'none';
                    if (openIcon) openIcon.style.display = 'inline-block';
                    if (closeIcon) closeIcon.style.display = 'none';
                } else {
                    drawer.classList.add('open');
                    drawer.style.display = 'block';
                    if (openIcon) openIcon.style.display = 'none';
                    if (closeIcon) closeIcon.style.display = 'inline-block';
                }
            }
        };

        // Global delegated click listener for buttons
        document.addEventListener('click', function(e) {
            var target = e.target;
            if (!target) return;
            var langBtn = target.closest ? target.closest('.lang-btn, .lang-btn-mob') : null;
            if (langBtn) {
                e.preventDefault();
                e.stopPropagation();
                var l = langBtn.getAttribute('data-lang');
                if (l) window.setThemeLanguage(l);
                return;
            }
            var mobTrigger = target.closest ? target.closest('#mobile-menu-trigger') : null;
            if (mobTrigger) {
                e.preventDefault();
                e.stopPropagation();
                window.toggleDrShamsulMobileMenu();
                return;
            }
        });

        // Initialize saved language
        function initSavedLanguage() {
            var saved = localStorage.getItem('dr_shamsul_theme_lang') || 'en';
            if (saved === 'bn') {
                window.setThemeLanguage('bn');
            }
        }

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initSavedLanguage);
        } else {
            initSavedLanguage();
        }
    })();
    </script>

    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<!-- Sticky Light Navigation Bar -->
<header id="site-header" class="site-header">
    <div class="nav-container">
        <!-- Brand Wordmark -->
        <a href="<?php echo esc_url(home_url('/')); ?>" class="brand-link">
            <span class="brand-name">DR. SHAMSUL ALAM</span>
            <span class="brand-sub">Pain Medicine Specialist</span>
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="desktop-nav" aria-label="<?php esc_attr_e('Main Navigation', 'dr-shamsul-alam'); ?>">
            <a href="#about" class="nav-link"><?php _e('About', 'dr-shamsul-alam'); ?></a>
            <a href="#expertise" class="nav-link"><?php _e('Expertise', 'dr-shamsul-alam'); ?></a>
            <a href="#treatments" class="nav-link"><?php _e('Treatments', 'dr-shamsul-alam'); ?></a>
            <a href="#chambers" class="nav-link"><?php _e('Chambers', 'dr-shamsul-alam'); ?></a>
            <a href="#education" class="nav-link"><?php _e('Patient Guide', 'dr-shamsul-alam'); ?></a>
            <a href="#insights" class="nav-link"><?php _e('Insights', 'dr-shamsul-alam'); ?></a>
        </nav>

        <!-- CTA, Language Switcher & Mobile Toggle -->
        <div class="nav-actions">
            <!-- Language Switcher Pill with Instant Direct Switcher -->
            <div class="lang-switch-pill" id="theme-lang-toggle" role="group" aria-label="Language selector">
                <button type="button" class="lang-btn active" data-lang="en" onclick="window.setThemeLanguage('en')">ENG</button>
                <button type="button" class="lang-btn" data-lang="bn" onclick="window.setThemeLanguage('bn')">বাং</button>
            </div>

            <button type="button" class="btn btn-primary open-booking-modal" data-chamber="" data-reason="">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-inline"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                <span data-i18n="book_apt"><?php _e('BOOK APPOINTMENT', 'dr-shamsul-alam'); ?></span>
            </button>
            
            <button type="button" class="mobile-toggle" id="mobile-menu-trigger" aria-label="<?php esc_attr_e('Toggle Menu', 'dr-shamsul-alam'); ?>" onclick="window.toggleDrShamsulMobileMenu()">
                <svg id="toggle-icon-open" class="toggle-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
                <svg id="toggle-icon-close" class="toggle-svg" style="display:none;" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
        </div>
    </div>

    <!-- Mobile Drawer Menu -->
    <div id="mobile-drawer" class="mobile-drawer">
        <div class="mobile-lang-switch">
            <button type="button" class="lang-btn-mob active" data-lang="en" onclick="window.setThemeLanguage('en')">English</button>
            <button type="button" class="lang-btn-mob" data-lang="bn" onclick="window.setThemeLanguage('bn')">বাংলা</button>
        </div>
        <div class="mobile-nav-links">
            <a href="#about" class="mobile-link"><?php _e('About Doctor', 'dr-shamsul-alam'); ?></a>
            <a href="#expertise" class="mobile-link"><?php _e('Conditions Treated', 'dr-shamsul-alam'); ?></a>
            <a href="#treatments" class="mobile-link"><?php _e('Interventional Treatments', 'dr-shamsul-alam'); ?></a>
            <a href="#chambers" class="mobile-link"><?php _e('Chamber Locations & Hours', 'dr-shamsul-alam'); ?></a>
            <a href="#education" class="mobile-link"><?php _e('Patient Education', 'dr-shamsul-alam'); ?></a>
            <a href="#insights" class="mobile-link"><?php _e('Clinical Insights', 'dr-shamsul-alam'); ?></a>
            <div class="mobile-drawer-cta">
                <button type="button" class="btn btn-primary btn-block open-booking-modal">
                    <?php _e('BOOK AN APPOINTMENT', 'dr-shamsul-alam'); ?>
                </button>
            </div>
        </div>
    </div>
</header>
