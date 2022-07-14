import { createContext, useState } from "react";
import Form from "./components/form/Form";
import List from "./components/list/List";

interface Task {
  id: number;
  title: string;
  description: string;
}

interface Context {
  tasks: Task[];
  addTask(task: Task): void;
  removeTask(id: Number): void;
}

export const AppContext = createContext<Context>({
  tasks: [] as Task[],
  addTask: (task: Task) => {},
  removeTask: (id: Number) => {},
});

function App() {
  const [tasks, setTasks] = useState<Array<Task>>([
    {
      id: 1,
      title: "title1",
      description: "description1",
    },
  ]);

  const sampleContext: Context = {
    tasks,
    addTask: (task: Task) => {
      setTasks([...tasks, task]);
    },
    removeTask: (id: Number) => {
      setTasks(tasks.filter((task) => task.id !== id));
    },
  };

  return (
    <AppContext.Provider value={sampleContext}>
      <div className="App">
        <div>
          <Form />
        </div>
      </div>
      <List />
    </AppContext.Provider>
  );
}

export default App;
