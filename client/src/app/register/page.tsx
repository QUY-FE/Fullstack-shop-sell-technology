'use client'
import { useState } from "react";
import register from '#/assets/images/register_page.jpg';
import Image from "next/image";
import Link from "next/link";

import { TiDelete } from "react-icons/ti";
import Button from "#/components/Button/Button";
export default function SignIn() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordAgain, setPasswordAgain] = useState<string>('');


    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        console.log({email, password, passwordAgain});
        setEmail('');
        setPassword('');
        setPasswordAgain('');
    }

    const handleDeleteInput = (field: string) => {
        if(field === 'email') setEmail('');
        if(field === 'password') setPassword('');
        if(field === 'passwordAgain')setPasswordAgain('');
    }

    return(
        <section className="w-full h-screen flex">
            <div className="hidden  lg:block w-6/12">
                <Image src={register}  alt="Ảnh Đăng ký" />
            </div>
            <div className="w-full lg:w-6/12">
                <form method="POST" className="w-full h-full pt-[100px] px-[10px] md:px-[16px] lg:pl-[130px]" onSubmit={(e) => handleOnSubmit(e)}>
                    <h1 className="text-3xl font-semibold  mb-4">Tạo tài khoản</h1>
                    <p className="text-lg mb-4 text-black/70">Nhập thông tin vào các cột</p>
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
                    <div className="relative ">
                        <input 
                            value={passwordAgain}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPasswordAgain(e.target.value)}
                            name="passwordAgain"
                            type="password" 
                            placeholder="Nhập lại mật khẩu" 
                            className="ct_input_sign_and_log-in-page"
                        />
                        {
                            passwordAgain && (
                                <span onClick={() => handleDeleteInput('passwordAgain')} className=" absolute top-[13px] right-0">
                                    <TiDelete size={24}/>
                                </span>
                            )
                        }
                        <span className="block w-full h-[25px] text-red-500 font-semibold my-2"></span>
                    </div>
                    
                    <p className="text-sm text-center">Bằng việc đăng kí, bạn đã đồng ý với Shop chúng tôi về</p>
                    <p className="text-sm text-center"><span className="text-[#e34646]  underline"> Điều khoản dịch vụ</span>  và <span className="text-[#e34646]  underline"> Chính sách bảo mật</span></p>
                    <Button primary text="Tạo tài khoản" w='100%' h={55} />
                    <Button text='Sign up with Google' w='100%' h={55} />
                    <p className="w-full h-[30px] mt-10 text-center text-black/80">
                        Bạn đã có tài khoản? 
                           <span className="ml-3 pb-0.5 font-semibold  border-b-2 border-[#b3b3b3] "><Link  href='/sign-in'>Đăng nhập</Link></span>
                    </p>
                </form>
            </div>
        </section>
    );
}