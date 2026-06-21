import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { ProductHero } from '@/components/products/ProductHero';
import { ProductIntro } from '@/components/products/ProductIntro';
import { ProductFeatures } from '@/components/products/ProductFeatures';
import { ProductApplications } from '@/components/products/ProductApplications';
import { ProductDashboard } from '@/components/products/ProductDashboard';
import { ProductFAQ } from '@/components/products/ProductFAQ';
import { ProductSummary } from '@/components/products/ProductSummary';
import { keshtyarConfig } from '@/config/products/keshtyar';

export const metadata: Metadata = {
  title: keshtyarConfig.seo.title,
  description: keshtyarConfig.seo.description,
  keywords: keshtyarConfig.seo.keywords,
  openGraph: {
    title: keshtyarConfig.seo.title,
    description: keshtyarConfig.seo.description,
    url: 'https://auron.ir/keshtyar',
    siteName: 'AURON',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: keshtyarConfig.seo.title,
    description: keshtyarConfig.seo.description,
  },
};

export default function KeshtyarPage() {
  return (
    <main className="min-h-screen bg-background">
      <ProductHero config={keshtyarConfig} />
      <ProductIntro config={keshtyarConfig} />
      <ProductFeatures config={keshtyarConfig} />
      <ProductApplications config={keshtyarConfig} />
      <ProductDashboard config={keshtyarConfig} />
      <ProductFAQ config={keshtyarConfig} />
      <ProductSummary config={keshtyarConfig} />
    </main>
  );
}
