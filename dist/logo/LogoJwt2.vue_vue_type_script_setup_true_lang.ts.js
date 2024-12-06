import { defineComponent as i, computed as p, openBlock as e, createElementBlock as g, normalizeStyle as s, createStaticVNode as y } from "vue";
const r = /* @__PURE__ */ i({
  __name: "LogoJwt2",
  props: {
    width: {},
    height: {}
  },
  setup(n) {
    const o = n, t = p(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (h, l) => (e(), g("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "257",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 257",
      style: s(t.value)
    }, l[0] || (l[0] = [
      y('<g><polygon fill="#FFF" points="147.386158 69.0712136 147.129388 -1.0975284e-14 108.613842 -1.0975284e-14 108.870612 69.0712136 128.128385 95.5185557"></polygon><polygon fill="#FFF" points="108.870612 187.442327 108.870612 256.770311 147.386158 256.770311 147.386158 187.442327 128.128385 160.994985"></polygon><polygon fill="#00F2E6" points="147.386158 187.442327 187.955868 243.418255 219.025075 220.822467 178.455366 164.84654 147.386158 154.832497"></polygon><polygon fill="#00F2E6" points="108.870612 69.0712136 68.0441324 13.0952859 36.9749248 35.6910732 77.5446339 91.667001 108.870612 101.681043"></polygon><polygon fill="#00B9F1" points="77.5446339 91.667001 11.8114343 70.3550652 3.70594005e-15 106.816449 65.7331996 128.385155 96.8024072 118.114343"></polygon><polygon fill="#00B9F1" points="159.197593 138.399198 178.455366 164.84654 244.188566 186.158475 256 149.697091 190.2668 128.385155"></polygon><polygon fill="#D63AFF" points="190.2668 128.385155 256 106.816449 244.188566 70.3550652 178.455366 91.667001 159.197593 118.114343"></polygon><polygon fill="#D63AFF" points="65.7331996 128.385155 3.70594005e-15 149.697091 11.8114343 186.158475 77.5446339 164.84654 96.8024072 138.399198"></polygon><polygon fill="#FB015B" points="77.5446339 164.84654 36.9749248 220.822467 68.0441324 243.418255 108.870612 187.442327 108.870612 154.832497"></polygon><polygon fill="#FB015B" points="178.455366 91.667001 219.025075 35.6910732 187.955868 13.0952859 147.386158 69.0712136 147.386158 101.681043"></polygon></g>', 1)
    ]), 4));
  }
});
export {
  r as _
};