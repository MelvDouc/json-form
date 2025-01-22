export const generateFormElementId = (() => {
  let id = 1;

  return () => `form-element-id-${id++}`;
})();