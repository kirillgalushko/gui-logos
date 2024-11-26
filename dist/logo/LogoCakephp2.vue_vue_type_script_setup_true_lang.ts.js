import { defineComponent as h, computed as l, openBlock as r, createElementBlock as m, normalizeStyle as s, createElementVNode as o } from "vue";
const c = /* @__PURE__ */ h({
  __name: "LogoCakephp2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, n = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (r(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "200",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 200",
      style: s(n.value)
    }, t[0] || (t[0] = [
      o("g", {
        fill: "none",
        "fill-rule": "evenodd",
        stroke: "none",
        "stroke-width": "1"
      }, [
        o("path", {
          fill: "#D33C44",
          d: "M0 119.883c0 22.056 57.294 39.958 127.98 39.958v39.942C57.294 199.783 0 181.897 0 159.841Zm256 0v39.95c0 9.417-10.47 18.056-27.902 24.89l-100.126-24.89v-39.95l100.126 24.882c17.433-6.826 27.91-15.465 27.902-24.882M127.98 0C198.674 0 256 17.918 256 39.958v39.983c0 9.384-10.47 18.056-27.894 24.857L127.98 79.941v39.942C57.294 119.883 0 101.989 0 79.94V39.958C0 17.918 57.294 0 127.98 0"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
