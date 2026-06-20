'use client';

import { useEffect, useState } from 'react';

export function Tracker() {
  const [deviceInfo, setDeviceInfo] = useState<any>(null);

  useEffect(() => {
    const getDeviceInfo = async () => {
      try {
        // اطلاعات از سرور
        const res = await fetch('/api/track');
        const serverData = await res.json();

        // اطلاعات دقیق‌تر از خود دستگاه
        const clientData = {
          screenWidth: window.screen.width,
          screenHeight: window.screen.height,
          colorDepth: window.screen.colorDepth,
          language: navigator.language,
          platform: navigator.platform,
          userAgent: navigator.userAgent,
          deviceMemory: (navigator as any).deviceMemory,
          hardwareConcurrency: navigator.hardwareConcurrency,
          referrer: document.referrer,
          page: window.location.pathname,
          fcp: 0,
          lcp: 0,
          // اطلاعات اضافی
          devicePixelRatio: window.devicePixelRatio,
          touchPoints: (navigator as any).maxTouchPoints,
          vendor: (navigator as any).vendor || '',
          product: (navigator as any).product || '',
          userAgentData: (navigator as any).userAgentData || null,
        };

        // اگر User-Agent Data وجود داره (مرورگرهای جدید)
        if ((navigator as any).userAgentData) {
          const uaData = await (navigator as any).userAgentData.getHighEntropyValues([
            'architecture', 'bitness', 'fullVersionList', 'model', 'platformVersion'
          ]);
          clientData.userAgentData = uaData;
        }

        // ارسال به API
        await fetch('/api/visitor', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...serverData,
            ...clientData,
          }),
        });

        console.log('✅ Visitor tracked successfully');
      } catch (error) {
        console.error('❌ Tracking error:', error);
      }
    };

    if (typeof window !== 'undefined') {
      if (document.readyState === 'complete') {
        getDeviceInfo();
      } else {
        window.addEventListener('load', getDeviceInfo);
        return () => window.removeEventListener('load', getDeviceInfo);
      }
    }
  }, []);

  return null;
}
