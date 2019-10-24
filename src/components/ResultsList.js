import React, {useState} from 'react';
import { StyleSheet, FlatList, Text, View, TouchableOpacity } from 'react-native';
import ResultsDetail from './ResultsDetail.js';
import {withNavigation} from 'react-navigation';

const ResultsList = ({navigation, title, results}) => {
    return <View style={styles.container} >
        <Text style={styles.titleStyle}>{title}</Text>
        <FlatList 
            showsHorizontalScrollIndicator={false}
            horizontal
            data={results}
            keyExtractor={(results)=> results.id}
            renderItem={({item}) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', {id: item.id})}> 
                        <ResultsDetail navigation={navigation} result={item} />
                    </TouchableOpacity>
                )
            }}
        />
    </View>
}
const styles = StyleSheet.create({
    titleStyle:{
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container:{
        marginBottom: 18
    }
});

export default withNavigation(ResultsList);