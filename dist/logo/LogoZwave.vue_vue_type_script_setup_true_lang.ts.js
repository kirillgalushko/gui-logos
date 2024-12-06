import { defineComponent as m, computed as o, openBlock as n, createElementBlock as s, normalizeStyle as c, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ m({
  __name: "LogoZwave",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const e = l, i = o(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, h) => (n(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "114",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 114",
      style: c(i.value)
    }, h[0] || (h[0] = [
      t("g", null, [
        t("path", {
          fill: "#00396F",
          d: "M115.777 63.793h12.39l3.621 22.286 4.02-22.286h8.627l4.33 22.286 3.941-22.286h11.586l-9.425 33.711h-10.914l-3.476-17.62-4.115 17.62h-10.54zm77.721.08h13.195l5.31 20.437 5.954-20.677h12.551l-12.563 33.872h-11.84zm40.067 0v33.63H256v-8.607h-10.768v-4.023h9.735v-8.69h-9.735v-3.781h10.62v-8.528zm-56.762 21.442 3.258-11.827 2.475 11.827zM186.9 63.793h-13.657L160.97 97.504h12.953l1.151-4.666h9.514l1 4.666h13.29zM96.87 86.965l-6.436 10.459h-28l15.529-24.056H63.617l5.978-9.574H96.87l-14.563 23.17zm-16-37.975c-17.862 0-32.343 14.48-32.343 32.343s14.48 32.344 32.344 32.344c17.862 0 32.343-14.481 32.343-32.344S98.733 48.99 80.87 48.99m-.735-38.348V0C35.845.196 0 36.152 0 80.488c0 .202.014.401.016.603h10.611c.129-38.542 31.089-69.803 69.508-70.449m0 22.197V22.204c-.081-.001-.16-.007-.241-.007-32.393 0-58.653 26.26-58.653 58.653 0 .08.006.16.006.24h10.635c.448-26.452 21.799-47.803 48.253-48.251"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};