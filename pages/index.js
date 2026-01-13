export default function Home() {
  if (typeof window !== "undefined") {
    // Human কে সরাসরি Blogger বা Telegram URL-এ পাঠানো
    window.location.href = "https://screeninsiderhub.blogspot.com";
  }
  return null;
}
