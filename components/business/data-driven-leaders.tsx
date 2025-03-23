"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Brain, ShoppingCart, BarChart } from "lucide-react"

export default function DataDrivenLeaders() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const useCases = [
    {
      icon: <Brain className="h-12 w-12 text-white" />,
      title: "AI & ML Teams",
      description: "Train better models with ethically sourced, diverse datasets.",
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-700",
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-white" />,
      title: "E-commerce & AdTech",
      description: "Drive hyper-personalized recommendations without violating user trust.",
      bgColor: "bg-gradient-to-br from-turquoise-500 to-turquoise-700",
    },
    {
      icon: <BarChart className="h-12 w-12 text-white" />,
      title: "Finance & Health Analytics",
      description: "Tap into privacy-first consumer insights while staying fully compliant.",
      bgColor: "bg-gradient-to-br from-navy-700 to-navy-900",
    },
  ]

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center text-navy-900 mb-6"
        >
          Built for Data-Driven Leaders
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`${useCase.bgColor} rounded-lg p-8 text-white shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="mb-6">{useCase.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{useCase.title}</h3>
              <p className="text-white/90">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

