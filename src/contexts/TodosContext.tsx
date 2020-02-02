import React, { createContext, Dispatch, useReducer, useContext } from "react";
import { ABCDETodo, numberWithEmptyString } from "../models/Todo";

type ABCDETodosState = ABCDETodo[];

const ABCDETodosStateContext = createContext<ABCDETodosState | undefined>(
  undefined
);

type Action =
  | { type: "CREATE"; text: string }
  | { type: "TOGGLE"; id: number }
  | { type: "REMOVE"; id: number }
  | { type: "UPDATELETTER"; id: number; value: string }
  | { type: "UPDATENUMBER"; id: number; value: numberWithEmptyString };

type ABCDETodosDispatch = Dispatch<Action>;

const ABCDETodosDispatchContext = createContext<ABCDETodosDispatch | undefined>(
  undefined
);

function todosReducer(state: ABCDETodosState, action: Action): ABCDETodosState {
  switch (action.type) {
    case "CREATE":
      const nextId = Math.max(0, ...state.map(todo => todo.id)) + 1;
      return state.concat({
        id: nextId,
        text: action.text,
        isDone: false,
        importanceLetter: "",
        importanceNumber: ""
      });

    case "TOGGLE":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.isDone } : todo
      );

    case "REMOVE":
      return state.filter(todo => todo.id !== action.id);

    case "UPDATELETTER":
      return state.map(todo =>
        todo.id === action.id
          ? { ...todo, importanceLetter: action.value }
          : todo
      );

    case "UPDATENUMBER":
      return state.map(todo =>
        todo.id === action.id
          ? { ...todo, importanceNumber: action.value }
          : todo
      );

    default:
      throw new Error("Unhandled action");
  }
}

export function TodosContextProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [todos, dispatch] = useReducer(todosReducer, [
    
  ]);

  return (
    <ABCDETodosDispatchContext.Provider value={dispatch}>
      <ABCDETodosStateContext.Provider value={todos}>
        {children}
      </ABCDETodosStateContext.Provider>
    </ABCDETodosDispatchContext.Provider>
  );
}

export function useABCDETodosState() {
  const state = useContext(ABCDETodosStateContext);
  if (!state) throw new Error("TodoProvider not found");
  return state;
}

export function useABCDETodosDispatch() {
  const dispatch = useContext(ABCDETodosDispatchContext);
  if (!dispatch) throw new Error("TodoProvider not found");
  return dispatch;
}
