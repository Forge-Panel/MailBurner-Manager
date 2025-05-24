import {defineStore} from "pinia"

export const useAccountStore = defineStore('account', () => {
    const currentTheme = useState('accountTheme', () => 'system')
    const availableThemes = computed(() => [
        { title: 'Light', value: 'light' },
        { title: 'Dark', value: 'dark' },
        { title: 'System', value: 'system' },
    ])

    const { locales, setLocale, locale } = useI18n()

    const currentLocale = useState('accountLocale', () => locale.value)

    const availableLocales = computed(() => {
        return locales.value.map((locale) => {
            return {
                title: locale.name,
                value: locale.code,
            }
        })
    })

    return {currentTheme, availableThemes, currentLocale, availableLocales, setLocale}
})