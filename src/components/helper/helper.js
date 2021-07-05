export const getBaseUrl = () => {
    const app_url = window.localStorage.getItem('base_url');
    return app_url || window.location.origin;
}

export const urlGenerator = url => `${getBaseUrl()}/${url.split('/').filter(d => d).join('/')}`;