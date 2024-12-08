'use client';

import { useState } from 'react';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export function TodoList({ initialTodos }: { initialTodos: Todo[] }) {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [newTodo, setNewTodo] = useState('');
  const [loading, setLoading] = useState(false);

  const addTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim() || loading) return;

    setLoading(true);
    try {
      const res = await fetch('/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: newTodo }),
      });

      if (!res.ok) throw new Error('添加失败');

      const todo = await res.json();
      setTodos([todo, ...todos]);
      setNewTodo('');
    } catch (error) {
      console.error('添加待办事项失败:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleTodo = async (id: number) => {
    const todo = todos.find(t => t.id === id);
    if (!todo) return;

    try {
      const res = await fetch('/api/todos', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          completed: !todo.completed
        }),
      });

      if (!res.ok) throw new Error('更新失败');

      const updatedTodo = await res.json();
      setTodos(todos.map(t => 
        t.id === id ? updatedTodo : t
      ));
    } catch (error) {
      console.error('更新待办事项失败:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">待办事项</h1>
      
      <form onSubmit={addTodo} className="mb-8">
        <div className="flex gap-2">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="添加新的待办事项..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={loading}
          />
          <button
            type="submit"
            className={`px-6 py-2 bg-blue-500 text-white rounded-lg transition-colors ${
              loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
            }`}
            disabled={loading}
          >
            {loading ? '添加中...' : '添加'}
          </button>
        </div>
      </form>

      <div className="space-y-4">
        {todos.map(todo => (
          <div
            key={todo.id}
            className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50"
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="h-5 w-5 rounded border-gray-300"
            />
            <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
              {todo.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
} 