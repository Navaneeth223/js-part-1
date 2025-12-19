import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function Navbar() {
  const navRef = useRef(null)
  const logoRef = useRef(null)
  const linksRef = useRef([])

  useEffect(() => {
    const tl = gsap.timeline()

    tl.from(navRef.current, {
      y: -20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out"
    })
      .from(logoRef.current, {
        y: -10,
        opacity: 0,
        duration: 0.4,
        ease: "power2.out"
      }, "-=0.3")
      .from(linksRef.current, {
        y: -10,
        opacity: 0,
        stagger: 0.1,
        duration: 0.4,
        ease: "power2.out"
      }, "-=0.2")

  }, [])

  return (
    <nav className="nav" ref={navRef}>
      <h2 ref={logoRef}>Navaneeth KV</h2>

      <ul>
        {["About", "Skills", "Projects", "Contact"].map((item, index) => (
          <li
            key={item}
            ref={el => linksRef.current[index] = el}
          >
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
