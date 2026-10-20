import { useState } from "react"
import { motion } from "motion/react"
import {
  ExternalLink,
  Undo2,
  Redo2,
  Save,
  Upload,
  Type,
  Shapes,
  Image as ImageIcon,
  Layers,
  Rotate3d,
  ZoomIn,
  ZoomOut,
} from "lucide-react"

import studioTshirtImg from "@/assets/canvas/tshirt.png"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { cn } from "@/lib/utils"

const garmentColors = [
  { id: "black", label: "Midnight Navy", class: "bg-slate-900" },
  { id: "natural", label: "Natural Ecru", class: "bg-amber-50" },
  { id: "forest", label: "Forest Green", class: "bg-emerald-950" },
  { id: "heather", label: "Heather Stone", class: "bg-stone-300" },
]

const printTechniques = [
  { id: "screenprint", label: "Screenprint" },
  { id: "embroidery", label: "Embroidery" },
  { id: "dtf", label: "Direct-to-Film" },
  { id: "puff", label: "Puff Ink" },
]

const tools = [
  { id: "upload", label: "Upload Art", icon: Upload },
  { id: "text", label: "Text Editor", icon: Type },
  { id: "shapes", label: "Shapes", icon: Shapes },
  { id: "clipart", label: "Clipart", icon: ImageIcon },
  { id: "layers", label: "Layers (3)", icon: Layers },
]

