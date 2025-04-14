export default async function HandleLoader() {
    const response = await fetch(`https://api.github.com/users/KhanjarSingh`);
    const data = await response.json();
    console.log(data);
    return data;
  }
  