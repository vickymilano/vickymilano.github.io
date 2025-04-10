import smartInterviews from '../assets/images/smart-interviews.png'
import fingerprintProject from '../assets/images/fingerprint-project.png'
import pixelSparks from '../assets/images/pixel-sparks.png'
import pixelFingerprint from '../assets/images/pixel-fingerprint.png'
import tiendanube from '../assets/images/tiendanube.png'

import arrow from '../assets/icons/arrow-down.svg'

import { Page, Section, Project } from '../components'
import { Header, LetsTalk } from '../containers'
import useLetsTalk from '../hooks/use-lets-talk'
import { useRef } from 'react'

function Homepage() {
  const smartInterviewsRef = useRef<HTMLElement>(null)
  const { letsTalkRef, handleScrollToLetsTalk } = useLetsTalk()

  const handleScrollToFirstProject = () => {
    if (!smartInterviewsRef.current) {
      return
    }

    const offsetTop =
      smartInterviewsRef.current.getBoundingClientRect().top + window.scrollY
    window.scrollTo({ top: offsetTop - 2, behavior: 'smooth' })
  }

  return (
    <Page className='divide-y-2 divide-solid divide-black'>
      <Section className='pb-[74px]'>
        <Header onLetsTalk={handleScrollToLetsTalk} />

        <div className='flex flex-col mt-[60px] 2xl:mt-[136px] font-medium'>
          <p>
            <span className='text-medium text-purple'>Hi!</span> I'm Vicky
            Milano
          </p>
          <h1 className='mt-[40px] lg:mt-[48px] text-large2 xl:text-xxlarge max-w-[910px]'>
            I design digital products that solve real problems
            <span className='text-purple font-mono text-[50px]'>.</span>
          </h1>
          <p className='mt-[24px] text-medium'>[One smart pixel at a time]</p>
        </div>
        <div className='mt-[80px] lg:mt-[165px] flex justify-center'>
          <button
            className='cursor-pointer p-2'
            onClick={handleScrollToFirstProject}
          >
            <img src={arrow} alt='Arrow down' />
          </button>
        </div>
      </Section>
      <Project
        ref={smartInterviewsRef}
        number='01'
        title='Smart interviews'
        subtitle='Designing a new product vertical to analyze candidates interviews using AI.'
        background='purple-light'
        link={`${import.meta.env.BASE_URL}smart-interviews`}
        className='py-[140px]! pb-[120px]! max-w-[100%]'
        mainImage={{
          src: smartInterviews,
          alt: 'Smart interviews',
        }}
        decorations={[
          {
            src: pixelSparks,
            alt: 'Pixel sparks 1',
            className:
              'absolute opacity-35 scale-80 -top-[114px] -right-[18px] ' +
              'md:scale-60 md:-top-[125px] md:-right-0 ' +
              'lg:scale-60 lg:-top-[125px] lg:-right-[30px] ' +
              'xl:scale-80 xl:-top-[125px] xl:-right-[0px] ' +
              '2xl:scale-90 2xl:-top-[120px] 2xl:right-[10px]',
          },
          {
            src: pixelSparks,
            alt: 'Pixel sparks 2',
            className:
              'absolute opacity-35 scale-40 bottom-[-130px] left-[-20px] ',
          },
        ]}
      />
      <Project
        number='02'
        title='Biometric Identification in Prisons'
        subtitle='A web app to help identify and register people in prison using fingerprint data to match with the national database.'
        link={`${import.meta.env.BASE_URL}fingerprint`}
        background='blue'
        mainImage={{
          src: fingerprintProject,
          alt: 'Fingerprint Project',
        }}
        imageClassName='max-h-[550px]'
        decorations={[
          {
            src: pixelFingerprint,
            alt: 'Pixel fingerprint',
            className:
              'absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 scale-150 opacity-30 xl:opacity-100',
          },
        ]}
        className='lg:py-[130px]'
      />
      <Project
        number='03'
        title="Redesigning Tiendanube's Admin"
        subtitle='Redesign UX and UI of Tiendanube administrator, creating a better experience for over 30,000 users.'
        link={`${import.meta.env.BASE_URL}tiendanube`}
        background='grey'
        className='lg:py-[130px]!'
        mainImage={{
          src: tiendanube,
          alt: 'Tiendanube Admin',
        }}
        imageClassName='xl:scale-100'
      />
      <LetsTalk ref={letsTalkRef} />
      <Section
        className='text-center text-small my-[20px] font-medium'
        as='footer'
      >
        [ Done with <span className='text-purple'>&lt;3</span> ]
      </Section>
    </Page>
  )
}

export default Homepage
