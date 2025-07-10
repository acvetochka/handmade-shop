"use client";

import dynamic from "next/dynamic";

const DynamicScrollLink = dynamic(() => import("./ScrollLink"), { ssr: false });

export default DynamicScrollLink;
