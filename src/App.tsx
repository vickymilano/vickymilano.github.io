import smartInterviews from './assets/images/smart-interviews.png'
import pixelSparks from './assets/images/pixel-sparks.png'

import { Page, Section, Project } from './components'

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
          <p className='mt-[48px] text-xxlarge max-w-[910px]'>
            I design digital products that solve real problems
            <span className='text-purple font-mono text-[50px]'>.</span>
          </p>
          <p className='mt-[24px] text-medium'>[One smart pixel at a time]</p>
        </div>
      </Section>
      <Project
        number='01'
        title='Smart interviews'
        subtitle='Designing a new product vertical to analyze candidates interviews using AI.'
        background='purple-light'
        link='#'
        mainImage={{
          src: smartInterviews,
          alt: 'Smart interviews',
        }}
        decorations={[
          {
            src: pixelSparks,
            alt: 'Pixel sparks',
            className: 'absolute top-0 right-0 -translate-y-1/2',
          },
          {
            src: pixelSparks,
            alt: 'Pixel sparks',
            className:
              'absolute bottom-0 left-0 scale-[57%] translate-y-[124px]',
          },
        ]}
      />
    </Page>
  )
}

export default App
