import { NextResponse } from 'next/server';

// 模拟数据库数据
const todos = [
  { id: 1, title: '学习 Next.js', completed: false },
  { id: 2, title: '理解 SSR', completed: true },
  { id: 3, title: '掌握 API Routes', completed: false },
];

export async function GET(request: Request) {
  // 获取 URL 中的查询参数
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get('limit');
  
  // 如果有 limit 参数，返回限制数量的数据
  const data = limit ? todos.slice(0, Number(limit)) : todos;
  
  // 模拟服务器延迟
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // 返回数据
  return NextResponse.json(data);
}

// 处理添加新待办事项的请求
export async function POST(request: Request) {
  const body = await request.json();
  
  const newTodo = {
    id: Date.now(),
    title: body.title,
    completed: false
  };
  
  todos.push(newTodo);
  
  return NextResponse.json(newTodo);
}

// 处理更新待办事项状态的请求
export async function PUT(request: Request) {
  const body = await request.json();
  const todoIndex = todos.findIndex(todo => todo.id === body.id);
  
  if (todoIndex === -1) {
    return NextResponse.json(
      { error: '待办事项不存在' },
      { status: 404 }
    );
  }
  
  todos[todoIndex] = { ...todos[todoIndex], ...body };
  
  return NextResponse.json(todos[todoIndex]);
} 