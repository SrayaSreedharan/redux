REDUX
Redux is a state management library for JavaScript apps, commonly used with React. It helps manage the state of your application in a single centralized store, making it easier to debug, test, and share data across components.

🔄 What Redux Does:
Instead of passing data through props (which gets messy as your app grows), Redux allows any component to access the state it needs — from one global store.

1:Store – The central place where the entire state of your app lives.

2:Action – A plain JS object that describes what happened (e.g., { type: 'INCREMENT' }).

3:Reducer – A function that determines how the state should change in response to an action.

4:Dispatch – Sends an action to the reducer.

5:useSelector – Hook to access data from the store.

6:useDispatch – Hook to dispatch actions.


🧱 Redux Setup Steps in React:

✅ 1. Install Redux and React-Redux:
          npm install redux react-redux
          
✅ 2. Create Actions:

        // actions/counterActions.js
        export const increment = () => ({ type: 'INCREMENT' });
        export const decrement = () => ({ type: 'DECREMENT' });
        
✅ 3. Create Reducer:
      // reducers/counterReducer.js
      const initialState = { count: 0 };

    export const counterReducer = (state = initialState, action) => {
      switch (action.type) {
        case 'INCREMENT':
          return { count: state.count + 1 };
        case 'DECREMENT':
          return { count: state.count - 1 };
        default:
          return state;
      }
    };
✅ 4. Create Store:

      // store.js
      import { createStore } from 'redux';
      import { counterReducer } from './reducers/counterReducer';

      export const store = createStore(counterReducer);
      
✅ 5. Wrap App with Provider:

      // index.js or App.js
      import React from 'react';
      import ReactDOM from 'react-dom';
      import { Provider } from 'react-redux';
      import { store } from './store';
      import App from './App';
      
      ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.getElementById('root')
      );
      
✅ 6. Use Redux in Components:

      // CounterComponent.js
      import React from 'react';
      import { useDispatch, useSelector } from 'react-redux';
      import { increment, decrement } from './actions/counterActions';
      
      const CounterComponent = () => {
        const count = useSelector(state => state.count);
        const dispatch = useDispatch();
      
        return (
          <div>
            <h2>Count: {count}</h2>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
          </div>
        );
      };
      
      export default CounterComponent;
