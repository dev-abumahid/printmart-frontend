import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { ThemeProvider } from "@/components/theme-provider.tsx"
import { RouterProvider } from "react-router"
import "./index.css"
import { mainRouter } from "./routes/main-router"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system">
      <RouterProvider router={mainRouter} />
    </ThemeProvider>
  </StrictMode>
)
