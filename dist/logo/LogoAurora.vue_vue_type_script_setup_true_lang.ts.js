import { defineComponent as i, computed as z, openBlock as o, createElementBlock as n, normalizeStyle as r, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ i({
  __name: "LogoAurora",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const e = l, m = z(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, h) => (o(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "226",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 226",
      style: r(m.value)
    }, h[0] || (h[0] = [
      t("g", null, [
        t("path", {
          fill: "#63C4B1",
          d: "M155.894 58.366h-55.832l27.961 48.147zM94.613 61.48l-27.889 48.232h55.845zm27.955 54.5H66.722l27.89 48.266zm-61.205 3.12-28.049 48.22H89.24zm99.897-57.62-27.865 48.232h55.835zm27.972 54.5h-55.839l27.868 48.266zM128.022 3.795l-27.958 48.302h55.829zM89.241 173.6H33.314l28.05 48.582zm105.357-54.5-27.95 48.22h55.909zm27.961 54.5H166.65l27.95 48.582z"
        }),
        t("path", {
          fill: "#FFF",
          d: "m128.022 119.1-27.958 48.22h55.829zM89.241 58.366H33.314l28.05 48.147zM.066 109.711h55.826L27.942 61.48zm27.876 54.536 27.95-48.266H.066zM227.919 61.48l-27.859 48.232h55.817zm27.961 54.5h-55.821l27.862 48.266zM189.232.67h-55.839l27.868 48.177zM155.894 173.6H99.973l28.05 48.582zm5.366 3.109-27.865 48.652h55.835zM122.568.67H66.722l27.89 48.177zM61.363 3.795 33.314 52.097H89.24zm133.235 0-27.95 48.302h55.909zm27.961 54.571H166.65l27.95 48.147zM94.613 176.709 66.724 225.36h55.845z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
