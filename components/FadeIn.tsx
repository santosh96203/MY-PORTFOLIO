"use client";

import {
motion,
useScroll,
useTransform,
} from "framer-motion";

import { useRef } from "react";

export default function FadeIn({
children,
}: {
children: React.ReactNode;
}) {
const ref = useRef(null);

const { scrollYProgress } = useScroll({
target: ref,
offset: ["start end", "end start"],
});

const opacity = useTransform(
  scrollYProgress,
  [0, 0.25, 0.5, 0.75, 1],
  [0, 0.25, 1, 0.25, 0]
);

const y = useTransform(
  scrollYProgress,
  [0, 0.5, 1],
  [80, 0, -80]
);

const scale = useTransform(
  scrollYProgress,
  [0, 0.5, 1],
  [0.97, 1, 0.97]
);

return (
<motion.div
ref={ref}
style={{
opacity,
y,
scale,
}}
>
{children}
</motion.div>
);
}