import { defineComponent as a, computed as p, openBlock as l, createElementBlock as i, normalizeStyle as r, createStaticVNode as f } from "vue";
const n = /* @__PURE__ */ a({
  __name: "LogoAurelia",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const t = s, e = p(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (d, o) => (l(), i("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "249",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 249",
      style: r(e.value)
    }, o[0] || (o[0] = [
      f('<defs><linearGradient id="aurelia-gui-asset-a" x1="-388.148%" x2="237.684%" y1="-113.678%" y2="370.655%"><stop offset="0%" stop-color="#C06FBB"></stop><stop offset="100%" stop-color="#6E4D9B"></stop></linearGradient><linearGradient id="aurelia-gui-asset-b" x1="72.945%" x2="-97.052%" y1="79.515%" y2="-119.502%"><stop offset="0%" stop-color="#6E4D9B"></stop><stop offset="14%" stop-color="#77327A"></stop><stop offset="29%" stop-color="#B31777"></stop><stop offset="84%" stop-color="#CD0F7E"></stop><stop offset="100%" stop-color="#ED2C89"></stop></linearGradient><linearGradient id="aurelia-gui-asset-c" x1="-232.212%" x2="250.776%" y1="-693.6%" y2="101.71%"><stop offset="0%" stop-color="#C06FBB"></stop><stop offset="100%" stop-color="#6E4D9B"></stop></linearGradient><linearGradient id="aurelia-gui-asset-d" x1="-821.186%" x2="101.985%" y1="-466.93%" y2="287.264%"><stop offset="0%" stop-color="#C06FBB"></stop><stop offset="100%" stop-color="#6E4D9B"></stop></linearGradient><linearGradient id="aurelia-gui-asset-e" x1="-140.095%" x2="418.499%" y1="-230.926%" y2="261.977%"><stop offset="0%" stop-color="#C06FBB"></stop><stop offset="100%" stop-color="#6E4D9B"></stop></linearGradient><linearGradient id="aurelia-gui-asset-f" x1="191.084%" x2="20.358%" y1="225.067%" y2="24.595%"><stop offset="0%" stop-color="#6E4D9B"></stop><stop offset="14%" stop-color="#77327A"></stop><stop offset="29%" stop-color="#B31777"></stop><stop offset="84%" stop-color="#CD0F7E"></stop><stop offset="100%" stop-color="#ED2C89"></stop></linearGradient><linearGradient id="aurelia-gui-asset-g" x1="-388.094%" x2="237.675%" y1="-138.728%" y2="445.405%"><stop offset="0%" stop-color="#C06FBB"></stop><stop offset="100%" stop-color="#6E4D9B"></stop></linearGradient><linearGradient id="aurelia-gui-asset-h" x1="11.503%" x2="89.819%" y1="89.653%" y2="11.577%"><stop offset="0%" stop-color="#6E4D9B"></stop><stop offset="14%" stop-color="#77327A"></stop><stop offset="53%" stop-color="#B31777"></stop><stop offset="79%" stop-color="#CD0F7E"></stop><stop offset="100%" stop-color="#ED2C89"></stop></linearGradient></defs><g><path fill="url(#aurelia-gui-asset-a)" d="m167.876 46.369-23.68 15.804L119.8 25.615 143.48 9.81z"></path><path fill="url(#aurelia-gui-asset-b)" d="m187.129 156.2 40.46 60.63-48.198 32.165-40.46-60.632-7.06-10.576 48.2-32.165z"></path><path fill="url(#aurelia-gui-asset-c)" d="m126.422 196.71 8.908 13.349-36.686 24.482-15.967-23.926 8.015-5.348 28.672-19.134z"></path><path fill="url(#aurelia-gui-asset-d)" d="m207.172 127.537 10.29-6.867 15.966 23.926-23.683 15.805-8.908-13.35 13.393-8.937zm-6.335 19.515-7.058-10.577 13.393-8.938 7.058 10.577z"></path><path fill="url(#aurelia-gui-asset-e)" d="m41.11 130.967-8.015 5.348L8.698 99.756l36.687-24.482 17.1 25.627-28.671 19.134L62.486 100.9l7.296 10.933z"></path><path fill="url(#aurelia-gui-asset-f)" d="m130.489 71.322-48.2 32.165-7.295-10.933L34.912 32.49 83.112.326l40.081 60.063z"></path><path fill="url(#aurelia-gui-asset-g)" d="m157.59 53.238-13.393 8.937-7.297-10.933-17.1-25.626L143.483 9.81l24.397 36.56z"></path><path fill="#714896" d="m97.75 215.844-7.058-10.577 28.672-19.134 7.058 10.577z"></path><path fill="#6F4795" d="m200.837 147.052-7.058-10.577 13.393-8.938 7.058 10.577z"></path><path fill="#88519F" d="m41.11 130.967-7.296-10.932L62.485 100.9l7.297 10.933z"></path><path fill="#85509E" d="M144.197 62.175 136.9 51.242l13.395-8.938 7.295 10.934z"></path><path fill="#8D166A" d="m187.129 156.2-48.199 32.163-7.058-10.576 48.199-32.165z"></path><path fill="#A70D6F" d="m123.193 60.39 7.296 10.932-48.2 32.165-7.295-10.933z"></path><path fill="#9E61AD" d="m27.439 51.653 9.097 13.633-13.633 9.097-9.097-13.633z"></path><path fill="#8053A3" d="m76.568 215.084 9.097 13.633-13.632 9.097-9.098-13.632z"></path><path fill="url(#aurelia-gui-asset-h)" d="M40.704 228.814.792 168.518 214.089 25.856l41.852 59.333z"></path></g>', 2)
    ]), 4));
  }
});
export {
  n as _
};
