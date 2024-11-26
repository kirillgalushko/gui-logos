import { defineComponent as h, computed as n, openBlock as m, createElementBlock as c, normalizeStyle as p, createElementVNode as o } from "vue";
const a = /* @__PURE__ */ h({
  __name: "LogoZoom",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, l = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, t) => (m(), c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      fill: "none",
      viewBox: "0 0 32 32",
      style: p(l.value)
    }, t[0] || (t[0] = [
      o("path", {
        fill: "#4087FC",
        d: "M2 11.6c0-3.36 0-5.04.654-6.324a6 6 0 0 1 2.622-2.622C6.56 2 8.24 2 11.6 2h8.8c3.36 0 5.04 0 6.324.654a6 6 0 0 1 2.622 2.622C30 6.56 30 8.24 30 11.6v8.8c0 3.36 0 5.04-.654 6.324a6 6 0 0 1-2.622 2.622C25.44 30 23.76 30 20.4 30h-8.8c-3.36 0-5.04 0-6.324-.654a6 6 0 0 1-2.622-2.622C2 25.44 2 23.76 2 20.4z"
      }, null, -1),
      o("path", {
        fill: "#fff",
        d: "M8.267 10C7.567 10 7 10.64 7 11.429v6.928C7 20.37 8.446 22 10.23 22l7.503-.071c.7 0 1.267-.64 1.267-1.429v-7c0-2.012-1.716-3.5-3.5-3.5zm12.445 2.728C20.26 13.175 20 13.82 20 14.5v2.9c0 .678.26 1.324.712 1.772l2.817 2.48c.573.567 1.471.108 1.471-.751v-9.766c0-.86-.898-1.318-1.471-.752z"
      }, null, -1)
    ]), 4));
  }
});
export {
  a as _
};
