import { Clock } from 'lucide-react'
import Card from '../common/Card'

export default function BusinessHours({ workingHours }) {
  return (
    <Card>
      <div className="mb-4 flex items-center gap-2">
        <Clock size={20} className="text-brand" aria-hidden="true" />
        <h3 className="text-lg font-bold text-slate-900">Business Hours</h3>
      </div>
      <table className="w-full text-sm">
        <tbody>
          {Object.entries(workingHours).map(([day, hours]) => (
            <tr key={day} className="border-b border-slate-100 last:border-0">
              <td className="py-2 font-medium text-slate-700">{day}</td>
              <td className={`py-2 text-right ${hours === 'Closed' ? 'text-red-500' : 'text-slate-600'}`}>
                {hours}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  )
}
