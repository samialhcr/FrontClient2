import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getcomptes,
  getCompteById,
  getAbonnee,
  updateAbonnee
} from "../../actions/projectActions";
import { Modal, Button } from "react-bootstrap";
class MonCompte extends Component {
  componentDidMount() {
    this.props.getcomptes();
    this.props.getAbonnee();
  }
  constructor() {
    super();
    this.state = {
      id: "",
      email: "",
      username: "",
      password: "",
      password1: "",
      cin: "",
      nom: "",
      prenom: "",
      adress: "",
      numTel: "",
      profession: "",
      isActivated: "",
      contrat: "",
      showModal: false,
      showModal1: false
    };
    this.open1 = this.open1.bind(this);
    this.close1 = this.close1.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    const {
      id,
      email,
      username,
      password,
      cin,
      nom,
      prenom,
      adress,
      numTel,
      profession,
      isActivated,
      contrat
    } = nextProps.abonnee.abonnee;
    this.setState({
      id,
      email,
      username,
      password,
      cin,
      nom,
      prenom,
      adress,
      numTel,
      profession,
      isActivated,
      contrat
    });
    this.state.contrat = nextProps.abonnee.abonnee.contrat;
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  open = e => {
    this.setState({ showModal: true });
  };
  close() {
    this.setState({ showModal: false });
  }
  open1 = e => {
    this.setState({ showModal1: true });
  };
  close1() {
    this.setState({ showModal1: false });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.password1 !== this.state.password) {
      this.open1();
    } else {
      const updateAbonne = {
        id: this.state.id,
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
        cin: this.state.cin,
        nom: this.state.nom,
        prenom: this.state.prenom,
        adress: this.state.adress,
        numTel: this.state.numTel,
        profession: this.state.profession,
        isActivated: this.state.isActivated,
        contrat: this.state.contrat
      };

      this.props.updateAbonnee(updateAbonne, this.props.history);
      this.open();
    }
  }

