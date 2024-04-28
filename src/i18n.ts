import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Charger les fichiers de traduction
import translationEN from "../locales/en.json";
import translationFR from "../locales/fr.json";

i18n
  .use(initReactI18next) // Utilisez react-i18next
  .init({
    resources: {
      en: {
        translation: translationEN, // Fichiers de traduction pour l'anglais
      },
      fr: {
        translation: translationFR, // Fichiers de traduction pour le français
      },
    },
    fallbackLng: "en", // Langue par défaut si la traduction n'est pas disponible
    debug: true, // Activez le mode de débogage pour voir les logs
    interpolation: {
      escapeValue: false, // Ne pas échapper les valeurs HTML dans les traductions
    },
  });

export default i18n;
