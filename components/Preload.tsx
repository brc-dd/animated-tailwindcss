const Preload: React.FC<{ font: string }> = ({ font }) => (
  <link
    as="font"
    crossOrigin="anonymous"
    href={`${process.env.BASE_PATH!}/_next/static/media/${font}.woff2`}
    rel="preload"
    type="font/woff2"
  />
);

export default Preload;