export default function Canvase() {
  const prefersReduced = useReducedMotion()
  const [activeTool, setActiveTool] = useState("upload")
  const [activeColor, setActiveColor] = useState("black")
  const [activeTechnique, setActiveTechnique] = useState("screenprint")
  const [viewAngle, setViewAngle] = useState<"front" | "back">("front")
  const [zoomLevel, setZoomLevel] = useState(100)

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 10, 150))
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 10, 70))

  return (
    <section
      aria-labelledby="interactive-studio-heading"
      className="section-container section-gradient py-14 sm:py-20 lg:py-24 select-none"
    >
      {/* Outer Dark Hero Card */}
      <motion.div
        initial={prefersReduced ? false : { opacity: 0, y: 24 }}
        whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative w-full rounded-3xl bg-gray-800 p-6 sm:p-10 md:p-14 lg:p-20 shadow-2xl overflow-hidden flex flex-col gap-10 sm:gap-14 border border-slate-700/50"
      >
        {/* Ambient Radial Glowing Orbs */}
        <div
          className="absolute -top-32 -right-16 size-96 rounded-full bg-indigo-600/30 blur-[100px] pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-24 -left-16 size-80 rounded-full bg-violet-600/20 blur-[90px] pointer-events-none"
          aria-hidden="true"
        />

        {/* Studio Banner Header */}
        <div className="relative z-10 w-full flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <div className="flex flex-col items-start gap-2 max-w-2xl">
            <span className="text-violet-300 text-xs font-bold font-jakarta uppercase tracking-wide leading-4">
              INTERACTIVE BROWSER STUDIO
            </span>

            <h2
              id="interactive-studio-heading"
              className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold font-jakarta leading-tight sm:leading-[1.15] lg:leading-14 tracking-tight"
            >
              Your Creativity. Our Canvas.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg font-normal font-inter leading-relaxed pt-1">
              Experience our 3D design workspace. Upload your logos, tune typography,
              toggle finishes, and spin your creation in photorealistic ray-traced lighting.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-3">
              {[
                "Vector SVG & PNG",
                "Real-Time 3D Rotation",
                "Pantone Matching",
                "Pre-Flight Print Checker",
              ].map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 bg-white/10 hover:bg-white/15 backdrop-blur-sm rounded-full text-white text-xs font-bold font-jakarta tracking-wide border border-white/10 transition-colors"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Launch 3D Studio Action */}
          <div className="lg:pt-2 shrink-0">
            <button
              type="button"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-indigo-500 hover:bg-indigo-600 active:scale-95 text-white font-semibold font-jakarta text-base rounded-full shadow-lg shadow-indigo-500/25 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Launch 3D Studio</span>
              <ExternalLink className="size-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button>
          </div>
        </div>

        {/* 3D Browser Studio App Window */}
        <div className="relative z-10 w-full rounded-2xl bg-white shadow-2xl overflow-hidden flex flex-col border border-slate-200/80">
          {/* Studio Window Chrome Header */}
          <div className="px-4 py-3 bg-slate-200 border-b border-slate-300/80 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="size-3 bg-rose-400 rounded-full" />
              <div className="size-3 bg-amber-400 rounded-full" />
              <div className="size-3 bg-emerald-400 rounded-full" />
              <span className="pl-3 text-gray-700 text-xs font-bold font-jakarta tracking-wide truncate">
                Atelier Studio — Heavyweight Oversized Tee (3D Canvas)
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                aria-label="Undo"
                className="p-1.5 hover:bg-slate-300 rounded text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Undo2 className="size-3.5" />
              </button>
              <button
                type="button"
                aria-label="Redo"
                className="p-1.5 hover:bg-slate-300 rounded text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Redo2 className="size-3.5" />
              </button>
              <div className="w-px h-4 bg-slate-300 mx-1" />
              <button
                type="button"
                className="px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md flex items-center gap-1.5 text-xs font-bold font-jakarta tracking-wide shadow-sm active:scale-95 transition-all"
              >
                <Save className="size-3 text-white" />
                <span>Save Project</span>
              </button>
            </div>
          </div>

          {/* Studio Workspace Content (3 Column Grid) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 w-full min-h-120">
            {/* Left Toolbar */}
            <div className="lg:col-span-3 p-4 bg-white border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-1">
                <span className="text-gray-400 text-xs font-bold font-jakarta uppercase tracking-wide pb-1">
                  TOOLS
                </span>

                <div className="flex lg:flex-col gap-1 overflow-x-auto no-scrollbar">
                  {tools.map((tool) => {
                    const Icon = tool.icon
                    const isActive = activeTool === tool.id
                    return (
                      <button
                        key={tool.id}
                        type="button"
                        onClick={() => setActiveTool(tool.id)}
                        className={cn(
                          "px-3 py-2 rounded-lg flex items-center gap-2.5 text-xs font-semibold font-jakarta transition-all shrink-0 cursor-pointer text-left",
                          isActive
                            ? "bg-violet-100 text-indigo-600"
                            : "text-gray-900 hover:bg-gray-100"
                        )}
                      >
                        <Icon
                          className={cn(
                            "size-3.5 shrink-0",
                            isActive ? "text-indigo-600" : "text-gray-900"
                          )}
                        />
                        <span>{tool.label}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Print Safe Area Specs */}
              <div className="p-2.5 bg-gray-100 rounded-xl flex flex-col gap-0.5">
                <span className="text-gray-900 text-xs font-semibold font-jakarta leading-4 tracking-wide">
                  Print Safe Area
                </span>
                <span className="text-gray-600 text-xs font-normal font-inter leading-5">
                  300 DPI • 12&quot; × 16&quot;
                  <br />
                  Front
                </span>
              </div>
            </div>

            {/* Center 3D Interactive Viewport */}
            <div className="lg:col-span-6 relative p-6 bg-violet-50 flex items-center justify-center min-h-105 overflow-hidden">
              {/* Top View Toggle Controls */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5 z-20">
                <div className="px-2.5 py-1 bg-white rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center gap-1.5">
                  <Rotate3d className="size-3 text-indigo-600" />
                  <span className="text-gray-900 text-xs font-bold font-jakarta tracking-wide">
                    3D View Active
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setViewAngle("front")}
                  className={cn(
                    "px-2.5 py-1 rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] text-xs font-bold font-jakarta tracking-wide transition-all cursor-pointer",
                    viewAngle === "front"
                      ? "bg-white text-indigo-600 border border-indigo-200"
                      : "bg-white/80 text-gray-600 hover:text-gray-900 border border-gray-100"
                  )}
                >
                  Front
                </button>

                <button
                  type="button"
                  onClick={() => setViewAngle("back")}
                  className={cn(
                    "px-2.5 py-1 rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] text-xs font-bold font-jakarta tracking-wide transition-all cursor-pointer",
                    viewAngle === "back"
                      ? "bg-white text-indigo-600 border border-indigo-200"
                      : "bg-white/80 text-gray-600 hover:text-gray-900 border border-gray-100"
                  )}
                >
                  Back
                </button>
              </div>

              {/* T-Shirt Canvas & Print Boundary Box */}
              <div
                style={{ transform: `scale(${zoomLevel / 100})` }}
                className="relative max-w-sm w-full transition-transform duration-200 flex items-center justify-center"
              >
                <img
                  src={studioTshirtImg}
                  alt="3D Studio T-Shirt Canvas"
                  className="w-full h-auto object-contain rounded-lg shadow-[0px_20px_25px_0px_rgba(0,0,0,0.12)]"
                />

                {/* Print Placement Bounding Dimension Box */}
                <div className="absolute top-[23%] left-[32%] w-[38%] h-[36%] rounded-sm border border-dashed border-indigo-600/80 pointer-events-none flex flex-col items-center">
                  <div className="-top-3 absolute px-1.5 py-0.5 bg-indigo-600 text-white rounded-sm text-[10px] font-mono leading-none shadow-sm whitespace-nowrap">
                    11.8&quot; × 11.8&quot;
                  </div>
                </div>
              </div>

              {/* Bottom Right Zoom Controls */}
              <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border border-gray-100 p-1 flex items-center gap-1 z-20">
                <button
                  type="button"
                  onClick={handleZoomOut}
                  aria-label="Zoom out"
                  className="p-1 hover:bg-gray-100 rounded text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <ZoomOut className="size-3.5" />
                </button>
                <span className="text-gray-900 text-xs font-bold font-jakarta tracking-wide px-1">
                  {zoomLevel}%
                </span>
                <button
                  type="button"
                  onClick={handleZoomIn}
                  aria-label="Zoom in"
                  className="p-1 hover:bg-gray-100 rounded text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <ZoomIn className="size-3.5" />
                </button>
              </div>
            </div>

            {/* Right Inspector Sidebar */}
            <div className="lg:col-span-3 p-4 bg-white border-t lg:border-t-0 lg:border-l border-slate-200 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-4">
                {/* Base Garment Color */}
                <div className="flex flex-col gap-2">
                  <span className="text-gray-400 text-xs font-bold font-jakarta uppercase tracking-wide">
                    BASE GARMENT COLOR
                  </span>
                  <div className="flex items-center gap-2.5">
                    {garmentColors.map((color) => {
                      const isSelected = activeColor === color.id
                      return (
                        <button
                          key={color.id}
                          type="button"
                          onClick={() => setActiveColor(color.id)}
                          aria-label={`Select ${color.label}`}
                          className={cn(
                            "size-7 rounded-full cursor-pointer transition-transform hover:scale-110",
                            color.class,
                            isSelected &&
                              "ring-2 ring-indigo-600 ring-offset-2 ring-offset-white shadow-sm"
                          )}
                        />
                      )
                    })}
                  </div>
                </div>

                {/* Technique Selection */}
                <div className="flex flex-col gap-2">
                  <span className="text-gray-400 text-xs font-bold font-jakarta uppercase tracking-wide">
                    TECHNIQUE
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {printTechniques.map((tech) => {
                      const isSelected = activeTechnique === tech.id
                      return (
                        <button
                          key={tech.id}
                          type="button"
                          onClick={() => setActiveTechnique(tech.id)}
                          className={cn(
                            "p-2 rounded-lg text-center text-xs font-jakarta tracking-wide transition-all cursor-pointer",
                            isSelected
                              ? "bg-violet-100 text-indigo-600 font-semibold"
                              : "bg-gray-100 text-gray-600 hover:text-gray-900 font-bold hover:bg-gray-200/80"
                          )}
                        >
                          {tech.label}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Subtotal & Discount Card */}
                <div className="p-3 bg-violet-50 rounded-xl flex flex-col gap-1.5 border border-violet-100">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-xs font-bold font-jakarta tracking-wide">
                      Item Subtotal:
                    </span>
                    <span className="text-gray-900 text-xs font-bold font-jakarta tracking-wide">
                      $26.00
                    </span>
                  </div>
                  <div className="flex items-start justify-between">
                    <span className="text-gray-600 text-xs font-bold font-jakarta tracking-wide leading-tight">
                      Quantity
                      <br />
                      Discount:
                    </span>
                    <span className="text-emerald-500 text-xs font-semibold font-jakarta tracking-wide text-right leading-tight">
                      -15% (50+
                      <br />
                      units)
                    </span>
                  </div>
                </div>
              </div>

              {/* Order Proof Action */}
              <button
                type="button"
                className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white text-xs font-semibold font-jakarta rounded-xl shadow-md shadow-indigo-600/20 transition-all cursor-pointer"
              >
                Order Custom Proof
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
