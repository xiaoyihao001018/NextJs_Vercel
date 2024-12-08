import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next.js SSR Demo',
  description: 'Next.js SSR 最佳实践演示',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        <nav className="bg-gray-800 text-white">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold">Next.js SSR Demo</h1>
              <div className="space-x-4">
                <Link href="/" className="hover:text-gray-300">首页</Link>
                <Link href="/users" className="hover:text-gray-300">用户列表</Link>
                <Link href="/todos" className="hover:text-gray-300">待办事项</Link>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}
