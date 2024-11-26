import { defineComponent as s, computed as l, openBlock as p, createElementBlock as h, normalizeStyle as r, createStaticVNode as a } from "vue";
const m = /* @__PURE__ */ s({
  __name: "LogoPluralsight2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const t = i, o = l(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (n, e) => (p(), h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(o.value)
    }, e[0] || (e[0] = [
      a('<defs><linearGradient id="pluralsight-2-gui-asset-a" x1="49.999%" x2="49.999%" y1="1.576%" y2="100.443%"><stop offset="0%" stop-color="#DF5430"></stop><stop offset="100%" stop-color="#D7197E"></stop></linearGradient></defs><g><path fill="url(#pluralsight-2-gui-asset-a)" d="M256 128c0 70.695-57.31 128-128.003 128C57.303 256 0 198.695 0 128S57.303 0 127.997 0C198.69 0 256 57.305 256 128"></path><path fill="#FFFFFE" d="M95.092 61.479v133.029l115.207-66.511zm11.029 19.103 82.12 47.415-82.12 47.414z"></path><path fill="#FFFFFE" d="M68.609 76.002v103.983l90.046-51.995zm11.029 19.103 56.966 32.885-56.966 32.898z"></path></g>', 2)
    ]), 4));
  }
});
export {
  m as _
};
