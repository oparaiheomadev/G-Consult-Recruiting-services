const SITE_URL = 'https://www.gconsultservices.com.ng';

export default function Seo({ title, description, path = '' }) {
  const url = `${SITE_URL}${path}`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
    </>
  );
}
