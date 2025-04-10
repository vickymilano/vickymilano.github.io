import projectCover from '../assets/images/smart-interviews.png'
import smartInterviewsUnderstanding from '../assets/images/smart-interviews-understanding.png'
import smartInterviewsImage1 from '../assets/images/smart-interviews-01.png'
import smartInterviewsImage2 from '../assets/images/smart-interviews-02.png'
import smartInterviewsImage3 from '../assets/images/smart-interviews-03.png'
import smartInterviewsImage4 from '../assets/images/smart-interviews-04.png'
import pixelSparks from '../assets/images/pixel-sparks.png'

import { Page, Section, ProjectCover, StickyNote } from '../components'
import Box from '../components/Box'
import ReadingSection from '../containers/ReadingSection'
import useLetsTalk from '../hooks/use-lets-talk'
import { LetsTalk } from '../containers'

const designingNotes = [
  'What if AI could create a score in order to quickly make decisions and compare candidates?',
  "How could it help order the recruiter's job? What is the next action they need to do?",
  'What if transcripts were the primary way to navigate a video?',
  'What if recruiters could approve, dismiss, or edit what the AI suggests?',
  "How can we generate trust? What if we made the model's “thinking” visible?",
  'How can we AI help future interviews to make the best out of them?',
]

const keyDesignDecisions = [
  {
    title: 'Make AI reasoning visible',
    description:
      'Add contextual links and visual anchors, like highlighted transcript lines or video snippets so recruiters can verify what the AI is basing its insight on. This helps build trust by making the AI’s “thinking” transparent and auditable.',
  },
  {
    title: 'AI suggests, people decide',
    description:
      'The final decision should always be made by a person. The role of the AI is to suggest, tidy up the information and make it easily readable.',
  },

  {
    title: 'Guide with clear next steps',
    description:
      'We used simple UI patterns (progress bars, call-to-action buttons, candidate queues) to reduce ambiguity and help users stay in flow and easily access what they need to complete.',
  },
  {
    title: 'Design for scale',
    description:
      'Speed, readability, and efficient comparison tools are important when recruiter need to see many candidates on one day and make decisions.',
  },
]

