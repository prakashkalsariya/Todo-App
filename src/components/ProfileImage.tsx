import { Camera, User } from "lucide-react";

const ProfileImage = ({
  profileImage,
  handleImageChange,
}: {
  profileImage: string;
  handleImageChange: any;
}) => {
  return (
    <div className="mb-8 flex justify-center">
      <div className="relative">
        <div className="h-28 w-28 overflow-hidden rounded-full border-4 border-gray-200 bg-gray-100">
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <User className="h-12 w-12 text-gray-400" />
            </div>
          )}
        </div>

        <label
          htmlFor="profileImage"
          className="absolute bottom-1 right-1 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-blue-600 text-white shadow-md transition hover:bg-blue-700"
        >
          <Camera size={18} />
        </label>

        <input
          id="profileImage"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default ProfileImage;
