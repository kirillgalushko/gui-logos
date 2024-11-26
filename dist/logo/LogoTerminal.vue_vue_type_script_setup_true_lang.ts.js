import { defineComponent as n, computed as l, openBlock as m, createElementBlock as r, normalizeStyle as s, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoTerminal",
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
    return (c, i) => (m(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "210",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 210",
      style: s(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("rect", {
          width: "256",
          height: "209.342",
          x: "0",
          y: "0",
          fill: "#000",
          rx: "5"
        }),
        t("path", {
          fill: "#FFF",
          d: "M28.241 21.774q-1.283-1.284-3.098-1.284t-3.11 1.296c-.852.852-1.284 1.888-1.284 3.098s.432 2.247 1.284 3.098l13.442 13.442-13.43 13.43c-.864.864-1.296 1.9-1.308 3.11.012 1.21.444 2.247 1.296 3.098.864.852 1.9 1.284 3.098 1.296 1.222 0 2.259-.432 3.123-1.296l14.935-14.947c3.135-3.123 3.135-6.258 0-9.394zm58.545 33.104c-.864-.864-1.913-1.296-3.135-1.296v-.006H54.817v.006c-1.222 0-2.26.432-3.123 1.296s-1.296 1.901-1.296 3.123.432 2.271 1.296 3.135 1.9 1.296 3.123 1.296v-.006H83.65v.006c1.222 0 2.27-.432 3.135-1.296s1.296-1.913 1.296-3.135-.432-2.259-1.296-3.123"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
