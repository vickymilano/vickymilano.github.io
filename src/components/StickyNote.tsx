import React from 'react'
import { BackgroundColor } from '../types/colors'
import { getBackgroundClass } from '../utils/colors'

interface StickyNoteProps {
  children: string
  size: 'small' | 'big'
  color: BackgroundColor
  className?: string
}

const StickyNote: React.FC<StickyNoteProps> = ({
  children,
  size,
  color,
  className = '',
}) => {
  const dimensions =
    size === 'small' ? 'w-[148px] h-[148px]' : 'w-[270px] h-[270px]'
  const textSize = size === 'small' ? 'text-xsmall' : 'text-medium2'
  const padding = size === 'small' ? 'p-[12px]' : 'p-[22px]'

  return (
    <div
      className={`${dimensions} ${textSize} ${padding} shadow-[0_4px_12px_0_rgba(0,0,0,0.15)] text-left ${getBackgroundClass(
        color
      )} ${className}`}
    >
      {children}
    </div>
  )
}

export default StickyNote
