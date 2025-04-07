import projectCover from '../assets/images/fingerprint-project-cover.png'

import { Page, Section, ProjectCover, StickyNote } from '../components'
import Box from '../components/Box'
import { Header } from '../containers'

function Fingerprint() {
  return (
    <Page className='divide-y-2 divide-solid divide-black'>
      <ProjectCover
        preContent={<Header />}
        year={2024}
        color='blue'
        client='Government of Buenos Aires'
        title='Biometric Identification in Prisons'
        image={projectCover}
        imageClassName=''
      />

      <Section className='py-[60px] lg:py-[120px]'>
        <div className='2xl:max-w-[792px] mx-auto'>
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
            <p className='text-medium mt-[20px]'>
              Led the UX design from end to end. This included:
              <ul className='list-disc list-inside'>
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
            </p>
          </Box>
        </div>
      </Section>

      <Section className='py-[60px] lg:py-[120px]'>
        <div className='2xl:max-w-[792px] mx-auto'>
          <h3 className='text-large font-medium mb-[12px]'>Underestanding</h3>
          <p className='text-medium'>
            Before starting to design, I talked with people who work (or used to
            work) in the prison system to better understand the context. This
            research provided me with relevant information to later on include
            in the designs.
          </p>
        </div>
        <div className='flex flex-col lg:flex-row justify-between'>
          <Box
            color='blue/10'
            className='mt-[29px]  2xl:w-[387px] px-[23px] pb-[80px]'
          >
            <h4 className='text-medium2 font-medium'>The inmates</h4>
            <div className='relative flex mt-[14px]'>
              <StickyNote
                size='small'
                color='blue'
                className='relative top-[14px] left-[32px]'
              >
                Fingerprints aren’t always usable
              </StickyNote>
              <StickyNote
                size='small'
                color='blue'
                className='relative right-[25px]'
              >
                A lot of people have worn-out prints.
              </StickyNote>
            </div>
            <div className='relative flex justify-between mt-[32px]'>
              <StickyNote
                size='small'
                color='blue'
                className='relative top-[32px] left-[32px]'
              >
                Simple questions—like asking which fingers are missing—could
                create discomfort or shame.Fingerprints aren’t always usable
              </StickyNote>
              <StickyNote size='small' color='blue' className='relative'>
                Some people have missing fingers and hands.
              </StickyNote>
            </div>
          </Box>
        </div>
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

export default Fingerprint
