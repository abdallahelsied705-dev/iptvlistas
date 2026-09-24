import Link from "next/link";
import { navigation } from "@/config/navigation";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { Logo } from "@/components/brand/Logo";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Saltar para o conteúdo</a>
      <div className="container header-inner">
        <Logo />
        <nav aria-label="Navegação principal" className="desktop-nav">
          <ul>
            {navigation.map((item) => (
              <li key={item.href} className={item.children?.length ? "has-menu" : undefined}>
                <Link href={item.href}>{item.label}</Link>
                {item.children?.length ? (
                  <div className="nav-menu">
                    {item.children.map((child) => <Link href={child.href} key={child.href}>{child.label}</Link>)}
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-actions">
          <Link className="header-trial" href="/teste-iptv/">Teste grátis 24h</Link>
          <Link className="button button-primary button-small" href="/precos/">Ver preços</Link>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
