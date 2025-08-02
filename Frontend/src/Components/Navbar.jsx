import { useAuthStore } from "../Store/useAuthStore.js";

const Navbar = () => {
  const { authUser } = useAuthStore();
  return (
    <>
      <div className="flex items-center justify-between m-3">
        <div>
            {/* logo */}
            <h1>ConnectMe</h1>
        </div>
        <div>
            <h1>Settings</h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
