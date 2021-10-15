const myLoader = ({ src, width, quality }) => {
  return `${process.env.url}${process.env.basePath}${src}`;
};
export default myLoader;
