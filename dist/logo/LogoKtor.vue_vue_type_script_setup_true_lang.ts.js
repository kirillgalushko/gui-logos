import { defineComponent as p, computed as i, openBlock as l, createElementBlock as r, normalizeStyle as n, createStaticVNode as h } from "vue";
const f = /* @__PURE__ */ p({
  __name: "LogoKtor",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const o = s, e = i(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (c, t) => (l(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "243",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 243",
      style: n(e.value)
    }, t[0] || (t[0] = [
      h('<defs><linearGradient id="ktor-gui-asset-a" x1="23.965%" x2="74.641%" y1="23.965%" y2="74.641%"><stop offset="29.6%" stop-color="#00AFFF"></stop><stop offset="69.4%" stop-color="#5282FF"></stop><stop offset="100%" stop-color="#945DFF"></stop></linearGradient><linearGradient id="ktor-gui-asset-b" x1="26.206%" x2="74.117%" y1="26.206%" y2="74.117%"><stop offset="10.8%" stop-color="#C757BC"></stop><stop offset="17.3%" stop-color="#CD5CA9"></stop><stop offset="49.2%" stop-color="#E8744F"></stop><stop offset="71.6%" stop-color="#F88316"></stop><stop offset="82.3%" stop-color="#FF8900"></stop></linearGradient></defs><g><g><polygon fill="url(#ktor-gui-asset-a)" points="161.666667 80.8333333 121.417655 40.584321 80.8333333 0 38.1533333 42.68 0 80.8333333 80.8333333 161.666667"></polygon><polygon fill="url(#ktor-gui-asset-b)" points="80.8333333 161.666667 121.082345 201.915679 161.666667 242.5 204.346667 199.82 242.5 161.666667 161.666667 80.8333333"></polygon><polygon fill="#000" points="161.666667 80.8333333 80.8333333 80.8333333 80.8333333 161.666667 161.666667 161.666667"></polygon></g><path fill="#27282C" d="M312.036 160.523V138.23l7.392-8.69 21.661 30.983h18.715l-29.103-40.998 27.188-31.947h-17.37l-27.553 32.756h-.93V87.578h-15.612v72.945zm59.243-68.949v13.794h-8.893v11.176h8.893v28.967c0 10.813 5.482 15.214 19.336 15.214 2.53.004 5.057-.216 7.549-.657V149.2a36 36 0 0 1-4.446.252c-5.119 0-7.393-2.324-7.393-7.326v-25.582h11.839v-11.171h-11.839V91.574zm64.315 70.11c17.522 0 28.072-10.812 28.072-29.017 0-18.043-10.701-29.012-28.072-29.012s-28.073 11.015-28.073 29.012c0 18.15 10.545 29.018 28.073 29.018m0-11.625c-8.064 0-12.617-6.367-12.617-17.392 0-10.913 4.598-17.335 12.617-17.335 7.958 0 12.611 6.417 12.611 17.335 0 11.02-4.598 17.392-12.611 17.392m40.37 10.459h15.047v-31.135c0-7.831 5.634-12.637 13.855-12.637 2.43 0 5.947.405 7.134.809v-12.94c-1.288-.404-3.825-.657-5.891-.657-7.236 0-13.132 4.194-14.633 9.752h-.93v-8.842H475.97v55.655z"></path></g>', 2)
    ]), 4));
  }
});
export {
  f as _
};
