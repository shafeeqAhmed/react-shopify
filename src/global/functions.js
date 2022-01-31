export function getUrlVars(url) {
  const vars = {};
  url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
    vars[key] = value;
  });
  return vars;
}

export function mergeObjects(obj, obj2) {
  return {...obj, ...obj2};
}