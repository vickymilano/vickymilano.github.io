import projectCover from '../assets/images/tiendanube-project-cover.png'
import designingImage3 from '../assets/images/designing-03.png'
import designingImage4 from '../assets/images/designing-04.png'
import designingImage5 from '../assets/images/designing-05.png'
import tiendanubeImplementation from '../assets/images/tiendanube-implementation-01.png'
import tiendanubeImplementation2 from '../assets/images/tiendanube-implementation-02.png'
import tiendanubeImplementation3 from '../assets/images/tiendanube-implementation-03.png'

import { Page, Section, ProjectCover, StickyNote } from '../components'
import Box from '../components/Box'
import Card from '../components/Card'
import ReadingSection from '../containers/ReadingSection'
import useLetsTalk from '../hooks/use-lets-talk'
import { LetsTalk } from '../containers'

function Fingerprint() {
  const { letsTalkRef, handleScrollToLetsTalk } = useLetsTalk()

  return (
    <Page className='divide-y-2 divide-solid divide-black'>
      <ProjectCover
        year={2019}
        color='grey'
        client='Tiendanube'
        title='Redesigning Tiendanube’s Admin'
        image={projectCover}
        imageClassName='2xl:max-h-[500px]'
        onLetsTalk={handleScrollToLetsTalk}
      />

      <ReadingSection className='py-[60px] lg:py-[120px]'>
        <h2 className='text-large font-medium mb-[12px]'>Overview</h2>
        <p className='text-medium'>
          In 2020, I led the redesign of Tiendanube s admin experience. The
          admin panel was used every day by tens of thousands of store owners to
          manage their products, orders, payments, and more. Over time, the
          platform grew in complexity and with that, the experience started to
          feel cluttered, inconsistent, and hard to navigate.
        </p>
        <p className='text-medium mt-[20px]'>
          The goal of this project was to rethink the admin’s structure and user
          experience. Not by adding more features, but by making it easier to
          understand, simpler to use, and aligned with how people actually work.
        </p>
        <Box color='grey/25' className='mt-[29px]'>
          <h3 className='text-medium font-medium'>My role</h3>
          <div className='text-medium mt-[20px]'>
            Led the UX and UI design from discovery to implementation:
            <ul className='mt-[10px] ml-[40px] flex flex-col gap-[10px]'>
              <li>Conducted user interviews and research</li>
              <li>Defined the new product architecture</li>
              <li>Designed and tested low-to-high fidelity prototypes</li>
              <li>Implemented most of the frontend code</li>
              <li>Supported rollout and feedback loops</li>
            </ul>
          </div>
        </Box>
      </ReadingSection>

      <Section fluid className='py-[60px] lg:py-[120px]'>
        <ReadingSection>
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
        </ReadingSection>

        <Section>
          <div className='flex flex-col md:flex-row md:flex-wrap gap-[20px] mt-[40px] lg:mt-[60px]'>
            <Card
              number='01.'
              title='User interviews'
              description="I interviewed users who used the platform daily. They often couldn't"
              className='md:w-[calc(50%-20px)] xl:w-[unset] xl:flex-1'
            />
            <Card
              number='02.'
              title='Card-sorting'
              description='Conducted card-sorting excercises with over 30 users to rethink the product architecture'
              className='md:w-[calc(50%-20px)] xl:w-[unset] xl:flex-1'
            />
            <Card
              number='03.'
              title='Data analysis'
              description='Gathered and analyzes data to understand how the users used the platform.'
              className='md:w-[calc(50%-20px)] xl:w-[unset] xl:flex-1'
            />
            <Card
              number='04.'
              title='User interviews'
              description='Interviews with main stakeholders to understand business decisions and the vision of the product.'
              className='md:w-[calc(50%-20px)] xl:w-[unset] xl:flex-1'
            />
          </div>
        </Section>

        <ReadingSection className='mt-[60px]'>
          <p className='text-medium'>
            With all that information in mind, the following patterns helped me
            to drive the next steps.
          </p>
        </ReadingSection>

        <div className='flex flex-col md:flex-row items-center justify-center 2xl:w-[930px] gap-[40px] md:gap-[20px] mx-auto mt-[60px]'>
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

      <Section fluid className='py-[60px] lg:py-[120px]'>
        <ReadingSection>
          <h3 className='text-large font-medium'>Designing</h3>
        </ReadingSection>
        <Box color='white' className='flex justify-center'>
          <img src={designingImage3} alt='Designing Tiendanube' />
        </Box>
        <ReadingSection className='lg:mt-[60px]'>
          <h4 className='text-medium2 font-medium mb-[20px]'>
            Reframing the structure around user actions:
          </h4>
          <p className='text-medium'>
            The most important design decision in this project wasn’t visual, it
            was conceptual. Instead of organizing the admin based on internal
            teams or feature categories, we restructured it around what users
            actually come to do. We grouped functionality under verbs. This were
            carefully chosen looking for clear, purposeful actions like:
          </p>
          <ul className='ml-[40px]'>
            <li className='text-medium'>
              Administrar (Manage): orders, inventory, clients
            </li>
            <li className='text-medium'>
              Potenciar (Grow): integrations, selling channels
            </li>
            <li className='text-medium'>
              Personalizar (Customize): themes, layout
            </li>
            <li className='text-medium'>
              Configurar (Configure): shipping, payments, legal
            </li>
          </ul>
          <p className='text-medium mt-[20px]'>
            This shift simplified the mental model. It helped users find what
            they were looking for by matching the main action they wanted to
            achieve. It also invited users to investigate more features within
            that section if that was the purposeful action they were interested
            in.
          </p>
        </ReadingSection>

        <Section fluid className='mt-[60px]'>
          <img
            className='w-full'
            src={designingImage4}
            alt='Designing Tiendanube 2'
          />
        </Section>
      </Section>

      <Section fluid className='py-[60px] lg:py-[120px]'>
        <ReadingSection>
          <h3 className='text-large font-medium mb-[40px]'>Wireframing</h3>
          <p className='text-medium'>
            Once we had the new architecture, I created prototypes to explore
            different layout ideas and test the flow. We tested the flows with
            existing users via InVision and Maze, iterating on the feedback
            before starting to develop it.
          </p>
        </ReadingSection>
        <img
          src={designingImage5}
          alt='Wireframing Tiendanube'
          className='w-[85%] mx-auto'
        />
      </Section>

      <Section fluid className='py-[60px] lg:py-[120px]'>
        <ReadingSection className='mt-[60px]'>
          <h3 className='text-large font-medium mb-[40px]'>Implementation</h3>
          <p className='text-medium'>
            We decided on an MVP to be able to have the first launch in less
            than 6 weeks. We focused first on high-impact sections: orders,
            products, and store configuration.
          </p>
          <p className='text-medium mt-[40px]'>
            The new admin was launched gradually, starting with a small segment
            of users. The team tracked behavior, collected feedback, and made
            adjustments before scaling it to everyone. Over time, the full admin
            migrated to the new structure.
          </p>
        </ReadingSection>
        <div className='flex flex-col gap-[60px]'>
          <img
            src={tiendanubeImplementation}
            alt='Tiendanube implementation'
            className='mx-auto'
          />
          <img
            src={tiendanubeImplementation2}
            alt='Tiendanube implementation'
            className='w-full'
          />
          <img
            src={tiendanubeImplementation3}
            alt='Tiendanube implementation'
            className='w-[83%] mx-auto'
          />
        </div>
      </Section>

      <LetsTalk ref={letsTalkRef} />

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
