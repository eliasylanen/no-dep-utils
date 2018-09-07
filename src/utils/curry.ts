export default (fn: any, ...args: any[]) => {
  const arity = fn.length;
  function $curry(...more: any[]) {
    if (more.length < arity) {
      return $curry.bind(null, ...more);
    }
    return fn(...more);
  }
  return $curry.bind(null, ...args);
};
