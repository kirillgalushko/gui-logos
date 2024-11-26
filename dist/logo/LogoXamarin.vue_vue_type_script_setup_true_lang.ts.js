import { defineComponent as h, computed as l, openBlock as n, createElementBlock as m, normalizeStyle as r, createElementVNode as i } from "vue";
const p = /* @__PURE__ */ h({
  __name: "LogoXamarin",
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
    return (s, t) => (n(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "228",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 228",
      style: r(c.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#3498DB",
          d: "M73.866 0c-6.914.015-13.682 3.94-17.162 9.927L2.57 103.963c-3.427 6.003-3.427 13.85 0 19.853l54.134 94.037c3.48 5.987 10.248 9.913 17.162 9.927h108.268c6.914-.015 13.682-3.94 17.162-9.927l54.134-94.037c3.427-6.003 3.426-13.85 0-19.853L199.296 9.927C195.816 3.939 189.048.014 182.134 0zm.983 55.013c.149-.015.305-.015.454 0h18.674a2.46 2.46 0 0 1 2.042 1.212l31.679 56.452c.16.28.262.59.3.91.04-.32.142-.63.302-.91l31.603-56.452a2.47 2.47 0 0 1 2.117-1.212h18.675c1.653.014 2.892 2.097 2.117 3.561l-30.923 55.316 30.923 55.24c.848 1.472-.42 3.651-2.117 3.637H162.02a2.47 2.47 0 0 1-2.117-1.288L128.3 115.026a2.4 2.4 0 0 1-.301-.909 2.4 2.4 0 0 1-.301.91l-31.68 56.452a2.47 2.47 0 0 1-2.04 1.288H75.302c-1.697.015-2.965-2.165-2.117-3.637l30.923-55.24-30.923-55.316c-.741-1.336.163-3.276 1.663-3.561"
        })
      ], -1)
    ]), 4));
  }
});
export {
  p as _
};
