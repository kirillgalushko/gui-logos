import { defineComponent as o, computed as m, openBlock as r, createElementBlock as n, normalizeStyle as s, createElementVNode as t } from "vue";
const p = /* @__PURE__ */ o({
  __name: "LogoAdobeIllustrator2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, l = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (a, h) => (r(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "250",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 250",
      style: s(l.value)
    }, h[0] || (h[0] = [
      t("g", null, [
        t("rect", {
          width: "256",
          height: "249.6",
          x: "0",
          y: "0",
          fill: "#300",
          rx: "42.5"
        }),
        t("path", {
          fill: "#FF9A00",
          d: "M124.054 149.79h-39.67l-8.072 25.073a2.02 2.02 0 0 1-2.061 1.546H54.158q-1.718 0-1.202-1.89l34.347-98.918q.515-1.545 1.03-3.52c.45-2.292.68-4.62.687-6.955a1.063 1.063 0 0 1 1.202-1.203h27.306q1.2 0 1.374.86l38.983 109.908q.515 1.72-1.03 1.718h-22.326a1.59 1.59 0 0 1-1.717-1.202zm-33.488-21.638H117.7l-.387-1.277-.621-2.022-.443-1.42-.707-2.236-1.503-4.707-1.322-4.173-3.433-10.87a334 334 0 0 1-2.46-8.138l-.628-2.21-.734-2.613-1.12-4.05-.21-.763h-.171a139 139 0 0 1-3.136 12.23l-2.548 8.196-1.402 4.528-1.415 4.584q-.383 1.242-.765 2.456l-.76 2.398-.756 2.342-.752 2.284-.748 2.227q-.372 1.1-.743 2.17zm90.501-46.025a12.46 12.46 0 0 1-9.445-3.778 13.6 13.6 0 0 1-3.607-9.789 12.6 12.6 0 0 1 3.864-9.53 13.27 13.27 0 0 1 9.165-3.697l.366.004q6.183 0 9.704 3.692a13.26 13.26 0 0 1 3.52 9.531 13.4 13.4 0 0 1-3.692 9.79 13.18 13.18 0 0 1-9.508 3.79zm-11.85 92.564V92.603q-.001-1.546 1.374-1.546h21.124q1.373 0 1.374 1.546v82.088q0 1.72-1.374 1.718h-20.952q-1.464 0-1.541-1.542z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  p as _
};