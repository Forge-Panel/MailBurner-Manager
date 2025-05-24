import {useTheme} from "vuetify";


export default function useLogo() {
  const theme = useTheme();

  const logoUrl = computed(() => {
    if (theme.name.value === 'dark') {
      return '/img/logo/forge_dark.svg'
    } else {
      return '/img/forge_light.svg'
    }
  })

  return { logoUrl }
}