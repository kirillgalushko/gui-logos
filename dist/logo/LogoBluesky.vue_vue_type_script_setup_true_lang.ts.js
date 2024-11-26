import { defineComponent as h, computed as m, openBlock as s, createElementBlock as r, normalizeStyle as l, createElementVNode as i } from "vue";
const c = /* @__PURE__ */ h({
  __name: "LogoBluesky",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, n = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (s(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "226",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 226",
      style: l(n.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#1185FE",
          d: "M55.491 15.172c29.35 22.035 60.917 66.712 72.509 90.686 11.592-23.974 43.159-68.651 72.509-90.686C221.686-.727 256-13.028 256 26.116c0 7.818-4.482 65.674-7.111 75.068-9.138 32.654-42.436 40.983-72.057 35.942 51.775 8.812 64.946 38 36.501 67.187-54.021 55.433-77.644-13.908-83.696-31.676-1.11-3.257-1.63-4.78-1.637-3.485-.008-1.296-.527.228-1.637 3.485-6.052 17.768-29.675 87.11-83.696 31.676-28.445-29.187-15.274-58.375 36.5-67.187-29.62 5.041-62.918-3.288-72.056-35.942C4.482 91.79 0 33.934 0 26.116 0-13.028 34.314-.727 55.491 15.172"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
