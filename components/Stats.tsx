import { Users, TrendingUp, Award, Target } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Successful mentees",
    description: "Professionals transformed",
  },
  {
    icon: TrendingUp,
    value: "250%",
    label: "Average salary increase",
    description: "Career growth achieved",
  },
  {
    icon: Award,
    value: "95%",
    label: "Success rate",
    description: "Goals accomplished",
  },
  {
    icon: Target,
    value: "#1",
    label: "Industry mentor",
    description: "Rated by professionals",
  },
];

export const Stats = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
