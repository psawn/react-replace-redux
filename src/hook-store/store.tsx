import { useState, useEffect } from "react";

let globalState = {};
let listeners = [];
let actions: Record<string, any> = {};

export const useStore = () => {
  const setState = useState(globalState)[1];

  const dispatch = (actionIdentifier: string) => {
    const newState = actions[actionIdentifier](globalState);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    listeners.push(setState);

    return () => {
      // remove setState from listeners when component unmounts
      listeners = listeners.filter((li) => li !== setState);
    };
  }, [setState]);

  return [globalState, dispatch];
};

export const initStore = (
  userActions: Record<string, any>,
  initialState: any
) => {
  if (initialState) {
    globalState = { ...globalState, initialState };
  }

  actions = { ...actions, ...userActions };
};
