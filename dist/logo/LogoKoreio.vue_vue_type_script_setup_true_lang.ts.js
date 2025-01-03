import { defineComponent as e, computed as i, openBlock as a, createElementBlock as d, normalizeStyle as m, createStaticVNode as o } from "vue";
const n = /* @__PURE__ */ e({
  __name: "LogoKoreio",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const t = h, p = i(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (v, l) => (a(), d("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "297",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 297",
      style: m(p.value)
    }, l[0] || (l[0] = [
      o('<g><path fill="#C5E3EB" d="m127.834 0 2.865 6.447v63.99l-2.865 4.059-5.595.49-56.007-32.724-2.15-5.014z"></path><path fill="#C5E3EB" d="m.332 74.496 1.432 4.536 55.555 31.835 6.764.16 2.626-4.298V41.307l-2.626-4.06z"></path><path fill="#78ABDB" d="m.332 222.054 2.387-4.656 57.239-32.8 4.125.924 5.253-1.432 56.545 32.402 1.953 5.562 2.03 3.582v68.048l-2.03 2.866z"></path><path fill="#A4C0C5" d="m64.083 37.248 63.75 37.248 2.866 6.446v60.647l-2.865 6.686-7.763-.707-53.958-31.527-2.03-5.014z"></path><path fill="#7BA6C1" d="m127.834 148.275-1.308 3.744-56.116 32.787-6.327.716-1.91-4.656v-67.331l1.91-2.508z"></path><path fill="#98C3E4" d="m.332 222.054 63.75-36.532v-74.495L.333 74.496z"></path><path fill="#4B7C9E" d="m127.834 148.275 1.671 4.656v63.75l-1.671 5.373-63.751-36.532z"></path><path fill="#F4BC6A" d="M127.834 296.55v-74.496l3.175-.848 57.234 33.44 3.342 4.656z"></path><path fill="#B48340" d="M127.834 148.275v73.779l63.75 37.248 2.03-5.373v-63.75l-2.03-4.657-3.7-5.013-55.734-32.564z"></path><path fill="#8C3D33" d="m191.585 111.027 2.03 3.224v65.9l-2.03 5.371-63.751-37.247 2.937-4.688 53.89-31.486z"></path><path fill="#C47973" d="m127.834 74.496 4.178-1.075 57.196 32.775 2.377 4.831-63.751 37.248z"></path><path fill="#F4BC6A" d="M191.585 259.302v-73.78l3.682-.835 57.084 32.71 2.985 4.657z"></path><path fill="#BB6651" d="M255.336 74.496h-5.142l-56.39 32.313-2.22 4.218v74.495l63.752 36.532z"></path><path fill="#E1938A" d="M127.834 0v74.496l63.75 36.531 63.752-36.531z"></path></g>', 1)
    ]), 4));
  }
});
export {
  n as _
};
