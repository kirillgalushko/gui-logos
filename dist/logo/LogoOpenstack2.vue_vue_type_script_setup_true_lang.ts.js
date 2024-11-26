import { defineComponent as n, computed as m, openBlock as s, createElementBlock as c, normalizeStyle as p, createElementVNode as i } from "vue";
const l = /* @__PURE__ */ n({
  __name: "LogoOpenstack2",
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
    return (r, t) => (s(), c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "251",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 251",
      style: p(h.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#DA1A32",
          d: "M57.82 170.723v9.156c0 7.104 5.756 12.86 12.86 12.86h114.65c7.104 0 12.86-5.756 12.86-12.86v-9.156H256v56.051c0 13.082-10.703 23.785-23.785 23.785H23.785C10.703 250.559 0 239.856 0 226.774v-56.051zm-.01-74.353v57.809H0v-57.81zm198.19 0v57.809h-57.81v-57.81zM232.215 0C245.297 0 256 10.703 256 23.795v56.041h-57.81V70.68c0-7.104-5.756-12.86-12.86-12.86H70.67c-7.104 0-12.86 5.756-12.86 12.86v9.156H0V23.785C0 10.703 10.703 0 23.785 0Z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  l as _
};
