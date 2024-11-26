import { defineComponent as i, computed as p, openBlock as a, createElementBlock as o, normalizeStyle as d, createStaticVNode as m } from "vue";
const s = /* @__PURE__ */ i({
  __name: "LogoStruts",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const t = l, h = p(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (n, e) => (a(), o("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "290",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 290",
      style: d(h.value)
    }, e[0] || (e[0] = [
      m('<g><path fill="#202A5A" d="M241.026 73.902 130.416 9.66 9.66 77.283v135.245l120.755 67.623 115.925-67.623V71.487z"></path><path fill="#2C448A" d="m9.66 77.283 120.755 67.623L246.34 77.283 130.415 9.66z"></path><path fill="#283A79" d="m246.34 71.487-38.642 20.287-.483 8.694-76.8 44.438V280.15l115.925-67.623z"></path><path fill="#202A5A" d="M9.66 77.283v135.245l120.755 67.623V144.906z"></path><path fill="#3558A7" d="M0 212.528v-43.471l130.415 77.283v43.471zM0 77.283v24.151l130.415 77.283v-24.151z"></path><path fill="#416FB5" d="M256 212.528v-24.15L150.219 142.49l-19.804 12.075v23.668l64.242 28.498-64.242 39.608v43.471z"></path><path fill="#477FC1" d="m194.657 206.732-7.729-2.898-56.513 32.845L9.66 169.057v-5.797L0 169.057l130.415 77.283zM56.996 86.943l73.42-43.471 77.282 48.302 38.642-20.287L130.415 0 0 77.283l130.415 77.283 19.804-12.075z"></path><path fill="#202A5A" d="m207.215 100.468.483-8.694-77.283-48.302-73.419 43.471 8.212 4.83 65.207-38.64z"></path></g>', 1)
    ]), 4));
  }
});
export {
  s as _
};
