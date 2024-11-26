import { defineComponent as l, computed as m, openBlock as o, createElementBlock as v, normalizeStyle as c, createStaticVNode as p } from "vue";
const n = /* @__PURE__ */ l({
  __name: "LogoErlang",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const t = e, i = m(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (r, h) => (o(), v("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "225",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 225",
      style: c(i.value)
    }, h[0] || (h[0] = [
      p('<g><rect width="256" height="225" x="0" y="0" fill="#FFF"></rect><g fill="#A90533"><path d="M44.34 159.66c-18.803-19.926-29.805-47.452-29.777-80.295-.026-29.045 9.1-54.01 24.789-73.008l-.026.01H6.351v153.295h37.966zm173.67.012c8.1-8.676 15.357-18.893 21.934-30.578l-36.499-18.25c-12.818 20.84-31.564 40.022-57.486 40.15-37.726-.128-52.549-32.388-52.467-73.91h140.977c.189-4.689.189-6.868 0-9.125.92-24.703-5.627-45.468-17.536-61.638l-.062.046h31.742v153.296H217.94z"></path><path d="M95.774 41.497c1.56-18.8 16.383-31.443 33.761-31.48 17.498.037 30.14 12.68 30.568 31.48z"></path></g><g fill="#000"><path d="M26.426 185.668v-6.387H6.807v37.868h19.619v-6.388H14.107v-10.037H25.97v-6.387H14.107v-8.67zm33.305 15.512c4.89-.726 7.576-5.573 7.756-10.494-.18-8.05-5.399-11.381-12.775-11.406H44.675v37.868h7.3v-15.056l9.125 15.056h9.124zm-7.757-15.968h.913c3.982.15 6.971 1.058 6.843 5.931.128 4.465-2.76 5.677-6.843 5.475h-.913zm41.062-5.931h-7.3v37.868h17.793v-6.388H93.036zm47.904 30.111 3.194 7.756h7.756l-14.143-38.78h-5.931l-15.056 38.78h7.755l3.195-7.756zm-1.824-5.93h-9.125l4.106-14.144zm26.462 13.687h7.756v-25.55l20.075 26.462h5.474v-38.78h-7.756v25.55l-20.075-26.463h-5.474zm65.242-20.075v5.93h8.212c-.17 4.767-4.072 8.806-8.668 8.67-7.26.136-10.857-6.88-10.95-13.232.093-6.266 3.64-13.585 10.95-13.687 3.836.101 7.08 2.726 8.668 5.931l6.388-3.193c-2.81-5.917-8.484-9.199-15.056-9.125-11.313-.073-18.558 9.265-18.706 20.074.148 10.54 7.191 19.93 18.25 20.075 11.943-.146 17.465-9.686 17.337-20.53v-.913z"></path></g></g>', 1)
    ]), 4));
  }
});
export {
  n as _
};
