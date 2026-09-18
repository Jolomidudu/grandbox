export type Category = {
  id: string;
  name: string;
  image: string;
  slug: string;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  currency: string;
  rating: number;
  reviews: number;
  image: string;
  images?: string[];
  category: string;
  description: string;
  isCustom?: boolean;
  tags?: string[];
};

export type Tailor = {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  image: string;
  location: string;
  experience: string;
};

export const categories: Category[] = [
  {
    id: "1",
    name: "Men's Wear",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=200&h=200&fit=crop",
    slug: "mens-wear",
  },
  {
    id: "2",
    name: "Women's Wear",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=200&fit=crop",
    slug: "womens-wear",
  },
  {
    id: "3",
    name: "Traditional Attire",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=200&h=200&fit=crop",
    slug: "traditional",
  },
  {
    id: "4",
    name: "Fabrics",
    image: "https://images.unsplash.com/photo-1558171813-4c088a505948?w=200&h=200&fit=crop",
    slug: "fabrics",
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Men's Suit",
    price: 85000,
    currency: "₦",
    rating: 4.8,
    reviews: 120,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop",
    category: "mens-wear",
    description: "Classic tailored suit for business and formal occasions.",
    isCustom: true,
  },
  {
    id: "2",
    name: "Evening Gown",
    price: 72000,
    currency: "₦",
    rating: 4.7,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=500&fit=crop",
    category: "womens-wear",
    description: "Elegant evening gown perfect for special events.",
  },
  {
    id: "3",
    name: "Agbada",
    price: 95000,
    currency: "₦",
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=500&fit=crop",
    category: "traditional",
    description: "Premium traditional Agbada for cultural celebrations.",
    isCustom: true,
  },
  {
    id: "4",
    name: "Men's Custom Suit",
    price: 85000,
    currency: "₦",
    rating: 4.8,
    reviews: 120,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=700&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=700&fit=crop",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=700&fit=crop",
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&h=700&fit=crop",
    ],
    category: "mens-wear",
    description:
      "Perfectly tailored suit for business, weddings and special occasions. Choose your fabric, style and fit.",
    isCustom: true,
    tags: ["Custom Fit & Style", "Premium Fabrics", "2-3 Weeks Delivery", "Free Measurements"],
  },
  {
    id: "5",
    name: "Women's Ankara Dress",
    price: 45000,
    currency: "₦",
    rating: 4.6,
    reviews: 87,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop",
    category: "womens-wear",
    description: "Beautiful Ankara print dress, ready-to-wear or custom.",
  },
  {
    id: "6",
    name: "Senator Style",
    price: 68000,
    currency: "₦",
    rating: 4.8,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=400&h=500&fit=crop",
    category: "traditional",
    description: "Modern senator attire with premium fabric options.",
    isCustom: true,
  },
];

export const tailors: Tailor[] = [
  {
    id: "1",
    name: "Chidi Okonkwo",
    specialty: "Men's Suits & Formal Wear",
    rating: 4.9,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    location: "Lagos, Nigeria",
    experience: "12 years",
  },
  {
    id: "2",
    name: "Amina Bello",
    specialty: "Women's Fashion & Bridal",
    rating: 4.8,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    location: "Abuja, Nigeria",
    experience: "8 years",
  },
  {
    id: "3",
    name: "Emeka Nwosu",
    specialty: "Traditional Attire",
    rating: 4.9,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    location: "Enugu, Nigeria",
    experience: "15 years",
  },
];

export function formatPrice(price: number, currency = "₦") {
  return `${currency}${price.toLocaleString()}`;
}

export function getProductById(id: string) {
  return products.find((p) => p.id === id);
}
