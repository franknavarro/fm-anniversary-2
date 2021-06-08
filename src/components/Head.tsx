import { FC } from 'react';
import { Helmet } from 'react-helmet';

interface FaviconProps {
  description: string;
  iconPrefix: string;
  title: string;
}

const Head: FC<FaviconProps> = ({ description, iconPrefix, title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* generics */}
      <link
        rel="icon"
        href={`${process.env.PUBLIC_URL}/icons/favicon-${iconPrefix}-32.png`}
        sizes="32x32"
        type="image/png"
      />
      <link
        id="favicon"
        rel="icon"
        href={`${process.env.PUBLIC_URL}/icons/favicon-${iconPrefix}-128.png`}
        sizes="128x128"
        type="image/png"
      />
      <link
        rel="icon"
        href={`${process.env.PUBLIC_URL}/icons/favicon-${iconPrefix}-192.png`}
        sizes="192x192"
      />

      {/* Android */}
      <link
        rel="shortcut icon"
        sizes="196x196"
        href={`${process.env.PUBLIC_URL}/icons/favicon-${iconPrefix}-196.png`}
      />

      {/* iOS */}
      <link
        rel="apple-touch-icon"
        href={`${process.env.PUBLIC_URL}/icons/favicon-${iconPrefix}-152.png`}
        sizes="152x152"
      />
      <link
        rel="apple-touch-icon"
        href={`${process.env.PUBLIC_URL}/icons/favicon-${iconPrefix}-180.png`}
        sizes="180x180"
      />

      {/* Window 8 IE 10 */}
      <meta
        name="msapplication-TileImage"
        content={`${process.env.PUBLIC_URL}/icons/favicon-${iconPrefix}-144.png`}
      />

      <link
        rel="manifest"
        href={`${process.env.PUBLIC_URL}/${iconPrefix}-manifest.json`}
      />
    </Helmet>
  );
};

export default Head;
