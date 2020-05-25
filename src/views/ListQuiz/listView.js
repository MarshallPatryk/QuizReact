import React from 'react';

const listView = () => (
  <>
    
    <div className="row">

        <div className="col-lg-6">

        <div className="card shadow mb-4">

        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">Quiz Name</h6>
          <div className="dropdown no-arrow">
            <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400" />
            </a>
            <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
              <div className="dropdown-header">Moderacja:</div>
              <a className="dropdown-item" href="#">Edytuj</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">Rozwiąż</a>
            </div>
          </div>
        </div>
        {/* Card Body */}
        <div className="card-body">
            Pytanie 1<br />
            Pytanie 2<br />
            Pytanie 3<br />
            Pytanie 4<br />
            <a href="#" className="btn btn-primary btn-icon-split">
              <span className="icon text-white-50">
                <i className="fas fa-check" />
              </span>
              <span className="text">Rozwiąż</span>
            </a>
        </div>
      </div>

            </div>

            <div className="col-lg-6">


              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">Basic Card Example</h6>
                </div>
                <div className="card-body">
                  The styling for this basic card example is created by using default Bootstrap utility classes. By using utility classes, the style of the card component can be easily modified with no need for any custom CSS!
                </div>
              </div>

              

            </div>
      
    </div>
    
  
  </>
);

export default listView;