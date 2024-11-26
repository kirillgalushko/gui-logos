import { defineComponent as l, computed as o, openBlock as c, createElementBlock as n, normalizeStyle as m, createElementVNode as e } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoSst2",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const t = h, i = o(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (p, a) => (c(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "197",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 197",
      style: m(i.value)
    }, a[0] || (a[0] = [
      e("g", null, [
        e("path", {
          fill: "#E27152",
          d: "M67.694 156.077c.18-.267.2-.612.049-.899a.87.87 0 0 0-.77-.46H15.986a15.99 15.99 0 0 1-15.986-16l.061-74.22a18 18 0 0 1 2.386-8.94l27.238-47.47A16.1 16.1 0 0 1 43.649 0h165.276a9.566 9.566 0 0 1 8.11 14.639c-6.134 9.807-13.79 22.05-17.773 28.416a2.808 2.808 0 0 0 2.38 4.299h40.27c7.78 0 14.088 6.308 14.088 14.089v71.205a47.1 47.1 0 0 1-5.86 22.752c-4.844 8.777-12.704 21.214-17.66 30.196a22.05 22.05 0 0 1-19.302 11.395H58.062a9.602 9.602 0 0 1-7.948-14.992z"
        }),
        e("path", {
          fill: "#FFFBF9",
          d: "M91.6 148.608a9.98 9.98 0 0 0-8.154 4.228L62.452 182.62a2.882 2.882 0 0 0 2.353 4.54h144.787c5.331 0 10.256-2.85 12.914-7.473 3.784-6.583 10.286-16.153 14.184-22.933a5.434 5.434 0 0 0-4.713-8.146zm-40.824-41.464a17.78 17.78 0 0 0-13.956 6.833l-17.135 21.92a5.56 5.56 0 0 0-.617 5.86 5.56 5.56 0 0 0 5 3.126h50.046a10.68 10.68 0 0 1 9.653-6.107h96.72c3.957 0 7.63-2.06 9.696-5.435 3.67-5.993 9.535-15.57 13.158-21.489a3.432 3.432 0 0 0-2.938-5.225c-25.164.086-120.33.414-149.627.517"
        }),
        e("path", {
          fill: "#FFFBF9",
          d: "M204.497 130.782a5.23 5.23 0 0 0 4.44 7.994h28.066a8.17 8.17 0 0 0 5.774-2.391 8.17 8.17 0 0 0 2.392-5.776V65.188a8 8 0 0 0-8.003-8.003H106.242c-4.91 0-9.48 2.51-12.115 6.653-4.645 7.31-10.051 18.958-14.625 26.152a4.15 4.15 0 0 0-.135 4.225 4.15 4.15 0 0 0 3.638 2.154h124.318a10.328 10.328 0 0 1 8.768 15.783c-3.949 6.345-8.33 13.383-11.594 18.63"
        }),
        e("path", {
          fill: "#FFFBF9",
          d: "M181.635 47.354a3.19 3.19 0 0 0 2.665-1.444l18.6-28.482a3.618 3.618 0 0 0-3.03-5.595H58.233A15.25 15.25 0 0 0 42.98 27.087v53.946a15.534 15.534 0 0 0 16.273 15.516h2c.052-.43 16.144-28.211 25.026-41.833a16.23 16.23 0 0 1 13.598-7.362z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
