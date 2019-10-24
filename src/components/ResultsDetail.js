import React, {useState} from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';


const ResultsDetails = ({result}) => {


    return <View style={styles.container}
    
    onPress={() => props.navigation.navigate('ResultsShow')}
    >
        <Image style={styles.imageStyle} source={{ uri: result.image_url}} />
        <Text style={styles.name}>{result.name}</Text>
        <Text >{result.rating} Starts, {result.review_count} Reviews</Text>
    </View>

}

const styles = StyleSheet.create({
    imageStyle:{
        width: 250,
        height: 120,
        borderRadius: 4
    },
    name:{
        fontWeight: 'bold',
        fontSize: 16
    },
    container:{
        marginLeft: 15
    }
});

export default ResultsDetails;