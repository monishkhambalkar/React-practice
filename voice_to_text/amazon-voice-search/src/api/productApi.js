// src/api/productApi.js
export const searchProducts = async (query) => {
  try {
    // console.log("Searching for products:", query);
    // const res = await fetch(`https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`);
    // return await res.json();

    const words = query.trim().split(" ");

    let allResults = [];
    for (const w of words) {
        const res = await fetch(`https://dummyjson.com/products/search?q=${encodeURIComponent(w)}`);
        const data = await res.json();
        allResults = [...allResults, ...data.products];
    }

    // remove duplicates based on id
    const unique = Array.from(new Map(allResults.map(p => [p.id, p])).values());

    return unique;


  } catch (err) {
    console.error("API Error:", err);
    return [];
  }
};
