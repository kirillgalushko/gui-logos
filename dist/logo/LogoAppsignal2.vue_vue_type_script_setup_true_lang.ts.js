import { defineComponent as m, computed as c, openBlock as h, createElementBlock as l, normalizeStyle as r, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ m({
  __name: "LogoAppsignal2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, n = c(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, t) => (h(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "188",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 188",
      style: r(n.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#21375A",
          "fill-rule": "nonzero",
          d: "M224.04 43.802c-19.002 0-32.59 16.731-46.597 35.384C168.746 39.576 159.105 0 128.367 0S87.953 39.575 79.116 79.22c-13.972-18.687-27.56-35.418-46.561-35.418C20.469 43.802 0 52.01 0 82.818v55.888c0 30.214 16.138 37.62 25.813 40.17 16.696 4.33 56.9 8.382 102.17 8.382 45.268 0 85.473-4.052 102.169-8.383 9.676-2.55 25.848-9.955 25.848-40.169V82.818c0-30.808-20.469-39.016-32.555-39.016m-95.078-26.337c18.408 0 25.429 36.327 35.209 79.92-10.723 13.203-22.11 23.856-35.21 23.856-13.098 0-24.45-10.653-35.208-23.857 9.151-40.763 16.207-79.92 35.209-79.92M17.744 138.882V82.993c0-19.456 10.48-21.552 15.09-21.552 13.413 0 27.944 22.355 41.531 40.31-9.71 40.727-19.98 65.527-44.22 60.428-6.323-1.712-12.261-5.729-12.261-23.124m47.574 28.328c10.724-11.666 17.465-29.865 22.81-49.146 11.212 11.771 24.17 20.644 40.238 20.644s28.992-8.873 40.24-20.644c5.204 19.281 12.05 37.48 22.774 49.146-18.758 1.712-41.322 2.76-62.874 2.76-21.551 0-44.29-1.048-63.048-2.76m173.67-28.328c0 17.465-5.937 21.412-12.26 23.124-24.276 5.134-34.51-19.7-44.22-60.429 13.727-17.954 27.943-40.309 41.53-40.309 4.542 0 15.09 2.096 15.09 21.552z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
