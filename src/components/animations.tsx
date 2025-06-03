"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type FadeInProps = {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  once?: boolean;
};

export function FadeIn({
  children,
  duration = 700,
  delay = 0,
  className = "",
  direction = "up",
  distance = 30,
  once = true,
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const getTransform = () => {
    switch (direction) {
      case "up":
        return `translateY(${distance}px)`;
      case "down":
        return `translateY(-${distance}px)`;
      case "left":
        return `translateX(${distance}px)`;
      case "right":
        return `translateX(-${distance}px)`;
      default:
        return "none";
    }
  };

  return (
    <div
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : getTransform(),
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

export function StaggeredFadeIn({
  children,
  className = "",
  delayIncrement = 100,
  baseDelay = 0,
  once = true,
}: {
  children: React.ReactNode[];
  className?: string;
  delayIncrement?: number;
  baseDelay?: number;
  once?: boolean;
}) {
  return (
    <div className={className}>
      {Array.isArray(children) &&
        children.map((child, index) => (
          <FadeIn
            key={index}
            delay={baseDelay + index * delayIncrement}
            once={once}
          >
            {child}
          </FadeIn>
        ))}
    </div>
  );
}

export function ScaleIn({
  children,
  duration = 700,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "scale(1)" : "scale(0.9)",
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms cubic-bezier(0.175, 0.885, 0.32, 1.275)`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

export function SlideInFromRight({
  children,
  duration = 700,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0)" : "translateX(100px)",
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

export function BackgroundGradient({
  children,
  className = "",
  containerClassName = "",
  animate = true,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) {
  return (
    <div className={cn("relative", containerClassName)}>
      <div
        className={cn(
          "absolute inset-0 rounded-xl opacity-30 blur-xl",
          animate && "animate-pulse duration-3000",
          className
        )}
        style={{
          background:
            "linear-gradient(45deg, var(--primary) 0%, var(--secondary) 100%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
