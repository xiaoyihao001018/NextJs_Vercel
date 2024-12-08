// app/users/page.tsx

interface User {
  id: number;
  name: string;
  email: string;
}

async function getUsers(): Promise<User[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    next: { 
      revalidate: 60 // 每60秒重新验证数据
    }
  });
  
  if (!res.ok) {
    throw new Error('获取用户数据失败');
  }
  
  return res.json();
}

export default async function Users() {
  const users = await getUsers();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">用户列表</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user: User) => (
          <div key={user.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}