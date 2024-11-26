import { defineComponent as n, computed as m, openBlock as p, createElementBlock as r, normalizeStyle as s, createElementVNode as h } from "vue";
const v = /* @__PURE__ */ n({
  __name: "LogoNpm2",
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
    return (l, t) => (p(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "165",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 165",
      style: s(o.value)
    }, t[0] || (t[0] = [
      h("g", null, [
        h("path", {
          fill: "#C12127",
          d: "M157.538 164.103h65.641v-32.82h65.642V0H157.538zM223.18 32.82H256v65.64h-32.82zM315.077 0v131.282h65.64V32.821h32.821v98.461h32.821V32.821h32.82v98.461H512V0zM0 131.282h65.641V32.821h32.82v98.461h32.821V0H0z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  v as _
};
