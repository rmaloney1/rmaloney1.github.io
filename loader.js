const myLoader = ({ src, width, quality }) => {
  return `http://localhost:5000${process.env.basePath}${src}`;
};
export default myLoader;
