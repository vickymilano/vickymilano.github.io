import { BackgroundColor } from '../types/colors'
import { getBackgroundClass } from '../utils/colors'

import Section from './Section'

interface Props {
  year: number
  client: string
  title: string
  image: string
  className?: string
  imageClassName?: string
  color?: BackgroundColor
  preContent?: React.ReactNode
}

const ProjectCover: React.FC<Props> = ({
  year,
  client,
  title,
  image,
  className = '',
  imageClassName = '',
  color = 'white',
  preContent,
}) => {
  return (
    <Section className='overflow-y-hidden'>
      {preContent}
      <article
        className={`flex flex-col lg:flex-row justify-between lg:mt-[70px] 2xl:gap-[54px] ${className}`}
      >
        <div className='flex flex-col lg:gap-[160px] 2xl:max-w-[454px] mb-[40px] 2xl:mt-[50px]'>
          <div>
            <p className='text-medium'>
              {year}
              <br />
              {client}
            </p>
          </div>
          <h1 className='text-xlarge font-medium'>{title}</h1>
        </div>
        <div className={`flex flex-1 relative ${getBackgroundClass(color)}`}>
          <img src={image} alt={title} className={imageClassName} />
        </div>
      </article>
    </Section>
  )
}

export default ProjectCover
