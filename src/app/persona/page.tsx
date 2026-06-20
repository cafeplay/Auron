'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/Container';

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
  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <Container>
        {/* عنوان */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            پرسونای مشتری کشت‌یار
          </h1>
          <p className="text-lg md:text-xl text-text-tertiary max-w-2xl mx-auto">
            تحلیل مشتریان بالقوه سامانه هوشمند پایش و مدیریت باغ و باغچه
          </p>
        </motion.div>

        {/* بخش ۱ - معرفی */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">معرفی پروژه</h2>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-center">
            این پروژه با هدف شناسایی نیازها، رفتارها و انتظارات کاربران بالقوه سامانه کشت‌یار انجام شده است.
            اطلاعات این صفحه بر اساس پرسشنامه و تحلیل پاسخ‌های شرکت‌کنندگان تهیه شده‌اند.
          </p>
        </section>

        {/* بخش ۲ - آمار */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">خلاصه پرسشنامه</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-surface border border-border rounded-2xl p-6 text-center shadow-[8px_8px_16px_rgba(0,0,0,0.3),-4px_-4px_8px_rgba(255,255,255,0.02)]"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-text-secondary text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* بخش ۳ - پرسونا */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">پرسونای مشتری</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surface border border-border rounded-2xl p-6 md:p-8 shadow-[12px_12px_24px_rgba(0,0,0,0.4),-6px_-6px_12px_rgba(255,255,255,0.02)] max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              {/* آواتار */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary/10 flex items-center justify-center text-4xl md:text-5xl text-primary mx-auto md:mx-0 shadow-[inset_0_2px_4px_rgba(255,255,255,0.05),4px_4px_8px_rgba(0,0,0,0.3)]">
                  👨‍🌾
                </div>
              </div>

              {/* اطلاعات */}
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
        </section>

        {/* بخش ۴ - نتایج */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">نتایج تحلیل</h2>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-center">
            بیشتر پاسخ‌دهندگان علاقه‌مند به استفاده از فناوری برای مدیریت بهتر باغ و باغچه هستند.
            مهم‌ترین نیازهای شناسایی شده شامل پایش از راه دور، مدیریت مصرف آب و دریافت هشدارهای هوشمند است.
          </p>
        </section>

        {/* بخش ۵ - ارتباط با کشت‌یار */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">ارتباط با کشت‌یار</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto shadow-[inset_0_1px_0_rgba(156,176,128,0.1)]"
          >
            <p className="text-text-secondary text-base md:text-lg leading-relaxed">
              کشت‌یار با فراهم کردن امکانات پایش، تحلیل، کنترل و هوشمندسازی
              می‌تواند بسیاری از نیازهای کاربران شناسایی‌شده در این پژوهش را پوشش دهد.
            </p>
          </motion.div>
        </section>
      </Container>
    </main>
  );
}
