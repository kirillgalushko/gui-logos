import { defineComponent as t, computed as g, openBlock as i, createElementBlock as s, normalizeStyle as e, createStaticVNode as y } from "vue";
const f = /* @__PURE__ */ t({
  __name: "LogoLinkerd",
  props: {
    width: {},
    height: {}
  },
  setup(p) {
    const o = p, l = g(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (r, n) => (i(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "239",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 239",
      style: e(l.value)
    }, n[0] || (n[0] = [
      y('<defs><linearGradient id="linkerd-gui-asset-a" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#4AD8AC"></stop><stop offset="100%" stop-color="#4076C4"></stop></linearGradient></defs><g><g transform="translate(0 44.444)"><polygon fill="#40A0B4" points="238.2176 97.2113778 255.995378 107.474489 255.995378 11.0744889 238.2176 0.807822222"></polygon><polygon fill="#40A0B4" points="0 11.0753778 0 107.480711 17.7777778 97.2122667 17.7777778 0.810488889"></polygon><polygon fill="#40A0B4" points="78.232 183.513778 96.0097778 193.776889 138.338667 169.337778 120.560889 159.074667"></polygon><polygon fill="#338090" points="103.117511 169.145956 120.895289 179.410844 138.338844 169.337956 120.561067 159.074844"></polygon></g><g fill="#45C1A8" transform="translate(87.111 133.333)"><polygon points="81.7729778 64.8551111 81.7729778 44.3271111 5.2272 0.131555556 0.000533333333 3.14844444 0.00942222222 3.15377778 0.00942222222 17.648"></polygon><polygon points="0.00888888889 62.8104889 72.8888889 104.888711 90.6702222 94.6256 0.00888888889 42.2807111"></polygon></g><g fill="#7CE1C0"><polygon points="194.712 70.3742222 212.488 80.6373333 255.995556 55.5191111 238.214222 45.2577778"></polygon><polygon points="136.989867 124.228978 119.212089 113.965867 78.2236444 137.631644 96.0014222 147.894756"></polygon><polygon points="216.8928 32.9425778 199.111467 22.6794667 155.609244 47.7976889 173.387022 58.0625778"></polygon><polygon points="97.8876444 101.652622 80.1098667 91.3895111 39.1214222 115.055289 56.8992 125.3184"></polygon><polygon points="116.5072 25.2222222 134.284978 35.4853333 177.790756 10.3671111 160.009422 0.104"></polygon><polygon points="0.0192 92.4782222 17.7969778 102.741333 58.7854222 79.0773333 41.0076444 68.8124444"></polygon></g><g fill="url(#linkerd-gui-asset-a)" transform="translate(0 92.444)"><polygon points="238.2176 10.2897778 238.2176 100.616889 255.995378 90.352 255.995378 0.0266666667"></polygon><polygon points="216.883556 112.932622 216.883556 22.6072889 199.105778 32.8704 199.105778 123.197511"></polygon><polygon points="159.9936 55.4513778 159.9936 145.778489 177.773156 135.5136 177.773156 45.1864889"></polygon><polygon points="78.232 135.513778 96.0097778 145.776889 96.0097778 55.4533333 78.232 45.1866667"></polygon><polygon points="56.8986667 32.8714667 56.8986667 123.1968 39.1208889 112.933689 39.1208889 22.6065778"></polygon><polygon points="0.0096 90.3521778 17.7873778 100.615289 17.7873778 10.2899556 0.0096 0.0250666667"></polygon></g><g fill="#45C1A8" transform="translate(24.889 67.556)"><polygon points="78.2190222 55.7077333 95.9968 65.9708444 112.101689 56.6730667 94.3239111 46.4099556"></polygon><polygon points="0.0149333333 10.5550222 17.7927111 20.8181333 33.8958222 11.5203556 16.1198222 1.25724444"></polygon><polygon points="39.1171556 33.1313778 56.8949333 43.3944889 72.9980444 34.0967111 55.2220444 23.8336"></polygon></g><g fill="#A2EACF"><polygon points="96.0016 0.0942222222 78.2220444 10.3573333 238.214933 102.732444 255.994489 92.4693333"></polygon><polygon points="56.8894222 22.6757333 39.1116444 32.9388444 199.102756 125.313956 216.884089 115.050844"></polygon><polygon points="0 55.5198222 159.991111 147.894933 177.772444 137.631822 17.7777778 45.2567111"></polygon></g></g>', 2)
    ]), 4));
  }
});
export {
  f as _
};
