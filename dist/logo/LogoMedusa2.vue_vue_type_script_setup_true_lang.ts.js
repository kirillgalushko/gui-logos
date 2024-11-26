import { defineComponent as l, computed as n, openBlock as r, createElementBlock as m, normalizeStyle as a, createElementVNode as e } from "vue";
const h = /* @__PURE__ */ l({
  __name: "LogoMedusa2",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const t = s, i = n(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (d, o) => (r(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "277",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 277",
      style: a(i.value)
    }, o[0] || (o[0] = [
      e("defs", null, [
        e("linearGradient", {
          id: "medusa-2-gui-asset-a",
          x1: "-66.697%",
          x2: "108.63%",
          y1: "81.87%",
          y2: "34.419%"
        }, [
          e("stop", {
            offset: "26.563%",
            "stop-color": "#592EE1"
          }),
          e("stop", {
            offset: "100%",
            "stop-color": "#B836D9"
          })
        ])
      ], -1),
      e("g", null, [
        e("path", {
          fill: "url(#medusa-2-gui-asset-a)",
          d: "M223.517 44.823 161.174 8.85a65.57 65.57 0 0 0-65.792 0l-62.63 35.973C12.642 56.623 0 78.495 0 101.806v72.235c0 23.6 12.641 45.183 32.752 56.982l62.343 36.263a65.57 65.57 0 0 0 65.791 0l62.343-36.263c20.399-11.799 32.752-33.383 32.752-56.982v-72.235c.575-23.311-12.066-45.183-32.464-56.983m-95.383 157.422c-35.337 0-64.067-28.78-64.067-64.177 0-35.399 28.73-64.178 64.067-64.178 35.338 0 64.355 28.779 64.355 64.178s-28.73 64.177-64.355 64.177"
        })
      ], -1)
    ]), 4));
  }
});
export {
  h as _
};
