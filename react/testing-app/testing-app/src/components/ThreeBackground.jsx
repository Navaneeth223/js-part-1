import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function ThreeBackground() {
  const mountRef = useRef(null)

  useEffect(() => {
    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 3

    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    mountRef.current.appendChild(renderer.domElement)

    const geometry = new THREE.SphereGeometry(1, 64, 64)
    const material = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      roughness: 0.2,
      metalness: 0.6
    })

    const sphere = new THREE.Mesh(geometry, material)
    scene.add(sphere)

    const light = new THREE.PointLight(0xffffff, 1)
    light.position.set(5, 5, 5)
    scene.add(light)

    const animate = () => {
      sphere.rotation.y += 0.003
      sphere.rotation.x += 0.002
      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      mountRef.current.removeChild(renderer.domElement)
    }
  }, [])

  return <div className="three-bg" ref={mountRef}></div>
}
