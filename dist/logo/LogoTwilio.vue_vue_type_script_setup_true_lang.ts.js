import { defineComponent as m, computed as o, openBlock as s, createElementBlock as l, normalizeStyle as n, createElementVNode as t } from "vue";
const p = /* @__PURE__ */ m({
  __name: "LogoTwilio",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const c = h, i = o(() => ({
      width: c.width || "1em",
      height: c.height || "1em",
      minWidth: c.width || "1em",
      minHeight: c.height || "1em"
    }));
    return (v, e) => (s(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "155",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 155",
      style: n(i.value)
    }, e[0] || (e[0] = [
      t("g", null, [
        t("path", {
          fill: "#F12E45",
          d: "M77.016 0c42.512 0 77.015 34.503 77.015 77.016 0 42.512-34.503 77.015-77.015 77.015S0 119.528 0 77.016 34.503 0 77.016 0m0 20.332c-31.423 0-56.684 25.261-56.684 56.684s25.261 56.683 56.684 56.683 56.683-25.261 56.683-56.683-25.261-56.684-56.683-56.684m395.86 31.73c22.797 0 39.124 16.636 39.124 36.352v.308c0 19.716-16.327 36.66-39.432 36.66-22.797 0-39.124-16.636-39.124-36.352v-.308c0-19.716 16.327-36.66 39.432-36.66M207.634 30.499c.924-.308 1.849.616 1.849 1.232v22.181h40.972c.924 0 1.54.616 1.848 1.232l3.389 12.63 3.08 12.631.309.616.308-1.232 7.701-25.569c.308-.616 1.233-1.232 1.849-1.232h20.332c.924 0 1.54.616 1.848 1.232l8.01 27.418.308-1.233 6.777-25.569c.308-.616 1.232-1.232 1.849-1.232h52.37c.616 0 1.232.616 1.232 1.54v67.158c0 .616-.616 1.232-1.232 1.232h-26.185c-.616 0-1.232-.616-1.232-1.232V57.608L313.3 122.3c-.308.616-1.233 1.232-1.849 1.232h-21.564c-.924 0-1.54-.616-1.848-1.232l-4.313-13.555-4.621-14.787-9.242 28.65c-.308.616-1.232 1.232-1.849 1.232H246.45c-.924 0-1.54-.616-1.848-1.232l-19.408-64.385v16.635c0 .616-.616 1.232-1.233 1.232h-14.787v17.56c0 5.237 2.465 7.085 7.086 7.085 2.464 0 4.62-.308 7.393-1.54.617 0 1.54.308 1.54 1.232v20.333c-4.62 2.464-11.398 4.004-18.483 4.004-16.943 0-26.185-8.01-26.185-24.953V75.783h-6.778c-.616 0-1.232-.616-1.232-1.232V54.835c0-.616.616-1.232 1.232-1.232h6.778V39.74c0-.616.308-.924 1.232-1.232Zm187.302-.308c.616 0 1.232.616 1.232 1.232v90.879c0 .616-.616 1.232-1.232 1.232h-26.185c-.616 0-1.232-.616-1.232-1.232v-90.88c0-.616.616-1.232 1.232-1.232Zm34.503 23.413c.616 0 1.232.616 1.232 1.54v67.158c0 .616-.616 1.232-1.232 1.232h-26.185c-.616 0-1.232-.616-1.232-1.232V54.835c0-.616.616-1.232 1.232-1.232ZM96.116 80.096c8.847 0 16.019 7.172 16.019 16.02s-7.172 16.019-16.02 16.019-16.019-7.172-16.019-16.02 7.172-16.019 16.02-16.019m-38.2 0c8.847 0 16.019 7.172 16.019 16.02s-7.172 16.019-16.02 16.019c-8.846 0-16.018-7.172-16.018-16.02s7.172-16.019 16.019-16.019m414.652-4.005c-6.47 0-11.09 5.238-11.09 12.015v.308c0 6.777 4.929 12.322 11.398 12.322 6.47 0 11.09-5.237 11.09-12.014 0-7.085-4.929-12.63-11.398-12.63M96.116 41.897c8.847 0 16.019 7.172 16.019 16.019s-7.172 16.019-16.02 16.019-16.019-7.172-16.019-16.02c0-8.846 7.172-16.018 16.02-16.018m-38.2 0c8.847 0 16.019 7.172 16.019 16.019s-7.172 16.019-16.02 16.019c-8.846 0-16.018-7.172-16.018-16.02 0-8.846 7.172-16.018 16.019-16.018M360.74 30.19c.924 0 1.54.616 1.233 1.232v15.712c0 .616-.617 1.232-1.233 1.232h-27.11c-.615 0-1.231-.616-1.231-1.232V31.422c0-.616.616-1.232 1.232-1.232Zm69.006 0c.924 0 1.54.616 1.233 1.232v15.712c0 .616-.617 1.232-1.233 1.232h-27.11c-.615 0-1.231-.616-1.231-1.232V31.422c0-.616.616-1.232 1.232-1.232Z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  p as _
};