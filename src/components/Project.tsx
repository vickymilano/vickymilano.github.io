import { BackgroundColor } from '../types/colors'
import { getBackgroundClass } from '../utils/colors'

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
}

const Project: React.FC<Props> = ({
  title,
  subtitle,
  link,
  mainImage,
  decorations = [],
  background = 'white',
  number = '01',
}) => {
  return (
    <article
      className={`flex justify-between py-[140px] ${getBackgroundClass(
        background
      )}`}
    >
      <div className='flex flex-col max-w-[430px]'>
        <p className='text-small'>{number}.</p>
        <h2 className='text-xlarge mt-[60px]'>{title}</h2>
        <h3 className='text-medium mt-[12px]'>{subtitle}</h3>
        <a href={link} className='text-xsmall mt-[40px]'>
          See more →
        </a>
      </div>
      <div className='relative'>
        <img
          src={mainImage.src}
          alt={mainImage.alt}
          className='relative z-10'
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
  )
}

export default Project
