export const removeJSS = () => {
  const jssStyles = document.querySelector('#jss-server-side');
  if (jssStyles) jssStyles.parentElement.removeChild(jssStyles);
};

export const scrollToTop = (selector = window) => {
  selector.scrollTo(0, 0);
}
