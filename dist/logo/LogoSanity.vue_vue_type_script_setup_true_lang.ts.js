import { defineComponent as e, computed as p, openBlock as h, createElementBlock as n, normalizeStyle as m, createStaticVNode as s } from "vue";
const c = /* @__PURE__ */ e({
  __name: "LogoSanity",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, i = p(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (g, l) => (h(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "104",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 104",
      style: m(i.value)
    }, l[0] || (l[0] = [
      s('<g><polygon fill="#F37368" points="381.461756 36.9858357 381.461756 101.81983 360.575637 101.81983 360.575637 26.8328612"></polygon><path fill="#F7A199" d="m85.865 89.781 15.665 13.634 65.994-34.375-6.817-16.39zm274.71-41.772 53.086-27.558-8.992-15.52-44.093 21.902z"></path><path fill="#F37368" d="M211.182 31.91v69.91h-20.016V2.176zM85.865 89.78l15.665 13.634 30.169-75.422-9.718-25.817z"></path><path fill="#F04939" d="M121.98 2.176h20.597l38.146 99.644h-21.176zm92.248 0L258.176 70.2v31.619l-67.01-99.644zm81.659 0h20.74v99.644h-20.74zm64.689 18.275h-31.91V2.176h74.407l10.588 18.275z"></path><polyline fill="#F7A199" points="475.014164 63.9637394 475.014164 101.81983 454.41813 101.81983 454.41813 63.9637394"></polyline><polygon fill="#F04939" points="489.228329 2.17563739 454.41813 63.9637394 475.014164 63.9637394 511.129745 2.17563739"></polygon><polygon fill="#F37368" points="454.41813 63.9637394 418.447592 2.17563739 441.074221 2.17563739 465.296317 44.5280453"></polygon><path fill="#F04939" d="M8.558 13.779c0 13.78 8.557 22.046 25.672 26.398l18.13 4.206c16.245 3.771 26.108 13.054 26.108 28.138.145 6.527-2.03 12.909-5.947 18.13 0-15.084-7.832-23.206-26.543-28.138l-17.84-4.06C13.78 55.26 2.756 47.572 2.756 31.183c0-6.237 2.03-12.474 5.802-17.405"></path><polygon fill="#F37368" points="258.175637 65.1240793 258.175637 2.17563739 278.191501 2.17563739 278.191501 101.81983 258.175637 101.81983"></polygon><path fill="#F37368" d="M61.353 68.75c7.687 4.932 11.168 11.894 11.168 21.902-6.527 8.267-17.695 12.763-30.894 12.763-22.191 0-38-11.023-41.337-30.023h21.321c2.756 8.702 10.008 12.763 19.871 12.763 11.749.145 19.726-6.237 19.871-17.405M8.558 13.634C14.794 5.512 25.528.58 38.58.58c22.772 0 35.826 12.039 39.162 28.864H57.147c-2.32-6.672-7.978-11.894-18.276-11.894-11.168.145-18.71 6.527-19.145 16.68-7.474-4.122-11.459-12.184-11.168-20.596"></path></g>', 1)
    ]), 4));
  }
});
export {
  c as _
};
