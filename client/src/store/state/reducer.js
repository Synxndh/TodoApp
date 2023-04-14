import {
    SET_JOB,
    ADD_JOB,
    DELETE_JOB,
    UPDATE_JOB,
    SET_LOADING,
    LOAD_JOBS,
} from './constant';
import axios from 'axios';

const initState = { job: { id: '', name: '' }, jobs: [], isLoading: true };

const reducer = (state, action) => {
    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                job: {
                    id: action.payload.id
                        ? action.payload.id
                        : action.payload.id === 0
                        ? 0
                        : '',
                    name: action.payload.name,
                },
            };
        case ADD_JOB:
            const tempJobs = [...state.jobs];
            const index = state.jobs.length;
            return {
                ...state,
                jobs: [...tempJobs, { id: index, name: action.payload.name }],
            };
        case DELETE_JOB:
            const arr = [...state.jobs];
            arr.splice(action.payload, 1);
            return { ...state, jobs: [...arr] };
        case UPDATE_JOB:
            const currentIndex = parseInt(action.payload.id);
            const newJobs = [...state.jobs];
            newJobs[currentIndex].name = action.payload.name;
            return { ...state, jobs: [...newJobs] };
        case SET_LOADING:
            return { ...state, isLoading: action.payload };
        case LOAD_JOBS:
            return { ...state, jobs: action.payload };
        default:
            return 0;
    }
};

export { initState, reducer };
