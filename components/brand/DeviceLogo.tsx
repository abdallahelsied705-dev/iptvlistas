import { siAndroid, siAppletv, siGooglecast, siLg, siNvidia, siRoku, siSamsung } from "simple-icons";

export type DeviceBrand = "firetv" | "androidtv" | "appletv" | "samsung" | "lg" | "roku" | "chromecast" | "nvidia" | "windows" | "android" | "formuler" | "mobile";

export function deviceBrandForSlug(slug: string): DeviceBrand | null {
  if (slug.includes("firestick")) return "firetv";
  if (slug.includes("android-tv") || slug.includes("google-tv")) return "androidtv";
  if (slug.includes("apple-tv")) return "appletv";
  if (slug.includes("samsung")) return "samsung";
  if (slug.includes("iptv-lg")) return "lg";
  if (slug.includes("roku")) return "roku";
  if (slug.includes("chromecast")) return "chromecast";
  if (slug.includes("nvidia")) return "nvidia";
  if (slug.includes("windows") || slug.includes("iptv-pc")) return "windows";
  if (slug.includes("iptv-android")) return "android";
  if (slug.includes("formuler")) return "formuler";
  if (slug.includes("telemovel") || slug.includes("iphone-ipad")) return "mobile";
  return null;
}

const icons = { appletv: siAppletv, samsung: siSamsung, lg: siLg, roku: siRoku, chromecast: siGooglecast, nvidia: siNvidia, android: siAndroid } as const;

export function DeviceLogo({ brand, size = 38 }: { brand: DeviceBrand; size?: number }) {
  if (brand in icons) {
    const icon = icons[brand as keyof typeof icons];
    return <svg role="img" aria-label={`${icon.title} logo`} viewBox="0 0 24 24" width={size} height={size} fill="currentColor"><path d={icon.path} /></svg>;
  }
  if (brand === "firetv") return <span className="device-wordmark firetv-mark" aria-label="Amazon Fire TV logo"><b>fire</b><i>tv</i><small>⌣</small></span>;
  if (brand === "androidtv") return <span className="device-combo-mark" aria-label="Android TV logo"><svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor"><path d={siAndroid.path} /></svg><b>TV</b></span>;
  if (brand === "windows") return <span className="windows-mark" aria-label="Windows logo"><i /><i /><i /><i /></span>;
  if (brand === "formuler") return <span className="device-wordmark formuler-mark" aria-label="Formuler logo"><b>FORMULER</b></span>;
  return <span className="mobile-mark" aria-label="Mobile device icon"><i /><b /></span>;
}
