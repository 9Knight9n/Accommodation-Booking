import React, {Component} from 'react';
import { Modal} from "react-bootstrap";
import {Link, Route, Switch} from "react-router-dom";
import Amentities from './amentities';
import Categories from "./categories";
import Details from './details';
import Facilities from "./facilities";

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
    }

    render() {
        return (
            <div>
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
                        <Route path='/hosting/addaccommodation/details/'>
                            <Details/>
                        </Route>
                    </Switch>
                </Modal>
            </div>
        );
    }
}

export default AddAccommodation;
