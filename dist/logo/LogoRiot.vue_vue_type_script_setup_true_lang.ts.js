import { defineComponent as n, computed as m, openBlock as r, createElementBlock as c, normalizeStyle as l, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoRiot",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, t) => (r(), c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "248",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 248",
      style: l(h.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#ED1846",
          "fill-rule": "nonzero",
          d: "M0 3.799C0 1.7 1.7 0 3.799 0h169.915C219.16 0 256 36.965 256 82.564v14.549c0 2.098-1.7 3.799-3.798 3.799h-47.26a3.8 3.8 0 0 1-3.8-3.8V82.565c0-15.2-12.28-27.521-27.428-27.521H58.656a3.8 3.8 0 0 0-3.799 3.798v185.053c0 2.097-1.706 3.813-3.8 3.667C22.534 245.603 0 221.767 0 192.65zm104.37 106.286H192c35.346 0 64 28.75 64 64.217v18.347c0 29.118-22.533 52.954-51.058 54.912-2.093.146-3.8-1.57-3.8-3.667v-69.592c0-5.067-4.093-9.174-9.142-9.174h-36.571c-29.025 0-52.784-22.616-54.729-51.244-.142-2.092 1.572-3.799 3.67-3.799"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
