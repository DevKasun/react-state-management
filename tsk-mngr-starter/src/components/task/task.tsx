interface TaskProps {
  id: number;
  title: string;
  status: string;
}

function Task({ id, title, status }: TaskProps) {
  return (
    <div className="bg-white p-3 mb-2 rounded shadow cursor-move">
      {id} | {title} | {status}
    </div>
  );
}

export default Task;
