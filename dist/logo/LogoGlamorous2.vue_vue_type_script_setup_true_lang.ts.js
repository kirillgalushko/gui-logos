import { defineComponent as n, computed as l, openBlock as p, createElementBlock as r, normalizeStyle as s, createStaticVNode as g } from "vue";
const m = /* @__PURE__ */ n({
  __name: "LogoGlamorous2",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const o = e, i = l(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (a, t) => (p(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "228",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 228",
      style: s(i.value)
    }, t[0] || (t[0] = [
      g('<g><polygon fill="#DA233C" points="80.2809503 4.73976128 165.981587 90.4403976 118.227998 138.193986 0.975883838 20.9418716"></polygon><path fill="#DA233C" d="M36.791 2.182C14.62 6.019-1.582 13.694.123 19.662c2.132 5.97 21.745 7.675 44.343 3.838 22.171-4.264 38.8-11.938 36.668-17.907-2.132-5.97-22.172-7.249-44.343-3.411"></path><path fill="#FF8080" d="M37.644 2.182C16.752 5.592 1.402 13.267 3.534 18.81S24 25.632 44.892 22.221s36.242-11.086 34.11-16.202C76.87.049 58.536-1.656 37.644 2.182"></path><polygon fill="#E8E8E8" points="87.9726773 47.5610185 165.571514 47.5610185 165.571514 149.036421 87.9726773 149.036421" transform="rotate(-45 126.772 98.299)"></polygon><polygon fill="#555B61" points="177.962753 177.820674 258.972529 177.820674 258.972529 202.976341 177.962753 202.976341" transform="rotate(-45.008 218.468 190.399)"></polygon><polygon fill="#B2C1C0" points="107.599865 108.35789 188.609643 108.35789 188.609643 131.808089 107.599865 131.808089" transform="rotate(-45.016 148.105 120.083)"></polygon><polygon fill="#3E4347" points="139.887366 104.511022 229.424486 104.511022 229.424486 208.544628 139.887366 208.544628" transform="rotate(-45 184.656 156.528)"></polygon></g>', 1)
    ]), 4));
  }
});
export {
  m as _
};
