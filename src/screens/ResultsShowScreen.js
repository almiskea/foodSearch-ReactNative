import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import yelp from '../api/yelp.js';

import useResults from '../hooks/useResults.js';

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResults = async (id) =>{
        const response = await yelp.get(`/${id}`)
        setResult(response.data);
    }

    useEffect(()=>{
        getResults(id);
    }, []);

    if(!result){
        return null;
    }
    return (<View style={{flex:1}}>
      <Text>{result.name}</Text>
      <FlatList 
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({item})=>{
            return <Image style={styles.image} source={{ uri: item}}/>
        }}
      />
    </View>)
}

const styles = StyleSheet.create({
    image:{
        width: 250,
        height: 120,
        marginBottom: 10
    }
});

export default ResultsShowScreen;