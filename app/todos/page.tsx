import { TodoList } from './components/TodoList';

// 服务端数据获取
async function getTodos() {
  const res = await fetch('http://localhost:3000/api/todos?limit=5', {
    next: { revalidate: 60 }
  });
  
  if (!res.ok) {
    throw new Error('获取待办事项失败');
  }
  
  return res.json();
}

// 服务端页面组件
export default async function TodoPage() {
  const initialTodos = await getTodos();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <TodoList initialTodos={initialTodos} />
    </div>
  );
} 