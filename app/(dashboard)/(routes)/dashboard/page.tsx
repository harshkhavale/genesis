"use client";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const tools = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
    bgcolor: "bg-sky-500/10",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
    bgcolor: "bg-violet-500/10",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700",
    bgcolor: "bg-pink-700/10",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-700",
    bgcolor: "bg-orange-700/10",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-emerald-500",
    bgcolor: "bg-emerald-500/10",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-blue-500",
    bgcolor: "bg-blue-500/10",
  },
  {
    label: "Setting",
    icon: Settings,
    href: "/settings",
    bgcolor: "bg-white/10",
  },
];
const DashboardPage = () => {
  const router = useRouter();
  return (
    <div className="">
      <div className=" mb-8 space-y-4 ">
        <h2 className=" text-2xl md:text-4xl font-bold text-center">
          Explore the power of AI{" "}
        </h2>
        <p className=" text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with the smartest AI - Experience the power of AI
        </p>
      </div>
      <div className="px-4 md:px-20 flex justify-center items-center flex-wrap  lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="relative overflow-hidden p-8 mx-2 shadow-lg rounded-2xl border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgcolor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>
            <div className={cn(" absolute rounded-full p-12 top-[-30px] right-[-10px]", tool.bgcolor)} />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
