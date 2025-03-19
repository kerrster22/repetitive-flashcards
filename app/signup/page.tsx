import { AuthForm } from "@/components/auth-form"
import Image from "next/image"

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="absolute top-0 left-0 w-full h-32 overflow-hidden">
        <div className="absolute -top-4 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-green-100 dark:text-green-900">
            <path
              fill="currentColor"
              fillOpacity="1"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>
      </div>

      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-8 items-center z-10">
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
          <AuthForm type="signup" />
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-full h-32 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-green-100 dark:text-green-900">
            <path
              fill="currentColor"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

