"use client";

import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../components/FirebaseAuthProvider";
import ProtectedRoute from "../components/ProtectedRoute";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/config";

export default function ProfilePage() {
  const { user } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
 
  const [success, setSuccess] = useState("");

  // Load existing data
  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setPhoto(user.photoURL || "");
    }
  }, [user]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setSuccess("");

    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });

      setSuccess("Profile updated successfully!");
    } catch (err) {
      console.error(err);
      setSuccess("Failed to update profile.");
    }
  };

  return (
    <ProtectedRoute>
      <div className="max-w-xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-center">Your Profile</h1>
        <p className="text-center text-gray-600 mt-2">
          Update your personal information
        </p>

        {/* Success Message */}
        {success && (
          <p className="text-center text-green-600 mt-4">{success}</p>
        )}

        <form onSubmit={handleUpdate} className="mt-10 space-y-6">

          {/* Profile Image Preview */}
          <div className="flex items-center justify-center">
            <img
              src={photo || "/default-avatar.png"}
              className="w-28 h-28 rounded-full border object-cover"
            />
          </div>

          {/* Full Name */}
          <div>
            <label className="font-semibold">Full Name</label>
            <input
              type="text"
              className="w-full mt-2 p-3 border rounded-lg"
              placeholder="Enter full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="font-semibold">Photo URL</label>
            <input
              type="text"
              className="w-full mt-2 p-3 border rounded-lg"
              placeholder="https://example.com/photo.jpg"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            />
          </div>

        

         
          {/* Save Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
          >
            Save Changes
          </button>
        </form>
      </div>
    </ProtectedRoute>
  );
}
