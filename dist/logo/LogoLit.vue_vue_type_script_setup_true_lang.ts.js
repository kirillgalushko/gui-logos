import { defineComponent as h, computed as l, openBlock as p, createElementBlock as n, normalizeStyle as m, createStaticVNode as s } from "vue";
const r = /* @__PURE__ */ h({
  __name: "LogoLit",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, i = l(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (v, e) => (p(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "242",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 242",
      style: m(i.value)
    }, e[0] || (e[0] = [
      s('<g><path fill="#000" d="M475.256 93.967v34.696H512v18.793h-36.744v42.888c0 4.336.12 8.673.603 12.408.964 6.385 4.819 12.65 10.12 15.059 6.866 3.132 11.685 2.53 26.021 2.048l-3.494 20.72c-.963.483-4.818.362-8.433.362-8.433 0-40.237 3.012-46.742-29.756-1.084-5.662-.843-11.445-.843-20.36v-43.128h-16.384l.24-19.155h16.144V93.967zm-62.283 34.575v110.23h-22.648v-110.23zm0-34.575v19.637h-22.89V93.967zM312.26 217.088h58.067l-21.685 21.685h-59.513V93.967h23.13z"></path><polygon fill="#00E8FF" points="48.1882353 144.564706 67.7087647 110.887603 96.4960074 96.4960074 144.664882 144.664882 152.8215 191.161956 144.564706 240.941176 96.3764706 192.752941 67.7087647 173.466441"></polygon><path fill="#283198" d="M96.376 192.753V96.376l48.189-48.188v96.377zm-96.376 0 48.188 48.188 6.929-45.63-6.929-50.746-28.267 17.851z"></path><path fill="#324FFF" d="M48.188 144.565V48.188L96.376 0v96.376zm96.377 96.376v-96.376l48.188-48.189v96.377zM0 192.753V96.376l48.188 48.189z"></path><polygon fill="#0FF" points="48.1882353 240.941176 48.1882353 144.564706 96.3764706 192.752941"></polygon></g>', 1)
    ]), 4));
  }
});
export {
  r as _
};
