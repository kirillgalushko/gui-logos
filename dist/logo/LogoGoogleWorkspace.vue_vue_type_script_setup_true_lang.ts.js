import { defineComponent as q, computed as i, openBlock as m, createElementBlock as o, normalizeStyle as p, createStaticVNode as c } from "vue";
const v = /* @__PURE__ */ q({
  __name: "LogoGoogleWorkspace",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const t = l, e = i(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (a, h) => (m(), o("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "66",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 66",
      style: p(e.value)
    }, h[0] || (h[0] = [
      c('<g><path fill="#5F6368" d="M402.551 18.199q6.024 0 10.253 4.742 4.357 4.742 4.357 11.534 0 6.92-4.357 11.663-4.23 4.742-10.253 4.742h-.128q-3.332 0-6.152-1.41t-4.229-3.845h-.256l.256 4.23v13.584h-5.767V19.096h5.51v4.357h.257q1.41-2.435 4.23-3.844 2.818-1.41 6.28-1.41m-32.68-.128q4.1 0 7.433 2.05 3.332 2.05 4.613 5.127l-5.126 2.178a6.54 6.54 0 0 0-2.82-3.076 9 9 0 0 0-4.485-1.025 7.43 7.43 0 0 0-4.101 1.025q-1.795 1.155-1.795 2.82 0 2.691 4.999 3.717l4.614 1.281q9.227 2.18 9.227 9.228 0 3.973-3.46 6.792t-8.972 2.692q-4.613 0-8.074-2.435a13.33 13.33 0 0 1-4.998-6.28l5.127-2.179q1.153 2.691 3.204 4.23a7.95 7.95 0 0 0 4.741 1.537q2.82 0 4.614-1.153 1.794-1.155 1.923-2.82 0-2.947-4.486-4.357l-5.383-1.282q-8.97-2.307-8.97-8.715 0-4.23 3.46-6.792 3.46-2.563 8.714-2.563m-81.126.128q6.92 0 11.278 4.614 4.486 4.613 4.486 11.662 0 7.178-4.486 11.79-4.485 4.615-11.278 4.615-6.792 0-11.406-4.614-4.486-4.614-4.486-11.79 0-7.05 4.486-11.663t11.406-4.614m208.26 0q6.92 0 10.894 4.357T512 34.988v.64h-24.222q.128 4.486 2.947 7.306t6.921 2.691q5.511 0 8.715-5.51l5.126 2.562a15.4 15.4 0 0 1-5.767 6.024q-3.588 2.178-8.33 2.179-6.793 0-11.15-4.614t-4.358-11.79q0-6.922 4.23-11.663 4.23-4.743 10.893-4.614m-30.63 0q4.742 0 8.202 2.307t5.255 6.536l-5.255 2.179q-2.434-5.768-8.587-5.768-3.972 0-6.92 3.204-2.82 3.204-2.82 7.818t2.82 7.946q2.948 3.204 6.92 3.204 6.28 0 8.844-5.767l5.254 2.179q-1.794 4.23-5.383 6.536-3.588 2.307-8.33 2.307-6.921 0-11.406-4.614-4.486-4.742-4.486-11.79 0-7.05 4.486-11.663t11.406-4.614m-33.45 0q6.408 0 10.125 3.332t3.716 9.356v18.967h-5.51v-4.229h-.257q-3.588 5.255-9.612 5.255-4.998 0-8.458-2.948t-3.46-7.562q0-4.74 3.588-7.561t9.74-2.82q5.127 0 8.459 1.795v-1.282q0-3.076-2.435-5.126a8.2 8.2 0 0 0-5.423-2.051h-.088q-4.87 0-7.69 4.101l-5.126-3.204q4.23-6.023 12.431-6.023M223.64 4.999l9.483 35.243h.257l9.74-29.22h5.383l9.74 29.22h.256l8.971-35.244h6.024l-12.047 44.856h-5.896L245.94 20.25h-.256l-9.74 29.605h-5.895L217.616 4.998zm99.836 13.2q2.435 0 4.23.769l-1.795 5.639q-1.025-.385-3.332-.385-3.332 0-5.767 2.563t-2.435 6.152v16.917h-5.767V19.096h5.51v5.126h.257q.897-2.563 3.717-4.229t5.382-1.794m12.688-13.2V32.68l13.329-13.585h7.305v.256l-11.919 11.92 12.56 18.326v.256h-7.049l-9.484-14.482-4.742 4.742v9.74h-5.767V4.998zm97.53 29.604q-3.46 0-5.895 1.666-2.436 1.666-2.307 4.23 0 2.307 1.922 3.716 1.923 1.41 4.486 1.538 3.588 0 6.408-2.691t2.948-6.28q-2.692-2.18-7.562-2.179m-32.168-11.15q-4.23 0-7.049 3.076-2.691 3.204-2.691 7.946 0 4.999 2.691 8.074 2.82 3.075 7.049 3.076t7.049-3.076q2.82-3.075 2.82-8.074 0-4.742-2.82-7.946t-7.05-3.076m-112.781 0q-4.23 0-7.177 3.076-2.948 3.076-2.948 7.946 0 4.999 2.948 8.074t7.177 3.076 7.177-3.076q2.947-3.075 2.82-8.074 0-4.87-2.82-7.946-2.948-3.075-7.177-3.076m208.132 0q-3.204 0-5.51 1.923-2.308 1.922-3.205 5.382h17.686q-.255-3.204-2.563-5.254-2.307-2.05-6.408-2.05"></path><g><path fill="#4285F4" d="M25.888 30.246v-7.049h23.326c.267 1.437.396 2.896.384 4.357 0 5.127-1.41 11.663-6.024 16.149C39.09 48.445 33.45 50.88 25.76 50.88 11.79 50.88 0 39.473 0 25.504S11.79 0 25.76 0c7.818 0 13.329 3.076 17.558 7.049l-4.998 4.87A18.199 18.199 0 0 0 7.56 25.504c0 10.253 8.075 18.455 18.2 18.455 6.664 0 10.508-2.691 12.943-5.126 1.923-1.923 3.204-4.742 3.717-8.587z"></path><path fill="#EA4335" d="M85.098 34.475c0 9.484-7.433 16.405-16.532 16.405S52.16 43.959 52.16 34.475s7.433-16.404 16.405-16.404c8.97 0 16.532 6.92 16.532 16.404m-7.305 0c0-5.895-4.229-9.868-9.227-9.868s-9.228 3.973-9.228 9.868 4.358 9.997 9.228 9.997 9.227-4.102 9.227-9.997"></path><path fill="#FBBC04" d="M120.983 34.475c0 9.484-7.433 16.405-16.532 16.405s-16.405-6.921-16.405-16.405 7.433-16.404 16.405-16.404c8.97 0 16.532 6.92 16.532 16.404m-7.305 0c0-5.895-4.23-9.868-9.227-9.868-4.999 0-9.228 3.973-9.228 9.868s4.357 9.997 9.228 9.997 9.227-4.102 9.227-9.997"></path><path fill="#4285F4" d="M155.33 19.096v29.477c0 12.047-7.177 17.045-15.635 17.045-7.946 0-12.688-5.383-14.482-9.74l6.28-2.563c1.153 2.691 3.844 5.895 8.202 5.895 5.51 0 8.843-3.46 8.843-9.612v-2.435h-.257a11.15 11.15 0 0 1-8.715 3.717c-8.074 0-15.635-7.177-15.635-16.277 0-9.227 7.561-16.532 15.635-16.532 3.973 0 7.05 1.794 8.715 3.716h.257v-2.691zm-6.28 15.507c0-5.767-3.844-9.996-8.843-9.996-4.87 0-9.1 4.229-9.1 9.996 0 5.64 4.23 9.869 9.1 9.869 4.999 0 8.843-4.23 8.843-9.869"></path><polygon fill="#34A853" points="160.328411 1.922403 167.505382 1.922403 167.505382 49.9824781 160.328411 49.9824781"></polygon><path fill="#EA4335" d="m195.316 39.858 5.64 3.845c-1.795 2.563-6.152 7.177-13.714 7.177-9.356 0-16.276-7.177-16.276-16.405 0-9.74 7.049-16.404 15.507-16.404 8.459 0 12.688 6.792 13.97 10.509l.769 1.794-21.916 9.1c1.666 3.332 4.23 4.998 7.946 4.998 3.717 0 6.152-1.795 8.074-4.614m-17.173-5.896 14.61-6.023c-.769-2.05-3.204-3.46-6.024-3.46-3.716 0-8.843 3.204-8.586 9.483"></path></g></g>', 1)
    ]), 4));
  }
});
export {
  v as _
};