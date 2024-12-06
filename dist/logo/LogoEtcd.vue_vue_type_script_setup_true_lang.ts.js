import { defineComponent as o, computed as m, openBlock as n, createElementBlock as h, normalizeStyle as r, createElementVNode as c } from "vue";
const a = /* @__PURE__ */ o({
  __name: "LogoEtcd",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, l = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, t) => (n(), h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "248",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 248",
      style: r(l.value)
    }, t[0] || (t[0] = [
      c("g", null, [
        c("path", {
          fill: "#419EDA",
          d: "M252.386 128.064c-1.202.1-2.41.147-3.693.147-7.446 0-14.67-1.746-21.187-4.944 2.17-12.447 3.092-24.987 2.85-37.481-7.065-10.22-15.14-19.863-24.256-28.747 3.955-7.415 9.801-13.795 17.1-18.319l3.133-1.937-2.442-2.754c-12.581-14.167-27.596-25.12-44.62-32.552L175.876 0l-.862 3.588c-2.03 8.363-6.274 15.908-12.1 21.962a194 194 0 0 0-34.956-14.405A194 194 0 0 0 93.056 25.52C87.254 19.473 83.02 11.947 80.999 3.608L80.13.02l-3.382 1.47C59.939 8.815 44.51 20.065 32.135 34.02l-2.449 2.76 3.13 1.937c7.276 4.506 13.106 10.849 17.054 18.223-9.088 8.85-17.154 18.462-24.214 28.635-.275 12.489.6 25.12 2.78 37.74-6.484 3.167-13.668 4.894-21.065 4.894-1.298 0-2.513-.047-3.693-.145L0 127.785l.345 3.671c1.802 18.578 7.57 36.247 17.154 52.523l1.87 3.176 2.81-2.384a48.04 48.04 0 0 1 22.737-10.65 195 195 0 0 0 19.46 31.696c11.828 4.137 24.151 7.225 36.878 9.063 1.22 8.417.248 17.122-3.072 25.171l-1.4 3.411 3.6.793c9.22 2.027 18.523 3.06 27.631 3.06l27.623-3.06 3.604-.793-1.403-3.417c-3.312-8.05-4.284-16.765-3.063-25.183 12.676-1.84 24.954-4.92 36.738-9.045a195 195 0 0 0 19.482-31.726 48.25 48.25 0 0 1 22.848 10.66l2.809 2.38 1.862-3.168c9.6-16.297 15.368-33.965 17.142-52.513l.345-3.665zM167.49 172.96c-13.068 3.554-26.34 5.348-39.532 5.348-13.228 0-26.483-1.793-39.563-5.348a153.3 153.3 0 0 1-16.932-35.67c-4.066-12.517-6.445-25.63-7.135-39.134 8.446-10.443 18.052-19.591 28.665-27.293a152.6 152.6 0 0 1 34.965-19.011 153.2 153.2 0 0 1 34.898 18.97c10.654 7.743 20.302 16.962 28.79 27.47-.724 13.427-3.132 26.465-7.204 38.961a152.8 152.8 0 0 1-16.952 35.707m-28.74-62.998c0 9.232 7.482 16.7 16.702 16.7 9.217 0 16.69-7.466 16.69-16.7 0-9.196-7.473-16.692-16.69-16.692-9.22 0-16.701 7.496-16.701 16.692m-21.578 0c0 9.232-7.48 16.7-16.7 16.7-9.226 0-16.685-7.466-16.685-16.7 0-9.193 7.46-16.689 16.686-16.689 9.22 0 16.7 7.496 16.7 16.69"
        })
      ], -1)
    ]), 4));
  }
});
export {
  a as _
};