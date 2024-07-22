
interface Window {
    grecaptcha: {
        // pour v2
        render: (container: HTMLElement | null, parameters: { sitekey: string, callback: (token: string) => void,   'error-callback'?: (error: any) => void, }) => void;
        ready: (callback: () => void) => void;
        // pour enterprise
        enterprise: {
            ready: (callback: () => void) => void;
            execute: (siteKey: string, options: { action: string }) => Promise<string>;
        };
    };
}