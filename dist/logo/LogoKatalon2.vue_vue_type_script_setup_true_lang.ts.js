import { defineComponent as l, computed as p, openBlock as s, createElementBlock as h, normalizeStyle as m, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoKatalon2",
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
    return (r, o) => (s(), h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "393",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 393",
      style: m(n.value)
    }, o[0] || (o[0] = [
      t("g", null, [
        t("polygon", {
          fill: "#19D89F",
          points: "256 261.406518 127.998039 261.406518 127.998039 392.131834 256 392.131834"
        }),
        t("polygon", {
          fill: "#000",
          points: "128.00147 0 0 130.725316 0 261.450632 128.00147 261.450632 255.959153 130.725316 255.959153 0"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
