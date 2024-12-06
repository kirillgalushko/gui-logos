import { defineComponent as h, computed as n, openBlock as m, createElementBlock as r, normalizeStyle as c, createElementVNode as i } from "vue";
const a = /* @__PURE__ */ h({
  __name: "LogoSaucelabs",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, l = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, t) => (m(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: c(l.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#E12826",
          "fill-rule": "nonzero",
          d: "m31.276 165.045 68.21.031-38.203 72.053C6.17 203.483-15.225 134.044 11.39 75.216c29.127-64.365 104.908-92.931 169.274-63.81L57.898 134.17h109.306l-80.383 81.18 33.193-62.626H40.48a92.4 92.4 0 0 1-3.378-24.73c.063-50.165 40.714-90.822 90.88-90.886 1.07 0 2.122.07 3.186.07l11.702-11.72a101 101 0 0 0-14.678-1.065c-57.12 0-103.742 46.476-103.742 103.601a102.6 102.6 0 0 0 6.826 37.05m163.41-146.19c55.15 33.646 76.552 103.124 49.905 161.97-29.146 64.353-104.94 92.9-169.293 63.754l121.83-122.766H87.521l81.62-81.23-33.207 62.69h79.523c3.416 11.497 3.416 24.722 3.416 24.722-.064 50.166-40.72 90.816-90.886 90.88-1.199 0-2.39-.083-3.582-.083l-11.587 11.702a105 105 0 0 0 15.169 1.103 103.6 103.6 0 0 0 37.26-6.91c53.352-20.535 79.955-80.426 59.42-133.779h-68.19z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  a as _
};