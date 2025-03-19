import { AuthForm } from "@/components/auth-form";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function SignUpPage() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-grow bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800 p-4">
        <div className="w-full max-w-4xl flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-green-800 dark:text-green-400 mb-4">
              Start Your Learning Garden
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Join GrowLearn today and transform your learning journey into a flourishing garden of knowledge.
            </p>
            <div className="hidden md:block relative h-64 w-full">
              <Image
                src="/placeholder.svg?height=256&width=384"
                alt="Learning Garden Illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex-1 w-full">
            <AuthForm type="signin" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}