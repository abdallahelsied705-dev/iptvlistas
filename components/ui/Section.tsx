import type { ReactNode } from "react";

export function Section({ title, description, children, className = "", id }: {
  title: string; description?: string; children?: ReactNode; className?: string; id?: string;
}) {
  return (
    <section id={id} className={`section ${className}`.trim()}>
      <div className="container">
        <div className="section-head">
          <h2>{title}</h2>
          {description ? <p>{description}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
