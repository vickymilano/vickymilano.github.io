interface Props {
  number: string
  title: string
  description: string
}

const Card: React.FC<Props> = ({ number, title, description }) => {
  return (
    <div className='border border-grey rounded-[8px] bg-white p-[20px] text-grey3 flex-1'>
      <p className='text-small font-medium'>{number}</p>
      <p className='text-medium2 font-medium mt-[40px]'>{title}</p>
      <p className='text-medium mt-[10px]'>{description}</p>
    </div>
  )
}

export default Card
