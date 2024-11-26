import { defineComponent as c, computed as h, openBlock as m, createElementBlock as r, normalizeStyle as a, createElementVNode as o } from "vue";
const p = /* @__PURE__ */ c({
  __name: "LogoSonarcloud2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, n = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, t) => (m(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "232",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 232",
      style: a(n.value)
    }, t[0] || (t[0] = [
      o("g", null, [
        o("path", {
          fill: "#F3702A",
          d: "M239 104.178a75.6 75.6 0 0 0-36.027-25.141v-.915C202.973 35.082 169.31 0 127.81 0 86.28 0 52.6 35.005 52.6 78.137v1.067C22.2 89.16 0 118.768 0 153.698c0 43.04 33.694 78.137 75.195 78.137a73.67 73.67 0 0 0 52.828-22.489 73.44 73.44 0 0 0 52.767 22.489c41.424 0 75.21-35.006 75.21-78.137 0-17.991-6.099-35.585-17-49.52m-58.21 107.898c-30.965 0-56.182-26.194-56.182-58.394a9.71 9.71 0 0 0-9.499-9.849 9.666 9.666 0 0 0-9.513 9.865 80.4 80.4 0 0 0 10.611 39.975 55 55 0 0 1-41.012 18.494c-30.98 0-56.213-26.208-56.213-58.393 0-32.17 25.232-58.378 56.213-58.378 6.708 0 13.233 1.25 19.484 3.567.077 0 .138.077.214.077 2.165.762 5.214 2.24 6.16 3.064a9.15 9.15 0 0 0 13.324-1.067 10.047 10.047 0 0 0-1.036-13.874c-4.147-3.644-10.612-6.13-12.197-6.708a72.7 72.7 0 0 0-25.873-4.727c-1.205 0-2.394 0-3.598.076 1.28-31.102 25.949-55.969 56.213-55.969 30.965 0 56.182 26.193 56.182 58.394a59.4 59.4 0 0 1-23.632 47.598 10.11 10.11 0 0 0-2.24 13.692c1.829 2.652 4.802 4.147 7.76 4.147 1.905 0 3.811-.58 5.503-1.83a78.73 78.73 0 0 0 28.892-42.873c21.71 8.37 36.79 30.173 36.79 54.81-.077 32.11-25.294 58.303-56.35 58.303"
        })
      ], -1)
    ]), 4));
  }
});
export {
  p as _
};
