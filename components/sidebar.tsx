"use client";

import { cn } from "@/lib/utils";
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});
const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700",
  },{
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-700",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-emerald-500",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-blue-500",
  },
  {
    label: "Setting",
    icon: Settings,
    href: "/settings",
  },
];
const Sidebar = () => {
    const pathname = usePathname();
  return (
    <div className="space-y-4 flex flex-col h-full bg-slate-900 text-white">
      <div className="px-3  flex-1">
        <Link href={"/dashboard"} className="flex items-center pl-3 mb-10">
          <div className="relative w-28 h-28 ">
            <Image fill alt="Logo" src={"/prototype2.png"} />
          </div>
        </Link>

        <div className="items space-y-1">
          {routes.map((route) => (
            <Link href={route.href} key={route.href} 
            className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",pathname === route.href ? "text-white bg-white/10":"text-zinc-400")}>
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;