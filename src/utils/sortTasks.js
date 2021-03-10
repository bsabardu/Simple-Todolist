const sortTasks = (tasks) => (
  tasks.sort((a, b) => (b.favorite - a.favorite || b.done - a.done))
);

export default sortTasks;
