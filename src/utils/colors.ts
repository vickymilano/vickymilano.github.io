import { BackgroundColor } from '../types/colors'

export const getBackgroundClass = (color: BackgroundColor): string => {
  const backgroundClasses: Record<BackgroundColor, string> = {
    white: 'bg-white',
    grey: 'bg-grey',
    purple: 'bg-purple',
    blue: 'bg-blue-light',
    'purple-light': 'bg-purple-light',
    'grey/25': 'bg-grey/25',
    'purple-light/10': 'bg-purple-light/10',
    'blue/10': 'bg-blue-light/10',
    grey2: 'bg-grey2',
  }

  return backgroundClasses[color]
}
