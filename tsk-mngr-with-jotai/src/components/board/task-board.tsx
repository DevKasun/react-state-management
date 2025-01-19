import { useState } from 'react';
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
	const [isAddingTaskModelOpen, setIsAddingTaskModelOpen] = useState(false);

	const openAddTaskModel = () => setIsAddingTaskModelOpen(true);
	const closeAddTaskModel = () => setIsAddingTaskModelOpen(false);

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
				<button
					onClick={openAddTaskModel}
					className='bg-navbarbg px-4 py-2 mt-8 rounded-md'
				>
					Add new
				</button>

				{isAddingTaskModelOpen ? (
					<div className='fixed top-40 left-0 right-0 mx-auto backdrop-filter backdrop-blur-sm bg-white p-8 rounded-md shadow-lg max-w-96'>
						<div></div>
					</div>
				) : null}

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
