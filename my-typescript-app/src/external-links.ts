export function HashnodeBaseUrl(): string {
    return 'https://katycodesstuff.hashnode.dev/'
};
export function TwitterUrl(): string {
    return 'https://twitter.com/KatyCodesStuff/'
};
export function GitHubUrl(): string {
    return 'https://github.com/katycodesstuff/'
};
export function HashnodeArticleUrl(resource: string) : string {
    return `${HashnodeBaseUrl()}${resource}`
}