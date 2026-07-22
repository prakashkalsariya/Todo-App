import Header from "./Header";
import TaskCard from "./TaskCard";

const TaskList = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="flex items-center flex-wrap gap-5 m-5">
        <TaskCard
          title="Complete React Assignment"
          message="Build a responsive task management dashboard using React and Tailwind CSS."
          date="22 Jul 2026"
          time="10:30 AM"
          onView={() => alert("View Task")}
          onEdit={() => alert("Edit Task")}
          onDelete={() => alert("Delete Task")}
        />
        <TaskCard
          title="Complete React Assignment"
          message="Build a responsive task management dashboard using React and Tailwind CSS."
          date="22 Jul 2026"
          time="10:30 AM"
          onView={() => alert("View Task")}
          onEdit={() => alert("Edit Task")}
          onDelete={() => alert("Delete Task")}
        />

        <TaskCard
          title="Complete React Assignment"
          message="Build a responsive task management dashboard using React and Tailwind CSS."
          date="22 Jul 2026"
          time="10:30 AM"
          onView={() => alert("View Task")}
          onEdit={() => alert("Edit Task")}
          onDelete={() => alert("Delete Task")}
        />
      </main>
    </div>
  );
};

export default TaskList;
