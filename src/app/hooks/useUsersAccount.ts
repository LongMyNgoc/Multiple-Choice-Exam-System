// hooks/useUsers.ts
import { useEffect, useState } from "react";
import { getAllUsers } from "@/app/utils/firestore/getAllUsers";
import { editUserRoleByEmail } from "@/app/utils/firestore/editUserRoleByEmail";
import { toast } from "react-toastify";

export const roleOptions = ["all", "user", "admin"];

export const useUsersAccount = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<any[]>([]);
  const [searchEmail, setSearchEmail] = useState("");
  const [filterRole, setFilterRole] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const { users, error } = await getAllUsers();
      if (!error) {
        setUsers(users);
        setFilteredUsers(users);
      }
      setLoading(false);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    let filtered = users;
    if (searchEmail.trim() !== "") {
      filtered = filtered.filter((user) =>
        user.email.toLowerCase().includes(searchEmail.toLowerCase())
      );
    }
    if (filterRole !== "all") {
      filtered = filtered.filter((user) => user.role === filterRole);
    }
    setFilteredUsers(filtered);
  }, [searchEmail, filterRole, users]);

  const handleRoleChange = async (email: string, newRole: string) => {
    const { success, error } = await editUserRoleByEmail(email, newRole);
    if (success) {
      const updatedUsers = users.map((user) =>
        user.email === email ? { ...user, role: newRole } : user
      );
      setUsers(updatedUsers);
    } else {
      toast.error(error || "Không thể cập nhật role.");
    }
  };

  return {
    users: filteredUsers,
    loading,
    searchEmail,
    filterRole,
    setSearchEmail,
    setFilterRole,
    handleRoleChange,
  };
};
