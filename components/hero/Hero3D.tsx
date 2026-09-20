"use client";

import { getDeviceTier, type DeviceTier } from "@/lib/device";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useMemo, useRef, useState, type RefObject } from "react";
import * as THREE from "three";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Progress = { value: number };

function readProgress(ref: RefObject<Progress>) {
  return ref.current?.value ?? 0;
}

function GiftBox({
  open,
  ribbon,
}: {
  open: RefObject<Progress>;
  ribbon: RefObject<Progress>;
}) {
  const group = useRef<THREE.Group>(null);
  const lid = useRef<THREE.Group>(null);
  const bow = useRef<THREE.Group>(null);
  const time = useRef(0);

  useFrame((_, delta) => {
    time.current += delta;
    const t = time.current;
    if (group.current) {
      group.current.position.y = Math.sin(t * 0.85) * 0.08;
      group.current.rotation.y = Math.sin(t * 0.28) * 0.12;
    }
    if (lid.current) {
      lid.current.rotation.x = THREE.MathUtils.damp(
        lid.current.rotation.x,
        -readProgress(open) * 1.18,
        4,
        delta,
      );
    }
    if (bow.current) {
      const lift = readProgress(ribbon);
      bow.current.position.y = 0.72 + lift * 0.18;
      bow.current.rotation.z = lift * 0.38;
    }
  });

  return (
    <group ref={group} position={[0, -0.2, 0]} scale={1.15}>
      <mesh castShadow>
        <boxGeometry args={[1.7, 1.15, 1.7]} />
        <meshStandardMaterial color="#d4b896" roughness={0.45} metalness={0.18} />
      </mesh>
      <mesh position={[0, 0.02, 0]}>
        <boxGeometry args={[0.22, 1.18, 1.72]} />
        <meshStandardMaterial color="#E07A5F" roughness={0.4} metalness={0.05} />
      </mesh>
      <mesh position={[0, 0.16, 0]}>
        <boxGeometry args={[1.72, 0.2, 0.22]} />
        <meshStandardMaterial color="#E07A5F" roughness={0.4} metalness={0.05} />
      </mesh>

      <group ref={lid} position={[0, 0.58, -0.85]}>
        <group position={[0, 0.1, 0.85]}>
          <mesh>
            <boxGeometry args={[1.78, 0.24, 1.78]} />
            <meshStandardMaterial color="#c9b08a" roughness={0.4} metalness={0.2} />
          </mesh>
          <mesh>
            <boxGeometry args={[0.22, 0.26, 1.8]} />
            <meshStandardMaterial color="#E07A5F" roughness={0.4} />
          </mesh>
        </group>
      </group>

      <group ref={bow} position={[0, 0.72, 0]}>
        <mesh rotation={[Math.PI / 2, 0, 0.45]} position={[-0.18, 0.08, 0]}>
          <torusGeometry args={[0.18, 0.05, 12, 28]} />
          <meshStandardMaterial color="#E07A5F" roughness={0.35} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, -0.45]} position={[0.18, 0.08, 0]}>
          <torusGeometry args={[0.18, 0.05, 12, 28]} />
          <meshStandardMaterial color="#E07A5F" roughness={0.35} />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#c45c45" roughness={0.3} />
        </mesh>
      </group>
    </group>
  );
}