function SmartInterviews() {
  const { letsTalkRef, handleScrollToLetsTalk } = useLetsTalk()

  return (
    <Page className='divide-y-2 divide-solid divide-black'>
      <ProjectCover
        year={2025}
        color='purple-light'
        client='Crosschq'
        title='Smart interviews'
        image={projectCover}
        imageClassName='w-[719px] h-[458px]'
        onLetsTalk={handleScrollToLetsTalk}
      />

      <ReadingSection className='py-[60px] lg:py-[120px]'>
        <h2 className='text-large font-medium mb-[12px]'>Overview</h2>
        <p className='text-medium'>
          At Crosschq, I was asked to explore a new product vertical: an AI
          agent that could help recruiters analyze video interviews more
          effectively and objectively.
        </p>
        <p className='text-medium mt-[20px]'>
          This was not about polishing an existing feature—it was about
          imagining and designing a new product experience from the ground up.
          One that would feel intuitive, helpful, and trustworthy—while also
          handling sensitive human information.
        </p>
        <p className='text-medium mt-[20px]'>
          I led the end-to-end design exploration: from initial concept sketches
          to high-fidelity prototypes that visualized how this tool could work
          across different touchpoints.
        </p>
        <Box color='purple-light/10' className='mt-[29px]'>
          <h3 className='text-medium font-medium'>My role</h3>
          <p className='text-medium mt-[20px]'>
            Led the design exploration for a new product vertical.
            <ul className='ml-[40px]'>
              <li>Mapping out the problem space with stakeholders</li>
              <li>Designing and prototyping the product vision from scratch</li>
              <li>
                Shaping early conversations around trust, transparency, and
                automation
              </li>
            </ul>
          </p>
        </Box>
      </ReadingSection>

      <Section fluid className='py-[60px] lg:py-[120px]'>
        <ReadingSection>
          <h3 className='text-large font-medium mb-[12px]'>Understanding</h3>
          <p className='text-medium mt-[20px]'>
            To begin, I needed to understand the reality of recruiter workflows,
            what they value and what they need to see.
          </p>
        </ReadingSection>

        <Section className='mx-auto my-[60px]'>
          <img
            src={smartInterviewsUnderstanding}
            alt='Understanding Smart Interviews'
          />
        </Section>

        <ReadingSection>
          <p className='text-medium mt-[20px] mb-[10px]'>I learned that:</p>
          <ul className='ml-[40px] flex flex-col gap-[10px]'>
            <li className='text-medium'>
              Recruiters often repeat the same questions and evaluations for
              every candidate in the same job.
            </li>
            <li className='text-medium'>
              Notes are subjective, inconsistent, and difficult to search
            </li>
            <li className='text-medium'>
              Reviewing full interview recordings is time-consuming
            </li>
            <li className='text-medium'>
              Recruiter have to fill long forms giving feedbacks from the
              candidates, and they should focus in green and red flags
            </li>
            <li className='text-medium'>
              All this information is used to decide wether to have one or
              another candidate move to the next step
            </li>
          </ul>
          <p className='text-medium mt-[20px]'>
            With this in mind, we started exploring:
          </p>
          <p className='text-medium font-medium'>
            How might we use AI to help recruiters synthesize interviews more
            efficiently without removing human context or judgment?
          </p>
        </ReadingSection>
      </Section>

      <Section fluid className='py-[120px]'>
        <ReadingSection className='2xl:max-w-[1200px] mx-auto'>
          <div className='mb-[60px]'>
            <h3 className='text-large font-medium mb-[12px]'>Designing</h3>
            <p className='text-medium'>
              With no existing product to work from, I began by generating
              design hypothesis we could explore through prototypes and
              discussion.
            </p>

            <p className='text-medium'>
              I started by sketching out a few ideas for how the product could
              work.
            </p>
          </div>
        </ReadingSection>

        <Section className='block md:hidden'>
          <div className='flex flex-wrap flex-row gap-[20px] 2xl:gap-[60px] my-[60px] justify-center'>
            {designingNotes.map((note, index) => (
              <StickyNote key={index} size='small' color='purple-light'>
                {note}
              </StickyNote>
            ))}
          </div>
        </Section>

        <Section className='hidden md:block'>
          <div className='flex flex-wrap flex-col md:flex-row gap-[20px] 2xl:gap-[60px] my-[60px] justify-center'>
            {designingNotes.map((note, index) => (
              <StickyNote key={index} size='big' color='purple-light'>
                {note}
              </StickyNote>
            ))}
          </div>
        </Section>

        <ReadingSection className='2xl:max-w-[1200px] mx-auto'>
          <p className='text-medium'>
            These hypotheses shaped the structure of the prototype. I focused on
            workflows that gave the recruiter control, while letting the system
            reduce repetitive cognitive load.
          </p>

          <div className='mt-[60px]'>
            <h4 className='text-medium2 font-medium'>Key design decisions:</h4>
            {keyDesignDecisions.map((decision, index) => (
              <div key={index} className='mt-[40px]'>
                <h5 className='text-medium font-medium'>{decision.title}</h5>
                <p className='text-medium'>{decision.description}</p>
              </div>
            ))}
          </div>
        </ReadingSection>
      </Section>

      <div>
        <Section fluid className='relative w-full' background='grey'>
          <div className='absolute z-10 top-0 right-0 2xl:w-[40%] 2xl:h-[1064px] bg-white'></div>
          <div className='absolute z-10 top-0 left-0 2xl:w-[60%] 2xl:h-[1184px] bg-purple-light'></div>
          <img
            src={pixelSparks}
            alt='Pixel sparks'
            className='absolute top-[120px] right-[20%] 2xl:h-[287px] opacity-25 z-20'
          />
          <Section
            fluid
            className='py-[60px] relative z-20'
            style={{ backgroundColor: 'transparent' }}
          >
            <Section style={{ backgroundColor: 'transparent' }}>
              <div className='flex flex-col mb-[20px] lg:mb-0 lg:flex-row justify-start lg:justify-center 2xl:justify-start'>
                <img
                  src={smartInterviewsImage1}
                  alt='Smart Interviews 1'
                  className='max-h-[514px] object-contain'
                />
              </div>
              <div className='flex flex-col gap-[20px] xl:flex-row lg:mt-[20px] mb-[20px] lg:mb-0 lg:justify-center'>
                <img
                  src={smartInterviewsImage3}
                  alt='Smart Interviews 3'
                  className='2xl:mt-[204px] max-h-[439px] object-contain'
                />
                <img
                  src={smartInterviewsImage2}
                  alt='Smart Interviews 2'
                  className='max-h-[351px] object-contain'
                />
              </div>
              <div className='flex justify-center lg:mt-[20px]'>
                <img
                  src={smartInterviewsImage4}
                  alt='Smart Interviews 4'
                  className='max-h-[668px] object-contain'
                />
              </div>
            </Section>
          </Section>
        </Section>

        <ReadingSection className='my-[80px]'>
          <Box color='purple-light/10'>
            <h3 className='text-medium font-medium'>Next steps</h3>
            <p className='text-medium mt-[20px]'>
              The next steps will be start thinking about a MVP, testing this
              concept with real users, understanding where the design works and
              investigating its feasibility. We’re also exploring how this
              patterns could influence other parts of the platform. Even though
              this project has not yet been implemented the act of designing
              became a way to open conversations, align the team, and test
              ideas.
            </p>

            <p className='text-medium mt-[20px]'>
              I learnt that designing with AI is about shaping expectations,
              building trust, and helping people stay in control.
            </p>
          </Box>
        </ReadingSection>
      </div>

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

export default SmartInterviews
