import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { StoreProvider } from './src/store';
import Main from './src/app';

const App = () => {
    return (
        <StoreProvider>
            <Main />
        </StoreProvider>
    );
};

export default App;

const styles = StyleSheet.create({});
