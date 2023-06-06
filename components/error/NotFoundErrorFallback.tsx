// TODO: 디자인 필요
const NotFoundFallback = () => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>404 ERROR</pre>
    </div>
  );
};

export default NotFoundFallback;