function Balloon({
  position,
  color,
  scale = 1,
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
}) {
  const ref = useRef<THREE.Group>(null);
  const phase = useMemo(() => Math.random() * Math.PI * 2, []);
  const time = useRef(0);

  useFrame((_, delta) => {
    time.current += delta;
    if (!ref.current) return;
    ref.current.position.y =
      position[1] + Math.sin(time.current * 0.7 + phase) * 0.14;
    ref.current.rotation.z =
      Math.sin(time.current * 0.5 + phase) * 0.07;
  });

  return (
    <group ref={ref} position={position} scale={scale}>
      <mesh>
        <sphereGeometry args={[0.32, 24, 24]} />
        <meshStandardMaterial color={color} roughness={0.28} metalness={0.08} />
      </mesh>
      <mesh position={[0, -0.34, 0]}>
        <coneGeometry args={[0.045, 0.07, 8]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh position={[0, -0.78, 0]}>
        <cylinderGeometry args={[0.008, 0.008, 0.88, 6]} />
        <meshStandardMaterial color="#cbbba6" />
      </mesh>
    </group>
  );
}

function Confetti({
  count,
  open,
}: {
  count: number;
  open: RefObject<Progress>;
}) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const palette = useMemo(
    () =>
      ["#E07A5F", "#C4A574", "#E8B4B8", "#C5B4E3", "#4A7CFF", "#F6F1E8"].map(
        (hex) => new THREE.Color(hex),
      ),
    [],
  );
  const pieces = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        x: (Math.random() - 0.5) * 6,
        y: Math.random() * -1.6,
        z: (Math.random() - 0.5) * 3.4,
        rx: Math.random() * Math.PI,
        ry: Math.random() * Math.PI,
        speed: 0.4 + Math.random() * 0.6,
        spin: 0.5 + Math.random() * 1.1,
        color: palette[Math.floor(Math.random() * palette.length)],
      })),
    [count, palette],
  );

  useEffect(() => {
    const instance = mesh.current;
    if (!instance) return;
    pieces.forEach((piece, index) => instance.setColorAt(index, piece.color));
    if (instance.instanceColor) instance.instanceColor.needsUpdate = true;
  }, [pieces]);

  useFrame((_, delta) => {
    const instance = mesh.current;
    if (!instance) return;
    const lift = readProgress(open);
    pieces.forEach((piece, index) => {
      if (lift > 0.08) {
        piece.y += piece.speed * delta * lift;
        piece.rx += piece.spin * delta;
        if (piece.y > 3.6) piece.y = -1.4;
      }
      dummy.position.set(piece.x, piece.y, piece.z);
      dummy.rotation.set(piece.rx, piece.ry, 0);
      dummy.scale.setScalar(lift > 0.05 ? 1 : 0.0001);
      dummy.updateMatrix();
      instance.setMatrixAt(index, dummy.matrix);
    });
    instance.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <boxGeometry args={[0.06, 0.11, 0.018]} />
      <meshBasicMaterial toneMapped={false} />
    </instancedMesh>
  );
}

function PartyHat({
  position,
  color,
  tilt = 0,
}: {
  position: [number, number, number];
  color: string;
  tilt?: number;
}) {
  const ref = useRef<THREE.Group>(null);
  const time = useRef(0);
  useFrame((_, delta) => {
    time.current += delta;
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(time.current + tilt) * 0.08;
    }
  });
  return (
    <group ref={ref} position={position} rotation={[0.25, tilt, -0.3]}>
      <mesh>
        <coneGeometry args={[0.2, 0.48, 18]} />
        <meshStandardMaterial color={color} roughness={0.48} />
      </mesh>
      <mesh position={[0, -0.22, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.2, 0.035, 8, 20]} />
        <meshStandardMaterial color="#F6F1E8" />
      </mesh>
    </group>
  );
}

function MiniGift({ position }: { position: [number, number, number] }) {
  return (
    <group position={position} rotation={[0.25, 0.7, 0.12]} scale={0.42}>
      <mesh>
        <boxGeometry args={[1, 0.72, 1]} />
        <meshStandardMaterial color="#ead9c0" roughness={0.5} />
      </mesh>
      <mesh>
        <boxGeometry args={[0.18, 0.76, 1.02]} />
        <meshStandardMaterial color="#C4A574" />
      </mesh>
    </group>
  );
}

function Star({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null);
  const time = useRef(0);
  useFrame((_, delta) => {
    time.current += delta;
    if (ref.current) {
      ref.current.rotation.y += delta * 0.6;
      ref.current.position.y = position[1] + Math.sin(time.current * 1.4) * 0.06;
    }
  });
  return (
    <mesh ref={ref} position={position}>
      <octahedronGeometry args={[0.09, 0]} />
      <meshStandardMaterial
        color="#C4A574"
        roughness={0.22}
        metalness={0.4}
        emissive="#C4A574"
        emissiveIntensity={0.25}
      />
    </mesh>
  );
}

