import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import UAParser from 'ua-parser-js';

export async function GET(request: NextRequest) {
  const headersList = await headers();
  const userAgent = headersList.get('user-agent') || '';
  
  // دریافت IP از هدرها (بدون استفاده از request.ip)
  const forwardedFor = headersList.get('x-forwarded-for');
  const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : '';
  
  // دریافت اطلاعات موقعیت از هدرهای Vercel
  const geo = {
    country: headersList.get('x-vercel-ip-country') || '',
    city: headersList.get('x-vercel-ip-city') || '',
    region: headersList.get('x-vercel-ip-country-region') || '',
    latitude: headersList.get('x-vercel-ip-latitude') || '',
    longitude: headersList.get('x-vercel-ip-longitude') || '',
  };

  const parser = new UAParser(userAgent);
  const result = parser.getResult();

  return NextResponse.json({
    ip,
    geo,
    device: {
      type: result.device.type || 'desktop',
      model: result.device.model || '',
      vendor: result.device.vendor || '',
    },
    os: {
      name: result.os.name || '',
      version: result.os.version || '',
    },
    browser: {
      name: result.browser.name || '',
      version: result.browser.version || '',
    },
    cpu: {
      architecture: result.cpu?.architecture || '',
    },
    timestamp: new Date().toISOString(),
  });
}
