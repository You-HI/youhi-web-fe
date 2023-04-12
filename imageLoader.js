export default function imgixLoader({ src }) {
  const url = new URL(`https://you-hi.github.io/youhi-web-fe${src}`);
  return url.href;
}
