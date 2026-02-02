import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

const colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF8C00", "#FFFFFF"]

export default function RubiksCube3D({ mouse }) {
  const group = useRef()

  useFrame(() => {
    if (!mouse.current) return

    // Natural pointer mapping
    group.current.rotation.y = mouse.current.x * 1.2   // Left / Right
    group.current.rotation.x = -mouse.current.y * 1.2  // Up / Down (fixed)
  })

  const cubes = []

  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        cubes.push(
          <mesh key={`${x}${y}${z}`} position={[x, y, z]}>
            <boxGeometry args={[0.9, 0.9, 0.9]} />
            <meshStandardMaterial color={colors[Math.floor(Math.random() * 6)]} />
          </mesh>
        )
      }
    }
  }

  return (
    <group ref={group} scale={1.5}>
      {cubes}
    </group>
  )
}
