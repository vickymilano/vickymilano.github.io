import { BackgroundColor } from '../types/colors'
import { getBackgroundClass } from '../utils/colors'
import { forwardRef } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  fluid?: boolean
  background?: BackgroundColor
  as?: 'section' | 'footer'
  style?: React.CSSProperties
  id?: string
}

const Section = forwardRef<HTMLElement, Props>(
  (
    {
      children,
      className = '',
      fluid = false,
      background = 'white',
      as: Component = 'section',
      style,
      id,
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={`${getBackgroundClass(background)} ${className}`}
        style={style}
        id={id}
      >
        <div className={fluid ? '' : 'max-w-[85%] 2xl:max-w-[1200px] mx-auto'}>
          {children}
        </div>
      </Component>
    )
  }
)

Section.displayName = 'Section'

export default Section
