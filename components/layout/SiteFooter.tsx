import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { offer, facts } from "@/config/offer";
import { articleShortLabels, featuredArticles } from "@/config/internal-links";
import { WhatsAppIcon } from "@/components/conversion/WhatsAppButton";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const columns = [
  { title: "Serviço", links: [["Preços", "/precos/"], ["Teste grátis 24h", "/teste-iptv/"], ["Como comprar", "/comprar-iptv/"], ["Lista IPTV Portugal", "/lista-iptv-portugal/"], ["Revenda", "/reseller/"]] },
  { title: "Ajuda", links: [["Dispositivos", "/dispositivos/"], ["Apps IPTV", "/apps/"], ["Canais", "/canais/"], ["Comparar", "/comparar/"], ["Guias", "/guias/"], ["Suporte", "/suporte/"], ["Blog", "/blog/"]] },
  { title: "Artigos", links: [...featuredArticles.slice(0, 5).map((a) => [articleShortLabels[a.slug] ?? a.title, a.slug] as [string, string]), ["Todos os artigos", "/blog/"]] },
  { title: "Empresa", links: [["Sobre nós", "/sobre-nos/"], ["Contacto", "/contacto/"], ["Legalidade", "/legalidade/"], ["Termos", "/termos/"], ["Privacidade", "/politica-privacidade/"], ["Reembolsos", "/politica-reembolso/"], ["Cookies", "/politica-cookies/"], ["Aviso legal", "/aviso-legal/"]] },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo tone="light" />
          <p>{facts.channels}, {facts.vod} e apoio {offer.support} em português. Sem fidelização.</p>
          <a className="footer-wa" href={buildWhatsAppUrl("Olá! Vim do site IPTV Listas (iptvlistas.pt) e tenho uma pergunta.")} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon size={20} /> {offer.whatsappDisplay}
          </a>
        </div>
        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2>{col.title}</h2>
            {col.links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          </nav>
        ))}
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} IPTV Listas</span>
        <span>iptvlistas.pt</span>
      </div>
    </footer>
  );
}
