import TaskBoard from "./components/board/task-board";
import Navbar from "./components/navbar/navbar";

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
