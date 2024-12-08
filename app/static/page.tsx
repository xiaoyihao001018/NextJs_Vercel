export default function Static() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">静态页面 (SSG)</h1>
      <div className="mb-4 text-gray-600">
        这个页面使用静态生成 (SSG)，内容在构建时生成，访问时直接返回
      </div>
      <div className="p-4 border rounded-lg">
        <h2 className="text-xl font-semibold mb-2">静态内容示例</h2>
        <p className="text-gray-600">
          这是一个静态生成的内容。无论你什么时候访问这个页面，这段文字都是一样的，
          因为它是在构建时就已经生成好的。这种方式适合那些不经常变化的内容，
          比如博客文章、产品描述等。
        </p>
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <p className="text-sm">构建时间: {new Date().toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
} 