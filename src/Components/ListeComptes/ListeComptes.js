import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  getcomptes,
  getCompteById,
  getOperations,
  getAbonnee
} from "../../actions/projectActions";
import { Modal, Button } from "react-bootstrap";
class ListeComptes extends Component {
  componentDidMount() {
    this.props.getAbonnee();
  }
  constructor() {
    super();
    this.onClick = this.ClickDetail.bind(this);
    this.state = {
      showModal: false
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }
  ClickDetail = e => {
    e.preventDefault();
    this.props.getCompteById(e.target.value, this.props.history);
    const compte = this.props.compte.compte;
  };
  open = e => {
    this.setState({ showModal: true });
    //this.props.getDemandeById(e.target.value, this.props.history);
  };

  close() {
    this.setState({ showModal: false });
  }
  render() {
    const { comptes } = this.props.compte;
    const { compte } = this.props.compte;
    const { abonnee } = this.props.abonnee;
    const bo = abonnee.contrat ? abonnee.contrat.bo : "0";
    const code = abonnee.contrat ? abonnee.contrat.codecontrat : "0";
    this.props.getcomptes(code);

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
                <li class="active">
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
                        <a href="#">Mes Comptes</a>
                      </li>
                      <li class="active">Liste</li>
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
                    <div class="col-lg-8">
                      <div class="card">
                        <div class="card-header">
                          <strong class="card-title">
                            {" "}
                            <i class="fa fa-folder fa-lg"></i>&nbsp;&nbsp;Mes
                            Comptes
                          </strong>
                        </div>
                        <div class="table-stats order-table ov-h">
                          <table class="table ">
                            <thead>
                              <tr>
                                <th>Numéro de Compte</th>
                                <th>Date de Création</th>
                                <th>Solde Actuel</th>
                                <th>
                                  Action&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {comptes.map(compte => (
                                <tr key={compte.idCompte}>
                                  <td>{compte.idCompte}</td>
                                  <td>{compte.dateCreation}</td>
                                  <td>{compte.solde}</td>
                                  <td>
                                    <button
                                      type="button"
                                      class="btn btn-orange"
                                      data-toggle="modal"
                                      data-target="#mediumModal"
                                      onClick={this.ClickDetail}
                                      value={compte.idCompte}
                                    >
                                      <i class="fa fa-lightbulb-o"></i>
                                      &nbsp;&nbsp;&nbsp;
                                      Détail&nbsp;&nbsp;&nbsp;
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div class="row ">
                      <div class="col-lg-12">
                        <div class="card">
                          <div class="card-header">
                            <strong class="card-title">
                              <i class="fa fa-info fa-lg"></i>{" "}
                              &nbsp;&nbsp;Joindre mon
                              Conseiller&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </strong>
                          </div>
                          <table class="table ">
                            <tbody>
                              {" "}
                              <tr>
                                <td>
                                  <i class="fa fa-user fa-lg"></i>
                                </td>
                                <td>
                                  {bo.nom} &nbsp;
                                  {bo.prenom}
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="fa fa-envelope fa-lg"></i>
                                </td>
                                <td>{bo.email}</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="fa fa-phone fa-lg"></i>
                                </td>
                                <td>0{bo.numTel}</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="fa  fa-building-o fa-lg"></i>
                                </td>
                                <td>05-22156895</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="fa fa-bookmark-o fa-lg"></i>
                                </td>
                                <td>
                                  Disponible du Lundi au Vendredi
                                  <br /> De 8h à 16h
                                </td>
                              </tr>
                            </tbody>
                          </table>
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
                  Détails sur votre Compte
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
                  <tbody key={compte.idCompte}>
                    <tr>
                      <th>Numéro de Compte Bancaire</th>
                      <td>{compte.idCompte}</td>
                    </tr>
                    <tr>
                      <th>Date de Création</th>
                      <td>{compte.dateCreation}</td>
                    </tr>
                    <tr>
                      <th>Montant</th>
                      <td>{compte.solde}</td>
                    </tr>
                    <tr>
                      <th>Numéro de Contrat</th>
                      <td>
                        {abonnee.contrat ? abonnee.contrat.codecontrat : "0"}
                      </td>
                    </tr>
                    <tr>
                      <th>Date d'Expiration de Contrat</th>
                      <td>
                        {abonnee.contrat ? abonnee.contrat.dateexperation : "0"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-orange"
                  data-dismiss="modal"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ListeComptes.propTypes = {
  abonnee: PropTypes.object.isRequired,
  compte: PropTypes.object.isRequired,
  getcomptes: PropTypes.func.isRequired,
  getCompteById: PropTypes.func.isRequired,
  getAbonnee: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  compte: state.compte,
  abonnee: state.abonnee
});
export default connect(mapStateToProps, {
  getcomptes,
  getCompteById,
  getAbonnee
})(ListeComptes);
