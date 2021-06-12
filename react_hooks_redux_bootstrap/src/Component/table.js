
import { Table } from 'react-bootstrap';


function TableComponent(props) {
    
    return (
        <div style={{overflowX:"auto"}}>
        {props.data && props.data.length != 0 ? 
            <Table style={{width:"max-content",maxWidth:"200%"}} striped bordered hover size="sm">
                <thead>
                    <tr>
                    {/* <th>Image</th> */}
                    <th>name</th>
                    <th>volume</th>
                    <th>abv</th>
                    <th>attenuation_level</th>
                    <th>boil_volume</th>
                    <th>brewers_tips</th>
                    <th>contributed_by</th>
                    <th>description</th>
                    <th>ebc</th>
                    <th>first_brewed</th>
                    <th>ibu</th>
                    <th>food_pairing</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((data,i)=>(
                        <tr key={i}>
                            {/* <td><image src={data.image_url} /></td> */} {/* Image url not working */}
                            <td>{data.name}</td>
                            <td>{data.volume.value +" "+data.volume.unit }</td>
                            <td>{data.abv}</td>
                            <td>{data.attenuation_level}</td>
                            <td>{data.boil_volume.value +" "+data.boil_volume.unit }</td>
                            <td><div title={data.brewers_tips}>{data.brewers_tips.slice(0,20) +"..."}</div></td>
                            <td>{data.contributed_by}</td>
                            <td><div title={data.description}>{data.description.slice(0,20) +"..."}</div></td>
                            <td>{data.ebc}</td>
                            <td>{data.first_brewed}</td>
                            <td>{data.ibu}</td>
                            <td>
                                <ol>
                                    {data.food_pairing.map((d,i)=>(<li key={i}>{d}</li>))}
                                </ol>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table> : "Loading..."}
        </div>
    );
  }

  export default TableComponent