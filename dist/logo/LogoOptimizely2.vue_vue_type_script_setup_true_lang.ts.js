import { defineComponent as p, computed as o, openBlock as a, createElementBlock as c, normalizeStyle as l, createStaticVNode as s } from "vue";
const n = /* @__PURE__ */ p({
  __name: "LogoOptimizely2",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const t = h, i = o(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (d, e) => (a(), c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "248",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 248",
      style: l(i.value)
    }, e[0] || (e[0] = [
      s('<g><path fill="#3BE081" d="M85.256 135.865v29.79c22.73-.027 44.52-8.791 60.592-24.37 16.073-15.58 25.114-36.702 25.141-58.734h-30.732c-.018 14.134-5.819 27.685-16.13 37.68-10.31 9.994-24.29 15.616-38.871 15.634"></path><path fill="#0037FF" d="M85.247 217.922c-14.477 0-28.36-5.574-38.597-15.497s-15.987-23.38-15.987-37.413 5.75-27.49 15.987-37.413 24.12-15.497 38.597-15.497v-29.57a87.5 87.5 0 0 0-32.585 6.236C42.328 92.9 32.935 98.965 25.019 106.616s-14.2 16.74-18.493 26.744A80.3 80.3 0 0 0 0 164.928a80.3 80.3 0 0 0 6.433 31.586c4.264 10.017 10.52 19.121 18.414 26.795 7.893 7.673 17.268 13.764 27.59 17.925a87.5 87.5 0 0 0 32.567 6.326h.243z"></path><path fill="#0CF" d="M85.256 217.923v29.57c22.576 0 44.228-8.693 60.192-24.167s24.933-36.463 24.933-58.347h-30.54c-.01 14.033-5.762 27.49-15.996 37.415-10.233 9.926-24.112 15.511-38.59 15.529"></path><path fill="#861DFF" d="M85.256 52.944v29.57c22.576 0 44.228-8.693 60.192-24.168S170.381 21.884 170.381 0h-30.54c-.01 14.033-5.762 27.49-15.996 37.415-10.233 9.926-24.112 15.51-38.59 15.529"></path><path fill="#FF8110" d="M170.875 52.944v29.57c22.577 0 44.228-8.693 60.192-24.168C247.032 42.872 256 21.884 256 0h-30.523c-.01 14.036-5.765 27.495-16.002 37.421-10.237 9.927-24.12 15.51-38.6 15.523"></path></g>', 1)
    ]), 4));
  }
});
export {
  n as _
};