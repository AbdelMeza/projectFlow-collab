import './KPIs.css'

export default function KPIs({ data }) {
    return <div className="kpi-wrapper">
        {data?.length > 0 ? data.map((d, index) => (
            <div className="kpi-container" key={index}>
                <span className="kpi-title">{d.title}</span>
                <span className="kpi-data">{d.data}</span>
            </div>
        )) : <code>Error loading data</code>}
    </div>
}