import { defineComponent as n, computed as l, openBlock as m, createElementBlock as r, normalizeStyle as s, createElementVNode as i } from "vue";
const g = /* @__PURE__ */ n({
  __name: "LogoZorinOs",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (m(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "227",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 227",
      style: s(h.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#0AF",
          d: "M125.928 0 64.159.034l-17.884 31.35h163.553L192.15.205zM24.143 70.28 0 112.91l22.493 39.964h8.684l122.746-82.593zm199.51 0L100.89 152.875h132.686L256 113.254l-24.178-42.973zM44.47 191.773l19.398 34.186 66.205.207 61.786-.035 19.604-34.358z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
