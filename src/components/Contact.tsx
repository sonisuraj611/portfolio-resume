import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm("service_7yzwv4n", "template_bvi54gu", form.current, {
        publicKey: "FOSmXRjXE7unGJdZ0",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you as soon as possible.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="bg-navy-light">
      <div className="section-container">
        <div className="text-center mb-12">
          <h3 className="subheading">Get In Touch</h3>
          <h2 className="heading text-2xl md:text-4xl">Contact Me</h2>
          <p className="text-slate max-w-md mx-auto">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll get back to you!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-slate-lightest mb-2"
                >
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-navy border-navy-lightest focus:border-teal text-slate-lightest"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-slate-lightest mb-2"
                >
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-navy border-navy-lightest focus:border-teal text-slate-lightest"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-slate-lightest mb-2"
              >
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                placeholder="How can I help you?"
                value={formData.subject}
                onChange={handleChange}
                required
                className="bg-navy border-navy-lightest focus:border-teal text-slate-lightest"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-slate-lightest mb-2"
              >
                Your Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-navy border-navy-lightest focus:border-teal text-slate-lightest min-h-[150px]"
              />
            </div>

            <div className="text-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                variant="outline"
                className="btn-primary px-8"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
