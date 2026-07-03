import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { locales, defaultLocale } from './locales';

const I18nContext = createContext(null);
const STORAGE_KEY = 'rawgraphs.locale';

export function I18nProvider({ children }) {
  const [locale, setLocale] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) || defaultLocale;
    } catch {
      return defaultLocale;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // ignore
    }
  }, [locale]);

  const value = useMemo(() => {
    const dict = locales[locale] || locales[defaultLocale];
    const t = (key, vars) => {
      // 支持 'a.b.c' 路径 + {name} 插值
      const parts = key.split('.');
      let v = dict;
      for (const p of parts) {
        if (v == null) break;
        v = v[p];
      }
      if (typeof v !== 'string') return key;
      if (vars) {
        Object.keys(vars).forEach((k) => {
          v = v.replace(new RegExp('\\{' + k + '\\}', 'g'), vars[k]);
        });
      }
      return v;
    };
    return { locale, setLocale, t };
  }, [locale]);

  return React.createElement(I18nContext.Provider, { value }, children);
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    // 兜底：如果组件不在 Provider 内，返回默认中文
    const dict = locales[defaultLocale];
    const t = (key, vars) => {
      const parts = key.split('.');
      let v = dict;
      for (const p of parts) {
        if (v == null) break;
        v = v[p];
      }
      if (typeof v !== 'string') return key;
      if (vars) {
        Object.keys(vars).forEach((k) => {
          v = v.replace(new RegExp('\\{' + k + '\\}', 'g'), vars[k]);
        });
      }
      return v;
    };
    return { locale: defaultLocale, setLocale: () => {}, t };
  }
  return ctx;
}
