import { Roboto } from 'next/font/google'
import './globals.css'

const inter = Roboto({weight:'400', subsets: ['latin'] })

export const metadata = {
  title: 'Learn key life lessions from the Gita: Mind Control and conflict resolution',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
