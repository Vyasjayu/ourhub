"use client";

import Image from "next/image";
import {
    BadgeCheck,
    Video,
    Gift,
    ShieldCheck,
} from "lucide-react";

export default function HeroBanner() {
    return (
        <section className="mt-5">

            <div className="relative overflow-hidden rounded-[28px] border border-yellow-500/20 bg-[#0B1627]">

                {/* Background Image */}

                <div className="relative h-[430px] w-full">

                    <Image
                        src="/banners/online-banner.png"
                        alt="Online Pooja"
                        fill
                        priority
                        className="object-cover"
                    />

                    {/* Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/20" />

                    {/* Content */}

                    <div className="absolute inset-0 flex flex-col justify-between p-5">

                        {/* Badge */}

                        <div>

                            <span className="inline-flex items-center rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-xs font-semibold text-yellow-400">
                                🙏 Online Pooja
                            </span>

                        </div>

                        {/* Main */}

                        <div className="max-w-[220px]">

                            <h2 className="text-[26px] font-bold leading-[42px] text-white">

                                Divine Blessings
                                <br />

                                {/* <span className="text-yellow-300">
                  Blessings
                </span> */}

                                {/* <br /> */}
                                <h2 className="text-yellow-300">
                                    From Anywhere
                                </h2>


                            </h2>

                            <p className="mt-2 text-[14px] leading-6 text-gray-300">

                                Our verified pandits perform pooja live
                                while you participate from your home.

                            </p>

                            {/* Features */}

                            <div className="mt-2 flex flex-wrap gap-3">

                                <div className="flex items-center gap-2 rounded-xl bg-black/40 px-3 py-2 backdrop-blur">

                                    <BadgeCheck
                                        size={18}
                                        className="text-yellow-400"
                                    />

                                    <span className="text-xs text-white">
                                        Live Pooja
                                    </span>

                                </div>

                                <div className="flex items-center gap-2 rounded-xl bg-black/40 px-3 py-2 backdrop-blur">

                                    <Video
                                        size={18}
                                        className="text-yellow-400"
                                    />

                                    <span className="text-xs text-white">
                                        Video
                                    </span>

                                </div>

                                <div className="flex items-center gap-2 rounded-xl bg-black/40 px-3 py-2 backdrop-blur">

                                    <Gift
                                        size={18}
                                        className="text-yellow-400"
                                    />

                                    <span className="text-xs text-white">
                                        Prasad
                                    </span>

                                </div>

                            </div>


                        </div>
                        <div>

                            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-black/50 px-5 py-3 backdrop-blur">

                                <ShieldCheck
                                    size={18}
                                    className="text-yellow-400"
                                />

                                <span className="text-sm font-semibold text-yellow-300">

                                    100% Authentic • Verified Pandits

                                </span>

                            </div>

                        </div>

                        {/* Bottom Badge */}

                        <div>

                            {/* <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-black/50 px-5 py-3 backdrop-blur">

                                <ShieldCheck
                                    size={18}
                                    className="text-yellow-400"
                                />

                                <span className="text-sm font-semibold text-yellow-300">

                                    100% Authentic • Verified Pandits

                                </span>

                            </div> */}

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}