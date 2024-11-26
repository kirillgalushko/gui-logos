import { defineComponent as l, computed as p, openBlock as n, createElementBlock as h, normalizeStyle as m, createStaticVNode as s } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoJspm",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, i = p(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (g, e) => (n(), h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "298",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 298",
      style: m(i.value)
    }, e[0] || (e[0] = [
      s('<g><polygon fill="#FEEA5F" points="210.74066 74.864668 127.883281 122.741921 44.9589934 74.8797764 127.873568 26.9938898"></polygon><polygon fill="#E0CC41" points="104.249828 258.239798 22.0107834 210.774618 22.0107834 115.121688 104.249828 162.568535"></polygon><polygon fill="#EFDB50" points="150.050689 161.648756 234.903969 112.660661 234.903969 211.846821 150.050689 260.818142"></polygon><path fill="#C3C2C2" d="m50.435 74.879 77.446 44.7 77.384-44.714-77.393-44.708zM127.658 0l128.33 74.699-61.239 48.043-67.764 25.904-63.565-20.762L0 74.69z"></path><path fill="#B3B3B3" d="m154.24 253.505 76.476-44.137v-89.394l-76.477 44.152zm-27.311-104.859 129.059-73.778v149.337l-129.06 73.707-6.546-73.707z"></path><path fill="#A5A5A4" d="m101.559 164.147-76.857-44.342v89.393l76.857 44.358zM0 74.867l126.985 73.78-.056 149.264L0 224.77z"></path></g>', 1)
    ]), 4));
  }
});
export {
  d as _
};
