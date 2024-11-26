import { defineComponent as n, computed as h, openBlock as c, createElementBlock as m, normalizeStyle as p, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoOpencollective",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, l = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, i) => (c(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: p(l.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#B8D3F4",
          d: "M209.765 128.15c0 16.013-4.9 31.34-13.266 44.575l33.447 33.447a128.9 128.9 0 0 0 25.783-77.35c0-29.265-9.754-55.751-26.47-77.336l-32.776 32.729a79.44 79.44 0 0 1 13.267 43.888z"
        }),
        t("path", {
          fill: "#7FADF2",
          d: "M127.513 210.355c-45.367-.086-82.125-36.838-82.22-82.205.069-45.386 36.835-82.166 82.22-82.252 16.732 0 32.058 4.901 44.607 13.267l32.744-32.776A128.97 128.97 0 0 0 127.514.636C57.123.636 0 57.76 0 128.15c0 70.359 57.124 127.513 127.513 127.513a125.13 125.13 0 0 0 77.351-26.501l-33.447-33.431c-11.861 9.754-27.157 14.624-43.904 14.624"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
