import { defineComponent as e, computed as l, openBlock as i, createElementBlock as r, normalizeStyle as n, createStaticVNode as a } from "vue";
const h = /* @__PURE__ */ e({
  __name: "LogoPhpstorm",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const o = s, p = l(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (f, t) => (i(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: n(p.value)
    }, t[0] || (t[0] = [
      a('<defs><linearGradient id="phpstorm-gui-asset-a" x1="40.196%" x2="55.577%" y1="64.058%" y2="47.965%"><stop offset="0%" stop-color="#AF1DF5"></stop><stop offset="21%" stop-color="#BC20E4"></stop><stop offset="63%" stop-color="#DD29B8"></stop><stop offset="100%" stop-color="#FF318C"></stop></linearGradient><linearGradient id="phpstorm-gui-asset-b" x1="42.885%" x2="63.378%" y1="78.603%" y2="-4.057%"><stop offset="2%" stop-color="#6B57FF"></stop><stop offset="42%" stop-color="#B74AF7"></stop><stop offset="75%" stop-color="#FF318C"></stop></linearGradient><linearGradient id="phpstorm-gui-asset-c" x1="73.258%" x2="32.049%" y1="102.209%" y2="-3.688%"><stop offset="0%" stop-color="#293896"></stop><stop offset="8%" stop-color="#3B3AA2"></stop><stop offset="29%" stop-color="#6740C0"></stop><stop offset="49%" stop-color="#8A44D8"></stop><stop offset="68%" stop-color="#A347E9"></stop><stop offset="86%" stop-color="#B249F3"></stop><stop offset="100%" stop-color="#B74AF7"></stop></linearGradient><linearGradient id="phpstorm-gui-asset-d" x1="62.87%" x2="39.747%" y1="72.446%" y2="45.568%"><stop offset="2%" stop-color="#6B57FF"></stop><stop offset="78%" stop-color="#B74AF7"></stop></linearGradient></defs><g><polygon fill="url(#phpstorm-gui-asset-a)" points="141.306667 45.0133333 132.773333 19.2 43.68 0 1.42108547e-14 49.4133333 48 73.9733333 48 45.0133333"></polygon><polygon fill="url(#phpstorm-gui-asset-b)" points="48 61.8133333 0 49.4133333 24.4 195.973333 47.92 195.786667"></polygon><polygon fill="url(#phpstorm-gui-asset-c)" points="208 45.0133333 124.506667 45.0133333 158.053333 15.2 222.693333 27.2 256 109.973333 208.026667 157.626667"></polygon><polygon fill="url(#phpstorm-gui-asset-d)" points="208.053333 108.88 208 205.013333 70.56 205.013333 74.1066667 225.92 160.4 256 256 198.773333"></polygon><polygon fill="#000" points="47 43.7706208 209 43.7706208 209 205.770621 47 205.770621"></polygon><path fill="#FFF" d="M67.947 175.093h60v10h-60zm52.32-58.133 7.813-9.6a27.57 27.57 0 0 0 17.973 7.307c5.334 0 8.694-2.16 8.694-5.68v-.16c0-1.364-.343-2.46-1.422-3.451l-.242-.211a7 7 0 0 0-.557-.414l-.315-.204a11 11 0 0 0-.522-.302l-.382-.2-.201-.1-.425-.198a20 20 0 0 0-.454-.198l-.484-.199-.254-.1-.531-.198-.278-.1-.58-.201-.303-.101-.63-.203-.667-.205-.702-.208q-.18-.053-.365-.104l-.758-.212-.795-.215-2.44-.633-.766-.205-1.126-.31-.368-.105-.728-.212-.714-.215-.351-.11-.694-.222-.68-.226-.334-.116-.658-.235-.643-.24q-.16-.061-.316-.124l-.622-.251-.606-.259c-6.286-2.757-10.049-6.826-10.165-14.88l-.002-.573c0-10.792 8.59-17.981 20.68-18.131l.386-.003a34.67 34.67 0 0 1 22.347 7.654l-6.88 9.973a28.1 28.1 0 0 0-15.653-5.92c-5.067 0-7.734 2.32-7.734 5.333v.187c0 2.23.852 3.644 3.457 4.932l.414.197q.214.099.443.196l.472.195.502.195.533.195.563.196.596.198.629.199.662.202 1.057.308 1.137.318 1.219.328 1.303.341q.431.112.853.228l.836.232q.413.117.817.237l.8.242q.197.06.392.123l.772.25.754.256q.558.195 1.096.397l.707.273c7.675 3.042 11.938 7.422 12.063 15.448l.003.554c0 11.947-9.12 18.667-22.106 18.667a38.27 38.27 0 0 1-25.52-9.627M68 65.333h24.533c14.15 0 22.786 8.312 22.958 20.354l.002.526c0 13.867-10.8 21.067-24.24 21.067h-9.92v17.973H68zm23.627 30.214c6.586 0 10.453-3.92 10.453-9.067v-.16c0-5.92-4.107-9.093-10.667-9.093h-10.08v18.32z"></path></g>', 2)
    ]), 4));
  }
});
export {
  h as _
};
