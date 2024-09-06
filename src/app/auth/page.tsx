'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';  // Next.js router
import { useDispatch } from 'react-redux'; // Redux kullanımı
import supabase from '../../supabase/info';
import { login } from '../../redux/userSession/userSession'; // Redux action
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Page = () => {

    const Router = useRouter();
    const Dispatch = useDispatch();

    useEffect(() => {

        const completeAuthProcess = async () => {
            try {
                // Supabase auth işlemi sonrasındaki kullanıcı verisini al
                const { data: userData, error: userError } = await supabase.auth.getUser();

                if (userError) throw userError;

                if (userData && userData.user) {
                // Redux store'u güncelle
                const userDataForReduxStore = {
                    isUserHere: true,
                    userName: userData.user.id,
                };
                Dispatch(login(userDataForReduxStore));

                // Kullanıcıyı Supabase veritabanına kaydet
                const { error: insertError } = await supabase
                    .from('users')
                    .insert({
                    email: userData.user.email,
                        full_name: userData.user.user_metadata.full_name,
                        profile_image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                        provider: 'google',
                    });

                if (insertError) {
                    console.error('User could not be inserted:', insertError.message);
                } else {
                    console.log('User inserted successfully');
                }

                // Tüm işlemler tamamlandığında, kullanıcıyı homepage'e yönlendir
                Router.push('/homepage');
                } else {
                console.error('User data not available.');
                }
            } catch (err) {
                console.error('Error during authentication process:', err);
            }
        };

        completeAuthProcess(); // Auth işlemini tamamla

    }, [Dispatch, Router]); // Dispatch ve router bağımlılıklar olarak eklenir


    return(
        <div
        className="pb-10"
        >
            <div className=" w-full flex items-center flex-col relative bottom-5" >
                <DotLottieReact autoplay loop src="https://lottie.host/9aa3c28e-586e-4733-8fd5-80e15d957297/NXIT13Uykm.json" />
                <h3 className='text-lg font-semibold relative bottom-10'>
                    PLEASE WAIT...
                </h3>
            </div> 
        </div>
    )
}

export default Page