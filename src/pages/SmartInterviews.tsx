import projectCover from '../assets/images/smart-interviews.png'
import smartInterviewsUnderstanding from '../assets/images/smart-interviews-understanding.png'
import smartInterviewsImage1 from '../assets/images/smart-interviews-01.png'
import smartInterviewsImage2 from '../assets/images/smart-interviews-02.png'
import smartInterviewsImage3 from '../assets/images/smart-interviews-03.png'
import smartInterviewsImage4 from '../assets/images/smart-interviews-04.png'

import { Page, Section, ProjectCover, StickyNote } from '../components'
import Box from '../components/Box'
import { Header } from '../containers'

const designingNotes = [
  'What if AI could create a score in order to quickly make decisions and compare candidates?',
  "How could it help order the recruiter's job? What is the next action they need to do?",
  'What if AI could summarize strengths, and risks?',
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
  return (
    <Page className='divide-y-2 divide-solid divide-black'>
      <ProjectCover
        preContent={<Header />}
        year={2025}
        color='purple-light'
        client='Crosschq'
        title='Redesigning Tiendanube’s Admin'
        image={projectCover}
        imageClassName='w-[719px] h-[458px]'
      />

      <Section className='py-[60px] lg:py-[120px]'>
        <div className='2xl:max-w-[792px] mx-auto'>
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
            I led the end-to-end design exploration: from initial concept
            sketches to high-fidelity prototypes that visualized how this tool
            could work across different touchpoints.
          </p>
          <Box color='purple-light/10' className='mt-[29px]'>
            <h3 className='text-medium font-medium'>My role</h3>
            <p className='text-medium mt-[20px]'>
              Led the design exploration for a new product vertical.
              <ul className='ml-[40px]'>
                <li>Mapping out the problem space with stakeholders</li>
                <li>
                  Designing and prototyping the product vision from scratch
                </li>
                <li>
                  Shaping early conversations around trust, transparency, and
                  automation
                </li>
              </ul>
            </p>
          </Box>
        </div>
      </Section>

      <Section fluid className='py-[60px] lg:py-[120px]'>
        <div className='2xl:max-w-[792px] mx-auto'>
          <h3 className='text-large font-medium mb-[12px]'>Understanding</h3>
          <p className='text-medium mt-[20px]'>
            To begin, I needed to understand the reality of recruiter workflows,
            what they value and what they need to see.
          </p>
        </div>

        <div className='2xl:max-w-[1168px] mx-auto my-[60px]'>
          <img
            src={smartInterviewsUnderstanding}
            alt='Understanding Smart Interviews'
          />
        </div>

        <div className='2xl:max-w-[792px] mx-auto'>
          <p className='text-medium mt-[20px]'>I learned that:</p>
          <ul className='ml-[40px]'>
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
        </div>
      </Section>

      <Section fluid className='py-[120px]'>
        <div className='2xl:max-w-[792px] mx-auto'>
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
          <div className='flex flex-wrap 2xl:gap-[60px] my-[60px]'>
            {designingNotes.map((note, index) => (
              <StickyNote key={index} size='small' color='purple-light'>
                {note}
              </StickyNote>
            ))}
          </div>

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
        </div>
      </Section>

      <div>
        <Section className='relative w-full' background='grey'>
          <div className='absolute z-10 top-0 left-0 2xl:w-[1024px] 2xl:h-[1184px] bg-purple-light'></div>
          <Section
            fluid
            className='pt-[120px] relative z-20'
            style={{ backgroundColor: 'transparent' }}
          >
            <Section
              className='pb-[96px]'
              style={{ backgroundColor: 'transparent' }}
            >
              <div className='flex justify-start'>
                <img
                  src={smartInterviewsImage1}
                  alt='Smart Interviews 1'
                  className='max-h-[514px]'
                />
              </div>
              <div className='flex mt-[60px]'>
                <img
                  src={smartInterviewsImage3}
                  alt='Smart Interviews 3'
                  className='2xl:mt-[204px] max-h-[439px]'
                />
                <img
                  src={smartInterviewsImage2}
                  alt='Smart Interviews 2'
                  className='max-h-[351px]'
                />
              </div>
              <div className='flex justify-center mt-[60px]'>
                <img
                  src={smartInterviewsImage4}
                  alt='Smart Interviews 4'
                  className='max-h-[668px]'
                />
              </div>
            </Section>
          </Section>
        </Section>

        <div className='my-[80px]'>
          <div className='2xl:max-w-[792px] mx-auto'>
            <Box color='purple-light/10'>
              <h3 className='text-medium font-medium'>Next steps</h3>
              <p className='text-medium mt-[20px]'>
                The next steps will be start thinking about a MVP, testing this
                concept with real users, understanding where the design works
                and investigating its feasibility. We’re also exploring how this
                patterns could influence other parts of the platform. Even
                though this project has not yet been implemented the act of
                designing became a way to open conversations, align the team,
                and test ideas.
              </p>

              <p className='text-medium mt-[20px]'>
                I learnt that designing with AI is about shaping expectations,
                building trust, and helping people stay in control.
              </p>
            </Box>
          </div>
        </div>
      </div>

      <Section
        className='text-center text-small my-[20px] font-medium'
        as='footer'
      >
        [ Done with <span className='text-purple'>&lt;3</span> ]
      </Section>
    </Page>
  )
}

export default SmartInterviews
