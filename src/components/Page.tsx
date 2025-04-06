import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

const Page: React.FC<Props> = ({ children, className = '' }) => {
  return <div className={`w-full ${className}`}>{children}</div>
}

export default Page
