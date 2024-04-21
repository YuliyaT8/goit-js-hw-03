function slugify(title) {
  // Перетворити заголовок у нижній регістр
  const lowerCaseTitle = title.toLowerCase();

  // Видалити зайві пробіли
  const trimmedTitle = lowerCaseTitle.trim();

  // Замінити пробіли на тире
  const slug = trimmedTitle.replace(/\s+/g, '-');

  return slug;
}

// Тестування
console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"