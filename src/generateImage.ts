export default function generateImage(
  imageSrc: string,
  alt: string,
  className: string,
) {
  let baseUrl =
    typeof window !== 'undefined'
      ? window.location.origin
      : 'http://localhost:5173';
  let imageUrl;

  //  Pour la version déployée.
  if (baseUrl === 'https://natashafinkel.github.io') {
    imageUrl = `${baseUrl}/cute-pet-project/assets${imageSrc}`;
  } else {
    //  Pour la version locale.
    imageUrl = `${baseUrl}/cute-pet-project${imageSrc}`;
  }

  return `
 <img src="${imageUrl}" alt="${alt}" class="${className}">
  `;
}
