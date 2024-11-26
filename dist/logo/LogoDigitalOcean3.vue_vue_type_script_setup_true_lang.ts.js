import { defineComponent as n, computed as m, openBlock as s, createElementBlock as l, normalizeStyle as c, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoDigitalOcean3",
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
    return (r, t) => (s(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: c(h.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#0080FF",
          d: "M128 206.55v49.448c83.813 0 149.07-80.968 121.653-168.793-11.981-38.38-42.478-68.877-80.858-80.858C80.97-21.069 0 44.19 0 128.001h49.561c.008 0 .013-.014.013-.014.008-52.597 52.061-93.262 107.36-73.196 20.487 7.435 36.829 23.773 44.268 44.259 20.069 55.266-20.535 107.3-73.088 107.374v-49.288l-.009-.003H78.697c-.005 0-.01.007-.01.007v49.41zm-49.32 37.977H40.715l-.01-.009V206.55h37.982v37.968s-.005.009-.009.009M40.732 206.55H8.908c-.013 0-.023-.008-.023-.008v-31.81s.01-.024.023-.024H40.71c.013 0 .023.01.023.01z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
