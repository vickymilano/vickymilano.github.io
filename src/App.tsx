import smartInterviews from './assets/images/smart-interviews.png'
import fingerprintProject from './assets/images/fingerprint-project.png'
import pixelSparks from './assets/images/pixel-sparks.png'
import pixelFingerprint from './assets/images/pixel-fingerprint.png'
import tiendanube from './assets/images/tiendanube.png'

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
        ]}
      />
      <Project
        number='02'
        title='Biometric Identification in Prisons'
        subtitle='A web app to help identify and register people in prison using fingerprint data to match with the national database.'
        link='#'
        background='blue'
        mainImage={{
          src: fingerprintProject,
          alt: 'Fingerprint Project',
        }}
        decorations={[
          {
            src: pixelFingerprint,
            alt: 'Pixel fingerprint',
            className:
              'absolute bottom-0 right-0 translate-x-1/4 translate-y-1/2',
          },
        ]}
        className='pt-[130px] pb-[90px]'
        imageClassName='mr-[140px]'
      />
      <Project
        number='03'
        title="Redesigning Tiendanube's Admin"
        subtitle='Redesign UX and UI of Tiendanube administrator, creating a better experience for over 30000 users.'
        link='#'
        background='grey'
        mainImage={{
          src: tiendanube,
          alt: 'Tiendanube Admin',
        }}
      />
    </Page>
  )
}

export default App
