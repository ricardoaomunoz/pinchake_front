const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'
const TOKEN_KEY = 'pinchake_token'

export const authStore = {
  getToken() {
    return localStorage.getItem(TOKEN_KEY)
  },
  setToken(token) {
    localStorage.setItem(TOKEN_KEY, token)
  },
  clearToken() {
    localStorage.removeItem(TOKEN_KEY)
  },
}

async function request(path, options = {}) {
  const headers = {
    'Content-Type': 'application/json',
    ...(options.headers || {}),
  }

  const token = authStore.getToken()
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers,
  })

  const payload = await response.json().catch(() => ({}))
  if (!response.ok) {
    const message = payload.error || 'Request failed'
    throw new Error(message)
  }

  return payload
}

export const api = {
  login: (email, password) =>
    request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),
  getTours: (lang) => request(`/tours${lang ? `?lang=${lang}` : ''}`),
  createTour: (data) =>
    request('/tours', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  updateTour: (id, data) =>
    request(`/tours/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    }),
  deleteTour: (id) =>
    request(`/tours/${id}`, {
      method: 'DELETE',
    }),
  getReviews: () => request('/reviews/admin'),
  updateReview: (id, data) =>
    request(`/reviews/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    }),
  deleteReview: (id) =>
    request(`/reviews/${id}`, {
      method: 'DELETE',
    }),
  getSubscribers: () => request('/subscribers'),
  getUsers: () => request('/users'),
}
