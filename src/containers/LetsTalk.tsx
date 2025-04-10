import { Section } from '../components'
import { forwardRef } from 'react'

const LetsTalk = forwardRef<HTMLElement>((_, ref) => {
  return (
    <Section
      ref={ref}
      background='purple'
      className='py-[120px] bg-grid bg-[length:20px_20px]'
      id='lets-talk'
    >
      <article className='flex flex-col gap-16 2xl:flex-row justify-between 2xl:items-end text-white'>
        <div className='flex flex-col gap-16 max-w-[670px]'>
          <p className='text-small'>
            I like to design with purpose, not just pretty pixels.
          </p>
          <h3 className='text-large2'>Let's build something that matters.</h3>
        </div>
        <div className='flex flex-col gap-[40px] mr-[90px] text-[24px]'>
          <a
            className='text-medium lg:text-medium2'
            href='mailto:vickymilanog@gmail.com'
            target='_blank'
          >
            <span className='underline'>vickymilanog@gmail.com</span> ↗
          </a>
          <a
            className='text-medium lg:text-medium2'
            href='https://www.linkedin.com/in/vicky-milano'
            target='_blank'
          >
            <span className='underline'>LinkedIn</span> ↗
          </a>
        </div>
      </article>
    </Section>
  )
})

LetsTalk.displayName = 'LetsTalk'

export default LetsTalk
