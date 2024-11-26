import { defineComponent as r, computed as a, openBlock as l, createElementBlock as n, normalizeStyle as o, createStaticVNode as f } from "vue";
const d = /* @__PURE__ */ r({
  __name: "LogoFirebase2",
  props: {
    width: {},
    height: {}
  },
  setup(t) {
    const e = t, s = a(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (h, i) => (l(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      width: "256",
      height: "351",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 351",
      style: o(s.value)
    }, i[0] || (i[0] = [
      f('<defs><filter id="firebase-2-gui-asset-b" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation="17.5"></feGaussianBlur><feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset><feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"></feComposite><feColorMatrix in="shadowInnerInner1" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"></feColorMatrix></filter><filter id="firebase-2-gui-asset-d" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation="3.5"></feGaussianBlur><feOffset dx="1" dy="-9" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset><feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"></feComposite><feColorMatrix in="shadowInnerInner1" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"></feColorMatrix></filter><path id="firebase-2-gui-asset-a" d="m1.253 280.732 1.605-3.131 99.353-188.518-44.15-83.475C54.392-1.283 45.074.474 43.87 8.188z"></path><path id="firebase-2-gui-asset-c" d="m134.417 148.974 32.039-32.812-32.039-61.007c-3.042-5.791-10.433-6.398-13.443-.59l-17.705 34.109-.53 1.744z"></path></defs><g><path fill="#FFC24A" d="m0 282.998 2.123-2.972L102.527 89.512l.212-2.017L58.48 4.358C54.77-2.606 44.33-.845 43.114 6.951z"></path><g><use xlink:href="#firebase-2-gui-asset-a" fill="#FFA712" fill-rule="evenodd"></use><use xlink:href="#firebase-2-gui-asset-a" fill="#000" fill-opacity="1" filter="url(#firebase-2-gui-asset-b)"></use></g><path fill="#F4BD62" d="m135.005 150.38 32.955-33.75-32.965-62.93c-3.129-5.957-11.866-5.975-14.962 0L102.42 87.287v2.86z"></path><g><use xlink:href="#firebase-2-gui-asset-c" fill="#FFA50E" fill-rule="evenodd"></use><use xlink:href="#firebase-2-gui-asset-c" fill="#000" fill-opacity="1" filter="url(#firebase-2-gui-asset-d)"></use></g><polygon fill="#F6820C" points="0 282.99762 0.962097168 282.030396 4.45771144 280.60956 132.935323 152.60956 134.563025 148.178595 102.513123 87.1048584"></polygon><path fill="#FDE068" d="m139.121 347.551 116.275-64.847-33.204-204.495c-1.039-6.398-8.888-8.927-13.468-4.34L0 282.998l115.608 64.548a24.13 24.13 0 0 0 23.513.005"></path><path fill="#FCCA3F" d="M254.354 282.16 221.402 79.218c-1.03-6.35-7.558-8.977-12.103-4.424L1.29 282.6l114.339 63.908a23.94 23.94 0 0 0 23.334.006z"></path><path fill="#EEAB37" d="M139.12 345.64a24.13 24.13 0 0 1-23.512-.005L.931 282.015l-.93.983 115.607 64.548a24.13 24.13 0 0 0 23.513.005l116.275-64.847-.285-1.752z"></path></g>', 2)
    ]), 4));
  }
});
export {
  d as _
};
