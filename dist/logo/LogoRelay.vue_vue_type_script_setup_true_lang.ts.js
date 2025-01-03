import { defineComponent as n, computed as s, openBlock as m, createElementBlock as c, normalizeStyle as r, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoRelay",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = s(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (l, t) => (m(), c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "151",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 151",
      style: r(h.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#F26B00",
          d: "M208.615 119.908H96.683c-10.537 0-19.11-8.572-19.11-19.107 0-10.539 8.572-19.111 19.11-19.111h61.129c17.84 0 32.353-14.513 32.353-32.353s-14.512-32.354-32.353-32.354H47.223C44.17 7.143 34.995 0 24.152 0 10.811 0 0 10.81 0 24.152c0 13.341 10.812 24.152 24.153 24.152 11.239 0 20.687-7.677 23.381-18.076h110.279c10.535 0 19.107 8.573 19.107 19.11s-8.572 19.109-19.107 19.109h-61.13c-17.839 0-32.353 14.513-32.353 32.354 0 17.84 14.513 32.352 32.354 32.352h111.93c2.878 10.121 12.189 17.53 23.234 17.53 13.341 0 24.152-10.81 24.152-24.151 0-13.342-10.81-24.152-24.152-24.152-11.044 0-20.354 7.408-23.233 17.528"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
