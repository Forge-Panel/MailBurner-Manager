import {useTheme} from "vuetify";


export default function useLogo() {
  const theme = useTheme();

  const logoUrl = computed(() => {
    if (theme.name.value === 'dark') {
      return '/logo/forge_dark.svg'
    } else {
      return '/logo/forge_light.svg'
    }
  })

  return { logoUrl }
}