"use client";

export function PrintResumeButton() {
  return (
    <button className="resume-print-button" type="button" onClick={() => window.print()}>
      Print / Save as PDF <span aria-hidden="true">↗</span>
    </button>
  );
}
