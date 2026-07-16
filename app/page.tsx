"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const projects = [
  {
    number: "01",
    title: "Night / Shift",
    category: "Festival identity",
    year: "2026",
    description:
      "A shape-shifting identity for an after-dark music programme, built to move from street posters to live stages.",
    className: "night-shift",
  },
  {
    number: "02",
    title: "Common Ground",
    category: "Editorial campaign",
    year: "2025",
    description:
      "A bold editorial system turning climate research into an optimistic, human-scale public conversation.",
    className: "common-ground",
  },
  {
    number: "03",
    title: "Alto",
    category: "Packaging system",
    year: "2024",
    description:
      "A tactile packaging family for a small-batch aperitivo, balancing old-world ritual with modern hospitality.",
    className: "alto",
  },
];

function HeroSculpture() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    group.rotation.set(-0.22, 0.45, 0.08);
    scene.add(group);

    const solid = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.72, 2),
      new THREE.MeshPhysicalMaterial({
        color: 0xd7ef3b,
        roughness: 0.28,
        metalness: 0.12,
        clearcoat: 0.8,
        clearcoatRoughness: 0.18,
      }),
    );
    solid.scale.set(1, 1.22, 0.82);
    group.add(solid);

    const wire = new THREE.Mesh(
      new THREE.IcosahedronGeometry(2.08, 1),
      new THREE.MeshBasicMaterial({
        color: 0x11110f,
        wireframe: true,
        transparent: true,
        opacity: 0.48,
      }),
    );
    wire.rotation.set(0.5, -0.35, 0.2);
    group.add(wire);

    const orbit = new THREE.Mesh(
      new THREE.TorusGeometry(2.42, 0.055, 12, 180),
      new THREE.MeshBasicMaterial({ color: 0xff4c1f }),
    );
    orbit.rotation.set(1.12, 0.25, -0.12);
    group.add(orbit);

    const key = new THREE.DirectionalLight(0xfff8e8, 5.5);
    key.position.set(3, 4, 6);
    scene.add(key);
    const fill = new THREE.DirectionalLight(0xff4c1f, 2.1);
    fill.position.set(-4, -2, 3);
    scene.add(fill);
    scene.add(new THREE.AmbientLight(0xffffff, 1.8));

    const pointer = new THREE.Vector2(0, 0);
    const target = new THREE.Vector2(0, 0);
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const resize = () => {
      const { width, height } = mount.getBoundingClientRect();
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      target.x = ((event.clientX - rect.left) / rect.width - 0.5) * 0.8;
      target.y = ((event.clientY - rect.top) / rect.height - 0.5) * 0.55;
    };

    const observer = new ResizeObserver(resize);
    observer.observe(mount);
    if (!prefersReducedMotion) mount.addEventListener("pointermove", onPointerMove);
    resize();

    let frame = 0;
    const clock = new THREE.Clock();
    const render = () => {
      const elapsed = clock.getElapsedTime();
      pointer.lerp(target, 0.055);
      group.rotation.y = 0.42 + pointer.x + elapsed * 0.09;
      group.rotation.x = -0.2 + pointer.y + Math.sin(elapsed * 0.55) * 0.045;
      wire.rotation.z = elapsed * -0.11;
      orbit.rotation.z = elapsed * 0.07;
      renderer.render(scene, camera);
      frame = window.requestAnimationFrame(render);
    };

    if (prefersReducedMotion) renderer.render(scene, camera);
    else render();

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      mount.removeEventListener("pointermove", onPointerMove);
      solid.geometry.dispose();
      wire.geometry.dispose();
      orbit.geometry.dispose();
      (solid.material as THREE.Material).dispose();
      (wire.material as THREE.Material).dispose();
      (orbit.material as THREE.Material).dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div className="sculpture-wrap" aria-hidden="true">
      <div className="sculpture-grid" />
      <div className="sculpture-beam" />
      <div className="sculpture-canvas" ref={mountRef} />
      <div className="sculpture-index">FORM STUDY / 001</div>
      <div className="sculpture-note">POINTER-REACTIVE OBJECT</div>
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Mara Okafor, home">
          MO<span>®</span>
        </a>
        <p className="header-role">Independent graphic designer<br />London / Accra</p>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#studio">Studio</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow"><span>Available for select projects</span> / 2026</p>
          <h1>Visual systems for culture, commerce <i>&amp;</i> change.</h1>
          <div className="hero-foot">
            <p>Identity, art direction and editorial design for people making culture move forward.</p>
            <a href="#work" className="text-link">View selected work <span>↘</span></a>
          </div>
        </div>
        <HeroSculpture />
      </section>

      <div className="ticker" aria-label="Capabilities">
        <div className="ticker-track">
          <span>Identity systems</span><b>✦</b><span>Art direction</span><b>✦</b><span>Editorial design</span><b>✦</b><span>Digital experiences</span><b>✦</b>
          <span aria-hidden="true">Identity systems</span><b aria-hidden="true">✦</b><span aria-hidden="true">Art direction</span><b aria-hidden="true">✦</b><span aria-hidden="true">Editorial design</span><b aria-hidden="true">✦</b><span aria-hidden="true">Digital experiences</span><b aria-hidden="true">✦</b>
        </div>
      </div>

      <section className="work-section" id="work">
        <div className="section-heading" data-reveal>
          <p><span>01</span> Selected work</p>
          <p>2024—2026</p>
        </div>
        <div className="projects">
          {projects.map((project) => (
            <article className="project" key={project.title} data-reveal>
              <div className={`project-art ${project.className}`}>
                {project.className === "night-shift" && (
                  <>
                    <div className="ns-title">NIGHT<br />SHIFT</div>
                    <div className="ns-orbit" />
                    <div className="ns-date">21—24 / AUG</div>
                  </>
                )}
                {project.className === "common-ground" && (
                  <>
                    <div className="cg-word cg-one">COMMON</div>
                    <div className="cg-word cg-two">GROUND</div>
                    <div className="cg-disc" />
                    <div className="cg-caption">A FIELD GUIDE TO A SHARED FUTURE</div>
                  </>
                )}
                {project.className === "alto" && (
                  <>
                    <div className="alto-bottle bottle-one"><span>ALTO</span></div>
                    <div className="alto-bottle bottle-two"><span>ALTO</span></div>
                    <div className="alto-sun" />
                    <div className="alto-type">APERITIVO<br />A MODERN RITUAL</div>
                  </>
                )}
              </div>
              <div className="project-meta">
                <p className="project-number">{project.number}</p>
                <div>
                  <h2>{project.title}</h2>
                  <p className="project-description">{project.description}</p>
                </div>
                <p>{project.category}</p>
                <p className="project-year">{project.year}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="studio-section" id="studio">
        <div className="section-heading light" data-reveal>
          <p><span>02</span> Studio</p>
          <p>Independent practice</p>
        </div>
        <div className="studio-grid">
          <p className="studio-lead" data-reveal>
            I build <i>expressive identities</i> with enough structure to stay coherent—and enough friction to stay remembered.
          </p>
          <div className="studio-detail" data-reveal>
            <p>Working between London and Accra, I collaborate with founders, cultural institutions and creative teams from first idea to final expression.</p>
            <div className="services">
              <p><span>01</span> Strategy &amp; positioning</p>
              <p><span>02</span> Visual identity</p>
              <p><span>03</span> Art direction</p>
              <p><span>04</span> Editorial &amp; digital</p>
            </div>
          </div>
        </div>
        <div className="studio-mark" aria-hidden="true">M/O</div>
      </section>

      <footer id="contact">
        <div className="section-heading" data-reveal>
          <p><span>03</span> Contact</p>
          <p>New business / collaborations</p>
        </div>
        <div className="contact-main" data-reveal>
          <p>Have a project in mind?</p>
          <a href="mailto:hello@maraokafor.design">Let’s make it<br /><i>impossible to ignore.</i><span>↗</span></a>
        </div>
        <div className="footer-base">
          <p>© Mara Okafor 2026</p>
          <div>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
