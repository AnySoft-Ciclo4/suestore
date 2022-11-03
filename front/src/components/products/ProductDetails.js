import React, { Fragment, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import MetaData from '../layout/MetaData'
import { useParams } from 'react-router-dom'
import { clearErrors, getProductDetails } from '../../actions/productActions'
import {useAlert} from 'react-alert'

export const ProductDetails = () => {
  const { loading, product, error } = useSelector(state => state.productDetails)
  const { id } = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();

  useEffect(() => {
    dispatch(getProductDetails(id))
    if(error){
      alert.error(error);
      dispatch(clearErrors())
    }
  }, [dispatch, alert, error, id])

  return (
    <Fragment>
      <MetaData title="Buzo negro rayas"></MetaData>
      <div className='row d-flex justify-content-around'>
        <div className='col-12 col-lg-5 img-fluid' id="imagen_producto">
          <img src="../../../public/images/productos/buzoNegroRayas.jpg" height="450" width="450" alt="imagen buzo negra a rayas"></img>
        </div>
        <div className='col-12 col-lg-5 mt5'>
          <h3> Buzo negro rayas quest</h3>
          <p id="product_id">Product #3253252</p>
        </div>
      </div>
    </Fragment>


  )
}
