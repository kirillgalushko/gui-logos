import { defineComponent as n, computed as l, openBlock as h, createElementBlock as r, normalizeStyle as p, createElementVNode as o } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoLoopback2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, m = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, t) => (h(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "293",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 293",
      style: p(m.value)
    }, t[0] || (t[0] = [
      o("g", null, [
        o("path", {
          fill: "#3F5DFF",
          "fill-rule": "nonzero",
          d: "M255.268 75.543a5.85 5.85 0 0 0-2.925-5.047L130.194.784a5.85 5.85 0 0 0-5.851 0L2.926 71.732A5.85 5.85 0 0 0 0 76.816L.731 217.44a5.85 5.85 0 0 0 2.926 5.047l122.149 69.683a5.85 5.85 0 0 0 5.851 0l121.417-70.948a5.85 5.85 0 0 0 2.926-5.084zm-127.575-2.691 51.28 29.257.161 51.463-20.21-11.527-.094-28.197-31.013-17.693-30.859 18.03.088 28.182-6.883 4.008-13.246 8.506-.168-52.275zm-8.88 56.817-14.519 8.463-.05-16.757zM36.571 168.28v-42.752l32.915-19.266.073 23.318-12.764 7.46.103 19.588 17.013 9.7 77.678-45.35.065 23.318-77.612 45.35zm91.736 51.88-43.461-24.81 19.12-12.288 24.217 13.81 24.444-14.285 20.239 11.542zm54.126-31.064-45.122-25.724 20.041-11.761 24.927 14.19 16.91-9.882-.102-19.588-12.77-7.314-.073-23.267 33.184 18.952v42.752z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
