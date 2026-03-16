export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    role: "Founder",
    company: "Bloom & Grow Studio",
    content:
      "Tek Dünyası transformed our online presence completely. Our new website is fast, beautiful, and our customers love it. We've seen a 40% increase in online inquiries since launch.",
    avatar: "SM",
  },
  {
    name: "David Chen",
    role: "Managing Director",
    company: "Atlas Property Group",
    content:
      "Professional, responsive, and incredibly talented. The team delivered a website that perfectly represents our brand. The attention to detail and communication throughout the process was outstanding.",
    avatar: "DC",
  },
  {
    name: "Emily Rodriguez",
    role: "Owner",
    company: "Savory Kitchen",
    content:
      "Working with Tek Dünyası was a game-changer for our restaurant. The website they built is stunning, loads instantly, and has significantly improved our reservation bookings.",
    avatar: "ER",
  },
];
