export const apiNPS =
  "https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=FMZGAe5Z3Ul0VSW28IfUmTBXwaFYjBDQ6Wpw2Rsf";

export const loadScript = src => {
  var index = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
  script.src = src;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
};