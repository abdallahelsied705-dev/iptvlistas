import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found">
      <div className="container not-found-inner">
        <div>
          <p className="not-found-code">Erro 404</p>
          <h1>Esta página não existe ou mudou de endereço.</h1>
          <p>Verifica o endereço ou continua a partir de uma destas páginas.</p>
          <div className="hero-actions">
            <Button href="/">Ir para o início</Button>
            <Button href="/suporte/" variant="outline">Abrir o suporte</Button>
          </div>
        </div>
        <Image src="/images/site/not-found.webp" alt="Televisão numa sala com o ecrã sem sinal" width={1200} height={800} sizes="(max-width: 900px) 100vw, 50vw" />
      </div>
    </main>
  );
}
