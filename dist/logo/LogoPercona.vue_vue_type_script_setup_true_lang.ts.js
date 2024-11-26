import { defineComponent as i, computed as p, openBlock as r, createElementBlock as n, normalizeStyle as a, createStaticVNode as c } from "vue";
const l = /* @__PURE__ */ i({
  __name: "LogoPercona",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, s = p(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (h, e) => (r(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "250",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 250",
      style: a(s.value)
    }, e[0] || (e[0] = [
      c('<defs><linearGradient id="percona-gui-asset-a" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FBB32F"></stop><stop offset="50.474%" stop-color="#C11511"></stop><stop offset="100%" stop-color="#C11411"></stop></linearGradient></defs><g><path fill="url(#percona-gui-asset-a)" d="M128 .578C57.308.578 0 56.413 0 125.29c0 43.086 22.427 81.066 56.526 103.47V125.354c-.001-.158-.023-.31-.023-.467s.022-.31.023-.468v-.877h.043c.701-40.146 32.335-72.48 71.323-72.48 39.427 0 71.388 33.052 71.388 73.825 0 40.772-31.961 73.825-71.388 73.825-15.356 0-29.543-5.062-41.187-13.592v58.207A130.8 130.8 0 0 0 128 250c70.692 0 128-55.835 128-124.71C256 56.412 198.692.577 128 .577"></path><path fill="#FCB42F" d="M171.197 127.472c0 23.59-19.123 42.713-42.713 42.713S85.77 151.062 85.77 127.472s19.124-42.713 42.714-42.713 42.713 19.123 42.713 42.713"></path></g>', 2)
    ]), 4));
  }
});
export {
  l as _
};