  render() {
    const { abonnee } = this.props.abonnee;
    const { compte } = this.props.compte;
    return (
      <div>
             <div id="right-panel" class="right-panel">
        <aside id="left-panel" class="left-panel">
          <nav class="navbar navbar-expand-sm navbar-default">
            <div id="main-menu" class="main-menu collapse navbar-collapse">
              <ul class="nav navbar-nav">
                <li>
                  <br />
                  <a href="/Accueil">
                    <i class="menu-icon fa fa-dashboard fa-lg"></i>
                    <strong>Tableau de Bord </strong>
                  </a>
                  <br />
                  <br />
                </li>
                <li class="menu-title">Gérer ma Contrat</li>
                <li>
                  <a href="/Comptes">
                    {" "}
                    <i class="menu-icon fa fa-list-ul fa-lg"></i>
                    <strong>Mes Comptes </strong>
                  </a>
                </li>
                <li>
                  <a href="/Operations">
                    {" "}
                    <i class="menu-icon fa fa-tasks fa-lg"></i>
                    <strong>Mes Opérations </strong>
                  </a>
                </li>{" "}
                <li>
                  <a href="/Transactions">
                    {" "}
                    <i class="menu-icon fa fa-plus-square fa-lg"></i>
                    <strong>Nouvelle Opération </strong>
                  </a>
                </li>
                <li>
                  <a href="/CartesBancaires">
                    {" "}
                    <i class="menu-icon fa fa-folder-open fa-lg"></i>
                    <stronG>Mes Cartes Bancaires </stronG>
                  </a>
                </li>
                <li class="menu-title">Gérer mon Compte</li>
                <li class="active">
                  <a href="/MonCompte">
                    {" "}
                    <i class="menu-icon fa fa-user fa-lg"></i>
                    <strong>Mes Informations</strong>{" "}
                  </a>
                </li>
                <li>
                  <a href="/Beneficiares">
                    {" "}
                    <i class="menu-icon fa fa-users fa-lg"></i>
                    <strong>Béneficiares </strong>
                  </a>
                </li>
                <li class="menu-title">Déconnection</li>
                <li>
                  <a href="widgets.html">
                    {" "}
                    <i class="menu-icon fa fa-sign-out fa-lg"></i>
                    <strong>Se Déconnecter </strong>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </aside>

        <header id="header" class="header">
          <div class="top-left">
            <div class="navbar-header">
              <a class="navbar-brand" href="./">
                <img
                  src="images/logo.png"
                  alt="Logo"
                  height="63px"
                  width="210px"
                />
              </a>
              <a class="navbar-brand hidden" href="./">
                <img src="images/logo.png" alt="Logo" />
              </a>
            </div>
          </div>
          <div class="top-right">
            <div class="header-menu">
              <div class="user-area dropdown float-right">
                <a
                  href="#"
                  class="dropdown-toggle active"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                <img
                    class="user-avatar rounded-circle"
                    src="images/admin.jpg"
                    width="180px"
                    height="50px"
                    alt="User Avatar"
                  />
                </a>

                <div class="user-menu dropdown-menu">
                  <a class="nav-link" href="/Login">
                    <i class="fa fa-power -off"></i>Se Déconnecter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div class="breadcrumbs">
          <div class="breadcrumbs-inner">
            <div class="row ">
              <div class="col-sm-4">
                <div class="page-header float-left">
                  <div class="page-title">
                    <h1>Accueil</h1>
                  </div>
                </div>
              </div>
              <div class="col-sm-8">
                <div class="page-header float-right">
                  <div class="page-title">
                    <ol class="breadcrumb text-right">
                      <li>
                        <a href="#">Accueil</a>
                      </li>
                      <li>
                        <a href="#">Mon Compte</a>
                      </li>
                      <li class="active">Informations</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="animated fadeIn">
          <div class="row ">
            <div class="col-md-12">
              <div class="clearfix"></div>
              <div class="content">
                <div class="animated fadeIn">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="card">
                        <div class="card-header">
                          <i class="fa fa-user"></i>
                          <strong class="card-title pl-2">Mon Compte</strong>
                        </div>
                        <div class="card-body">
                          <div class="mx-auto d-block">
                            <img
                              class="rounded-circle mx-auto d-block"
                              src="images/admin.jpg"
                              alt="Card image cap"
                            />{" "}
                            <div class="card-body card-block">
                              <form
                                action="#"
                                method="post"
                                class="form-horizontal"
                                onSubmit={this.onSubmit}
                              >
                                <div class="row form-group">
                                  <div class="col col-md-12">
                                    <div class="input-group">
                                      <div class="input-group-addon">
                                        <strong>
                                          &nbsp;&nbsp;&nbsp;&nbsp;
                                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nom&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </strong>
                                      </div>
                                      <input
                                        type="text"
                                        id="nom"
                                        name="nom"
                                        value={this.state.nom}
                                        class="form-control"
                                        onChange={this.onChange.bind(this)}
                                        required
                                      />
                                      &nbsp;&nbsp;
                                      <div class="input-group-addon">
                                        <strong>
                                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prénom&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </strong>
                                      </div>
                                      <input
                                        type="text"
                                        name="prenom"
                                        value={this.state.prenom}
                                        class="form-control"
                                        onChange={this.onChange.bind(this)}
                                        required
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div class="row form-group">
                                  <div class="col col-md-12">
                                    <div class="input-group">
                                      <div class="input-group-addon">
                                        <strong>
                                          {" "}
                                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E-mail&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </strong>
                                      </div>
                                      <input
                                        type="email"
                                        name="email"
                                        value={this.state.email}
                                        class="form-control"
                                        onChange={this.onChange.bind(this)}
                                        required
                                      />
                                      &nbsp;&nbsp;
                                      <div class="input-group-addon">
                                        <strong>
                                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CIN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </strong>
                                      </div>
                                      <input
                                        type="text"
                                        name="cin"
                                        value={this.state.cin}
                                        class="form-control"
                                        onChange={this.onChange.bind(this)}
                                        required
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div class="row form-group">
                                  <div class="col col-md-12">
                                    <div class="input-group">
                                      <div class="input-group-addon">
                                        <strong>
                                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Addresse&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </strong>
                                      </div>
                                      <input
                                        type="text"
                                        name="adress"
                                        value={this.state.adress}
                                        class="form-control"
                                        onChange={this.onChange.bind(this)}
                                        required
                                      />
                                      &nbsp;&nbsp;
                                      <div class="input-group-addon">
                                        <strong>
                                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Téléphone&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </strong>
                                      </div>
                                      <input
                                        type="text"
                                        name="numTel"
                                        value={this.state.numTel}
                                        class="form-control"
                                        onChange={this.onChange.bind(this)}
                                        required
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div class="row form-group">
                                  <div class="col col-md-12">
                                    <div class="input-group">
                                      <div class="input-group-addon">
                                        <strong>
                                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Identifiant&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </strong>
                                      </div>
                                      <input
                                        type="text"
                                        name="username"
                                        value={this.state.username}
                                        class="form-control"
                                        onChange={this.onChange.bind(this)}
                                        required
                                      />
                                      &nbsp;&nbsp;
                                      <div class="input-group-addon">
                                        <strong>
                                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mot
                                          de
                                          Passe&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </strong>
                                      </div>
                                      <input
                                        type="text"
                                        name="password"
                                        value={this.state.password}
                                        class="form-control"
                                        type="text"
                                        onChange={this.onChange.bind(this)}
                                        required
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div class="row form-group">
                                  <div class="col col-md-12">
                                    <div class="input-group">
                                      <div class="input-group-addon">
                                        <strong>
                                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Profession&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </strong>
                                      </div>
                                      <input
                                        type="text"
                                        name="profession"
                                        value={this.state.profession}
                                        class="form-control"
                                        onChange={this.onChange.bind(this)}
                                        required
                                      />
                                      &nbsp;&nbsp;
                                      <div class="input-group-addon">
                                        <strong>Confirmer Mot de Passe</strong>
                                      </div>
                                      <input
                                        type="text"
                                        name="password1"
                                        value={this.state.password1}
                                        class="form-control"
                                        type="text"
                                        onChange={this.onChange.bind(this)}
                                        required
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div class="row form-group">
                                  <div class="col col-md-12">
                                    <div class="input-group">
                                      <div class="input-group-addon">
                                        <strong>
                                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;N°
                                          Contrat&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </strong>
                                      </div>
                                      <input
                                        type="text"
                                        id="input1-group1"
                                        name="codecontrat"
                                        value={
                                          this.state.contrat
                                            ? this.state.contrat.codecontrat
                                            : "0"
                                        }
                                        class="form-control"
                                        onChange={this.onChange.bind(this)}
                                        disabled
                                      />
                                      &nbsp;&nbsp;
                                      <div class="input-group-addon">
                                        <strong>Date Expiration Contrat</strong>
                                      </div>
                                      <input
                                        type="text"
                                        name="dateexperation"
                                        value={
                                          this.state.contrat
                                            ? this.state.contrat.dateexperation
                                            : "0"
                                        }
                                        class="form-control"
                                        disabled
                                        onChange={this.onChange.bind(this)}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div class="row form-group">
                                  <div class="col col-md-12">
                                    <div class="input-group">
                                      <div class="input-group-addon">
                                        <strong>
                                          Chargé de Clientèle&nbsp;
                                        </strong>
                                      </div>
                                      <input
                                        type="text"
                                        id="input1-group1"
                                        name="codecontrat"
                                        value={
                                          this.state.contrat
                                            ? this.state.contrat.bo.nom
                                            : "0"
                                        }
                                        class="form-control"
                                        disabled
                                      />
                                      &nbsp;&nbsp;
                                      <div class="input-group-addon">
                                        <strong>
                                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Etat&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </strong>
                                      </div>
                                      {abonnee.isActivated === false && (
                                        <input
                                          type="text"
                                          id="input1-group1"
                                          name="isActivated"
                                          value="Désactivé"
                                          class="form-control"
                                          onChange={this.onChange.bind(this)}
                                          disabled
                                        />
                                      )}
                                      {abonnee.isActivated === true && (
                                        <input
                                          type="text"
                                          id="input1-group1"
                                          name="isActivated"
                                          value="Activé"
                                          class="form-control"
                                          onChange={this.onChange.bind(this)}
                                          disabled
                                        />
                                      )}
                                    </div>
                                  </div>
                                </div>
                                <br></br>
                                <center>
                                  <button
                                    id="payment-button"
                                    type="submit"
                                    class="btn  btn-bleu "
                                  >
                                    <i class="fa  fa-check fa-lg"></i>&nbsp;
                                    <span id="payment-button-amount">
                                      Valider les Modfications
                                    </span>
                                  </button>
                                </center>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div>
          <Modal
            className="modal-container"
            show={this.state.showModal}
            onHide={this.close}
            animation={true}
            bsSize="small"
          >
            <div class="modal-header">
              <h5 class="modal-title" id="smallmodalLabel">
                Confirmation
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <Modal.Body>
              <p>Modfications Effectuées avec succés</p>
            </Modal.Body>

            <Modal.Footer>
              <button onClick={this.close} class="btn btn-orange">
                Fermer
              </button>
            </Modal.Footer>
          </Modal>
        </div>

        <div>
          <Modal
            className="modal-container"
            show={this.state.showModal1}
            onHide={this.close1}
            animation={true}
            bsSize="small"
          >
            <div class="modal-header">
              <h5 class="modal-title" id="smallmodalLabel">
                Oups!
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <Modal.Body>
              <p>La confirmation de mot de passe est erronée!!</p>
            </Modal.Body>

            <Modal.Footer>
              <button onClick={this.close1} class="btn btn-danger">
                Fermer
              </button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}

MonCompte.propTypes = {
  compte: PropTypes.object.isRequired,
  abonnee: PropTypes.object.isRequired,
  getcomptes: PropTypes.func.isRequired,
  getCompteById: PropTypes.func.isRequired,
  getAbonnee: PropTypes.func.isRequired,
  updateAbonnee: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  compte: state.compte,
  abonnee: state.abonnee
});
export default connect(mapStateToProps, {
  getcomptes,
  getCompteById,
  getAbonnee,
  updateAbonnee
})(MonCompte);
