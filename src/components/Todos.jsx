import axios from 'axios';
import { useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';
import toast from 'react-hot-toast';

// type Todo = {
//   id: number;
//   userId: number;
//   title: string;
//   completed: boolean;
// };
// type TodosData = Todo[];
const Todos = () => {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);
  const [userId, setUserId] = useState(1);
  const [todosData, setTodosData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // call backend api
    // ES 6
    // fetch('http://localhost:3500/todos')
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => console.log(error));
    // ES 7
    // const getTodos = async () => {
    //   // I will make new promise here
    //   try {
    //     const res = await fetch('http://localhost:3500/todos');
    //     const data = await res.json();
    //     if (res.status === 200) {
    //       setTodosData(data);
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // getTodos();
    const getTodos = async () => {
      // I will make new promise here
      try {
        setLoading(true);
        const res = await axios.get('http://localhost:3500/todos');
        if (res.status === 200) {
          setLoading(false);
          setTodosData(res.data);
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    getTodos();
  }, []);
  const addTodo = async (e) => {
    e.preventDefault();
    const data = {
      userId,
      title,
      completed,
    };
    try {
      const res = await axios.post('http://localhost:3500/todos', data);

      if (res.status === 201) {
        toast.success('Todo Added');
        setTitle('');
        setCompleted(false);
        setUserId(1);
      }
    } catch (error) {
      toast.error('Error Occured');
      console.log(error);
    }
  };
  // const sortedTodosData = todosData?.reverse();
  // console.log(sortedTodosData);
  return (
    <section>
      {!loading && todosData.length > 0 && (
        <ul
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '80%',
            overflow: 'scroll',
          }}
        >
          {todosData.map((todo) => (
            <li key={todo.id}>
              <h2>Todo: {todo.id}</h2>
              <p>Created by User:{todo.userId}</p>
              <span>Completed: {todo.completed ? 'Done' : 'In progress'}</span>
            </li>
          ))}
        </ul>
      )}
      {loading && (
        <ColorRing
          visible={true}
          height='80'
          width='80'
          ariaLabel='color-ring-loading'
          wrapperStyle={{}}
          wrapperClass='color-ring-wrapper'
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      )}
      <form onSubmit={addTodo}>
        <div>
          <label htmlFor='todo-title'>Todo title</label>
          <input
            type='text'
            id='todo-title'
            placeholder='Enter your todo title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Completed</label>
          <input
            type='checkbox'
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
        </div>
        <div>
          <label>Created By User</label>
          <input
            type='number'
            min={1}
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <button type='submit'>Add Todo</button>
      </form>
    </section>
  );
};

export default Todos;
