import { defineComponent as s, computed as h, openBlock as m, createElementBlock as p, normalizeStyle as l, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ s({
  __name: "LogoApplitools2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, n = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, t) => (m(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "350",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 350",
      style: l(n.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#00A298",
          d: "M195.725 174.716a238.4 238.4 0 0 1-5.124 49.174c-21.835-13.617-50.72-29.986-88.82-49.174 38.1-19.2 66.972-35.57 88.82-49.186a238.5 238.5 0 0 1 5.111 49.186M256 74.246V21.494a1023 1023 0 0 1-56.828 46.75C178.845 37.22 152.87 15.32 118.702 0c26.775 23.748 45.176 50.51 59.068 84.088C70.117 161.322 0 174.716 0 174.716s70.117 13.382 177.77 90.629c-13.892 33.59-32.28 60.327-59.069 84.075 34.168-15.321 60.144-37.221 80.471-68.243A1022 1022 0 0 1 256 327.939v-52.752s-6.448-10.747-37.3-32.66c7.864-21.114 12.189-43.958 12.189-67.81a194 194 0 0 0-12.189-67.811c30.852-21.927 37.3-32.66 37.3-32.66"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
