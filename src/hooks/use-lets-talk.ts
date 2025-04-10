import { useRef } from 'react'

const useLetsTalk = () => {
  const letsTalkRef = useRef<HTMLElement>(null)

  const handleScrollToLetsTalk = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    ev.preventDefault()

    if (!letsTalkRef.current) return

    const offsetTop =
      letsTalkRef.current.getBoundingClientRect().top + window.scrollY
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    })
  }

  return { letsTalkRef, handleScrollToLetsTalk }
}

export default useLetsTalk
