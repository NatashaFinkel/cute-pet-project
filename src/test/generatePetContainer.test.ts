import { generatePetContainer } from '../generatePetContainer';
import { Pet } from '../pet';

describe('generatePetContainer', () => {
  const pet: Pet = {
    imgSrc: '/assets/chat.jpg',
    imgAlt: "Image d\'un chat",
    name: 'Titi',
    breed: 'chat',
    description: 'Tellement mignon !',
  };
  const result = generatePetContainer(pet);

  it('must have a img src, and it must not be an empty string', () => {
    const imgSrcMatch = result.match(
      /<img src="([^"]+)" alt="Image d\'un chat" class="pet-img" \/>/,
    );
    expect(imgSrcMatch).not.toBeNull();
    if (imgSrcMatch) {
      expect(imgSrcMatch[1]).not.toBe('');
    }
  });

  it('must have a img alt, and it must not be an empty string', () => {
    const imgAltMatch = result.match(
      /<img src="\/assets\/chat.jpg" alt="([^"]+)" class="pet-img" \/>/,
    );
    expect(imgAltMatch).not.toBeNull();
    if (imgAltMatch) {
      expect(imgAltMatch[1]).not.toBe('');
    }
  });

  it('must have a name, and it must not be an empty string', () => {
    const nameMatch = result.match(/<h2>([^<]+)<\/h2>/);
    expect(nameMatch).not.toBeNull();
    if (nameMatch) {
      expect(nameMatch[1]).not.toBe('');
    }
  });

  it('must have a breed, and it must not be an empty string', () => {
    const breedMatch = result.match(/<p class="breed">([^<]+)<\/p>/);
    expect(breedMatch).not.toBeNull();
    if (breedMatch) {
      expect(breedMatch[1]).not.toBe('');
    }
  });

  it('must have a description, and it must not be an empty string', () => {
    const descriptionMatch = result.match(/<p>([^<]+)<\/p>/);
    expect(descriptionMatch).not.toBeNull();
    if (descriptionMatch) {
      expect(descriptionMatch[1]).not.toBe('');
    }
  });

  it('must generate the correct data for a given pet', () => {
    expect(result).toContain(
      '<img src="/assets/chat.jpg" alt="Image d\'un chat" class="pet-img" />',
    );
    expect(result).toContain('<h2>Titi</h2>');
    expect(result).toContain('<p class="breed">chat</p>');
    expect(result).toContain('<p>Tellement mignon !</p>');
  });
});
