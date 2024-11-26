import { defineComponent as o, computed as h, openBlock as a, createElementBlock as i, normalizeStyle as p, createStaticVNode as l } from "vue";
const n = /* @__PURE__ */ o({
  __name: "LogoAsana",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const t = s, e = h(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (m, c) => (a(), i("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 -43.5 256 256",
      style: p(e.value)
    }, c[0] || (c[0] = [
      l('<defs><radialGradient id="asana-gui-asset-a" cx="50%" cy="54.652%" r="66.263%" fx="50%" fy="54.652%"><stop offset="0%" stop-color="#FFB900"></stop><stop offset="60%" stop-color="#F95D8F"></stop><stop offset="99.91%" stop-color="#F95353"></stop></radialGradient></defs><g><path fill="#283343" d="M24.04 159.631c-8.436 0-15.274-6.989-15.274-15.612 0-8.622 6.838-15.612 15.275-15.612 8.436 0 15.273 6.99 15.273 15.612s-6.837 15.612-15.273 15.612m15.323 1.98c0 1.43 2.45 5.446 5.452 5.446h1.944c.754 0 1.37-.617 1.37-1.37v-42.725h-.007a1.37 1.37 0 0 0-1.363-1.296h-6.024c-.729 0-1.324.577-1.365 1.296h-.007v3.472c-3.69-4.546-9.51-6.433-15.346-6.433C10.752 120.001 0 130.754 0 144.02s10.752 24.019 24.017 24.019c5.836 0 12.196-2.264 15.346-6.433zm23.16-6.118c4.021 2.785 8.411 4.138 12.629 4.138 4.02 0 8.173-2.084 8.173-5.71 0-4.84-9.053-5.594-14.74-7.527-5.69-1.933-10.59-5.93-10.59-12.402 0-9.902 8.824-13.992 17.06-13.992 5.218 0 10.601 1.72 14.092 4.186 1.203.91.47 1.957.47 1.957l-3.332 4.758c-.374.536-1.15.964-1.969.419-2.245-1.484-4.745-2.914-9.262-2.914-5.591 0-8.05 2.321-8.05 5.197 0 3.45 3.933 4.534 8.54 5.71 8.03 2.163 16.79 4.766 16.79 14.609 0 8.725-8.162 14.117-17.182 14.117-6.835 0-12.655-1.949-17.536-5.53-1.016-1.018-.306-1.963-.306-1.963l3.315-4.734c.675-.886 1.525-.576 1.898-.319m74.99 6.119c0 1.429 2.449 5.445 5.45 5.445h1.945c.754 0 1.371-.617 1.371-1.37v-42.725h-.008a1.37 1.37 0 0 0-1.363-1.296h-6.024c-.73 0-1.324.577-1.364 1.296h-.007v3.472c-3.691-4.546-9.511-6.433-15.346-6.433-13.265 0-24.019 10.753-24.019 24.018s10.754 24.019 24.019 24.019c5.835 0 12.195-2.264 15.345-6.433zm-15.323-1.98c-8.437 0-15.275-6.99-15.275-15.613s6.838-15.612 15.275-15.612c8.435 0 15.274 6.99 15.274 15.612s-6.839 15.612-15.274 15.612m78.063 3.448-.002-22.107c0-12.462-7.862-20.87-20.4-20.87-5.984 0-10.88 3.461-12.613 6.434v-.042l-.01.034c-.004-3.008-2.444-4.76-5.452-4.76h-1.934c-.755 0-1.371.618-1.371 1.372v42.726h.008a1.37 1.37 0 0 0 1.363 1.297h6.024q.139-.001.27-.027c.04-.009.077-.025.116-.036.046-.013.092-.024.134-.042.055-.022.103-.052.153-.08.024-.015.05-.025.074-.04a2 2 0 0 0 .168-.134l.028-.023q.09-.087.163-.188a1.36 1.36 0 0 0 .258-.727h.008V140.63c0-6.693 5.426-12.12 12.12-12.12s12.12 5.427 12.12 12.12l.004 21.096.002-.008.004.058v4.091h.008a1.37 1.37 0 0 0 1.363 1.297h6.024q.139-.001.27-.027c.036-.008.069-.023.103-.031.05-.015.1-.028.148-.047.049-.02.094-.049.14-.075.029-.015.059-.027.086-.045q.083-.058.157-.125.02-.014.04-.033.083-.082.153-.176.005-.008.011-.014c.149-.205.24-.452.255-.72l.001-.004h.007v-2.787m46.981-1.468c0 1.429 2.447 5.445 5.45 5.445h1.945c.753 0 1.371-.617 1.371-1.37v-42.725h-.007a1.373 1.373 0 0 0-1.364-1.296h-6.023a1.37 1.37 0 0 0-1.364 1.296h-.008v3.472c-3.693-4.546-9.511-6.433-15.348-6.433-13.263 0-24.017 10.753-24.017 24.018s10.754 24.019 24.017 24.019c5.837 0 12.196-2.264 15.345-6.433zm-15.322-1.98c-8.437 0-15.275-6.99-15.275-15.613s6.838-15.612 15.275-15.612c8.433 0 15.271 6.99 15.271 15.612s-6.838 15.612-15.271 15.612"></path><path fill="url(#asana-gui-asset-a)" d="M155.733 47.358c-11.626 0-21.049 9.423-21.049 21.047s9.423 21.05 21.049 21.05c11.624 0 21.047-9.425 21.047-21.05s-9.423-21.047-21.047-21.047m-54.685.001C89.424 47.36 80 56.781 80 68.406s9.424 21.048 21.048 21.048c11.625 0 21.049-9.424 21.049-21.048 0-11.625-9.424-21.047-21.05-21.047m48.39-26.311c0 11.624-9.423 21.05-21.047 21.05-11.626 0-21.049-9.426-21.049-21.05S116.765 0 128.391 0c11.624 0 21.046 9.424 21.046 21.048"></path></g>', 2)
    ]), 4));
  }
});
export {
  n as _
};
