import projectCover from '../assets/images/tiendanube-project-cover.png'
import designingImage1 from '../assets/images/designing-01.png'
import designingImage2 from '../assets/images/designing-02.png'

import { Page, Section, ProjectCover, StickyNote } from '../components'
import Box from '../components/Box'
import { Header } from '../containers'
import Card from '../components/Card'

function Fingerprint() {
  return (
    <Page className='divide-y-2 divide-solid divide-black'>
      <ProjectCover
        preContent={<Header />}
        year={2019}
        color='grey'
        client='Tiendanube'
        title='Redesigning Tiendanube’s Admin'
        image={projectCover}
        imageClassName=''
      />

      <Section className='py-[60px] lg:py-[120px]'>
        <div className='2xl:max-w-[792px] mx-auto'>
          <h2 className='text-large font-medium mb-[12px]'>Overview</h2>
          <p className='text-medium'>
            In 2020, I led the redesign of Tiendanube s admin experience. The
            admin panel was used every day by tens of thousands of store owners
            to manage their products, orders, payments, and more. Over time, the
            platform grew in complexity and with that, the experience started to
            feel cluttered, inconsistent, and hard to navigate.
          </p>
          <p className='text-medium mt-[20px]'>
            The goal of this project was to rethink the admin’s structure and
            user experience. Not by adding more features, but by making it
            easier to understand, simpler to use, and aligned with how people
            actually work.
          </p>
          <Box color='grey/25' className='mt-[29px]'>
            <h3 className='text-medium font-medium'>My role</h3>
            <p className='text-medium mt-[20px]'>
              Led the UX and UI design from discovery to implementation:
              <ul className='list-disc list-inside'>
                <li>Conducted user interviews and research</li>
                <li>Defined the new product architecture</li>
                <li>Designed and tested low-to-high fidelity prototypes</li>
                <li>Implemented most of the frontend code</li>
                <li>Supported rollout and feedback loops</li>
              </ul>
            </p>
          </Box>
        </div>
      </Section>

      <Section fluid className='py-[60px] lg:py-[120px]'>
        <div className='2xl:max-w-[792px] mx-auto'>
          <h3 className='text-large font-medium mb-[12px]'>Understanding</h3>
          <p className='text-medium mt-[20px]'>
            I started the redesigning of Tiendanube’s admin panel by deeply
            understanding how the old one was being used.
          </p>
          <p className='text-medium mt-[40px]'>
            I interviewed users who used the platform daily. They often couldn’t
            find what they were looking for, labels didn’t match their
            expectations and features were hard to discover. I followed that up
            with card-sorting exercises, having more than 30 users group
            different sections of the admin into categories that made sense to
            them.
          </p>
          <p className='text-medium mt-[40px]'>
            Lastly, I looked at analytics and internal documentation to get the
            business perspective, what features were critical, how users
            navigated today, and what the product team expected to scale next.
          </p>
        </div>

        <Section>
          <div className='flex flex-1 gap-[20px] mt-[60px]'>
            <Card
              number='01.'
              title='User interviews'
              description="I interviewed users who used the platform daily. They often couldn't"
            />
            <Card
              number='02.'
              title='Card-sorting'
              description='Conducted card-sorting excercises with over 30 users to rethink the product architecture'
            />
            <Card
              number='03.'
              title='Data analysis'
              description='Gathered and analyzes data to understand how the users used the platform.'
            />
            <Card
              number='04.'
              title='User interviews'
              description='Interviews with main stakeholders to understand business decisions and the vision of the product.'
            />
          </div>
        </Section>

        <div className='mt-[60px] 2xl:max-w-[792px] mx-auto'>
          <p className='text-medium'>
            With all that information in mind, the following patterns helped me
            to drive the next steps.
          </p>
        </div>

        <div className='flex 2xl:w-[930px] gap-[20px] mx-auto mt-[60px]'>
          <StickyNote size='big' color='grey'>
            Users don’t think in terms of features, they think in terms of
            actions.
          </StickyNote>
          <StickyNote size='big' color='grey'>
            The existing navigation mirrored internal team structures, not user
            goals.
          </StickyNote>
          <StickyNote size='big' color='grey'>
            New users in particular struggled to understand what the admin was
            offering.
          </StickyNote>
        </div>
      </Section>

      <Section fluid className='py-[120px]'>
        <Section>
          <h3 className='text-large font-medium mb-[60px]'>Designing</h3>
        </Section>
        <Box color='grey2' className='flex justify-center'>
          <img src={designingImage1} alt='Designing' />
        </Box>
        <Section className='mt-[60px] 2xl:max-w-[792px] mx-auto'>
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
        </Section>
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
        <div className='flex justify-center mt-[74px]'>
          <Box color='grey/25' className='w-[729px]'>
            <h4 className='text-medium font-medium'>Pilot & next steps</h4>
            <p className='text-medium'>
              The tool is currently being piloted in one prison. After feedback
              and iteration, it will scale to all units across Buenos Aires
              Province.
            </p>
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
