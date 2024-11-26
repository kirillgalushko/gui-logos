import { defineComponent as n, computed as c, openBlock as l, createElementBlock as m, normalizeStyle as r, createElementVNode as t } from "vue";
const a = /* @__PURE__ */ n({
  __name: "LogoAstro2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = c(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, i) => (l(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "366",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 366",
      style: r(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#000",
          d: "M182.022 9.147c2.982 3.702 4.502 8.697 7.543 18.687L256 246.074a276.5 276.5 0 0 0-79.426-26.891L133.318 73.008a5.63 5.63 0 0 0-10.802.017L79.784 219.11A276.5 276.5 0 0 0 0 246.04L66.76 27.783c3.051-9.972 4.577-14.959 7.559-18.654a24.54 24.54 0 0 1 9.946-7.358C88.67 0 93.885 0 104.314 0h47.683c10.443 0 15.664 0 20.074 1.774a24.55 24.55 0 0 1 9.95 7.373"
        }),
        t("path", {
          fill: "#FF5D01",
          d: "M189.972 256.46c-10.952 9.364-32.812 15.751-57.992 15.751-30.904 0-56.807-9.621-63.68-22.56-2.458 7.415-3.009 15.903-3.009 21.324 0 0-1.619 26.623 16.898 45.14 0-9.615 7.795-17.41 17.41-17.41 16.48 0 16.46 14.378 16.446 26.043l-.001 1.041c0 17.705 10.82 32.883 26.21 39.28a35.7 35.7 0 0 1-3.588-15.647c0-16.886 9.913-23.173 21.435-30.48 9.167-5.814 19.353-12.274 26.372-25.232a47.6 47.6 0 0 0 5.742-22.735c0-5.06-.786-9.938-2.243-14.516"
        })
      ], -1)
    ]), 4));
  }
});
export {
  a as _
};
