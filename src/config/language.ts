import { createI18n } from "vue-i18n";

export const I18n = createI18n({
    locale: 'zh',
    fallbackLocale: 'en',
    messages: {
        zh: {
            message: {
                hello: '哈喽'
            }
        },
        en: {
            hello: 'Hello'
        }
    }
})