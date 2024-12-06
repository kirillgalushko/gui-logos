import { defineComponent as c, computed as h, openBlock as n, createElementBlock as m, normalizeStyle as r, createElementVNode as t } from "vue";
const l = /* @__PURE__ */ c({
  __name: "LogoCrashlytics",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, s = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, i) => (n(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "276",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 276",
      style: r(s.value)
    }, i[0] || (i[0] = [
      t("g", { fill: "#9B1B1D" }, [
        t("path", { d: "M105.637 54.539s-.001-25.483.069-35.862c.077-11.206 7.148-18.27 18.243-18.303q16.348-.049 32.697 0c10.982.031 18.073 7.01 18.099 17.932.05 21.279.018 42.558.007 63.837-.001 1.121-.126 2.241-.221 3.826-20.04-11.604-40.489-13.325-61.279-3.697-15.542 7.197-26.312 19.192-32.038 35.368-11.418 32.259 6.047 67.696 38.696 78.75 33.882 11.47 72.208-7.382 81.708-46.091.972.81 33.112 32.373 48.225 47.352 8.212 8.139 8.199 17.887.022 26.022a5513 5513 0 0 1-22.416 22.173c-8.327 8.19-18.198 8.223-26.466.098-7.496-7.366-26.32-25.768-26.32-25.768s.152 26.471.08 37.24c-.07 10.472-7.172 17.578-17.609 17.635-11.158.062-22.317.053-33.475.003-10.65-.046-17.812-7.098-17.94-17.811-.123-10.378-.029-36.85-.029-36.85s-18.152 18.226-25.56 25.497c-8.322 8.168-18.15 8.169-26.466.014a5507 5507 0 0 1-22.166-21.872c-8.581-8.512-8.55-18.034-.13-26.574 8.183-8.3 25.137-25.671 25.137-25.671s-26.843.045-38.131-.013C6.755 171.715.067 164.983.029 153.365c-.035-10.51-.043-21.02.003-31.53.049-11.336 6.793-18.097 18.19-18.173 11.028-.073 38.422-.018 38.422-.018S38.143 85.149 30.516 77.547c-7.828-7.803-7.894-17.677-.138-25.437 7.797-7.8 15.629-15.565 23.532-23.258 7.44-7.241 17.71-7.311 25.038.049 8.499 8.535 26.689 25.638 26.689 25.638" }),
        t("path", { d: "M165.772 137.581c.012 13.963-11.138 25.054-25.232 25.099-14.316.045-25.529-11.063-25.473-25.232.055-13.867 11.424-25.047 25.413-24.99 14.032.057 25.279 11.23 25.292 25.123" })
      ], -1)
    ]), 4));
  }
});
export {
  l as _
};