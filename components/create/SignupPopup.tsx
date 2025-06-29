import React from 'react'
import { usePopup, popuptype, status } from '@/lib/usePopup'

function SignupPopup() {
    const { popupstatus } = usePopup();

    if (popupstatus?.type !== popuptype.signup) return null
    return (
        <>
            {popupstatus?.status == status.open && <div className="min-h-screen absolute flex items-center justify-center z-50 w-screen bg-neutral-500    px-4">
                <div className="max-w-md w-full space-y-6">
                    <h1 className="text-2xl font-bold text-center">Create your Tally account</h1>
                    <p className="text-center text-gray-600">Get started with the simplest way to create forms.</p>

                    <div className="space-y-3">
                        <button className="w-full flex items-center justify-center border rounded-md py-2 text-sm font-medium hover:bg-gray-50">
                            Continue with Google
                        </button>
                        <button className="w-full flex items-center justify-center border rounded-md py-2 text-sm font-medium hover:bg-gray-50">
                            Continue with Apple
                        </button>
                    </div>

                    <div className="border-t pt-6">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                        />
                        <button className="w-full mt-4 bg-black text-white py-2 rounded-md font-semibold">
                            Continue
                        </button>
                    </div>

                    <p className="text-xs text-center text-gray-500">
                        By signing up, you agree to our{' '}
                        <a href="#" className="underline">
                            Terms & Privacy
                        </a>
                        .
                    </p>
                    <p className="text-sm text-center text-gray-500">
                        Already have an account?{' '}
                        <a href="#" className="text-black underline">
                            Log in.
                        </a>
                    </p>
                </div>
            </div>}
        </>
    )
}

export default SignupPopup
