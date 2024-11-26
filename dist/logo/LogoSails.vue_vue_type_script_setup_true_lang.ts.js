import { defineComponent as m, computed as n, openBlock as s, createElementBlock as r, normalizeStyle as p, createElementVNode as i } from "vue";
const g = /* @__PURE__ */ m({
  __name: "LogoSails",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (d, t) => (s(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: p(h.value)
    }, t[0] || (t[0] = [
      i("g", { fill: "#28A3B2" }, [
        i("path", { d: "M24.34 255.334S-73.092 100.291 127.341.457v254.877zm134.033 0V97.36s31.99 52.206 97.003 157.975z" })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
