"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function LidarScene() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 3.2, 9);

    const deviceMemory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8;
    const isMobile = window.innerWidth < 680;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lowPower = isMobile || deviceMemory <= 4;

    const renderer = new THREE.WebGLRenderer({
      antialias: !lowPower,
      alpha: true,
      powerPreference: lowPower ? "low-power" : "high-performance"
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, lowPower ? 1.2 : 1.75));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const pointCount = prefersReducedMotion ? 260 : lowPower ? 620 : 1100;
    const positions = new Float32Array(pointCount * 3);
    const colors = new Float32Array(pointCount * 3);

    for (let i = 0; i < pointCount; i += 1) {
      const radius = 1.4 + Math.random() * 5.4;
      const angle = Math.random() * Math.PI * 2;
      const lane = Math.floor(Math.random() * 5) - 2;
      const height = Math.sin(angle * 3 + lane) * 0.28 + lane * 0.26;

      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = height;
      positions[i * 3 + 2] = Math.sin(angle) * radius * 0.72;

      colors[i * 3] = 0.18;
      colors[i * 3 + 1] = 0.82 + Math.random() * 0.18;
      colors[i * 3 + 2] = 0.92;
    }

    const pointGeometry = new THREE.BufferGeometry();
    pointGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    pointGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const pointMaterial = new THREE.PointsMaterial({
      size: lowPower ? 0.042 : 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.82
    });
    const points = new THREE.Points(pointGeometry, pointMaterial);
    scene.add(points);

    const trajectory = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-4.4, -1.1, 1.8),
      new THREE.Vector3(-2.6, -0.2, 0.2),
      new THREE.Vector3(-1.1, 0.1, -1.2),
      new THREE.Vector3(1.5, 0.4, -0.9),
      new THREE.Vector3(3.9, 1.0, 1.5)
    ]);
    const lineGeometry = new THREE.BufferGeometry().setFromPoints(trajectory.getPoints(120));
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x34d399, transparent: true, opacity: 0.9 });
    const line = new THREE.Line(lineGeometry, lineMaterial);
    scene.add(line);

    const robotGeometry = new THREE.BoxGeometry(0.32, 0.18, 0.46);
    const robotMaterial = new THREE.MeshBasicMaterial({ color: 0xf59e0b });
    const robot = new THREE.Mesh(
      robotGeometry,
      robotMaterial
    );
    scene.add(robot);

    let frameId = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      points.rotation.y = elapsed * 0.08;
      line.rotation.y = Math.sin(elapsed * 0.25) * 0.08;

      const t = (elapsed * 0.08) % 1;
      const position = trajectory.getPointAt(t);
      robot.position.copy(position);
      robot.rotation.y = elapsed * 0.8;

      renderer.render(scene, camera);
      if (!prefersReducedMotion) {
        frameId = requestAnimationFrame(animate);
      }
    };

    const resize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    window.addEventListener("resize", resize);
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      renderer.dispose();
      pointGeometry.dispose();
      pointMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      robotGeometry.dispose();
      robotMaterial.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" aria-label="Animated LiDAR point cloud and robot trajectory" />;
}
