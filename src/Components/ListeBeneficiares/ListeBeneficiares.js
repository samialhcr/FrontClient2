import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  getcomptes,
  getCompteById,
  getBeneficiares,
  getBeneficiare,
  deleteBeneficiare,
  addBeneficiare,
  getAbonnee
} from "../../actions/projectActions";
import { Modal, Button } from "react-bootstrap";
class ListeBeneficiares extends Component {
  componentDidMount() {
    this.props.getBeneficiares();
    this.props.getAbonnee();
  }
  componentWillReceiveProps(nextProps) {
    const {
      id,
      nom,
      prenom,
      email,
      cin,
      adresse,
      numTel,
      numCompte,
      abonne
    } = nextProps.beneficiare.beneficiare;
    this.setState({
      id,
      nom,
      prenom,
      email,
      cin,
      adresse,
      numTel,
      numCompte,
      abonne
    });
    // this.state.contrat = nextProps.abonnee.abonnee.contrat;
  }
  constructor() {
    super();

    this.state = {
      id: "",
      nom: "",
      prenom: "",
      email: "",
      cin: "",
      adresse: "",
      numTel: "",
      numCompte: "",
      abonne: "",
      showModal: false,
      showModal1: false
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.open1 = this.open1.bind(this);
    this.close1 = this.close1.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }

  open = e => {
    this.setState({ showModal: true });
    this.props.getBeneficiare(e.target.value);
  };

  close() {
    this.setState({ showModal: false });
  }

  onSubmit(e) {
    e.preventDefault();

    const { abonnee } = this.props.abonnee;
    console.log("ID ABONNE/ ", abonnee);
    const beneficiareAdd = {
      email: this.state.email,
      cin: this.state.cin,
      nom: this.state.nom,
      prenom: this.state.prenom,
      adresse: this.state.adresse,
      numTel: this.state.numTel,
      numCompte: this.state.numCompte,
      abonne: abonnee
    };

    this.props.addBeneficiare(beneficiareAdd, this.props.history);
  }

  onUpdate(e) {
    e.preventDefault();
    const { abonnee } = this.props.abonnee;
    const beneficiareAdd = {
      id: this.state.id,
      email: this.state.email,
      cin: this.state.cin,
      nom: this.state.nom,
      prenom: this.state.prenom,
      adresse: this.state.adresse,
      numTel: this.state.numTel,
      numCompte: this.state.numCompte,
      abonne: abonnee
    };

    this.setState({
      id: "",
      nom: "",
      prenom: "",
      email: "",
      cin: "",
      adresse: "",
      numTel: "",
      numCompte: ""
    });
    this.props.addBeneficiare(beneficiareAdd, this.props.history);

    this.close1();
  }

  SupprimerBeneficiare = e => {
    this.setState({
      id: "",
      nom: "",
      prenom: "",
      email: "",
      cin: "",
      adresse: "",
      numTel: "",
      numCompte: ""
    });
    e.preventDefault();
    this.props.deleteBeneficiare(e.target.value, this.props.history);
    this.close();
  };
  open1 = e => {
    this.setState({ showModal1: true });
    this.props.getBeneficiare(e.target.value);
  };

  close1() {
    this.setState({ showModal1: false });
    this.setState({
      id: "",
      nom: "",
      prenom: "",
      email: "",
      cin: "",
      adresse: "",
      numTel: "",
      numCompte: ""
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { beneficiares } = this.props.beneficiare;
    const { beneficiare } = this.props.beneficiare;
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
                </li>
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
                    <strong>Mes Cartes Bancaires </strong>
                  </a>
                </li>

                <li class="menu-title">Gérer mon Compte</li>
                <li>
                  <a href="/MonCompte">
                    {" "}
                    <i class="menu-icon fa fa-user fa-lg"></i>
                    <strong>Mes Informations </strong>
                  </a>
                </li>
                <li class="active">
                  <a href="/Beneficiares">
                    {" "}
                    <i class="menu-icon fa fa-users fa-lg"></i>
                    <strong>Béneficiares </strong>
                  </a>
                </li>
                <li class="menu-title">Déconnection</li>
                <li>
                  <a href="/Login">
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
                    <i class="fa fa-power -off "></i>Se Déconnecter
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
                      <li class="active">Béneficiares</li>
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
                          <strong class="card-title">Mes Comptes</strong>
                        </div>
                        <div class="table-stats order-table ov-h">
                          <table class="table ">
                            <thead>
                              <tr>
                                <th>Numéro de Compte</th>
                                <th>Nom</th>
                                <th>Prénom</th>
                                <th>CIN</th>
                                <th>E-mail</th>
                                <th>Tél</th>
                                <th>
                                  <center>Action</center>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {beneficiares.map(beneficiare => (
                                <tr key={beneficiare.id}>
                                  <td>{beneficiare.numCompte}</td>
                                  <td>{beneficiare.nom}</td>
                                  <td>{beneficiare.prenom}</td>
                                  <td>{beneficiare.cin}</td>
                                  <td>{beneficiare.email}</td>
                                  <td>{beneficiare.numTel}</td>
                                  <td>
                                    <button
                                      type="button"
                                      class="btn btn-sm btn-info "
                                      onClick={this.open1}
                                      value={beneficiare.id}
                                    >
                                      <i class="fa  fa-check fa-pencil"></i>
                                      &nbsp; Modifier
                                    </button>
                                    &nbsp;&nbsp;
                                    <button
                                      type="button"
                                      class="btn btn-sm btn-danger "
                                      onClick={this.open}
                                      value={beneficiare.id}
                                    >
                                      <i class="fa  fa-check fa-times"></i>
                                      &nbsp; Supprimer
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <center>
                        <button
                          id="payment-button"
                          type="submit"
                          class="btn  btn-orange"
                          data-toggle="modal"
                          data-target="#mediumModal"
                        >
                          <i class="fa  fa-plus fa-lg"></i>&nbsp;
                          <span id="payment-button-amount">
                            Ajouter un Béneficiare
                          </span>
                        </button>
                      </center>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
</div>
        <div
          class="modal fade"
          id="mediumModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="mediumModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="mediumModalLabel">
                  Ajouter un Béneficiare
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
              <div class="modal-body">
                <div class="content">
                  <div class="animated fadeIn">
                    <div class="row">
                      <div class="col-xs-12 col-sm-6">
                        <div class="form-group">
                          <label class=" form-control-label">Nom</label>
                          <div class="input-group">
                            <div class="input-group-addon">
                              <i class="fa fa-user"></i>
                            </div>
                            <input
                              class="form-control"
                              type="text"
                              name="nom"
                              value={this.state.nom}
                              onChange={this.onChange.bind(this)}
                              required
                            />
                          </div>
                        </div>

                        <div class="form-group">
                          <label class=" form-control-label">C.I.N</label>
                          <div class="input-group">
                            <div class="input-group-addon">
                              <i class="fa fa-user"></i>
                            </div>
                            <input
                              class="form-control"
                              type="text"
                              name="cin"
                              value={this.state.cin}
                              onChange={this.onChange.bind(this)}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-xs-12 col-sm-6">
                        <div class="form-group">
                          <label class=" form-control-label">Prénom</label>
                          <div class="input-group">
                            <div class="input-group-addon">
                              <i class="fa fa-user"></i>
                            </div>
                            <input
                              class="form-control"
                              type="text"
                              name="prenom"
                              value={this.state.prenom}
                              onChange={this.onChange.bind(this)}
                              required
                            />
                          </div>
                        </div>

                        <div class="form-group">
                          <label class=" form-control-label">E-mail</label>
                          <div class="input-group">
                            <div class="input-group-addon">
                              <i class="fa fa-envelope"></i>
                            </div>
                            <input
                              class="form-control"
                              type="email"
                              name="email"
                              value={this.state.email}
                              onChange={this.onChange.bind(this)}
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div class="col-xs-12 col-sm-6">
                        <div class="form-group">
                          <label class=" form-control-label">Télephone</label>
                          <div class="input-group">
                            <div class="input-group-addon">
                              <i class="fa fa-phone"></i>
                            </div>
                            <input
                              class="form-control"
                              type="number"
                              name="numTel"
                              value={this.state.numTel}
                              onChange={this.onChange.bind(this)}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-xs-12 col-sm-6">
                        <div class="form-group">
                          <label class=" form-control-label">
                            Numéro de Compte
                          </label>
                          <div class="input-group">
                            <div class="input-group-addon">
                              <i class="fa fa-credit-card"></i>
                            </div>
                            <input
                              class="form-control"
                              type="text"
                              name="numCompte"
                              value={this.state.numCompte}
                              onChange={this.onChange.bind(this)}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-xs-12 col-sm-12">
                        <div class="form-group">
                          <label class=" form-control-label">Adresse</label>
                          <div class="input-group">
                            <div class="input-group-addon">
                              <i class="fa fa-building-o"></i>
                            </div>
                            <input
                              class="form-control"
                              type="text"
                              name="adresse"
                              value={this.state.adresse}
                              onChange={this.onChange.bind(this)}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-bleu"
                  data-dismiss="modal"
                  onClick={this.onSubmit}
                  value={beneficiare.abonne ? beneficiare.abonne.id : "0"}
                >
                  Valider
                </button>
                <button
                  type="button"
                  data-dismiss="modal"
                  class="btn btn-secondary"
                >
                  Annuler
                </button>
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
                Suppression du Béneficiare
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
              <p>Etes-vous sûr de vouloir supprimer ce béneficiare?</p>
            </Modal.Body>

            <Modal.Footer>
              <button
                onClick={this.SupprimerBeneficiare}
                class="btn btn-danger"
                value={beneficiare.id}
              >
                OUI
              </button>
              <button onClick={this.close} class="btn btn-secondary">
                NON
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
                Modifier Béneficiare
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
              <div class="content">
                <div class="animated fadeIn">
                  <div class="row">
                    <div class="col-xs-12 col-sm-6">
                      <div class="form-group">
                        <label class=" form-control-label">Nom</label>
                        <div class="input-group">
                          <div class="input-group-addon">
                            <i class="fa fa-user"></i>
                          </div>
                          <input
                            class="form-control"
                            type="text"
                            name="nom"
                            value={this.state.nom}
                            onChange={this.onChange.bind(this)}
                            required
                          />
                          <input
                            type="text"
                            name="id"
                            value={this.state.id}
                            onChange={this.onChange.bind(this)}
                            hidden
                          />
                        </div>
                      </div>

                      <div class="form-group">
                        <label class=" form-control-label">C.I.N</label>
                        <div class="input-group">
                          <div class="input-group-addon">
                            <i class="fa fa-user"></i>
                          </div>
                          <input
                            class="form-control"
                            type="text"
                            name="cin"
                            value={this.state.cin}
                            onChange={this.onChange.bind(this)}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                      <div class="form-group">
                        <label class=" form-control-label">Prénom</label>
                        <div class="input-group">
                          <div class="input-group-addon">
                            <i class="fa fa-user"></i>
                          </div>
                          <input
                            class="form-control"
                            type="text"
                            name="prenom"
                            value={this.state.prenom}
                            onChange={this.onChange.bind(this)}
                            required
                          />
                        </div>
                      </div>

                      <div class="form-group">
                        <label class=" form-control-label">E-mail</label>
                        <div class="input-group">
                          <div class="input-group-addon">
                            <i class="fa fa-envelope"></i>
                          </div>
                          <input
                            class="form-control"
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.onChange.bind(this)}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div class="col-xs-12 col-sm-6">
                      <div class="form-group">
                        <label class=" form-control-label">Télephone</label>
                        <div class="input-group">
                          <div class="input-group-addon">
                            <i class="fa fa-phone"></i>
                          </div>
                          <input
                            class="form-control"
                            type="number"
                            name="numTel"
                            value={this.state.numTel}
                            onChange={this.onChange.bind(this)}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                      <div class="form-group">
                        <label class=" form-control-label">
                          Numéro de Compte
                        </label>
                        <div class="input-group">
                          <div class="input-group-addon">
                            <i class="fa fa-credit-card"></i>
                          </div>
                          <input
                            class="form-control"
                            type="text"
                            name="numCompte"
                            value={this.state.numCompte}
                            onChange={this.onChange.bind(this)}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-xs-12 col-sm-12">
                      <div class="form-group">
                        <label class=" form-control-label">Adresse</label>
                        <div class="input-group">
                          <div class="input-group-addon">
                            <i class="fa fa-building-o"></i>
                          </div>
                          <input
                            class="form-control"
                            type="text"
                            name="adresse"
                            value={this.state.adresse}
                            onChange={this.onChange.bind(this)}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>

            <Modal.Footer>
              <button onClick={this.onUpdate} class="btn btn-danger">
                Valider
              </button>
              <button onClick={this.close1} class="btn btn-secondary">
                Annuler
              </button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}

ListeBeneficiares.propTypes = {
  compte: PropTypes.object.isRequired,
  abonnee: PropTypes.object.isRequired,
  getcomptes: PropTypes.func.isRequired,
  getCompteById: PropTypes.func.isRequired,
  getBeneficiares: PropTypes.func.isRequired,
  getBeneficiare: PropTypes.func.isRequired,
  beneficiare: PropTypes.object.isRequired,
  deleteBeneficiare: PropTypes.func.isRequired,
  addBeneficiare: PropTypes.func.isRequired,
  getAbonnee: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  compte: state.compte,
  beneficiare: state.beneficiare,
  abonnee: state.abonnee
});
export default connect(mapStateToProps, {
  getcomptes,
  getCompteById,
  getBeneficiares,
  getBeneficiare,
  deleteBeneficiare,
  addBeneficiare,
  getAbonnee
})(ListeBeneficiares);
