import React from "react";
import AppContext from "../../context";
const types = {
  otwarte: "otwarte",
  zamkniete: "zamkniete",
};

class Form extends React.Component {
  state = {
    type: types.zamkniete,
    pytanie: "",
    odpA: "",
    Acorrect: "",
    odpB: "",
    Bcorrect: "",
    odpC: "",
    Ccorrect: "",
    odpD: "",
    Dcorrect: "",
  };

  handleRadioButtonChange = type => {
    this.setState({
      type: type,
    });
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });

  };

  render() {
    const { type } = this.state;

    return (
      <AppContext.Consumer>
        {context => (
          <form
            className="user dodawaniepytania"
            autoComplete="off"
            onSubmit={(e) => {
              context.addItem(e, this.state);
              e.preventDefault();
              }
              }>

            <div className="form-group">

              <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" className="custom-control-input" id="zamkniete" name="zamkniete" 
                onChange={() => this.handleRadioButtonChange(types.zamkniete)} 
                checked={type === types.zamkniete}/>
                <label className="custom-control-label" htmlFor="zamkniete">Zamknięte</label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" className="custom-control-input" id="otwarte" name="otwarte" 
                onChange={() => this.handleRadioButtonChange(types.otwarte)} 
                checked={type === types.otwarte}/>
                <label className="custom-control-label" htmlFor="otwarte">Otwarte</label>
              </div>
            </div>
            <div className="form-group">
              <div className="form-group">
                <input type="text"
                  onChange={this.handleInputChange}
                  value={this.state.pytanie}
                  className="form-control form-control-user" id="pytanie" name="pytanie" placeholder="Pytanie" />
              </div>

              <div className="input-group mb-3">
                {type === types.zamkniete ? (
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <input type="checkbox"
                        onChange={this.handleInputChange}
                        value={this.state.Acorrect}
                        name="Acorrect" aria-label="Checkbox for following text input" />
                    </div>
                  </div>
                ) : null}


                <input type="text"
                  onChange={this.handleInputChange}
                  value={this.state.odpA}
                  className="form-control" name="odpA" aria-label="Text input with checkbox" placeholder="Odpowiedź A"/>
              </div>


              {type === types.zamkniete ? (
                <>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <input type="checkbox"
                        onChange={this.handleInputChange}
                        value={this.state.Bcorrect}
                        name="Bcorrect" aria-label="Checkbox for following text input" />
                    </div>
                  </div>
                  <input type="text"
                    onChange={this.handleInputChange}
                    value={this.state.odpB}
                    className="form-control" name="odpB" aria-label="Text input with checkbox" placeholder="Odpowiedź B" />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <input type="checkbox"
                        onChange={this.handleInputChange}
                        value={this.state.Ccorrect}
                        name="Ccorrect" aria-label="Checkbox for following text input" />
                    </div>
                  </div>
                  <input type="text"
                    onChange={this.handleInputChange}
                    value={this.state.odpC}
                    className="form-control" name="odpC" aria-label="Text input with checkbox" placeholder="Odpowiedź C"/>
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <input type="checkbox"
                        onChange={this.handleInputChange}
                        value={this.state.Dcorrect}
                        name="Dcorrect" aria-label="Checkbox for following text input" />
                    </div>
                  </div>
                  <input type="text"
                    onChange={this.handleInputChange}
                    value={this.state.odpD}
                    className="form-control" name="odpD" aria-label="Text input with checkbox" placeholder="Odpowiedź D"/>
                </div>
                </>
              ) : null}




            </div>

            <button className="btn btn-primary btn-user btn-block">
              Dodaj
            </button>
            <hr />
          </form>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Form;