export interface ServiceItem {
  id: string
  title: string
  desc: string
  imageUrl?: string
  featured?: boolean
}

export const services: ServiceItem[] = [
  {
    id: "svc-brand-kit",
    title: "Brand Kit",
    desc: "Keep everything on-brand, in one place.",
    imageUrl:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "svc-sampling",
    title: "Sampling Hub",
    desc: "Interested in a product? Try a sample.",
    imageUrl:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "svc-design",
    title: "Design Services",
    desc: "Let our experts bring your vision to life.",
    imageUrl:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "svc-logomaker",
    title: "AI Logomaker",
    desc: "Turn any idea into your dream logo for free.",
    imageUrl:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "svc-websites",
    title: "PrintMart Websites",
    desc: "Grow your business online.",
    imageUrl:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80",
  },
]
