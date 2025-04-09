import { BackgroundColor } from '../types/colors'
import { getBackgroundClass } from '../utils/colors'

import Section from './Section'
import Header from '../containers/Header'

interface Props {
  year: number
  client: string
  title: string
  image: string
  className?: string
  imageClassName?: string
  color?: BackgroundColor
}

const ProjectCover: React.FC<Props> = ({
  year,
  client,
  title,
  image,
  className = '',
  imageClassName = '',
  color = 'white',
}) => {
  return (
    <Section className='relative w-full' background='white'>
      <div
        className={`absolute z-10 top-0 right-0 2xl:w-[56%] 2xl:h-[100%] ${getBackgroundClass(
          color
        )}`}
      ></div>
      <Section
        fluid
        className='relative z-20 pb-[60px]'
        style={{ backgroundColor: 'transparent' }}
      >
        <Section style={{ backgroundColor: 'transparent' }}>
          <Header />

          <article
            className={`flex flex-col lg:flex-row flex-1 justify-between lg:mt-[70px] 2xl:gap-[54px] ${className}`}
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

            <img
              src={image}
              alt={title}
              className={`${imageClassName} 2xl:relative 2xl:right-[-100px]`}
            />
          </article>
        </Section>
      </Section>
    </Section>
  )
}

export default ProjectCover
