





export const reducer = (state, action) => {
  const newTodo = {
    item: ""
    id: Date.now();
  };
  return {
    todos: [newTodo]
  };
}