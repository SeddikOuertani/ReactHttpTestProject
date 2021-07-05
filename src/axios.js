import axios from "axios";

const instance = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com',

})

instance.defaults.headers.common['Aauthorization'] = 'AUTH TOKEN FROM INSTANCE';

// instance.interceptors.request...
export default instance;

/*instance overrides the default axios imported and overrides
the changed properties while keeping the old ones intact
which makes us be able to create our own custom instances
of axios and use them according to our needs in any given
component*/