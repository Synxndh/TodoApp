import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../store';
import {
    set_job,
    add_job,
    delete_job,
    update_job,
    set_loading,
    load_jobs,
} from '../store/state/action';
import http from '../libs/axios';

const index = () => {
    const [state, dispatch] = useContext(StoreContext);
    const [isClicked, setIsClicked] = useState(false);

    const getAllJob = async () => {
        const arrJob = await http.get('get-all');
        dispatch(load_jobs(arrJob.data));
    };
    const changeText = (value) => {
        dispatch(set_job({ id: state.job.id, name: value }));
    };
    const handleAdd = () => {
        const addJob = async () => {
            const job = await http.post('/create', { name: state.job.name });
            getAllJob();
            dispatch(set_job({ id: '', name: '' }));
        };
        addJob();
        if (isClicked) setIsClicked(!isClicked);
    };
    const handleDelete = (job) => {
        const id = job._id;
        const deleteJob = async () => {
            const job = await http.post('/delete', { id: id });
            getAllJob();
        };
        deleteJob();
    };
    const handleChoose = (job) => {
        dispatch(set_job({ id: job._id, name: job.name }));
        setIsClicked(true);
    };
    const handleUpdate = () => {
        if (isClicked) {
            const updateJob = async () => {
                const job = await http.post('/update', {
                    id: state.job.id,
                    name: state.job.name,
                });
                dispatch(set_job({ id: '', name: '' }));
                getAllJob();
                setIsClicked(false);
            };
            updateJob();
        }
    };
    useEffect(() => {
        getAllJob();
    }, []);

    return !state.jobs ? (
        <View
            style={[
                styles.wrapper,
                { justifyContent: 'center', alignItems: 'center' },
            ]}>
            <Text style={styles.loadingText}>Loading...</Text>
        </View>
    ) : (
        <View style={styles.wrapper}>
            <Text style={styles.todoListText}>Todo List</Text>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Job..."
                    value={state.job.name}
                    onChangeText={(value) => changeText(value)}
                />
                <TouchableOpacity
                    style={styles.btn}
                    activeOpacity={0.7}
                    onPress={handleAdd}>
                    <Text style={styles.btnText}>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    activeOpacity={0.7}
                    onPress={() => handleUpdate()}>
                    <Text style={styles.btnText}>Update</Text>
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {state.jobs
                    ? state.jobs.map((job, index) => {
                          return (
                              <TouchableOpacity
                                  key={index}
                                  style={[
                                      styles.container,
                                      {
                                          paddingHorizontal: 6,
                                          alignItems: 'center',
                                          height: 40,
                                      },
                                  ]}
                                  onPress={() => handleChoose(job)}>
                                  <Text>{job.name}</Text>
                                  <TouchableOpacity
                                      style={{
                                          height: '100%',
                                          justifyContent: 'center',
                                      }}
                                      onPress={() => handleDelete(job)}>
                                      <Text>Delete</Text>
                                  </TouchableOpacity>
                              </TouchableOpacity>
                          );
                      })
                    : null}
            </ScrollView>
        </View>
    );
};

export default index;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        padding: 24,
        backgroundColor: '#FFFFFF',
    },
    todoListText: {
        fontSize: 24,
        fontWeight: '700',
        color: '#000000',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 24,
    },
    input: {
        width: '45%',
        borderWidth: 1,
        borderRadius: 12,
        paddingStart: 12,
    },
    btn: {
        width: '25%',
        backgroundColor: '#4D4D4D',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
    },
    btnText: {
        fontSize: 18,
        fontWeight: '700',
        color: '#E4DCCF',
    },
    loadingText: {
        fontSize: 14,
        fontWeight: '500',
        color: 'gray',
    },
});
