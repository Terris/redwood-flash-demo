import { navigate, routes } from '@redwoodjs/router'
const HomePage = () => {
  React.useEffect(() => navigate(routes.users()))
  return <div></div>
}

export default HomePage