function ParallaxRig({ reduced }: { reduced: boolean }) {
  const { camera } = useThree();
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (reduced) return;
    const onMove = (event: PointerEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (event.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduced]);

  useFrame(() => {
    const targetX = reduced ? 0 : pointer.current.x * 0.38;
    const targetY = reduced ? 0.45 : 0.45 + pointer.current.y * -0.18;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.05);
    camera.lookAt(0, 0.1, 0);
  });

  return null;
}

function Scene({
  tier,
  open,
  ribbon,
}: {
  tier: DeviceTier;
  open: RefObject<Progress>;
  ribbon: RefObject<Progress>;
}) {
  const low = tier === "low";
  const rising = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!rising.current) return;
    const amount = readProgress(open);
    rising.current.position.y = amount * 0.6;
  });

  return (
    <>
      <color attach="background" args={["#F1EADF"]} />
      <ambientLight intensity={1.15} color="#fff6ea" />
      <directionalLight
        position={[5, 7, 4]}
        intensity={2.4}
        color="#fff4e6"
      />
      <pointLight position={[-3, 2, 2.4]} intensity={1.1} color="#E07A5F" />
      <pointLight position={[2.6, 1, 3]} intensity={0.7} color="#C5B4E3" />

      <GiftBox open={open} ribbon={ribbon} />

      <Balloon position={[-1.85, 0.95, -0.35]} color="#E07A5F" scale={1.08} />
      <Balloon position={[1.95, 0.62, -0.15]} color="#E8B4B8" scale={0.9} />
      <Balloon position={[-0.3, 1.55, -1.05]} color="#C4A574" scale={0.76} />
      {!low ? (
        <>
          <Balloon position={[1.2, 1.42, -1.25]} color="#C5B4E3" scale={0.64} />
          <Balloon position={[-2.25, 0.2, 0.5]} color="#F6F1E8" scale={0.72} />
          <Balloon position={[2.25, 0.05, 0.28]} color="#4A7CFF" scale={0.5} />
        </>
      ) : null}

      <group ref={rising}>
        <PartyHat position={[-1.25, 0.2, 0.9]} color="#E07A5F" tilt={0.5} />
        {!low ? (
          <PartyHat position={[1.45, 0.12, 0.75]} color="#C4A574" tilt={-0.7} />
        ) : null}
        <MiniGift position={[1.65, -0.32, 0.6]} />
        {!low ? <MiniGift position={[-1.8, -0.4, 0.4]} /> : null}
        <Star position={[-0.95, 1.15, 0.65]} />
        <Star position={[0.85, 1.32, 0.45]} />
        {!low ? <Star position={[0.12, 1.62, -0.15]} /> : null}
      </group>

      <Confetti count={low ? 24 : 56} open={open} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.25, 0]} receiveShadow>
        <circleGeometry args={[4.2, 48]} />
        <meshStandardMaterial color="#e7dccb" roughness={1} />
      </mesh>
    </>
  );
}

export default function Hero3D() {
  const open = useRef<Progress>({ value: 0 });
  const ribbon = useRef<Progress>({ value: 0 });
  const [inView, setInView] = useState(true);
  const [tier, setTier] = useState<DeviceTier>("high");

  useEffect(() => {
    setTier(getDeviceTier());
    const hero = document.getElementById("hero");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.05 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useGSAP(() => {
    gsap.to(ribbon.current, {
      value: 1,
      duration: 1.45,
      delay: 1,
      ease: "elastic.out(1, 0.72)",
    });

    const tween = gsap.to(open.current, {
      value: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "+=65%",
        scrub: 0.7,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <Canvas
      dpr={tier === "low" ? [1, 1] : [1, 1.5]}
      gl={{
        antialias: tier === "high",
        alpha: false,
        powerPreference: "high-performance",
      }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.outputColorSpace = THREE.SRGBColorSpace;
      }}
      camera={{ position: [0, 0.55, 4.4], fov: 38 }}
      frameloop={inView ? "always" : "never"}
      style={{ width: "100%", height: "100%", display: "block" }}
      aria-hidden="true"
    >
      <ParallaxRig reduced={tier === "reduced"} />
      <Scene tier={tier} open={open} ribbon={ribbon} />
    </Canvas>
  );
}
