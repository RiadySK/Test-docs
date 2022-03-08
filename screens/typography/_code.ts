const HeadingCode = `
  <div className="grid grid-cols-2 gap-4 bg-slate-100 p-8 w-full">
    <kaskus-header text="h1. Heading"></kaskus-header>
    <kaskus-header variant="h2" color="secondary" text="h2. Heading Secondary"></kaskus-header>
    <kaskus-header variant="h3" font="vag" text="h3. VAGRounded"></kaskus-header>
    <kaskus-header variant="h4" color="tertiary" text="h4. Heading Tertiary"></kaskus-header>
  </div>
`;

const TextCode = `
  <div className="grid gap-4 bg-slate-100 p-8 w-full">
    <kaskus-text size="large" text="Body variant, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."></kaskus-text>
    <kaskus-text variant="caption" color="secondary" text="Caption variant, Lorem ipsum dolor sit amet"></kaskus-text>
    <kaskus-text size="small" color="tertiary" text="Laborum fugiat deleniti? Eum quasi quidem quibusdam"></kaskus-text>
  </div>
`;

export {
  HeadingCode,
  TextCode,
}