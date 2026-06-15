import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function DashboardPage() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  // دریافت آخرین داده سنسور
  const { data: lastSensor, error: sensorError } = await supabase
    .from('sensor_data')
    .select('*')
    .order('timestamp', { ascending: false })
    .limit(1)
    .single()

  return (
    <div className="min-h-screen bg-background text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">داشبورد کشتیار</h1>

        {sensorError ? (
          <div className="text-red-400">خطا در دریافت داده: {sensorError.message}</div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="neumorphic-card p-4 text-center">
              <div className="text-text-secondary mb-2">دما</div>
              <div className="text-3xl font-bold">{lastSensor?.temperature ?? '---'}°C</div>
            </div>
            <div className="neumorphic-card p-4 text-center">
              <div className="text-text-secondary mb-2">رطوبت هوا</div>
              <div className="text-3xl font-bold">{lastSensor?.humidity ?? '---'}%</div>
            </div>
            <div className="neumorphic-card p-4 text-center">
              <div className="text-text-secondary mb-2">رطوبت خاک</div>
              <div className="text-3xl font-bold">{lastSensor?.soil_moisture ?? '---'}%</div>
            </div>
            <div className="neumorphic-card p-4 text-center">
              <div className="text-text-secondary mb-2">سطح تانک</div>
              <div className="text-3xl font-bold">{lastSensor?.tank_level_percent ?? '---'}%</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
