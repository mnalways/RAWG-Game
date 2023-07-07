import image from "../assets/logo.jpeg";

export const getImageUrl = (url: string) => {
  if (!url) return image;
  const target = "media/";
  const index = url?.indexOf(target) + target.length;
  const modifiedUrl = url.slice(0, index) + "crop/600/400/" + url.slice(index);
  return modifiedUrl;
};
