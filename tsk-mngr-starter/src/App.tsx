import TaskBoard from "./components/board/TaskBoard";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="bg-pagebg min-h-screen">
        <TaskBoard />
      </main>
    </>
  );
}

export default App;

/*
import React, { useState } from 'react';
import { DndContext, DragOverlay, closestCorners } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';

const TaskBoard = () => {
  const [tasks, setTasks] = useState({
    todo: [
      { id: '1', content: 'Task 1' },
      { id: '2', content: 'Task 2' }
    ],
    inProgress: [
      { id: '3', content: 'Task 3' }
    ],
    done: [
      { id: '4', content: 'Task 4' }
    ]
  });

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    const activeContainer = findContainer(activeId);
    const overContainer = findContainer(overId);

    if (activeContainer !== overContainer) {
      setTasks(prev => {
        const activeItems = prev[activeContainer];
        const overItems = prev[overContainer];

        const activeIndex = activeItems.findIndex(item => item.id === activeId);
        const overIndex = overItems.findIndex(item => item.id === overId);

        return {
          ...prev,
          [activeContainer]: [
            ...prev[activeContainer].filter(item => item.id !== activeId)
          ],
          [overContainer]: [
            ...prev[overContainer].slice(0, overIndex),
            activeItems[activeIndex],
            ...prev[overContainer].slice(overIndex)
          ]
        };
      });
    }
  };

  const findContainer = (id) => {
    if (tasks.todo.find(task => task.id === id)) return 'todo';
    if (tasks.inProgress.find(task => task.id === id)) return 'inProgress';
    if (tasks.done.find(task => task.id === id)) return 'done';
    return null;
  };

  return (
    <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
      <div className="flex gap-4">
        <Column title="To Do" tasks={tasks.todo} id="todo" />
        <Column title="In Progress" tasks={tasks.inProgress} id="inProgress" />
        <Column title="Done" tasks={tasks.done} id="done" />
      </div>
    </DndContext>
  );
};

const Column = ({ title, tasks, id }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg w-80">
      <h2 className="font-bold mb-4">{title}</h2>
      <SortableContext items={tasks.map(task => task.id)}>
        {tasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </SortableContext>
    </div>
  );
};

const Task = ({ task }) => {
  return (
    <div className="bg-white p-3 mb-2 rounded shadow cursor-move">
      {task.content}
    </div>
  );
};

export default TaskBoard;

*/
