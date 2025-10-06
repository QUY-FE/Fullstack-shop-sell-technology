'use client'
import { useState } from "react";
import LogInURL from '#/assets/images/log_in_page_img.jpg';
import Image from "next/image";
import Link from "next/link";

import { TiDelete } from "react-icons/ti";
import Button from "#/components/Button/Button";
export default function SignIn() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');


    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        console.log({email, password});
        setEmail('');
        setPassword('');
    }

    const handleDeleteInput = (field: string) => {
        if(field === 'email') setEmail('');
        if(field === 'password') setPassword('');
    }

    return(
        <section className="w-full h-screen flex">
            <div className="w-full lg:w-6/12  ">
                <form method="POST" className="w-full h-full pt-[100px] px-[10px] md:px-[16px] lg:pl-[130px]" onSubmit={(e) => handleOnSubmit(e)}>
                    <h1 className="text-3xl font-semibold  mb-4">Đăng nhập tài khoản</h1>
                    <p className="text-lg mb-4 text-black/70">Nhập Thông tin vào các cột</p>
                    <div className="relative">
                        <input 
                            value={email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                            name="email"
                            type="email" 
                            placeholder="Nhập Email" 
                            className="ct_input_sign_and_log-in-page"
                        />
                        {
                            email && (
                                <span onClick={() => handleDeleteInput('email')} className=" absolute top-[13px] right-0">
                                    <TiDelete size={24}/>
                                </span>
                            )
                        }
                        <span className="block w-full h-[25px] text-red-500 font-semibold my-2"></span>
                    </div>
                    <div className="relative ">
                        <input 
                            value={password}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                            name="password"
                            type="password" 
                            placeholder="Nhập mật khẩu" 
                            className="ct_input_sign_and_log-in-page"
                        />
                        {
                            password && (
                                <span onClick={() => handleDeleteInput('password')} className=" absolute top-[13px] right-0">
                                    <TiDelete size={24}/>
                                </span>
                            )
                        }
                        <span className="block w-full h-[25px] text-red-500 font-semibold my-2"></span>
                    </div>
                    <p className="font-sm py-2 text-[#e34646]  underline">
                        <Link href='/'>
                            Quên mật khẩu ?
                        </Link>
                    </p>
                    <div className="w-full  flex items-center justify-between">
                        <Button primary text="Đăng nhập" w='48%' h={55} />
                        <Button text='Sign in with Google' w='48%' h={55} />

                    </div>
                    <p className="w-full h-[30px] mt-10 text-center text-black/80">
                        Bạn chưa có tài khoản? 
                           <span className="ml-3 pb-0.5 font-semibold  border-b-2 border-[#b3b3b3] "><Link  href='/register'>Tạo tài khoản</Link></span>
                    </p>
                </form>
            </div>
            <div className="hidden lg:block w-6/12">
                <Image src={LogInURL}  alt="Ảnh Đăng nhập" />
            </div>
        </section>
    );
}