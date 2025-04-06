interface Props {
  children: React.ReactNode
  className?: string
  fluid?: boolean
}

const Section: React.FC<Props> = ({
  children,
  className = '',
  fluid = false,
}) => {
  return (
    <section
      className={`w-full ${fluid ? '' : 'max-w-page mx-auto'} ${className}`}
    >
      {children}
    </section>
  )
}

export default Section
