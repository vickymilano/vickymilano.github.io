import { BackgroundColor } from '../types/colors'
import { getBackgroundClass } from '../utils/colors'

interface Props {
  children: React.ReactNode
  color: BackgroundColor
  className?: string
}

const Box: React.FC<Props> = ({ children, color, className = '' }) => {
  return (
    <div
      className={`${getBackgroundClass(
        color
      )} rounded-[8px] p-[40px] ${className}`}
    >
      {children}
    </div>
  )
}

export default Box
