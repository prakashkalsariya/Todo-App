import { User } from "lucide-react";
import { AuthHelpers } from "../utils/auth.helpers";

const Profile = ({ isOpen }: { isOpen: boolean }) => {
  let profileData: {
    email: string;
    name: string;
    profile_image: string;
  } = AuthHelpers?.profileData();

  return (
    <div className="border-b p-4">
      <div className="flex items-center gap-3">
        <div className="flex  min-h-12 min-w-12 items-center justify-center rounded-full bg-slate-200 overflow-hidden">
          {profileData?.profile_image ? (
            <img
              src={`http://localhost:4800/images/${profileData?.profile_image}`}
              alt=""
              className="h-12 w-12 object-cover"
            />
          ) : (
            <User className="text-slate-700" size={22} />
          )}
        </div>

        {isOpen && (
          <div className="overflow-hidden">
            <h3 className="font-semibold text-slate-800 text-nowrap">
              {profileData?.name}
            </h3>
            <p className="text-[12px] text-slate-500 text-nowrap overflow_title">
              {profileData?.email}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
