import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources(callback: any) {
        const config: any = {
            config: {
                endpoint: 'sources'
            },
            callback
        };

        super.getResp(config);
    }

    getNews(e: any, callback: any) {
        let target = e.target;
        const newsContainer = e.currentTarget;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                const config = {
                    config: {
                        endpoint: 'everything',
                        options: {
                          sources: sourceId,
                        }
                    },
                    callback
                };

                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(config);
                }
                return;
            }
            target = target.parentNode;
        }
    }
}

export default AppController;
