import { useDispatch, useSelector} from "react-redux"
import { fetchUsers } from "./usersSlice"

const UsersList = () => {
  // @ts-ignore
  const allUsers = useSelector(state => state.users.entities)
  const dispatch = useDispatch()

  const doFetchUsers = () => {
    // @ts-ignore
    dispatch(fetchUsers())
  }

  return (
    <>
      <h3>Users List</h3>

      <button onClick={doFetchUsers}>Get users</button>

      <ol>
      {allUsers.map(user => (
        <li>{user.name} {user.username} {user.email}</li>
      ))}
      </ol>
    </>
  )
}

export default UsersList
