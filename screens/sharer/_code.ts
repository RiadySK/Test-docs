const code = `
<style>
  @font-face {
    font-family: 'Font Awesome 5 Pro';
    font-style: normal;
    font-weight: 900;
    font-display: block;
    src: local('Font Awesome 5 Pro'), 
      url('/assets/fonts/fa-solid-900.woff2') format('woff2'), 
      url('/assets/fonts/fa-solid-900.woff') format('woff');
  }
  @font-face {
    font-family: 'Font Awesome 5 Brands';
    font-style: normal;
    font-weight: normal;
    font-display: block;
    src: local('Font Awesome 5 Brands'),
      url('/assets/fonts/fa-brands-400.woff2') format('woff2'), 
      url('/assets/fonts/fa-brands-400.woff') format('woff');
  }
  </style>
  <div class="flex my-4">
    <div class="mr-4">
      <kaskus-sharer 
        onClickFacebook="alert('clicked facebook')"
        onClickMessenger="alert('clicked messenger')"
        onClickWhatsapp="alert('clicked whatsapp')"
        onClickTwitter="alert('clicked twitter')"
        onClickLink="alert('clicked link')"
        url="https://kaskus.co.id"
        direction="bottom"
        type="outline"
        color="blue"
      >
      </kaskus-sharer>
    </div>
    <div class="mr-4">
      <kaskus-sharer 
        onClickFacebook="alert('clicked facebook')"
        onClickMessenger="alert('clicked messenger')"
        onClickWhatsapp="alert('clicked whatsapp')"
        onClickTwitter="alert('clicked twitter')"
        onClickLink="alert('clicked link')"
        direction="bottom"
        type="outline"
        color="grey"
      >
      </kaskus-sharer>
    </div>
  </div>
  <div class="flex justify-evenly my-4">
    <div class="mr-4">
      <kaskus-sharer 
        onClickFacebook="alert('clicked facebook')"
        onClickMessenger="alert('clicked messenger')"
        onClickWhatsapp="alert('clicked whatsapp')"
        onClickTwitter="alert('clicked twitter')"
        onClickLink="alert('clicked link')"
        direction="top"
        type="regular"
        size="small"
      >
      </kaskus-sharer>
    </div>
    <div class="mr-4">
      <kaskus-sharer 
        onClickFacebook="alert('clicked facebook')"
        onClickMessenger="alert('clicked messenger')"
        onClickWhatsapp="alert('clicked whatsapp')"
        onClickTwitter="alert('clicked twitter')"
        onClickLink="alert('clicked link')"
        direction="top"
        type="regular"
        size="small"
        color="blue"
      >
      </kaskus-sharer>
    </div>
  </div>
  <div class="flex justify-evenly my-4">
    <div class="mr-4">
      <kaskus-sharer 
        onClickFacebook="alert('clicked facebook')"
        onClickMessenger="alert('clicked messenger')"
        onClickWhatsapp="alert('clicked whatsapp')"
        onClickTwitter="alert('clicked twitter')"
        onClickLink="alert('clicked link')"
        direction="right"
        type="solid"
        color="blue"
        size="large"
      >
      </kaskus-sharer>
    </div>
    <div class="mr-4">
      <kaskus-sharer 
        onClickFacebook="alert('clicked facebook')"
        onClickMessenger="alert('clicked messenger')"
        onClickWhatsapp="alert('clicked whatsapp')"
        onClickTwitter="alert('clicked twitter')"
        onClickLink="alert('clicked link')"
        direction="right"
        type="solid"
        size="large"
      >
      </kaskus-sharer>
    </div>
  </div>
`;

export default code;