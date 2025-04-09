import cv from '../assets/files/cv.pdf'

const Header: React.FC = () => {
  return (
    <div className='flex justify-between items-center h-[84px] font-medium'>
      <div>
        <a href={import.meta.env.BASE_URL}>VICKY MILANO</a>
      </div>
      <div className='flex gap-8 xl:gap-12'>
        <a href={cv} download='Vicky Milano - CV.pdf'>
          CV
        </a>
        <a href='#'>LET'S TALK</a>
      </div>
    </div>
  )
}

export default Header
