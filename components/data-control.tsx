"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function DataControl() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-navy-900 mb-6"
            >
              Stay in control of your Data Online
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-navy-600 mb-6"
            >
              Powered by our proprietary 'Data DNA' technology, Consentd enables you to identify, track, and control
              access to your data across the internet. Our platform provides a seamless way to encrypt personal
              information, manage consent, and earn passive income from data sharing—on their own terms.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                href="/solution"
                className="inline-flex items-center text-turquoise-500 font-medium hover:text-turquoise-600 transition-colors group"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[400px] bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full p-8">
                  {/* Data DNA Visualization */}
                  <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Double Helix Structure */}
                    <motion.path
                      d="M50,150 C100,100 150,200 200,150 C250,100 300,200 350,150"
                      stroke="#1DB48C"
                      strokeWidth="3"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                      transition={{ duration: 2, delay: 0.5 }}
                    />
                    <motion.path
                      d="M50,150 C100,200 150,100 200,150 C250,200 300,100 350,150"
                      stroke="#1A3A5F"
                      strokeWidth="3"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                      transition={{ duration: 2, delay: 0.5 }}
                    />

                    {/* Data Nodes */}
                    {[1, 2, 3, 4, 5].map((i) => (
                      <motion.circle
                        key={`top-${i}`}
                        cx={50 + (i - 1) * 75}
                        cy={150 - (i % 2 === 0 ? 50 : 0)}
                        r="8"
                        fill="#1DB48C"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={inView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                      />
                    ))}

                    {[1, 2, 3, 4, 5].map((i) => (
                      <motion.circle
                        key={`bottom-${i}`}
                        cx={50 + (i - 1) * 75}
                        cy={150 + (i % 2 === 0 ? 0 : 50)}
                        r="8"
                        fill="#1A3A5F"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={inView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                      />
                    ))}

                    {/* Connecting Lines */}
                    {[1, 2, 3, 4, 5].map((i) => (
                      <motion.line
                        key={`line-${i}`}
                        x1={50 + (i - 1) * 75}
                        y1={150 - (i % 2 === 0 ? 50 : 0)}
                        x2={50 + (i - 1) * 75}
                        y2={150 + (i % 2 === 0 ? 0 : 50)}
                        stroke="#CCCCCC"
                        strokeWidth="2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={inView ? { pathLength: 1, opacity: 0.5 } : {}}
                        transition={{ duration: 0.6, delay: 1 + i * 0.1 }}
                      />
                    ))}
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent h-20"></div>
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-white to-transparent h-20"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

