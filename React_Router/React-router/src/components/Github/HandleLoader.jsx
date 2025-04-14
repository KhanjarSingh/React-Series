export default async function HandleLoader() {
    const response = await fetch(`https://api.github.com/users/KhanjarSingh`);
    return response.json();

  }
  