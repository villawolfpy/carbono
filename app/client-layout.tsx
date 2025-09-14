"use client"

import { Suspense } from "react"
import dynamic from "next/dynamic"

const Providers = dynamic(() => import("./providers"), {
  ssr: false,
  loading: () => null,
})

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={null}>
      <Providers>{children}</Providers>
    </Suspense>
  )
}