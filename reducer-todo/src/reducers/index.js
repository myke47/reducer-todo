



export const initialState = {
  todos: [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589
    }
  ]
};

export const reducer = (state, action) => {
  const newTodo = {
    item: "",
    id: Date.now();
    completed: false
  };
  return {
    todos: [newTodo]
  };
}