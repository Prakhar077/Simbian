import "./../styles/globals.css"

export const metadata = {
  title: "Simbian Comparison Page",
  description: "Compare security operations With vs Without Simbian",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}