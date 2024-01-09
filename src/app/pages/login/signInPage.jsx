'use client';
import { signIn } from 'next-auth/react';
import './loginPage.css';
import logo from '@/../public/Recurso1.png';
import Image from 'next/image';
import Link from 'next/link';

export default function SignInPage() {
  return (
    <div className="contact-section-wrapper">
      <div class="contact-section">
        <div class="contact-wrapper">
          <div class="box-contact">
            <div class="square"></div>
            <div class="square"></div>
            <div class="square"></div>
            <div class="square"></div>
            <div class="square"></div>
            <div class="box-wrapper">
              <div class="box-container">
                <div class="form">
                  <div class="form-group">
                    <div className="top-side flex justify-center">
                      <Image
                        className="seg-logo"
                        src={logo}
                        alt="seg-logo"
                        width={300}
                        height={300}
                        priority={true}
                      />
                    </div>
                    <h1 className="flex justify-center pb-3 font-semibold text-lg text-white">
                      Accede al Portal de la SEG
                    </h1>
                    <div className="google-btn">
                      <button
                        onClick={() => signIn('google')}
                        className="flex items-center gap-4 shadow-xl rounded-lg pl-3 bg-white"
                      >
                        <Image
                          src="/google-logo.png"
                          height={30}
                          width={30}
                          alt="google-logo"
                        />
                        <span className="bg-blue-500 text-white px-4 py-3">
                          Iniciar Sesión con Google
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bottom-side">
                  <h3>
                    ¿Necesitas ayuda?{' '}
                    <Link href={'./'} className="  text-yellow-200  ">
                      Contactanos
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
