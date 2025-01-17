import {
	DndContext,
	DragEndEvent,
	useSensor,
	useSensors,
	PointerSensor,
} from '@dnd-kit/core';
import Container from '../layout/container';
import { Task, TaskColumn as ColumnType } from '../../types';
import TaskColumn from '../task-list/task-column';
import { useAtom, useSetAtom } from 'jotai';
import { taskAtoms, moveTaskAtom } from '../../store/taskStore';

const COLUMNS: ColumnType[] = [
	{ id: 'TODO', title: 'To Do' },
	{ id: 'IN_PROGRESS', title: 'In Progress' },
	{ id: 'DONE', title: 'Done' },
];

function TaskBoard() {
	const [tasks] = useAtom(taskAtoms);
	const moveTaskAtomFn = useSetAtom(moveTaskAtom);

	const sensors = useSensors(
		useSensor(PointerSensor, {
			activationConstraint: {
				distance: 8,
			},
		})
	);

	function handleDragEnd(event: DragEndEvent) {
		const { active, over } = event;

		if (!over) return;

		const taskId = active.id as string;
		const newStatus = over.id as Task['status'];

		const task = tasks.find((t) => t.id === taskId);
		if (task?.status === newStatus) return;

		moveTaskAtomFn({ taskId, newStatus });
	}

	return (
		<section>
			<Container>
				<div className='flex flex-col md:flex-row gap-8 py-8'>
					<DndContext sensors={sensors} onDragEnd={handleDragEnd}>
						{COLUMNS.map((column) => {
							return (
								<TaskColumn
									key={column.id}
									column={column}
									tasks={tasks.filter(
										(task) => task.status === column.id
									)}
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
