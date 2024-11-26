import { defineComponent as n, computed as m, openBlock as r, createElementBlock as s, normalizeStyle as p, createElementVNode as i } from "vue";
const c = /* @__PURE__ */ n({
  __name: "LogoPagerduty2",
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
    return (d, t) => (r(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "372",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 372",
      style: p(h.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#06AC38",
          d: "M54.554 272.557v98.919H0v-98.919zM109.047.001c46.745.051 67.005 2.703 95.795 18.254C236.471 35.237 256 68.988 256 111.018c0 39.058-15.92 72.81-46.488 92.975-28.02 18.68-59.86 21.228-102.315 21.228H0V0Zm8.739 47.753-1.673.007-61.56.425v129.91h65.168c45.639 0 80.451-18.255 80.451-66.44 0-44.79-28.02-64.32-84.06-63.895Z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
