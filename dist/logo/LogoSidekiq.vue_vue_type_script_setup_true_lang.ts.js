import { defineComponent as c, computed as h, openBlock as i, createElementBlock as m, normalizeStyle as o, createElementVNode as t } from "vue";
const n = /* @__PURE__ */ c({
  __name: "LogoSidekiq",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const q = s, l = h(() => ({
      width: q.width || "1em",
      height: q.height || "1em",
      minWidth: q.width || "1em",
      minHeight: q.height || "1em"
    }));
    return (v, e) => (i(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "188",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 188",
      style: o(l.value)
    }, e[0] || (e[0] = [
      t("g", null, [
        t("g", null, [
          t("path", {
            fill: "#991B21",
            d: "M47.594 86.905s-2.156-.447-2.79-.255c-.633.19-4.25-.444-5.837-1.591-1.587-1.144-3.172-.317-4.631-1.209-1.457-.892-3.68-.765-5.327-.827-1.649-.063-3.743.062-4.504 1.081-.762 1.017-3.742 4.138-4.82 5.41s-5.455 5.854-7.168 6.553c0 0 .443.702.19 1.21-.254.511-.064 1.972-.064 2.483s.127 1.335-.314 1.847c-.447.51-.7 1.335-.7 1.653s-.509 1.464 0 2.993c.507 1.528.95 3.244-1.142 2.545-2.094-.699-1.65-2.608-3.36-2.674-1.712-.063-3.932 0-4.567-2.353-.638-2.356-1.84-6.365-2.095-7.002-.252-.634-1.14-3.562.51-6.108s1.965-4.392 2.22-4.966c.252-.572 1.459-4.201 2.344-4.712.888-.51.57-2.1 1.079-2.8.507-.7.316-1.846.633-2.483.317-.636.445-2.48.888-3.88.444-1.4 1.903-3.567 2.791-4.711s1.397-2.862 1.397-3.436-.317-1.78 1.14-2.8c1.457-1.018 4.058-4.327 4.313-4.837 0-.126 0-2.48-.129-3.308-.126-.828-.316-1.591.507-1.91.828-.32 1.968-1.02 1.968-1.02s-.791-1.017-2.505-1.877c-1.713-.858-6.851-6.682-7.326-10.118-.477-3.438-.667-8.88 3.996-10.789 4.663-1.91 9.799-2.96 10.562-3.055.762-.094 3.425-.668 4.473.095 0 0-1.142-.19-1.617 0-.477.191 2.28.097 2.948.86 0 0-1.33-.38-2.092-.286-.76.095 1.332.955 1.713 1.623.379.669 1.808 1.146 1.617 2.197-.188 1.05-.284 2.673-.096 3.15.192.477.667 1.337.763 2.672.096 1.338.477 3.152.856 4.01.38.86 1.333 3.532.952 5.442 0 0 .38.954 2.282-1.241 1.904-2.197 3.808-2.578 4.758-2.578.952 0 2.38-.956 3.33-.574.954.383 2.002-.094 3.142.192s5.898 0 6.946-.383c1.044-.383 4.661-.86 5.42-.86.762 0-.95-1.24.478-2.195s-1.523-1.432.667-4.199c2.186-2.77.092-3.532-.287-4.104-.378-.574-.475-2.389-.475-3.438 0-1.051-.284-3.724-.284-3.724l.38-.477s-.307-.508-.608-.688c-.3-.18-.6-1.263-.837-1.984-.243-.722-2.88-4.633-3.659-5.234-.78-.604-.899-1.503-.78-2.346.12-.845.718-1.565.6-2.468-.121-.902-.06-2.104-.121-2.525-.059-.422.12-2.947.661-3.188 0 0 .419-.181.6.419 0 0-.302-2.104.358-2.104 0 0 .78-.24 1.08.843.298 1.083.6 1.683.66 1.985.06.3.3.78.3.78s.657-.298 1.198-.059c.54.24.901.481.901.782s0-.24.66-.24c.657 0 1.259-.182 1.44.48.177.662.3 1.145.358 1.806.062.66.18 1.203.42 1.684.241.48.598 1.322.598 2.466s.422 3.248.6 4.212c.18.962 2.22 4.691 2.22 4.691s3.117.603 4.555.302c1.44-.302 3.956.24 3.658 1.564-.3 1.322-.478 5.233-.599 8.302-.12 3.068-.601 9.023-1.08 11.129-.48 2.104-3.417 7.58-4.616 8.481-1.197.904-2.518 1.504-5.815 3.069s-7.136 3.308-7.136 3.308 2.04 2.887 2.519 3.069c.478.18.42-.42 1.017-.182.298.12 1.333.526.675.256-.001.025 3.612.953 3.612.953.346-.007.56-.07.517-.275-.18-.84.66-1.923 1.019-2.165.36-.24-.54 1.082 0 1.682.54.604 8.29-1.7 8.146-1.287s.42.445.914.057c.49-.386 2.544-1.728 4.007-1.722 1.467.007 4.786.3 5.676-.025.89-.323 4.937-2.83 6.289-3.492 1.348-.666 6.007-.601 7.974-1.93 1.967-1.33 6.298-4.444 8.127-5.578 1.827-1.131 15.387-9.451 18.28-9.904 2.892-.452 9.826-3.196 11.014-4.046 1.188-.848 4.925-2.913 5.674-3.56s4.499.997 6.452 3.785c0 0 3.811-1.872 4.633-1.944.82-.072 2.34-1.133 3.506-2.029 1.167-.897 4.682-3.272 6.219-4.023 0 0 .777-.343.926-.89s.769-1.592 1.327-1.376c0 0 1.224-1.567 1.72-1.096 0 0 1.075-1.02 1.691-.465 0 0 .61.087.815.416 0 0 .773-.626 1.131-.151 0 0 .558-.632 1.5.11 0 0 .625.774-.527 2.197 0 0-.722.375-1.227 1.42-.502 1.044-1.907 3.03-3.445 3.807-1.543.778-3.323 2.145-3.257 4.938.068 2.796-1.118 6.045-4.043 5.315s-5.489.255-8.05 1.654c0 0-.224 1.476-.471 1.828-.249.35-1.394.237-2.968 1.227-1.573.987-2.533 1.358-3.773 2.29-1.243.93-1.509 1.56-2.553 2.046-1.045.49-2.218 1.818-2.91 2.555-.696.734-3.255 2.541-6.28 4.018-3.026 1.478-15.465 5.931-18.34 8.272-2.88 2.341-8.173 6.536-16.206 10.48-.334.163-.643.322-.958.479-.487.444-7.394 6.785-9.758 8.443-2.452 1.718-3.432 1.964-4.168 5.895-.482 2.591-2.453 6.774-3.814 10.105a164 164 0 0 0-.545 8.31c-.095 2.482-3.26 27.156-4.022 29.824-.764 2.673-.953 4.677-.572 6.776.381 2.095-.571 4.576-1.712 6.675-1.144 2.1-3.047 7.06-2.762 9.922.284 2.861.571 3.912-.285 4.292-.858.38-3.619.288-3.998 1.242-.38.953-1.808.953-1.808.953s-.428 4.257.319 5.006c.748.746 3.388 3.882.177 6.218-3.215 2.339-6.604 4.413-7.394 6.047-.794 1.63-2.555 2.559-3.215 3.087s-1.848 1.279-1.936 1.586c-.087.31-1.054.883-1.98.62 0 0-.792.35-1.63-.577 0 0-1.36.133-1.627-.747 0 0-1.144.085-1.276-.795 0 0-.574-1.28 1.144-1.808 1.714-.532 4.445-4.37 4.533-4.987.087-.617 1.366-4.457 2.333-6.043.967-1.59 2.244-5.737 2.421-9.53 0 0-.394-.263-.394-.658 0-.4.023-2.222.213-2.92.192-.703.571-2.735.319-5.726-.255-2.986.38-7.884 0-11.255-.381-3.37.343-26.771 1.357-29.824 1.017-3.053 1.396-3.751 1.334-4.96-.065-1.21 0-4.899.38-5.088.38-.191.444-4.834.317-5.345-.128-.507-2.857-2.415-3.236-3.751 0 0 .063 1.399 0 1.908-.064.509-.126-.127-1.142-1.21-1.019-1.082-2.921-3.37-3.047-5.025a461 461 0 0 1-3.039-1.783c-.35.015-.523-.15-.608-.294"
          }),
          t("path", {
            fill: "#000",
            d: "M60.563 58.706C60.275 63.872 48.195 87.4 48.195 87.4c-.422 2.082-.335 4.025-.122 5.181.512 2.77-2.047 6.927-2.047 6.927l2.787 1.467c3.765-2.183 2.15-8.728 2.15-8.728a8.2 8.2 0 0 1-.18-3.357l.03.03s13.7-27.155 13.036-29.293a15 15 0 0 1-3.286-.92"
          })
        ]),
        t("path", {
          fill: "#991B21",
          d: "M482.157 99.455q10.035 0 21.337 5.387l.845-4.331h7.605l.053 86.88h-8.767v-30.052q-10.087 7.077-21.337 7.077-13.15 0-17.534-9.348-2.535-5.28-2.958-13.362a191 191 0 0 1-.158-8.133q0-4.49.052-9.031.106-4.543.687-8.398.58-3.855 1.796-6.919 1.267-3.115 3.591-5.281 4.807-4.49 14.788-4.49M141.25 81.498q13.574 0 22.182 3.908l-2.746 8.08q-10.405-4.489-19.172-4.489h-.475q-9.665 0-13.31 3.645-3.063 3.063-3.063 10.615v.212q0 8.608 4.754 11.302 3.22 1.743 11.513 3.063 8.344 1.32 12.412 2.271 4.066.898 6.918 3.01 5.916 4.437 5.915 16.848v.687q0 18.96-15.263 22.604-4.7 1.162-8.873 1.162t-7.605-.317a55 55 0 0 1-6.919-1.003q-8.292-1.69-13.89-5.07l3.486-7.394q11.988 6.337 23.45 6.337 13.308 0 15.58-8.503.74-2.799.74-6.443v-2.06q0-3.696-.53-5.968-.526-2.27-2.217-3.697-2.747-2.377-12.993-3.96-9.135-1.427-12.622-2.694t-5.757-2.747a15 15 0 0 1-3.803-3.802q-3.274-4.754-3.274-13.151v-.528q0-17.43 14.471-20.862 4.594-1.056 10.404-1.056zm127.703-8.873v61.846q0 18.22 1.004 28.467l-7.87.633-1.267-7.235q-11.145 8.08-22.657 8.08-12.729 0-16.954-9.348a30.4 30.4 0 0 1-2.746-11.144q-.264-5.915-.264-10.351 0-4.49.053-9.031.105-4.543.686-8.398.58-3.855 1.796-6.919 1.267-3.115 3.591-5.281 4.806-4.49 15.845-4.49 11.091 0 20.016 3.856V73.47zm49.222 26.83q14.312 0 19.54 7.077 2.536 3.432 3.328 8.344.846 4.86.845 9.296 0 6.918-.317 10.721-7.446.317-13.362.317h-8.503q-13.309 0-20.492-1.162 0 12.148 3.064 16.953 3.75 5.863 14.946 5.863t21.443-4.384l2.587 7.553q-10.932 4.383-24.136 4.383-7.658 0-12.992-1.584-8.503-2.43-11.302-10.035-2.589-7.13-2.588-21.126v-2.693q0-16.743 6.971-23.502 6.286-6.021 20.968-6.021m-123.53 1.056v62.849h-8.556l-.106-62.849zm178.032-27.78v54.504q2.113.423 5.07-2.165a97 97 0 0 0 5.335-4.912q2.323-2.377 4.806-5.176 8.925-10.3 11.725-14.471h10.457q-1.162 2.64-5.334 7.5l-7.078 7.975q-5.756 6.18-9.242 9.136-3.434 2.958-4.542 3.38v.529l1.584.792q3.433 1.637 8.979 8.714l19.7 24.823h-11.091l-13.415-17.587q-9.296-12.147-14.207-12.57l-1.162-.106a4.3 4.3 0 0 0-.95 0h-.635v30.263h-8.767V73.681zm65.011 27.78v62.849h-8.556l-.105-62.849zm-195.881 6.866q-6.444 0-8.503 1.056t-3.17 2.746q-1.055 1.69-1.742 4.648-1.184 5.403-1.214 17.626v1.81q0 11.883 2.587 16.425 2.799 4.806 10.405 4.806h.792q7.288 0 15.527-4.647 2.271-1.268 3.908-2.536v-.105q-.264-4.912-.264-15.158l.053-23.502q-9.506-3.17-18.38-3.17m243.044 0q-6.444 0-8.503 1.056t-3.17 2.746q-1.055 1.69-1.742 4.648-1.215 5.545-1.215 18.274v1.162q0 11.724 2.905 16.425 2.904 4.806 10.616 4.806h.792q7.288 0 14.893-4.014 2.166-1.11 3.803-2.27v-38.08q-9.506-4.753-18.38-4.753m-167.521-.37q-10.563 0-14.419 4.595-3.697 4.383-3.697 16.267h33.749v-5.07q0-8.292-3.222-11.83-3.591-3.962-12.411-3.962M189.363 72.625q2.64 0 3.75.264 1.161.264 1.901 1.004 1.268 1.267 1.268 4.172 0 2.851-.317 4.12-.264 1.214-.95 1.954-1.322 1.32-4.754 1.32-3.54 0-4.542-1.004-1.584-1.636-1.585-4.489 0-2.904.317-4.12.37-1.267 1.057-1.953 1.268-1.268 3.855-1.268m243.044 0q2.64 0 3.75.264 1.161.264 1.901 1.004 1.268 1.267 1.268 4.172 0 2.851-.317 4.12-.264 1.214-.951 1.954-1.32 1.32-4.753 1.32-3.54 0-4.542-1.004-1.585-1.636-1.585-4.489 0-2.904.317-4.12.37-1.267 1.056-1.953 1.267-1.268 3.856-1.268"
        })
      ], -1)
    ]), 4));
  }
});
export {
  n as _
};