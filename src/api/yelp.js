import axios from 'axios';

/* Client ID
jbP-h9WMwE9z7eU8XqMroQ

API Key
fRVs6Zd6DukO_i7NxN12u0qjkCAzIYIO02ewCJe3kUQUoKkQPFU33Uj2Aka9BjTxzIIhcLzz3yWDBHY7ikyP9-18rcIOHnF2baxQ4qh5-paoQA45ke9N2KON7m-dXXYx
*/

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer fRVs6Zd6DukO_i7NxN12u0qjkCAzIYIO02ewCJe3kUQUoKkQPFU33Uj2Aka9BjTxzIIhcLzz3yWDBHY7ikyP9-18rcIOHnF2baxQ4qh5-paoQA45ke9N2KON7m-dXXYx'
    }
});