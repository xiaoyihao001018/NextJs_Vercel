async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 60 } // 每60秒重新验证数据
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
 
  return res.json();
}

export default async function Posts() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">博客文章列表 (SSR)</h1>
      <div className="mb-4 text-gray-600">
        这个页面使用服务器端渲染 (SSR)，每次请求都会从服务器获取最新数据
      </div>
      <div className="grid gap-4">
        {posts.slice(0, 5).map((post: any) => (
          <article key={post.id} className="p-4 border rounded-lg">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
} 