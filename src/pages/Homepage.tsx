import smartInterviews from '../assets/images/smart-interviews.png'
import fingerprintProject from '../assets/images/fingerprint-project.png'
import pixelSparks from '../assets/images/pixel-sparks.png'
import pixelFingerprint from '../assets/images/pixel-fingerprint.png'
import tiendanube from '../assets/images/tiendanube.png'
import cv from '../assets/files/cv.pdf'

import arrow from '../assets/icons/arrow-down.svg'

import { Page, Section, Project } from '../components'
import { Header } from '../containers'

function Homepage() {
  return (
    <Page className='divide-y-2 divide-solid divide-black'>
      <Section className='pb-[74px]'>
        <Header />

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
        <div className='mt-[165px] flex justify-center'>
          <img src={arrow} alt='Arrow down' />
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
        link={`${import.meta.env.BASE_URL}fingerprint`}
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
        className='lg:pt-[130px] lg:pb-[90px]'
        imageClassName='lg:mr-[140px]'
      />
      <Project
        number='03'
        title="Redesigning Tiendanube's Admin"
        subtitle='Redesign UX and UI of Tiendanube administrator, creating a better experience for over 30,000 users.'
        link='#'
        background='grey'
        mainImage={{
          src: tiendanube,
          alt: 'Tiendanube Admin',
        }}
        imageClassName='lg:scale-80 xl:scale-100'
      />
      <Section
        background='purple'
        className='py-[120px]  bg-grid bg-[length:20px_20px]'
      >
        <article className='flex flex-col gap-16 2xl:flex-row justify-between 2xl:items-end text-white'>
          <div className='flex flex-col gap-16 max-w-[670px]'>
            <p className='text-small'>
              I like to design with purpose, not just pretty pixels.
            </p>
            <h3 className='text-xlarge'>Let’s build something that matters.</h3>
          </div>
          <div className='flex flex-col gap-[40px] mr-[90px] text-[24px]'>
            <a href='mailto:vickymilanog@gmail.com' target='_blank'>
              vickymilanog@gmail.com ↗
            </a>
            <a href='https://www.linkedin.com/in/vicky-milano' target='_blank'>
              LinkedIn ↗
            </a>
          </div>
        </article>
      </Section>
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
