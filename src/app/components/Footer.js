import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaAmazon, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiFlipkart } from "react-icons/si";

export default function Footer() {
    return (
        <footer className="bg-stone-900 text-stone-300">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand */}
                <div className="flex flex-col gap-4">
                    <Link href="/" aria-label="AMMU COSMETICS home" className="inline-flex items-center">
                        <Image src="/ammu-logo.webp" alt="AMMU COSMETICS" width={140} height={40} className="object-contain" />
                    </Link>
                    <p className="max-w-sm text-stone-400 text-sm">
                        Pure. Natural. You.
                    </p>
                    <p className="text-stone-400 text-sm">
                        Natural luxury skincare in Bhiwandi, India.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-stone-400 text-sm">
                        <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                        <li><Link href="/products" className="hover:text-white transition">Products</Link></li>
                        <li><Link href="/why" className="hover:text-white transition">Why Choose Us</Link></li>
                        <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                    </ul>
                </div>

                {/* Products */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Popular Products</h3>
                    <ul className="space-y-2 text-stone-400 text-sm">
                        <li><Link href="/products#Multani-Mitti" className="hover:text-white transition">Multani Mitti</Link></li>
                        <li><Link href="/products#Aloe-Rose-Water-Toner" className="hover:text-white transition">Rose Water Toner</Link></li>
                        <li><Link href="/products#Bridal-Makeup" className="hover:text-white transition">Bridal Makeup</Link></li>
                        <li><Link href="/products#Blackheads-Removal" className="hover:text-white transition">Blackhead Removal</Link></li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Shop On</h3>
                    <div className="flex flex-wrap gap-3">
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
