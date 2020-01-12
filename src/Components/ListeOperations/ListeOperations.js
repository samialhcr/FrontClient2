import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  getcomptes,
  getCompteById,
  getVirements,
  getAbonnee,
  getBeneficiare,
  getVirementsByType,
  getBeneficiares,
  getTypeVirementBeneficiare,
  getVirementsById
} from "../../actions/projectActions";
import { Modal, Button } from "react-bootstrap";
class ListeOperations extends Component {
  componentDidMount() {
    this.props.getAbonnee();
    this.props.getBeneficiares();
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
    this.props.getVirementsById(e.target.value, this.props.history);
  };

  ClickSelect = e => {
    e.preventDefault();
    this.props.getVirements(e.target.value, this.props.history);
  };

  ClickSelectType = e => {
    e.preventDefault();
    this.props.getVirementsByType(e.target.value, this.props.history);
  };

  open = e => {
    this.setState({ showModal: true });
    //this.props.getDemandeById(e.target.value, this.props.history);
  };

  close() {
    this.setState({ showModal: false });
  }
  render() {
    const { abonnee } = this.props.abonnee;
    const code = abonnee.contrat ? abonnee.contrat.codecontrat : "0";
    this.props.getcomptes(code);
    const { comptes } = this.props.compte;
    const { compte } = this.props.compte;
    const { virements } = this.props.virement;
    console.log("Taill", virements.length);
    const { virement } = this.props.virement;
    const { beneficiares } = this.props.beneficiare;
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
                <li class="active">
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
                        <a href="#">Mes Opérations</a>
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
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-header">
                  <strong class="card-title">
                    {" "}
                    <i class="fa fa-gears fa-lg"></i>&nbsp;&nbsp;Transactions
                  </strong>
                </div>
                <div class="card-body">
                  <div class="default-tab">
                    <nav>
                      <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <a
                          class="nav-item nav-link active"
                          id="nav-home-tab"
                          data-toggle="tab"
                          href="#nav-home"
                          role="tab"
                          aria-controls="nav-home"
                          aria-selected="true"
                        >
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Transactions Vers mes
                          Comptes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </a>
                        <a
                          class="nav-item nav-link"
                          id="nav-profile-tab"
                          data-toggle="tab"
                          href="#nav-profile"
                          role="tab"
                          aria-controls="nav-profile"
                          aria-selected="false"
                        >
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Transactions Vers mes
                          Béneficiares&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </a>
                      </div>
                    </nav>
                    <div class="tab-content pl-3 pt-2" id="nav-tabContent">
                      <div
                        class="tab-pane fade show active"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                      >
                        <br />

                        <div class="animated fadeIn">
                          <div class="row">
                            <div class="col-md-6">
                              <div class="card-body">
                                <div class="mx-auto d-block">
                                  <h5 class="text-sm-center mt-2 mb-1">
                                    <div class="row form-group">
                                      <label
                                        for="select"
                                        class=" form-control-label"
                                      >
                                        &nbsp; &nbsp; Numéro de Compte :
                                      </label>

                                      <div class="col-8 col-md-9">
                                        <select
                                          name="select"
                                          id="select"
                                          class="form-control"
                                          onChange={this.ClickSelect}
                                        >
                                          <option value="0">
                                            Numéro de Compte
                                          </option>
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
                        <div class="animated fadeIn">
                          <div class="row">
                            <div class="col-lg-12">
                              <div class="card">
                                <div class="table-stats order-table ov-h">
                                  <table class="table ">
                                    <thead>
                                      <tr>
                                        <th>Numéro d'Opération</th>
                                        <th>Date d'Opération</th>
                                        <th>Compte Béneficiare</th>
                                        <th>Montant</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {virements.map(
                                        virement =>
                                          virement.type === "cc" && (
                                            <tr key={compte.idperation}>
                                              <td>{virement.idperation}</td>
                                              <td>{virement.dateoperation}</td>
                                              <td>
                                                {virement.id_compte_beneficiare}
                                              </td>
                                              <td>{virement.montant}</td>
                                              <td>
                                                <button
                                                  type="button"
                                                  class="btn btn-orange "
                                                  data-toggle="modal"
                                                  data-target="#mediumModal"
                                                  onClick={this.ClickDetail}
                                                  value={virement.idperation}
                                                >
                                                  Détail
                                                </button>
                                              </td>
                                            </tr>
                                          )
                                      )}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="nav-profile"
                        role="tabpanel"
                        aria-labelledby="nav-profile-tab"
                      >
                        <br />
                        <div class="animated fadeIn">
                          <div class="row">
                            <div class="col-md-6">
                              <div class="card-body">
                                <div class="mx-auto d-block">
                                  <h5 class="text-sm-center mt-2 mb-1">
                                    <div class="row form-group">
                                      <label
                                        for="select"
                                        class=" form-control-label"
                                      >
                                        &nbsp; &nbsp; Numéro de Compte :
                                      </label>

                                      <div class="col-8 col-md-9">
                                        <select
                                          name="select"
                                          id="select"
                                          class="form-control"
                                          onChange={this.ClickSelect}
                                        >
                                          <option value="0">
                                            Numéro de Compte
                                          </option>
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
                        <div class="animated fadeIn">
                          <div class="row">
                            <div class="col-lg-12">
                              <div class="card">
                                <div class="table-stats order-table ov-h">
                                  <table class="table ">
                                    <thead>
                                      <tr>
                                        <th>Numéro d'Opération</th>
                                        <th>Date d'Opération</th>
                                        <th>Compte Béneficiare</th>
                                        <th>Montant</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {virements.map(
                                        virement =>
                                          virement.type === "cb" && (
                                            <tr key={compte.idperation}>
                                              <td>{virement.idperation}</td>
                                              <td>{virement.dateoperation}</td>
                                              <td>
                                                {virement.id_compte_beneficiare}
                                              </td>
                                              <td>{virement.montant}</td>
                                              <td>
                                                <button
                                                  type="button"
                                                  class="btn btn-orange"
                                                  data-toggle="modal"
                                                  data-target="#mediumModal"
                                                  onClick={this.ClickDetail}
                                                  value={virement.idperation}
                                                >
                                                  Détail
                                                </button>
                                              </td>
                                            </tr>
                                          )
                                      )}
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
                  Détails sur l'Opération
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
                  <tbody key={virement.idperation}>
                    <tr>
                      <th>Numéro d'Opération</th>
                      <td>{virement.idperation}</td>
                    </tr>
                    <tr>
                      <th>Date Opération</th>
                      <td>{virement.dateoperation}</td>
                    </tr>
                    <tr>
                      <th>Mon Compte </th>
                      <td>
                        {virement.compte_abonne
                          ? virement.compte_abonne.idCompte
                          : "0"}
                      </td>
                    </tr>
                    <tr>
                      <th>Compte Béneficiare</th>
                      <td>{virement.id_compte_beneficiare}</td>
                    </tr>
                    <tr>
                      <th>Montant</th>
                      <td>{virement.montant}</td>
                    </tr>
                    <tr>
                      <th>Type Opération</th>
                      {virement.type === "cc" && <td>Vers Mes Comptes</td>}
                      {virement.type === "cb" && <td>Vers Mes Comptes</td>}
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

ListeOperations.propTypes = {
  compte: PropTypes.object.isRequired,
  abonnee: PropTypes.object.isRequired,
  virement: PropTypes.object.isRequired,
  getcomptes: PropTypes.func.isRequired,
  getCompteById: PropTypes.func.isRequired,
  getVirements: PropTypes.func.isRequired,
  getAbonnee: PropTypes.func.isRequired,
  getVirementsByType: PropTypes.func.isRequired,
  getBeneficiares: PropTypes.func.isRequired,
  getBeneficiare: PropTypes.func.isRequired,
  beneficiare: PropTypes.object.isRequired,
  getTypeVirementBeneficiare: PropTypes.func.isRequired,
  getVirementsById: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  compte: state.compte,
  virement: state.virement,
  abonnee: state.abonnee,
  beneficiare: state.beneficiare
});
export default connect(mapStateToProps, {
  getcomptes,
  getCompteById,
  getVirements,
  getAbonnee,
  getBeneficiares,
  getBeneficiare,
  getVirementsByType,
  getTypeVirementBeneficiare,
  getVirementsById
})(ListeOperations);
