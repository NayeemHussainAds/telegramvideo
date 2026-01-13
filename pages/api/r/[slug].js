export default function handler(req, res) {
  const slug = req.query.slug || ""; // Safety
  const label = slug.split("-")[0]; // tiger-ABC123 → "tiger"

  // Human redirect map
  const redirectMap = {
    tiger: "https://t.me/yourchannel/123",
    marry: "https://screeninsiderhub.blogspot.com/2025/..."
  };

  // যদি match না করে default redirect
  const redirectURL = redirectMap[label] || "https://screeninsiderhub.blogspot.com";

  res.writeHead(302, { Location: redirectURL });
  res.end();
}
