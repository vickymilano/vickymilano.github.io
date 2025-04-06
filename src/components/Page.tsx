import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Page: React.FC<Props> = ({ children }) => {
  return <div className='w-full'>{children}</div>
}

export default Page
