// src/lib/i18n.js
import { register, init, getLocaleFromNavigator, locale, isLoading } from 'svelte-i18n';
import { browser } from '$app/environment';

// Register translations
register('en', () => import('./translations/en.json'));
register('sv', () => import('./translations/sv.json'));

// Initialize the i18n system
init({
  fallbackLocale: 'en',
  initialLocale: browser ? localStorage.getItem('preferredLocale') || getLocaleFromNavigator() : 'en'
});

export { locale, isLoading };
