import { Canvas, useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';


/* =====================================================
   3D PAINT ROLLER
===================================================== */

function PaintRoller() {

  const rollerRef = useRef();

  useFrame((state) => {

    const time = state.clock.getElapsedTime();

    if (!rollerRef.current) return;

    // Roller rotation
    rollerRef.current.rotation.z = time * 2.2;

    // Floating movement
    rollerRef.current.position.y =
      Math.sin(time * 1.5) * 0.08;

  });


  return (

    <group
      ref={rollerRef}
      rotation={[0.15, 0.25, -0.25]}
    >

      {/* =========================================
          FOAM
      ========================================= */}

      <mesh
        rotation={[0, 0, Math.PI / 2]}
      >

        <cylinderGeometry
          args={[
            0.55,
            0.55,
            1.9,
            64,
          ]}
        />

        <meshStandardMaterial
          color="#eeeeee"
          roughness={0.85}
          metalness={0}
        />

      </mesh>


      {/* Foam inner layer */}

      <mesh
        rotation={[0, 0, Math.PI / 2]}
      >

        <cylinderGeometry
          args={[
            0.48,
            0.48,
            1.94,
            64,
          ]}
        />

        <meshStandardMaterial
          color="#fafafa"
          roughness={1}
        />

      </mesh>


      {/* =========================================
          ORANGE END CAPS
      ========================================= */}

      <mesh
        position={[0, 0, 0.98]}
        rotation={[0, 0, Math.PI / 2]}
      >

        <cylinderGeometry
          args={[
            0.57,
            0.57,
            0.12,
            64,
          ]}
        />

        <meshStandardMaterial
          color="#F5941F"
          roughness={0.4}
          metalness={0.1}
        />

      </mesh>


      <mesh
        position={[0, 0, -0.98]}
        rotation={[0, 0, Math.PI / 2]}
      >

        <cylinderGeometry
          args={[
            0.57,
            0.57,
            0.12,
            64,
          ]}
        />

        <meshStandardMaterial
          color="#F5941F"
          roughness={0.4}
          metalness={0.1}
        />

      </mesh>


      {/* =========================================
          METAL FRAME
      ========================================= */}

      <mesh
        position={[1.05, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
      >

        <cylinderGeometry
          args={[
            0.055,
            0.055,
            0.9,
            24,
          ]}
        />

        <meshStandardMaterial
          color="#b8bec8"
          metalness={0.9}
          roughness={0.2}
        />

      </mesh>


      {/* Frame connector */}

      <mesh
        position={[1.05, 0, 0.45]}
        rotation={[0, 0, Math.PI / 2]}
      >

        <torusGeometry
          args={[
            0.13,
            0.04,
            16,
            32,
          ]}
        />

        <meshStandardMaterial
          color="#b8bec8"
          metalness={0.9}
          roughness={0.2}
        />

      </mesh>


      {/* =========================================
          ORANGE HANDLE
      ========================================= */}

      <mesh
        position={[1.35, -0.35, 0]}
        rotation={[0, 0, -0.25]}
      >

        <cylinderGeometry
          args={[
            0.12,
            0.12,
            1,
            32,
          ]}
        />

        <meshStandardMaterial
          color="#F5941F"
          roughness={0.35}
          metalness={0.05}
        />

      </mesh>


      {/* =========================================
          DARK GRIP
      ========================================= */}

      <mesh
        position={[1.52, -0.85, 0]}
        rotation={[0, 0, -0.25]}
      >

        <cylinderGeometry
          args={[
            0.16,
            0.13,
            0.55,
            32,
          ]}
        />

        <meshStandardMaterial
          color="#131A2E"
          roughness={0.55}
        />

      </mesh>


      {/* Grip bottom */}

      <mesh
        position={[1.58, -1.12, 0]}
        rotation={[0, 0, -0.25]}
      >

        <sphereGeometry
          args={[
            0.16,
            24,
            24,
          ]}
        />

        <meshStandardMaterial
          color="#131A2E"
          roughness={0.55}
        />

      </mesh>

    </group>

  );
}


/* =====================================================
   ORBITING SYSTEM
===================================================== */

function RollerOrbit() {

  const orbitRef = useRef();

  useFrame((state) => {

    const time = state.clock.getElapsedTime();

    if (!orbitRef.current) return;

    // Main orbit
    orbitRef.current.rotation.z =
      time * 0.35;

    // 3D tilt
    orbitRef.current.rotation.x =
      Math.sin(time * 0.4) * 0.08;

    orbitRef.current.rotation.y =
      Math.cos(time * 0.35) * 0.1;

  });


  return (

    <group ref={orbitRef}>

      <group position={[0, 2.9, 0]}>

        <PaintRoller />

      </group>

    </group>

  );
}


/* =====================================================
   ORBIT RINGS
===================================================== */

function OrbitRings() {

  return (

    <group>

      {/* Orange */}

      <mesh
        rotation={[
          THREE.MathUtils.degToRad(65),
          0,
          THREE.MathUtils.degToRad(12),
        ]}
      >

        <torusGeometry
          args={[
            2.9,
            0.018,
            16,
            160,
          ]}
        />

        <meshBasicMaterial
          color="#F5941F"
          transparent
          opacity={0.7}
        />

      </mesh>


      {/* Magenta */}

      <mesh
        rotation={[
          THREE.MathUtils.degToRad(72),
          THREE.MathUtils.degToRad(12),
          THREE.MathUtils.degToRad(-20),
        ]}
      >

        <torusGeometry
          args={[
            2.55,
            0.015,
            16,
            160,
          ]}
        />

        <meshBasicMaterial
          color="#9B2C8F"
          transparent
          opacity={0.65}
        />

      </mesh>


      {/* Indigo */}

      <mesh
        rotation={[
          THREE.MathUtils.degToRad(58),
          THREE.MathUtils.degToRad(-20),
          THREE.MathUtils.degToRad(25),
        ]}
      >

        <torusGeometry
          args={[
            2.2,
            0.012,
            16,
            160,
          ]}
        />

        <meshBasicMaterial
          color="#2E3A9B"
          transparent
          opacity={0.55}
        />

      </mesh>

    </group>

  );
}


/* =====================================================
   PARTICLES
===================================================== */

function OrbitParticles() {

  const particlesRef = useRef();


  useFrame((state) => {

    const time = state.clock.getElapsedTime();

    if (!particlesRef.current) return;

    particlesRef.current.rotation.z =
      time * 0.18;

  });


  const particles = [

    {
      position: [2.9, 0, 0],
      color: '#F5941F',
      size: 0.06,
    },

    {
      position: [-2.3, 1.2, 0],
      color: '#9B2C8F',
      size: 0.05,
    },

    {
      position: [1.4, -2.2, 0],
      color: '#2E3A9B',
      size: 0.055,
    },

    {
      position: [-1.7, -1.8, 0],
      color: '#F5941F',
      size: 0.04,
    },

  ];


  return (

    <group ref={particlesRef}>

      {particles.map((particle, index) => (

        <mesh
          key={index}
          position={particle.position}
        >

          <sphereGeometry
            args={[
              particle.size,
              16,
              16,
            ]}
          />

          <meshBasicMaterial
            color={particle.color}
          />

        </mesh>

      ))}

    </group>

  );
}


/* =====================================================
   MAIN COMPONENT
===================================================== */

export default function RollerOrbit3D() {

  return (

    <div className="roller-3d">

      <Canvas
        camera={{
          position: [0, 0, 8],
          fov: 42,
        }}

        dpr={[1, 1.5]}

        gl={{
          antialias: true,
          alpha: true,
        }}
      >

        {/* Lighting */}

        <ambientLight
          intensity={1.4}
        />

        <directionalLight
          position={[4, 6, 5]}
          intensity={3}
        />

        <directionalLight
          position={[-4, 2, 3]}
          intensity={2}
          color="#9B2C8F"
        />

        <pointLight
          position={[0, -3, 4]}
          intensity={2}
          color="#F5941F"
        />


        {/* Roller */}

        <RollerOrbit />


        {/* Orbit */}

        <OrbitRings />


        {/* Particles */}

        <OrbitParticles />


        {/* Reflections */}

        <Environment preset="studio" />

      </Canvas>

    </div>

  );
}