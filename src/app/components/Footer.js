import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaAmazon, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiFlipkart } from "react-icons/si";

export default function Footer() {
    return (
        <footer className="bg-stone-900 text-stone-300">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Brand */}
                <div className="flex flex-col gap-4">
                    <Link href="/" aria-label="AMMU COSMETICS home" className="inline-flex items-center">
                        <Image src="/ammu-logo.webp" alt="AMMU COSMETICS" width={140} height={40} className="object-contain" />
                    </Link>
                    <p className="max-w-sm text-stone-400 text-sm">
                        Pure. Natural. You.

                    </p>

                    <div className="flex items-center gap-3 mt-2">
                        <p>
                            Shop on :
                        </p>
                        <a href="https://www.instagram.com/ammucosmeticss/" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-stone-800 hover:bg-stone-700 transition">
                            <FaInstagram className="w-5 h-5 text-stone-300" aria-hidden />
                            <span className="sr-only">Instagram</span>
                        </a>

                        <a href="#" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-stone-800 hover:bg-stone-700 transition">
                            <FaAmazon className="w-5 h-5 text-stone-300" aria-hidden />
                            <span className="sr-only">Amazon</span>
                        </a>

                        <a href="#" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-stone-800 hover:bg-stone-700 transition">
                            <SiFlipkart className="w-5 h-5 text-stone-300" aria-hidden />
                            <span className="sr-only">Flipkart</span>
                        </a>

                        <a href="https://wa.me/919766737604" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-stone-800 hover:bg-stone-700 transition">
                            <FaWhatsapp className="w-5 h-5 text-stone-300" aria-hidden />
                            <span className="sr-only">WhatsApp</span>
                        </a>




                    </div>
                </div>
            </div>

            <div className="border-t border-stone-800">
                <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-xs text-stone-500">
                    <p>© {new Date().getFullYear()} Liyana Beauty</p>
                    <p className="mt-2 md:mt-0"></p>
                </div>
            </div>
        </footer>
    );
}
