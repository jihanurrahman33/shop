export interface Review {
  id: string;
  author: string;
  rating: number;
  verified: boolean;
  comment: string;
  date: string;
}

export interface Testimonial {
  id: string;
  author: string;
  rating: number;
  verified: boolean;
  text: string;
}
