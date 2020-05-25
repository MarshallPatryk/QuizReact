import React from 'react';
import Form from '../../components/Form/Form';
import PytanieView from '../../components/Quiz/Pytania/PytanieView';
import AppContext from '../../context';
const createQuizView = () => (
  <>

    <div className="d-sm-flex align-items-center justify-content-between mb-4">
      <label htmlFor="nazwaQuizu" className="text-uppercase font-weight-bold text-body">Nazwa Quizu</label>
      <input type="text" className="form-control form-control-user" id="nazwaQuizu" placeholder="Nazwa Quizu" />
    </div>

    <div className="row justify-content-center">

      <div className="col-md-8">

        <AppContext.Consumer>
          {(context) => (
            <>
            <PytanieView items={context.otwarte.concat(context.zamkniete)} />
            </>
          )}
        </AppContext.Consumer>

      </div>

      <div className="col-md-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Tworzenie Pytań</h6>
          </div>
          <div className="card-body">


            <Form />



          </div>
        </div>

        <div className="card shadow mb-4">
          <div className="card-body text-center">
            <button type="button" className="btn btn-success">Zapisz</button>
          </div>

        </div>

      </div>

    </div>

  </>
);

export default createQuizView;