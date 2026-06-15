import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function TestPage() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-2xl text-center">
        <h1 className="text-2xl font-bold text-white">✅ اتصال به Supabase</h1>
        <p className="text-green-400 mt-4">در حال بررسی...</p>
      </div>
    </div>
  )
}
