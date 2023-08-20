import todoReducer, {
  add,
  remove,
  update,
  removeAll,
  TodoState
} from './todo'

describe('Home reducer', () => {
  const state: TodoState = {
    todos: []
  }

  it('should handle initial state', () => {
    const initialState: TodoState = state
    const action = { type: 'unknown' }
    const expectedState = initialState

    expect(todoReducer(initialState, action)).toEqual(expectedState)
  })

  it('should add a todo to the list', () => {
    const initialState: TodoState = { ...state }
    const action = add({ title: 'test' })
    const finalState = todoReducer(initialState, action);
    expect(Array.isArray(finalState.todos)).toBe(true);
    expect(finalState.todos[0].title).toEqual('test');
    expect(finalState.todos[0].isDone).toEqual(false);
  })

  it('should remove a todo from the list', () => {
    const initialState: TodoState = { todos: [{ id: '123', title: 'test', isDone: false }] }
    const action = remove({ id: '123' })
    const finalState = todoReducer(initialState, action);

    expect(Array.isArray(finalState.todos)).toBe(true);
    expect(finalState.todos.length).toEqual(0)
  })

  it('should update title of a todo from the list', () => {
    const initialState: TodoState = { todos: [{ id: '123', title: 'test', isDone: false }] }
    const action = update({ id: '123', todo: { title: 'test 2', isDone: false } })
    const finalState = todoReducer(initialState, action);

    expect(finalState.todos[0].title).toEqual('test 2')
    expect(finalState.todos[0].isDone).toEqual(false)
  })

  it('should update isDone of a todo from the list', () => {
    const initialState: TodoState = { todos: [{ id: '123', title: 'test', isDone: false }] }
    const action = update({ id: '123', todo: { title: 'test', isDone: true } })
    const finalState = todoReducer(initialState, action);

    expect(finalState.todos[0].title).toEqual('test')
    expect(finalState.todos[0].isDone).toEqual(true)
  })

  it('should update isDone of a todo from the list', () => {
    const initialState: TodoState = { todos: [{ id: '1', title: 'test', isDone: false }, { id: '2', title: 'test', isDone: false }] }
    const action = removeAll()
    const finalState = todoReducer(initialState, action);

    expect(Array.isArray(finalState.todos)).toBe(true);
    expect(finalState.todos.length).toEqual(0)
  })
})