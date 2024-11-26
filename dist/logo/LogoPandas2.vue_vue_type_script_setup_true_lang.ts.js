import { defineComponent as m, computed as n, openBlock as l, createElementBlock as r, normalizeStyle as s, createElementVNode as t } from "vue";
const g = /* @__PURE__ */ m({
  __name: "LogoPandas2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, o = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (d, h) => (l(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "408",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 408",
      style: s(o.value)
    }, h[0] || (h[0] = [
      t("g", null, [
        t("path", {
          fill: "#130754",
          d: "M71.478 24.072h44.504v92.41H71.478zm0 189.825h44.504v92.409H71.478zM0 100.057h44.505v307.175H0zm141.496 190.084H186v92.409h-44.504zm0-189.973H186v92.41h-44.504zM211.496 0H256v307.174h-44.505z"
        }),
        t("rect", {
          width: "44.505",
          height: "43.6",
          x: "71.478",
          y: "143.454",
          fill: "#FFCA00"
        }),
        t("rect", {
          width: "44.505",
          height: "43.6",
          x: "141.496",
          y: "219.55",
          fill: "#E70488"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
