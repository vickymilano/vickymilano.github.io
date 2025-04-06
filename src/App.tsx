import smartInterviews from './assets/images/smart-interviews.png'
import pixelSparks from './assets/images/pixel-sparks.png'

import { Page, Section } from './components'

function App() {
  return (
    <Page>
      <Section className='mb-[72px]'>
        <div className='flex justify-between items-center h-[84px] font-medium'>
          <div>
            <a href='#'>VICKY MILANO</a>
          </div>
          <div className='flex gap-16'>
            <a href='#'>WORK</a>
            <a href='#'>CV</a>
            <a href='#'>LET'S TALK</a>
          </div>
        </div>
        <div className='flex flex-col mt-[136px] font-medium'>
          <h1>
            <span className='text-medium text-purple'>Hi!</span> I'm Vicky
            Milano
          </h1>
          <p className='mt-[48px] text-xxlarge'>
            I design digital products that solve real problems
            <span className='text-purple'>.</span>
          </p>
          <p className='mt-[24px] text-medium'>[One smart pixel at a time]</p>
        </div>
      </Section>
      <Section background='purple-light'>
        <article className='flex justify-between py-[140px]'>
          <div className='flex flex-col max-w-[430px]'>
            <p className='text-small'>01.</p>
            <h2 className='text-xlarge mt-[60px]'>Smart interviews</h2>
            <h3 className='text-medium mt-[12px]'>
              Designing a new product vertical to analyze candidates interviews
              using AI.
            </h3>
            <a href='#' className='text-xsmall mt-[40px]'>
              See more →
            </a>
          </div>
          <div className='relative'>
            <img
              src={smartInterviews}
              alt='Smart interviews'
              className='relative z-10'
            />
            <img
              src={pixelSparks}
              alt='Pixel sparks'
              className='absolute top-0 right-0 -translate-y-1/2'
            />
            <img
              src={pixelSparks}
              alt='Pixel sparks'
              className='absolute bottom-0 left-0 scale-[57%] translate-y-[124px]'
            />
          </div>
        </article>
      </Section>
    </Page>
  )
}

export default App
