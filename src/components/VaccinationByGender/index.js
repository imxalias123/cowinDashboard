// Write your code here
import {PieChart, Pie, Cell, Legend} from 'recharts'

const VaccinationByGender = props => {
  const {data} = props
  return (
    <div className="sub-parts">
      <h1 className="Coverage-heading">Vaccination by gender</h1>

      <PieChart
        width={1000}
        height={300}
        margin={{
          top: 45,
        }}
      >
        <Pie
          cx="50%"
          cy="30%"
          data={data}
          startAngle={180}
          endAngle={0}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="Male" fill=" #f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill=" #2cc6c6" />
        </Pie>
        <Legend iconType="circle" verticalAlign="bottom" />
      </PieChart>
    </div>
  )
}

export default VaccinationByGender
