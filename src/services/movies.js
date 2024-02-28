import api, { endPoints } from ".";

export async function getMovies() {
  const { get } = await api
  return get(endPoints.get)
}

export async function createMovie(data) {
  const { post } = await api
  return post(endPoints.post, data)
}

export async function updateMovie(data) {
  const { put } = await api
  return put(endPoints.put, data)
}

export async function deleteMovie(id) {
  const { delete: del } = await api
  return del(endPoints.delete(id))
}