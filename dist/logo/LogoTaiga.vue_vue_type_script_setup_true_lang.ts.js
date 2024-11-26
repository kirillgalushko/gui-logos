import { defineComponent as a, computed as h, openBlock as o, createElementBlock as l, normalizeStyle as m, createStaticVNode as d } from "vue";
const r = /* @__PURE__ */ a({
  __name: "LogoTaiga",
  props: {
    width: {},
    height: {}
  },
  setup(p) {
    const t = p, e = h(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (c, i) => (o(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: m(e.value)
    }, i[0] || (i[0] = [
      d('<g><path fill="#A295AE" d="m224.288 43.916-11.963 84.2-84.2-11.963 11.963-84.2z" opacity=".8"></path><path fill="#5D6F6D" d="m31.885 212.291 11.963-84.2 84.2 11.963-11.963 84.2z" opacity=".8"></path><path fill="#8CD592" d="m43.848 32.065 84.2 11.962-11.963 84.2-84.2-11.963z" opacity=".8"></path><path fill="#665E74" d="m212.226 224.264-84.2-11.963 11.963-84.2 84.2 11.963z" opacity=".8"></path><path fill="#3C3647" d="m119.642 255.595-51.08-67.997 67.998-51.08 51.08 67.998z" opacity=".8"></path><path fill="#837193" d="m255.463 136.39-67.997 51.079-51.08-67.997 67.998-51.08z" opacity=".8"></path><path fill="#A2F4AC" d="m136.437.554 51.079 67.997-67.997 51.08-51.08-67.998z" opacity=".8"></path><path fill="#7EA685" d="m.463 119.7 67.998-51.08 51.079 67.998-67.997 51.08z" opacity=".8"></path><path fill="#3C3647" d="m127.963 95.742 32.332 32.333-32.332 32.332-32.332-32.332z"></path></g>', 1)
    ]), 4));
  }
});
export {
  r as _
};
