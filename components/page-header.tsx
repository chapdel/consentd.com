import type { ReactNode } from "react"

interface PageHeaderProps {
  title: string
  subtitle?: string
  children?: ReactNode
}

export default function PageHeader({ title, subtitle, children }: PageHeaderProps) {
  return (
    <div className="bg-gray-50 section-padding">
      <div className="container mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-navy-900 mb-4 text-wrap">{title}</h1>
        {subtitle && (
          <p className="text-lg sm:text-xl text-center text-navy-600 max-w-3xl mx-auto mb-8 text-wrap">{subtitle}</p>
        )}
        {children}
      </div>
    </div>
  )
}

