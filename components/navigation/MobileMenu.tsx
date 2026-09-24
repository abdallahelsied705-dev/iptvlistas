"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { navigation } from "@/config/navigation";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="mobile-menu">
      <button className="menu-trigger" type="button" aria-expanded={open} aria-controls={menuId} onClick={() => setOpen((v) => !v)}>
        <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
        <svg aria-hidden="true" viewBox="0 0 24 24"><path d={open ? "M6 6l12 12M18 6 6 18" : "M4 7h16M4 12h16M4 17h16"} /></svg>
      </button>
      {open ? createPortal(
        <div className="mobile-layer">
          <button className="mobile-backdrop" type="button" aria-label="Fechar menu" onClick={close} />
          <div id={menuId} className="mobile-panel" role="dialog" aria-modal="true" aria-label="Menu">
            <nav aria-label="Navegação móvel">
              <ul>
                {navigation.map((item) => (
                  <li key={item.href}>
                    {item.children?.length ? (
                      <details>
                        <summary>{item.label}</summary>
                        <div className="mobile-sub">
                          <Link href={item.href} onClick={close}>Ver tudo em {item.label}</Link>
                          {item.children.map((child) => <Link href={child.href} key={child.href} onClick={close}>{child.label}</Link>)}
                        </div>
                      </details>
                    ) : <Link href={item.href} onClick={close}>{item.label}</Link>}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mobile-actions">
              <Link className="button button-primary" href="/precos/" onClick={close}>Ver preços</Link>
              <Link className="button button-outline" href="/teste-iptv/" onClick={close}>Teste grátis 24h</Link>
            </div>
          </div>
        </div>,
        document.body,
      ) : null}
    </div>
  );
}
