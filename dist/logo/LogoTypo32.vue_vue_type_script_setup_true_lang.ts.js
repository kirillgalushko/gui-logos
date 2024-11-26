import { defineComponent as h, computed as m, openBlock as l, createElementBlock as p, normalizeStyle as r, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ h({
  __name: "LogoTypo32",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, n = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, t) => (l(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "260",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 260",
      style: r(n.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#F49700",
          d: "M109.525 4.053c-4.714 4.032-8.064 8.747-8.064 22.827 0 38.315 48.363 153.408 81.302 153.408 3.7.05 7.384-.475 10.922-1.557l-.069.019-.842 1.35c-28.427 45.312-62.64 78.55-83.344 79.218l-.63.01C63.83 259.328 0 123.563 0 63.829c0-9.408 2.133-16.789 5.376-21.376 15.467-18.901 63.83-33.706 104.15-38.4M172.672 0C214.315 0 256 6.72 256 30.23c0 47.7-30.25 105.514-45.696 105.514-27.541 0-61.867-76.608-61.867-114.923C148.437 3.35 155.136 0 172.608 0z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
