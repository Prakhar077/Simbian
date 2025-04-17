"use client"
import { motion, HTMLMotionProps } from "framer-motion"
import AlertCard from "./AlertCard"
import { FaCheckCircle } from "react-icons/fa"

// Steps for the "With Simbian" section
const steps = [
  "Triaged & Reported",
  "Automated Response",
  "Comprehensive Analysis",
  "Accurate Detection",
  "24/7 Coverage"
]

// Correctly typed motion.div for HTMLDivElement
const MotionDiv = motion.div as React.FC<React.HTMLProps<HTMLDivElement> & HTMLMotionProps<"div">>;

export default function SectionWithSimbian() {
  return (
    <section className="py-16 px-4 bg-[#001861]">
      <h2 className="text-2xl font-bold text-center text-green-700 mb-8">🟢 With Simbian</h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-5xl mx-auto">
        {steps.map((step, i) => (
          <MotionDiv
            key={step}
            className="bg-white border rounded-lg p-4 shadow-md text-center w-48"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.3 }}
          >
            <p className="text-sm font-medium">{step}</p>
          </MotionDiv>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
        <AlertCard title="Ignored Alerts" icon={<FaCheckCircle />} startCount={0} />
        <AlertCard title="Wrongly Closed Alerts" icon={<FaCheckCircle />} startCount={0} />
        <AlertCard title="Active Threats" icon={<FaCheckCircle />} startCount={0} />
      </div>

      <div className="text-center mt-6 text-sm text-white">
        <p>✅ 90% of alerts resolved automatically, 24/7</p>
        <p>✅ Correlates alerts to your environment</p>
        <p>✅ Investigate every alert—no SOAR needed</p>
      </div>
    </section>
  )
}
