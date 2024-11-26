import { defineComponent as h, computed as n, openBlock as a, createElementBlock as m, normalizeStyle as p, createElementVNode as t } from "vue";
const s = /* @__PURE__ */ h({
  __name: "LogoBuilderIo2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, l = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, i) => (a(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "293",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 293",
      style: p(l.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#18B4F4",
          d: "M256 82.32a82.17 82.17 0 0 1-30.548 64.032L5.802 21.622a12 12 0 0 1-2.32-1.726A11.63 11.63 0 0 1 0 11.613 11.61 11.61 0 0 1 11.608 0H173.72a82.25 82.25 0 0 1 58.182 24.112A82.33 82.33 0 0 1 256 82.32"
        }),
        t("path", {
          fill: "#FD6B3C",
          d: "M256 210.38a82.3 82.3 0 0 1-6.256 31.508 82.3 82.3 0 0 1-17.835 26.716 82.3 82.3 0 0 1-58.19 24.117H11.61a11.6 11.6 0 0 1-6.432-2.027 11.6 11.6 0 0 1-4.216-5.26 11.6 11.6 0 0 1-.585-6.72 11.6 11.6 0 0 1 3.242-5.911 11.3 11.3 0 0 1 2.184-1.704l86.444-49.085 133.189-75.645A82.23 82.23 0 0 1 256 210.38"
        }),
        t("path", {
          fill: "#A97FF2",
          d: "M225.452 146.352 92.246 222.014l-86.44 49.085a11 11 0 0 0-2.285 1.687A180.94 180.94 0 0 0 54.87 146.352 180.84 180.84 0 0 0 3.539 19.896a12 12 0 0 0 2.324 1.726z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  s as _
};
