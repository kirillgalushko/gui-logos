import { defineComponent as n, computed as m, openBlock as r, createElementBlock as l, normalizeStyle as s, createElementVNode as h } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoMarkdown2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, o = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (c, t) => (r(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "158",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 158",
      style: s(o.value)
    }, t[0] || (t[0] = [
      h("g", null, [
        h("path", {
          fill: "#000",
          d: "M238.371 157.892H18.395C8.431 157.892 0 149.462 0 139.497V18.395C0 8.431 8.431 0 18.395 0h219.21C247.569 0 256 8.431 256 18.395v121.102c0 9.964-7.665 18.395-17.629 18.395M18.395 12.263c-3.066 0-6.132 3.066-6.132 6.132v121.102c0 3.832 3.066 6.132 6.132 6.132h219.21c3.832 0 6.132-3.066 6.132-6.132V18.395c0-3.832-3.066-6.132-6.132-6.132zM36.79 121.102V36.79h24.527l24.527 30.66 24.527-30.66h24.527v84.312h-24.527V72.814l-24.527 30.66-24.527-30.66v48.288zm154.06 0-36.79-40.623h24.527V36.79h24.527v42.923h24.527z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
