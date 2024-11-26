import { defineComponent as h, computed as n, openBlock as l, createElementBlock as r, normalizeStyle as s, createElementVNode as o } from "vue";
const c = /* @__PURE__ */ h({
  __name: "LogoBluetooth2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, m = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (l(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "348",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 348",
      style: s(m.value)
    }, t[0] || (t[0] = [
      o("g", null, [
        o("path", {
          fill: "#0060A9",
          d: "m142.03 85.687 28.693 28.694-28.676 28.67zm0 175.647 28.693-28.688-28.676-28.676zm-30.636-87.823-62.028-62.187L67.345 93.35l49.412 49.436V24.317l89.866 89.858-59.336 59.336 59.347 59.352-89.87 89.86V204.246l-49.425 49.442-17.98-17.985zm16.618 173.534c75.776 0 127.988-36 127.988-173.529C256 35.993 203.788 0 128.012 0 52.24 0 0 35.999 0 173.516c0 137.53 52.235 173.529 128.012 173.529"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
