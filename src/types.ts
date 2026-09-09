export interface PropertyImage {
  id: string;
  title: string;
  category: 'all' | 'exterior' | 'local' | 'casa' | 'dormitorios' | 'cochera';
  categoryLabel: string;
  url: string;
  alt: string;
  description: string;
  widthRatio?: string;
  isFeatured?: boolean;
}

export interface PropertyFeature {
  id: string;
  title: string;
  subtitle: string;
  surface: string;
  badge: string;
  description: string;
  highlights: string[];
  imageUrl: string;
  iconName: string;
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  icon: string;
  tag?: string;
}

export interface NearbyPoint {
  id: string;
  category: 'transit' | 'commercial' | 'education' | 'health' | 'leisure';
  name: string;
  distance: string;
  time: string;
  description: string;
  icon: string;
}

export interface FaqItem {
  id: string;
  category: 'legal' | 'payment' | 'commercial' | 'house' | 'visits';
  question: string;
  answer: string;
}

export interface FloorPlanZone {
  id: string;
  name: string;
  category: 'local' | 'casa' | 'cochera' | 'patio';
  area: string;
  dimensions: string;
  details: string;
  xPercent: number;
  yPercent: number;
  image?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  preferredDate?: string;
  preferredTime?: string;
  message: string;
}
