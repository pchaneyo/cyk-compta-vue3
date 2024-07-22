/**
 * function devMode
 * if we are using Vite then the server is at localhost:3000
 * @param url 
 * @returns 
 */
export const devMode = (url: string): string => {
    let result = url;
    if (import.meta.env.DEV) {
        result = "//localhost:3000" + url;
    }
    return result;
};
