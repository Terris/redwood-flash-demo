// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={HomePage} name="home" />
      <Route path="/usersw" page={UserswPage} name="usersw" />
      <Route path="/users/new" page={NewUserPage} name="newUser" />
      <Route path="/users/{id:Int}/edit" page={EditUserPage} name="editUser" />
      <Route path="/users/{id:Int}" page={UserPage} name="user" />
      <Route path="/users" page={UsersPage} name="users" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
