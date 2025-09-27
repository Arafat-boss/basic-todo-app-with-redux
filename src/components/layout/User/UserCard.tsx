import { Trash2 } from "lucide-react";
import { Button } from "../../ui/button";
import { Checkbox } from "../../ui/checkbox";
import { useDispatch } from "react-redux";
// import { deleteUser, toggleUserActive } from "@/features/counter/userSlice"; // user slice

interface IUser {
  id: string;
  name: string;
  isActive?: boolean; // checkbox এর জন্য optional
}

interface IProps {
  user: IUser;
}

export default function UserCard({ user }: IProps) {
  const dispatch = useDispatch();

  return (
    <div className="border px-5 py-3 rounded-md mt-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <h1>{user.name}</h1>
          <p className="text-gray-400 text-sm">ID: {user.id}</p>
        </div>
        <div className="flex gap-3 items-center">
          <Button 
            // onClick={() => dispatch(deleteUser(user.id))} 
            variant="link" 
            className="p-0 text-red-500"
          >
            <Trash2 size={16} />
          </Button>
          <Checkbox 
            checked={user.isActive} 
            // onClick={() => dispatch(toggleUserActive(user.id))} 
          />
        </div>
      </div>
    </div>
  );
}
