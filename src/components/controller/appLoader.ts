import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '3721e8ac01f843f9bb71ac1069925492',
        });
    }
}

export default AppLoader;
