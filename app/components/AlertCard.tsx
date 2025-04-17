"use client"
import { motion, HTMLMotionProps } from "framer-motion"
import { useState, useEffect } from "react"

interface AlertCardProps {
  title: string
  icon: React.ReactNode
  startCount: number
}

export default function AlertCard({ title, icon, startCount }: AlertCardProps) {
  const [count, setCount] = useState(startCount)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + Math.floor(Math.random() * 5))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      {...({
        className: "bg-white shadow-lg rounded-xl p-6 text-center border hover:shadow-xl",
        whileHover: { scale: 1.03 }
      } as HTMLMotionProps<"div">)}
    >
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <motion.p
        key={count}
        {...({
          initial: { scale: 0.8, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          className: "text-red-600 font-bold text-3xl mt-2"
        } as HTMLMotionProps<"p">)}
      >
        {count}
      </motion.p>
    </motion.div>
  )
}
