'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
import { branding } from '@/config/branding';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const stats = [
  { value: '۷۰٪', label: 'علاقه‌مند به فناوری‌های هوشمند' },
  { value: '۶۵٪', label: 'نیازمند پایش بهتر محیط' },
  { value: '۸۰٪', label: 'معتقد به مفید بودن سامانه‌های هوشمند' },
  { value: '۶۰٪', label: 'تمایل به استفاده از کشت‌یار' },
];

const persona = {
  name: 'علی رضایی',
  age: '۳۲ سال',
  job: 'کارمند',
  location: 'شهرستان',
  property: 'باغ خانوادگی و باغچه خانگی',
  goals: ['صرفه‌جویی در زمان', 'مدیریت بهتر آبیاری', 'اطلاع از وضعیت باغ'],
  challenges: ['حضور نداشتن دائمی در محل', 'هدررفت آب', 'فراموشی زمان آبیاری'],
  needs: ['مشاهده وضعیت از راه دور', 'هشدارهای هوشمند', 'تاریخچه اطلاعات'],
};

export default function PersonaPage() {
  useScrollReveal();

  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <Container>
        {/* Hero */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-16 text-center"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4"
          >
            پرسونای مشتری کشت‌یار
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-text-tertiary max-w-2xl mx-auto"
          >
            تحلیل مشتریان بالقوه سامانه هوشمند پایش و مدیریت باغ و باغچه
          </motion.p>
        </motion.div>

        {/* Section 1 - Introduction */}
        <Section title="معرفی پروژه" className="mb-16">
          <motion.p
            variants={fadeInUp}
            className="text-text-secondary text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-center"
          >
            این پروژه با هدف شناسایی نیازها، رفتارها و انتظارات کاربران بالقوه سامانه کشت‌یار انجام شده است.
            اطلاعات این صفحه بر اساس پرسشنامه و تحلیل پاسخ‌های شرکت‌کنندگان تهیه شده‌اند.
          </motion.p>
        </Section>

        {/* Section 2 - Statistics */}
        <Section title="خلاصه پرسشنامه" className="mb-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="bg-card border border-border rounded-2xl p-6 text-center shadow-neumorph transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-text-secondary text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </Section>

        {/* Section 3 - Persona Card */}
        <Section title="پرسونای مشتری" className="mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-neumorph max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              {/* Avatar placeholder */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary/10 flex items-center justify-center text-4xl md:text-5xl text-primary mx-auto md:mx-0">
                  👨‍🌾
                </div>
              </div>

              {/* Persona details */}
              <div className="flex-1 space-y-4 text-right">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-text-primary">{persona.name}</h3>
                  <p className="text-text-tertiary text-sm">
                    {persona.age} · {persona.job} · {persona.location}
                  </p>
                </div>

                <div>
                  <p className="text-text-secondary text-sm">
                    <span className="font-semibold text-text-primary">دارایی: </span>
                    {persona.property}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div>
                    <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">اهداف</h4>
                    <ul className="space-y-1">
                      {persona.goals.map((goal, i) => (
                        <li key={i} className="text-sm text-text-secondary flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                          {goal}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-2">چالش‌ها</h4>
                    <ul className="space-y-1">
                      {persona.challenges.map((challenge, i) => (
                        <li key={i} className="text-sm text-text-secondary flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400/50 flex-shrink-0"></span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">نیازها</h4>
                    <ul className="space-y-1">
                      {persona.needs.map((need, i) => (
                        <li key={i} className="text-sm text-text-secondary flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400/50 flex-shrink-0"></span>
                          {need}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Section>

        {/* Section 4 - Insights */}
        <Section title="نتایج تحلیل" className="mb-16">
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-text-secondary text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-center"
          >
            بیشتر پاسخ‌دهندگان علاقه‌مند به استفاده از فناوری برای مدیریت بهتر باغ و باغچه هستند.
            مهم‌ترین نیازهای شناسایی شده شامل پایش از راه دور، مدیریت مصرف آب و دریافت هشدارهای هوشمند است.
          </motion.p>
        </Section>

        {/* Section 5 - Connection to Keshtyar */}
        <Section title="ارتباط با کشت‌یار" className="mb-0">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto"
          >
            <p className="text-text-secondary text-base md:text-lg leading-relaxed">
              کشت‌یار با فراهم کردن امکانات پایش، تحلیل، کنترل و هوشمندسازی
              می‌تواند بسیاری از نیازهای کاربران شناسایی‌شده در این پژوهش را پوشش دهد.
            </p>
          </motion.div>
        </Section>
      </Container>
    </main>
  );
}
