"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Briefcase, Quote } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

interface StudentCardProps {
  student: {
    name: string;
    role: string;
    company: string;
    image: string;
    achievement: string;
    salary: string;
    testimonial: string;
    tags: string[];
  };
}

export function StudentCard({ student }: StudentCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  console.log(isHovered);

  return (
    <Card
      className="group relative overflow-hidden border-border bg-card  transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative h-96 overflow-hidden">
        <Image
          src={student.image || "/placeholder.svg"}
          alt={student.name}
          fill
          className="w-full h-full object-cover object-left-top transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

        <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1.5 rounded-full text-xs font-semibold">
          ⭐ Success Story
        </div>
      </div>

      <div className="relative p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-1">
            {student.name}
          </h3>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Briefcase className="h-4 w-4" />
            <span className="text-sm">{student.role}</span>
          </div>
          <p className="text-sm text-primary font-medium mt-1">
            {student.company}
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <TrendingUp className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-foreground">
                {student.achievement}
              </p>
              <p className="text-xs text-primary font-bold">{student.salary}</p>
            </div>
          </div>
        </div>

        <div className="relative bg-secondary/50 rounded-lg p-4 border border-border/50">
          <Quote className="h-5 w-5 text-primary/50 absolute top-2 left-2" />
          <p className="text-sm text-foreground/90 italic pl-6 leading-relaxed">
            {student.testimonial}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {student.tags.map((tag, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 rounded-lg border-2 border-primary/50 animate-pulse" />
      </div> */}
    </Card>
  );
}
