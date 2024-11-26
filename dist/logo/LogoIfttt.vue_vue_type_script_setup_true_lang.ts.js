import { defineComponent as n, computed as m, openBlock as r, createElementBlock as l, normalizeStyle as s, createElementVNode as h } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoIfttt",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, o = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (r(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "136",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 136",
      style: s(o.value)
    }, t[0] || (t[0] = [
      h("g", null, [
        h("path", {
          fill: "#000",
          "fill-rule": "nonzero",
          d: "M0 0h43.18v135.71H0zm246.747 0h-74.024v43.18h30.843v92.53h43.181V43.18h30.843V0zm117.205 0h-74.024v43.18h30.843v92.53h43.18V43.18h30.844V0zm117.205 0h-74.024v43.18h30.843v92.53h43.18V43.18H512V0zM160.386 43.18V0h-98.7v135.71h43.181V98.7h37.013V55.52h-37.013V43.18z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
