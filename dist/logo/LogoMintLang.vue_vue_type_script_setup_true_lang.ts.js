import { defineComponent as s, computed as q, openBlock as h, createElementBlock as n, normalizeStyle as a, createStaticVNode as l } from "vue";
const m = /* @__PURE__ */ s({
  __name: "LogoMintLang",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, i = q(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (p, e) => (h(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "111",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 111",
      style: a(i.value)
    }, e[0] || (e[0] = [
      l('<defs><linearGradient id="mint-lang-gui-asset-a" x1="-63.298%" x2="55.731%" y1="87.26%" y2="-28.569%"><stop offset="0%" stop-color="#3AC155"></stop><stop offset="100%" stop-color="#0CB3FF"></stop></linearGradient><linearGradient id="mint-lang-gui-asset-b" x1="0%" x2="100%" y1="50%" y2="50%"><stop offset="0%" stop-color="#3AC155"></stop><stop offset="100%" stop-color="#0CB3FF"></stop></linearGradient></defs><g><path fill="url(#mint-lang-gui-asset-a)" d="M164.138 27.662c-16.124 3.858-29.382 4.05-40.856 2.402-7.34 8.97-11.83 17.982-15.57 26.844 15.61-4.372 30.963-10.166 43.64-17.74-13.689 10.096-29.516 17.168-45.465 22.208-5.832 14.656-10.353 29.074-23.206 40.233l-1.503 1.303c18.72-6.52 51.372-24.303 82.96-75.25"></path><path fill="url(#mint-lang-gui-asset-b)" d="M20.39 22.402c-33.34 24.313-18.157 63.559-7.707 54.386 17.08-14.775 42.732-50.793 91.867-63.711C59.948 25.21 28.487 67.794 20.226 78.502s1.307 28.288 20.887 31.026 30.572-4.556 38.506-11.444l.003.001c25.68-22.296 15.637-60.355 65.2-93.233C62.842-11.362 26.59 17.882 20.39 22.402"></path><path fill="#444" d="M211.792 108.67q-3.332 0-5.796-2.463-2.462-2.464-2.462-5.797V11.157q0-3.333 2.462-5.796t5.796-2.463h3.622q3.768 0 6.955 2.029t4.637 5.36l25.356 54.77q0 .144.145.144t.145-.145l25.356-54.769q1.449-3.332 4.637-5.36a12.7 12.7 0 0 1 6.954-2.03h4.202q3.333 0 5.796 2.463t2.462 5.797v89.253q0 3.333-2.462 5.796t-5.796 2.463h-3.188q-3.332 0-5.795-2.462-2.463-2.464-2.463-5.797V37.383q0-.146-.146-.146-.144 0-.144.145L264.678 74.62q-1.594 3.333-4.927 5.506-3.188 2.03-6.81 2.03h-.87q-3.621 0-6.953-2.03-3.189-2.172-4.782-5.506l-17.387-37.237q0-.144-.145-.145-.145 0-.145.145v63.028q0 3.333-2.463 5.796t-5.796 2.463zm124.302 0q-3.333 0-5.796-2.463t-2.463-5.797V41.584q0-3.332 2.463-5.796 2.463-2.462 5.796-2.462h3.767q3.333 0 5.796 2.462t2.463 5.796v58.826q0 3.333-2.463 5.796t-5.796 2.463zm0-91.283q-3.333 0-5.796-2.463t-2.463-5.796v-.87q0-3.33 2.463-5.795Q332.76 0 336.094 0h3.767q3.333 0 5.796 2.463t2.463 5.796v.87q0 3.332-2.463 5.795t-5.796 2.463zm44.61 91.282q-3.332 0-5.795-2.462-2.463-2.464-2.463-5.797V41.584q0-3.332 2.463-5.796 2.463-2.462 5.796-2.462h1.884q3.477 0 5.795 2.462 2.463 2.319 2.608 5.796v1.014q0 .145.145.145t.29-.145q9.852-10.722 23.038-10.722t19.126 7.535q6.084 7.389 6.085 24.777v36.222q0 3.333-2.463 5.796t-5.796 2.463h-2.463q-3.333 0-5.796-2.462-2.318-2.464-2.318-5.797V65.636q0-10.866-2.898-14.779-2.754-4.056-9.998-4.057-5.94 0-11.011 5.072-5.072 5.07-5.072 10.867v37.671q0 3.333-2.463 5.796t-5.796 2.463zm78.84-58.391q-2.897 0-4.926-2.029-2.03-2.174-2.029-5.071 0-2.898 2.029-4.926 2.029-2.03 4.926-2.03h6.955q1.304 0 1.304-1.303V16.953q0-3.333 2.318-5.796 2.463-2.463 5.796-2.463h2.898q3.332 0 5.796 2.463 2.462 2.462 2.462 5.795V34.92q0 1.305 1.305 1.304h16.518q2.898 0 4.926 2.029 2.173 2.028 2.173 4.926 0 2.897-2.173 5.072-2.03 2.028-4.926 2.028h-16.518q-1.305 0-1.304 1.159v29.268q0 9.418 2.029 12.17 2.028 2.754 8.403 2.754 3.477 0 5.216-.29 2.898-.29 5.072 1.304t2.173 4.347q0 3.188-2.173 5.796-2.029 2.463-5.072 2.753-6.375.58-9.563.58-14.055 0-19.705-5.941-5.65-6.086-5.65-21.59V51.438q0-1.16-1.305-1.159z"></path></g>', 2)
    ]), 4));
  }
});
export {
  m as _
};
