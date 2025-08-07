"use client";

import Script from "next/script";

export const GoogleAnalytics = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-V40R7HLCJM"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-V40R7HLCJM');
        `}
      </Script>
    </>
  );
};
