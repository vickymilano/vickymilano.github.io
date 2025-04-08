import { BackgroundColor } from '../types/colors'
import { getBackgroundClass } from '../utils/colors'

interface Props {
  children: React.ReactNode
  className?: string
  fluid?: boolean
  background?: BackgroundColor
  as?: 'section' | 'footer'
  style?: React.CSSProperties
}

const Section: React.FC<Props> = ({
  children,
  className = '',
  fluid = false,
  background = 'white',
  as: Component = 'section',
  style,
}) => {
  return (
    <Component
      className={`${getBackgroundClass(background)} ${className}`}
      style={style}
    >
      <div className={fluid ? '' : 'max-w-[90%] 2xl:max-w-[1200px] mx-auto'}>
        {children}
      </div>
    </Component>
  )
}

export default Section
