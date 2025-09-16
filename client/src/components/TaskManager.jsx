
import { useState } from 'react';
import { Plus, CheckCircle, Circle} from 'lucide-react';
export default function TaskManager() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Review document', completed: false },
    { id: 2, text: 'Send follow-up email', completed: true },
    { id: 3, text: 'Update spreadsheet', completed: false }
  ]);
  const [newTask, setNewTask] = useState('');

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { 
        id: Date.now(), 
        text: newTask.trim(), 
        completed: false 
      }]);
      setNewTask('');
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4 shadow-sm">
      <div className="flex items-center mb-3">
        <CheckCircle className="w-4 h-4 text-gray-500 mr-2" />
        <h3 className="text-sm font-medium text-gray-700">Tasks</h3>
      </div>
      
      <div className="space-y-2 mb-3">
        {tasks.map(task => (
          <div key={task.id} className="flex items-center">
            <button
              onClick={() => toggleTask(task.id)}
              className="mr-2 flex-shrink-0"
            >
              {task.completed ? (
                <CheckCircle className="w-4 h-4 text-green-500" />
              ) : (
                <Circle className="w-4 h-4 text-gray-400" />
              )}
            </button>
            <span className={`text-sm ${task.completed ? 'line-through text-gray-500' : 'text-gray-700'}`}>
              {task.text}
            </span>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Add new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
          className="flex-1 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <button
          onClick={addTask}
          className="px-2 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}