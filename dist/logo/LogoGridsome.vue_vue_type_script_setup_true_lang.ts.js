import { defineComponent as i, computed as l, openBlock as r, createElementBlock as c, normalizeStyle as p, createStaticVNode as a } from "vue";
const n = /* @__PURE__ */ i({
  __name: "LogoGridsome",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, s = l(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (d, e) => (r(), c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "102",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 102",
      style: p(s.value)
    }, e[0] || (e[0] = [
      a('<defs><linearGradient id="gridsome-gui-asset-a" x1="20.938%" x2="67.331%" y1="135.775%" y2="141.765%"><stop offset="0%" stop-color="#1A7D75"></stop><stop offset="100%" stop-color="#1A8864"></stop></linearGradient><linearGradient id="gridsome-gui-asset-b" x1="5.879%" x2="-17.306%" y1="11.117%" y2="72.271%"><stop offset="1.293%" stop-color="#168A81"></stop><stop offset="100%" stop-color="#31A97F"></stop></linearGradient><linearGradient id="gridsome-gui-asset-c" x1="-144.301%" x2="-70.357%" y1="53.433%" y2="117.634%"><stop offset="0%" stop-color="#27A59B"></stop><stop offset="100%" stop-color="#64D8A2"></stop></linearGradient><linearGradient id="gridsome-gui-asset-d" x1="-143.419%" x2="-4.693%" y1="60.471%" y2="180.917%"><stop offset="0%" stop-color="#27A59B"></stop><stop offset="100%" stop-color="#64D8A2"></stop></linearGradient><linearGradient id="gridsome-gui-asset-e" x1="208.845%" x2="86.111%" y1="-141.921%" y2="-183.711%"><stop offset="0%" stop-color="#27A59B"></stop><stop offset="100%" stop-color="#64D8A2"></stop></linearGradient></defs><g fill-rule="evenodd"><g><path fill="url(#gridsome-gui-asset-a)" d="M91.879 41.993c4.887-.235 9.214 3.557 9.636 8.449 1.828 23.665-19.44 50.13-49.96 50.978-4.892.136-8.967-3.73-9.102-8.634-.135-4.906 3.72-8.992 8.61-9.128 20.249-.562 33.075-18.05 32.39-32.365-.234-4.901 3.538-9.065 8.426-9.3"></path><path fill="url(#gridsome-gui-asset-b)" d="M8.955 41.49c4.893 0 8.86 3.977 8.86 8.884 0 20.48 16.466 33.733 32.914 33.327 4.891-.12 8.954 3.758 9.075 8.663s-3.748 8.98-8.64 9.101C25.445 102.099.008 81.508.008 50.374c0-4.907 4.055-8.885 8.948-8.885"></path><path fill="url(#gridsome-gui-asset-c)" fill-rule="nonzero" d="M69.746 51.062c0-5.023 4.098-9.095 9.152-9.095h13.338c5.055 0 9.279 4.072 9.279 9.095s-4.224 9.097-9.28 9.097H78.899c-5.054 0-9.152-4.073-9.152-9.097"></path><path fill="url(#gridsome-gui-asset-d)" fill-rule="nonzero" d="M41.76 51.076c0-5.031 4.072-9.11 9.089-9.11s9.088 4.079 9.088 9.11-4.071 9.11-9.088 9.11-9.089-4.08-9.089-9.11"></path><path fill="url(#gridsome-gui-asset-e)" d="M59.685 8.516c.204 4.902-3.595 9.042-8.484 9.245-21.105.88-33.99 17.467-33.362 33.217.195 4.902-3.53 9.036-8.42 9.232S.23 56.448.035 51.546C-.987 25.879 20.385.506 50.465.008c4.89-.204 9.017 3.605 9.22 8.508"></path></g><path fill="#1F344A" d="M169.686 46.505h23.828l.05.702c.1 1.401.1 3.188.1 3.778v.006c0 8.883-1.998 15.14-6.907 21.378l-.002.001-.001.002c-6.396 8.03-15.02 12.263-25.13 12.263-19.027 0-32.92-14.61-32.92-34.528 0-20.206 13.79-34.82 32.92-34.82 10.106 0 18.829 4.229 25.13 12.164l.465.584-7.3 5.934-.48-.54c-2.54-2.843-3.659-3.957-5.332-5.077l-.013-.01-.013-.009c-3.482-2.551-7.918-3.977-12.457-3.977-13 0-23 10.972-23 25.653 0 14.49 10.004 25.555 22.804 25.555 6.997 0 14.287-3.716 18.148-9.295l.007-.01.007-.01c2.307-3.118 3.283-6.062 3.954-11.165h-13.858zm32.276-9.817h8.943v5.121c.822-1.406 1.68-2.353 2.882-3.29 2.402-1.888 5.702-2.911 9.07-2.911h2.516v9.171l-.85-.107c-.73-.091-1.467-.092-1.96-.092-3.756 0-7.04 1.74-9.147 4.87l-.003.002-.001.003c-1.838 2.676-2.507 5.157-2.507 10.273v23.728h-8.943zm39.302 0v46.768h-8.943V36.688zm44.634 5.588c-4.237-4.577-9.158-6.668-15.375-6.668-12.723 0-21.97 10.64-21.97 24.71 0 14.087 9.067 24.218 21.97 24.218 3.526 0 6.564-.684 9.31-2.192 2.2-1.208 4.182-2.928 6.065-5.191v6.303h8.942V16.464h-8.942zm50.021 8.292h-8.978v-1.246c0-1.886-.755-3.384-2.072-4.427-1.335-1.057-3.305-1.69-5.774-1.69-2.372 0-4.217.608-5.453 1.6-1.22.98-1.905 2.38-1.905 4.124 0 .924.116 1.64.372 2.24.251.588.659 1.11 1.321 1.614 1.372 1.04 3.75 1.943 7.82 3.075 5.8 1.58 8.99 3.095 11.285 5.4 2.39 2.4 3.838 5.83 3.838 9.368 0 4.15-1.713 7.654-4.7 10.106-2.974 2.442-7.165 3.804-12.09 3.804-5.242 0-9.445-1.228-12.447-3.72-3.013-2.503-4.717-6.196-5.121-10.911l-.07-.82h8.843l.066.683c.23 2.399 1.112 4.16 2.528 5.332 1.425 1.18 3.482 1.839 6.201 1.839 2.418 0 4.34-.63 5.639-1.664 1.284-1.021 2.012-2.472 2.012-4.257 0-.9-.145-1.644-.447-2.287-.3-.641-.774-1.225-1.493-1.777-1.469-1.126-3.902-2.078-7.755-3.057l-.006-.002-.006-.001c-4.939-1.34-8.624-3.076-11.078-5.424-2.485-2.378-3.655-5.33-3.655-8.951 0-4.147 1.685-7.65 4.635-10.104 2.938-2.443 7.08-3.807 11.959-3.807 4.913 0 8.944 1.26 11.807 3.703 2.874 2.453 4.484 6.026 4.688 10.467zm60.44-13.88h8.943v4.702c1.362-1.703 2.825-3.012 4.464-3.952 2.215-1.269 4.698-1.83 7.588-1.83 3.187 0 5.863.687 8.025 2.156 1.8 1.224 3.194 2.958 4.228 5.184 1.522-2.326 3.257-4.078 5.34-5.287 2.456-1.422 5.335-2.053 8.8-2.053 5.34 0 9.514 1.725 12.045 5.11 1.132 1.501 1.867 2.95 2.306 4.957.436 1.975.581 4.475.581 8.065v29.716h-8.941V55.507c0-2.756-.05-4.395-.224-5.571-.17-1.133-.448-1.828-.946-2.689-1.2-2.063-3.838-3.453-7.166-3.453-3.09 0-5.402 1.034-6.953 2.938-1.573 1.927-2.457 4.85-2.457 8.775v27.95h-8.945V55.604c0-4.39-.394-6.487-1.374-8.277l-.004-.013-.008-.013c-1.108-2.226-3.53-3.508-6.655-3.508-3.079 0-5.47 1.1-7.104 3.065-1.65 1.985-2.6 4.935-2.6 8.746v27.851h-8.943zm115.45 26.545H474.42c.183 1.473.427 2.619.784 3.63.42 1.188 1.013 2.224 1.909 3.405l.004.006.004.005c2.788 3.83 6.863 5.874 11.51 5.874 5.306 0 10.327-2.903 12.829-7.369l.32-.566 7.937 2.975-.366.747c-3.85 7.832-11.845 12.596-20.72 12.596-13.83 0-23.733-10.174-23.733-24.317 0-14.321 9.788-24.611 23.438-24.611 13.53 0 23.633 10.264 23.633 23.924v.009c0 .589 0 1.89-.1 3.004zM231.343 24.68c0-3.162 2.388-5.566 5.547-5.566 3.091 0 5.45 2.533 5.45 5.664 0 3.084-2.507 5.468-5.548 5.468-3.071 0-5.449-2.415-5.449-5.566m50.677 23.608c-2.42-2.848-5.85-4.495-9.932-4.495-4.233 0-7.76 1.675-10.241 4.56-2.488 2.894-3.96 7.052-3.96 12.062 0 4.81 1.446 8.847 3.863 11.67 2.41 2.814 5.818 4.46 9.849 4.46 8.193 0 14.299-6.831 14.299-16.327 0-4.961-1.449-9.072-3.878-11.93m67.14-5.887c4.213-4.32 10.183-6.794 17.21-6.794 13.746 0 23.535 10.288 23.535 24.611 0 13.657-10.492 24.317-23.828 24.317-6.89 0-12.786-2.529-16.959-6.884-4.17-4.354-6.576-10.487-6.576-17.63 0-7.19 2.406-13.302 6.618-17.62m27.632 5.988c-2.498-2.786-6.075-4.4-10.422-4.4-4.45 0-8.102 1.618-10.647 4.405-2.55 2.794-4.043 6.822-4.043 11.726 0 4.853 1.491 8.858 4.03 11.64 2.535 2.776 6.164 4.392 10.562 4.392 8.412 0 14.494-6.561 14.494-16.032 0-4.907-1.47-8.937-3.974-11.731m97.774 7.834h27.895c-.316-2.91-.975-4.61-2.324-6.56-2.693-3.63-7.057-5.87-11.8-5.87-4.742 0-8.995 2.237-11.489 5.941-1.178 1.861-1.75 3.487-2.282 6.49M236.89 19.87c-2.737 0-4.79 2.062-4.79 4.81 0 2.75 2.053 4.811 4.692 4.811s4.79-2.061 4.79-4.712c0-2.749-2.052-4.909-4.692-4.909m0 0c-2.737 0-4.79 2.062-4.79 4.81 0 2.75 2.053 4.811 4.692 4.811s4.79-2.061 4.79-4.712c0-2.749-2.052-4.909-4.692-4.909"></path></g>', 2)
    ]), 4));
  }
});
export {
  n as _
};