import { Page, Section } from './components'

function App() {
  return (
    <Page>
      <Section>
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
          <p>
            <span className='text-medium text-purple'>Hi!</span> I'm Vicky
            Milano
          </p>
          <p className='mt-[48px] text-xxlarge'>
            I design digital products that solve real problems
            <span className='text-purple'>.</span>
          </p>
          <p className='mt-[24px] text-medium'>[One smart pixel at a time]</p>
        </div>
      </Section>
    </Page>
  )
}

export default App
