import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Modal, Button } from "react-bootstrap";
import {
  getcomptes,
  getCompteById,
  getCartesBancaires,
  getCarteByIdCarte,
  desactiverCarteBancaire,
  activerCarteBancaire,
  getAbonnee
} from "../../actions/projectActions";
class ListeCarteBancaire extends Component {
  componentDidMount() {
    this.props.getAbonnee();
  }
  constructor() {
    super();
    this.onClick = this.ClickDetail.bind(this);
    this.onChange = this.ClickSelect.bind(this);
    this.onClick = this.ActiverCarte.bind(this);
    this.onClick = this.DesactiverCarte.bind(this);
    this.state = {
      showModal: false,
      showModal1: false
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.open1 = this.open1.bind(this);
    this.close1 = this.close1.bind(this);
  }
  ClickDetail = e => {
    e.preventDefault();
    this.props.getCarteByIdCarte(e.target.value, this.props.history);
  };
  ClickSelect = e => {
    e.preventDefault();
    this.props.getCartesBancaires(e.target.value, this.props.history);
  };

  ActiverCarte = e => {
    e.preventDefault();
    const { cartebancaire } = this.props.cartebancaire;
    this.props.activerCarteBancaire(cartebancaire.idCarte, this.props.history);
    this.props.getCartesBancaires(cartebancaire.idCarte, this.props.history);
    this.close1();
  };

  DesactiverCarte = e => {
    e.preventDefault();
    const { cartebancaire } = this.props.cartebancaire;
    this.props.desactiverCarteBancaire(
      cartebancaire.idCarte,
      this.props.history
    );
    this.props.getCartesBancaires(cartebancaire.idCarte, this.props.history);
    this.close();
  };

  open = e => {
    this.setState({ showModal: true });
    this.props.getCarteByIdCarte(e.target.value, this.props.history);
  };

  close() {
    this.setState({ showModal: false });
  }

  open1 = e => {
    this.setState({ showModal1: true });
    this.props.getCarteByIdCarte(e.target.value, this.props.history);
  };

  close1() {
    this.setState({ showModal1: false });
  }

  render() {
    const { abonnee } = this.props.abonnee;
    const code = abonnee.contrat ? abonnee.contrat.codecontrat : "0";
    this.props.getcomptes(code);
    const { comptes } = this.props.compte;
    const { cartesbancaires } = this.props.cartebancaire;
    const { cartebancaire } = this.props.cartebancaire;

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
                <li class="active">
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
                <li>
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
                    <i class="fa fa-power -off"></i>Logout
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
                        <a href="#">Mes Cartes Bancaires</a>
                      </li>
                      <li class="active">Liste</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="content">
          <div class="animated fadeIn">
            <div class="row">
              <div class="col-md-12">
                <div class="card">
                  <div class="card-header">
                    <strong class="card-title mb-3">Choix du Compte</strong>
                  </div>
                  <div class="card-body">
                    <div class="mx-auto d-block">
                      <h5 class="text-sm-center mt-2 mb-1">
                        <div class="row form-group">
                          <div class="col col-md-3">
                            <label for="select" class=" form-control-label">
                              Veuillez Choisir un numéro de Compte:
                            </label>
                          </div>
                          <div class="col-12 col-md-9">
                            <select
                              name="select"
                              id="select"
                              class="form-control"
                              onChange={this.ClickSelect}
                            >
                              <option value="0">Numéro de Compte</option>
                              {comptes.map(compte => (
                                <option value={compte.idCompte}>
                                  {compte.idCompte}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {cartesbancaires.length !== 0 && (
            <div class="animated fadeIn">
              <div class="row">
                <div class="col-lg-12">
                  <div class="card">
                    <div class="card-header">
                      <strong class="card-title">
                        Carte Associée à ce Compte
                      </strong>
                    </div>
                    <div class="table-stats order-table ov-h">
                      <table class="table ">
                        <thead>
                          <tr>
                            <th>Numéro de Carte Bancaire</th>
                            <th>Date d'Expiration</th>
                            <th>Montant</th>
                            <th>PIN</th>
                            <th>Etat de la Carte</th>
                            <th>
                              <center>Action</center>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr key={cartesbancaires.idCarte}>
                            <td>{cartesbancaires.idCarte}</td>
                            <td>{cartesbancaires.dateExperation}</td>
                            <td>{cartesbancaires.montant}</td>
                            <td>{cartesbancaires.pin}</td>

                            {cartesbancaires.etat === "active" && (
                              <td>Activée</td>
                            )}
                            {cartesbancaires.etat === "desactiver" && (
                              <td>Désactivée</td>
                            )}
                            <td>
                              <button
                                type="button"
                                class="btn btn-secondary"
                                data-toggle="modal"
                                data-target="#mediumModal"
                                onClick={this.ClickDetail}
                                value={cartesbancaires.idCarte}
                              >
                                <i class="fa fa-lightbulb-o"></i>&nbsp; Détail
                              </button>
                              &nbsp;&nbsp;
                              {cartesbancaires.etat === "active" && (
                                <button
                                  type="button"
                                  class="btn btn-orange "
                                  onClick={this.open}
                                  value={cartesbancaires.idCarte}
                                >
                                  <i class="fa fa-star"></i>&nbsp; Désactiver
                                  Carte
                                </button>
                              )}
                              {cartesbancaires.etat === "desactiver" && (
                                <button
                                  type="button"
                                  class="btn btn-orange "
                                  onClick={this.open1}
                                  value={cartesbancaires.idCarte}
                                >
                                  <i class="fa fa-star"></i>&nbsp; Activer
                                </button>
                              )}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         
          )}

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
                    Détails votre Carte
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
                  <table className="table table-striped table-bordered">
                    <tbody key={cartebancaire.idCarte}>
                      <tr>
                        <th>Numéro de Carte Bancaire</th>
                        <td>{cartebancaire.idCarte}</td>
                      </tr>
                      <tr>
                        <th>Date Opération</th>
                        <td>{cartebancaire.dateExperation}</td>
                      </tr>
                      <tr>
                        <th>Montant</th>
                        <td>{cartebancaire.montant}</td>
                      </tr>
                      <tr>
                        <th>Numéro de Compte</th>
                        <td>
                          {cartebancaire.compte
                            ? cartebancaire.compte.idCompte
                            : "0"}
                        </td>
                      </tr>
                      <tr>
                        <th>PIN</th>
                        <td>{cartebancaire.pin}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Fermer
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
                  Changer l'Etat de la Carte
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
                <p>Etes-vous sûr de vouloir désactiver votre carte bancaire?</p>
              </Modal.Body>

              <Modal.Footer>
                <button onClick={this.DesactiverCarte} class="btn btn-danger">
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
                  Changer l'Etat de la Carte
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
                <p>Voulez-vous activer votre carte bancaire?</p>
              </Modal.Body>

              <Modal.Footer>
                <button onClick={this.ActiverCarte} class="btn btn-danger">
                  OUI
                </button>
                <button onClick={this.close1} class="btn btn-secondary">
                  NON
                </button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

ListeCarteBancaire.propTypes = {
  compte: PropTypes.object.isRequired,
  getcomptes: PropTypes.func.isRequired,
  getCompteById: PropTypes.func.isRequired,
  getCartesBancaires: PropTypes.func.isRequired,
  cartebancaire: PropTypes.object.isRequired,
  getCarteByIdCarte: PropTypes.func.isRequired,
  desactiverCarteBancaire: PropTypes.func.isRequired,
  activerCarteBancaire: PropTypes.func.isRequired,
  getAbonnee: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  compte: state.compte,
  cartebancaire: state.cartebancaire,
  abonnee: state.abonnee
});
export default connect(mapStateToProps, {
  getcomptes,
  getCompteById,
  getCartesBancaires,
  getCarteByIdCarte,
  desactiverCarteBancaire,
  activerCarteBancaire,
  getAbonnee
})(ListeCarteBancaire);
