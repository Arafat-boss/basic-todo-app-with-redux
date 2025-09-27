import { AddUserModal } from "@/components/layout/User/AddUserModal";
import UserCard from "@/components/layout/User/UserCard";
import { useAppSelector, useAppDispatch } from "@/redux/hook";
import { selectUsers } from "@/features/counter/userSlice"; // user slice থেকে selector

export default function UsersPage() {
  // Redux state access
  const users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();

  return (
    <div>
      {/* Header + Add User button */}
      <div className="flex justify-end items-center gap-5 mb-5">
        <h1 className="mr-auto text-2xl font-semibold">Users</h1>
        <AddUserModal />
      </div>

      {/* Users Grid */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
