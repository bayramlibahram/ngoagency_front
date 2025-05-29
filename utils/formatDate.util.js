import { format } from "date-fns";
import { az, enUS, ru } from "date-fns/locale";

const localeMap = {
  az,
  en: enUS,
  ru,
};

/**
 * Formats a date into a localized string.
 *
 * @param {Date|string|number} date - The date to format
 * @param {string} lang - Language code ('az', 'en', 'ru')
 * @param {string} formatString - Optional format pattern
 * @returns {string}
 */

const defaultFormats = {
  az: "d MMMM yyyy, EEEE",
  en: "EEEE, MMMM d, yyyy",
  ru: "d MMMM yyyy, EEEE",
};

export function formatDate(date, lang = "en", formatString = "EEEE, MMMM d, yyyy") {
  const parsedDate = typeof date === "string" || typeof date === "number" ? new Date(date) : date;

  const locale = localeMap[lang] || enUS;
  const resolvedFormat = formatString || defaultFormats[lang] || defaultFormats.en;

  try {
    return format(parsedDate, formatString, { locale });
  } catch (error) {
    console.warn("Date format error:", error);
    return "";
  }
}
