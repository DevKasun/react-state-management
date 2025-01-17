import { useDraggable } from '@dnd-kit/core';
import { Task } from '../../types';
import { useSetAtom } from 'jotai';
import { deleteTaskAtom } from '../../store/taskStore';

interface TaskCardProps {
	task: Task;
}

function TaskCard({ task }: TaskCardProps) {
	const deleteTaskAtomFn = useSetAtom(deleteTaskAtom);

	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: task.id,
	});

	const style = transform
		? { transform: `translate(${transform.x}px, ${transform.y}px)` }
		: undefined;

	function handleDeleteTask() {
		deleteTaskAtomFn(task.id);
	}

	return (
		<div
			ref={setNodeRef}
			{...listeners}
			{...attributes}
			className='relative bg-white p-3 mb-2 rounded shadow cursor-move'
			style={style}
		>
			<span
				className='absolute text-xs right-3 cursor-pointer'
				onClick={handleDeleteTask}
			>
				❌
			</span>
			<h3 className='text-lg font-semibold'>{task.title}</h3>
			<p className='text-sm text-gray-600'>{task.description}</p>
		</div>
	);
}

export default TaskCard;
