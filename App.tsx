import React from 'react';
import { StatusBar, Text, View, SafeAreaView } from 'react-native';

const App = () => {
    return (
        <SafeAreaView>
            <View className='px-4 bg-pink-400'>
                <Text className="text-xl">Try editing me! 🎉</Text>
                <StatusBar/>
            </View>
        </SafeAreaView>
    );
};

export default App;
