declare global {
  interface ImportMeta {
    url: string;
  }
}
console.log(import.meta.url);