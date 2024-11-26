import { defineComponent as n, computed as l, openBlock as m, createElementBlock as r, normalizeStyle as s, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoRackspace2",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const e = h, o = l(() => ({
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
      style: s(o.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("rect", {
          width: "256",
          height: "256",
          x: "0",
          y: "0",
          fill: "#EA0000"
        }),
        t("path", {
          fill: "#FFF",
          d: "m128.453 88.305 6.165-32.447h-38.09L68.201 204.8h43.255l11.68-61.41c6.887-36.213 27.663-50.704 57.23-46.23l8.446-44.426c-25.678-2.366-49.99 11.961-60.36 35.571z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
