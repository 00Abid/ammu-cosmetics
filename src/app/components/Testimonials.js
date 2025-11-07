import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
    const testimonials = [
        {
            quote:
                "Ammu Cosmetics has completely changed how I see skincare. Their products respect modesty and bring out natural beauty effortlessly.",
            name: "Aisha Khan",
            designation: "Customer from Bhiwandi",
            src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
        },
        {
            quote:
                "I love how gentle yet effective the formulations are. Ammu truly understands the needs of women who prefer natural beauty with grace.",
            name: "Fatimah Ali",
            designation: "Makeup Enthusiast",
            src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=400&auto=format&fit=crop",
        },
        {
            quote:
                "Their Halal-certified products are a blessing. I can use everything with peace of mind knowing it aligns with my values.",
            name: "Zainab Patel",
            designation: "Regular User from Mumbai",
            src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop",
        },
        {
            quote:
                "From skincare to fragrances, Ammu Cosmetics delivers excellence. The quality feels premium yet stays affordable.",
            name: "Mariam Siddiqui",
            designation: "Beauty Blogger",
            src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
        },
        {
            quote:
                "Every product feels pure and authentic. Ammu Cosmetics celebrates modest beauty in the most empowering way.",
            name: "Khadija Ansari",
            designation: "Customer from Hyderabad",
            src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
        },

    ];

    return <AnimatedTestimonials testimonials={testimonials} />;
}
