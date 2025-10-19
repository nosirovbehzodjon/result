import { Students } from "@/components/Students";

const students = [
  {
    name: "Sarah Chen",
    role: "Senior Product Manager",
    company: "Tech Unicorn",
    image: "/p1.png",
    achievement: "Promoted to Senior PM in 8 months",
    salary: "+180% salary increase",
    testimonial:
      "The mentorship completely transformed my career trajectory. I went from feeling stuck to leading major product initiatives.",
    tags: ["Product Management", "Leadership", "Strategy"],
  },
  {
    name: "Marcus Johnson",
    role: "Engineering Lead",
    company: "Fortune 500",
    image: "/p2.png",
    achievement: "Led team of 15 engineers",
    salary: "+220% salary increase",
    testimonial:
      "From individual contributor to engineering lead in one year. The guidance was invaluable and actionable.",
    tags: ["Engineering", "Team Leadership", "Architecture"],
  },
  {
    name: "Elena Rodriguez",
    role: "VP of Marketing",
    company: "Fast-Growing Startup",
    image: "/p3.png",
    achievement: "Built marketing team from scratch",
    salary: "+300% salary increase",
    testimonial:
      "The strategic insights helped me scale our marketing from zero to a multi-million dollar operation.",
    tags: ["Marketing", "Growth", "Team Building"],
  },
  {
    name: "David Kim",
    role: "Founder & CEO",
    company: "AI Startup",
    image: "/p4.png",
    achievement: "Raised $5M seed round",
    salary: "Founded successful startup",
    testimonial:
      "The mentorship gave me the confidence and framework to launch my own company and secure funding.",
    tags: ["Entrepreneurship", "Fundraising", "AI"],
  },
  {
    name: "Aisha Patel",
    role: "Design Director",
    company: "Global Agency",
    image: "/p5.png",
    achievement: "Manages 20+ designers",
    salary: "+195% salary increase",
    testimonial:
      "Went from senior designer to design director. The career coaching was exactly what I needed.",
    tags: ["Design", "Creative Leadership", "UX"],
  },
  {
    name: "James Wilson",
    role: "Data Science Lead",
    company: "Tech Giant",
    image: "/p6.png",
    achievement: "Published 3 research papers",
    salary: "+240% salary increase",
    testimonial:
      "The mentorship helped me transition from academia to industry leadership seamlessly.",
    tags: ["Data Science", "ML/AI", "Research"],
  },
];

export const Results = () => {
  return (
    <section className="py-32 relative" id="results">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Success <span className="text-primary">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Real professionals. Real transformations. Real results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {students.map((student, index) => (
            <Students key={index} student={student} />
          ))}
        </div>
      </div>
    </section>
  );
};
