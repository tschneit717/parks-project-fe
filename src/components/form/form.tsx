export const RegistrationForm = () => {
  return (
    <form id="form">
      <label for="username">Username: </label>
      <br />
      <input type="text" name="username" value="Username" />
      <br />
      <label for="password">Password:</label>
      <br />
      <input type="password" name="password" />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};
