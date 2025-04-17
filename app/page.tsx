import SectionWithoutSimbian from "./components/SectionWithoutSimbian"
import SectionWithSimbian from "./components/SectionWithSimbian"

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#001861] text-gray-900">
      <h1 className="text-4xl text-center font-bold py-10 text-white">Security Operations Experience</h1>
      <SectionWithoutSimbian />
      <SectionWithSimbian />
    </main>
  )
}