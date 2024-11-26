import { defineComponent as p, computed as i, openBlock as l, createElementBlock as h, normalizeStyle as s, createStaticVNode as o } from "vue";
const r = /* @__PURE__ */ p({
  __name: "LogoDuckduckgo2",
  props: {
    width: {},
    height: {}
  },
  setup(c) {
    const t = c, e = i(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (d, a) => (l(), h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "255",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 255",
      style: s(e.value)
    }, a[0] || (a[0] = [
      o('<defs><linearGradient id="duckduckgo-2-gui-asset-a" x1="71.005%" x2="0%" y1="100%" y2="100%"><stop offset="0%" stop-color="#394A9F"></stop><stop offset="100%" stop-color="#6176B9"></stop></linearGradient></defs><g><path fill="#DE5833" d="M128.145 18.841c60.002 0 108.643 48.641 108.643 108.643 0 60.001-48.641 108.642-108.643 108.642-60.001 0-108.642-48.641-108.642-108.642 0-60.002 48.641-108.643 108.642-108.643"></path><path fill="#DE5833" d="M128.143 254.922c70.383 0 127.44-57.057 127.44-127.44S198.526.042 128.143.042.703 57.099.703 127.482s57.057 127.44 127.44 127.44m0-10.62c-64.518 0-116.82-52.302-116.82-116.82s52.302-116.82 116.82-116.82 116.82 52.302 116.82 116.82-52.302 116.82-116.82 116.82"></path><g><path fill="#D5D7D8" d="M75.219 54.13c-.021-1.827 1.306-2.85 3.069-3.567-.807.132-1.58.334-2.276.646-1.838.833-3.212 3.987-3.199 5.48 8.923-.902 22.118-.278 31.767 2.602.712-.1 1.424-.2 2.147-.283-9.624-4.273-21.066-5.923-31.508-4.878m1.829-10.98c.201-.036.405-.061.607-.095-1.925.239-2.94.927-4.385 1.164 1.569.139 7.514 2.914 11.25 4.44.524-.199.996-.42 1.381-.681-1.937-.286-6.75-4.636-8.853-4.828m9.278 21.606c-.535.206-1.043.421-1.483.652-14.545 7.663-20.97 25.562-17.141 47.01 3.495 19.518 17.82 86.205 24.379 117.571 1.915.673 3.853 1.298 5.815 1.865-5.841-28.24-21.784-102.24-25.504-123.023-3.771-21.143-.102-36.314 13.934-44.075"></path><path fill="#FFF" d="M145.184 218.618c-.24.16-.526.31-.831.456-.226.876-.571 1.54-1.074 1.874-3.004 1.993-11.489 2.997-15.969 1.993-.771-.171-1.355-.454-1.811-.843-7.649 4.247-18.649 9.901-20.883 8.627-3.49-2.001-3.996-28.451-3.49-34.942.369-4.9 17.581 3.037 25.954 7.2 1.851-1.729 6.386-2.886 10.4-3.279-6.065-14.761-10.538-31.645-7.796-43.618-3.79-2.641-8.813-8.766-7.767-15.159.806-4.866 13.38-14.072 22.283-14.628 8.923-.563 11.704-.436 19.138-2.216l1.209-.29c4.576-16.087-6.399-44.074-18.641-56.321-3.991-3.991-10.127-6.503-17.041-7.829-2.659-3.649-6.948-7.138-13.02-10.369-11.275-5.986-25.209-8.423-38.19-6.219-.202.034-.406.059-.607.095 2.103.192 6.916 4.542 8.853 4.828-.385.261-.857.482-1.381.681-1.818.692-4.289 1.112-6.232 1.904-1.763.717-3.09 1.74-3.069 3.567 10.442-1.045 21.884.605 31.508 4.878-.723.083-1.435.183-2.147.283-6.825.96-13.098 2.728-17.63 5.119-.213.111-.415.231-.624.346-14.036 7.761-17.705 22.932-13.934 44.075C76.112 129.614 92.159 204.76 98 233c9.603 2.779 18.582 5 29.08 5 8.912 0 19.631-1.975 27.92-4-2.911-5.613-6.656-11.82-8.964-16.271-.308.367-.551.688-.852.889m5.873-106.561c-3.804 0-6.907-3.094-6.907-6.92 0-3.808 3.103-6.903 6.907-6.903 3.825 0 6.916 3.095 6.916 6.903a6.91 6.91 0 0 1-6.916 6.92m4.161-26.008s-4.357-2.489-7.738-2.447c-6.948.091-8.84 3.161-8.84 3.161s1.166-7.318 10.051-5.85c4.817.801 6.527 5.136 6.527 5.136m-73.255 8.997s-3.129-6.973 5.21-10.39c8.348-3.418 12.413 1.945 12.413 1.945s-6.062-2.742-11.956.962c-5.884 3.7-5.667 7.483-5.667 7.483m7.29 14.862a8.04 8.04 0 0 1 8.047-8.044 8.04 8.04 0 0 1 8.04 8.044c0 4.447-3.6 8.041-8.04 8.041a8.034 8.034 0 0 1-8.047-8.041"></path><path fill="#2D4F8E" d="M105.34 109.908a8.04 8.04 0 0 0-8.04-8.044 8.04 8.04 0 0 0-8.047 8.044 8.034 8.034 0 0 0 8.047 8.041c4.44 0 8.04-3.594 8.04-8.041m-4.478-.591a2.09 2.09 0 0 1-2.081-2.09 2.085 2.085 0 1 1 4.171 0 2.09 2.09 0 0 1-2.09 2.09"></path><path fill="#FFF" d="M100.862 105.139a2.085 2.085 0 0 0-2.081 2.088c0 1.154.939 2.093 2.081 2.09a2.09 2.09 0 0 0 2.09-2.09 2.087 2.087 0 0 0-2.09-2.088"></path><path fill="#2D4F8E" d="M151.057 98.234c-3.804 0-6.907 3.095-6.907 6.903 0 3.826 3.103 6.92 6.907 6.92a6.91 6.91 0 0 0 6.916-6.92c0-3.808-3.091-6.903-6.916-6.903m3.067 6.394c-.975 0-1.78-.793-1.78-1.789 0-.983.805-1.79 1.78-1.79 1.017 0 1.797.807 1.797 1.79 0 .996-.78 1.789-1.797 1.789"></path><path fill="#FFF" d="M154.124 101.049c-.975 0-1.78.807-1.78 1.79 0 .996.805 1.789 1.78 1.789a1.773 1.773 0 0 0 1.797-1.789c0-.983-.78-1.79-1.797-1.79"></path><path fill="url(#duckduckgo-2-gui-asset-a)" d="M33.586 44.601s-4.065-5.363-12.413-1.945c-8.339 3.417-5.21 10.39-5.21 10.39s-.217-3.783 5.667-7.483c5.894-3.704 11.956-.962 11.956-.962m49.105-5.688c-8.885-1.468-10.051 5.85-10.051 5.85s1.892-3.07 8.84-3.161c3.381-.042 7.738 2.447 7.738 2.447s-1.71-4.335-6.527-5.136" transform="translate(66 42)"></path><path fill="#FDD209" d="M144.2 126.299c-8.903.556-21.477 9.762-22.283 14.628-1.046 6.393 3.977 12.518 7.767 15.159l.031.023c3.789 2.636 29.018 11.147 41.535 10.911 12.531-.244 33.111-7.918 30.851-14.067-2.25-6.151-22.689 5.427-44.007 3.451-15.788-1.467-18.575-8.54-15.079-13.706 4.397-6.493 12.406 1.232 25.616-2.721 13.23-3.942 31.732-10.998 38.597-14.84 15.873-8.849-6.642-12.519-11.96-10.064-5.041 2.329-22.587 6.757-30.721 8.72l-1.209.29c-7.434 1.78-10.215 1.653-19.138 2.216"></path></g><g><path fill="#65BC46" d="M124.316 206.97c0-.921.741-1.736 1.917-2.431.033-.559.337-1.079.847-1.556-8.373-4.163-25.585-12.1-25.954-7.2-.506 6.491 0 32.941 3.49 34.942 2.234 1.274 13.234-4.38 20.883-8.627-2.207-1.881-1.183-6.447-1.183-15.128m21.609 10.716.111.043c6.854 2.645 20.498 7.624 23.461 6.537 3.995-1.527 2.995-33.453-1.489-34.47-3.592-.797-17.343 8.892-22.753 12.839.957 4.041 2.115 12.045.67 15.051"></path><path fill="#43A244" d="M129.214 220.611c-4.495-.996-2.993-5.493-2.993-15.971 0-.034.01-.067.012-.101-1.176.695-1.917 1.51-1.917 2.431 0 8.681-1.024 13.247 1.183 15.128.456.389 1.04.672 1.811.843 4.48 1.004 12.965 0 15.969-1.993.503-.334.848-.998 1.074-1.874-3.516 1.684-11.024 2.473-15.139 1.537"></path><path fill="#65BC46" d="M127.08 202.983c-.51.477-.814.997-.847 1.556-.002.034-.012.067-.012.101 0 10.478-1.502 14.975 2.993 15.971 4.115.936 11.623.147 15.139-1.537.305-.146.591-.296.831-.456.301-.201.544-.522.741-.932 1.445-3.006.287-11.01-.67-15.051-.211-.889-.411-1.589-.572-1.999-.413-1.022-3.594-1.285-7.203-.932-4.014.393-8.549 1.55-10.4 3.279"></path></g></g>', 2)
    ]), 4));
  }
});
export {
  r as _
};
