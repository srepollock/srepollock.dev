"use client";

import { useEffect } from 'react';
import { cn } from '@/lib/utils';

type AdSenseProps = {
  className?: string;
  client: string;
  slot: string;
  format?: string;
  responsive?: boolean;
  style?: React.CSSProperties;
};

const AdSense = ({
  className,
  client,
  slot,
  format = 'auto',
  responsive = true,
  style = { display: 'block' },
}: AdSenseProps) => {
  useEffect(() => {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <div className={cn('text-center', className)}>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      ></ins>
    </div>
  );
};

export default AdSense;
