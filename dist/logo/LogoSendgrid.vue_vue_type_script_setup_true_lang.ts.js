import { defineComponent as i, computed as h, openBlock as n, createElementBlock as p, normalizeStyle as c, createStaticVNode as g } from "vue";
const v = /* @__PURE__ */ i({
  __name: "LogoSendgrid",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const o = e, l = h(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (m, t) => (n(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "90",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 90",
      style: c(l.value)
    }, t[0] || (t[0] = [
      g('<g><path fill="#212F38" d="M177.114 57.294c2.129-4.766 6.59-8.01 12.474-8.01 5.882 0 10.243 2.737 12.069 8.01zm38.538 6.086c0-14.605-10.65-26.267-26.166-26.267a26.315 26.315 0 0 0-26.368 26.369c0 14.603 10.954 26.367 26.775 26.367 10.956 0 18.837-5.285 23.271-12.862l-11.02-6.571c-2.338 4.486-6.826 7.264-12.15 7.264-7.302 0-11.866-3.652-13.489-9.23h39.147zm282.86 0c0-7.505-5.477-13.59-12.98-13.59-7.708 0-13.591 5.78-13.591 13.59 0 7.808 5.883 13.691 13.59 13.691 7.504 0 12.98-6.186 12.98-13.691m-40.16.102c0-17.95 13.183-26.369 24.643-26.369 6.592 0 11.764 2.434 15.111 5.983V14.802H512v74.033h-13.894v-5.679c-3.347 3.956-8.721 6.693-15.313 6.693-10.751 0-24.442-8.519-24.442-26.367M448.144 30.41a8.31 8.31 0 0 0 8.31-8.312 8.311 8.311 0 1 0-16.62 0 8.31 8.31 0 0 0 8.31 8.312m-6.947 7.718h13.893v50.707h-13.893V51.616h-5.042zm-37.012 0h13.792v8.316c2.536-5.274 7.1-8.316 13.996-8.316h5.578l-5.038 13.487h-3.786c-7.403 0-10.648 3.855-10.648 13.286v23.934h-13.894zm-78.163 13.69c0-21.094 15.923-38.03 37.828-38.03 10.957 0 20.171 3.945 26.843 10.232a36.8 36.8 0 0 1 6.827 8.732l-12.372 7.505c-4.564-8.418-11.562-12.779-21.196-12.779-13.489 0-23.935 11.055-23.935 24.34 0 13.59 10.244 24.34 24.441 24.34 10.751 0 18.356-6.085 20.993-15.517h-23.224V47.154h38.436v5.679c0 19.877-14.197 37.016-36.205 37.016-23.122 0-38.436-17.544-38.436-38.03M309.275 63.38c0-7.505-5.476-13.59-12.98-13.59-7.708 0-13.59 5.78-13.59 13.59 0 7.808 5.882 13.691 13.59 13.691 7.504 0 12.98-6.186 12.98-13.691m-40.16.102c0-17.95 13.183-26.369 24.644-26.369 6.591 0 11.764 2.434 15.11 5.983V14.802h13.894v74.033H308.87v-5.679c-3.347 3.956-8.722 6.693-15.314 6.693-10.75 0-24.442-8.519-24.442-26.367M218.9 38.128h13.793v5.679c3.245-4.159 8.215-6.694 13.995-6.694 11.967 0 19.168 7.708 19.168 20.79v30.932h-14.097V59.729c0-6.795-3.144-10.75-9.33-10.75-5.274 0-9.635 3.65-9.635 12.169v27.687H218.9zM105.457 76.564l12.88-10.142c3.651 6.288 9.432 9.939 16.023 9.939 7.202 0 11.056-4.665 11.056-9.736 0-6.085-7.405-8.01-15.315-10.446-9.938-3.042-20.993-6.896-20.993-21.095 0-11.865 10.346-21.297 24.644-21.297 12.07 0 18.965 4.564 24.95 10.751l-11.664 8.823c-3.042-4.563-7.403-6.998-13.185-6.998-6.591 0-10.14 3.55-10.14 8.215 0 5.679 7.099 7.607 15.009 10.243 10.04 3.245 21.399 7.707 21.399 21.906 0 11.764-9.331 23.122-25.659 23.122-13.386 0-22.31-5.678-29.005-13.285"></path><g><path fill="#9DD6E3" d="M88.836 0v59.224H59.224v29.61H.001L0 29.612h29.612V0z"></path><polygon fill="#3F72AB" points="0.000697836735 88.8346241 29.6127045 88.8346241 29.6127045 59.2226177 0.000697836735 59.2226177"></polygon><polygon fill="#00A9D1" points="59.2240132 59.2240133 88.83602 59.2240133 88.83602 29.6113087 59.2240132 29.6113087"></polygon><polygon fill="#00A9D1" points="29.6120066 29.6120065 59.2240132 29.6120065 59.2240132 0 29.6120066 0"></polygon><polygon fill="#2191C4" points="29.6120066 59.2233155 59.2240132 59.2233155 59.2240132 29.6113087 29.6120066 29.6113087"></polygon><polygon fill="#3F72AB" points="59.2240132 29.6120065 88.83602 29.6120065 88.83602 0 59.2240132 0"></polygon></g></g>', 1)
    ]), 4));
  }
});
export {
  v as _
};
