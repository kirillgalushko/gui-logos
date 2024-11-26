import { defineComponent as l, computed as e, openBlock as n, createElementBlock as g, normalizeStyle as h, createStaticVNode as y } from "vue";
const c = /* @__PURE__ */ l({
  __name: "LogoFlow",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const o = i, p = e(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (s, t) => (n(), g("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "267",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 267",
      style: h(p.value)
    }, t[0] || (t[0] = [
      y('<g><polygon fill="#FFCA20" points="237.300227 115.091771 148.489503 26.2916065 237.300227 26.2916065" opacity=".7"></polygon><polygon fill="#FFCA20" points="86.287152 0 136.631883 0 175.108435 38.465993 86.287152 38.465993" opacity=".7"></polygon><path fill="#FFCF39" d="M89.17 88.821.359 0h106.782v88.81zm78.02 88.8L256 266.432h-88.81z" opacity=".9"></path><path fill="#FFE490" d="m107.14 177.632-88.8-88.821h88.811v88.81zm95.643-44.95-70.797-70.839h70.829zm8.278 125.483-80.543-80.533h80.543z" opacity=".7"></path><polygon fill="#FCBC7C" points="107.140936 70.7444834 36.3964529 0 107.140936 0" opacity=".9"></polygon><polygon fill="#F9A040" points="130.877294 177.621448 219.688018 266.432172 130.877294 266.432172" opacity=".8"></polygon><polygon fill="#F9A040" points="220.765024 213.07816 132.070448 124.383584 220.765024 124.383584" opacity=".7"></polygon><polygon fill="#FFCF39" points="131.985976 61.8433491 219.719695 149.577067 131.985976 149.577067" opacity=".9"></polygon><polygon fill="#FFC737" points="107.140936 266.083729 0 158.921675 107.140936 158.921675" opacity=".7"></polygon></g>', 1)
    ]), 4));
  }
});
export {
  c as _
};
