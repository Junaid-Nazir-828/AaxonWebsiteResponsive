import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
    apiKey: 'AIzaSyAsTMKgKj_G6RmQvTe0RHeWSihkLWLMibk',
    version: 'weekly',
    libraries: ['places'],
  });
  export default loader;