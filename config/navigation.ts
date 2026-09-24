export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const navigation: NavItem[] = [
  { label: "Preços", href: "/precos/" },
  {
    label: "Dispositivos",
    href: "/dispositivos/",
    children: [
      { label: "Smart TV", href: "/dispositivos/iptv-smart-tv/" },
      { label: "Samsung", href: "/dispositivos/iptv-samsung/" },
      { label: "LG", href: "/dispositivos/iptv-lg/" },
      { label: "Fire TV Stick", href: "/dispositivos/iptv-firestick/" },
      { label: "Android TV", href: "/dispositivos/iptv-android-tv/" },
      { label: "Google TV", href: "/dispositivos/iptv-google-tv/" },
      { label: "Apple TV", href: "/dispositivos/iptv-apple-tv/" },
      { label: "iPhone e iPad", href: "/dispositivos/iptv-iphone-ipad/" },
      { label: "Telemóvel Android", href: "/dispositivos/iptv-android/" },
      { label: "PC e Windows", href: "/dispositivos/iptv-pc/" },
    ],
  },
  {
    label: "Apps",
    href: "/apps/",
    children: [
      { label: "IPTV Smarters Pro", href: "/apps/iptv-smarters-pro/" },
      { label: "TiviMate", href: "/apps/tivimate/" },
      { label: "IBO Player", href: "/apps/ibo-player/" },
      { label: "Smart IPTV", href: "/apps/smart-iptv/" },
    ],
  },
  { label: "Guias", href: "/guias/" },
  { label: "Suporte", href: "/suporte/" },
  { label: "Blog", href: "/blog/" },
];
