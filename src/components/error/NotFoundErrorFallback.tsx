// TODO: 디자인 필요
export const NotFoundErrorFallback = () => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>404 ERROR</pre>
    </div>
  );
};
