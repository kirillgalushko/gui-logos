import { defineComponent as n, computed as m, openBlock as s, createElementBlock as l, normalizeStyle as r, createElementVNode as t } from "vue";
const c = /* @__PURE__ */ n({
  __name: "LogoMomentjs",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (d, i) => (s(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(h.value)
    }, i[0] || (i[0] = [
      t("g", { "fill-rule": "evenodd" }, [
        t("path", {
          fill: "#376660",
          d: "M128 256c70.692 0 128-57.308 128-128S198.692 0 128 0 0 57.308 0 128s57.308 128 128 128m0-19.2c-60.089 0-108.8-48.711-108.8-108.8S67.911 19.2 128 19.2 236.8 67.911 236.8 128 188.089 236.8 128 236.8"
        }),
        t("path", {
          fill: "#529990",
          d: "M128 230.4c56.554 0 102.4-45.846 102.4-102.4S184.554 25.6 128 25.6 25.6 71.446 25.6 128 71.446 230.4 128 230.4M128 32c-3.535 0-6.4 2.88-6.4 6.444V121.6H76.781A6.375 6.375 0 0 0 70.4 128c0 3.535 2.916 6.4 6.37 6.4h57.63V38.406A6.387 6.387 0 0 0 128 32"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
