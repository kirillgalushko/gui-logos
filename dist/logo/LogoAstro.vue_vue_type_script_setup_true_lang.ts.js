import { defineComponent as i, computed as o, openBlock as m, createElementBlock as n, normalizeStyle as s, createElementVNode as e } from "vue";
const a = /* @__PURE__ */ i({
  __name: "LogoAstro",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const t = l, h = o(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (p, c) => (m(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "169",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 169",
      style: s(h.value)
    }, c[0] || (c[0] = [
      e("g", null, [
        e("g", null, [
          e("path", {
            fill: "#000",
            d: "M84.026 4.223c1.376 1.708 2.078 4.014 3.482 8.626l30.668 100.744A127.6 127.6 0 0 0 81.51 101.18L61.543 33.702a2.599 2.599 0 0 0-4.987.008L36.83 101.146A127.6 127.6 0 0 0 0 113.578L30.818 12.825c1.409-4.603 2.113-6.905 3.49-8.61a11.3 11.3 0 0 1 4.59-3.398C40.933 0 43.34 0 48.155 0h22.012c4.82 0 7.23 0 9.266.82a11.33 11.33 0 0 1 4.594 3.403"
          }),
          e("path", {
            fill: "#FF5D01",
            d: "M87.695 118.388c-5.055 4.323-15.146 7.271-26.77 7.271-14.266 0-26.223-4.441-29.396-10.414-1.135 3.423-1.389 7.34-1.389 9.844 0 0-.747 12.29 7.8 20.837a8.037 8.037 0 0 1 8.037-8.036c7.607 0 7.599 6.637 7.592 12.022v.48c0 8.173 4.995 15.18 12.099 18.133a16.5 16.5 0 0 1-1.657-7.223c0-7.795 4.577-10.698 9.896-14.07 4.231-2.685 8.933-5.667 12.174-11.649a22 22 0 0 0 2.65-10.494c0-2.337-.363-4.588-1.036-6.701"
          })
        ]),
        e("path", {
          fill: "#000",
          d: "M188.585 112.018c12.828 0 22.45-4.564 26.396-12.334 0 3.7.245 7.524.863 10.484h21.09l-.06-.266c-.935-4.25-1.408-10.009-1.418-17.505V73.165c0-18.008-10.609-26.518-34.166-26.518-20.599 0-34.413 8.51-36.016 22.448h21.955c.74-6.044 5.796-9.374 14.061-9.374 8.14 0 12.703 3.33 12.703 10.238v1.85l-22.324 1.973c-10.746 1.1-16.898 2.923-21.208 5.832l-.13.088c-4.564 3.084-6.907 7.771-6.907 13.568 0 11.594 9.62 18.748 25.161 18.748m8.141-12.828c-7.155 0-11.47-2.836-11.47-7.4 0-4.687 3.575-7.154 12.58-8.264l16.527-1.727v3.7c0 8.264-7.153 13.691-17.637 13.691m84.694 12.828c21.463 0 32.44-8.017 32.44-20.968 0-10.73-6.168-16.651-21.091-18.625l-18.627-2.097c-5.302-.74-7.523-2.097-7.523-5.057 0-3.577 3.577-5.18 11.717-5.18 11.224 0 18.995 2.59 25.287 7.647l9.99-9.99c-6.908-7.154-18.871-11.101-33.672-11.101-20.845 0-32.44 7.4-32.44 19.858 0 10.854 7.154 16.898 21.954 18.87l16.776 1.974c6.66.864 8.634 2.097 8.634 5.304 0 3.7-3.701 5.674-12.335 5.674-12.827 0-21.46-3.454-27.258-9.867l-11.347 9.374c7.523 9.374 20.35 14.184 37.495 14.184m49.854-49.584V88.46c0 15.294 8.633 23.065 27.135 23.065 5.674 0 10.114-.617 14.308-1.85V93.64l-.355.078c-2.154.466-4.768.909-8.156.909-7.77 0-11.594-3.454-11.594-10.731V62.434h20.228V48.497h-20.228V25.925l-21.338 7.894v14.678h-13.815v13.937zm72.2-13.937h-19.488v61.67h21.338V87.104c0-6.66 1.48-12.704 5.552-16.528 3.207-2.96 7.77-4.563 14.183-4.563 2.344 0 4.194.246 6.29.493V47.14c-1.355-.247-2.343-.247-4.069-.247-12.212 0-20.475 7.03-23.806 18.502zm70.042 63.52c22.573 0 38.484-11.963 38.484-32.808 0-20.721-15.911-32.562-38.484-32.562-22.694 0-38.605 11.84-38.605 32.562 0 20.845 15.91 32.809 38.605 32.809m0-14.183c-10.36 0-16.897-6.66-16.897-18.625s6.537-18.378 16.897-18.378c10.238 0 16.776 6.414 16.776 18.378s-6.538 18.625-16.776 18.625"
        })
      ], -1)
    ]), 4));
  }
});
export {
  a as _
};