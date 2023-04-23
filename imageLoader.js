export default function customImageLoader({ src, width, quality }) {
  const url = new URL(`https://you-hi.github.io/youhi-web-fe${src}`);
  return url.href;
}