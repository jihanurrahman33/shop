export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  rating: number;
  ratingCount: number;
  description: string;
  category: "T-shirts" | "Shorts" | "Shirts" | "Hoodie" | "Jeans";
  dressStyle: "Casual" | "Formal" | "Party" | "Gym";
  colors: { name: string; hex: string }[];
  sizes: ("XX-Small" | "X-Small" | "Small" | "Medium" | "Large" | "X-Large" | "XX-Large" | "3X-Large" | "4X-Large")[];
  images: string[];
  isNewArrival?: boolean;
  isTopSelling?: boolean;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  verified: boolean;
  comment: string;
  date: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "T-SHIRT WITH TAPE DETAILS",
    slug: "t-shirt-with-tape-details",
    price: 120,
    rating: 4.5,
    ratingCount: 120,
    description: "A comfortable modern crewneck t-shirt featuring contrast tape detailing across the shoulders and sleeves. Made with 100% premium breathable cotton.",
    category: "T-shirts",
    dressStyle: "Casual",
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "White", hex: "#FFFFFF" },
      { name: "Navy", hex: "#2B3A4A" },
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    images: ["/images/product-tape-tshirt.png"],
    isNewArrival: true,
  },
  {
    id: "2",
    name: "SKINNY FIT JEANS",
    slug: "skinny-fit-jeans",
    price: 240,
    originalPrice: 260,
    discountPercentage: 20,
    rating: 3.5,
    ratingCount: 88,
    description: "High-stretch denim crafted for a sleek, contemporary silhouette without compromising all-day comfort.",
    category: "Jeans",
    dressStyle: "Casual",
    colors: [
      { name: "Dark Blue", hex: "#1C2D42" },
      { name: "Black", hex: "#111111" },
    ],
    sizes: ["Small", "Medium", "Large", "X-Large", "XX-Large"],
    images: ["/images/product-skinny-jeans.png"],
    isNewArrival: true,
  },
  {
    id: "3",
    name: "CHECKERED SHIRT",
    slug: "checkered-shirt",
    price: 180,
    rating: 4.5,
    ratingCount: 145,
    description: "Classic red and black plaid button-up tailored from brushed cotton flannel with a refined casual collar.",
    category: "Shirts",
    dressStyle: "Casual",
    colors: [
      { name: "Red/Black", hex: "#B82C2C" },
      { name: "Blue/White", hex: "#3A608F" },
    ],
    sizes: ["Medium", "Large", "X-Large"],
    images: ["/images/product-checkered-shirt.png"],
    isNewArrival: true,
  },
  {
    id: "4",
    name: "SLEEVE STRIPED T-SHIRT",
    slug: "sleeve-striped-t-shirt",
    price: 130,
    originalPrice: 160,
    discountPercentage: 30,
    rating: 4.5,
    ratingCount: 92,
    description: "Athletic-inspired tee with dual retro sleeve stripes, reinforced collar, and ultra-soft feel.",
    category: "T-shirts",
    dressStyle: "Casual",
    colors: [
      { name: "Orange", hex: "#E86F3B" },
      { name: "White", hex: "#F3F3F3" },
    ],
    sizes: ["Small", "Medium", "Large"],
    images: ["/images/product-sleeve-striped-tshirt.png"],
    isNewArrival: true,
  },
  {
    id: "5",
    name: "VERTICAL STRIPED SHIRT",
    slug: "vertical-striped-shirt",
    price: 212,
    originalPrice: 232,
    discountPercentage: 20,
    rating: 5.0,
    ratingCount: 210,
    description: "Sharp vertical stripes engineered to elongate the silhouette. Lightweight linen-blend fabric perfect for warm days and evenings.",
    category: "Shirts",
    dressStyle: "Formal",
    colors: [
      { name: "Green/White", hex: "#3C6351" },
      { name: "Blue/White", hex: "#4B6B94" },
    ],
    sizes: ["Medium", "Large", "X-Large"],
    images: ["/images/product-vertical-striped-shirt.png"],
    isTopSelling: true,
  },
  {
    id: "6",
    name: "COURAGE GRAPHIC T-SHIRT",
    slug: "courage-graphic-t-shirt",
    price: 145,
    rating: 4.0,
    ratingCount: 79,
    description: "Express your bold mindset with typography print across the chest on a heavyweight drop-shoulder tee.",
    category: "T-shirts",
    dressStyle: "Casual",
    colors: [
      { name: "Orange", hex: "#E75E38" },
      { name: "Black", hex: "#111111" },
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    images: ["/images/product-courage-tshirt.png"],
    isTopSelling: true,
  },
  {
    id: "7",
    name: "LOOSE FIT BERMUDA SHORTS",
    slug: "loose-fit-bermuda-shorts",
    price: 80,
    rating: 3.0,
    ratingCount: 65,
    description: "Relaxed-cut denim bermuda shorts with raw hem styling and roomy cargo pockets for effortless summer living.",
    category: "Shorts",
    dressStyle: "Casual",
    colors: [
      { name: "Light Denim", hex: "#7E99B7" },
      { name: "Khaki", hex: "#B8A389" },
    ],
    sizes: ["Small", "Medium", "Large"],
    images: ["/images/product-bermuda-shorts.png"],
    isTopSelling: true,
  },
  {
    id: "8",
    name: "FADED SKINNY JEANS",
    slug: "faded-skinny-jeans",
    price: 210,
    rating: 4.5,
    ratingCount: 154,
    description: "Artisanal hand-faded wash with authentic whiskering details. Form-fitting skinny stretch denim.",
    category: "Jeans",
    dressStyle: "Casual",
    colors: [
      { name: "Washed Black", hex: "#2E2E33" },
      { name: "Classic Indigo", hex: "#1D2838" },
    ],
    sizes: ["Medium", "Large", "X-Large", "XX-Large"],
    images: ["/images/product-faded-jeans.png"],
    isTopSelling: true,
  },
  {
    id: "9",
    name: "ONE LIFE GRAPHIC T-SHIRT",
    slug: "one-life-graphic-t-shirt",
    price: 260,
    originalPrice: 300,
    discountPercentage: 40,
    rating: 4.5,
    ratingCount: 451,
    description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    category: "T-shirts",
    dressStyle: "Casual",
    colors: [
      { name: "Olive Green", hex: "#4F4631" },
      { name: "Navy Blue", hex: "#314F4A" },
      { name: "Dark Purple", hex: "#31344F" },
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    images: [
      "/images/product-onelife-main.png",
      "/images/product-onelife-thumb1.png",
      "/images/product-onelife-thumb2.png",
    ],
  },
  {
    id: "10",
    name: "Polo with Contrast Trims",
    slug: "polo-with-contrast-trims",
    price: 212,
    originalPrice: 242,
    discountPercentage: 20,
    rating: 4.0,
    ratingCount: 110,
    description: "A tailored pique cotton polo featuring tipped collar ribs and contrasting sleeve cuffs.",
    category: "T-shirts",
    dressStyle: "Casual",
    colors: [
      { name: "Navy/White", hex: "#1A2536" },
      { name: "White/Navy", hex: "#F5F5F7" },
    ],
    sizes: ["Small", "Medium", "Large"],
    images: ["/images/product-polo-contrast.png"],
  },
  {
    id: "11",
    name: "Gradient Graphic T-shirt",
    slug: "gradient-graphic-t-shirt",
    price: 145,
    rating: 3.5,
    ratingCount: 82,
    description: "Dynamic ombre gradient graphic print over a relaxed crew neck profile made with lightweight combed cotton.",
    category: "T-shirts",
    dressStyle: "Casual",
    colors: [
      { name: "White/Sunset", hex: "#FFFFFF" },
      { name: "Charcoal", hex: "#222222" },
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    images: ["/images/product-gradient-tshirt.png"],
  },
  {
    id: "12",
    name: "Polo with Tipping Details",
    slug: "polo-with-tipping-details",
    price: 180,
    rating: 4.5,
    ratingCount: 160,
    description: "Elevated polo shirt with clean micro-tipping details along collar and button placket.",
    category: "T-shirts",
    dressStyle: "Formal",
    colors: [
      { name: "Steel Grey", hex: "#555A63" },
      { name: "Black", hex: "#111111" },
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    images: ["/images/product-polo-tipping.png"],
  },
  {
    id: "13",
    name: "Black Striped T-shirt",
    slug: "black-striped-t-shirt",
    price: 120,
    originalPrice: 150,
    discountPercentage: 30,
    rating: 5.0,
    ratingCount: 195,
    description: "Timeless Parisian-inspired horizontal stripes on a soft breathable organic cotton tee.",
    category: "T-shirts",
    dressStyle: "Casual",
    colors: [
      { name: "Black/White", hex: "#111111" },
      { name: "White/Navy", hex: "#EAEAEA" },
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    images: ["/images/product-black-striped-tshirt.png"],
  },
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Samantha D.",
    rating: 5,
    verified: true,
    comment:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    date: "August 14, 2023",
  },
  {
    id: "r2",
    author: "Alex M.",
    rating: 4,
    verified: true,
    comment:
      "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    date: "August 15, 2023",
  },
  {
    id: "r3",
    author: "Ethan R.",
    rating: 5,
    verified: true,
    comment:
      "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    date: "August 16, 2023",
  },
  {
    id: "r4",
    author: "Olivia P.",
    rating: 4.5,
    verified: true,
    comment:
      "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
    date: "August 17, 2023",
  },
  {
    id: "r5",
    author: "Liam K.",
    rating: 5,
    verified: true,
    comment:
      "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
    date: "August 18, 2023",
  },
  {
    id: "r6",
    author: "Ava H.",
    rating: 4.5,
    verified: true,
    comment:
      "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
    date: "August 19, 2023",
  },
];

export const TESTIMONIALS = [
  {
    id: "t1",
    author: "Sarah M.",
    rating: 5,
    verified: true,
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    id: "t2",
    author: "Alex K.",
    rating: 5,
    verified: true,
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of occasions and tastes.",
  },
  {
    id: "t3",
    author: "James L.",
    rating: 5,
    verified: true,
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
];

export const DRESS_STYLES = [
  { name: "Casual", image: "/images/style-casual.png", href: "/category?style=Casual", span: "md:col-span-4" },
  { name: "Formal", image: "/images/style-formal.png", href: "/category?style=Formal", span: "md:col-span-8" },
  { name: "Party", image: "/images/style-party.png", href: "/category?style=Party", span: "md:col-span-8" },
  { name: "Gym", image: "/images/style-gym.png", href: "/category?style=Gym", span: "md:col-span-4" },
];
