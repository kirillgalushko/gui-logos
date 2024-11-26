import { defineComponent as h, computed as l, openBlock as m, createElementBlock as p, normalizeStyle as s, createElementVNode as t } from "vue";
const c = /* @__PURE__ */ h({
  __name: "LogoWicket2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, n = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, i) => (m(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: s(n.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#FF9925",
          d: "M127.998 0C198.694 0 256 57.306 256 127.998c0 70.696-57.306 128.005-128.002 128.005C57.306 256.003 0 198.693 0 127.998 0 57.306 57.306 0 127.998 0"
        }),
        t("polygon", {
          fill: "#FFF",
          points: "79.9881805 79.9899002 79.9881805 176.013539 111.998354 176.013539 144.001646 176.013539 176.01182 176.013539 176.01182 79.9899002 144.001646 144.003366 127.99828 111.996633 111.998354 144.003366"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
