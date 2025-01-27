import {
  DndContext,
  DragEndEvent,
  useSensor,
  useSensors,
  PointerSensor,
} from "@dnd-kit/core";
import Container from "../layout/container";
import { Task, TaskColumn as ColumnType } from "../../types";
import TaskColumn from "../task-list/task-column";
import { useTaskStore } from "../../store/taskStore";

const COLUMNS: ColumnType[] = [
  { id: "TODO", title: "To Do" },
  { id: "IN_PROGRESS", title: "In Progress" },
  { id: "DONE", title: "Done" },
];

function TaskBoard() {
  const { task: tasks, moveTask } = useTaskStore();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id as string;
    const newStatus = over.id as Task["status"];

    const task = tasks.find((t) => t.id === taskId);
    if (task?.status === newStatus) return;

    moveTask(taskId, newStatus);
  }

  return (
    <section>
      <Container>
        <div className="flex flex-col md:flex-row gap-4 py-8">
          <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
            {COLUMNS.map((column) => {
              return (
                <TaskColumn
                  key={column.id}
                  column={column}
                  tasks={tasks.filter((task) => task.status === column.id)}
                />
              );
            })}
          </DndContext>
        </div>
      </Container>
    </section>
  );
}

export default TaskBoard;
