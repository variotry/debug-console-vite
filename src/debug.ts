/// <reference types="vite/client" />

const debug = {
  log: import.meta.env.MODE !== 'production' ? console.log.bind(console) : () => {},
  info: import.meta.env.MODE !== 'production' ? console.info.bind(console) : () => {},
  warn: import.meta.env.MODE !== 'production' ? console.warn.bind(console) : () => {},
  error: import.meta.env.MODE !== 'production' ? console.error.bind(console) : () => {},
  debug: import.meta.env.MODE !== 'production' ? console.debug.bind(console) : () => {},
};
export default debug;