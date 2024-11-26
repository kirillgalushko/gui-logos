import { defineComponent as s, computed as r, openBlock as p, createElementBlock as a, normalizeStyle as c, createStaticVNode as l } from "vue";
const d = /* @__PURE__ */ s({
  __name: "LogoCrucible",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const t = i, o = r(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (h, e) => (p(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "264",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 264",
      style: c(o.value)
    }, e[0] || (e[0] = [
      l('<defs><linearGradient id="crucible-gui-asset-a" x1="50%" x2="50%" y1="99.33%" y2="1.786%"><stop offset="18%" stop-color="#0052CC"></stop><stop offset="100%" stop-color="#2684FF"></stop></linearGradient></defs><g><path fill="#2684FF" d="M128 0C57.3 0 0 24.155 0 53.897a27 27 0 0 0 .462 4.537l22.559 118.38c9.516 50.502 53.63 87.08 105.021 87.08s95.505-36.578 105.021-87.08l22.475-118.38c.278-1.483.433-2.987.462-4.495C256 24.155 198.7 0 128 0m0 196.054c-36.968 0-33.9-85.908-75.321-98.594a152 152 0 0 1-9.914-3.403A248.7 248.7 0 0 1 128 80.362a248.7 248.7 0 0 1 85.235 13.695c-3.192 1.176-6.469 2.353-9.914 3.403-41.42 12.602-38.311 98.594-75.321 98.594"></path><path fill="url(#crucible-gui-asset-a)" d="M42.765 94.1A248.7 248.7 0 0 1 128 80.403 248.7 248.7 0 0 1 213.235 94.1C239.45 84.227 256 69.902 256 53.897 256 24.155 198.7 0 128 0S0 24.155 0 53.897c0 15.963 16.51 30.33 42.765 40.202"></path></g>', 2)
    ]), 4));
  }
});
export {
  d as _
};
