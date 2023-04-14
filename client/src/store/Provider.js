import Context from './Context';
import { useStore } from './hooks';

const Provider = ({ children }) => {
    const [state, dispatch] = useStore();
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    );
};

export default Provider;
