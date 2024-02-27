export const LoadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts')
    const imagesResponse = fetch('https://jsonplaceholder.typicode.com/photos')

    const [posts, images] = await Promise.all([postsResponse, imagesResponse])
    const postsJson = await posts.json()
    const imagesJson = await images.json()

    const postsAndImages = postsJson.map((post, index) => {
      return { ...post, cover: imagesJson[index].url}
    })

    return postsAndImages
}