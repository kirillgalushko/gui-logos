import { defineComponent as i, computed as a, openBlock as p, createElementBlock as o, normalizeStyle as c, createStaticVNode as d } from "vue";
const m = /* @__PURE__ */ i({
  __name: "LogoJqueryMobile",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const t = h, l = a(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (n, e) => (p(), o("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "191",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 191",
      style: c(l.value)
    }, e[0] || (e[0] = [
      d('<g><path fill="#0481A3" d="M34.337.037h183.452c4.016 0 6.995 3.724 6.114 7.642l-25.856 114.928a8.744 8.744 0 0 1-8.53 6.825H7.006c-4.482 0-7.81-4.15-6.836-8.526L25.515 7.11A9.04 9.04 0 0 1 34.337.037"></path><path fill="#14BEF0" d="M114.684 31.33h136.448c3.116 0 5.429 2.889 4.749 5.929L232.954 139.78a7.8 7.8 0 0 1-7.613 6.098H88.478c-2.818 0-4.91-2.612-4.291-5.362L107.4 37.16a7.464 7.464 0 0 1 7.283-5.83"></path><path fill="#73D8F4" d="M114.684 31.33a7.464 7.464 0 0 0-7.283 5.83l-20.725 92.272h102.84a8.74 8.74 0 0 0 8.53-6.824l20.536-91.277z"></path><path fill="#6ABA2F" d="M70.112 65.535h62.454c3.375 0 5.873 3.14 5.114 6.43l-26.184 113.421A7.244 7.244 0 0 1 104.44 191H41.032c-3.042 0-5.299-2.823-4.628-5.79l25.57-113.17a8.344 8.344 0 0 1 8.138-6.505"></path><path fill="#B8EC00" d="M84.187 140.517c-.618 2.75 1.474 5.363 4.292 5.363h32.138l3.797-16.448H86.677z"></path><path fill="#FFF" d="M132.566 65.535h-31.539l-14.35 63.897h37.736l13.267-57.468c.76-3.289-1.738-6.429-5.114-6.429"></path><path fill="#81D958" d="M70.112 65.535a8.344 8.344 0 0 0-8.139 6.505l-12.967 57.392h37.67l14.351-63.897z"></path></g>', 1)
    ]), 4));
  }
});
export {
  m as _
};