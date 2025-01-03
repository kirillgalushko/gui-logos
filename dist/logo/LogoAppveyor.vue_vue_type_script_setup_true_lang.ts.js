import { defineComponent as n, computed as h, openBlock as r, createElementBlock as l, normalizeStyle as p, createElementVNode as i } from "vue";
const c = /* @__PURE__ */ n({
  __name: "LogoAppveyor",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, m = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, t) => (r(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: p(m.value)
    }, t[0] || (t[0] = [
      i("g", { "fill-rule": "evenodd" }, [
        i("path", {
          fill: "#00B3E0",
          d: "M127.586 0C198.835 0 256 57.165 256 127.586A127.997 127.997 0 0 1 127.586 256C57.165 256 0 198.835 0 127.586 0 57.165 57.165 0 127.586 0m31.482 152.44c-14.084 18.227-39.767 21.54-57.165 7.456-17.398-13.255-19.884-38.938-5.8-57.165 14.913-17.398 40.596-20.712 57.994-7.456 17.398 14.084 19.884 39.767 4.971 57.165m-67.935 83.677 48.88-47.224c-18.227 4.143-37.282.829-52.194-11.599-17.398-13.255-24.855-35.624-22.37-56.336L21.54 169.01s-5.799-10.77-7.456-30.654l77.049-60.479c23.197-16.57 54.68-17.398 77.048 0 24.855 19.884 29.825 56.337 11.599 83.676l-56.337 80.363c-8.284 0-24.854-2.486-32.31-5.8"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
