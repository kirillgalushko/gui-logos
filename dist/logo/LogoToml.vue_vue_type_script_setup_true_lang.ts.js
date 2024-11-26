import { defineComponent as l, computed as p, openBlock as s, createElementBlock as m, normalizeStyle as h, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoToml",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, n = p(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, o) => (s(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: h(n.value)
    }, o[0] || (o[0] = [
      t("g", null, [
        t("polygon", {
          fill: "#9C4221",
          points: "198.47191 0 198.47191 28.764045 224.35955 28.764045 224.35955 227.235956 198.47191 227.235956 198.47191 256 256 256 256 1.41709366e-14"
        }),
        t("polygon", {
          fill: "#000",
          points: "64.7191012 83.4157304 64.7191012 51.7752808 191.280899 51.7752808 191.280899 83.4157304 143.820225 83.4157304 143.820225 221.483146 112.179775 221.483146 112.179775 83.4157304"
        }),
        t("polygon", {
          fill: "#9C4221",
          points: "57.5280898 0 57.5280898 28.764045 31.6404494 28.764045 31.6404494 227.235956 57.5280898 227.235956 57.5280898 256 0 256 0 0"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
