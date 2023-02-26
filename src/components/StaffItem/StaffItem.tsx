import { useOutletContext, useParams } from 'react-router-dom'

export default function StaffItem() {
  const params = useParams()
  const { staffId } = useParams()
  const context = useOutletContext()

  console.log('Params', params)
  console.log('id', staffId)
  console.log('Context', context)

  return <div>StaffItem {staffId}</div>
}
