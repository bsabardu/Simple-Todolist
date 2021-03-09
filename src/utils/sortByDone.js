const sortTasks = (tasks) => (
  tasks.sort((a, b) => (b.done - a.done))
);

export default sortTasks;
