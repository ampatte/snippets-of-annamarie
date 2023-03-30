const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
    //[::1]isthe IPv6 localhost
    window.location.hostname === '[::1]' ||
    //127.0.0.0/8 localhost for IPv4
    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
);

export function register(config) {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
        //the URL constructor is available in all browers taht suport SW
        const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
        if (publicUrl.origin !== window.location.origin) {
        //this SW won't work if PUBLIC_URL is on a different origin from what
        //our page is served on. This might happen if a CDN is used to serve
        //assets; see https:github.com/facebook/create-react-app/issues/2374
            return;
        }
    
        window.addEventListener('load', () => {
            const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

            if (isLocalhost) {
                //checks if a SW still exists or not
                checkValidServiceWorker(swUrl, config);
                //adds additional logging to localhost
                navigator.serviceWorker.ready.then(() => {
                    console.log(
                        'this web app is being served cache-first by a service' +
                        'worker. To learn more, visit httpt://bit.ly/CRA-PWA'
                    );
                });
            }   else {
                //not localhost. Just register service worker
                registerValidSW(swUrl, config);
            }
        });
    }
}

function registerValidSW(swUrl, config) {
    navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
        registration.onupdatefound = () => {
            const installingWorker = registration.installing;
            if (installingWorker == null) {
                return;
            }
            installingWorker.onstatechange = () => {
                if (installingWorker.state === 'installed') {
                    if (navigator.serviceWorker.controller) {
                        console.log(
                            'New content is available and will be used when all' +
                            'tabs for this page are closed. See https://bit.ly/CRA-PWA.'
                        );

                        if (config && config.onUpdate) {
                            config.onUpdate(registration);
                        }
                    }   else {
                        console.log('Content is cached for offline use.');

                        if (config && config.onSuccess) {
                            config.onSuccess(registration);
                        }
                    }
                }
            }
        }
    })
    .catch((error) => {
        console.error('Error during dervice worker registration:', error);
    });
}

function checkValidServiceWorker(swUrl, config) {
    //check if SW can be found, if not reload page.
    fetch(swUrl, {
        headers: { 'Service-Worker': 'script' },
    })
    .then((response) => {
        //ensure SW exists and that we ar getting a js file
        const contentType = response.headers.get('content-type');
        if (
            response.status === 404 ||
            (contentType != null && contentType.indexOf('javascript') === -1)
        )   {
            //no SW found, reload page.
            navigator.serviceWorker.ready.then((registration) => {
                registration.unregister().then(() => {
                    window.location.reload();
                });
            });
        }   else {
            //SW found proceed as normal
            registerValidSW(swUrl, config);
        }
    })
    .catch(() => {
        console.log('No internet connection found. App is running in offline mode.');
    });
}

export function unregister() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready
        .then((registration) => {
            registration.unregister();
        })
        .catch((error) => {
            console.error(error.message);
        });
    }
}