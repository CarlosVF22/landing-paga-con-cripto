declare global {
    export interface Window {
        dataLayer: Record<string, any>[];
    }
}
