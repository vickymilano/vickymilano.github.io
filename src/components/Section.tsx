import { BackgroundColor } from '../types/colors'
import { getBackgroundClass } from '../utils/colors'

interface Props {
  children: React.ReactNode
  className?: string
  fluid?: boolean
  background?: BackgroundColor
}

const Section: React.FC<Props> = ({
  children,
  className = '',
  fluid = false,
  background = 'white',
}) => {
  return (
    <section className={`${getBackgroundClass(background)} ${className}`}>
      <div className={fluid ? '' : 'max-w-page mx-auto'}>{children}</div>
    </section>
  )
}

export default Section
