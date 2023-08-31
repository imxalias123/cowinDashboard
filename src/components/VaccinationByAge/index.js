// Write your code here
// Write your code here
import {PieChart, Pie, ResponsiveContainer, Cell, Legend} from 'recharts'

const VaccinationByAge = props => {
  const {data} = props
  return (
    <div className="sub-parts">
      <h1 className="Coverage-heading">Vaccination by Age</h1>
      <div className="center">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              cx="50%"
              cy="40%"
              data={data}
              startAngle={0}
              endAngle={360}
              innerRadius="0%"
              outerRadius="70%"
              dataKey="count"
            >
              <Cell name="18-44" fill="#2d87bb" />
              <Cell name="44-60" fill="#a3df9f" />
              <Cell name="Above 60" fill="#64c2a6" />
            </Pie>
            <Legend iconType="circle" verticalAlign="bottom" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default VaccinationByAge
