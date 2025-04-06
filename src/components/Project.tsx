import { BackgroundColor } from '../types/colors'
import Section from './Section'

interface Decoration {
  src: string
  alt: string
  className: string
}

interface Props {
  title: string
  subtitle: string
  link: string
  mainImage: {
    src: string
    alt: string
  }
  decorations?: Decoration[]
  background?: BackgroundColor
  number?: string
  className?: string
  imageClassName?: string
}

const Project: React.FC<Props> = ({
  title,
  subtitle,
  link,
  mainImage,
  decorations = [],
  background = 'white',
  number = '01',
  className = '',
  imageClassName = '',
}) => {
  return (
    <Section background={background} className='overflow-y-hidden'>
      <article
        className={`flex flex-col lg:flex-row justify-between py-[70px] lg:py-[140px] ${className}`}
      >
        <div className='flex flex-col lg:max-w-[430px] flex-1'>
          <p className='text-small'>{number}.</p>
          <h2 className='text-xlarge font-medium mt-[60px]'>{title}</h2>
          <h3 className='text-medium mt-[12px]'>{subtitle}</h3>
          <a href={link} className='text-xsmall mt-[40px]'>
            SEE MORE →
          </a>
        </div>
        <div className='relative mt-16 lg:mt-0 flex justify-center'>
          <img
            src={mainImage.src}
            alt={mainImage.alt}
            className={`relative z-10 ${imageClassName}`}
          />
          {decorations.map((decoration, index) => (
            <img
              key={index}
              src={decoration.src}
              alt={decoration.alt}
              className={decoration.className}
            />
          ))}
        </div>
      </article>
    </Section>
  )
}

export default Project
