import React from 'react'

const Profile = () => {
  return (
    <div className="flex flex-col items-center h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-500 mb-8">Abhi@2003</h1>
      <div className="flex items-center justify-center bg-white rounded-lg shadow-lg p-8">
        <div className="mr-4">
          <img
            className="w-32 h-32 bg-black rounded-full"
            src="" // Replace with the actual image source
            alt="User Profile"
          />
        </div>
        <div>
          <h2 className="text-lg font-bold text-blue-500">Abhiram Krishna S</h2>
          <p className="text-sm font text-gray-600">Online</p>
        </div>
      </div>
    </div>
  )
}

export default Profile