export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  icon: string;
}

export const services: Service[] = [
  {
    id: "business-website",
    title: "Business Website Development",
    shortDescription:
      "Custom-built websites designed to establish your brand online and convert visitors into customers.",
    fullDescription:
      "We build professional, high-performing websites tailored to your business goals. From company pages to complex multi-page sites, every detail is crafted to represent your brand and drive results. Our websites are built with modern technologies for speed, security, and scalability.",
    benefits: [
      "Custom design that matches your brand identity",
      "Mobile-responsive across all devices",
      "Fast loading speeds for better user experience",
      "SEO-optimized from the ground up",
      "Easy to maintain and update",
    ],
    icon: "globe",
  },
  {
    id: "website-redesign",
    title: "Website Redesign",
    shortDescription:
      "Transform your outdated website into a modern, high-performing digital experience.",
    fullDescription:
      "Is your website looking dated or underperforming? We redesign existing websites to meet modern standards — improving aesthetics, performance, and user experience while preserving your brand identity and SEO value.",
    benefits: [
      "Modern, contemporary design refresh",
      "Improved site speed and performance",
      "Better mobile experience",
      "Enhanced user journey and navigation",
      "Maintained SEO rankings during transition",
    ],
    icon: "refresh",
  },
  {
    id: "landing-page",
    title: "Landing Page Design",
    shortDescription:
      "High-converting landing pages designed to capture leads and drive specific actions.",
    fullDescription:
      "We create focused, conversion-optimized landing pages for your marketing campaigns, product launches, or lead generation efforts. Every element is strategically placed to guide visitors toward your desired action.",
    benefits: [
      "Conversion-focused design and layout",
      "A/B testing ready structure",
      "Fast load times for lower bounce rates",
      "Clear call-to-action placement",
      "Analytics integration for tracking",
    ],
    icon: "layout",
  },
  {
    id: "speed-optimization",
    title: "Website Speed Optimization",
    shortDescription:
      "Make your website lightning fast to improve user experience and search rankings.",
    fullDescription:
      "Slow websites lose visitors and rankings. We analyze your website's performance bottlenecks and implement proven optimization techniques to dramatically improve load times, Core Web Vitals, and overall user experience.",
    benefits: [
      "Faster page load times",
      "Improved Core Web Vitals scores",
      "Better search engine rankings",
      "Reduced bounce rates",
      "Enhanced user satisfaction",
    ],
    icon: "zap",
  },
  {
    id: "seo-setup",
    title: "SEO Setup",
    shortDescription:
      "Get found online with a solid SEO foundation that drives organic traffic to your website.",
    fullDescription:
      "We set up your website with comprehensive on-page SEO best practices — from meta tags and structured data to sitemap generation and search engine submission. Start ranking for the keywords that matter to your business.",
    benefits: [
      "Complete on-page SEO configuration",
      "Meta tags and structured data setup",
      "XML sitemap and robots.txt configuration",
      "Google Search Console integration",
      "Keyword-optimized content structure",
    ],
    icon: "search",
  },
  {
    id: "website-maintenance",
    title: "Website Maintenance",
    shortDescription:
      "Keep your website secure, updated, and running smoothly with ongoing maintenance support.",
    fullDescription:
      "Your website needs regular attention to stay secure and perform well. We provide ongoing maintenance services including updates, security monitoring, performance optimization, and content changes so you can focus on running your business.",
    benefits: [
      "Regular security updates and patches",
      "Performance monitoring and optimization",
      "Content updates and changes",
      "Uptime monitoring and quick issue resolution",
      "Monthly performance reports",
    ],
    icon: "shield",
  },
];
