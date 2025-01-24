export default async function allBlogs() {
    const result = await fetch(
        "https://jsonplaceholder.typicode.com/posts/");
  
    if (!result.ok) {
        throw new Error("There was an error fetching posts");
    }
  
    return result.json();
  }