import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return <SignUp
    appearance={{
      elements: {
        card: 'shadow-lg p-8 border border-gray-200 rounded-lg w-full max-w-md mx-auto',
        formButtonPrimary:
          'bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md w-full',
        formFieldInput:
          'border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full',
      },
      layout: {
        socialButtonsPlacement: 'bottom',
        logoPlacement: 'inside',
      },
      variables: {
        colorPrimary: '#1E40AF',
        colorText: '#374151',
        fontFamily: 'Inter, sans-serif',
      },
    }}
  />
}