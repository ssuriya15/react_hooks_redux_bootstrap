import ActionFile from '../Action/ActionFile'
import TableComponent from "./table"
import PaginationComponent from "./pagination"
import { Container, Col, Row } from 'react-bootstrap';

import React, { useState,useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'

function TableContainer(props) {
    const [ActivePage,setActivePage ] = useState(1)
    const data = useSelector(state => state.ReducerFile.data)
    //const count = useSelector(state => state.ReducerFile.count)
    const dispatch = useDispatch()
    
    useEffect(() => {
      //dispatch(ActionFile.getTabledataCount())
      dispatch(ActionFile.getTabledata(1))
    }, []);

    const pageClick=(i)=>{
      setActivePage(i)
      dispatch(ActionFile.getTabledata(i))
    }

    return (
        <Container fluid>
            <Row className={""}>
                <Col >
                    <br/><TableComponent data={data} /><br/>
                    <PaginationComponent count={80} active={ActivePage} pageClick={pageClick}/> {/* api have only 80 records */}
                    
                </Col>
            </Row>
            
          </Container>
    );
  }
  
export default TableContainer

