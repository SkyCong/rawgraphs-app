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
    // chartLabels 只在 zh-CN 块维护；其他语言（如 en-US）也复用这一份做兜底
    const chartLabels = dict.chartLabels || locales[defaultLocale].chartLabels || {};
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
    // tl: 翻译任意英文文本（图表名/描述/分类/选项label）
    // 查 chartLabels 映射表，查不到返回原文；英文语言下直接返回原文
    const tl = (text) => {
      if (!text || typeof text !== 'string') return text;
      if (locale === 'en-US') return text;
      const hit = chartLabels[text];
      if (hit == null && process.env.NODE_ENV !== 'production') {
        // 开发环境报警：方便发现「翻译表位置错 / 漏翻译」
        // eslint-disable-next-line no-console
        console.warn('[i18n] tl: missing chart label for:', text);
      }
      return hit != null ? hit : text;
    };
    return { locale, setLocale, t, tl };
  }, [locale]);

  return React.createElement(I18nContext.Provider, { value }, children);
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    // 兜底：如果组件不在 Provider 内，返回默认中文
    const dict = locales[defaultLocale];
    const chartLabels = dict.chartLabels || {};
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
    const tl = (text) => {
      if (!text || typeof text !== 'string') return text;
      const hit = chartLabels[text];
      if (hit == null && process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.warn('[i18n] tl: missing chart label for:', text);
      }
      return hit != null ? hit : text;
    };
    return { locale: defaultLocale, setLocale: () => {}, t, tl };
  }
  return ctx;
}
