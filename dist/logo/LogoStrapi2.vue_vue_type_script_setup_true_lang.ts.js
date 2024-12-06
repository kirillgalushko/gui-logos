import { defineComponent as l, computed as c, openBlock as n, createElementBlock as m, normalizeStyle as p, createElementVNode as e } from "vue";
const s = /* @__PURE__ */ l({
  __name: "LogoStrapi2",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const t = h, o = c(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (r, i) => (n(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: p(o.value)
    }, i[0] || (i[0] = [
      e("g", null, [
        e("path", {
          fill: "#4945FF",
          d: "M0 88.747c0-41.836 0-62.754 12.997-75.75S46.91 0 88.747 0h78.507c41.835 0 62.752 0 75.75 12.997C256 25.993 256 46.91 256 88.747v78.507c0 41.835 0 62.752-12.997 75.75C230.006 256 209.09 256 167.253 256H88.748c-41.836 0-62.754 0-75.75-12.997S0 209.09 0 167.253z"
        }),
        e("path", {
          fill: "#FFF",
          d: "M176.64 77.653H90.453V121.6H134.4v43.946h43.946V79.36c0-.943-.764-1.707-1.706-1.707"
        }),
        e("rect", {
          width: "1.707",
          height: "1.707",
          x: "132.693",
          y: "121.6",
          fill: "#FFF"
        }),
        e("path", {
          fill: "#9593FF",
          d: "M90.453 121.6h42.24c.943 0 1.707.764 1.707 1.706v42.24H92.16a1.706 1.706 0 0 1-1.707-1.706zm43.947 43.946h43.946l-42.49 42.49c-.537.538-1.456.157-1.456-.602zM90.453 121.6H48.566c-.76 0-1.14-.92-.603-1.457l42.49-42.49z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  s as _
};