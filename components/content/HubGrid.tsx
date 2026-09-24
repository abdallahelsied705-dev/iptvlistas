import Link from "next/link";
import Image from "next/image";
import type { RouteDefinition } from "@/config/routes";

export function HubGrid({ routes }: { routes: RouteDefinition[] }) {
  return (
    <div className="hub-grid">
      {routes.map((item) => {
        const withImage = item.type === "blog" && Boolean(item.image);
        return (
          <Link className={`hub-card${withImage ? " hub-card-image" : ""}`} href={item.slug} key={item.slug}>
            {withImage ? <Image src={item.image!} alt="" width={640} height={360} sizes="(max-width: 700px) 100vw, 33vw" /> : null}
            <strong>{item.title}</strong>
            <span>{item.description}</span>
          </Link>
        );
      })}
    </div>
  );
}
