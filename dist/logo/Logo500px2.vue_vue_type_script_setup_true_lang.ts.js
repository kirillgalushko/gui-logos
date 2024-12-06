import { defineComponent as h, computed as m, openBlock as s, createElementBlock as a, normalizeStyle as n, createElementVNode as c } from "vue";
const r = /* @__PURE__ */ h({
  __name: "Logo500px2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, o = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (l, t) => (s(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "128",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 128",
      style: n(o.value)
    }, t[0] || (t[0] = [
      c("g", null, [
        c("path", {
          fill: "#000",
          d: "M158.951 0C123.599 0 94.94 28.654 94.94 64s28.659 64 64.011 64c35.353 0 64.011-28.654 64.011-64-.312-35.216-28.789-63.687-64.011-64m0 114.56c-27.75.176-50.39-22.173-50.567-49.92-.176-27.745 22.177-50.381 49.928-50.558S208.702 36.254 208.88 64c.002 27.675-22.25 50.21-49.929 50.56M296.511 0c-35.352 0-64.01 28.654-64.01 64s28.658 64 64.01 64 64.012-28.654 64.012-64a64 64 0 0 0-18.749-45.255A64.02 64.02 0 0 0 296.511 0m0 114.56c-27.75.176-50.39-22.173-50.566-49.92-.177-27.745 22.176-50.381 49.927-50.558 27.75-.177 50.391 22.172 50.568 49.918a49.72 49.72 0 0 1-14.337 35.77 49.74 49.74 0 0 1-35.592 14.79M48.851 38.4a43.15 43.15 0 0 0-33.926 8.96V13.44h57.61c1.921 0 3.201-.64 3.201-6.4s-2.56-5.76-3.84-5.76H8.524a5.76 5.76 0 0 0-5.76 5.76v56.32c0 3.2 1.92 3.84 5.12 4.48 1.99.92 4.349.395 5.761-1.28A36.42 36.42 0 0 1 45.651 51.2c14.838 1.852 26.62 13.37 28.805 28.16C76.489 97.008 63.922 113 46.291 115.2h-3.84a32.65 32.65 0 0 1-30.086-21.12c-.64-1.92-1.92-3.2-7.041-1.28S-.437 96 .203 97.92c8.67 23.157 34.29 35.11 57.61 26.88 23.162-8.669 35.117-34.283 26.885-57.6A44.8 44.8 0 0 0 48.85 38.4M404.051.64c-17.548 2.02-30.777 16.9-30.726 34.56v56.96c0 3.2 2.56 3.84 6.401 3.84s6.401-.64 6.401-3.84V35.2c-.232-10.913 7.75-20.268 18.564-21.76a21.06 21.06 0 0 1 16.003 5.12 20.4 20.4 0 0 1 7.04 15.36 25.6 25.6 0 0 1-4.48 12.16 20.17 20.17 0 0 1-17.923 8.32c-2.56 0-4.481 0-5.121 5.76 0 3.84 0 5.76 3.2 6.4a31.5 31.5 0 0 0 18.564-3.84 34.37 34.37 0 0 0 18.563-26.88 33.15 33.15 0 0 0-7.912-24.387A33.16 33.16 0 0 0 409.684 0c-1.832.514-3.734.73-5.633.64m83.854 33.28 23.045-23.04c.64-.64 2.56-2.56-1.28-7.04a6.4 6.4 0 0 0-4.481-2.56 3.33 3.33 0 0 0-2.56 1.28L479.583 25.6 456.54 1.92C454.62 0 452.7.64 449.499 3.2c-3.2 2.56-3.2 5.12-1.28 7.04l23.043 23.04-23.172 23.68a4.86 4.86 0 0 0-1.28 2.56c.034 1.832 1 3.52 2.56 4.48a10.3 10.3 0 0 0 4.481 2.56 6.8 6.8 0 0 0 3.201-1.28l23.044-23.04 23.044 23.04a3.33 3.33 0 0 0 2.56 1.28 6.4 6.4 0 0 0 4.481-2.56c1.92-2.56 2.56-5.12.64-6.4z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  r as _
};