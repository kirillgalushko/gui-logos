import { defineComponent as h, computed as l, openBlock as m, createElementBlock as r, normalizeStyle as s, createElementVNode as t } from "vue";
const p = /* @__PURE__ */ h({
  __name: "LogoMessenger",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, n = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (d, o) => (m(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      version: "1.1",
      viewBox: "0 0 48 48",
      style: s(n.value)
    }, o[0] || (o[0] = [
      t("g", {
        fill: "none",
        "fill-rule": "evenodd",
        stroke: "none",
        "stroke-width": "1"
      }, [
        t("g", { fill: "#007FFF" }, [
          t("path", { d: "M24 0C10.745 0 0 9.95 0 22.222c0 6.994 3.49 13.231 8.944 17.305V48l8.172-4.485c2.18.604 4.491.93 6.884.93 13.255 0 24-9.95 24-22.223S37.255 0 24 0m2.385 29.926-6.112-6.519-11.925 6.519L21.466 16l6.26 6.519L39.504 16z" })
        ])
      ], -1)
    ]), 4));
  }
});
export {
  p as _
};
