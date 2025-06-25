# 🏡 HouseHive

**HouseHive** is a full-stack Pinterest-style web application tailored for home and interior design inspiration. Users can upload, browse, and organize images related to rooms, decor styles, and layouts — creating a visual board of their dream home. 

This project is built using the **MERN stack** (MongoDB, Express.js, React, and Node.js).

I built HouseHive to get hands-on experience with:
- **TanStack Query (React Query)** for data fetching and caching
- **Zustand** for managing global state Management
- Using `useQuery` and `useMutation` hooks
- Implementing **infinite scrolling** to load content as you scroll
- Integrating **ImageKit** to handle image uploads and real-time optimization


## Features

- User Authentication (JWT + Cookies)
- Create, view, and edit design "pins"
- Upload and preview images (JPG, PNG, MP4)
- Tag pins and add links with respect to Room, Kitchen, Office Room, Backyard Etc.
- Save pins to design boards
- Follow/unfollow other users
- Organized feed by user or board
- Responsive and clean UI


## API Endpoints 

## 📡 API Endpoints

### Authentication

| Method | Endpoint                 | Description                                      | Auth Required |
|--------|--------------------------|--------------------------------------------------|---------------|
| POST   | `/users/auth/register`   | Register a new user                              | ❌            |
| POST   | `/users/auth/login`      | Login a user and receive JWT cookie              | ❌            |
| POST   | `/users/auth/logout`     | Logout and clear the token cookie                | ✅            |

---

### Users

| Method | Endpoint                    | Description                                                 | Auth Required |
|--------|-----------------------------|-------------------------------------------------------------|---------------|
| GET    | `/users/:username`          | Get user details, followers count, following count, follow status | ❌        |
| POST   | `/users/follow/:username`   | Toggle follow/unfollow a user by username                   | ✅            |

---

### Comments

| Method | Endpoint                  | Description                                     | Auth Required |
|--------|---------------------------|-------------------------------------------------|---------------|
| GET    | `/comments/:postId`       | Fetch all comments for a post by ID            | ❌            |
| POST   | `/comments`               | Add a new comment to a post                     | ✅            |

---

### Pins

| Method | Endpoint                  | Description                                     | Auth Required |
|--------|---------------------------|-------------------------------------------------|---------------|
| GET    | `/pins/:id`               | Get a pin by ID                                 | ❌            |
| GET    | `/pins/user/:userId`      | Get all pins created by a specific user         | ❌            |
| POST   | `/pins`                   | Create a new pin                                | ✅            |
| DELETE | `/pins/:id`               | Delete a pin                                    | ✅            |

---

### Boards

| Method | Endpoint                     | Description                                | Auth Required |
|--------|------------------------------|--------------------------------------------|---------------|
| GET    | `/boards/user/:userId`       | Get all boards of a specific user          | ❌            |
| POST   | `/boards`                    | Create a new board                         | ✅            |
| POST   | `/boards/:boardId/save/:pinId` | Save a pin to a board                    | ✅            |

---

### 🖼️ Uploads (ImageKit)

| Method | Endpoint              | Description                   | Auth Required |
|--------|-----------------------|-------------------------------|---------------|
| POST   | `/uploads`            | Get ImageKit auth parameters  | ✅            |

---

Let me know if you want to include environment variable setup or folder structure too!
