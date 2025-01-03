import { defineComponent as h, computed as c, openBlock as n, createElementBlock as m, normalizeStyle as p, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ h({
  __name: "LogoLiftweb",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const e = l, o = c(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, i) => (n(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "318",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 318",
      style: p(o.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#4861B4",
          d: "M209.255 159.9c0 20.398-16.542 43.912-36.931 52.519l-135.402 57.17C16.533 278.205 0 268.653 0 248.255V112.846c0-20.39 16.533-43.896 36.922-52.511l135.402-57.17c20.389-8.607 36.931.945 36.931 21.342z"
        }),
        t("path", {
          fill: "#25336D",
          d: "M238.19 44.996v134.946c0 20.389-16.534 43.904-36.931 52.51L65.857 289.623c-6.998 2.96-13.531 3.739-19.112 2.703v.456c0 20.381 16.534 29.941 36.923 21.334l135.41-57.17C239.467 248.331 256 224.824 256 204.427V69.025c0-13.39-7.147-22.055-17.81-24.029"
        }),
        t("path", {
          fill: "#FFF",
          d: "M186.728 262.083c-17.437 0-32.221-6.202-44.368-18.639q-18.208-18.644-18.208-44.825v-91.978l32.892-13.888L98.05 42.738l-53.672 97.575 35.157-14.842v73.107c0 29.261 10.538 54.169 31.599 74.699 7.827 7.62 17.966 14.831 26.921 19.623l70.271-30.817z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
