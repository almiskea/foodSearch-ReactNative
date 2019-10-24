import React, {useState} from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({onTermChange, term, onTermSubmit}) => {

    return (<View style={styles.backgroundStyle}>
        <Feather 
            name="search" 
            style={styles.iconStyle}
        />
        <TextInput 
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.inputStyle}
            placeholder="Search"
            value={term}
            onChangeText={(newTerm)=> onTermChange(newTerm)}
            onEndEditing={() => onTermSubmit()}
        />
    </View>)
}

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop: 15,
        // marginBottom: 10,
        flexDirection: 'row',
    },
    inputStyle:{
        flex: 1,
        fontSize: 18
    },
    iconStyle:{
        fontSize: 30,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;