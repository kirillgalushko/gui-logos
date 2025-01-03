import { defineComponent as n, computed as h, openBlock as r, createElementBlock as l, normalizeStyle as g, createStaticVNode as o } from "vue";
const m = /* @__PURE__ */ n({
  __name: "LogoDesignernews",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, t = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (a, s) => (r(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: g(t.value)
    }, s[0] || (s[0] = [
      o('<defs><circle id="designernews-gui-asset-a" cx="128" cy="128" r="128"></circle></defs><g><g><mask id="designernews-gui-asset-b" fill="#fff"><use xlink:href="#designernews-gui-asset-a"></use></mask><use xlink:href="#designernews-gui-asset-a" fill="#B3BBC6"></use><path fill="#666C76" d="m38.715 176.727 107.34 79.844 264.006 16.604L207.754 85.924v42.688l-18.874-13.517-35.122-29.171-20.908 34.083-29.395-24.54L51.77 92.19z" mask="url(#designernews-gui-asset-b)"></path></g><path fill="#FFF" d="M118.837 131.159c0-27.131-16.675-45.528-48.439-45.528H39.032v91.32H71.06c30.837 0 47.777-18.66 47.777-45.792m-22.763.132c0 19.588-10.059 28.058-26.205 28.058h-8.206v-56.115h8.206c15.484 0 26.205 8.867 26.205 28.057m112.892 45.66v-91.32h-21.043v51.087L154.307 85.63h-21.97v91.32h21.043v-54.66l35.999 54.66z"></path></g>', 2)
    ]), 4));
  }
});
export {
  m as _
};
