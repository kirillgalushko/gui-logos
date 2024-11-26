import { defineComponent as n, computed as l, openBlock as m, createElementBlock as r, normalizeStyle as s, createElementVNode as t } from "vue";
const c = /* @__PURE__ */ n({
  __name: "LogoYcombinator2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, i) => (m(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: s(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("rect", {
          width: "256",
          height: "256",
          x: "0",
          y: "0",
          fill: "#FB651E"
        }),
        t("path", {
          fill: "#FFF",
          d: "M119.374 144.746 75.433 62.432h20.081l25.848 52.092q.597 1.392 1.392 2.883t1.391 3.082q.398.596.597 1.094.199.496.398.894a66 66 0 0 1 1.79 3.877q.795 1.89 1.39 3.48 1.591-3.381 3.48-7.257 1.89-3.878 3.877-8.053l26.246-52.092h18.69l-44.34 83.308v53.087h-16.9z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
