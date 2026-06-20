import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import UAParser from 'ua-parser-js';

export async function GET(request: NextRequest) {
  const headersList = await headers();
  const userAgent = headersList.get('user-agent') || '';
  const ip = request.ip || headersList.get('x-forwarded-for') || '';
  const geo = request.geo || {};

  const parser = new UAParser(userAgent);
  const result = parser.getResult();

  return NextResponse.json({
    ip,
    geo: {
      country: geo.country || '',
      city: geo.city || '',
      region: geo.region || '',
      latitude: geo.latitude || '',
      longitude: geo.longitude || '',
    },
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
