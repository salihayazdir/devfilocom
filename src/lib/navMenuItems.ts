export type NavMenuItem = {
  name: string;
  href: string;
  subItems?: NavMenuItem[];
};

export const menuItems: NavMenuItem[] = [
  { name: `Anasayfa`, href: `/` },
  {
    name: `Lojistik Ekosistemi`,
    href: `/lojistik-ekosistemi`,
    subItems: [
      {
        name: `Lojistik Şirketleri`,
        href: `/lojistik-ekosistemi/lojistik-sirketleri`,
      },
      {
        name: `Kurumsal Müşteri`,
        href: `/lojistik-ekosistemi/kurumsal-musteri`,
      },
      {
        name: `Hizmet Sağlayıcılar`,
        href: `/lojistik-ekosistemi/hizmet-saglayicilar`,
      },
    ],
  },
  {
    name: `Kurumsal`,
    href: `/kurumsal`,
    subItems: [
      { name: `Hakkımızda`, href: `/kurumsal/hakkimizda` },
      { name: `DevFilo Nedir?`, href: `/kurumsal/devfilo-nedir` },
      { name: `Basın Odası`, href: `/kurumsal/basin-odasi` },
      { name: `Sıkça Sorulan Sorular`, href: `/kurumsal/sss` },
      { name: `Bize Ulaşın`, href: `/kurumsal/bize-ulasin` },
    ],
  },
  { name: `Blog`, href: `/blog` },
];
