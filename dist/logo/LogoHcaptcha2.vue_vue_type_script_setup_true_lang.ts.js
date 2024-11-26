import { defineComponent as c, computed as h, openBlock as s, createElementBlock as r, normalizeStyle as o, createStaticVNode as l } from "vue";
const g = /* @__PURE__ */ c({
  __name: "LogoHcaptcha2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const t = i, a = h(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (p, e) => (s(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: o(a.value)
    }, e[0] || (e[0] = [
      l('<defs><linearGradient id="hcaptcha-2-gui-asset-a" x1="49.979%" x2="49.979%" y1="-702.201%" y2="97.969%"><stop offset="0%" stop-color="#00D4BF"></stop><stop offset="100%" stop-color="#0074BF"></stop></linearGradient><linearGradient id="hcaptcha-2-gui-asset-b" x1="50%" x2="50%" y1="-602.243%" y2="197.926%"><stop offset="0%" stop-color="#00D4BF"></stop><stop offset="100%" stop-color="#0074BF"></stop></linearGradient><linearGradient id="hcaptcha-2-gui-asset-c" x1="49.979%" x2="49.979%" y1="-602.243%" y2="197.926%"><stop offset="0%" stop-color="#00D4BF"></stop><stop offset="100%" stop-color="#0074BF"></stop></linearGradient><linearGradient id="hcaptcha-2-gui-asset-d" x1="50.021%" x2="50.021%" y1="-502.498%" y2="298.01%"><stop offset="0%" stop-color="#00D4BF"></stop><stop offset="100%" stop-color="#0074BF"></stop></linearGradient><linearGradient id="hcaptcha-2-gui-asset-e" x1="50%" x2="50%" y1="-502.498%" y2="298.01%"><stop offset="0%" stop-color="#00D4BF"></stop><stop offset="100%" stop-color="#0074BF"></stop></linearGradient><linearGradient id="hcaptcha-2-gui-asset-f" x1="49.979%" x2="49.979%" y1="-502.498%" y2="298.01%"><stop offset="0%" stop-color="#00D4BF"></stop><stop offset="100%" stop-color="#0074BF"></stop></linearGradient><linearGradient id="hcaptcha-2-gui-asset-g" x1="50.021%" x2="50.021%" y1="-402.285%" y2="397.884%"><stop offset="0%" stop-color="#00D4BF"></stop><stop offset="100%" stop-color="#0074BF"></stop></linearGradient><linearGradient id="hcaptcha-2-gui-asset-h" x1="50%" x2="50%" y1="-402.285%" y2="397.884%"><stop offset="0%" stop-color="#00D4BF"></stop><stop offset="100%" stop-color="#0074BF"></stop></linearGradient><linearGradient id="hcaptcha-2-gui-asset-i" x1="49.979%" x2="49.979%" y1="-402.285%" y2="397.884%"><stop offset="0%" stop-color="#00D4BF"></stop><stop offset="100%" stop-color="#0074BF"></stop></linearGradient><linearGradient id="hcaptcha-2-gui-asset-j" x1="50.021%" x2="50.021%" y1="-302.328%" y2="497.842%"><stop offset="0%" stop-color="#00D4BF"></stop><stop offset="100%" stop-color="#0074BF"></stop></linearGradient><linearGradient id="hcaptcha-2-gui-asset-k" x1="50%" x2="50%" y1="-302.328%" y2="497.842%"><stop offset="0%" stop-color="#00D4BF"></stop><stop offset="100%" stop-color="#0074BF"></stop></linearGradient><linearGradient id="hcaptcha-2-gui-asset-l" x1="49.979%" x2="49.979%" y1="-302.328%" y2="497.842%"><stop offset="0%" stop-color="#00D4BF"></stop><stop offset="100%" stop-color="#0074BF"></stop></linearGradient><linearGradient id="hcaptcha-2-gui-asset-m" x1="50.021%" x2="50.021%" y1="-202.328%" y2="597.842%"><stop offset="0%" stop-color="#00D4BF"></stop><stop offset="100%" stop-color="#0074BF"></stop></linearGradient><linearGradient id="hcaptcha-2-gui-asset-n" x1="50%" x2="50%" y1="-202.328%" y2="597.842%"><stop offset="0%" stop-color="#00D4BF"></stop><stop offset="100%" stop-color="#0074BF"></stop></linearGradient><linearGradient id="hcaptcha-2-gui-asset-o" x1="49.979%" x2="49.979%" y1="-202.328%" y2="597.842%"><stop offset="0%" stop-color="#00D4BF"></stop><stop offset="100%" stop-color="#0074BF"></stop></linearGradient><linearGradient id="hcaptcha-2-gui-asset-p" x1="50%" x2="50%" y1="-102.37%" y2="697.799%"><stop offset="0%" stop-color="#00D4BF"></stop><stop offset="100%" stop-color="#0074BF"></stop></linearGradient><linearGradient id="hcaptcha-2-gui-asset-q" x1="49.979%" x2="49.979%" y1="-102.37%" y2="697.799%"><stop offset="0%" stop-color="#00D4BF"></stop><stop offset="100%" stop-color="#0074BF"></stop></linearGradient><linearGradient id="hcaptcha-2-gui-asset-r" x1="49.979%" x2="49.979%" y1="-2.37%" y2="797.799%"><stop offset="0%" stop-color="#00D4BF"></stop><stop offset="100%" stop-color="#0074BF"></stop></linearGradient></defs><g><rect width="32.007" height="32.007" x="160.007" y="223.993" fill="url(#hcaptcha-2-gui-asset-a)" opacity=".5"></rect><rect width="32.007" height="32.007" x="128" y="223.993" fill="url(#hcaptcha-2-gui-asset-a)" opacity=".7"></rect><rect width="32.007" height="32.007" x="96.007" y="223.993" fill="url(#hcaptcha-2-gui-asset-a)" opacity=".7"></rect><rect width="32.007" height="32.007" x="64" y="223.993" fill="url(#hcaptcha-2-gui-asset-a)" opacity=".5"></rect><rect width="31.993" height="32.007" x="192" y="192" fill="url(#hcaptcha-2-gui-asset-b)" opacity=".7"></rect><rect width="32.007" height="32.007" x="160.007" y="192" fill="url(#hcaptcha-2-gui-asset-c)" opacity=".8"></rect><rect width="32.007" height="32.007" x="128" y="192" fill="url(#hcaptcha-2-gui-asset-c)"></rect><rect width="32.007" height="32.007" x="96.007" y="192" fill="url(#hcaptcha-2-gui-asset-c)"></rect><rect width="32.007" height="32.007" x="64" y="192" fill="url(#hcaptcha-2-gui-asset-c)" opacity=".8"></rect><rect width="32.007" height="32.007" x="32.007" y="192" fill="url(#hcaptcha-2-gui-asset-c)" opacity=".7"></rect><rect width="32.007" height="31.993" x="223.993" y="160.007" fill="url(#hcaptcha-2-gui-asset-d)" opacity=".5"></rect><rect width="31.993" height="31.993" x="192" y="160.007" fill="url(#hcaptcha-2-gui-asset-e)" opacity=".8"></rect><rect width="32.007" height="31.993" x="160.007" y="160.007" fill="url(#hcaptcha-2-gui-asset-f)"></rect><rect width="32.007" height="31.993" x="128" y="160.007" fill="url(#hcaptcha-2-gui-asset-f)"></rect><rect width="32.007" height="31.993" x="96.007" y="160.007" fill="url(#hcaptcha-2-gui-asset-f)"></rect><rect width="32.007" height="31.993" x="64" y="160.007" fill="url(#hcaptcha-2-gui-asset-f)"></rect><rect width="32.007" height="31.993" x="32.007" y="160.007" fill="url(#hcaptcha-2-gui-asset-f)" opacity=".8"></rect><rect width="32.007" height="31.993" x="0" y="160.007" fill="url(#hcaptcha-2-gui-asset-f)" opacity=".5"></rect><rect width="32.007" height="32.007" x="223.993" y="128" fill="url(#hcaptcha-2-gui-asset-g)" opacity=".7"></rect><rect width="31.993" height="32.007" x="192" y="128" fill="url(#hcaptcha-2-gui-asset-h)"></rect><rect width="32.007" height="32.007" x="160.007" y="128" fill="url(#hcaptcha-2-gui-asset-i)"></rect><rect width="32.007" height="32.007" x="128" y="128" fill="url(#hcaptcha-2-gui-asset-i)"></rect><rect width="32.007" height="32.007" x="96.007" y="128" fill="url(#hcaptcha-2-gui-asset-i)"></rect><rect width="32.007" height="32.007" x="64" y="128" fill="url(#hcaptcha-2-gui-asset-i)"></rect><rect width="32.007" height="32.007" x="32.007" y="128" fill="url(#hcaptcha-2-gui-asset-i)"></rect><rect width="32.007" height="32.007" x="0" y="128" fill="url(#hcaptcha-2-gui-asset-i)" opacity=".7"></rect><rect width="32.007" height="32.007" x="223.993" y="96.007" fill="url(#hcaptcha-2-gui-asset-j)" opacity=".7"></rect><rect width="31.993" height="32.007" x="192" y="96.007" fill="url(#hcaptcha-2-gui-asset-k)"></rect><rect width="32.007" height="32.007" x="160.007" y="96.007" fill="url(#hcaptcha-2-gui-asset-l)"></rect><rect width="32.007" height="32.007" x="128" y="96.007" fill="url(#hcaptcha-2-gui-asset-l)"></rect><rect width="32.007" height="32.007" x="96.007" y="96.007" fill="url(#hcaptcha-2-gui-asset-l)"></rect><rect width="32.007" height="32.007" x="64" y="96.007" fill="url(#hcaptcha-2-gui-asset-l)"></rect><rect width="32.007" height="32.007" x="32.007" y="96.007" fill="url(#hcaptcha-2-gui-asset-l)"></rect><rect width="32.007" height="32.007" x="0" y="96.007" fill="url(#hcaptcha-2-gui-asset-l)" opacity=".7"></rect><rect width="32.007" height="32.007" x="223.993" y="64" fill="url(#hcaptcha-2-gui-asset-m)" opacity=".5"></rect><rect width="31.993" height="32.007" x="192" y="64" fill="url(#hcaptcha-2-gui-asset-n)" opacity=".8"></rect><rect width="32.007" height="32.007" x="160.007" y="64" fill="url(#hcaptcha-2-gui-asset-o)"></rect><rect width="32.007" height="32.007" x="128" y="64" fill="url(#hcaptcha-2-gui-asset-o)"></rect><rect width="32.007" height="32.007" x="96.007" y="64" fill="url(#hcaptcha-2-gui-asset-o)"></rect><rect width="32.007" height="32.007" x="64" y="64" fill="url(#hcaptcha-2-gui-asset-o)"></rect><rect width="32.007" height="32.007" x="32.007" y="64" fill="url(#hcaptcha-2-gui-asset-o)" opacity=".8"></rect><rect width="32.007" height="32.007" x="0" y="64" fill="url(#hcaptcha-2-gui-asset-o)" opacity=".5"></rect><rect width="31.993" height="32.007" x="192" y="32.007" fill="url(#hcaptcha-2-gui-asset-p)" opacity=".7"></rect><rect width="32.007" height="32.007" x="160.007" y="32.007" fill="url(#hcaptcha-2-gui-asset-q)" opacity=".8"></rect><rect width="32.007" height="32.007" x="128" y="32.007" fill="url(#hcaptcha-2-gui-asset-q)"></rect><rect width="32.007" height="32.007" x="96.007" y="32.007" fill="url(#hcaptcha-2-gui-asset-q)"></rect><rect width="32.007" height="32.007" x="64" y="32.007" fill="url(#hcaptcha-2-gui-asset-q)" opacity=".8"></rect><rect width="32.007" height="32.007" x="32.007" y="32.007" fill="url(#hcaptcha-2-gui-asset-q)" opacity=".7"></rect><rect width="32.007" height="32.007" x="160.007" y="0" fill="url(#hcaptcha-2-gui-asset-r)" opacity=".5"></rect><rect width="32.007" height="32.007" x="128" y="0" fill="url(#hcaptcha-2-gui-asset-r)" opacity=".7"></rect><rect width="32.007" height="32.007" x="96.007" y="0" fill="url(#hcaptcha-2-gui-asset-r)" opacity=".7"></rect><rect width="32.007" height="32.007" x="64" y="0" fill="url(#hcaptcha-2-gui-asset-r)" opacity=".5"></rect><path fill="#FFF" d="m84.25 117.841 8.912-19.951c3.251-5.12 2.818-11.378-.745-14.9a9 9 0 0 0-1.57-1.26 9.85 9.85 0 0 0-8.223-.934 13.44 13.44 0 0 0-7.409 5.756s-12.19 28.445-16.755 41.285c-4.565 12.841-2.709 36.274 14.778 53.828 18.556 18.557 45.47 22.837 62.605 9.942a10.8 10.8 0 0 0 2.018-1.354l52.825-44.143c2.574-2.154 6.38-6.502 2.953-11.487-3.427-4.984-9.63-1.557-12.19.095l-30.423 22.12a1.354 1.354 0 0 1-1.964-.231 3.74 3.74 0 0 1 .298-4.47l46.636-39.578c4.063-3.63 4.592-8.9 1.354-12.516s-8.249-3.44-12.299.23l-41.989 32.833a1.87 1.87 0 0 1-2.709-.352 2.587 2.587 0 0 1-.217-3.44l47.557-46.148a9.305 9.305 0 0 0 .474-13.125 8.9 8.9 0 0 0-6.461-2.709 9.48 9.48 0 0 0-6.678 2.71l-48.531 45.578c-1.165 1.165-3.44 0-3.712-1.355-.1-.493.058-1.004.42-1.354L160.4 70.556a9.17 9.17 0 1 0-12.936-12.976l-56.428 62.307c-2.018 2.018-4.998 2.113-6.42.948a2.113 2.113 0 0 1-.366-2.994"></path></g>', 2)
    ]), 4));
  }
});
export {
  g as _
};
