import { defineComponent as h, computed as m, openBlock as c, createElementBlock as l, normalizeStyle as r, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ h({
  __name: "LogoIncident2",
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
    return (s, t) => (c(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "346",
      version: "1.1",
      viewBox: "0 0 256 346",
      style: r(n.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#F25533",
          d: "M96.73 344.737V298.16h60.969v46.99C214.062 331.68 256 280.686 256 219.843c0-49.516-35.14-119.19-75.886-140.748 5.48 19.333-2.749 44.528-13.71 42.32-4.13-.826-4.56-7.355-5.226-17.903C159.78 81.43 157.27 41.716 117.015 0c-3.209 29.135-49.405 88.484-79.46 127.118a3238 3238 0 0 0-11.28 14.536A129.25 129.25 0 0 0 0 219.844c-.12 58.859 39.713 110.296 96.73 124.91zm65.147-98.952a34.09 34.09 0 0 1-33.996 34.202 34.09 34.09 0 0 1-33.996-34.202c0-7.8 2.685-15.14 6.99-20.763l2.987-3.86c7.99-10.262 20.254-26.021 21.112-33.757 25.306 17.093 36.903 45.226 36.903 58.38"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
