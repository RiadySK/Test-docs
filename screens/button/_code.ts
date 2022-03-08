const code = `
  <div className="grid grid-cols-2 gap-4 bg-slate-100 p-8 w-full">
    <div className="w-full">
      <kaskus-button
        data-id="riady"
        data-ga="riyeayady"
        text="Primary"
        onclick="alert('I love kaskus')"
      ></kaskus-button>
    </div>
    <div className="w-full">
      <kaskus-button
        variant="secondary"
        text="Secondary"
      ></kaskus-button>
    </div>
    <div className="w-full">
      <kaskus-button
        variant="alternate"
        text="Alternate"
      ></kaskus-button>
    </div>
  </div>
`;

export default code;