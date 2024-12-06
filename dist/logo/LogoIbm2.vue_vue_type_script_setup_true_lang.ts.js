import { defineComponent as z, computed as i, openBlock as l, createElementBlock as o, normalizeStyle as V, createElementVNode as h } from "vue";
const a = /* @__PURE__ */ z({
  __name: "LogoIbm2",
  props: {
    width: {},
    height: {}
  },
  setup(v) {
    const m = v, t = i(() => ({
      width: m.width || "1em",
      height: m.height || "1em",
      minWidth: m.width || "1em",
      minHeight: m.height || "1em"
    }));
    return (n, e) => (l(), o("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "205",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 205",
      style: V(t.value)
    }, e[0] || (e[0] = [
      h("g", null, [
        h("path", {
          fill: "#000",
          d: "M99.556 190.06v14.223H0V190.06zm155.582 0a53.9 53.9 0 0 1-36.633 14.222l-104.727-.14V190.06Zm148.028 0-4.966 14.222-4.922-14.222zm-47.61 0v14.223h-71.111V190.06zm156.444 0v14.223h-71.111V190.06zm-240.753-27.15a54 54 0 0 1-5.722 14.222H113.778V162.91Zm141.45 0-4.991 14.223h-18.967l-4.992-14.223zm-57.141 0v14.222h-71.111V162.91zm156.444 0v14.222h-71.111V162.91zm-412.444 0v14.222H0V162.91zM71.11 135.757v14.223H28.444v-14.223zm113.778 0v14.223h-42.667v-14.223zm86.017 0a54.3 54.3 0 0 1 1.902 14.223H224.97v-14.223Zm151.324 0-4.993 14.223h-38.029l-4.994-14.223zm-66.674 0v14.223h-42.667v-14.223zm128 0v14.223h-42.667v-14.223zM71.11 108.606v14.222H28.444v-14.222zm284.445 0v14.222h-42.667v-14.222zm128 0v14.222h-42.667v-14.222zm-229.91 0a54.5 54.5 0 0 1 11.863 14.221H142.222v-14.222Zm178.116 0-4.992 14.222h-57.095l-4.992-14.223zm-37.538-27.151 3.998 11.496 3.997-11.496h81.336v14.222H440.89V82.61l-4.59 13.068h-76.156l-4.589-13.07v13.07H312.89V81.455zm-252.002 0H265.51a54.5 54.5 0 0 1-11.864 14.222H142.222zm-71.111 0v14.222H28.444V81.454zm0-27.152v14.222H28.444V54.303zm113.778 0v14.222h-42.667V54.303zm87.92 0a54.3 54.3 0 0 1-1.903 14.222H224.97V54.303Zm111.973 0 4.946 14.222H312.89V54.303zm98.773 0v14.222h-76.838l4.945-14.222zm-384-27.152v14.223H0V27.15zm165.97 0a54 54 0 0 1 5.722 14.222h-157.47V27.151Zm246.475 0v14.222h-95.842l4.946-14.222zm-136.66 0 4.946 14.222h-95.841V27.151zM99.557.001v14.221H0V0zM218.505 0a54.1 54.1 0 0 1 36.633 14.222h-141.36V0ZM512 0v14.223h-86.4L430.546.001zM365.9 0l4.945 14.223h-86.4V.001z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  a as _
};