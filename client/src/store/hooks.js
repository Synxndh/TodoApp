import { initState, reducer } from './state/reducer';
import { useReducer } from 'react';

const useStore = () => {
    const [state, dispatch] = useReducer(reducer, initState);
    return [state, dispatch];
};

export { useStore };
