import { defineComponent as n, computed as m, openBlock as s, createElementBlock as c, normalizeStyle as r, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoHerokuRedis",
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
    return (l, t) => (s(), c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "304",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 304",
      style: r(h.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#283174",
          d: "M103.604.004c-52.328 0-90.308 37.98-90.308 90.308 0 39.759 21.958 71.185 55.447 84.01L1.466 287.588a10.453 10.453 0 0 0 8.988 15.791h93.15c5.775 0 10.455-4.683 10.455-10.455V10.459c0-5.776-4.68-10.455-10.455-10.455m151.269 288.201L195.46 170.702c28.82-14.554 47.24-43.978 47.24-80.394C242.702 37.986 204.725 0 152.395 0c-5.771 0-10.455 4.684-10.455 10.455 0 5.778 4.684 10.455 10.455 10.455 40.857 0 69.399 28.541 69.399 69.398 0 40.865-28.542 69.399-69.4 69.399-5.77 0-10.454 4.684-10.454 10.455s4.684 10.455 10.455 10.455c8.144 0 15.887-1.02 23.246-2.771l60.568 119.796a10.463 10.463 0 0 0 14.05 4.614c5.152-2.606 7.222-8.893 4.615-14.051"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
