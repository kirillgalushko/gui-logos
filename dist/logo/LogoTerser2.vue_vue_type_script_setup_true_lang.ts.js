import { defineComponent as h, computed as p, openBlock as o, createElementBlock as m, normalizeStyle as a, createStaticVNode as n } from "vue";
const s = /* @__PURE__ */ h({
  __name: "LogoTerser2",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const t = l, i = p(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (d, e) => (o(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "257",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 257",
      style: a(i.value)
    }, e[0] || (e[0] = [
      n('<g><path fill="#00B3E3" d="m99.405 111.85-39.329 16.42L0 93.633l34.638-58.994 59.535 34.639zm57.954 33.075 5.009 42.34 59.535 34.638L256 162.909l-60.076-34.638z"></path><path fill="#FFC843" d="m128.27 160.204 34.098 27.06v69.277H94.173v-69.277zm34.098-90.927V0H94.173v69.277l34.098 27.407z"></path><path fill="#FF4338" d="m157.359 113.344 5.009-44.067 59.535-34.639L256 93.632l-60.076 34.639zM60.076 128.27 0 162.909l34.097 58.994 60.076-34.639 9.936-42.419z"></path><path fill="#002F32" d="m162.368 108.786 33.556 19.485-33.556 19.484-6.6-19.484zm-68.195 0-34.097 19.485 34.097 19.484 7.58-19.484z"></path><path fill="#FF350F" d="m128.27 88.761 34.098-19.484v39.51l-22.499-3.948zm-34.097 58.994v39.51l34.098-19.485-11.943-18.496z"></path><path fill="#008C3C" d="M162.368 147.755v39.51L128.27 167.78l13.699-15zM128.27 88.76 94.173 69.277v39.51l22.371-3.68z"></path><polygon fill="#00250D" points="128.270613 88.7610994 94.1733615 108.786469 94.1733615 147.754757 128.270613 167.780127 162.367865 147.754757 162.367865 108.786469"></polygon></g>', 1)
    ]), 4));
  }
});
export {
  s as _
};
