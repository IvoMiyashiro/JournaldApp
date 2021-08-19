export const regEx = {
    name: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
    password: /^.{4,12}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    contact: /^\d{7,14}$/,
}