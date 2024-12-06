import { defineComponent as i, computed as p, openBlock as a, createElementBlock as r, normalizeStyle as l, createStaticVNode as d } from "vue";
const h = /* @__PURE__ */ i({
  __name: "LogoD3",
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
    return (c, o) => (a(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "243",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 243",
      style: l(e.value)
    }, o[0] || (o[0] = [
      d('<defs><linearGradient id="d3-gui-asset-a" x1="-82.637%" x2="103.767%" y1="-92.82%" y2="106.042%"><stop offset="0%" stop-color="#F9A03C"></stop><stop offset="100%" stop-color="#F7974E"></stop></linearGradient><linearGradient id="d3-gui-asset-b" x1="-258.924%" x2="97.62%" y1="-248.97%" y2="98.768%"><stop offset="0%" stop-color="#F9A03C"></stop><stop offset="100%" stop-color="#F7974E"></stop></linearGradient><linearGradient id="d3-gui-asset-c" x1="-223.163%" x2="94.028%" y1="-261.968%" y2="101.691%"><stop offset="0%" stop-color="#F9A03C"></stop><stop offset="100%" stop-color="#F7974E"></stop></linearGradient><linearGradient id="d3-gui-asset-d" x1="11.339%" x2="82.496%" y1="-1.822%" y2="92.107%"><stop offset="0%" stop-color="#F26D58"></stop><stop offset="100%" stop-color="#F9A03C"></stop></linearGradient><linearGradient id="d3-gui-asset-e" x1="15.844%" x2="120.126%" y1="3.858%" y2="72.38%"><stop offset="0%" stop-color="#B84E51"></stop><stop offset="100%" stop-color="#F68E48"></stop></linearGradient><linearGradient id="d3-gui-asset-f" x1="46.984%" x2="51.881%" y1="23.466%" y2="147.391%"><stop offset="0%" stop-color="#F9A03C"></stop><stop offset="100%" stop-color="#F7974E"></stop></linearGradient></defs><g><path fill="url(#d3-gui-asset-a)" d="M255.52 175.619c.115-1.115.197-2.24.261-3.371.078-1.339-80.562-77.85-80.562-77.85h-1.928s81.736 86.215 82.229 81.22"></path><path fill="url(#d3-gui-asset-b)" d="M83.472 149.077q-.16.353-.323.704-.172.37-.349.734c-2.57 5.36 35.987 43.053 39.088 38.474.141-.202.283-.416.424-.618.157-.24.312-.47.467-.71 2.48-3.765-38.206-41.032-39.307-38.584"></path><path fill="url(#d3-gui-asset-c)" d="M137.957 202.083c-.109.24-.885 1.552-1.594 2.245-.12.24 37.64 37.688 37.64 37.688h3.4c.002 0-35.446-38.35-39.446-39.933"></path><path fill="url(#d3-gui-asset-d)" d="M255.835 171.568c-1.766 39.147-34.152 70.448-73.72 70.448h-5.35l-39.514-38.928c3.25-4.584 6.272-9.333 8.962-14.285h35.902c11.354 0 20.594-9.235 20.594-20.595 0-11.355-9.24-20.595-20.594-20.595h-21.246c1.619-8.557 2.504-17.381 2.504-26.408 0-9.165-.901-18.114-2.578-26.808h13.197l81.61 80.414c.097-1.078.174-2.155.233-3.243M21.467 0H0v53.213h21.467c37.493 0 68 30.499 68 67.992 0 10.2-2.275 19.883-6.318 28.576l39.163 38.59c12.859-19.24 20.376-42.339 20.376-67.166C142.688 54.373 88.307 0 21.467 0"></path><path fill="url(#d3-gui-asset-e)" d="M182.115 0H95.187C116.419 12.963 134 31.344 145.979 53.213h36.136c11.354 0 20.594 9.235 20.594 20.595 0 11.357-9.24 20.592-20.594 20.592h-8.12l81.61 80.413c.192-2.181.312-4.376.312-6.605 0-17.939-6.437-34.395-17.125-47.203 10.688-12.802 17.125-29.261 17.125-47.197C255.917 33.112 222.813 0 182.115 0"></path><path fill="url(#d3-gui-asset-f)" d="M176.765 242.016H95.808c16.296-10.064 30.384-23.35 41.443-38.928zm-54.453-53.645-39.16-38.59c-10.819 23.251-34.395 39.422-61.685 39.422H0v53.208h21.467c42.01 0 79.09-21.488 100.845-54.04"></path></g>', 2)
    ]), 4));
  }
});
export {
  h as _
};