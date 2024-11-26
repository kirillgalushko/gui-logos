import { defineComponent as n, computed as l, openBlock as m, createElementBlock as r, normalizeStyle as s, createElementVNode as t } from "vue";
const p = /* @__PURE__ */ n({
  __name: "LogoPaypal",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const e = h, i = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (a, o) => (m(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      version: "1.1",
      viewBox: "-3.5 0 48 48",
      style: s(i.value)
    }, o[0] || (o[0] = [
      t("g", {
        fill: "none",
        "fill-rule": "evenodd",
        stroke: "none",
        "stroke-width": "1"
      }, [
        t("g", { fill: "#022B87" }, [
          t("path", { d: "M34.912 3.62C32.67 1.085 28.622 0 23.44 0H8.405a2.15 2.15 0 0 0-2.128 1.801L.017 41.194a1.284 1.284 0 0 0 1.275 1.48h9.282l2.332-14.67-.073.46a2.14 2.14 0 0 1 2.12-1.802h4.41c8.668 0 15.452-3.492 17.434-13.593.06-.3.154-.874.154-.874.563-3.738-.004-6.275-2.04-8.576M39.3 14.107c-2.156 9.945-9.03 15.208-19.937 15.208h-3.956L12.458 48h6.416a1.88 1.88 0 0 0 1.86-1.576l.075-.396 1.476-9.273.095-.512a1.88 1.88 0 0 1 1.858-1.576h1.172c7.58 0 13.516-3.056 15.25-11.89.696-3.547.362-6.52-1.359-8.669" })
        ])
      ], -1)
    ]), 4));
  }
});
export {
  p as _
};
