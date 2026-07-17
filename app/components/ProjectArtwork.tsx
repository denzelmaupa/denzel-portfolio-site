import type { Project } from "../content/projects";

export function ProjectArtwork({ project }: { project: Project }) {
  if (project.className === "opencred") {
    return (
      <>
        <div className="opencred-kicker">IDENTITY / FINANCE / ZIMBABWE</div>
        <div className="opencred-word">
          OPEN<span>CRED</span>
        </div>
        <div className="opencred-window">
          <p>VISUAL SYSTEM</p>
          <div><span>01</span><b>LOGO</b></div>
          <div><span>02</span><b>GUIDE</b></div>
          <div><span>03</span><b>SOCIAL</b></div>
        </div>
        <div className="opencred-mark" aria-hidden="true">O/C</div>
      </>
    );
  }

  if (project.className === "tm-billboard") {
    return (
      <>
        <div className="tm-kicker">OUT-OF-HOME / AGENCY PROJECT</div>
        <div className="tm-landscape">
          <div className="tm-sky" />
          <div className="tm-board">
            <span>TM PICK N PAY</span>
            <strong>READS<br />AT SPEED.</strong>
            <i>BILLBOARD DESIGN / ZIMBABWE</i>
          </div>
          <div className="tm-road"><span /><span /><span /></div>
        </div>
        <div className="tm-caption">LIVE WORK / PHOTOGRAPHY TO FOLLOW</div>
      </>
    );
  }

  return (
    <>
      <div className="symphony-kicker">PERSONAL WORK / BRAND EXPLORATION</div>
      <div className="symphony-title">SYMPHONY</div>
      <div className="symphony-note note-one">♪</div>
      <div className="symphony-note note-two">●</div>
      <div className="symphony-pack pack-one"><span>SPICE<br />No. 01</span></div>
      <div className="symphony-pack pack-two"><span>SPICE<br />No. 02</span></div>
      <div className="symphony-caption">FLAVOUR / RHYTHM / IDENTITY</div>
    </>
  );
}
