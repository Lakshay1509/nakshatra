import { AnimatedTestimonials } from "./Testimonial"

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "This platform helped me detect early signs of vocal strain and provided the right exercises to recover. A lifesaver for my voice!",
      name: "Sarah Chen",
      designation: "Professional Singer",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "As a public speaker, my voice is my biggest asset. This tool helps me monitor my vocal health and maintain peak performance!",
      name: "Michael Rodriguez",
      designation: "Motivational Speaker",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "I was struggling with vocal fatigue after long hours of teaching. Thanks to this platform, I now follow a customized routine that keeps my voice strong.",
      name: "Emily Watson",
      designation: "Online Educator",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: 
        "I never realized how important vocal care was until I started experiencing strain. This app made all the difference in my recovery!",
      name: "James Kim",
      designation: "Podcast Host",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The AI-powered voice analysis is incredible! It helped me identify small issues before they became major problems.",
      name: "Lisa Thompson",
      designation: "Voice-over Artist",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]
  return <AnimatedTestimonials testimonials={testimonials} />
}

