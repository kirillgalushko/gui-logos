import { defineComponent as h, computed as m, openBlock as r, createElementBlock as l, normalizeStyle as p, createElementVNode as t } from "vue";
const c = /* @__PURE__ */ h({
  __name: "LogoInferno",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, n = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, i) => (r(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "266",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 266",
      style: p(n.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#494949",
          d: "m84.11 58.734-3.335 2.213c-27.487 17.978-41.97 43.56-42.301 76.315-.426 41.89 29.09 78.327 69.92 87.701 52.705 12.101 104.865-26.106 109.105-79.918 3.353-42.563-25.426-80.8-66.033-94.018-6.123-6.827-11.683-29.772-2.006-40.223 39.907 8.868 69.826 29.245 89.116 62.064 42.178 71.76 4.26 165.298-75.856 187.64C88.298 281.262 12.997 232.202 1.867 155.71-10.484 84.388 39.875 20.94 110.926 10.276 94.35 25.267 85.482 45.854 84.11 58.734"
        }),
        t("path", {
          fill: "#FB3239",
          d: "M179.584 119.46c5.738-10.693 5.478-21.876 2.22-33.19-.801-2.784-2.468-7.558-3.593-10.679 19.183 14.176 35.565 48.262 27.238 82.136-7.714 31.385-37.794 56.664-68.824 59.587-39.96 3.763-71.03-20.182-82.724-49.292-12.47-31.035-2.484-69.205 18.948-88.208-10.487 21.114-7.241 37.875-2.956 44.13 4.763 6.952 12.346 10.557 19.747 8.498 7.78-2.164 13.749-9.125 13.614-18-.09-5.926-1.147-12.609-3.484-17.948-13.867-31.677-2.308-60.245 20.059-79.919 6.492-5.71 14.04-11.19 23.649-16.575-10.558 14.991-12.352 33.256-4.33 50.253 4.704 9.262 10.73 18.935 16.048 27.871 9.557 16.061 15.418 32.574 12.88 51.732-.028.212 7.602-2.957 11.508-10.397"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};