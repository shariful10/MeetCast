import React, { useContext } from 'react';
import Container from '../../Components/Shared/Container/Container';
import { AuthContext } from '../../Providers/AuthProvider';

const UserProfile = () => {
    const { user, logOut } = useContext(AuthContext);


    return (
        <Container>
            <div className='m-auto p-6'>
                <div className='bg-white p-6 w-3/6 m-auto'>
                    <div className='w-full bg-white flex md:flex-row p-6 border'>
                        <div className='p-6 md:w-1/2'>
                            <img src={user?.photoURL} className='w-full m-auto' alt="" />
                            <div className='p-6'>
                                <h3 className='font-bold'>About Me</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A dolores consectetur accusantium nisi. Dignissimos totam provident ad ut impedit non asperiores aliquam quo, consectetur alias fuga possimus perspiciatis facere atque.</p>
                            </div>
                        </div>
                        <div className='p-6 md:w-1/2'>
                            <div className='my-6'>
                                <h2 className='text-2xl font-bold'>{user.displayName}</h2>
                                <p className='my-3'>Web Developer</p>
                            </div>
                            <hr className='font-bold' />
                            <div className='my-6'>
                                <ul>
                                    <li className='my-4'><span className='font-bold w-5/6'>Age:</span> 26</li>
                                    <li className='my-4'><span className='font-bold'>Email:</span> {user.email}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <button className='btn btn-primary my-6'>Edit Details</button>
                </div>
            </div>
        </Container>
    );
};

export default UserProfile;