import { defineComponent as n, computed as m, openBlock as r, createElementBlock as s, normalizeStyle as p, createElementVNode as i } from "vue";
const c = /* @__PURE__ */ n({
  __name: "LogoEthers",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (l, t) => (r(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "162",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 162",
      style: p(h.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#24339B",
          d: "M256 138.739c-133.839 17.491-229.367 38.5-230.78-47.733 0 0 2.92-33.412 43.902-35.516 0 0 1.381-29.676 32.69-33.036 16.832-1.822 35.956 15.513 38.029 33.758 0 0 41.42-7.662 43.21 32.722.628 14.068-2.544 37.997-42.488 36.96 0 0-23.112-3.14-26.253-38.876-6.5 69.18 93.518 65.161 94.963 2.324.628-27.164-16.77-55.112-55.96-49.868-21.48-54.044-78.665-50.935-99.956-.816-30.43 0-53.699 23.426-53.353 54.013C1.166 191.119 138.176 161.443 256 138.739"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
