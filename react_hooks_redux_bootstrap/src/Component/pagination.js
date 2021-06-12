import { Pagination } from 'react-bootstrap';

function PaginationComponent(props) {
    console.log(props)
    
    const Iterations =()=>{
        let active = props.active;
        let items = [];
        for (let number = 1; number <= Math.ceil(props.count/10); number++) {
        items.push(
            <Pagination.Item key={number} onClick={()=>props.pageClick(number)} active={number === active}>
            {number}
            </Pagination.Item>,
        );
        }
        return items
    }

    return (
        <Pagination>
           {Iterations()}  
        </Pagination>
    );
  }

  export default PaginationComponent