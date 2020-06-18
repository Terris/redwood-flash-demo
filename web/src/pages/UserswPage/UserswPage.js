import { navigate, routes } from '@redwoodjs/router'

const UserswPage = () => {
  React.useEffect(() => navigate(routes.users()))
  return <div></div>
}

export default UserswPage
