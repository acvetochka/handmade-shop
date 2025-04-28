"use client"

import { useTranslation } from 'next-i18next';

export const HeroSection = () => {
      const { t } = useTranslation();
    
      return (
<>
          <h1>{t('home.title')}</h1>
          <p>{t('home.description')}</p>
        </>)
}