import React from 'react';
import { User, Mail, Phone, MapPin, Edit2 } from 'lucide-react';

const Profile = () => {
   const name= localStorage.getItem('username');
  // Placeholder user data, replace with real data as needed
  const user = {
    name: name,
    email: 'john.doe@example.com',
    phone: '+95 9 123 456 789',
    address: '123, Insein Road, Yangon, Myanmar',
  };

  return (
    <div className="min-h-screen bg-green-50 flex justify-center items-start py-16 px-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-10">
        {/* Header */}
        <div className="flex items-center space-x-6 mb-10">
          <div className="w-24 h-24 rounded-full bg-green-700 flex items-center justify-center text-white text-5xl font-bold">
            {user.name.charAt(0)}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-green-700">{user.name}</h1>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>

        {/* User Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Email */}
          <div className="flex items-center bg-green-100 p-5 rounded-xl shadow-sm">
            <Mail className="w-6 h-6 text-green-700 mr-4" />
            <div>
              <p className="text-green-700 font-semibold">Email</p>
              <p className="text-gray-700">{user.email}</p>
            </div>
            <Edit2 className="ml-auto w-5 h-5 text-green-700 cursor-pointer hover:text-green-900" />
          </div>

          {/* Phone */}
          <div className="flex items-center bg-green-100 p-5 rounded-xl shadow-sm">
            <Phone className="w-6 h-6 text-green-700 mr-4" />
            <div>
              <p className="text-green-700 font-semibold">Phone</p>
              <p className="text-gray-700">{user.phone}</p>
            </div>
            <Edit2 className="ml-auto w-5 h-5 text-green-700 cursor-pointer hover:text-green-900" />
          </div>

          {/* Address */}
          <div className="flex items-center bg-green-100 p-5 rounded-xl shadow-sm md:col-span-2">
            <MapPin className="w-6 h-6 text-green-700 mr-4" />
            <div>
              <p className="text-green-700 font-semibold">Address</p>
              <p className="text-gray-700">{user.address}</p>
            </div>
            <Edit2 className="ml-auto w-5 h-5 text-green-700 cursor-pointer hover:text-green-900" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;