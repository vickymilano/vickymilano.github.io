import projectCover from '../assets/images/fingerprint-project-cover.png'
import designingImage1 from '../assets/images/designing-01.png'
import designingImage2 from '../assets/images/designing-02.png'

import { Page, Section, ProjectCover, StickyNote } from '../components'
import Box from '../components/Box'
import ReadingSection from '../containers/ReadingSection'

function Fingerprint() {
  return (
    <Page className='divide-y-2 divide-solid divide-black'>
      <ProjectCover
        year={2024}
        color='blue'
        client='Government of Buenos Aires'
        title='Biometric Identification in Prisons'
        image={projectCover}
        imageClassName='2xl:relative 2xl:right-[-120px] 2xl:max-h-[554px]'
      />

      <ReadingSection className='py-[60px] lg:py-[120px]'>
        <h2 className='text-large font-medium mb-[12px]'>Overview</h2>
        <p className='text-medium'>
          In many prisons across Buenos Aires Province,{' '}
          <span className='font-semibold'>
            record-keeping is fragile and often unreliable
          </span>
          . Some people are registered under different names, others appear in
          the system without a clear record of where they are. This lack of
          reliable identity data affects everything from legal processes to
          basic human rights. To address this, the government is planning a
          census of biometric data (fingerprints) in order to create a unique
          record for every person in custody.
        </p>
        <p className='text-medium mt-[29px]'>
          This project required thinking not only a usable interface, but an
          experience that accounted for{' '}
          <span className='font-semibold'>
            social sensitivity, biometric data limitations, and real-world
            hardware constraints.
          </span>
        </p>
        <Box color='blue/10' className='mt-[29px]'>
          <h3 className='text-medium font-medium'>My role</h3>
          <div className='text-medium mt-[20px]'>
            Led the UX design from end to end. This included:
            <ul className='ml-[40px] flex flex-col gap-[10px] mt-[10px]'>
              <li>
                Conducting contextual interviews with people who currently or
                formerly worked in prisons Mapping out technical constraints.
              </li>
              <li>
                Proposing solutions across both digital and physical
                touchpoints.
              </li>
              <li>
                Collaborating closely with the PM and stakeholders to shape
                product decisions.
              </li>
            </ul>
          </div>
        </Box>
      </ReadingSection>

      <Section fluid className='py-[60px] lg:py-[120px]'>
        <ReadingSection>
          <h3 className='text-large font-medium mb-[12px]'>Understanding</h3>
          <p className='text-medium'>
            Before starting to design, I talked with people who work (or used to
            work) in the prison system to better understand the context. This
            research provided me with relevant information to later on include
            in the designs.
          </p>
        </ReadingSection>

        <div className='max-w-[85%] 2xl:max-w-[1200px] mx-auto flex flex-col lg:flex-row lg:flex-wrap xl:flex-nowrap justify-between items-start'>
          <Box
            color='blue/10'
            className='mt-[29px] w-full 2xl:w-[387px] px-[23px] pb-[80px] g'
          >
            <h4 className='text-medium2 font-medium'>The inmates</h4>
            <div className='relative flex mt-[14px]'>
              <StickyNote
                size='small'
                color='blue'
                className='relative top-[14px] left-[32px] md:left-[50px] lg:left-[120px] xl:top-[14px] xl:left-[12px]'
              >
                Fingerprints aren’t always usable
              </StickyNote>
              <StickyNote
                size='small'
                color='blue'
                className='absolute right-[15px] sm:right-[92px] md:right-[160px] lg:right-[260px] xl:-right-[0px]'
              >
                A lot of people have worn-out prints.
              </StickyNote>
            </div>
            <div className='relative flex justify-between mt-[32px]'>
              <StickyNote
                size='small'
                color='blue'
                className='relative top-[32px] left-[32px] sm:left-[120px] md:left-[170px] lg:left-[240px] xl:top-[32px] xl:left-[18px]'
              >
                Simple questions—like asking which fingers are missing—could
                create discomfort or shame.Fingerprints aren’t always usable
              </StickyNote>
              <StickyNote
                size='small'
                color='blue'
                className='relative md:right-[90px] lg:right-[160px] xl:right-[unset]'
              >
                Some people have missing fingers and hands.
              </StickyNote>
            </div>
          </Box>
          <Box
            color='blue/10'
            className='mt-[29px] w-full 2xl:w-[387px] px-[23px] pb-[100px]'
          >
            <h4 className='text-medium2 font-medium mb-[40px]'>The context</h4>
            <div className='relative flex justify-between mt-[14px]'>
              <StickyNote
                size='small'
                color='blue'
                className='relative md:left-[120px] lg:left-[260px] xl:left-[unset]'
              >
                The census will be conducted manually
              </StickyNote>
              <StickyNote
                size='small'
                color='blue'
                className='relative top-[23px] right-[22px] sm:right-[120px] lg:right-[180px] xl:top-[23px] xl:right-[22px]'
              >
                Operators are not very tech savy.
              </StickyNote>
            </div>
            <div className='relative flex justify-between -top-[13px]'>
              <StickyNote
                size='small'
                color='blue'
                className='relative top-[32px] left-[12px] sm:left-[60px] lg:left-[120px] xl:top-[32px] xl:left-[12px]'
              >
                Each person sits down in front of a computer operator to go
                through the fingerprinting and data collection.
              </StickyNote>
              <StickyNote
                size='small'
                color='blue'
                className='relative top-[53px] right-[22px] sm:right-[90px] md:right-[220px] lg:right-[120px] lg:top-[120px] xl:top-[53px] xl:right-[22px]'
              >
                Because they are sitting in front of each other it could be
                confusing identifying "left" vs. "right" hands.
              </StickyNote>
            </div>
            <div className='relative flex justify-between top-[38px]'>
              <StickyNote
                size='small'
                color='blue'
                className='relative left-[40px] top-[20px] sm:left-[150px] md:left-[230px] lg:left-[320px] xl:left-[12px]'
              >
                It is common for facilities to suddenly have light outings.
              </StickyNote>
            </div>
          </Box>
          <Box
            color='blue/10'
            className='mt-[29px] w-full 2xl:w-[387px] px-[23px] pb-[120px]'
          >
            <h4 className='text-medium2 font-medium mb-[40px]'>The hardware</h4>
            <div className='relative flex justify-between mt-[14px]'>
              <StickyNote
                size='small'
                color='blue'
                className='relative left-[12px] sm:left-[49px] md:left-[120px] lg:left-[220px] xl:left-[16px]'
              >
                The scanner is not very reliable.
              </StickyNote>
              <StickyNote
                size='small'
                color='blue'
                className='relative top-[37px] right-[15px] sm:right-[80px] md:right-[140px] lg:right-[220px] xl:top-[37px] xl:right-[15px]'
              >
                A "high" score doesn’t guarantee a usable match against the
                national database.
              </StickyNote>
            </div>
            <div className='relative flex justify-between'>
              <StickyNote
                size='small'
                color='blue'
                className='relative top-[32px] left-[10px] md:left-[60px] lg:left-[120px] xl:top-[32px] xl:left-[10px]'
              >
                We can not have a "live feedback” to understand if it has
                matched correctly with the database.
              </StickyNote>
              <StickyNote
                size='small'
                color='blue'
                className='relative top-[80px] right-[2px] sm:right-[120px] md:right-[220px] lg:right-[280px] xl:top-[80px] xl:right-[2px]'
              >
                The scanner provides a quality score (0 to 100), but it doesn't
                tell you what is wrong.
              </StickyNote>
            </div>
          </Box>
        </div>
      </Section>

      <Section fluid className='py-[60px] lg:py-[120px]'>
        <ReadingSection>
          <h3 className='text-large font-medium mb-[60px]'>Designing</h3>
        </ReadingSection>
        <Box color='grey2' className='flex justify-center'>
          <img
            src={designingImage1}
            alt='Designing'
            className='object-contain max-h-[610px]'
          />
        </Box>
        <ReadingSection className='mt-[60px]'>
          <h4 className='text-medium2 font-medium'>Key design decisions:</h4>
          <h5 className='text-medium font-medium mt-[40px]'>Physical mat</h5>
          <p className='text-medium'>
            Asking someone which fingers they still have, or whether it’s their
            left or right hand, can lead to confusion—or worse, discomfort. Also
            talking about index finger, thumb, small finger, can be confusing.
          </p>
          <p className='text-medium mt-[20px]'>
            So instead of relying on verbal input, I decided to have a printed
            hand mat: a numbered guide from 1 to 10 where people can simply
            place their hands. This helps the operator visually confirm which
            fingers are missing, and avoids awkward or unclear questions.
          </p>
          <h5 className='text-medium font-medium mt-[40px]'>
            A focused, linear flow for operators
          </h5>
          <p className='text-medium'>
            The person doing the census needs to manage multiple pieces of
            information under pressure. I designed a focused, step-by-step UI to
            make the process easier and less error-prone:
          </p>
          <ul className='ml-[40px]'>
            <li className='text-medium'>A checklist for scanned fingers</li>
            <li className='text-medium'>A way to re-scan when necessary</li>
            <li className='text-medium'>
              A clean interface for recording demographic and legal data
            </li>
            <li className='text-medium'>
              A visual overview of what’s been completed and what’s pending
            </li>
          </ul>
          <h5 className='text-medium font-medium mt-[40px]'>
            Always take 3 scans, no matter what
          </h5>
          <p className='text-medium'>
            To improve accuracy and ensure we capture usable data, we decided to
            scan each available finger three times, regardless of the scanner’s
            score.
          </p>
          <h5 className='text-medium font-medium mt-[40px]'>
            Save instances per take
          </h5>
          <p className='text-medium'>
            Common light outtings could mean lossing a lot of information so it
            will be important to save each time a finger si scanned.
          </p>
        </ReadingSection>
      </Section>

      <Section fluid className='pb-[120px]'>
        <div
          className='flex w-full justify-center'
          style={{
            background:
              'linear-gradient(90deg, rgba(162,206,240,1) 0%, rgba(162,206,240,1) 50%, rgba(255,255,255,1) 52%, rgba(255,255,255,1) 100%)',
          }}
        >
          <img src={designingImage2} alt='Designing Example' />
        </div>
        <ReadingSection className='flex justify-center mt-[74px]'>
          <Box color='blue/10'>
            <h4 className='text-medium font-medium'>Pilot & next steps</h4>
            <p className='text-medium'>
              The tool is currently being piloted in one prison. After feedback
              and iteration, it will scale to all units across Buenos Aires
              Province.
            </p>
          </Box>
        </ReadingSection>
      </Section>

      <Section
        className='text-center text-small my-[20px] font-medium'
        as='footer'
      >
        <button
          className='cursor-pointer'
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }
        >
          ↑ Back to Top
        </button>
      </Section>
    </Page>
  )
}

export default Fingerprint
