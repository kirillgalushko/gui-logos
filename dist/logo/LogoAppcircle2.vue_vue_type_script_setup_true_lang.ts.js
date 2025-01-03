import { defineComponent as h, computed as l, openBlock as n, createElementBlock as m, normalizeStyle as s, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ h({
  __name: "LogoAppcircle2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, c = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (n(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: s(c.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#FF8F34",
          d: "M92.875 181.583q29.306 23.826 9.866 50.629c-15.974 21.514-45.54 29.33-70.568 17.226l-.21-.102-.181-.088C3.647 235.52-7.986 201.672 5.798 173.65l31.199-63.426 17.531-35.64 21.07-42.833C85.836 10.936 107.19-.845 129.05.047c21.117-.08 41.441 11.604 51.351 31.75l69.8 141.9c13.784 28.022 2.15 61.869-25.984 75.598l-.181.088-.21.102c-27.961 13.522-61.588 2.182-75.597-25.347q-10.89-22.815 14.527-43.067h-.005c12.744-10.254 20.894-25.946 20.894-43.534 0-30.89-25.142-55.933-56.156-55.933s-56.156 25.042-56.156 55.933c0 17.884 8.426 33.807 21.54 44.046m34.666-14.732c-16.296 0-29.506-13.158-29.506-29.389 0-16.23 13.21-29.388 29.506-29.388s29.505 13.157 29.505 29.388c0 16.23-13.21 29.389-29.505 29.389"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
