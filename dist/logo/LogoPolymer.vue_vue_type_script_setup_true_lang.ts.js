import { defineComponent as a, computed as h, openBlock as f, createElementBlock as o, normalizeStyle as e, createStaticVNode as d } from "vue";
const F = /* @__PURE__ */ a({
  __name: "LogoPolymer",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const t = i, p = h(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (m, l) => (f(), o("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "178",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 178",
      style: e(p.value)
    }, l[0] || (l[0] = [
      d('<g fill="none"><g><path fill="#FF4081" d="M153.6 177.98 51.194.605H102.4L204.807 177.98z"></path><path fill="#FFF" fill-opacity=".2" d="m153.6 177.98 25.6-44.344 25.607 44.344z"></path><path fill="#FFF" fill-opacity=".1" d="m128 133.636 25.6 44.344 25.6-44.344z"></path><path fill="#000" fill-opacity=".1" d="m102.4 89.292 25.6 44.344 25.6-44.344z"></path><path fill="#000" fill-opacity=".2" d="M102.4 89.292 128 44.948l25.6 44.344z"></path><path fill="#000" fill-opacity=".3" d="m76.8 44.948 25.6 44.344 25.601-44.344h-51.2"></path><path fill="#000" fill-opacity=".4" d="M76.8 44.948 102.4.605l25.601 44.343h-51.2"></path><path fill="#000" fill-opacity=".5" d="M51.194.605 76.8 44.948 102.4.605z"></path></g><g><path fill="#536DFE" d="M51.194 177.98-.013 89.292l25.606-44.344L102.4 177.98H51.193"></path><path fill="#FFF" fill-opacity=".2" d="M51.194 177.98 76.8 133.636l25.6 44.344z"></path><path fill="#FFF" fill-opacity=".1" d="m25.593 133.636 25.6 44.344L76.8 133.636z"></path><path d="m25.593 133.636 25.6-44.344L76.8 133.636z"></path><path fill="#000" fill-opacity=".1" d="m-.013 89.292 25.606 44.344 25.6-44.344z"></path><path fill="#000" fill-opacity=".2" d="m-.013 89.292 25.606-44.344 25.6 44.344z"></path></g><g><path fill="#303F9F" d="m51.194 89.292-25.6-44.344L51.193.605 76.8 44.948z"></path><path fill="#000" fill-opacity=".2" d="M76.8 44.948 51.194.605l-25.6 44.343z"></path></g><g><path fill="#3F51B5" d="M204.806 177.98 179.2 133.636l25.606-44.344 25.6 44.344z"></path><path fill="#000" fill-opacity=".2" d="m230.407 133.636-25.6 44.344-25.607-44.344z"></path></g><g><path fill="#7986CB" d="M230.407 133.636 153.6.605h51.207l51.207 88.687z"></path><path fill="#FFF" fill-opacity=".2" d="m204.806 89.292 25.6 44.344 25.607-44.344z"></path><path fill="#FFF" fill-opacity=".1" d="m204.806 89.292 25.6-44.344 25.607 44.344z"></path><path fill="#000" fill-opacity=".1" d="M179.2 44.948 204.806.605l25.6 44.343z"></path><path fill="#000" fill-opacity=".2" d="m153.6.605 25.6 44.343L204.808.605z"></path></g></g>', 1)
    ]), 4));
  }
});
export {
  F as _
};
