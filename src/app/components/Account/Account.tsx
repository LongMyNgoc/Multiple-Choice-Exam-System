"use client";
import { useEffect, useState } from "react";
import { getAllUsers } from "@/app/utils/firestore/getAllUsers";
import { editUserRoleByEmail } from "@/app/utils/firestore/editUserRoleByEmail";
import { toast } from "react-toastify";

const roleOptions = ["all", "user", "admin"];

const Account = () => {
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
        setFilteredUsers(users); // Hiển thị đầy đủ ban đầu
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    let filtered = users;

    // Lọc theo email
    if (searchEmail.trim() !== "") {
      filtered = filtered.filter((user) =>
        user.email.toLowerCase().includes(searchEmail.toLowerCase())
      );
    }

    // Lọc theo role
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
      setUsers(updatedUsers); // cập nhật nguồn gốc
    } else {
      toast.error(error || "Không thể cập nhật role.");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Danh sách tài khoản</h2>

      <div className="row mb-3">
        <div className="col-md-6">
          <input
            type="text"
            placeholder="Tìm theo email..."
            className="form-control"
            value={searchEmail}
            onChange={(e) => setSearchEmail(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-select"
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
          >
            {roleOptions.map((role) => (
              <option key={role} value={role}>
                {role === "all" ? "Tất cả" : role}
              </option>
            ))}
          </select>
        </div>
      </div>

      {loading ? (
        <p>Đang tải dữ liệu...</p>
      ) : filteredUsers.length === 0 ? (
        <p>Không tìm thấy người dùng phù hợp.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-success">
              <tr>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.email}>
                  <td>{user.email || "N/A"}</td>
                  <td>
                    <select
                      value={user.role || "user"}
                      onChange={(e) => handleRoleChange(user.email, e.target.value)}
                      className="form-select"
                    >
                      {roleOptions
                        .filter((r) => r !== "all")
                        .map((role) => (
                          <option key={role} value={role}>
                            {role}
                          </option>
                        ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Account;
