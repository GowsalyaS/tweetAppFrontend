export default function authHeader() {
    const user = localStorage.getItem('user');
    if (user !==null) {
      return { Authorization: 'Bearer ' + user };
    } else {
      return {};
    }
  }
  