import { defineComponent as a, computed as p, openBlock as e, createElementBlock as o, normalizeStyle as s, createStaticVNode as c } from "vue";
const r = /* @__PURE__ */ a({
  __name: "LogoGlitch2",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const t = h, i = p(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (F, l) => (e(), o("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "200",
      version: "1.1",
      viewBox: "0 0 256 200",
      style: s(i.value)
    }, l[0] || (l[0] = [
      c('<defs><linearGradient id="glitch-2-gui-asset-a" x1="48.679%" x2="48.679%" y1="0%" y2="99.392%"><stop offset="0%" stop-color="#E459FF"></stop><stop offset="100%" stop-color="#914DFF"></stop></linearGradient><linearGradient id="glitch-2-gui-asset-b" x1="23.626%" x2="65.811%" y1="46.645%" y2="51.388%"><stop offset="0%" stop-color="#F0A5FF"></stop><stop offset="100%" stop-color="#FF676B"></stop></linearGradient><linearGradient id="glitch-2-gui-asset-c" x1="50%" x2="50%" y1="-2.192%" y2="103.082%"><stop offset="0%" stop-color="#6E3BFF"></stop><stop offset="100%" stop-color="#3633FF"></stop></linearGradient><linearGradient id="glitch-2-gui-asset-d" x1="40.57%" x2="57.962%" y1="47.672%" y2="52.149%"><stop offset="0%" stop-color="#F0A5FF"></stop><stop offset="100%" stop-color="#FF676B"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g><path fill="url(#glitch-2-gui-asset-a)" d="M77.631 16.545C53.48 11.695-3.307 36.42.151 64.163c8.592 2.555 16.073 5.678 14.85 8.878H251.33c1.42-9.463-6.005-16.718-.981-24.616 1.586-2.494 2.793-5.339 3.632-8.176V24.895a1.8 1.8 0 0 0-.408-.283c-58.683 18.99-30.185 14.976-92.815.008C149.89 10.98 113.817 1.102 97.002 0c-6.457 0-19.37 16.545-19.37 16.545"></path><path fill="url(#glitch-2-gui-asset-b)" d="M155.515 64.97v7.264H15.131c.129 2.147-3.418 4.35-12.962 6.457 8.474 10.492 33.49 20.577 42.372 21.791-1.59.331-3.354.92-5.23 1.723 28.401 3.576 61.98 4.786 78.679 5.138h55.096q-.89-.2-1.832-.404c-12.256-2.308-7.357-.642-13.317-4.035 78.9-18.995 33.187-16.187 95.635-2.422 2.022-3.632-7.663-12.51-3.224-23.805 1.687-4.297 1.275-8.123.428-11.707z"></path><path fill="url(#glitch-2-gui-asset-c)" d="M100.633 93.622v7.264c-13.191-.275-35.996-.428-57.529-.049C28.88 104.865 3.751 126.333.151 138.96v5.141q.168.401.404.771c7.506 2.232 14.164 4.895 14.915 7.667h105.744v-7.263H250.87c-1.356-6.013-4.104-11.316-.521-16.95 3.684-7.933 5.412-13.377 5.65-16.964v-1.594c-1.033-13.341-29.972 7.897-46.004 8.067-18.16-3.233-14.528-5.65-38.74-10.896-12.256-2.308-7.357-.642-13.317-4.035 15-3.612 25.495-6.433 33.09-8.543v-.739z"></path><path fill="#974DFF" d="M90.948 36.319h.404c9.673 17.13 3.51 30.282-1.614 47.214-1.445 3.427 3.769 6.078 5.246 2.422 4.112-15.73 10.625-33.022 2.825-48.829h.807c37.34.287 75.127 7.066 108.956 23.405 2.248.509 9.48 6.07 10.896 1.615-16.295-19.274-79.704-30.25-106.535-29.463-1.167.222-3.96-.133-7.151-.484-2.502-.279-5.254-.553-7.671-.553-4.492 0-7.809.96-6.163 4.673"></path><path fill="#F1A5FF" d="M90.948 36.319h.404c5.831 11.033 7.328 24.52 1.614 35.915h5.65c2.938-11.448 3.922-23.716-1.21-34.704 37.783.113 76.115 6.299 110.166 23.405 2.24.396 9.9 6.469 10.896 1.614-17.126-19.636-78.941-30.649-106.535-29.866-1.332.254-4.1-.117-7.208-.492-2.397-.287-5-.577-7.296-.577-4.22 0-7.425.972-6.48 4.705"></path><path fill="#974DFF" d="M76.42 38.337h.404c7.837 10.665 7.49 23.558 2.422 35.108-1.7 2.809 2.522 5.617 4.035 2.421 2.833-5.976 4.786-12.732 4.843-19.37.056-7.47-3.354-15.173-7.264-21.388-.513-.924-1.255-1.303-2.018-1.303-1.953 0-3.999 2.494-2.421 4.532"></path><path fill="#F1A5FF" d="M84.895 72.235c2.34-9.766 4.076-20.15-1.21-29.459-.739-1.53-2.918-5.944-2.825-7.667-1.683-3.116-6.162-.016-4.44 2.824h.404C84 48.18 84.895 60.948 79.65 72.235z"></path><path fill="#F1A5FF" d="M76.42 37.933h.404c7.171 10.246 8.071 23.018 2.825 34.301h5.246c2.34-9.765 4.076-20.149-1.21-29.458-.739-1.53-2.922-5.945-2.825-7.668-.5-.924-1.243-1.3-1.998-1.3-1.795 0-3.652 2.128-2.441 4.125"></path><path fill="url(#glitch-2-gui-asset-d)" d="M120.81 145.276v7.263H15.47c.613 2.272-2.752 4.62-12.898 6.86 19.544 18.991 43.87 24.988 65.37 20.178 3.362 15.153 31.67 23.825 50.447 17.756a23.8 23.8 0 0 0-2.017-11.3c26.242 4.468 90.284-15.67 93.622-17.352 3.022-.56 12.32 2.76 21.565 6.086 10.504 3.777 20.94 7.55 22.013 5.617 2.022-3.632-7.663-12.51-3.224-23.81 1.622-4.131 1.303-7.832.52-11.298z"></path><path fill="#373FFF" d="M90.948 117.028h.404c9.766 17.23 3.325 30.548-1.614 47.618-1.445 3.43 3.769 6.077 5.246 2.42 4.415-15.544 10.456-32.787 2.825-48.428l.807-.4c37.327.303 75.16 6.457 108.956 23.002 2.248.509 9.48 6.065 10.896 1.614-16.295-19.269-79.704-30.25-106.535-29.458-1.167.222-3.955-.133-7.143-.485-2.506-.278-5.262-.556-7.68-.556-4.49 0-7.808.964-6.162 4.673"></path><path fill="#F1A5FF" d="M90.948 117.028h.404c5.779 10.915 7.324 24.236 1.614 35.511h5.65c2.958-11.444 3.922-23.716-1.21-34.704 37.743.129 75.966 6.896 110.166 23.405 2.24.509 9.488 6.07 10.896 1.614-16.29-19.269-79.704-30.253-106.535-29.458-1.167.222-3.951-.133-7.143-.485-2.506-.278-5.262-.556-7.68-.556-4.49 0-7.808.964-6.162 4.673"></path><path fill="#373FFF" d="M76.42 119.046h.404c7.837 10.666 7.49 23.559 2.421 35.108-1.699 2.809 2.522 5.618 4.036 2.422 2.833-5.977 4.786-12.728 4.842-19.37.158-7.68-3.676-15.202-7.264-21.792-1.993-3.507-7.179.856-4.439 3.632"></path><path fill="#F1A5FF" d="M84.895 152.54c1.041-6.607 3.531-13.318 2.018-20.178-.202-3.99-10.206-27.659-11.3-13.72h1.211c7.244 10.246 8.08 22.994 2.825 34.3z"></path><path fill="#F1A5FF" d="M75.614 118.638h1.21c7.244 10.25 8.08 22.998 2.825 34.305l5.246-.404c1.041-6.602 3.531-13.317 2.018-20.177-.157-3.103-6.227-18.07-9.443-18.07-.924 0-1.61 1.234-1.856 4.346"></path><path fill="#000" d="M43.733 41.161c6.017 0 10.896 4.879 10.896 10.896s-4.88 10.895-10.896 10.895-10.896-4.878-10.896-10.895 4.88-10.896 10.896-10.896"></path><path fill="#FFF" d="M32.435 51.25c.222-6.461 5.637-11.518 12.098-11.292 6.46.222 11.517 5.642 11.291 12.099-.214 6.299-5.383 11.295-11.687 11.299-6 .46-11.238-4.032-11.698-10.028q-.005-.03-.004-.06a8.474 8.474 0 0 0 9.281 7.263 9.28 9.28 0 0 0 9.282-9.281c0-5.125-4.157-9.282-9.282-9.282s-9.281 4.157-9.281 9.282"></path><path fill="#FFF" d="M37.278 51.25a3.23 3.23 0 0 1 3.228 3.228 3.227 3.227 0 1 1-3.228-3.228"></path><path fill="#000" d="M43.733 121.872c6.017 0 10.896 4.874 10.896 10.891s-4.88 10.896-10.896 10.896-10.896-4.879-10.896-10.896 4.88-10.891 10.896-10.891"></path><path fill="#FFF" d="M32.435 131.554c.222-6.46 5.637-11.517 12.098-11.29 6.46.221 11.517 5.64 11.291 12.097-.214 6.304-5.383 11.296-11.687 11.3-6 .46-11.238-4.028-11.698-10.028q-.005-.03-.004-.061a8.47 8.47 0 0 0 9.204 7.675c.029-.004.049-.008.077-.008 5.125-.004 9.278-4.164 9.274-9.29-.004-5.124-4.165-9.277-9.294-9.273a9.285 9.285 0 0 0-9.261 8.878"></path><path fill="#FFF" d="M37.278 131.96a3.227 3.227 0 1 1 0 6.457 3.23 3.23 0 0 1-3.228-3.228 3.225 3.225 0 0 1 3.228-3.229"></path></g></g>', 2)
    ]), 4));
  }
});
export {
  r as _
};
