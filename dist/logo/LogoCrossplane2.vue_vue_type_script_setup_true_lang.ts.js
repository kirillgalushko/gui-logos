import { defineComponent as o, computed as i, openBlock as n, createElementBlock as a, normalizeStyle as r, createStaticVNode as p } from "vue";
const g = /* @__PURE__ */ o({
  __name: "LogoCrossplane2",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const s = l, t = i(() => ({
      width: s.width || "1em",
      height: s.height || "1em",
      minWidth: s.width || "1em",
      minHeight: s.height || "1em"
    }));
    return (c, e) => (n(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      width: "256",
      height: "540",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 540",
      style: r(t.value)
    }, e[0] || (e[0] = [
      p('<defs><path id="crossplane-2-gui-asset-a" d="M.137 122.022c-.18 4.155-.172 8.316.027 12.47C.11 135.557 0 136.61 0 137.69v210.042c0 40.169 32.785 73.036 72.858 73.036h109.65c40.058 0 72.857-32.867 72.857-73.036V137.691c0-1.23-.136-2.407-.191-3.61.199-4.017.204-8.041.014-12.059C252.098 54.1 196.179 0 127.669 0 59.145 0 3.227 54.1.137 122.009z"></path><path id="crossplane-2-gui-asset-c" d="M.137 122.022c-.18 4.155-.172 8.316.027 12.47C.11 135.557 0 136.61 0 137.69v210.042c0 40.169 32.785 73.036 72.858 73.036h109.65c40.058 0 72.857-32.867 72.857-73.036V137.691c0-1.23-.136-2.407-.191-3.61.199-4.017.204-8.041.014-12.059C252.098 54.1 196.179 0 127.669 0 59.145 0 3.227 54.1.137 122.009z"></path><path id="crossplane-2-gui-asset-e" d="M.137 122.022c-.18 4.155-.172 8.316.027 12.47C.11 135.557 0 136.61 0 137.69v210.042c0 40.169 32.785 73.036 72.858 73.036h109.65c40.058 0 72.857-32.867 72.857-73.036V137.691c0-1.23-.136-2.407-.191-3.61.199-4.017.204-8.041.014-12.059C252.098 54.1 196.179 0 127.669 0 59.145 0 3.227 54.1.137 122.009z"></path></defs><g><path fill="#F7D186" fill-rule="nonzero" d="M126.759 173.662c-17.689.03-32.008 14.386-31.993 32.074v301.878a32.034 32.034 0 0 0 31.993 32.074c17.678 0 32.006-14.356 32.006-32.074V205.736c.015-17.688-14.304-32.044-31.993-32.074"></path><path fill="#FF9234" fill-rule="nonzero" d="M255.18 134.095c.185-4.018.185-8.041 0-12.059C252.117 54.114 196.199 0 127.675 0S3.232 54.114.142 122.036a130 130 0 0 0 .014 12.469c-.04 1.066-.15 2.12-.15 3.2v210.042c0 40.168 32.785 73.036 72.858 73.036h109.65c40.058 0 72.843-32.868 72.843-73.036V137.704c0-1.23-.123-2.406-.177-3.61"></path><g transform="translate(.635 .014)"><mask id="crossplane-2-gui-asset-b" fill="#fff"><use xlink:href="#crossplane-2-gui-asset-a"></use></mask><polygon fill="#FFCD3C" fill-rule="nonzero" points="331.873811 126.028376 15.1895775 443.464569 -78.600253 349.442315 238.070309 32.0061215" mask="url(#crossplane-2-gui-asset-b)"></polygon></g><g transform="translate(.635 .014)"><mask id="crossplane-2-gui-asset-d" fill="#fff"><use xlink:href="#crossplane-2-gui-asset-c"></use></mask><polygon fill="#F3807B" fill-rule="nonzero" points="237.783197 31.7053378 -78.8873647 349.141531 -195.591445 232.150339 121.051773 -85.2858546" mask="url(#crossplane-2-gui-asset-d)"></polygon></g><g transform="translate(.635 .014)"><mask id="crossplane-2-gui-asset-f" fill="#fff"><use xlink:href="#crossplane-2-gui-asset-e"></use></mask><polygon fill="#35D0BA" fill-rule="nonzero" points="425.964426 220.351414 109.293864 537.773935 15.5040332 443.751681 332.174595 126.329159" mask="url(#crossplane-2-gui-asset-f)"></polygon></g><polyline fill="#D8AE64" fill-rule="nonzero" points="103.44797 421.138214 158.956237 476.783201 158.956237 420.673367 103.44797 421.138214"></polyline></g>', 2)
    ]), 4));
  }
});
export {
  g as _
};
