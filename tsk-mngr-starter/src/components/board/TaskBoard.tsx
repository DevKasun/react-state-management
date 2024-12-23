import Container from "../layout/Container";

function TaskBoard() {
  return (
    <section>
      <Container>
        <div className="flex flex-col md:flex-row gap-4 py-8">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4">To Do</h2>
            <div className="bg-white p-3 mb-2 rounded shadow cursor-move">
              Task 1
            </div>
            <div className="bg-white p-3 mb-2 rounded shadow cursor-move">
              Task 2
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4">In Progress</h2>
            <div className="bg-white p-3 mb-2 rounded shadow cursor-move">
              Task 3
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4">Done</h2>
            <div className="bg-white p-3 mb-2 rounded shadow cursor-move">
              Task 4
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default TaskBoard;
