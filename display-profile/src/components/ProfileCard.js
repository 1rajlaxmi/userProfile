import React from 'react';

const ProfileCard = ({ user }) => {
    return (
        <div className="bg-gradient-to-r from-violet-200 to-pink-200 flex justify-center items-center h-screen">
            <div className="w-1/2 shadow-2xl rounded-2xl p-10 border-b-6 bg-yellow-50">
                <div className='border-2 border-black p-5'>
                    <div className='flex justify-around gap-11'>
                        {/* Display user image */}
                        <div className="relative p-2 md:w-2/5 shrink-0 overflow-hidden">
                            <img
                                src={user.picture.large}
                                alt={`${user.name.first} ${user.name.last}`}
                                className="h-full w-full rounded-md md:rounded-lg object-cover border-2 border-black"
                            />
                        </div>
                        <div className='flex gap-3 flex-col mt-8'>
                            {/* Display user first name and last name */}
                            <h3 className="font-extrabold text-xl ">
                                {user.name.first} {user.name.last}
                            </h3>
                            {/* Display user gender */}
                            <p className="font-extrabold text-xl">Gender: {user.gender}</p>
                            {/* Display user phone number */}
                            <p className="font-extrabold text-xl">Phone: {user.phone}</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
