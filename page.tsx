import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Download } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="p-6 space-y-8 max-w-5xl mx-auto">
      <section className="text-center">
        <h1 className="text-4xl font-bold">Ovidiu Strinu</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Aspiring Cybersecurity Analyst | BSc Computing Student | Networking & Security Enthusiast
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="mailto:ovidiu26.ova@gmail.com"><Mail /></a>
          <a href="https://www.linkedin.com/in/ovidiu-strinu-b94ab51b2/"><Linkedin /></a>
          <a href="/Ovidiu_Strinu_Professional_Cybersecurity_CV.docx" download><Download /></a>
        </div>
      </section>

      <Card><CardContent className="p-6 space-y-3">
        <h2 className="text-2xl font-semibold">Who I Am</h2>
        <p>
          Transitioning from 20+ years of hospitality leadership into cybersecurity. Passionate about tech, learning daily.
        </p></CardContent></Card>

      <Card><CardContent className="p-6 space-y-3">
        <h2 className="text-2xl font-semibold">What I've Done</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>VLAN, Subnetting, ACL, ROAS Labs (Packet Tracer)</li>
          <li>Introduction to Cybersecurity – Cisco</li>
          <li>BSc Computing – Year 1</li>
        </ul></CardContent></Card>

      <Card><CardContent className="p-6 space-y-3">
        <h2 className="text-2xl font-semibold">What I'm Working On</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>OSPF Routing Final Lab</li>
          <li>Linux Basics & Admin</li>
          <li>Daily practice on NetAcad & SecuritateIT</li>
        </ul></CardContent></Card>

      <Card><CardContent className="p-6 space-y-3">
        <h2 className="text-2xl font-semibold">Future Goals</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Entry-level Cybersecurity / SOC / IT Support</li>
          <li>Specializing in Networking, Linux & Ethical Hacking</li>
        </ul></CardContent></Card>

      <div className="text-center pt-6">
        <p className="text-muted-foreground text-sm">Made with 🔥 by Ovidiu Strinu</p>
      </div>
    </div>
  );
}
