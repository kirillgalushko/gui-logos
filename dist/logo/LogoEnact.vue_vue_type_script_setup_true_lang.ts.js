import { defineComponent as n, computed as p, openBlock as g, createElementBlock as s, normalizeStyle as l, createStaticVNode as h } from "vue";
const c = /* @__PURE__ */ n({
  __name: "LogoEnact",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const o = e, i = p(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (m, t) => (g(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "313",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 313",
      style: l(i.value)
    }, t[0] || (t[0] = [
      h('<g fill="#5582FF"><polygon points="127.948241 248.132632 50.3097452 197.408815 50.3097452 168.734331 128.051759 219.613425 127.948241 155.328751 50.3097452 110.091387 50.3097452 83.2802264 128 126.913061 128 126.913061 128.103518 126.96482 127.948241 62.5766276 0 0.0517589972 0 219.561666 128.051759 312.210271"></polygon><polygon points="128.051759 312.210271 256 219.665184 256 164.541852 127.948241 248.132632" opacity=".8"></polygon><polygon points="128.051759 219.613425 217.80186 160.918722 217.80186 103.000404 127.948241 155.328751" opacity=".8"></polygon><polygon points="128 126.913061 128 126.913061 128.103518 126.96482 256 55.071573 256 0 127.948241 62.5766276" opacity=".8"></polygon></g>', 1)
    ]), 4));
  }
});
export {
  c as _
};
