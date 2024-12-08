import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">
          欢迎来到 Next.js SSR Demo
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          这是一个展示 Next.js 服务端渲染最佳实践的示例项目
        </p>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">主要特性：</h2>
          <ul className="text-left space-y-2">
            <li>✅ 服务端渲染 (SSR)</li>
            <li>✅ 增量静态再生成 (ISR)</li>
            <li>✅ TypeScript 类型安全</li>
            <li>✅ 响应式设计</li>
            <li>✅ 现代化 UI/UX</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
