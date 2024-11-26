import { defineComponent as i, computed as l, openBlock as p, createElementBlock as g, normalizeStyle as s, createStaticVNode as h } from "vue";
const y = /* @__PURE__ */ i({
  __name: "LogoNats2",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const o = e, n = l(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (m, t) => (p(), g("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "266",
      version: "1.1",
      viewBox: "0 0 256 266",
      style: s(n.value)
    }, t[0] || (t[0] = [
      h('<g><polygon fill="#34A574" points="128 -1.35040045e-14 256 -1.35040045e-14 256 103.768374 128 103.768374"></polygon><polygon fill="#27AAE1" points="0 -1.35040045e-14 128 -1.35040045e-14 128 103.768374 0 103.768374"></polygon><polygon fill="#8DC63F" points="256 103.8634 256 207.631774 171.806978 207.631774 171.806978 265.027468 109.184855 207.821826 128 207.061618 128 103.8634"></polygon><polygon fill="#375C93" points="128 103.8634 128 224.540533 109.184855 207.821826 0 207.821826 0 103.8634"></polygon><polygon fill="#FFF" points="181.024499 134.176689 181.024499 48.2731997 211.622866 48.2731997 211.622866 159.358575 165.250186 159.358575 71.6495917 71.9346696 71.6495917 159.453601 40.956199 159.453601 40.956199 48.2731997 88.9443207 48.2731997 181.024499 134.176689"></polygon></g>', 1)
    ]), 4));
  }
});
export {
  y as _
};
