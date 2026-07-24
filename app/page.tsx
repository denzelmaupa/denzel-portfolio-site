"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { ProjectArtwork } from "./components/ProjectArtwork";
import { projects } from "./content/projects";

const clientBrands = [
  { name: "TM Pick n Pay", slug: "tm-pnp" },
  { name: "Nando’s", slug: "nandos" },
  { name: "AFC Commercial Bank", slug: "afc" },
  { name: "National Foods", slug: "national-foods" },
  { name: "Zimbabwe Stock Exchange", slug: "zse" },
  { name: "Edgars", slug: "edgars" },
  { name: "Transerv", slug: "transerv" },
  { name: "OpenCred Finance", slug: "opencred" },
  { name: "Kutsaga", slug: "kutsaga" },
  { name: "TATU Capital", slug: "tatu-capital" },
];

function HeroSculpture() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    if (window.matchMedia("(max-width: 600px)").matches) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.set(0, 0, 7.8);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    group.rotation.set(-0.04, 0, 0);
    scene.add(group);

    const createPosterTexture = (variant: number) => {
      const canvas = document.createElement("canvas");
      canvas.width = 900;
      canvas.height = 1200;
      const context = canvas.getContext("2d");
      if (!context) throw new Error("Canvas rendering is unavailable.");

      const project = projects[variant];
      const palette = [
        { background: project.palette[0], foreground: project.palette[1], accent: project.palette[2] },
        { background: project.palette[0], foreground: project.palette[1], accent: project.palette[2] },
        { background: project.palette[0], foreground: project.palette[1], accent: project.palette[2] },
      ][variant];

      context.fillStyle = palette.background;
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.strokeStyle = variant === 1 ? "rgba(242,239,232,.13)" : "rgba(17,17,15,.16)";
      context.lineWidth = 2;
      for (let x = 75; x < 900; x += 150) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, 1200);
        context.stroke();
      }
      for (let y = 75; y < 1200; y += 150) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(900, y);
        context.stroke();
      }

      context.fillStyle = palette.foreground;
      context.font = "24px ui-monospace, SFMono-Regular, Menlo, monospace";
      context.letterSpacing = "3px";
      context.fillText(`${project.title.toUpperCase()} / ${project.category.toUpperCase()}`, 54, 66);
      context.fillText(`0${variant + 1} / 03`, 720, 1144);

      if (variant === 0) {
        context.font = "italic 168px Georgia, serif";
        context.letterSpacing = "-10px";
        context.fillText("OPEN", 48, 382);
        context.fillText("CRED", 48, 566);
        context.fillStyle = palette.accent;
        context.beginPath();
        context.arc(690, 820, 122, 0, Math.PI * 2);
        context.fill();
        context.fillStyle = palette.foreground;
        context.font = "26px ui-monospace, SFMono-Regular, Menlo, monospace";
        context.letterSpacing = "2px";
        context.fillText("LOGO / GUIDE / MOCKUPS", 48, 1024);
        context.fillText("LEAD DESIGN / JERICHO", 48, 1064);
      } else if (variant === 1) {
        context.font = "italic 142px Georgia, serif";
        context.letterSpacing = "-8px";
        context.fillText("TM", 42, 318);
        context.fillText("BILLBOARD", 42, 474);
        context.strokeStyle = palette.foreground;
        context.lineWidth = 3;
        context.strokeRect(52, 632, 790, 310);
        context.fillStyle = palette.accent;
        context.fillRect(52, 632, 22, 310);
        context.fillStyle = palette.foreground;
        context.font = "25px ui-monospace, SFMono-Regular, Menlo, monospace";
        context.letterSpacing = "2px";
        context.fillText("OUTDOOR THAT READS", 120, 718);
        context.fillText("AT REAL-WORLD SPEED.", 120, 770);
        context.strokeRect(120, 824, 652, 62);
        context.fillText("PHOTOS / VIDEO / MOCKUPS", 160, 864);
      } else {
        context.font = "162px Georgia, serif";
        context.letterSpacing = "-12px";
        context.fillText("SYMPHONY", 34, 410);
        context.strokeStyle = palette.foreground;
        context.lineWidth = 4;
        context.strokeRect(54, 610, 792, 330);
        context.fillStyle = palette.accent;
        context.fillRect(54, 610, 244, 330);
        context.fillStyle = palette.foreground;
        context.beginPath();
        context.arc(440, 760, 86, 0, Math.PI * 2);
        context.fill();
        context.beginPath();
        context.arc(650, 760, 120, 0, Math.PI * 2);
        context.stroke();
        context.fillStyle = palette.foreground;
        context.font = "26px ui-monospace, SFMono-Regular, Menlo, monospace";
        context.letterSpacing = "2px";
        context.fillText("FLAVOUR / RHYTHM / IDENTITY", 54, 1014);
        context.fillText("INDEPENDENT PROJECT", 54, 1056);
      }

      const texture = new THREE.CanvasTexture(canvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
      return texture;
    };

    const createPosterGeometry = (curve: number) => {
      const geometry = new THREE.PlaneGeometry(3.05, 4.06, 28, 36);
      const posterPosition = geometry.getAttribute("position") as THREE.BufferAttribute;
      for (let index = 0; index < posterPosition.count; index += 1) {
        const x = posterPosition.getX(index);
        const y = posterPosition.getY(index);
        const z = curve * (x * x - 0.55) + Math.sin((y + 2.03) * 1.42) * 0.018;
        posterPosition.setZ(index, z);
      }
      posterPosition.needsUpdate = true;
      geometry.computeVertexNormals();
      return geometry;
    };

    const posterSpecs = [
      { x: -1.4, y: 0.16, z: -0.32, rz: -0.12, ry: 0.16, curve: 0.038 },
      { x: 0, y: -0.06, z: 0.46, rz: 0.025, ry: -0.035, curve: -0.026 },
      { x: 1.42, y: 0.05, z: -0.16, rz: 0.125, ry: -0.17, curve: 0.045 },
    ];
    const posterTextures = posterSpecs.map((_, index) => createPosterTexture(index));
    const posterGeometries = posterSpecs.map((spec) => createPosterGeometry(spec.curve));
    const posterMaterials = posterTextures.map(
      (texture) =>
        new THREE.MeshPhysicalMaterial({
          map: texture,
          side: THREE.DoubleSide,
          roughness: 0.72,
          metalness: 0,
          clearcoat: 0.08,
          clearcoatRoughness: 0.8,
        }),
    );
    const posters = posterSpecs.map((spec, index) => {
      const poster = new THREE.Mesh(posterGeometries[index], posterMaterials[index]);
      poster.position.set(0, spec.y, spec.z);
      poster.rotation.set(-0.025, spec.ry, 0);
      poster.castShadow = true;
      poster.receiveShadow = true;
      poster.userData = spec;
      group.add(poster);
      return poster;
    });

    const raycaster = new THREE.Raycaster();
    const pointerNdc = new THREE.Vector2();
    let hoveredPoster = -1;
    let dragging = false;
    let pointerStartX = 0;
    let dragOffset = 0;
    let maxDragDistance = 0;

    const shadowGeometry = new THREE.PlaneGeometry(9, 8);
    const shadowMaterial = new THREE.ShadowMaterial({ color: 0x11110f, opacity: 0.22 });
    const shadowPlane = new THREE.Mesh(shadowGeometry, shadowMaterial);
    shadowPlane.position.z = -1.15;
    shadowPlane.receiveShadow = true;
    scene.add(shadowPlane);

    const key = new THREE.DirectionalLight(0xfffbf0, 6.2);
    key.position.set(-2.5, 5.5, 7);
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    key.shadow.camera.left = -6;
    key.shadow.camera.right = 6;
    key.shadow.camera.top = 6;
    key.shadow.camera.bottom = -6;
    scene.add(key);
    const fill = new THREE.DirectionalLight(0xd7ef3b, 1.7);
    fill.position.set(4, -2.5, 4.5);
    scene.add(fill);
    scene.add(new THREE.HemisphereLight(0xf2efe8, 0x77746c, 2));

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

    const updateHitTarget = (event: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      pointerNdc.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointerNdc.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointerNdc, camera);
      const hit = raycaster.intersectObjects(posters, false)[0];
      hoveredPoster = hit ? posters.indexOf(hit.object as (typeof posters)[number]) : -1;
      mount.style.cursor = dragging ? "grabbing" : hoveredPoster >= 0 ? "pointer" : "grab";
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      target.x = ((event.clientX - rect.left) / rect.width - 0.5) * 0.62;
      target.y = ((event.clientY - rect.top) / rect.height - 0.5) * 0.34;
      if (dragging) {
        const distance = event.clientX - pointerStartX;
        dragOffset = (distance / Math.max(rect.width, 1)) * 1.8;
        maxDragDistance = Math.max(maxDragDistance, Math.abs(distance));
      }
      updateHitTarget(event);
    };

    const onPointerDown = (event: PointerEvent) => {
      dragging = true;
      pointerStartX = event.clientX;
      maxDragDistance = 0;
      mount.setPointerCapture(event.pointerId);
      updateHitTarget(event);
    };

    const onPointerUp = (event: PointerEvent) => {
      updateHitTarget(event);
      const destination = hoveredPoster >= 0 ? `/work/${projects[hoveredPoster].slug}` : null;
      dragging = false;
      dragOffset = 0;
      if (mount.hasPointerCapture(event.pointerId)) mount.releasePointerCapture(event.pointerId);
      mount.style.cursor = hoveredPoster >= 0 ? "pointer" : "grab";
      if (maxDragDistance < 8 && destination) window.location.assign(destination);
    };

    const onPointerLeave = () => {
      if (dragging) return;
      hoveredPoster = -1;
      target.set(0, 0);
      mount.style.cursor = "grab";
    };

    const observer = new ResizeObserver(resize);
    observer.observe(mount);
    mount.addEventListener("pointermove", onPointerMove);
    mount.addEventListener("pointerdown", onPointerDown);
    mount.addEventListener("pointerup", onPointerUp);
    mount.addEventListener("pointercancel", onPointerUp);
    mount.addEventListener("pointerleave", onPointerLeave);
    resize();

    let frame = 0;
    const startedAt = performance.now();
    const render = () => {
      const elapsed = (performance.now() - startedAt) / 1000;
      pointer.lerp(target, 0.028);
      const intro = prefersReducedMotion ? 1 : 1 - Math.pow(1 - Math.min(elapsed / 1.7, 1), 4);
      group.rotation.y = pointer.x * 0.12;
      group.rotation.x = -0.04 + pointer.y * 0.1;
      posters.forEach((poster, index) => {
        const spec = poster.userData as (typeof posterSpecs)[number];
        const depth = index - 1;
        const hoverSpread = hoveredPoster >= 0 ? (index - hoveredPoster) * 0.09 : 0;
        const targetX = spec.x * intro + pointer.x * depth * 0.32 + dragOffset * depth + hoverSpread;
        const targetZ = spec.z + (hoveredPoster === index ? 0.52 : 0);
        poster.position.x += (targetX - poster.position.x) * 0.07;
        poster.position.y = spec.y + Math.sin(elapsed * 0.45 + index * 1.7) * 0.035;
        poster.position.z += (targetZ - poster.position.z) * 0.09;
        poster.rotation.y = spec.ry + pointer.x * depth * 0.08;
        poster.rotation.x = -0.025 - pointer.y * 0.07;
        poster.rotation.z = spec.rz * intro + pointer.x * depth * 0.035;
        const targetScale = hoveredPoster === index ? 1.055 : 1;
        poster.scale.setScalar(THREE.MathUtils.lerp(poster.scale.x, targetScale, 0.1));
      });
      renderer.render(scene, camera);
      frame = window.requestAnimationFrame(render);
    };

    if (prefersReducedMotion) renderer.render(scene, camera);
    else render();

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      mount.removeEventListener("pointermove", onPointerMove);
      mount.removeEventListener("pointerdown", onPointerDown);
      mount.removeEventListener("pointerup", onPointerUp);
      mount.removeEventListener("pointercancel", onPointerUp);
      mount.removeEventListener("pointerleave", onPointerLeave);
      posterGeometries.forEach((geometry) => geometry.dispose());
      posterTextures.forEach((texture) => texture.dispose());
      posterMaterials.forEach((material) => material.dispose());
      shadowGeometry.dispose();
      shadowMaterial.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div className="sculpture-wrap" role="group" aria-label="Interactive project previews">
      <div className="sculpture-grid" aria-hidden="true" />
      <div className="sculpture-halo" aria-hidden="true" />
      <div className="sculpture-canvas" ref={mountRef} aria-hidden="true" />
      <div className="sculpture-index" aria-hidden="true">PROJECT SHEETS / 003</div>
      <div className="sculpture-note" aria-hidden="true">DRAG / TAP / EXPLORE</div>
      <div className="mobile-project-intro">
        <p>Selected project sheets / 001—003</p>
        <h2>Real work.<br /><i>Clear stories.</i></h2>
        <span>Choose a project to explore the case-study structure.</span>
      </div>
      <div className="poster-links" aria-label="Open a project">
        {projects.slice(0, 3).map((project) => (
          <a href={`/work/${project.slug}`} key={project.slug}>
            <span>{project.number}</span>{project.title}
          </a>
        ))}
      </div>
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
        <a className="wordmark" href="/" aria-label="Denzel Maupa, home">
          DM<span>®</span>
        </a>
        <p className="header-role">Graphic designer &amp; visual communicator<br />Harare / Global</p>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="/about">About</a>
          <a href="/resume">Résumé</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow"><span>Open to thoughtful opportunities</span> / 2026</p>
          <h1>Maximised minimalism. <i>Creative simplicity.</i></h1>
          <div className="hero-foot">
            <p>Graphic design and visual communication shaped by advertising, systems thinking and a growing UI/UX practice.</p>
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

      <section className="brand-carousel" aria-label="Selected client experience at Jericho Advertising">
        <div className="brand-carousel-label">
          <p>Selected brands I’ve worked on through Jericho Advertising.</p>
          <span>Agency experience / Harare</span>
        </div>
        <div className="brand-carousel-window">
          <div className="brand-carousel-track">
            {[false, true].map((duplicate) => (
              <div className="brand-carousel-sequence" aria-hidden={duplicate || undefined} key={duplicate ? "duplicate" : "primary"}>
                {clientBrands.map((brand) => (
                  <figure className="brand-carousel-item" key={`${duplicate ? "duplicate-" : ""}${brand.slug}`}>
                    <img
                      className="brand-logo brand-logo-white"
                      src={`/brands/${brand.slug}-white.svg`}
                      alt={duplicate ? "" : brand.name}
                    />
                    <img
                      className="brand-logo brand-logo-colour"
                      src={`/brands/${brand.slug}-colour.svg`}
                      alt=""
                      aria-hidden="true"
                    />
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading" data-reveal>
          <p><span>01</span> Selected work</p>
          <p>Graphic / Product / Hybrid</p>
        </div>
        <div className="projects">
          {projects.map((project) => (
            <article className="project" key={project.title} data-reveal>
              <a className="project-link" href={`/work/${project.slug}`} aria-label={`View ${project.title} case study`}>
                <div className={`project-art ${project.className}`}>
                  <ProjectArtwork project={project} />
                </div>
                <div className="project-meta">
                  <p className="project-number">{project.number}</p>
                  <div>
                    <h2>{project.title}</h2>
                    <p className="project-description">{project.description}</p>
                  </div>
                  <p>{project.discipline}<br />{project.category}</p>
                  <p className="project-year">{project.year}</p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="practice-section" id="practice">
        <div className="section-heading" data-reveal>
          <p><span>02</span> Practice</p>
          <p>One approach / multiple surfaces</p>
        </div>
        <p className="practice-lead" data-reveal>
          I use systems thinking to connect how something <i>looks</i>, how it <i>works</i>, and how it <i>feels to use.</i>
        </p>
        <div className="practice-grid">
          <article data-reveal>
            <p>01 / Graphic design</p>
            <h2>Make the idea visible.</h2>
            <span>Identity systems, campaigns, editorial, packaging and art direction.</span>
          </article>
          <article data-reveal>
            <p>02 / UI/UX design</p>
            <h2>Grow the digital practice.</h2>
            <span>Certified in UI/UX and actively developing research, interaction design, prototyping and product thinking.</span>
          </article>
          <article data-reveal>
            <p>03 / Shared systems</p>
            <h2>Make every touchpoint belong.</h2>
            <span>Design systems, motion principles, accessible components and digital art direction.</span>
          </article>
        </div>
      </section>

      <section className="studio-section" id="studio">
        <div className="section-heading light" data-reveal>
          <p><span>03</span> Studio</p>
          <p>Harare / Zimbabwe</p>
        </div>
        <div className="studio-grid">
          <p className="studio-lead" data-reveal>
            I make <i>clear visual ideas</i> with enough detail to feel considered—and enough restraint to stay memorable.
          </p>
          <div className="studio-detail" data-reveal>
            <p>I’m Denzel Maupa, a Zimbabwean graphic designer and visual communicator working at Jericho Advertising. Advertising sharpened how I think about attention, hierarchy and what a message needs to do—not only how it looks.</p>
            <div className="services">
              <p><span>01</span> Branding &amp; identity</p>
              <p><span>02</span> Advertising &amp; campaigns</p>
              <p><span>03</span> Editorial &amp; social</p>
              <p><span>04</span> UI/UX &amp; digital</p>
            </div>
          </div>
        </div>
        <div className="studio-mark" aria-hidden="true">D/M</div>
      </section>

      <footer id="contact">
        <div className="section-heading" data-reveal>
          <p><span>04</span> Contact</p>
          <p>Roles / projects / collaborations</p>
        </div>
        <div className="contact-main" data-reveal>
          <p>Let’s make something clear, useful and memorable.</p>
          <a href="/contact">Start a<br /><i>conversation.</i><span>↗</span></a>
        </div>
        <div className="footer-base">
          <p>© Denzel Maupa 2026</p>
          <div>
            <a href="https://www.instagram.com/designed_by_denzel/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.linkedin.com/in/denzel-maupa/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
