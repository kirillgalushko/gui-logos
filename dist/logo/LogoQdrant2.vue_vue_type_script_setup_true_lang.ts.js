import { defineComponent as i, computed as n, openBlock as p, createElementBlock as s, normalizeStyle as r, createStaticVNode as g } from "vue";
const d = /* @__PURE__ */ i({
  __name: "LogoQdrant2",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const o = l, e = n(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (a, t) => (p(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "296",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 296",
      style: r(e.value)
    }, t[0] || (t[0] = [
      g('<defs><linearGradient id="qdrant-2-gui-asset-a" x1="81.562%" x2="-18.086%" y1="44.842%" y2="44.842%"><stop offset="0%" stop-color="#FF3364"></stop><stop offset="100%" stop-color="#C91540" stop-opacity="0"></stop></linearGradient></defs><g><polygon fill="#24386C" points="201.31705 271.722427 195.422715 109.21267 184.747781 66.3682368 256 73.9112545 256 270.492509 212.474757 295.612626"></polygon><polygon fill="#7589BE" points="255.995151 73.8998107 212.469908 99.037384 122.649634 79.3346471 17.5160008 122.140288 1.1370484e-14 73.8998107 63.9883137 36.9499053 127.996024 0 191.986277 36.9499053"></polygon><polyline fill="#B2BFE8" points="0.00310340412 73.8998107 43.5283462 99.037384 68.7590217 174.073816 153.949405 242.236209 128.001067 295.599243 63.9933568 258.647398 0.00310340412 221.697492 0.00310340412 73.897871"></polyline><polyline fill="#24386C" points="156.856906 202.807459 128.001067 245.347371 128.001067 295.603122 168.946605 271.978458 190.043934 240.475027"></polyline><polygon fill="#7589BE" points="128.018523 195.107138 87.0555287 124.184656 95.8787005 100.678309 129.42068 84.4156955 168.946411 124.185819"></polygon><polyline fill="#B2BFE8" points="87.0555287 124.178837 128.001067 147.803501 128.001067 195.091621 90.131778 196.720927 67.2247763 167.471344 87.0555287 124.178856"></polyline><polygon fill="#24386C" points="128.001067 147.799621 168.946605 124.176897 196.813234 170.576668 163.090869 198.439418 128.001067 195.089293"></polygon><path fill="#DC244C" d="m168.947 271.975 43.525 23.626V99.04l-42.245-24.38L128 50.276 85.756 74.658 43.53 99.04v97.542l42.226 24.381 42.245 24.383 40.946-23.646zm0-100.531L128 195.088l-40.945-23.644v-47.269L128 100.531l40.946 23.644z"></path><polygon fill="url(#qdrant-2-gui-asset-a)" points="128.018523 245.362888 128.018523 195.099379 87.2863443 171.657041 87.2863443 221.837146"></polygon></g>', 2)
    ]), 4));
  }
});
export {
  d as _
};
