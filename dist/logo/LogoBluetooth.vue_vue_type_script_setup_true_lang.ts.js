import { defineComponent as n, computed as h, openBlock as m, createElementBlock as s, normalizeStyle as p, createElementVNode as o } from "vue";
const c = /* @__PURE__ */ n({
  __name: "LogoBluetooth",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const e = l, i = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, t) => (m(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      fill: "none",
      viewBox: "0 0 32 32",
      style: p(i.value)
    }, t[0] || (t[0] = [
      o("path", {
        fill: "#fff",
        d: "M16.001 30C22.513 30 27 27.096 27 16S22.513 2 16.001 2 5 4.904 5 16s4.489 14 11.001 14"
      }, null, -1),
      o("path", {
        fill: "#0060A9",
        d: "m17.206 8.913 2.466 2.315-2.465 2.313zm0 14.172 2.466-2.315-2.465-2.314zm-2.633-7.086-5.33-5.017 1.544-1.45 4.247 3.988V3.962l7.723 7.25-5.1 4.787 5.1 4.789-7.723 7.25v-9.56l-4.247 3.99-1.545-1.451zM16 30c6.513 0 11-2.904 11-14S22.513 2 16.001 2 5 4.904 5 16s4.489 14 11.001 14"
      }, null, -1)
    ]), 4));
  }
});
export {
  c as _
};
