import { defineComponent as s, computed as r, openBlock as h, createElementBlock as n, normalizeStyle as p, createStaticVNode as a } from "vue";
const d = /* @__PURE__ */ s({
  __name: "LogoRLang",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, i = r(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (l, e) => (h(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "193",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 193",
      style: p(i.value)
    }, e[0] || (e[0] = [
      a('<defs><linearGradient id="r-lang-gui-asset-a" x1="37.973%" x2="91.121%" y1="16.999%" y2="76.326%"><stop offset="0%" stop-color="#C9CBCE"></stop><stop offset="100%" stop-color="#7B7A81"></stop></linearGradient></defs><g><path fill="url(#r-lang-gui-asset-a)" d="M149.333 149.333c-53.333 0-98.659-26.713-98.659-58.713S90.667 32 144 32c67.357 0 98.572 25.911 98.572 57.911s-34.407 59.422-93.239 59.422M128 0C58.667 0 0 37.333 0 85.333c0 45.334 58.312 82.969 127.646 82.969 69.333 0 128.354-34.969 128.354-82.969S197.333 0 128 0"></path><path fill="#2165B6" d="M105.946 51.829v141.109h42.643v-54.875c10.661 0 17.011-2.328 23.986 10.452 10.661 18.292 23.987 44.423 23.987 44.423H247.2s-31.982-52.262-34.647-54.875c-4.915-5.227-10.661-5.227-18.656-7.84 15.991-2.613 30.899-9.248 36.082-23.464 4.531-13.065 3.998-29.685-5.714-40.83-8.411-8.819-17.042-14.1-38.364-14.1zm42.643 29.388h27.984c6.636 0 11.993 6.533 11.993 13.065 0 6.533-5.33 13.066-11.993 13.066h-27.984z"></path></g>', 2)
    ]), 4));
  }
});
export {
  d as _
};
