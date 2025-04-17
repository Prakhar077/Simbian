"use client"

import AlertCard from "./AlertCard"
import { FaExclamationTriangle, FaBan, FaBug } from "react-icons/fa"
import { useEffect, useState } from "react"
import { motion, HTMLMotionProps } from "framer-motion"

// Dummy alerts for simulation
const dummyAlerts = ["Phishing Email", "Suspicious Login", "Malware Detected", "DDoS Attempt"]

// Correctly typed motion.li for HTMLLIElement
const MotionLi = motion.li as React.FC<React.HTMLProps<HTMLLIElement> & HTMLMotionProps<"li">>;

export default function SectionWithoutSimbian() {
  const [alerts, setAlerts] = useState<string[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      const random = dummyAlerts[Math.floor(Math.random() * dummyAlerts.length)]
      setAlerts(prev => [random, ...prev.slice(0, 4)])
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-12 px-4 bg-[#001861]">
      <h2 className="text-2xl font-bold text-center text-red-700 mb-8">🔴 Without Simbian</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <AlertCard title="Ignored Alerts" icon={<FaExclamationTriangle />} startCount={200} />
        <AlertCard title="Wrongly Closed Alerts" icon={<FaBan />} startCount={35} />
        <AlertCard title="Active Threats" icon={<FaBug />} startCount={5} />
      </div>

      <div className="mt-10 max-w-xl mx-auto">
        <h3 className="text-center font-semibold text-lg mb-4 text-white">Incoming Alerts</h3>
        <ul className="space-y-2">
          {alerts.map((alert, idx) => (
            <MotionLi
              key={alert + idx}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="bg-white rounded-lg shadow p-3 border-l-4 border-red-500"
            >
              ⚠️ {alert}
            </MotionLi>
          ))}
        </ul>
      </div>
    </section>
  )
}
