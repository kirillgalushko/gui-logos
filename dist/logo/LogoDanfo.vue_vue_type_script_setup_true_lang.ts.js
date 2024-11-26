import { defineComponent as n, computed as l, openBlock as m, createElementBlock as r, normalizeStyle as s, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoDanfo",
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
          fill: "#FFDF28"
        }),
        t("path", {
          fill: "#2E2E2E",
          d: "M116.387 30.755c18.266-.275 36.438.501 54.052 8.177 40.133 17.492 65.051 59.935 60.148 103.434-4.958 43.989-38.704 80.451-81.699 88.081-5.283.937-10.702 1.525-16.062 1.551-32.343.152-102.637-.349-102.637-.349V31.431h28.837l.009 171.791s48.808-.01 69.022-.213c39.38-.394 68.13-25.485 73.552-63.93 5.17-36.66-24.156-74.462-60.909-78.3-7.755-.81-15.58-.958-24.16-1.457v86.128c5.382 0 10.511.413 15.548-.097 7.44-.753 12.217-6.458 12.31-14.393.152-13.006.041-40.073.041-40.073 2.58.928 4.447 1.382 6.112 2.234 17.116 8.752 26.217 28.46 22.132 47.77-3.885 18.364-20.145 32.584-39.105 33.362-13.68.561-46.305.303-46.305.303l.194-143.83"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
