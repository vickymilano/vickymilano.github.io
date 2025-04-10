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
  onLetsTalk?: (ev: React.MouseEvent<HTMLAnchorElement>) => void
}

const ProjectCover: React.FC<Props> = ({
  year,
  client,
  title,
  image,
  className = '',
  imageClassName = '',
  color = 'white',
  onLetsTalk,
}) => {
  return (
    <Section className='relative w-full overflow-hidden' background='white'>
      <div
        className={`absolute z-10 top-0 right-0
            w-[100%] h-[100%]
           2xl:w-[56%] 2xl:h-[100%] 
          ${getBackgroundClass(color)}`}
      ></div>
      <Section
        fluid
        className='relative z-20 pb-[60px] mx-0 px-0'
        style={{ backgroundColor: 'transparent' }}
      >
        <Section fluid style={{ backgroundColor: 'transparent' }}>
          <Header onLetsTalk={onLetsTalk} />

          <article
            className={`flex flex-col lg:flex-row flex-1 justify-between mt-[40px] lg:mt-[50px] 2xl:gap-[54px] ${className}`}
          >
            <div className='flex flex-col lg:gap-[160px] 2xl:max-w-[454px] mb-[40px] 2xl:mt-[50px]'>
              <div>
                <p className='text-medium'>
                  {year}
                  <br />
                  {client}
                </p>
              </div>
              <h1 className='text-large2 lg:text-xlarge font-medium mt-[48px]'>
                {title}
              </h1>
            </div>

            <img
              src={image}
              alt={title}
              className={`${imageClassName} 2xl:relative 2xl:right-[-100px] object-contain md:max-w-[500px] xl:max-w-[unset]`}
            />
          </article>
        </Section>
      </Section>
    </Section>
  )
}

export default ProjectCover
