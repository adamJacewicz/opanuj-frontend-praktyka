import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Todo } from '@/types/Todo.ts';
import { TrashIcon } from 'lucide-react';


export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');
  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };
  const toggleTodo = (id: Todo['id']) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };
  const removeTodo = (id: Todo['id']) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const clearTodos = () => {
    setTodos([]);
  };
  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="flex items-center mb-4">
        <Input
          type="text"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="flex-1 mr-2"
        />
        <Button onClick={addTodo}>Add</Button>
      </div>
      <div className="space-y-2">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className={`flex items-center justify-between p-3 rounded-md shadow-sm transition-colors ${
              todo.completed ? 'bg-muted text-muted-foreground line-through' : 'bg-background'
            }`}
          >
            <div className="flex items-center gap-2">
              <Checkbox checked={todo.completed} onCheckedChange={() => toggleTodo(todo.id)} />
              <span>{todo.text}</span>
            </div>
            <Button aria-label="remove-btn" className="bg-red-400 hover:bg-red-500" size="icon" onClick={() => removeTodo(todo.id)}>
              <TrashIcon className="w-5 h-5 text-black" />
            </Button>
          </div>
        ))}
      </div>
      {todos.length > 0 && (
        <div className="mt-4 flex justify-end">
          <Button variant="outline" onClick={clearTodos}>
            Clear All
          </Button>
        </div>
      )}
    </div>
  );
}


