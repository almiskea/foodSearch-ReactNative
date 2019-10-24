import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar.js';
import ResultsList from '../components/ResultsList.js';
import useResults from '../hooks/useResults.js';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, errMsg, results] = useResults();

    const filterResultsByPrice = (price) =>{
        //$ || $$ || $$$
        return results.filter((results) => {
            return results.price == price;
        })
    }

    return (<View style={{flex:1}}>
        <SearchBar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmit={()=> searchApi(term)}
        />
        <Text>{errMsg? errMsg : ""}</Text>
        <Text>{term}</Text>
        {/* <Text>we have found {results.length} results</Text> */}
        <ScrollView>
            <ResultsList title="Cost Effective" results={filterResultsByPrice('$')}/>
            <ResultsList title="Bit Pricier"    results={filterResultsByPrice('$$')}/>
            <ResultsList title="Big Spender"    results={filterResultsByPrice('$$$')}/>
        </ScrollView>
    </View>)
}

const styles = StyleSheet.create({});

export default SearchScreen;