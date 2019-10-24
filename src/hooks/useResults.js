import {useState, useEffect} from 'react';
import yelp from '../api/yelp.js';


export default () => {
    const [results, setResults] = useState([]);
    const [errMsg, setErrMsg] = useState('')

    const searchApi = async (searchTerm) => {
        try{
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'hillsboro'
                }
            });
            setResults(response.data.businesses);
        }catch(e){
            setErrMsg('Something went wrong')
        }
        
    }

    useEffect(()=> {
        searchApi("pasta");
    }, [])

    return [searchApi, errMsg, results]
}
