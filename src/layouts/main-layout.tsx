import { useEffect } from "react"
import { Outlet } from "react-router"
import Lenis from "lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Navbar } from "@/components/shared/Navbar/Navbar"
import Footer from "@/components/shared/Footer"

gsap.registerPlugin(ScrollTrigger)

const MainLayout = () => {
  useEffect(() => {
    // Respect user's reduced motion preferences
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 1.5,
    })

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update)

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(updateLenis)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(updateLenis)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="min-h-screen bg-transparent text-foreground antialiased selection:bg-emerald-500/15 selection:text-emerald-700">
      <Navbar/>
      <Outlet />
      <Footer/>
    </div>
  )
}

export default MainLayout
