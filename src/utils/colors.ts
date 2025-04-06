import { BackgroundColor } from '../types/colors'

export const getBackgroundClass = (color: BackgroundColor): string => {
  const backgroundClasses: Record<BackgroundColor, string> = {
    white: 'bg-white',
    grey: 'bg-grey',
    purple: 'bg-purple',
    blue: 'bg-blue-light',
    'purple-light': 'bg-purple-light',
  }

  return backgroundClasses[color]
}
