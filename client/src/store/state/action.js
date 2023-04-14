import {
    SET_JOB,
    ADD_JOB,
    DELETE_JOB,
    UPDATE_JOB,
    SET_LOADING,
    LOAD_JOBS,
} from './constant';

const set_job = (payload) => {
    return { type: SET_JOB, payload };
};

const add_job = (payload) => {
    return { type: ADD_JOB, payload };
};

const delete_job = (payload) => {
    return { type: DELETE_JOB, payload };
};

const update_job = (payload) => {
    return { type: UPDATE_JOB, payload };
};

const set_loading = (payload) => {
    return { type: SET_LOADING, payload };
};

const load_jobs = (payload) => {
    return { type: LOAD_JOBS, payload };
};

export { set_job, add_job, delete_job, update_job, set_loading, load_jobs };
