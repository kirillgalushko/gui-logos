import { defineComponent as l, computed as n, openBlock as p, createElementBlock as s, normalizeStyle as g, createStaticVNode as h } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoYaml",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const o = e, i = n(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (r, t) => (p(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "176",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 176",
      style: g(i.value)
    }, t[0] || (t[0] = [
      h('<g><polygon fill="#FFF" points="117.108897 0.802838745 414.159233 0.802838745 414.159233 29.7050336 510.499882 174.216008 1.50011792 174.216008"></polygon><path fill="#000" d="M414.962 0H116.68L0 175.019h512L414.962 29.46zm-1.606 1.606v28.342L509 173.413H3L117.539 1.606z"></path><polygon fill="#000" stroke="#000" points="117.108897 0.802838745 155.645157 0.802838745 40.0363777 174.216008 1.50011792 174.216008 59.3045075 87.5094232 1.50011792 0.802838745 40.0363777 0.802838745 78.5726374 58.6072284"></polygon><polygon fill="#000" stroke="#000" points="49.6704426 174.216008 88.2067023 174.216008 165.279222 58.6072284 165.279222 174.216008 203.815482 174.216008 203.815482 0.802838745 165.279222 0.802838745"></polygon><polygon fill="#000" stroke="#000" points="211.843869 174.216008 250.380129 174.216008 250.380129 58.6072284 288.916389 116.411618 327.452648 58.6072284 327.452648 174.216008 365.988908 174.216008 365.988908 0.802838745 317.818583 0.802838745 288.916389 58.6072284 250.380129 0.802838745 211.843869 0.802838745"></polygon><polygon fill="#000" stroke="#000" points="375.622973 174.216008 510.499882 174.216008 484.809042 135.679748 414.159233 135.679748 414.159233 0.802838745 375.622973 0.802838745"></polygon></g>', 1)
    ]), 4));
  }
});
export {
  d as _
};
