import { useState, useEffect } from 'react';

export type CookieConsentStatus = 'accepted' | 'declined' | null;

export const useCookieConsent = () => {
  const [consentStatus, setConsentStatus] = useState<CookieConsentStatus>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verificar o status do consentimento no localStorage
    const savedConsent = localStorage.getItem('cookieConsent') as CookieConsentStatus;
    setConsentStatus(savedConsent);
    setIsLoading(false);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setConsentStatus('accepted');
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setConsentStatus('declined');
  };

  const resetConsent = () => {
    localStorage.removeItem('cookieConsent');
    setConsentStatus(null);
  };

  return {
    consentStatus,
    isLoading,
    acceptCookies,
    declineCookies,
    resetConsent,
    hasConsented: consentStatus !== null,
    hasAccepted: consentStatus === 'accepted',
    hasDeclined: consentStatus === 'declined',
  };
};