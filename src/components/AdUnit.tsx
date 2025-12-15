"use client";

import { useEffect, useRef } from "react";

interface AdUnitProps {
    className?: string;
    slotId?: string; // Optional: If you want specific slots later
    format?: "auto" | "fluid" | "rectangle";
    layoutKey?: string; // For In-feed ads
}

const AdUnit = ({ className, slotId, format = "auto", layoutKey }: AdUnitProps) => {
    const adRef = useRef<HTMLModElement>(null);

    useEffect(() => {
        try {
            // @ts-ignore: google-adsense
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
            console.error("AdSense error:", err);
        }
    }, []);

    return (
        <div className={`ad-container overflow-hidden ${className || ""}`}>
            <ins
                className="adsbygoogle block"
                style={{ display: "block" }}
                data-ad-client="ca-pub-3606235083263616"
                data-ad-slot={slotId || "1234567890"} // Replace with actual slot ID if you have one, otherwise Auto Ads might handle it or use a generic one
                data-ad-format={format}
                data-full-width-responsive="true"
                data-ad-layout-key={layoutKey}
            />
        </div>
    );
};

export default AdUnit;
