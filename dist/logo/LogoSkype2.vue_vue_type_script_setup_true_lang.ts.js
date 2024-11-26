import { defineComponent as i, computed as p, openBlock as r, createElementBlock as l, normalizeStyle as c, createStaticVNode as a } from "vue";
const d = /* @__PURE__ */ i({
  __name: "LogoSkype2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, e = p(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (f, s) => (r(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: c(e.value)
    }, s[0] || (s[0] = [
      a('<defs><linearGradient id="skype-2-gui-asset-a" x1="42.173%" x2="57.827%" y1=".584%" y2="99.416%"><stop offset="1%" stop-color="#00B7F0"></stop><stop offset="34%" stop-color="#009DE5"></stop><stop offset="76%" stop-color="#0082D9"></stop><stop offset="100%" stop-color="#0078D4"></stop></linearGradient><linearGradient id="skype-2-gui-asset-b" x1="6.659%" x2="93.341%" y1="75%" y2="25%"><stop offset="0%" stop-color="#0078D4"></stop><stop offset="37%" stop-color="#007AD5"></stop><stop offset="57%" stop-color="#0082D9"></stop><stop offset="74%" stop-color="#0090DF"></stop><stop offset="88%" stop-color="#00A3E7"></stop><stop offset="100%" stop-color="#00BCF2"></stop></linearGradient><linearGradient id="skype-2-gui-asset-f" x1="30.436%" x2="80.436%" y1="16.124%" y2="102.737%"><stop offset="0%" stop-color="#00B7F0"></stop><stop offset="100%" stop-color="#007CC1"></stop></linearGradient><linearGradient id="skype-2-gui-asset-g" x1="45.636%" x2="54.364%" y1="99.815%" y2=".185%"><stop offset="0%" stop-color="#0078D4"></stop><stop offset="100%" stop-color="#00BCF2"></stop></linearGradient><radialGradient id="skype-2-gui-asset-d" cx="48.539%" cy="50%" r="50.021%" fx="48.539%" fy="50%"><stop offset="0%" stop-color="#000"></stop><stop offset="100%" stop-color="#000" stop-opacity="0"></stop></radialGradient><path id="skype-2-gui-asset-c" d="M179.903 104.187a75.7 75.7 0 0 0-38.567 10.55c19.535-32.94 11.499-75.273-18.749-98.764C92.34-7.52 49.337-4.827 22.255 22.255-4.826 49.336-7.519 92.34 15.973 122.587c23.491 30.248 65.823 38.284 98.765 18.749-17.49 29.642-12.843 67.344 11.322 91.852 24.166 24.508 61.798 29.685 91.684 12.613s44.542-52.118 35.705-85.382c-8.836-33.265-38.95-56.418-73.37-56.409z"></path></defs><g><path fill="#FFF" d="M246.663 143.907a115 115 0 0 0 1.153-15.782A119.87 119.87 0 0 0 127.948 8.258c-5.28.022-10.553.407-15.781 1.152C82.62-6.514 46.125-1.165 22.392 22.57S-6.691 82.797 9.233 112.344c-.745 5.228-1.13 10.5-1.153 15.781 0 66.202 53.667 119.868 119.868 119.868 5.28-.022 10.554-.407 15.782-1.152 29.546 15.924 66.04 10.575 89.775-13.16 23.733-23.733 29.083-60.228 13.158-89.774"></path><circle cx="75.994" cy="76.171" r="75.893" fill="url(#skype-2-gui-asset-a)"></circle><circle cx="179.903" cy="180.08" r="75.893" fill="url(#skype-2-gui-asset-b)"></circle><g><mask id="skype-2-gui-asset-e" fill="#fff"><use xlink:href="#skype-2-gui-asset-c"></use></mask><circle cx="125.547" cy="133.578" r="141.812" fill="url(#skype-2-gui-asset-d)" mask="url(#skype-2-gui-asset-e)"></circle></g><circle cx="127.948" cy="128.125" r="119.868" fill="url(#skype-2-gui-asset-f)"></circle><circle cx="127.948" cy="128.125" r="119.868" fill="url(#skype-2-gui-asset-g)"></circle><path fill="#FFF" d="M84.239 113.408a34.76 34.76 0 0 1-4.078-17.2 31.12 31.12 0 0 1 7.27-20.746 44.33 44.33 0 0 1 18.973-12.59 73.1 73.1 0 0 1 24.736-4.167 101 101 0 0 1 16.49 1.241 70 70 0 0 1 11.438 2.926 21.9 21.9 0 0 1 8.866 5.763 11.26 11.26 0 0 1 2.837 7.625 11.17 11.17 0 0 1-2.926 8.068 9.57 9.57 0 0 1-7.27 3.014 13.7 13.7 0 0 1-5.497-1.241 103 103 0 0 0-12.856-4.7 46.5 46.5 0 0 0-12.5-1.506 29.26 29.26 0 0 0-15.605 3.9 12.94 12.94 0 0 0-6.206 11.704 11.7 11.7 0 0 0 3.192 8.156 29.8 29.8 0 0 0 8.866 6.295c3.635 1.773 8.866 4.167 16.313 7.182l2.305.886a111.4 111.4 0 0 1 20.126 10.107 40.8 40.8 0 0 1 12.501 12.767 33.6 33.6 0 0 1 4.522 17.732 35.46 35.46 0 0 1-6.295 21.367 36.7 36.7 0 0 1-17.732 12.945 73.5 73.5 0 0 1-26.155 4.255 82.4 82.4 0 0 1-35.464-6.738 20.04 20.04 0 0 1-7.358-5.674 13.5 13.5 0 0 1-2.305-7.802 9.93 9.93 0 0 1 3.103-7.89 11.35 11.35 0 0 1 8.068-2.838 21.2 21.2 0 0 1 9.486 2.394c3.635 1.773 6.472 3.192 8.866 4.078a40 40 0 0 0 7.359 2.305 39.5 39.5 0 0 0 9.487.976 25.18 25.18 0 0 0 15.958-4.256 13.83 13.83 0 0 0 5.408-11.614 12.5 12.5 0 0 0-3.369-8.866 37.9 37.9 0 0 0-9.93-7.27c-4.344-2.306-10.55-5.054-18.44-8.423a118 118 0 0 1-20.304-10.462c-4.796-3.19-8.977-6.727-11.88-11.703"></path></g>', 2)
    ]), 4));
  }
});
export {
  d as _
};
