export const register = async (body: any) => {
  await fetch("http://localhost:8080/user/register", {
    method: "POST",
    body,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
