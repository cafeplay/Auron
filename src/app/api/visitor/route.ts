import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const supabase = createClient();
    const body = await request.json();

    const { error } = await supabase
      .from('visitors')
      .insert({
        ip: body.ip,
        country: body.geo?.country,
        city: body.geo?.city,
        region: body.geo?.region,
        latitude: body.geo?.latitude,
        longitude: body.geo?.longitude,
        device_type: body.device?.type,
        device_model: body.device?.model,
        device_vendor: body.device?.vendor,
        os_name: body.os?.name,
        os_version: body.os?.version,
        browser_name: body.browser?.name,
        browser_version: body.browser?.version,
        screen_width: body.screenWidth,
        screen_height: body.screenHeight,
        color_depth: body.colorDepth,
        language: body.language,
        platform: body.platform,
        device_memory: body.deviceMemory,
        hardware_concurrency: body.hardwareConcurrency,
        referrer: body.referrer,
        page: body.page,
        user_agent: body.userAgent,
        fcp: body.fcp,
        lcp: body.lcp,
      });

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
