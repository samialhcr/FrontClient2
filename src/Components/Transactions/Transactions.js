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
  addTransaction,
  addTransactionBeneficiare
} from "../../actions/projectActions";
import { Modal, Button } from "react-bootstrap";
class Transactions extends Component {
  componentDidMount() {
    this.props.getAbonnee();
    this.props.getBeneficiares();
  }
  constructor() {
    super();
    this.onClick = this.ClickDetail.bind(this);

    this.state = {
      montant: "",
      id_compte_beneficiare: "",
      compte_abonne: {},
      type: "",
      showModal: false,
      showModal1: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmitCompte = this.onSubmitCompte.bind(this);
    this.onSubmitBeneficiare = this.onSubmitBeneficiare.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.open1 = this.open1.bind(this);
    this.close1 = this.close1.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmitCompte(e) {
    e.preventDefault();

    const transactionB = {
      montant: this.state.montant,
      id_compte_beneficiare: this.state.id_compte_beneficiare,
      compte_abonne: JSON.parse(this.state.compte_abonne),
      type: "cc"
    };
    console.log("Transaction B :", transactionB);
    if (transactionB.compte_abonne.solde < transactionB.montant) {
      this.open();
    } else {
      this.props.addTransaction(transactionB, this.props.history);
      this.open1();
    }
  }

  onSubmitBeneficiare(e) {
    e.preventDefault();

    const transaction = {
      montant: this.state.montant,
      id_compte_beneficiare: this.state.id_compte_beneficiare,
      compte_abonne: JSON.parse(this.state.compte_abonne),
      type: "cb"
    };

    console.log("Transaction :", transaction);
    if (transaction.compte_abonne.solde < transaction.montant) {
      this.open();
    } else {
      this.props.addTransactionBeneficiare(transaction, this.props.history);
      this.open1();
    }
  }

  ClickDetail = e => {
    e.preventDefault();
    this.props.getCompteById(e.target.value, this.props.history);
    const compte = this.props.compte.compte;
  };

  ClickSelect = e => {
    e.preventDefault();
    this.props.getVirements(e.target.value, this.props.history);
  };

  ClickSelectType = e => {
    e.preventDefault();
    this.props.getVirementsByType(e.target.value, this.props.history);
  };

  ClickSelectAddTransaction = e => {
    e.preventDefault();
    if (e.target.value === "cc") {
      /* const { abonnee } = this.props.abonnee;
      const code = abonnee.contrat ? abonnee.contrat.codecontrat : "0";
      this.props.getcomptes(code); */
    }
    if (e.target.value === "cb") {
      const { abonnee } = this.props.abonnee;
      const code = abonnee.contrat ? abonnee.contrat.codecontrat : "0";
      this.props.getcomptes(0);
      this.props.getTypeVirementBeneficiare();
    }
  };

  open = e => {
    this.setState({ showModal: true });
    //this.props.getDemandeById(e.target.value, this.props.history);
  };

  close() {
    this.setState({ showModal: false });
  }

  open1 = e => {
    this.setState({ showModal1: true });
    //this.props.getDemandeById(e.target.value, this.props.history);
  };

  close1() {
    this.setState({ showModal1: false });
  }
  render() {
    const { abonnee } = this.props.abonnee;
    const code = abonnee.contrat ? abonnee.contrat.codecontrat : "0";
    this.props.getcomptes(code);
    //this.props.getBeneficiares();

    const { comptes } = this.props.compte;
    const { compte } = this.props.compte;
    const { virements } = this.props.virement;
    const { virement } = this.props.virement;
    const { beneficiares } = this.props.beneficiare;
    const typeBeneficiare = this.props.virement.type;
    const comptes_select = this.props.compte.comptes;
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
                <li class="active">
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
                      <li class="active">Nouvelle</li>
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
                    <i class="fa fa-plus fa-lg"></i>&nbsp;&nbsp;Nouvelle
                    Opération
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
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Opération Vers un Compte
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Opération Vers un
                          Béneficiare &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </a>
                      </div>
                    </nav>{" "}
                    <div class="tab-content pl-3 pt-2" id="nav-tabContent">
                      <div
                        class="tab-pane fade show active"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                      >
                        {" "}
                        <form
                          action="#"
                          method="post"
                          class="form-horizontal"
                          onSubmit={this.onSubmitCompte}
                        >
                          {" "}
                          <br />
                          <center>
                            <div class="row">
                              <div class="col-xs-6 col-sm-6">
                                <div class="card-body card-block">
                                  <div class="form-group">
                                    <label class=" form-control-label">
                                      Compte Retrait
                                    </label>
                                    <div class="input-group">
                                      <div class="input-group-addon">
                                        <i class="fa fa-credit-card"></i>
                                      </div>
                                      <select
                                        name="compte_abonne"
                                        id="select"
                                        class="form-control"
                                        required
                                        onChange={this.onChange.bind(this)}
                                      >
                                        <option>
                                          Numéro de Compte Retrait
                                        </option>
                                        {comptes.map(compte => (
                                          <option
                                            value={JSON.stringify(compte)}
                                            key={compte.idCompte}
                                          >
                                            {compte.idCompte}
                                          </option>
                                        ))}
                                      </select>
                                    </div>
                                  </div>
                                  <div class="form-group">
                                    <label class=" form-control-label">
                                      Montant
                                    </label>
                                    <div class="input-group">
                                      <div class="input-group-addon">
                                        <i class="fa fa-dollar"></i>
                                      </div>
                                      <input
                                        class="form-control"
                                        type="number"
                                        name="montant"
                                        value={this.state.montant}
                                        required
                                        onChange={this.onChange.bind(this)}
                                      />
                                    </div>
                                  </div>

                                  <div class="form-group">
                                    <label class=" form-control-label">
                                      Compte Béneficiare
                                    </label>
                                    <div class="input-group">
                                      <div class="input-group-addon">
                                        <i class="fa fa-credit-card"></i>
                                      </div>
                                      <select
                                        name="id_compte_beneficiare"
                                        id="select"
                                        class="form-control"
                                        onChange={this.onChange.bind(this)}
                                        required
                                      >
                                        <option>
                                          Numéro de Compte Béneficiare
                                        </option>
                                        {comptes.map(compte => (
                                          <option>{compte.idCompte}</option>
                                        ))}
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <div class="row">
                                <div class="col-xs-12 col-sm-16">
                                  <img
                                    class="user-avatar rounded-circle"
                                    src="images/about1.png"
                                    width="300px"
                                    height="300px"
                                    alt="User Avatar"
                                  />
                                </div>
                              </div>
                            </div>
                          </center>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <button
                            id="payment-button"
                            type="submit"
                            class="btn  btn-bleu "
                          >
                            <i class="fa  fa-check fa-lg"></i>&nbsp;
                            <span id="payment-button-amount">
                              Valider l'Opération
                            </span>
                          </button>
                        </form>{" "}
                      </div>{" "}
                      <div
                        class="tab-pane fade"
                        id="nav-profile"
                        role="tabpanel"
                        aria-labelledby="nav-profile-tab"
                      >
                        {" "}
                        <form
                          action="#"
                          method="post"
                          class="form-horizontal"
                          onSubmit={this.onSubmitBeneficiare}
                        >
                          <br />
                          <center>
                            <div class="row">
                              <div class="col-xs-6 col-sm-6">
                                <div class="card-body card-block">
                                  <div class="form-group">
                                    <label class=" form-control-label">
                                      Mon Compte
                                    </label>
                                    <div class="input-group">
                                      <div class="input-group-addon">
                                        <i class="fa fa-credit-card"></i>
                                      </div>
                                      <select
                                        name="compte_abonne"
                                        id="select"
                                        class="form-control"
                                        required
                                        onChange={this.onChange.bind(this)}
                                      >
                                        <option>Numéro de Compte </option>
                                        {comptes.map(compte => (
                                          <option
                                            value={JSON.stringify(compte)}
                                            key={compte.idCompte}
                                          >
                                            {compte.idCompte}
                                          </option>
                                        ))}
                                      </select>
                                    </div>
                                  </div>

                                  <div class="form-group">
                                    <label class=" form-control-label">
                                      Montant
                                    </label>
                                    <div class="input-group">
                                      <div class="input-group-addon">
                                        <i class="fa fa-dollar"></i>
                                      </div>
                                      <input
                                        name="montant"
                                        class="form-control"
                                        type="number"
                                        onChange={this.onChange.bind(this)}
                                        required
                                      />
                                    </div>
                                  </div>

                                  <div class="form-group">
                                    <label class=" form-control-label">
                                      Compte Béneficiare
                                    </label>
                                    <div class="input-group">
                                      <div class="input-group-addon">
                                        <i class="fa fa-credit-card"></i>
                                      </div>
                                      <select
                                        name="id_compte_beneficiare"
                                        id="select"
                                        class="form-control"
                                        onChange={this.onChange.bind(this)}
                                        required
                                      >
                                        <option>Compte Béneficiare</option>
                                        {beneficiares.map(beneficiare => (
                                          <option value={beneficiare.numCompte}>
                                            {beneficiare.nom}{" "}
                                            {beneficiare.prenom}
                                          </option>
                                        ))}
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <div class="row">
                                <div class="col-xs-12 col-sm-16">
                                  <img
                                    class="user-avatar rounded-circle"
                                    src="images/about1.png"
                                    width="300px"
                                    height="300px"
                                    alt="User Avatar"
                                  />
                                </div>
                              </div>
                            </div>
                          </center>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <button
                            id="payment-button"
                            type="submit"
                            class="btn  btn-bleu "
                          >
                            <i class="fa  fa-check fa-lg"></i>&nbsp;
                            <span id="payment-button-amount">
                              Valider l'Opération
                            </span>
                          </button>
                        </form>{" "}
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
              <p>Le Montant choisi dépasse le Solde du Compte!!</p>
            </Modal.Body>

            <Modal.Footer>
              <button onClick={this.close} class="btn btn-danger">
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
                Succés
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
              <p>Opération Bien Effectuée</p>
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

Transactions.propTypes = {
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
  addTransaction: PropTypes.func.isRequired,
  addTransactionBeneficiare: PropTypes.func.isRequired
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
  addTransaction,
  addTransactionBeneficiare
})(Transactions);
