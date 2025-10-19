import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Zap, Users, Target, BookOpen } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Quick Wins Program",
    description:
      "Build confidence in just 7 days with our proven quick-win strategies and daily challenges.",
  },
  {
    icon: Users,
    title: "Group Coaching",
    description:
      "Join our supportive community and grow alongside like-minded individuals on their confidence journey.",
  },
  {
    icon: Target,
    title: "One-on-One Coaching",
    description:
      "Personalized sessions tailored to your unique challenges and goals for maximum impact.",
  },
  {
    icon: BookOpen,
    title: "Self-Paced Courses",
    description:
      "Learn at your own pace with comprehensive video courses, workbooks, and resources.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the program that best fits your needs and start building
            unshakeable confidence today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="border-border hover:border-primary/50 transition-colors group"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
