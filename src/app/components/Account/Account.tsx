"use client";
import { useUsersAccount, roleOptions } from "@/app/hooks/useUsersAccount";

const Account = () => {
  const {
    users,
    loading,
    searchEmail,
    filterRole,
    setSearchEmail,
    setFilterRole,
    handleRoleChange,
  } = useUsersAccount();

  return (
    <div>
      <h2 className="mt-4">Danh sách tài khoản</h2>

      <div className="d-flex flex-column flex-md-row align-items-md-center gap-3 mt-4 mb-4 justify-content-between">
  <div className="flex-grow-1">
    <input
      type="text"
      placeholder="🔍 Tìm theo email..."
      className="form-control"
      value={searchEmail}
      onChange={(e) => setSearchEmail(e.target.value)}
    />
  </div>

  <div style={{ minWidth: "180px" }}>
    <select
      className="form-select"
      value={filterRole}
      onChange={(e) => setFilterRole(e.target.value)}
    >
      {roleOptions.map((role) => (
        <option key={role} value={role}>
          {role === "all" ? "Tất cả vai trò" : role}
        </option>
      ))}
    </select>
  </div>
</div>


      {loading ? (
        <p>Đang tải dữ liệu...</p>
      ) : users.length === 0 ? (
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
              {users.map((user) => (
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
