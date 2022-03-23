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
  <div className="flex w-full items-center">
    <div className="mr-4">
      <kaskus-icon size="large" variant="bookmark" type="solid"></kaskus-icon>
    </div>
    <div className="mr-4">
      <kaskus-icon size="large" variant="star" color="blue" type="solid"></kaskus-icon>
    </div>
    <div className="mr-4">
      <kaskus-icon size="small" variant="campfire" color="blue" type="outline"></kaskus-icon>
    </div>
    <div className="mr-4">
      <kaskus-icon size="small" variant="campfire" color="blue" type="solid"></kaskus-icon>
    </div>
    <div className="mr-4">
      <kaskus-icon size="medium" variant="fan"></kaskus-icon>
    </div>
    <div className="mr-4">
      <kaskus-icon variant="car" color="blue"></kaskus-icon>
    </div>
  </div>
`;

export default code;