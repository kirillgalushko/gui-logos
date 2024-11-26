import { defineComponent as c, computed as h, openBlock as i, createElementBlock as n, normalizeStyle as e, createStaticVNode as g } from "vue";
const F = /* @__PURE__ */ c({
  __name: "LogoXcart",
  props: {
    width: {},
    height: {}
  },
  setup(t) {
    const o = t, p = h(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (s, l) => (i(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "156",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 156",
      style: e(p.value)
    }, l[0] || (l[0] = [
      g('<g><path fill="#000" d="M296.358 126.996c5.22-1.205 8.834-4.417 11.244-9.638 1.204-2.81 2.007-6.425 2.81-11.243.804-4.82.804-8.835.804-12.45V89.25h-24.094v10.842c0 2.41-.402 4.819-.804 7.228-.401 2.41-2.409 3.614-5.622 3.614s-5.22-1.204-5.621-3.614-.804-4.819-.804-7.228c0-7.63 0-15.661-.401-23.693 0-8.03 0-15.66.401-23.692 0-6.024 2.008-8.835 6.024-8.835s6.023 2.811 6.023 8.835v10.44h23.693c-.402-3.613-.803-7.228-1.205-11.645-.401-4.417-1.204-7.63-2.008-10.039q-3.011-9.036-10.842-12.047c-5.22-1.606-10.44-2.811-16.063-2.811s-11.244.803-16.062 2.81q-7.83 2.41-10.843 12.048c-1.204 2.81-2.008 6.827-2.81 11.645-.804 4.82-1.205 9.237-1.205 14.457v22.89c0 5.22.401 10.039 1.204 15.259s2.008 8.834 3.213 11.645c2.41 5.22 6.023 8.433 11.244 9.237 5.22 1.204 10.039 1.606 15.26 1.606 6.424.401 11.243 0 16.464-1.205"></path><path fill="#000" fill-rule="nonzero" d="m342.94 88.847 5.622-44.976h.401l5.622 44.976zm14.055 18.07 2.81 20.882H383.9L366.632 28.21h-35.338l-17.267 99.188h24.094l2.81-20.882h16.064zm32.125 20.481h23.693V90.453h4.015c4.016 0 6.425.803 7.63 2.41 1.205 1.606 1.606 4.015 1.606 6.826v27.709h24.094v-22.89c0-6.023-1.204-11.244-4.015-15.26-2.811-4.015-6.827-6.424-12.047-7.63v-.4c5.22-.804 8.834-2.812 11.244-6.024 2.007-2.41 3.212-5.622 3.614-8.835.401-3.614.401-6.826.401-10.039 0-4.417-.401-8.433-.803-12.449-.401-4.015-2.41-7.63-6.023-10.039-3.213-2.41-7.229-4.016-12.047-4.417-4.418-.402-8.835-.803-12.85-.803h-29.717v98.786zm23.693-81.519h5.622c3.212 0 5.22.803 6.425 2.008 1.204 1.205 1.606 3.614 1.606 6.425v7.63c0 2.41-.402 4.417-.803 6.023-.402 1.607-1.607 2.811-2.811 3.615-1.205.803-2.811 1.204-5.622 1.204h-4.417z"></path><polygon fill="#000" points="455.378824 47.4854902 471.441569 47.4854902 471.441569 127.397647 495.134118 127.397647 495.134118 47.4854902 511.196863 47.4854902 511.196863 28.2101961 454.977255 28.2101961 454.977255 47.4854902"></polygon><polygon fill="#F29221" points="213.63451 64.3513725 213.63451 64.3513725 205.603137 28.2101961 181.107451 28.2101961 195.96549 75.5952941 179.902745 127.799216 204.8 127.799216 212.831373 88.8470588 213.232941 88.8470588 221.665882 127.799216 246.563137 127.799216 230.500392 75.9968627 245.358431 28.6117647 220.862745 28.6117647"></polygon><path fill="#F29221" d="M20.855 0h113.898c11.23 0 20.855 9.224 20.855 20.855v113.898c0 11.23-9.224 20.855-20.855 20.855H20.855C9.625 155.608 0 146.384 0 134.753V20.855C.401 9.225 9.625 0 20.855 0"></path><path fill="#FFF" d="m122.077 77.503-10.842 10.842 10.44 10.44c.803.804 1.607 2.41 1.607 3.615v18.874c0 2.008-.402 2.41-2.41 2.41h-8.834v-14.457c0-2.008-.402-2.811-1.607-4.016l-9.637-9.638c-1.205-1.204-2.811-1.606-4.016-1.606H65.054c-1.606 0-3.212.402-4.016 1.606l-9.637 9.638c-1.205 1.205-1.606 2.008-1.606 4.016v11.645c0 2.008-.402 2.811-2.811 2.811h-8.835V102.4c0-1.205.803-2.811 1.606-3.614l10.843-10.842-10.441-10.441c-.803-.803-1.606-2.41-1.606-3.614v-38.15h11.645v31.323c0 2.008.402 2.81 1.606 4.016l9.638 9.637c1.205 1.205 2.811 1.607 4.016 1.607H97.18c1.606 0 3.212-.402 4.015-1.607l9.638-9.637c1.205-1.205 1.606-2.008 1.606-4.016V35.74h11.646v38.149c-.402 1.606-1.205 2.81-2.008 3.614"></path><polygon fill="#FFF" points="61.8415686 57.8258824 70.2745098 57.8258824 70.2745098 66.2588235 61.8415686 66.2588235"></polygon><polygon fill="#FFF" points="93.1639216 57.8258824 101.596863 57.8258824 101.596863 66.2588235 93.1639216 66.2588235"></polygon><polygon fill="#FFF" points="61.8415686 42.1647059 70.2745098 42.1647059 70.2745098 50.5976471 61.8415686 50.5976471"></polygon><polygon fill="#FFF" points="93.1639216 42.1647059 101.596863 42.1647059 101.596863 50.5976471 93.1639216 50.5976471"></polygon><polygon fill="#FFF" points="77.5027451 57.8258824 85.9356863 57.8258824 85.9356863 66.2588235 77.5027451 66.2588235"></polygon><polygon fill="#FFF" points="77.5027451 42.1647059 85.9356863 42.1647059 85.9356863 50.5976471 77.5027451 50.5976471"></polygon><path fill="#B14C26" d="M50.196 132.116c-3.614 0-6.827-2.81-7.63-6.023h6.425c1.607 0 3.213-1.607 3.213-3.213v-6.425c3.614.803 6.023 4.016 6.023 7.63 0 4.417-3.614 8.031-8.03 8.031m73.888 0c-3.614 0-6.827-2.41-7.63-6.023h6.425c1.606 0 3.213-1.607 3.213-3.213v-6.425c3.614.803 6.023 4.016 6.023 7.63 0 4.417-3.614 8.031-8.031 8.031"></path></g>', 1)
    ]), 4));
  }
});
export {
  F as _
};
