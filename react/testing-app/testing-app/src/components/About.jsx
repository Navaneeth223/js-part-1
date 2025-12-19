import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const aboutRef = useRef(null)

  useEffect(() => {
    gsap.from(aboutRef.current, {
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%"
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power2.out"
    })
  }, [])

  return (
    <section id="about" ref={aboutRef}>
      <h2>About Me</h2>
      <p>
        I’m a passionate developer with experience in Web,
        Flutter, Game Development, and 3D tools.
      </p>
    </section>
  )
}
