import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      heroRef.current.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out"
      }
    )
  }, [])

  return (
    <section className="hero" ref={heroRef}>
      <h1>Hi, I'm <span>Navaneeth KV</span></h1>
      <p>Full Stack Developer | Flutter | Game Dev</p>
      <a href="#projects" className="btn">View Projects</a>
    </section>
  )
}
