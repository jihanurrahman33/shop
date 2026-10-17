export interface BrandLogo {
  name: string;
  src: string;
  width: number;
  height: number;
  className: string;
}

export const BRAND_LOGOS: readonly BrandLogo[] = [
  {
    name: "Versace",
    src: "/icons/versace.svg",
    width: 160,
    height: 35,
    className: "h-7 sm:h-9 w-auto object-contain brightness-0 invert",
  },
  {
    name: "Zara",
    src: "/icons/zara.svg",
    width: 100,
    height: 38,
    className: "h-7 sm:h-9 w-auto object-contain brightness-0 invert",
  },
  {
    name: "Gucci",
    src: "/icons/gucci.svg",
    width: 150,
    height: 36,
    className: "h-7 sm:h-9 w-auto object-contain brightness-0 invert",
  },
  {
    name: "Prada",
    src: "/icons/prada.svg",
    width: 150,
    height: 32,
    className: "h-6 sm:h-8 w-auto object-contain brightness-0 invert",
  },
  {
    name: "Calvin Klein",
    src: "/icons/calvin-klein.svg",
    width: 170,
    height: 33,
    className: "h-6 sm:h-8 w-auto object-contain brightness-0 invert",
  },
] as const;
