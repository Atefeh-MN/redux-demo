import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchUsers } from "../redux/user/userActions";

const UsersContainer = () => {
    const usersData = useSelector((state) => state.user);
    const { users, loading, error } = usersData;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers());
    }, [])
    const renderUser = () => {
        if (loading) return <p>loading ....</p>
        if (!loading && error) return <p>{error}</p>
        if (usersData && users.length) {
            return (
                <div>
                    <h2>Users List</h2>
                    {users.map(user => <p key={user.id}>{user.name}</p>)}
            
            </div>
             ) }
    }
    return (<div>{renderUser()}</div> );
}
 
export default UsersContainer;