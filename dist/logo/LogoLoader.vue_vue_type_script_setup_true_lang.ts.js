import { defineComponent as l, computed as m, openBlock as n, createElementBlock as r, normalizeStyle as p, createElementVNode as t } from "vue";
const c = /* @__PURE__ */ l({
  __name: "LogoLoader",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, o = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, h) => (n(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "247",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 247",
      style: p(o.value)
    }, h[0] || (h[0] = [
      t("g", { fill: "#497BBB" }, [
        t("path", { d: "m165.759 82.951 58.343 108.03-19.343 28.728H51.344l-19.478-29.302L90.201 82.95zm16.047-26.903H74.194L.493 191.81l36.431 54.802h182.152l36.431-54.102z" }),
        t("path", { d: "M163.87 145.725h-42.596l15.694-42.596h-24.661l-33.544 67.455h98.474zM9.178 192.806l44.838 40.354h152.451l44.839-40.354zM128 0c-20.011 0-36.234 16.28-36.234 36.369 0 2.13.22 4.2.57 6.228h23.024c-.928-1.888-1.493-3.982-1.493-6.228 0-7.834 6.327-14.183 14.129-14.183 7.806 0 14.128 6.35 14.128 14.183 0 2.246-.57 4.34-1.493 6.228h23.03c.349-2.027.569-4.103.569-6.228C164.234 16.28 148.01 0 128 0" })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};