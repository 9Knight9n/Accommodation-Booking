import React, {Component} from 'react';
import { Modal} from "react-bootstrap";
import {Link, Route, Switch, BrowserRouter as Router} from "react-router-dom";
import Amentities from './amentities';
import Categories from "./categories";
import Details from './details';
import Facilities from "./facilities";
import Address from "./address";
import Photos from "./photos";
import Documentations from "./documentations";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

class AddAccommodation extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.exit = this.exit.bind(this);
    }

    exit()
    {
        document.getElementById('redirect-to-hosting').click()
        sessionStorage.removeItem('add-villa-selected-category');
        sessionStorage.removeItem('add-villa-placeName');
        sessionStorage.removeItem('add-villa-description');
        sessionStorage.removeItem('add-villa-area');
        sessionStorage.removeItem('add-villa-price');
        sessionStorage.removeItem('add-villa-amentities');
        sessionStorage.removeItem('add-villa-selected-country');
        sessionStorage.removeItem('add-villa-selected-state');
        sessionStorage.removeItem('add-villa-selected-city');
        sessionStorage.removeItem('add-villa-fullAddress');
        sessionStorage.removeItem('add-villa-selected-facilities-label');
        sessionStorage.removeItem('add-villa-selected-facilities-id');
        sessionStorage.removeItem('add-villa-uploaded-photos');
        sessionStorage.removeItem('add-villa-uploaded-doc-residence');
        sessionStorage.removeItem('add-villa-selected-category');
        sessionStorage.removeItem('add-villa-postalCode');
        sessionStorage.removeItem('add-villa-selected-stateCode')
        sessionStorage.removeItem('add-villa-selected-countryCode');

    }

    render() {
        return (
            <div>
                <ToastContainer/>
                <Link className={'display-none'} to="/hosting/"  id={'redirect-to-hosting'}/>
                <Modal centered size={'lg'}
                        backdrop="static"
                        show={true}
                        onHide={this.exit}>
                    <Switch>
                        <Route path='/hosting/addaccommodation/categories/'>
                            <Categories/>
                        </Route>
                        <Route path='/hosting/addaccommodation/amentities/'>
                            <Amentities/>
                        </Route>
                        <Route path='/hosting/addaccommodation/facilities/'>
                            <Facilities/>
                        </Route>
                        <Route path='/hosting/addaccommodation/photos/'>
                            <Photos/>
                        </Route>
                        <Route path='/hosting/addaccommodation/documentations/'>
                            <Documentations/>
                        </Route>
                        <Route path='/hosting/addaccommodation/details/'>
                            <Details/>
                        </Route>
                        <Route path='/hosting/addaccommodation/address/'>
                            <Address />
                        </Route>
                    </Switch>
                </Modal>
            </div>
        );
    }
}

export default AddAccommodation;
